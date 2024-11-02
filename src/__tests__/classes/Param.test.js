import Param from "../../classes/Param";

describe('Param', () => {
  let param;

  beforeEach(() => {
    param = new Param();
  });

  describe('Basic Period Operations', () => {
    test('overlaps with earlier period, overrides part of later period', () => {
      param.addRates({
        "2020-01-01.2020-12-31": 0.25,
        "2021-01-01.2021-12-31": 0.20
      });

      param.addRate("2020-06-01.2021-06-30", 0.25);

      expect(param.getRates()).toEqual({
        "2020-01-01.2021-06-30": 0.25,
        "2021-07-01.2021-12-31": 0.20
      });
    });

    test('overlaps with earlier period and completely overrides later period', () => {
      param.addRates({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-12-31": 0.20
      });

      param.addRate("2020-03-01.2021-01-31", 0.25);

      expect(param.getRates()).toEqual({
        "2020-01-01.2021-01-31": 0.25
      });
    });

    test('extends earlier period by one day', () => {
      param.addRate("2020-01-01.2020-06-30", 0.25);
      param.addRate("2020-07-01.2020-07-01", 0.25);

      expect(param.getRates()).toEqual({
        "2020-01-01.2020-07-01": 0.25
      });
    });

    test('reduces earlier period to one day', () => {
      param.addRate("2020-01-01.2020-12-31", 0.25);
      param.addRate("2020-01-02.2020-12-31", 0.20);

      expect(param.getRates()).toEqual({
        "2020-01-01.2020-01-01": 0.25,
        "2020-01-02.2020-12-31": 0.20
      });
    });

    test('completely overrides earlier period but not later one', () => {
      param.addRates({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-12-31": 0.20
      });

      param.addRate("2020-01-01.2020-06-30", 0.22);

      expect(param.getRates()).toEqual({
        "2020-01-01.2020-06-30": 0.22,
        "2020-07-01.2020-12-31": 0.20
      });
    });

    test('overlaps with both earlier and later periods', () => {
      param.addRates({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-12-31": 0.20
      });

      param.addRate("2020-03-01.2020-09-30", 0.22);

      expect(param.getRates()).toEqual({
        "2020-01-01.2020-02-29": 0.25,
        "2020-03-01.2020-09-30": 0.22,
        "2020-10-01.2020-12-31": 0.20
      });
    });

    test('overlaps with no existing periods', () => {
      param.addRates({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-12-31": 0.20
      });

      param.addRate("2021-01-01.2021-06-30", 0.22);

      expect(param.getRates()).toEqual({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-12-31": 0.20,
        "2021-01-01.2021-06-30": 0.22
      });
    });

    test('overlaps earlier, overrides middle, overlaps later', () => {
      param.addRates({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-07-31": 0.22,
        "2020-08-01.2020-12-31": 0.20
      });

      param.addRate("2020-03-01.2020-09-30", 0.25);

      expect(param.getRates()).toEqual({
        "2020-01-01.2020-09-30": 0.25,
        "2020-10-01.2020-12-31": 0.20
      });
    });

    test('getRate returns correct rate for specific date', () => {
      param.addRates({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-12-31": 0.20
      });

      expect(param.getRate("2020-03-15")).toBe(0.25);
      expect(param.getRate("2020-09-15")).toBe(0.20);
      expect(param.getRate("2021-01-01")).toBe(null);
    });

    test('handles invalid date formats', () => {
      expect(() => {
        param.addRate("invalid-date.2020-12-31", 0.25);
      }).toThrow();

      expect(() => {
        param.getRate("invalid-date");
      }).toThrow();
    });

    test('overlaps with earlier period, overrides part of later period', () => {
      param.addRates({
        "2020-01-01.2020-12-31": 0.25,
        "2021-01-01.2021-12-31": 0.20
      });
      
      param.addRate("2020-06-01.2021-06-30", 0.25);
      
      expect(param.getRates()).toEqual({
        "2020-01-01.2021-06-30": 0.25,
        "2021-07-01.2021-12-31": 0.20
      });
    });

    test('overlaps with earlier period and completely overrides later period', () => {
      param.addRates({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-12-31": 0.20
      });
      
      param.addRate("2020-03-01.2021-01-31", 0.25);
      
      expect(param.getRates()).toEqual({
        "2020-01-01.2021-01-31": 0.25
      });
    });
  });

  describe('Edge Cases', () => {
    test('handles single-day periods', () => {
      param.addRate("2020-01-01.2020-01-01", 0.25);
      expect(param.getRates()).toEqual({
        "2020-01-01.2020-01-01": 0.25
      });
    });

    test('merges adjacent single-day periods with same rate', () => {
      param.addRate("2020-01-01.2020-01-01", 0.25);
      param.addRate("2020-01-02.2020-01-02", 0.25);
      expect(param.getRates()).toEqual({
        "2020-01-01.2020-01-02": 0.25
      });
    });

    test('handles periods spanning multiple years', () => {
      param.addRate("2020-01-01.2025-12-31", 0.25);
      param.addRate("2023-01-01.2023-12-31", 0.20);
      expect(param.getRates()).toEqual({
        "2020-01-01.2022-12-31": 0.25,
        "2023-01-01.2023-12-31": 0.20,
        "2024-01-01.2025-12-31": 0.25
      });
    });

    test('handles leap year dates', () => {
      param.addRate("2020-02-28.2020-03-01", 0.25);
      param.addRate("2020-02-29.2020-02-29", 0.20);
      expect(param.getRates()).toEqual({
        "2020-02-28.2020-02-28": 0.25,
        "2020-02-29.2020-02-29": 0.20,
        "2020-03-01.2020-03-01": 0.25
      });
    });
  });

  describe('Complex Scenarios', () => {
    test('handles multiple overlapping periods with different rates', () => {
      param.addRates({
        "2020-01-01.2020-12-31": 0.25,
        "2020-04-01.2020-09-30": 0.20,
        "2020-06-01.2020-07-31": 0.22,
        "2020-08-15.2020-12-31": 0.23
      });
      
      expect(param.getRates()).toEqual({
        "2020-01-01.2020-03-31": 0.25,
        "2020-04-01.2020-05-31": 0.20,
        "2020-06-01.2020-07-31": 0.22,
        "2020-08-01.2020-08-14": 0.20,
        "2020-08-15.2020-12-31": 0.23
      });
    });

    test('handles chain of overlapping periods with same rate', () => {
      param.addRates({
        "2020-01-01.2020-06-30": 0.25,
        "2020-06-15.2020-12-31": 0.25,
        "2020-12-15.2021-06-30": 0.25
      });
      
      expect(param.getRates()).toEqual({
        "2020-01-01.2021-06-30": 0.25
      });
    });

    test('handles multiple rate changes on the same day', () => {
      param.addRate("2020-01-01.2020-12-31", 0.25);
      param.addRate("2020-06-01.2020-06-01", 0.20);
      param.addRate("2020-06-01.2020-06-01", 0.22);
      
      expect(param.getRates()).toEqual({
        "2020-01-01.2020-05-31": 0.25,
        "2020-06-01.2020-06-01": 0.22,
        "2020-06-02.2020-12-31": 0.25
      });
    });

    test('handles nested periods with different rates', () => {
      param.addRates({
        "2020-01-01.2020-12-31": 0.25,
        "2020-03-01.2020-10-31": 0.20,
        "2020-06-01.2020-07-31": 0.22
      });
      
      expect(param.getRates()).toEqual({
        "2020-01-01.2020-02-29": 0.25,
        "2020-03-01.2020-05-31": 0.20,
        "2020-06-01.2020-07-31": 0.22,
        "2020-08-01.2020-10-31": 0.20,
        "2020-11-01.2020-12-31": 0.25
      });
    });
  });

  describe('Date Handling', () => {
    test('handles timezone edge cases', () => {
      const originalDate = new Date();
      // Set local time to 23:00 on Dec 31
      originalDate.setHours(23, 0, 0, 0);
      
      param.addRate("2020-12-31.2021-01-01", 0.25);
      param.addRate("2021-01-01.2021-01-01", 0.20);
      
      expect(param.getRates()).toEqual({
        "2020-12-31.2020-12-31": 0.25,
        "2021-01-01.2021-01-01": 0.20
      });
    });

    test('handles month transitions correctly', () => {
      param.addRates({
        "2020-01-31.2020-02-01": 0.25,
        "2020-02-01.2020-02-01": 0.20
      });
      
      expect(param.getRates()).toEqual({
        "2020-01-31.2020-01-31": 0.25,
        "2020-02-01.2020-02-01": 0.20
      });
    });
  });

  describe('getRate Function', () => {
    test('returns correct rates for various dates', () => {
      param.addRates({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-12-31": 0.20
      });

      expect(param.getRate("2020-01-01")).toBe(0.25);
      expect(param.getRate("2020-06-30")).toBe(0.25);
      expect(param.getRate("2020-07-01")).toBe(0.20);
      expect(param.getRate("2020-12-31")).toBe(0.20);
      expect(param.getRate("2021-01-01")).toBe(null);
      expect(param.getRate("2019-12-31")).toBe(null);
    });

    test('returns correct rate for dates at period boundaries', () => {
      param.addRate("2020-01-01.2020-12-31", 0.25);
      param.addRate("2020-06-01.2020-06-30", 0.20);

      expect(param.getRate("2020-05-31")).toBe(0.25);
      expect(param.getRate("2020-06-01")).toBe(0.20);
      expect(param.getRate("2020-06-30")).toBe(0.20);
      expect(param.getRate("2020-07-01")).toBe(0.25);
    });
  });

  describe('Error Handling', () => {
    test('handles invalid date formats', () => {
      expect(() => param.addRate("invalid.2020-12-31", 0.25)).toThrow();
      expect(() => param.addRate("2020-13-01.2020-12-31", 0.25)).toThrow();
      expect(() => param.getRate("invalid")).toThrow();
    });

    test('handles invalid period ranges', () => {
      expect(() => {
        param.addRate("2020-12-31.2020-01-01", 0.25);
      }).toThrow();
    });
  });

  describe('Rate Merging Logic', () => {
    test('merges adjacent periods with same rate', () => {
      param.addRate("2020-01-01.2020-06-30", 0.25);
      param.addRate("2020-07-01.2020-12-31", 0.25);
      
      expect(param.getRates()).toEqual({
        "2020-01-01.2020-12-31": 0.25
      });
    });

    test('does not merge adjacent periods with different rates', () => {
      param.addRate("2020-01-01.2020-06-30", 0.25);
      param.addRate("2020-07-01.2020-12-31", 0.20);
      
      expect(param.getRates()).toEqual({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-12-31": 0.20
      });
    });

    test('handles complex merging scenarios', () => {
      param.addRates({
        "2020-01-01.2020-03-31": 0.25,
        "2020-04-01.2020-06-30": 0.25,
        "2020-07-01.2020-09-30": 0.20,
        "2020-10-01.2020-12-31": 0.25,
        "2021-01-01.2021-03-31": 0.25
      });
      
      expect(param.getRates()).toEqual({
        "2020-01-01.2020-06-30": 0.25,
        "2020-07-01.2020-09-30": 0.20,
        "2020-10-01.2021-03-31": 0.25
      });
    });
  });
});