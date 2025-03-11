import {useState} from "react";
import { JsonEditor } from 'json-edit-react';
import {Checkbox} from "antd";
import style from "../../style";

const tiersAndColors = {
  "entityGroup": {
    backgroundColor: style.colors.BLUE_PRESSED,
    color: style.colors.WHITE
  },
  "entity": {
    backgroundColor: style.colors.BLUE,
    color: style.colors.WHITE
  },
  "variable": {
    backgroundColor: style.colors.BLUE_LIGHT,
    color: style.colors.BLACK
  },
  "year": {
    backgroundColor: style.colors.LIGHT_GRAY,
    color: style.colors.BLACK
  },
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
        entityGroups.includes(key) ? { 
          backgroundColor: tiersAndColors.entityGroup.backgroundColor,
          color: tiersAndColors.entityGroup.color
        } :
        entities.includes(key) ? { 
          backgroundColor: tiersAndColors.entity.backgroundColor,
          color: tiersAndColors.entity.color
        } :
        variables.includes(key) ? { 
          backgroundColor: tiersAndColors.variable.backgroundColor,
          color: tiersAndColors.variable.color
        } :
        years.includes(key) ? { 
          backgroundColor: tiersAndColors.year.backgroundColor,
          color: tiersAndColors.year.color
        } : {},
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
      
      {/* Color key */}
      {areTiersHighlighted && (
        <div style={{ marginTop: "10px", fontSize: "14px" }}>
          <p style={{  marginBottom: "5px" }}>Color key:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ 
                width: "20px", 
                height: "20px", 
                backgroundColor: tiersAndColors.entityGroup.backgroundColor,
                marginRight: "5px" 
              }}></div>
              <span>Entity groups</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ 
                width: "20px", 
                height: "20px", 
                backgroundColor: tiersAndColors.entity.backgroundColor,
                marginRight: "5px" 
              }}></div>
              <span>Entities</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ 
                width: "20px", 
                height: "20px", 
                backgroundColor: tiersAndColors.variable.backgroundColor,
                marginRight: "5px" 
              }}></div>
              <span>Variables</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ 
                width: "20px", 
                height: "20px", 
                backgroundColor: tiersAndColors.year.backgroundColor,
                marginRight: "5px" 
              }}></div>
              <span>Years</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}