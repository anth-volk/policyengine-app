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

    const [variable, setVariable] = useState(variables[0]);
    const [situation, setSituation] = useState(situations[0]);
    const [year, setYear] = useState(years[0]);

    return (
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
      {/* Sentence filler */}
      <SentenceFormatter 
        variable={variable}
        situation={situation}
        year={year}
        setVariable={setVariable}
        setSituation={setSituation}
        setYear={setYear}
      />
      {/* API composition explainer */}
      {/* Code inputs and outputs */}
      </div>
    );
}

export function SentenceFormatter(props) {

  const {
    variable,
    situation,
    year,
    setVariable,
    setSituation,
    setYear
  } = props;

  const dC = useDisplayCategory();

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
      <VariableSelector
        variable={variable}
        setVariable={setVariable}
      />
      <p>for a(n)</p>
      <SituationSelector
        situation={situation}
        setSituation={setSituation}
      />
      <p>in the year</p>
      <YearSelector
        year={year}
        setYear={setYear}
      />
    </div>
  )

}

export function VariableSelector(props) {
  const {
    variable,
    setVariable
  } = props;

  function handleSelect(value) {
    setVariable(value);
  }

  return (
      <Select
        style={{ width:  200 }}
        options={variables}
        value={variable}
        onSelect={handleSelect}
      />
  )
}

export function SituationSelector(props) {
  const {
    situation,
    setSituation
  } = props;

  function handleSelect(value) {
    setSituation(value);
  }

  return (
      <Select
        style={{ width:  200 }}
        options={situations}
        value={situation}
        onSelect={handleSelect}
      />
  )
}

export function YearSelector(props) {
  const {
    year,
    setYear
  } = props;

  function handleSelect(value) {
    setYear(value);
  }

  return (
      <Select
        style={{ width:  200 }}
        options={years}
        value={year}
        onSelect={handleSelect}
      />
  )
}