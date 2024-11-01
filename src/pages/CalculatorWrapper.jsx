import { Helmet } from "react-helmet";
import CalculatorAccordion from "../layout/CalculatorAccordion";
import Footer from "../layout/Footer";
import Header from "../layout/Header";


export default function CalculatorWrapper(props) {
  const { inputState } = props;

  return (
    <>
      <Helmet>
        <title>Calculator | PolicyEngine</title>
      </Helmet>
      <Header />
      <CalculatorAccordion inputState={inputState} />
      <Footer />
    </>
  );
}