import { useState } from "react";
import style from "../../style";
import { HEADER_HEIGHT } from "../../style/spacing";
import { CALC_DISPLAY_MODES } from "../CalculatorPage";
import Button from "../../controls/Button";
import { Radio, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const INPUT_MODES = {
  CURRENT_LAW: 'current-law',
  COMMON_REFORM: 'common-reform',
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
        >Create a policy or reform</h6>
      </div>
      <p
        style={{
          marginBottom: "2px",
          paddingTop: "24px",
        }}
      >I want to apply the following type of reform: </p>
      <ReformInputModeButton 
        inputMode={inputMode}
        setInputMode={setInputMode}
      />
    </div>
  );
}

function ReformInputModeButton(props) {
  const { inputMode, setInputMode } = props;

  return (
      <Radio.Group buttonStyle="solid" value={inputMode} onChange={(e) => setInputMode(e.target.value)}>
        <Radio.Button 
          value={INPUT_MODES.CURRENT_LAW}
        >
          The current law
          <Tooltip title="The legal status quo. Use this if you're calculating your own taxes and benefits.">
            <span style={{
              marginLeft: "8px",
              color: inputMode === INPUT_MODES.CURRENT_LAW ? style.colors.WHITE : style.colors.DARK_GRAY
            }}>
              <QuestionCircleOutlined />
            </span>
          </Tooltip>
        </Radio.Button>
        <Radio.Button 
          value={INPUT_MODES.COMMON_REFORM}
        >
          A common reform
          <Tooltip title="Choose from one of a few common reforms.">
            <span style={{
              marginLeft: "8px",
              color: inputMode === INPUT_MODES.COMMON_REFORM ? style.colors.WHITE : style.colors.DARK_GRAY
            }}>
              <QuestionCircleOutlined />
            </span>
          </Tooltip>
        </Radio.Button>
        <Radio.Button 
          value={INPUT_MODES.CUSTOM_REFORM}
        >
          A custom reform
          <Tooltip title="Choose what reform parameters you want to modify.">
            <span style={{
              marginLeft: "8px",
              color: inputMode === INPUT_MODES.CUSTOM_REFORM ? style.colors.WHITE : style.colors.DARK_GRAY
            }}>
              <QuestionCircleOutlined />
            </span>
          </Tooltip>
        </Radio.Button>
      </Radio.Group>
  );
}