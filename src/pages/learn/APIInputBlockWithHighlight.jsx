import {useState} from "react";
import { JsonEditor } from 'json-edit-react';
import {Checkbox} from "antd";

const tiersAndColors = {
  "entityGroup": "yellow",
  "entity": "orange",
  "variable": "red",
  "year": "green",
};

const entityGroups = [
  "tax_units",
  "spm_units",
  "households",
  "families",
  "marital_units",
  "people",
];

const entities = [
  "tax_unit",
  "spm_unit",
  "household",
  "family",
  "head_marital_unit",
  "person",
  "head_of_household",
  "spouse",
  "child1",
  "child2",
];

const variables = [
  "age",
  "employment_income",
  "eitc",
  "ctc",
  "members"
];

const years = [
  "2025"
];

/**
 * @param {Object} props 
 * @param {String} props.jsonData
 * @param {Function} props.setJsonData
 * @param {Boolean} props.areTiersHighlighted
 */
export default function APIInputBlockWithHighlight(props) {
  const {
    jsonData,
    setJsonData,
  } = props;

  const [areTiersHighlighted, setAreTierHighlighted] = useState(false);

  function handleHighlightTiers() {
    setAreTierHighlighted(!areTiersHighlighted);
  }

  // Custom theme: style function highlights the key if it matches keyToHighlight
  const customTheme = areTiersHighlighted ? {
    styles: {
      property: ({ key, level }) =>
        level === 0 ? {} :
        entityGroups.includes(key) ? { backgroundColor: tiersAndColors.entityGroup } :
        entities.includes(key) ? { backgroundColor: tiersAndColors.entity } :
        variables.includes(key) ? { backgroundColor: tiersAndColors.variable } :
        years.includes(key) ? { backgroundColor: tiersAndColors.year } : {},
    }
  } : {};

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    }}
    >
      <p>Input JSON</p>
      <div style={{
        height: "400px",
        overflowY: "scroll",
        marginBottom: "20px"
      }}
      >
        <JsonEditor
          data={jsonData}
          setData={setJsonData}
          theme={customTheme}
          rootName={"household"}
        />
      </div>
      <Checkbox
        onChange={handleHighlightTiers}
        checked={areTiersHighlighted}
      >
        Highlight tiers
      </Checkbox>
    </div>
  );
}
