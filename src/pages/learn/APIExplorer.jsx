import {useCallback, useEffect, useState} from "react";
import {Select} from "antd";
import CodeBlock from "../../layout/CodeBlock";
import { json } from "react-router-dom";

const entities = {
  "person": {
    plural: "people"
  },
  "tax_unit": {
    plural: "tax_units"
  },
  "spm_unit": {
    plural: "spm_units"
  },
  "family": {
    plural: "families"
  },
  "household": {
    plural: "households"
  },
  "marital_unit": {
    plural: "marital_units"
  },
}

const memberArray = [
  "head_of_household",
  "spouse",
  "child1",
  "child2"
];

// Look into copying arrays
const sampleHousehold = {
  "people": {
    "head_of_household": {},
    "spouse": {},
    "child1": {},
    "child2": {}
  },
  "tax_units": {
    "tax_unit": {
      members: memberArray
    }
  },
  "spm_units": {
    "spm_unit": {
      members: memberArray
    }
  },
  "households": {
    "household": {
      members: memberArray
    }
  },
  "families": {
    "family": {
      members: memberArray
    }
  },
  "marital_units": {
    "head_marital_unit": {
      members: [
        "head_of_household",
        "spouse"
      ]
    }
  }
};

const variables = [
  {
    label: "Earned Income Tax Credit",
    value: "eitc",
    entity: "tax_unit"
  },
  {
    label: "Child Tax Credit",
    value: "ctc",
    entity: "tax_unit"
  }
];


export default function APIExplorer() {

    const [variable, setVariable] = useState(variables[0]);
    const [formattedCode, setFormattedCode] = useState("");

    const formatCode = useCallback(() =>  {
      let outputObject = sampleHousehold;

      // Create variable-year nested item
      const variableAndYear = {
        [variable.value]: {
          "2025": null
        }
      };

      // Look up correct entity in metadata; change this later
      const entityToFill = variable.entity;
      const entityPlural = entities[entityToFill].plural;

      // Fill entity
      outputObject[entityPlural][entityToFill] = variableAndYear;
      
      const jsonString = JSON.stringify(outputObject, null, 2);
      setFormattedCode(jsonString);
    }, [variable]);

    useEffect(() => {
      formatCode(variable);
    }, [variable, formatCode]);

    return (
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
      {/* Sentence filler */}
      <SentenceFormatter 
        variable={variable}
        setVariable={setVariable}
      />
      {/* API composition explainer */}
      {/* Code inputs and outputs */}
      <CodeBlock
        language="json"
        data={formattedCode}
        maxHeight="300px"
        isEditable="true"
      />
      </div>
    );
}

export function SentenceFormatter(props) {

  const {
    variable,
    setVariable,
  } = props;

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
      <p>married couple with two children</p>
      <p>in the year</p>
      <p>2025</p>
    </div>
  )

}

export function VariableSelector(props) {
  const {
    variable,
    setVariable
  } = props;

  function handleSelect(value) {
    setVariable(variables.filter((variable) => variable.value === value)[0]);
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
