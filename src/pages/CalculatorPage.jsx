import { useState } from "react";
import Policy from "../classes/Policy.js";
import Header from "../layout/Header";
import CalculatorPopulation from "./calculator/CalculatorPopulation";
import CalculatorReform from "./calculator/CalculatorReform";
import LeftHandSidebar from "./calculator/LeftHandSidebar";

export const CALC_DISPLAY_MODES = {
  HOUSEHOLD: 'household',
  POLICY: 'policy',
};

export default function CalculatorPage(props) {
  const { mode, metadata } = props;

  const countryId = metadata.countryId;
  const [policy, setPolicy] = useState(new Policy().setDefaultPolicy(countryId));

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
            policy={policy}
            setPolicy={setPolicy}
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
