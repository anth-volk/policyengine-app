import { useCallback, useEffect, useState } from "react";
import { Select } from "antd";
import APIInputBlockWithHighlight from "./APIInputBlockWithHighlight";
import CodeBlock from "../../layout/CodeBlock";
import useCountryId from "../../hooks/useCountryId";
import { wrappedJsonStringify, wrappedResponseJson } from "../../data/wrappedJson";

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
    outputObject[entityPlural][entityToFill] = {
      ...outputObject[entityPlural][entityToFill],
      ...variableAndYear
    };

    setFormattedCode(outputObject);
  }, [variable]);

  useEffect(() => {
    formatCode(variable);
  }, [variable, formatCode]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <APISchemaExplained />
      <SentenceFormatter variable={variable} setVariable={setVariable} />
      <div style={{
        display: "grid",
        flexDirection: "row",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
      }}>
        <APIInputBlockWithHighlight jsonData={formattedCode} setJsonData={setFormattedCode} />
        <APISampleRequest inboundJsonData={formattedCode} />
      </div>
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
      <ol>
        <li>
          The <b>entity group</b>: this is one of 6 categories of people
          groupings, defined by US tax law; all 6 must be present in the
          household object
        </li>
        <li>
          The <b>entity(ies)</b>: each entity group has one or more of these,
          and they can have any name; most entity groups have only one entity
        </li>
        <li>
          The <b>variable(s)</b>: each entity can have one or more variables
          that serve as input to our calculations (if given a defined value) or
          that we will calculate and output (if set to null)
        </li>
        <li>
          The <b>year</b>: each variable must define this as a key, followed by
          the relevant value
        </li>
      </ol>

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
        flexFlow: "wrap",
        alignItems: "center",
        width: "100%",
        columnGap: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      <span>I want to calculate the</span>
      <VariableSelector variable={variable} setVariable={setVariable} />
      <span>for a(n) married couple</span>
      <span>with two children</span> 
      <span>where the head of household made $50,000</span>
      <span>in the year 2025</span>
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
      options={variables}
      value={variable}
      onSelect={handleSelect}
    />
  );
}

export function APISampleRequest(props) {
  const { inboundJsonData } = props;

  const [outputJson, setOutputJson] = useState(null);
  const countryId = useCountryId();

  // Completely reset outputJson when inboundJsonData changes;
  // this will trigger loading template
  useEffect(() => {
    setOutputJson(null);
  }, [inboundJsonData]);

  useEffect(() => {
    const HOUSEHOLD_API_URL = "https://household.api.policyengine.org";

    // This has to be written as a standalone function because
    // useEffect can't handle anonymous async/await
    async function fetchOutput() {
      if (!countryId) {
        setOutputJson(null);
        return;
      }

      const requestObject = {
        household: inboundJsonData,
      };

      try {
        const res = await fetch(
          HOUSEHOLD_API_URL + `/${countryId}/calculate_demo`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: wrappedJsonStringify(requestObject),
          },
        );
        const resJson = await wrappedResponseJson(res);
        const outputJson = resJson.result;
        setOutputJson(wrappedJsonStringify(outputJson, null, 2));
      } catch (err) {
        console.error(err);
        setOutputJson("Error while fetching output; please try again later");
      }
    }

    fetchOutput();
  }, [countryId, inboundJsonData]);

  return (
    <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
      <p>Sample response</p>
      <CodeBlock
        language="json"
        data={outputJson}
        maxHeight="300px"
        isEditable="true"
      />
    </div>
  );
}