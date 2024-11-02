import { HEADER_HEIGHT } from "../../style/spacing";

export default function CalculatorPopulation(props) {
  return (
    <div
      style={{
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      <h1>Affected Population</h1>
      <h6>Who does this policy or reform impact?</h6>
    </div>
  );
}
