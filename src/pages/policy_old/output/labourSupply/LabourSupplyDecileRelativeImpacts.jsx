import { formatPercent } from "../../../../lang/format";
import {
  LabourSupplyDecileIncome,
  LabourSupplyDecileSubstitution,
  LabourSupplyDecileTotal,
} from "./LabourSupplyDecileCharts";

export function LabourSupplyDecileRelativeImpactIncome(props) {
  const { policyLabel, impact, countryId } = props;

  const decileImpact = impact.labour_supply_response;

  const data = decileImpact.decile.relative;

  const incomeChanges = Object.values(data.income).slice(0, 10);

  const title = `${policyLabel}'s income effect-driven relative labor supply impact by decile`;
  const description =
    "This chart shows only the income effect-driven portion of " +
    "the estimated relative change in earnings (as a percentage " +
    "of total earnings) for each disposable income decile.";
  const yAxisTitle = "Relative change";

  const numberFormatter = (value) => {
    return (
      (value >= 0 ? "+" : "") +
      formatPercent(value, countryId, {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1,
      })
    );
  };

  const chart = (
    <LabourSupplyDecileIncome
      title={title}
      incomeChanges={incomeChanges}
      countryId={countryId}
      description={description}
      yAxisTitle={yAxisTitle}
      numberFormatter={numberFormatter}
      yAxisTickFormat=".1%"
    />
  );

  return { chart: chart, csv: () => {} };
}

export function LabourSupplyDecileRelativeImpactSubstitution(props) {
  const { policyLabel, impact, countryId } = props;

  const decileImpact = impact.labour_supply_response;

  const data = decileImpact.decile.relative;

  let substitutionChanges = Object.values(data.substitution).slice(0, 10);
  const title = `${policyLabel}'s substitution effect-driven relative labor supply impact by decile`;
  const description =
    "This chart shows only the substitution effect-driven portion of " +
    "the estimated relative change in earnings (as a percentage " +
    "of total earnings) for each disposable income decile.";
  const yAxisTitle = "Relative change";
  const numberFormatter = (value) => {
    return (
      (value >= 0 ? "+" : "") +
      formatPercent(value, countryId, {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1,
      })
    );
  };

  const chart = (
    <LabourSupplyDecileSubstitution
      title={title}
      substitutionChanges={substitutionChanges}
      countryId={countryId}
      description={description}
      yAxisTitle={yAxisTitle}
      numberFormatter={numberFormatter}
      yAxisTickFormat=".1%"
    />
  );

  return { chart: chart, csv: () => {} };
}

export function LabourSupplyDecileRelativeImpactTotal(props) {
  const { policyLabel, impact, countryId } = props;

  const decileImpact = impact.labour_supply_response;

  const data = decileImpact.decile.relative;

  const incomeChanges = Object.values(data.income).slice(0, 10);
  let substitutionChanges = Object.values(data.substitution).slice(0, 10);
  const overallChange = [];
  for (let i = 0; i < 10; i++) {
    overallChange.push(incomeChanges[i] + substitutionChanges[i]);
  }

  const title = `${policyLabel}'s relative labor supply impact by decile`;
  const description =
    "This chart shows the estimated relative change in earnings (as a " +
    "percentage of total earnings) for each disposable income decile.";
  const yAxisTitle = "Relative change";
  const numberFormatter = (value) => {
    return (
      (value >= 0 ? "+" : "") +
      formatPercent(value, countryId, {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1,
      })
    );
  };

  const chart = (
    <LabourSupplyDecileTotal
      title={title}
      overallChange={overallChange}
      countryId={countryId}
      description={description}
      yAxisTitle={yAxisTitle}
      numberFormatter={numberFormatter}
      yAxisTickFormat=".1%"
    />
  );

  return { chart: chart, csv: () => {} };
}
