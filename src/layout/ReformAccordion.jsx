import { DownOutlined } from "@ant-design/icons";
import style from "../style";
import { CALCULATOR_STATES } from "./CalculatorAccordion";


export default function ReformAccordion(props) {

  const { inputState } = props;

  if (inputState !== CALCULATOR_STATES.REFORM) {
    return (
      <div  
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: style.colors.LIGHT_GRAY,
          display: "flex",
          flexDirection: "row",
          paddingLeft: "64px",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
          boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.3)"
        }}
      >
        <p style={{ color: style.colors.BLACK, fontSize: "16px", marginBottom: 0 }}>
          Reform
        </p>
        <p style={{ color: style.colors.DARK_GRAY, fontSize: "12px", marginBottom: 0 }}>
          Identifying statistics; indicate that user can edit
        </p>
        <DownOutlined style={{ color: style.colors.DARK_GRAY, fontSize: "12px" }} />
      </div>
    )
  }

  return (
    <>
      <h1>ReformAccordion</h1>
    </>
  );

}