import { HEADER_HEIGHT } from "../../style/spacing";

export default function CalculatorReform(props) {
  return (
    <div
      style={{
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
      }}
    >
      <h1>Reform</h1>
      <h6>Create a policy or reform</h6>
    </div>
  );
}
