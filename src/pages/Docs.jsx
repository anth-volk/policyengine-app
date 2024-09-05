import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import Section from "../layout/Section.jsx";
import style from "../style/index.js";
import PageHeader from "../layout/PageHeader.jsx";
import useDisplayCategory from "../hooks/useDisplayCategory.js";
import { Helmet } from "react-helmet";
import useCountryId from "../hooks/useCountryId.js";
import LinkButton from "../controls/LinkButton.jsx";

export default function Docs() {
  const countryId = useCountryId()
  const dC = useDisplayCategory();

  const link = ""; // Add link here

  return (
    <>
      <Helmet>
        <title>Docs | PolicyEngine</title>
      </Helmet>
      <div>
        <Header />
        <PageHeader title="Documentation & Projects" backgroundColor={style.colors.BLUE_98}>
          <p style={{ margin: 0 }}>
            Learn more about using our Python packages to simulate the impacts of tax and benefit policy changes on a household, or nationwide. Or, explore one of our smaller experimental projects below, hosted via Streamlit (link to Streamlit itself).
          </p>
        </PageHeader>
        <Section
          backgroundColor={style.colors.BLUE_PRIMARY}
          title="Documentation"
        >
          <div
            style={{
              display: "flex",
              flexDirection: dC === "mobile" ? "column" : "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: dC === "mobile" ? 12 : 24
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p>
                PolicyEngine provides comprehensive documentation for users looking to use our
                Python packages to model their own reforms. Click on the button to the right to
                explore it.
              </p>
              <p>
                Perhaps some more text here, as well.
              </p>
            </div>
            <LinkButton
              text={
                <div style={{ textAlign: "center", color: "white" }}>
                  <span style={{ whiteSpace: "pre-line" }}>
                    View Documentation
                  </span>
                </div>
              }
              link={link}
              width={dC === "desktop" ? 450 : dC === "mobile" ? "100%" : "30vw"}
            />
          </div>
        </Section>
        <Footer />
      </div>
    </>
  );
}
