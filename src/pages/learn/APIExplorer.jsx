import { useCallback, useEffect, useState } from "react";
import { Select } from "antd";
import JsonBlockKeyHighlighted from "./JsonBlockKeyHighlighted";

const entities = {
  person: {
    plural: "people",
  },
  tax_unit: {
    plural: "tax_units",
  },
  spm_unit: {
    plural: "spm_units",
  },
  family: {
    plural: "families",
  },
  household: {
    plural: "households",
  },
  marital_unit: {
    plural: "marital_units",
  },
};

const memberArray = ["head_of_household", "spouse", "child1", "child2"];

// Look into copying arrays
const sampleHousehold = {
  people: {
    head_of_household: {
      age: { 2025: 30 },
      employment_income: { 2025: 50000 },
    },
    spouse: {
      age: { 2025: 30 },
      employment_income: { 2025: 50000 },
    },
    child1: {
      age: { 2025: 5 },
    },
    child2: {
      age: { 2025: 5 },
    },
  },
  tax_units: {
    tax_unit: {
      members: memberArray,
    },
  },
  spm_units: {
    spm_unit: {
      members: memberArray,
    },
  },
  households: {
    household: {
      members: memberArray,
    },
  },
  families: {
    family: {
      members: memberArray,
    },
  },
  marital_units: {
    head_marital_unit: {
      members: ["head_of_household", "spouse"],
    },
  },
};

const variables = [
  {
    label: "Earned Income Tax Credit",
    value: "eitc",
    entity: "tax_unit",
  },
  {
    label: "Child Tax Credit",
    value: "ctc",
    entity: "tax_unit",
  },
];

const keysAndColors = [
  { key: "people", color: "yellow" },
  { key: "head_of_household", color: "orange" },
  { key: "spouse", color: "orange" },
  { key: "child1", color: "orange" },
  { key: "child2", color: "orange" },
  { key: "employment_income", color: "red" },
  { key: "age", color: "red" },
  { key: "2025", color: "green" },
]

export default function APIExplorer() {
  const [variable, setVariable] = useState(variables[0]);
  const [formattedCode, setFormattedCode] = useState("");

  const formatCode = useCallback(() => {
    let outputObject = JSON.parse(JSON.stringify(sampleHousehold));

    // Create variable-year nested item
    const variableAndYear = {
      [variable.value]: {
        2025: null,
      },
    };

    // Look up correct entity in metadata; change this later
    const entityToFill = variable.entity;
    const entityPlural = entities[entityToFill].plural;

    // Fill entity
    outputObject[entityPlural][entityToFill] = variableAndYear;

    // const jsonString = JSON.stringify(outputObject, null, 2);
    // setFormattedCode(jsonString);
    setFormattedCode(outputObject);
  }, [variable]);

  useEffect(() => {
    formatCode(variable);
  }, [variable, formatCode]);

  const clippedSample = JSON.parse(JSON.stringify(sampleHousehold));
  delete clippedSample.tax_units;
  delete clippedSample.spm_units;
  delete clippedSample.families;
  delete clippedSample.marital_units;
  delete clippedSample.households;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Sentence filler */}
      {/* API composition explainer */}
      <APISchemaExplained />
      <JsonBlockKeyHighlighted jsonData={clippedSample} setJsonData={setFormattedCode} keysAndColors={keysAndColors}/>
      <SentenceFormatter variable={variable} setVariable={setVariable} />
      {/* Code inputs and outputs */}
      {/*
      <CodeBlock
        language="json"
        data={formattedCode}
        maxHeight="300px"
        isEditable="true"
      />
      */}
    </div>
  );
}

export function APISchemaExplained() {
  return (
    <>
      <h4>API schema, explained</h4>
      <p>
        The core of the PolicyEngine household API is the{" "}
        <b>household object</b>, a custom structure we use to represent
        household taxes and benefits. This is a four-tier nested structure
        composed of the below levels:
      </p>
      {/*Add highlighting to each of these*/}
      <ol>
        <li>
          The <b><span style={{backgroundColor: "yellow"}}>entity group</span></b>: this is one of 6 categories of people
          groupings, defined by US tax law; all 6 must be present in the
          household object
        </li>
        <li>
          The <b><span style={{backgroundColor: "orange"}}>entity(ies)</span></b>: each entity group has one or more of these,
          and they can have any name; most entity groups have only one entity
        </li>
        <li>
          The <b><span style={{backgroundColor: "red"}}>variable(s)</span></b>: each entity can have one or more variables
          that serve as input to our calculations (if given a defined value) or
          that we will calculate and output (if set to null)
        </li>
        <li>
          The <b><span style={{backgroundColor: "green"}}>year</span></b>: each variable must define this as a key, followed by
          the relevant value
        </li>
      </ol>
      <p>
        The sample code snippet below represents one portion of a full household object, highlighting each tier.
      </p>

    </>
  )
}

export function SentenceFormatter(props) {
  const { variable, setVariable } = props;

  return (
    <>
    <h4>Create an example</h4>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <p>I want to calculate the</p>
      <VariableSelector variable={variable} setVariable={setVariable} />
      <p>for a(n)</p>
      <p>married couple with two children</p>
      <p>in the year</p>
      <p>2025</p>
    </div>
    </>
  );
}

export function VariableSelector(props) {
  const { variable, setVariable } = props;

  function handleSelect(value) {
    setVariable(variables.filter((variable) => variable.value === value)[0]);
  }

  return (
    <Select
      style={{ width: 200 }}
      options={variables}
      value={variable}
      onSelect={handleSelect}
    />
  );
}
