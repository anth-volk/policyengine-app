import SearchParamNavButton from "../../controls/SearchParamNavButton";
import CenteredMiddleColumn from "../../layout/CenteredMiddleColumn";
import StableInputNumber from "controls/StableInputNumber";
import useMobile from "layout/Responsive";

export default function HouseholdIntro() {
  const mobile = useMobile();

  return (
    <CenteredMiddleColumn
      title="Enter your household details"
      description="Tell us about your household to calculate your net income after taxes and benefits."
    >
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? "col" : "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          marginBottom: 10,
          gap: mobile ? 10 : 20,
        }}
      >
        <h5
          style={{
            textAlign: "right",
            margin: 0,
            flex: 1,
            flexBasis: "10%",
            fontSize: mobile && ".9rem",
          }}
        >
          Tax Year: 
        </h5>
          <StableInputNumber
            style={{
              width: mobile ? 150 : 200,
            }}
            defaultValue={2023}
            autoFocus
          />
      </div>
      <SearchParamNavButton
        text="Enter my household"
        focus="input.household.maritalStatus"
        style={{ margin: "20px auto 10px" }}
      />
    </CenteredMiddleColumn>
  );
}
