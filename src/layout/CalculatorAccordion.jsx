import { HEADER_HEIGHT } from "../style/spacing";

export const STATES = {
  REFORM: "REFORM",
  POPULATION: "POPULATION",
  RESULTS: "RESULTS",
  DEFAULT: "DEFAULT"
};

export function calcGridSettings(state) {
  switch (state) {
    case STATES.REFORM:
      return {
        gridTemplateColumns: "auto 30px",
        gridTemplateRows: "auto 30px",
      };
    case STATES.POPULATION:
      return {
        gridTemplateColumns: "auto 30px",
        gridTemplateRows: "30px auto",
      };
    case STATES.RESULTS:
      return {
        gridTemplateColumns: "30px auto",
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
          <p>REFORM</p>
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