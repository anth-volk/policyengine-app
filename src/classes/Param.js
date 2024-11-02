export default class Param {
  constructor(initialRates = {}) {
    this.rates = {};
    this.addRates(initialRates);
  }

  parseDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    // Create date in UTC to avoid timezone issues
    const date = new Date(Date.UTC(year, month - 1, day));
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date format: ${dateStr}`);
    }
    return date;
  }

  stringifyDate(date) {
    // Use UTC methods to avoid timezone issues
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  parsePeriod(periodStr) {
    const [startStr, endStr] = periodStr.split('.');
    if (startStr > endStr) {
      throw new Error(`Invalid period ${periodStr}: start date is after end date`);
    }
    return {
      start: this.parseDate(startStr),
      end: this.parseDate(endStr)
    };
  }

  stringifyPeriod(start, end) {
    return `${this.stringifyDate(start)}.${this.stringifyDate(end)}`;
  }

  periodsOverlap(period1, period2) {
    return period1.start <= period2.end && period1.end >= period2.start;
  }

  mergePeriods() {
    const sortedPeriods = Object.entries(this.rates)
      .map(([periodStr, rate]) => ({
        period: this.parsePeriod(periodStr),
        rate
      }))
      .sort((a, b) => a.period.start - b.period.start);

    const merged = {};
    let currentPeriod = null;
    let currentRate = null;

    sortedPeriods.forEach(({ period, rate }) => {
      if (!currentPeriod) {
        currentPeriod = { ...period };
        currentRate = rate;
        return;
      }

      // Use UTC time for comparison and add one day in milliseconds
      if (currentRate === rate && 
          (currentPeriod.end.getTime() + 86400000 >= period.start.getTime())) {
        currentPeriod.end = new Date(Math.max(currentPeriod.end.getTime(), period.end.getTime()));
      } else {
        merged[this.stringifyPeriod(currentPeriod.start, currentPeriod.end)] = currentRate;
        currentPeriod = { ...period };
        currentRate = rate;
      }
    });

    if (currentPeriod) {
      merged[this.stringifyPeriod(currentPeriod.start, currentPeriod.end)] = currentRate;
    }

    this.rates = merged;
  }

  addRate(periodStr, rate) {
    const newPeriod = this.parsePeriod(periodStr);
    const affectedPeriods = [];

    Object.entries(this.rates).forEach(([existingPeriodStr, existingRate]) => {
      const existingPeriod = this.parsePeriod(existingPeriodStr);
      if (this.periodsOverlap(newPeriod, existingPeriod)) {
        affectedPeriods.push({
          periodStr: existingPeriodStr,
          period: existingPeriod,
          rate: existingRate
        });
      }
    });

    affectedPeriods.forEach(({ periodStr }) => {
      delete this.rates[periodStr];
    });

    this.rates[periodStr] = rate;

    affectedPeriods.forEach(({ period, rate: existingRate }) => {
      if (period.start < newPeriod.start) {
        // Create new Date object in UTC for the day before
        const beforeEnd = new Date(Date.UTC(
          newPeriod.start.getUTCFullYear(),
          newPeriod.start.getUTCMonth(),
          newPeriod.start.getUTCDate() - 1
        ));
        const beforePeriod = this.stringifyPeriod(period.start, beforeEnd);
        this.rates[beforePeriod] = existingRate;
      }

      if (period.end > newPeriod.end) {
        // Create new Date object in UTC for the day after
        const afterStart = new Date(Date.UTC(
          newPeriod.end.getUTCFullYear(),
          newPeriod.end.getUTCMonth(),
          newPeriod.end.getUTCDate() + 1
        ));
        const afterPeriod = this.stringifyPeriod(afterStart, period.end);
        this.rates[afterPeriod] = existingRate;
      }
    });

    this.mergePeriods();
  }

  addRates(rates) {
    Object.entries(rates).forEach(([period, rate]) => {
      this.addRate(period, rate);
    });
  }

  getRate(dateStr) {
    const date = this.parseDate(dateStr);
    
    for (const [periodStr, rate] of Object.entries(this.rates)) {
      const period = this.parsePeriod(periodStr);
      if (date >= period.start && date <= period.end) {
        return rate;
      }
    }
    
    return null;
  }

  getRates() {
    return { ...this.rates };
  }
}
