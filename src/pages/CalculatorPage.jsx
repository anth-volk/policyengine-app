import Header from "../layout/Header";
import CalculatorPopulation from "./calculator/CalculatorPopulation";
import CalculatorReform from "./calculator/CalculatorReform";
import LeftHandSidebar from "./calculator/LeftHandSidebar";

export const CALC_DISPLAY_MODES = {
  HOUSEHOLD: 'household',
  POLICY: 'policy',
};

export default function Calculator(props) {
  const { mode } = props;

  return (
    <>
      <Header />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          paddingTop: "80px",
        }}
      >
        <LeftHandSidebar />
        <div>
          <CalculatorReform 
          />
          <CalculatorPopulation 
          />
          {/*
          <CalculatorSettings />
          <CalculatorResults />
          */}
        </div>
      </div>
    </>
  );
}
