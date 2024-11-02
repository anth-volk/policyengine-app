import { useState } from "react";
import style from "../../style";
import { HEADER_HEIGHT } from "../../style/spacing";
import { CALC_DISPLAY_MODES } from "../CalculatorPage";
import Button from "../../controls/Button";
import { Radio, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const INPUT_MODES = {
  CURRENT_LAW: 'current-law',
  FEATURED_REFORM: 'featured-reform',
  CUSTOM_REFORM: 'custom-reform',
};

export default function CalculatorReform(props) {

  const { displayMode } = props;

  const defaultInputMode = displayMode === CALC_DISPLAY_MODES.HOUSEHOLD ? INPUT_MODES.CURRENT_LAW : CALC_DISPLAY_MODES.POLICY ? INPUT_MODES.DEFINED_REFORM : INPUT_MODES.CURRENT_LAW;

  const [inputMode, setInputMode] = useState(defaultInputMode);

  return (
    <div
      style={{
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        padding: "0 12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flext-start",
        alignItems: "flex-start",
      }}
    >
      <div>
        <h1
          style={{
            marginBottom: "0",
          }}
        >Reform</h1>
        <h6
          style={{
            marginBottom: "0",
            paddingTop: "8px",
            color: style.colors.DARK_GRAY
          }}
        >Choose a policy or create one yourself</h6>
      </div>
      <p
        style={{
          marginBottom: "2px",
          paddingTop: "24px",
        }}
      >I want to apply the following type of reform: </p>
      <ReformInputButtonGroup
        inputMode={inputMode}
        setInputMode={setInputMode}
      />
    </div>
  );
}

function ReformInputButtonGroup(props) {
  const { inputMode, setInputMode } = props;

  return (
      <Radio.Group buttonStyle="solid" value={inputMode} onChange={(e) => setInputMode(e.target.value)}>
        <ReformInputButton
          inputMode={inputMode}
          value={INPUT_MODES.CURRENT_LAW}
          label="The current law"
          tooltip="The legal status quo. Use this if you're calculating your own taxes and benefits."
        />
        <ReformInputButton
          inputMode={inputMode}
          value={INPUT_MODES.FEATURED_REFORM}
          label="A featured reform"
          tooltip="Choose from a list of featured reforms."
        />
        <ReformInputButton
          inputMode={inputMode}
          value={INPUT_MODES.CUSTOM_REFORM}
          label="A custom reform"
          tooltip="Choose what reform parameters you want to modify."
        />
      </Radio.Group>
  );
}

function ReformInputButton(props) {
  const { inputMode, value, label, tooltip } = props;

  return (
    <Radio.Button 
      value={value}
      style={{
        fontSize: "16px",
      }}
    >
      {label}
      <Tooltip title={tooltip}>
        <span style={{
          marginLeft: "8px",
          color: inputMode === value ? style.colors.WHITE : style.colors.DARK_GRAY
        }}>
          <QuestionCircleOutlined />
        </span>
      </Tooltip>
    </Radio.Button>
  );
}