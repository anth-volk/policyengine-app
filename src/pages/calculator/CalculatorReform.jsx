import { useState } from "react";
import style from "../../style";
import { HEADER_HEIGHT } from "../../style/spacing";
import { CALC_DISPLAY_MODES } from "../CalculatorPage";
import { Radio, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Policy from "../../classes/Policy";
import FeaturedReformDisplay from "./FeaturedReformDisplay";
import useCountryId from "../../hooks/useCountryId";

const INPUT_MODES = {
  CURRENT_LAW: 'current-law',
  FEATURED_REFORM: 'featured-reform',
  CUSTOM_REFORM: 'custom-reform',
};

export default function CalculatorReform(props) {

  const { displayMode, policy, setPolicy } = props;

  const defaultInputMode = displayMode === CALC_DISPLAY_MODES.HOUSEHOLD ? INPUT_MODES.CURRENT_LAW : CALC_DISPLAY_MODES.POLICY ? INPUT_MODES.DEFINED_REFORM : INPUT_MODES.CURRENT_LAW;

  const [inputMode, setInputMode] = useState(defaultInputMode);

  return (
    <div
      style={{
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flext-start",
        alignItems: "flex-start",
        gap: "24px",
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
      <ReformInputButtonGroup
        inputMode={inputMode}
        setInputMode={setInputMode}
        setPolicy={setPolicy}
      />
      <InputModeDisplay 
        inputMode={inputMode}
        setPolicy={setPolicy}
      />
    </div>
  );
}

function InputModeDisplay(props) {
  const { inputMode, setPolicy } = props;

  return (
    <div style={{width: "100%"}}>
      {/*{inputMode === INPUT_MODES.CURRENT_LAW && <CurrentLawDisplay />}*/}
      {inputMode === INPUT_MODES.FEATURED_REFORM && <FeaturedReformDisplay setPolicy={setPolicy} />}
      {/*{inputMode === INPUT_MODES.CUSTOM_REFORM && <CustomReformDisplay />}*/}
    </div>
  );
}

function ReformInputButtonGroup(props) {
  const { inputMode, setInputMode, setPolicy } = props;

  const countryId = useCountryId();
  function handleClick(e) {
    const value = e.target.value;
    if (value === INPUT_MODES.CURRENT_LAW) {
      setPolicy(new Policy().setDefaultPolicy(countryId));
    }
    setInputMode(value);
  }

  return (
    <div style={{width: "100%"}}>
      <p
        style={{
          marginBottom: "2px",
        }}
      >I want to apply the following type of reform: </p>
      <Radio.Group buttonStyle="solid" block value={inputMode} onChange={(e) => setInputMode(e.target.value)}>
        <ReformInputButton
          inputMode={inputMode}
          value={INPUT_MODES.CURRENT_LAW}
          label="The current law"
          tooltip="The legal status quo. Use this if you're calculating your own taxes and benefits."
          onClick={handleClick}
        />
        <ReformInputButton
          inputMode={inputMode}
          value={INPUT_MODES.FEATURED_REFORM}
          label="A featured reform"
          tooltip="Choose from a list of reforms featured in our articles."
        />
        <ReformInputButton
          inputMode={inputMode}
          value={INPUT_MODES.CUSTOM_REFORM}
          label="A custom reform"
          tooltip="Choose what reform parameters you want to modify."
        />
      </Radio.Group>
    </div>
  );
}

function ReformInputButton(props) {
  const { inputMode, value, label, tooltip, onClick } = props;

  return (
    <Radio.Button 
      value={value}
      style={{
        fontSize: "16px",
      }}
      onClick={onClick}
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