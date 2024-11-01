import { HEADER_HEIGHT } from "../style/spacing";
import ReformAccordion from "./ReformAccordion";

export const CALCULATOR_STATES = {
  REFORM: "REFORM",
  POPULATION: "POPULATION",
  RESULTS: "RESULTS",
  DEFAULT: "DEFAULT"
};

export function calcGridSettings(state) {
  switch (state) {
    case CALCULATOR_STATES.REFORM:
      return {
        gridTemplateColumns: "auto 50px",
        gridTemplateRows: "auto 50px",
      };
    case CALCULATOR_STATES.POPULATION:
      return {
        gridTemplateColumns: "auto 50px",
        gridTemplateRows: "50px auto",
      };
    case CALCULATOR_STATES.RESULTS:
      return {
        gridTemplateColumns: "50px auto",
        gridTemplateRows: "1fr 1fr",
      };
    default:
      return {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
      };
  }
}

export default function CalculatorAccordion(props) {
  const { inputState } = props;

  const { gridTemplateColumns, gridTemplateRows } = calcGridSettings(inputState);

  return (
    <>
      {/* Container Div */}
      <div
        style={{
          width: "100vw",
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          display: "grid",
          gridTemplateAreas: `"reform results" "population results"`,
          gridTemplateColumns,
          gridTemplateRows,
        }}
      >
        <div 
          style={{ 
            gridArea: "reform",
          }}
        >
          {<ReformAccordion inputState={inputState} />} 
        </div>
        <div style={{ gridArea: "population", }}>
          <p>POPULATION</p>
        </div>
        <div style={{ gridArea: "results", }}>
          <p>RESULTS</p>
        </div>
    </div>
    </>
  );
}