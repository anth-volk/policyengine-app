import { useEffect, useState } from "react";
import Policy from "../classes/Policy.js";
import Header from "../layout/Header";
import CalculatorPopulation from "./calculator/CalculatorPopulation";
import CalculatorReform from "./calculator/CalculatorReform";
import LeftHandSidebar from "./calculator/LeftHandSidebar";
import { ScrollToTop } from "../PolicyEngine.jsx";

export const CALC_DISPLAY_MODES = {
  HOUSEHOLD: 'household',
  POLICY: 'policy',
};

export default function CalculatorPage(props) {
  const { displayMode, metadata } = props;

  const countryId = metadata.countryId;
  const [policy, setPolicy] = useState(new Policy().setDefaultPolicy(countryId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          display: 'grid',
          // Note: Right column is empty
          gridTemplateColumns: '25% 50% 25%',
          gap: "24px"
        }}
      >
        <LeftHandSidebar />
        <div>
          <CalculatorReform 
            displayMode={displayMode}
            policy={policy}
            setPolicy={setPolicy}
          />
          <CalculatorPopulation 
            displayMode={displayMode}

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
