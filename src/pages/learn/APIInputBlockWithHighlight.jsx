import { JsonEditor } from 'json-edit-react';

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
  "marital_unit",
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
  "ctc"
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
    areTiersHighlighted = false
  } = props;

  // Custom theme: style function highlights the key if it matches keyToHighlight
  const customTheme = areTiersHighlighted ? {
    styles: {
      property: ({ key }) =>
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
      height: "100%"
    }}
    >
      <p>Input JSON</p>
      <JsonEditor
        data={jsonData}
        setData={setJsonData}
        theme={customTheme}
        rootName={"household"}
      />
    </div>
  );
}
