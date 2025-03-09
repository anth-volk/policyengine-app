import {useState} from "react";
import {Select} from "antd";
import useDisplayCategory from "../../hooks/useDisplayCategory";

const variables = [
  {
    label: "Earned Income Tax Credit",
    value: "eitc"
  },
  {
    label: "Child Tax Credit",
    value: "ctc"
  }
];

const situations = [
  {
    label: "individual",
    value: "individual"
  },
  {
    label: "married couple",
    value: "married_couple"
  },
  {
    label: "couple with 2 children",
    value: "couple_2_children"
  },
  {
    label: "single mother of 2",
    value: "single_mother_2_children"
  }
];

const years = [
  {
    label: "2025",
    value: 2025
  },
  {
    label: "2026",
    value: 2026
  }
];

export default function APIExplorer() {


    return (
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
      {/* Sentence filler */}
      <SentenceFormatter />
      {/* API composition explainer */}
      {/* Code inputs and outputs */}
      </div>
    );
}

export function SentenceFormatter() {

  const dC = useDisplayCategory();

  const selectedVariable = useState(variables[0]);
  const selectedSituation = useState(situations[0]);
  const selectedYear = useState(years[0]);

  function handleSubmit() {
    return;
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      width: "100%"
    }}>
      <p>I want to calculate the</p>
      <Select
        style={{ width: dC === "mobile" ? 150 : 200 }}
        options={variables}
        defaultValue={variables[0]}
        onSelect={handleSubmit}
      />
      <p>for a(n)</p>
      <Select
        style={{ width: dC === "mobile" ? 150 : 200 }}
        options={situations}
        defaultValue={situations[0]}
        onSelect={handleSubmit}
      />
      <p>in the year</p>
      <Select
        style={{ width: dC === "mobile" ? 150 : 200 }}
        options={years}
        defaultValue={years[0]}
        onSelect={handleSubmit}
      />
    </div>
  )

}
