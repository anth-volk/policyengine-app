import { useNavigate } from "react-router-dom";
import style from "../../style";

export default function FeaturedReformDisplay(props) {
  const {setPolicy} = props;

  const navigate = useNavigate();

  function handleClick(params) {
    setPolicy((prev) => prev.updateReform(params));
  }

  function handleMouseOver(e) {
    e.target.style.backgroundColor = style.colors.BLUE_PRIMARY;
    e.target.style.color = style.colors.WHITE;
  }

  function handleMouseOut(e) {
    e.target.style.backgroundColor = style.colors.WHITE;
    e.target.style.color = style.colors.BLUE_PRIMARY;
  }

  const featuredReformJSX = featuredReformData.map((reform, index) => {
    return (
      <div
        style={{
          height: "100%",
          flexBasis: 0,
          flex: "1 1 0px",
          cursor: "pointer",
          backgroundColor: style.colors.WHITE,
          border: `1px solid ${style.colors.BLUE_PRIMARY}`,
          padding: "12px",
        }}
        key={"reform-" + index}
        onMouseOver={(e) => handleMouseOver(e)}
        onMouseOut={(e) => handleMouseOut(e)}
        onClick={() => handleClick(reform.params)}
      >
        <p>{reform.title}</p>
        <p
          style={{
            marginBottom: "8px",
            fontSize: "12px",
            color: style.colors.DARK_GRAY
          }}
        >{reform.description}</p>
        <nav
          style={{
            color: style.colors.BLUE_PRIMARY,
            cursor: "pointer",
            margin: 0,
            fontSize: "12px",
            textDecoration: "underline"
          }}
          onClick={() => navigate(reform.link)}
        >View article</nav>
      </div>
    )
  })


  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        width: "100%",
        gap: "8px"
      }}
    >
      {featuredReformJSX}
    </div>
  )
}


export const featuredReformData = [
  {
    title: "Donald Trump's 2024 Economic Agenda",
    description: "A comprehensive look at the economic policies of the Trump campaign",
    link: "/us/research/trump-2024",
    params: {
        "gov.irs.credits.ctc.amount.adult_dependent": {
          "2026-01-01.2100-12-31": 500
        },
        "gov.irs.credits.ctc.amount.base[0].amount": {
          "2026-01-01.2100-12-31": 2000
        },
        "gov.irs.credits.ctc.phase_out.threshold.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2100-12-31": 200000
        },
        "gov.irs.credits.ctc.phase_out.threshold.JOINT": {
          "2026-01-01.2100-12-31": 400000
        },
        "gov.irs.credits.ctc.phase_out.threshold.SEPARATE": {
          "2026-01-01.2100-12-31": 200000
        },
        "gov.irs.credits.ctc.phase_out.threshold.SINGLE": {
          "2026-01-01.2100-12-31": 200000
        },
        "gov.irs.credits.ctc.phase_out.threshold.SURVIVING_SPOUSE": {
          "2026-01-01.2100-12-31": 400000
        },
        "gov.irs.credits.ctc.refundable.individual_max": {
          "2026-01-01.2028-12-31": 1800,
          "2029-01-01.2031-12-31": 1900,
          "2032-01-01.2035-12-31": 2000,
        },
        "gov.irs.credits.ctc.refundable.phase_in.threshold": {
          "2026-01-01.2100-12-31": 2500
        },
        "gov.irs.deductions.itemized.casualty.active": {
          "2026-01-01.2100-12-31": false
        },
        "gov.irs.deductions.itemized.charity.ceiling.all": {
          "2026-01-01.2100-12-31": 0.6
        },
        "gov.irs.deductions.itemized.limitation.agi_rate": {
          "2026-01-01.2100-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.limitation.applicable_amount.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2100-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.limitation.applicable_amount.JOINT": {
          "2026-01-01.2100-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.limitation.applicable_amount.SEPARATE": {
          "2026-01-01.2100-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.limitation.applicable_amount.SINGLE": {
          "2026-01-01.2100-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.limitation.applicable_amount.SURVIVING_SPOUSE": {
          "2026-01-01.2100-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.limitation.itemized_deduction_rate": {
          "2026-01-01.2100-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.HEAD_OF_HOUSEHOLD": {
          "2024-01-01.2025-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.JOINT": {
          "2024-01-01.2025-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.SEPARATE": {
          "2024-01-01.2025-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.SINGLE": {
          "2024-01-01.2025-12-31": "Infinity"
        },
        "gov.irs.deductions.itemized.salt_and_real_estate.cap.SURVIVING_SPOUSE": {
          "2024-01-01.2025-12-31": "Infinity"
        },
        "gov.irs.deductions.qbi.max.business_property.rate": {
          "2026-01-01.2100-12-31": 0.025
        },
        "gov.irs.deductions.qbi.max.rate": {
          "2026-01-01.2100-12-31": 0.2
        },
        "gov.irs.deductions.qbi.max.w2_wages.alt_rate": {
          "2026-01-01.2100-12-31": 0.25
        },
        "gov.irs.deductions.qbi.max.w2_wages.rate": {
          "2026-01-01.2100-12-31": 0.5
        },
        "gov.irs.deductions.qbi.phase_out.length.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2100-12-31": 50000
        },
        "gov.irs.deductions.qbi.phase_out.length.JOINT": {
          "2026-01-01.2100-12-31": 100000
        },
        "gov.irs.deductions.qbi.phase_out.length.SEPARATE": {
          "2026-01-01.2100-12-31": 50000
        },
        "gov.irs.deductions.qbi.phase_out.length.SINGLE": {
          "2026-01-01.2100-12-31": 50000
        },
        "gov.irs.deductions.qbi.phase_out.length.SURVIVING_SPOUSE": {
          "2026-01-01.2100-12-31": 100000
        },
        "gov.irs.deductions.qbi.phase_out.start.HEAD_OF_HOUSEHOLD": {
          "2024-01-01.2024-12-31": 198225,
          "2025-01-01.2025-12-31": 200275,
          "2026-01-01.2026-12-31": 204900,
          "2027-01-01.2027-12-31": 209050,
          "2028-01-01.2028-12-31": 213075,
          "2029-01-01.2029-12-31": 217125,
          "2030-01-01.2030-12-31": 221375,
          "2031-01-01.2031-12-31": 225775,
          "2032-01-01.2032-12-31": 230275,
          "2033-01-01.2033-12-31": 234875,
          "2034-01-01.2034-12-31": 239600,
          "2035-01-01.2035-12-31": 244450
        },
        "gov.irs.deductions.qbi.phase_out.start.JOINT": {
          "2024-01-01.2024-12-31": 396450,
          "2025-01-01.2025-12-31": 400575,
          "2026-01-01.2026-12-31": 409800,
          "2027-01-01.2027-12-31": 418100,
          "2028-01-01.2028-12-31": 426175,
          "2029-01-01.2029-12-31": 434225,
          "2030-01-01.2030-12-31": 442775,
          "2031-01-01.2031-12-31": 451525,
          "2032-01-01.2032-12-31": 460525,
          "2033-01-01.2033-12-31": 469750,
          "2034-01-01.2034-12-31": 479200,
          "2035-01-01.2035-12-31": 488900
        },
        "gov.irs.deductions.qbi.phase_out.start.SEPARATE": {
          "2024-01-01.2024-12-31": 198225,
          "2025-01-01.2025-12-31": 200275,
          "2026-01-01.2026-12-31": 204900,
          "2027-01-01.2027-12-31": 209050,
          "2028-01-01.2028-12-31": 213075,
          "2029-01-01.2029-12-31": 217125,
          "2030-01-01.2030-12-31": 221375,
          "2031-01-01.2031-12-31": 225775,
          "2032-01-01.2032-12-31": 230275,
          "2033-01-01.2033-12-31": 234875,
          "2034-01-01.2034-12-31": 239600,
          "2035-01-01.2035-12-31": 244450
        },
        "gov.irs.deductions.qbi.phase_out.start.SINGLE": {
          "2024-01-01.2024-12-31": 198225,
          "2025-01-01.2025-12-31": 200275,
          "2026-01-01.2026-12-31": 204900,
          "2027-01-01.2027-12-31": 209050,
          "2028-01-01.2028-12-31": 213075,
          "2029-01-01.2029-12-31": 217125,
          "2030-01-01.2030-12-31": 221375,
          "2031-01-01.2031-12-31": 225775,
          "2032-01-01.2032-12-31": 230275,
          "2033-01-01.2033-12-31": 234875,
          "2034-01-01.2034-12-31": 239600,
          "2035-01-01.2035-12-31": 244450
        },
        "gov.irs.deductions.qbi.phase_out.start.SURVIVING_SPOUSE": {
          "2024-01-01.2024-12-31": 396450,
          "2025-01-01.2025-12-31": 400575,
          "2026-01-01.2026-12-31": 409800,
          "2027-01-01.2027-12-31": 418100,
          "2028-01-01.2028-12-31": 426175,
          "2029-01-01.2029-12-31": 434225,
          "2030-01-01.2030-12-31": 442775,
          "2031-01-01.2031-12-31": 451525,
          "2032-01-01.2032-12-31": 460525,
          "2033-01-01.2033-12-31": 469750,
          "2034-01-01.2034-12-31": 479200,
          "2035-01-01.2035-12-31": 488900
        },
        "gov.irs.deductions.standard.amount.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2026-12-31": 22950,
          "2027-01-01.2027-12-31": 23425,
          "2028-01-01.2028-12-31": 23875,
          "2029-01-01.2029-12-31": 24325,
          "2030-01-01.2030-12-31": 24800,
          "2031-01-01.2031-12-31": 25300,
          "2032-01-01.2032-12-31": 25800,
          "2033-01-01.2033-12-31": 26300,
          "2034-01-01.2034-12-31": 26825,
          "2035-01-01.2035-12-31": 27375
        },
        "gov.irs.deductions.standard.amount.JOINT": {
          "2026-01-01.2026-12-31": 30600,
          "2027-01-01.2027-12-31": 31225,
          "2028-01-01.2028-12-31": 31825,
          "2029-01-01.2029-12-31": 32425,
          "2030-01-01.2030-12-31": 33050,
          "2031-01-01.2031-12-31": 33725,
          "2032-01-01.2032-12-31": 34400,
          "2033-01-01.2033-12-31": 35075,
          "2034-01-01.2034-12-31": 35775,
          "2035-01-01.2035-12-31": 36500
        },
        "gov.irs.deductions.standard.amount.SEPARATE": {
          "2026-01-01.2026-12-31": 15300,
          "2027-01-01.2027-12-31": 15600,
          "2028-01-01.2028-12-31": 15900,
          "2029-01-01.2029-12-31": 16225,
          "2030-01-01.2030-12-31": 16525,
          "2031-01-01.2031-12-31": 16850,
          "2032-01-01.2032-12-31": 17200,
          "2033-01-01.2033-12-31": 17550,
          "2034-01-01.2034-12-31": 17900,
          "2035-01-01.2035-12-31": 18250
        },
        "gov.irs.deductions.standard.amount.SINGLE": {
          "2026-01-01.2026-12-31": 15300,
          "2027-01-01.2027-12-31": 15600,
          "2028-01-01.2028-12-31": 15900,
          "2029-01-01.2029-12-31": 16225,
          "2030-01-01.2030-12-31": 16525,
          "2031-01-01.2031-12-31": 16850,
          "2032-01-01.2032-12-31": 17200,
          "2033-01-01.2033-12-31": 17550,
          "2034-01-01.2034-12-31": 17900,
          "2035-01-01.2035-12-31": 18250
        },
        "gov.irs.deductions.standard.amount.SURVIVING_SPOUSE": {
          "2026-01-01.2026-12-31": 30600,
          "2027-01-01.2027-12-31": 31225,
          "2028-01-01.2028-12-31": 31825,
          "2029-01-01.2029-12-31": 32425,
          "2030-01-01.2030-12-31": 33050,
          "2031-01-01.2031-12-31": 33725,
          "2032-01-01.2032-12-31": 34400,
          "2033-01-01.2033-12-31": 35075,
          "2034-01-01.2034-12-31": 35775,
          "2035-01-01.2035-12-31": 36500
        },
        "gov.irs.income.amt.exemption.amount.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2026-12-31": 89925,
          "2027-01-01.2027-12-31": 91750,
          "2028-01-01.2028-12-31": 93525,
          "2029-01-01.2029-12-31": 95300,
          "2030-01-01.2030-12-31": 97150,
          "2031-01-01.2031-12-31": 99075,
          "2032-01-01.2032-12-31": 101050,
          "2033-01-01.2033-12-31": 103075,
          "2034-01-01.2034-12-31": 105150,
          "2035-01-01.2035-12-31": 107275
        },
        "gov.irs.income.amt.exemption.amount.JOINT": {
          "2026-01-01.2026-12-31": 139850,
          "2027-01-01.2027-12-31": 142675,
          "2028-01-01.2028-12-31": 145425,
          "2029-01-01.2029-12-31": 148200,
          "2030-01-01.2030-12-31": 151100,
          "2031-01-01.2031-12-31": 154100,
          "2032-01-01.2032-12-31": 157150,
          "2033-01-01.2033-12-31": 160300,
          "2034-01-01.2034-12-31": 163525,
          "2035-01-01.2035-12-31": 166850
        },
        "gov.irs.income.amt.exemption.amount.SEPARATE": {
          "2026-01-01.2026-12-31": 69925,
          "2027-01-01.2027-12-31": 71350,
          "2028-01-01.2028-12-31": 72725,
          "2029-01-01.2029-12-31": 74100,
          "2030-01-01.2030-12-31": 75550,
          "2031-01-01.2031-12-31": 77050,
          "2032-01-01.2032-12-31": 78575,
          "2033-01-01.2033-12-31": 80150,
          "2034-01-01.2034-12-31": 81775,
          "2035-01-01.2035-12-31": 83425
        },
        "gov.irs.income.amt.exemption.amount.SINGLE": {
          "2026-01-01.2026-12-31": 89925,
          "2027-01-01.2027-12-31": 91750,
          "2028-01-01.2028-12-31": 93525,
          "2029-01-01.2029-12-31": 95300,
          "2030-01-01.2030-12-31": 97150,
          "2031-01-01.2031-12-31": 99075,
          "2032-01-01.2032-12-31": 101050,
          "2033-01-01.2033-12-31": 103075,
          "2034-01-01.2034-12-31": 105150,
          "2035-01-01.2035-12-31": 107275
        },
        "gov.irs.income.amt.exemption.amount.SURVIVING_SPOUSE": {
          "2026-01-01.2026-12-31": 139850,
          "2027-01-01.2027-12-31": 142675,
          "2028-01-01.2028-12-31": 145425,
          "2029-01-01.2029-12-31": 148200,
          "2030-01-01.2030-12-31": 151100,
          "2031-01-01.2031-12-31": 154100,
          "2032-01-01.2032-12-31": 157150,
          "2033-01-01.2033-12-31": 160300,
          "2034-01-01.2034-12-31": 163525,
          "2035-01-01.2035-12-31": 166850
        },
        "gov.irs.income.amt.exemption.phase_out.start.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2026-12-31": 639300,
          "2027-01-01.2027-12-31": 652250,
          "2028-01-01.2028-12-31": 664825,
          "2029-01-01.2029-12-31": 677425,
          "2030-01-01.2030-12-31": 690725,
          "2031-01-01.2031-12-31": 704400,
          "2032-01-01.2032-12-31": 718425,
          "2033-01-01.2033-12-31": 732825,
          "2034-01-01.2034-12-31": 747575,
          "2035-01-01.2035-12-31": 762675
        },
        "gov.irs.income.amt.exemption.phase_out.start.JOINT": {
          "2026-01-01.2026-12-31": 1278575,
          "2027-01-01.2027-12-31": 1304475,
          "2028-01-01.2028-12-31": 1329675,
          "2029-01-01.2029-12-31": 1354850,
          "2030-01-01.2030-12-31": 1381475,
          "2031-01-01.2031-12-31": 1408825,
          "2032-01-01.2032-12-31": 1436875,
          "2033-01-01.2033-12-31": 1465650,
          "2034-01-01.2034-12-31": 1495150,
          "2035-01-01.2035-12-31": 1525375
        },
        "gov.irs.income.amt.exemption.phase_out.start.SEPARATE": {
          "2026-01-01.2026-12-31": 639300,
          "2027-01-01.2027-12-31": 652250,
          "2028-01-01.2028-12-31": 664825,
          "2029-01-01.2029-12-31": 677425,
          "2030-01-01.2030-12-31": 690725,
          "2031-01-01.2031-12-31": 704400,
          "2032-01-01.2032-12-31": 718425,
          "2033-01-01.2033-12-31": 732825,
          "2034-01-01.2034-12-31": 747575,
          "2035-01-01.2035-12-31": 762675
        },
        "gov.irs.income.amt.exemption.phase_out.start.SINGLE": {
          "2026-01-01.2026-12-31": 639300,
          "2027-01-01.2027-12-31": 652250,
          "2028-01-01.2028-12-31": 664825,
          "2029-01-01.2029-12-31": 677425,
          "2030-01-01.2030-12-31": 690725,
          "2031-01-01.2031-12-31": 704400,
          "2032-01-01.2032-12-31": 718425,
          "2033-01-01.2033-12-31": 732825,
          "2034-01-01.2034-12-31": 747575,
          "2035-01-01.2035-12-31": 762675
        },
        "gov.irs.income.amt.exemption.phase_out.start.SURVIVING_SPOUSE": {
          "2026-01-01.2026-12-31": 1278575,
          "2027-01-01.2027-12-31": 1304475,
          "2028-01-01.2028-12-31": 1329675,
          "2029-01-01.2029-12-31": 1354850,
          "2030-01-01.2030-12-31": 1381475,
          "2031-01-01.2031-12-31": 1408825,
          "2032-01-01.2032-12-31": 1436875,
          "2033-01-01.2033-12-31": 1465650,
          "2034-01-01.2034-12-31": 1495150,
          "2035-01-01.2035-12-31": 1525375
        },
        "gov.irs.income.bracket.rates.2": {
          "2026-01-01.2100-12-31": 0.12
        },
        "gov.irs.income.bracket.rates.3": {
          "2026-01-01.2100-12-31": 0.22
        },
        "gov.irs.income.bracket.rates.4": {
          "2026-01-01.2100-12-31": 0.24
        },
        "gov.irs.income.bracket.rates.5": {
          "2026-01-01.2100-12-31": 0.32
        },
        "gov.irs.income.bracket.rates.7": {
          "2026-01-01.2100-12-31": 0.37
        },
        "gov.irs.income.bracket.thresholds.3.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2026-12-31": 105475,
          "2027-01-01.2027-12-31": 107600,
          "2028-01-01.2028-12-31": 109700,
          "2029-01-01.2029-12-31": 111775,
          "2030-01-01.2030-12-31": 113950,
          "2031-01-01.2031-12-31": 116225,
          "2032-01-01.2032-12-31": 118525,
          "2033-01-01.2033-12-31": 120900,
          "2034-01-01.2034-12-31": 123350,
          "2035-01-01.2035-12-31": 125825
        },
        "gov.irs.income.bracket.thresholds.3.JOINT": {
          "2026-01-01.2026-12-31": 210950,
          "2027-01-01.2027-12-31": 215225,
          "2028-01-01.2028-12-31": 219375,
          "2029-01-01.2029-12-31": 223525,
          "2030-01-01.2030-12-31": 227925,
          "2031-01-01.2031-12-31": 232425,
          "2032-01-01.2032-12-31": 237075,
          "2033-01-01.2033-12-31": 241825,
          "2034-01-01.2034-12-31": 246675,
          "2035-01-01.2035-12-31": 251675
        },
        "gov.irs.income.bracket.thresholds.3.SEPARATE": {
          "2026-01-01.2026-12-31": 105475,
          "2027-01-01.2027-12-31": 107600,
          "2028-01-01.2028-12-31": 109700,
          "2029-01-01.2029-12-31": 111775,
          "2030-01-01.2030-12-31": 113950,
          "2031-01-01.2031-12-31": 116225,
          "2032-01-01.2032-12-31": 118525,
          "2033-01-01.2033-12-31": 120900,
          "2034-01-01.2034-12-31": 123350,
          "2035-01-01.2035-12-31": 125825
        },
        "gov.irs.income.bracket.thresholds.3.SINGLE": {
          "2026-01-01.2026-12-31": 105475,
          "2027-01-01.2027-12-31": 107600,
          "2028-01-01.2028-12-31": 109700,
          "2029-01-01.2029-12-31": 111775,
          "2030-01-01.2030-12-31": 113950,
          "2031-01-01.2031-12-31": 116225,
          "2032-01-01.2032-12-31": 118525,
          "2033-01-01.2033-12-31": 120900,
          "2034-01-01.2034-12-31": 123350,
          "2035-01-01.2035-12-31": 125825
        },
        "gov.irs.income.bracket.thresholds.3.SURVIVING_SPOUSE": {
          "2026-01-01.2026-12-31": 210950,
          "2027-01-01.2027-12-31": 215225,
          "2028-01-01.2028-12-31": 219375,
          "2029-01-01.2029-12-31": 223525,
          "2030-01-01.2030-12-31": 227925,
          "2031-01-01.2031-12-31": 232425,
          "2032-01-01.2032-12-31": 237075,
          "2033-01-01.2033-12-31": 241825,
          "2034-01-01.2034-12-31": 246675,
          "2035-01-01.2035-12-31": 251675
        },
        "gov.irs.income.bracket.thresholds.4.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2026-12-31": 201350,
          "2027-01-01.2027-12-31": 205425,
          "2028-01-01.2028-12-31": 209400,
          "2029-01-01.2029-12-31": 213375,
          "2030-01-01.2030-12-31": 217550,
          "2031-01-01.2031-12-31": 221875,
          "2032-01-01.2032-12-31": 226275,
          "2033-01-01.2033-12-31": 230825,
          "2034-01-01.2034-12-31": 235475,
          "2035-01-01.2035-12-31": 240225
        },
        "gov.irs.income.bracket.thresholds.4.JOINT": {
          "2026-01-01.2026-12-31": 402725,
          "2027-01-01.2027-12-31": 410875,
          "2028-01-01.2028-12-31": 418800,
          "2029-01-01.2029-12-31": 426725,
          "2030-01-01.2030-12-31": 435125,
          "2031-01-01.2031-12-31": 443725,
          "2032-01-01.2032-12-31": 452575,
          "2033-01-01.2033-12-31": 461650,
          "2034-01-01.2034-12-31": 470925,
          "2035-01-01.2035-12-31": 480450
        },
        "gov.irs.income.bracket.thresholds.4.SEPARATE": {
          "2026-01-01.2026-12-31": 201350,
          "2027-01-01.2027-12-31": 205425,
          "2028-01-01.2028-12-31": 209400,
          "2029-01-01.2029-12-31": 213375,
          "2030-01-01.2030-12-31": 217550,
          "2031-01-01.2031-12-31": 221875,
          "2032-01-01.2032-12-31": 226275,
          "2033-01-01.2033-12-31": 230825,
          "2034-01-01.2034-12-31": 235475,
          "2035-01-01.2035-12-31": 240225
        },
        "gov.irs.income.bracket.thresholds.4.SINGLE": {
          "2026-01-01.2026-12-31": 201350,
          "2027-01-01.2027-12-31": 205425,
          "2028-01-01.2028-12-31": 209400,
          "2029-01-01.2029-12-31": 213375,
          "2030-01-01.2030-12-31": 217550,
          "2031-01-01.2031-12-31": 221875,
          "2032-01-01.2032-12-31": 226275,
          "2033-01-01.2033-12-31": 230825,
          "2034-01-01.2034-12-31": 235475,
          "2035-01-01.2035-12-31": 240225
        },
        "gov.irs.income.bracket.thresholds.4.SURVIVING_SPOUSE": {
          "2026-01-01.2026-12-31": 402725,
          "2027-01-01.2027-12-31": 410875,
          "2028-01-01.2028-12-31": 418800,
          "2029-01-01.2029-12-31": 426725,
          "2030-01-01.2030-12-31": 435125,
          "2031-01-01.2031-12-31": 443725,
          "2032-01-01.2032-12-31": 452575,
          "2033-01-01.2033-12-31": 461650,
          "2034-01-01.2034-12-31": 470925,
          "2035-01-01.2035-12-31": 480450
        },
        "gov.irs.income.bracket.thresholds.5.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2026-12-31": 255700,
          "2027-01-01.2027-12-31": 260875,
          "2028-01-01.2028-12-31": 265925,
          "2029-01-01.2029-12-31": 270950,
          "2030-01-01.2030-12-31": 276275,
          "2031-01-01.2031-12-31": 281750,
          "2032-01-01.2032-12-31": 287375,
          "2033-01-01.2033-12-31": 293125,
          "2034-01-01.2034-12-31": 299025,
          "2035-01-01.2035-12-31": 305075
        },
        "gov.irs.income.bracket.thresholds.5.JOINT": {
          "2026-01-01.2026-12-31": 511400,
          "2027-01-01.2027-12-31": 521775,
          "2028-01-01.2028-12-31": 531850,
          "2029-01-01.2029-12-31": 541925,
          "2030-01-01.2030-12-31": 552575,
          "2031-01-01.2031-12-31": 563500,
          "2032-01-01.2032-12-31": 574725,
          "2033-01-01.2033-12-31": 586250,
          "2034-01-01.2034-12-31": 598050,
          "2035-01-01.2035-12-31": 610125
        },
        "gov.irs.income.bracket.thresholds.5.SEPARATE": {
          "2026-01-01.2026-12-31": 255700,
          "2027-01-01.2027-12-31": 260875,
          "2028-01-01.2028-12-31": 265925,
          "2029-01-01.2029-12-31": 270950,
          "2030-01-01.2030-12-31": 276275,
          "2031-01-01.2031-12-31": 281750,
          "2032-01-01.2032-12-31": 287375,
          "2033-01-01.2033-12-31": 293125,
          "2034-01-01.2034-12-31": 299025,
          "2035-01-01.2035-12-31": 305075
        },
        "gov.irs.income.bracket.thresholds.5.SINGLE": {
          "2026-01-01.2026-12-31": 255700,
          "2027-01-01.2027-12-31": 260875,
          "2028-01-01.2028-12-31": 265925,
          "2029-01-01.2029-12-31": 270950,
          "2030-01-01.2030-12-31": 276275,
          "2031-01-01.2031-12-31": 281750,
          "2032-01-01.2032-12-31": 287375,
          "2033-01-01.2033-12-31": 293125,
          "2034-01-01.2034-12-31": 299025,
          "2035-01-01.2035-12-31": 305075
        },
        "gov.irs.income.bracket.thresholds.5.SURVIVING_SPOUSE": {
          "2026-01-01.2026-12-31": 511400,
          "2027-01-01.2027-12-31": 521775,
          "2028-01-01.2028-12-31": 531850,
          "2029-01-01.2029-12-31": 541925,
          "2030-01-01.2030-12-31": 552575,
          "2031-01-01.2031-12-31": 563500,
          "2032-01-01.2032-12-31": 574725,
          "2033-01-01.2033-12-31": 586250,
          "2034-01-01.2034-12-31": 598050,
          "2035-01-01.2035-12-31": 610125
        },
        "gov.irs.income.bracket.thresholds.6.HEAD_OF_HOUSEHOLD": {
          "2026-01-01.2026-12-31": 639300,
          "2027-01-01.2027-12-31": 652250,
          "2028-01-01.2028-12-31": 664825,
          "2029-01-01.2029-12-31": 677425,
          "2030-01-01.2030-12-31": 690725,
          "2031-01-01.2031-12-31": 704400,
          "2032-01-01.2032-12-31": 718425,
          "2033-01-01.2033-12-31": 732825,
          "2034-01-01.2034-12-31": 747575,
          "2035-01-01.2035-12-31": 762675
        },
        "gov.irs.income.bracket.thresholds.6.JOINT": {
          "2026-01-01.2026-12-31": 767125,
          "2027-01-01.2027-12-31": 782650,
          "2028-01-01.2028-12-31": 797775,
          "2029-01-01.2029-12-31": 812875,
          "2030-01-01.2030-12-31": 828850,
          "2031-01-01.2031-12-31": 845250,
          "2032-01-01.2032-12-31": 862100,
          "2033-01-01.2033-12-31": 879350,
          "2034-01-01.2034-12-31": 897050,
          "2035-01-01.2035-12-31": 915200
        },
        "gov.irs.income.bracket.thresholds.6.SEPARATE": {
          "2026-01-01.2026-12-31": 383550,
          "2027-01-01.2027-12-31": 391325,
          "2028-01-01.2028-12-31": 398875,
          "2029-01-01.2029-12-31": 406450,
          "2030-01-01.2030-12-31": 414425,
          "2031-01-01.2031-12-31": 422625,
          "2032-01-01.2032-12-31": 431050,
          "2033-01-01.2033-12-31": 439675,
          "2034-01-01.2034-12-31": 448525,
          "2035-01-01.2035-12-31": 457600
        },
        "gov.irs.income.bracket.thresholds.6.SINGLE": {
          "2026-01-01.2026-12-31": 639300,
          "2027-01-01.2027-12-31": 652250,
          "2028-01-01.2028-12-31": 664825,
          "2029-01-01.2029-12-31": 677425,
          "2030-01-01.2030-12-31": 690725,
          "2031-01-01.2031-12-31": 704400,
          "2032-01-01.2032-12-31": 718425,
          "2033-01-01.2033-12-31": 732825,
          "2034-01-01.2034-12-31": 747575,
          "2035-01-01.2035-12-31": 762675
        },
        "gov.irs.income.bracket.thresholds.6.SURVIVING_SPOUSE": {
          "2026-01-01.2026-12-31": 767125,
          "2027-01-01.2027-12-31": 782650,
          "2028-01-01.2028-12-31": 797775,
          "2029-01-01.2029-12-31": 812875,
          "2030-01-01.2030-12-31": 828850,
          "2031-01-01.2031-12-31": 845250,
          "2032-01-01.2032-12-31": 862100,
          "2033-01-01.2033-12-31": 879350,
          "2034-01-01.2034-12-31": 897050,
          "2035-01-01.2035-12-31": 915200
        },
        "gov.irs.income.exemption.amount": {
          "2026-01-01.2100-12-31": 0
        },
        "gov.irs.social_security.taxability.rate.additional": {
          "2024-01-01.2100-12-31": 0
        },
        "gov.irs.social_security.taxability.rate.base": {
          "2024-01-01.2100-12-31": 0
        }
    }
  },
  {
    title: "Kamala Harris's Earned Income Tax Credit Proposal",
    description: "View the impacts of the Harris campaign's proposed EITC expansion",
    link: "/us/research/harris-eitc",
    params: {
      "gov.irs.credits.eitc.eligibility.age.max": {
        "2024-01-01.2033-12-31": 100
      },
      "gov.irs.credits.eitc.eligibility.age.min": {
        "2024-01-01.2033-12-31": 19
      },
      "gov.irs.credits.eitc.eligibility.age.min_student": {
        "2024-01-01.2033-12-31": 24
      },
      "gov.irs.credits.eitc.max[0].amount": {
        "2021-01-01.2021-12-31": 1502,
        "2022-01-01.2022-12-31": 1605,
        "2023-01-01.2023-12-31": 1708,
        "2024-01-01.2024-12-31": 1756,
        "2025-01-01.2025-12-31": 1774,
        "2026-01-01.2026-12-31": 1815,
        "2027-01-01.2027-12-31": 1852,
        "2028-01-01.2028-12-31": 1888,
        "2029-01-01.2029-12-31": 1924,
        "2030-01-01.2030-12-31": 1962,
        "2031-01-01.2031-12-31": 2001,
        "2032-01-01.2032-12-31": 2041,
        "2033-01-01.2033-12-31": 2082,
        "2034-01-01.2034-12-31": 2124
      },
      "gov.irs.credits.eitc.phase_in_rate[0].amount": {
        "2024-01-01.2033-12-31": 0.153
      },
      "gov.irs.credits.eitc.phase_out.rate[0].amount": {
        "2024-01-01.2033-12-31": 0.153
      },
      "gov.irs.credits.eitc.phase_out.start[0].amount": {
        "2021-01-01.2021-12-31": 11610,
        "2022-01-01.2022-12-31": 12403,
        "2023-01-01.2023-12-31": 13198,
        "2024-01-01.2024-12-31": 13565,
        "2025-01-01.2025-12-31": 13706,
        "2026-01-01.2026-12-31": 14022,
        "2027-01-01.2027-12-31": 14306,
        "2028-01-01.2028-12-31": 14582,
        "2029-01-01.2029-12-31": 14858,
        "2030-01-01.2030-12-31": 15150,
        "2031-01-01.2031-12-31": 15450,
        "2032-01-01.2032-12-31": 15758,
        "2033-01-01.2033-12-31": 16074,
        "2034-01-01.2034-12-31": 16398
      }
    }
  },
  {
    title: "Exempting Social Security Benefits from Income Taxation",
    description: "Simulate a key proposal from the Trump campaign",
    link: "/us/research/social-security-tax-exemption",
    params: {
      "gov.irs.income.social_security.taxability.rate.additional": {
        "2024-01-01.2100-12-31": 0
      },
      "gov.irs.income.social_security.taxability.rate.base": {
        "2024-01-01.2100-12-31": 0
      }
    }
  },
  {
    title: "Kamala Harris's Child Tax Credit Proposal",
    description: "View the impacts of the Harris campaign's proposed CTC expansion",
    link: "/us/research/harris-ctc",
    params: {
      "gov.contrib.congress.delauro.american_family_act.baby_bonus": {
        "2025-01-01.2100-12-31": 2400
      },
      "gov.irs.credits.ctc.amount.arpa[0].amount": {
        "2025-01-01.2100-12-31": 3600
      },
      "gov.irs.credits.ctc.amount.arpa[1].amount": {
        "2025-01-01.2100-12-31": 3000
      },
      "gov.irs.credits.ctc.amount.base[1].threshold": {
        "2025-01-01.2100-12-31": 18
      },
      "gov.irs.credits.ctc.phase_out.arpa.in_effect": {
        "2025-01-01.2100-12-31": true
      },
      "gov.irs.credits.ctc.refundable.fully_refundable": {
        "2025-01-01.2100-12-31": true
      }
    }
  }
]