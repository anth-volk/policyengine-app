import { DownOutlined } from "@ant-design/icons";

export default function CustomReformDisplay(props) {
  const { setPolicy } = props;

  const sectionsJSX = paramHeaders.map((section, i) => {
    const paramsJSX = section.params.map((param, j) => {
      return (
        <div 
          key={j}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            border: "1px solid #ccc",
            width: "100%",
            padding: "0px 8px"
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              margin: 0
            }}
          >
            {param.name}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "#666",
                fontFamily: "Roboto",
                fontWeight: "300",
                margin: 0
              }}
            >{param.description}</p>
            <button
              style={{
                backgroundColor: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <DownOutlined />
            </button>
          </div>
        </div>
      );
    });

    return (
      <div key={i}>
        <h4
          style={{
            fontSize: "1.25rem"
          }}
        >{section.title}</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "8px",
            width: "100%"
          }}
        >
          {paramsJSX}
        </div>
      </div>
    );
  });

  return (
    <div style={{
      height: "100%",
    }}>
      {sectionsJSX}
    </div>
  );
      
}

export const paramHeaders = [
  {
    title: "Federal Agencies",
    params: [
      {
        name: "Bureau of Labor Statistics (BLS)",
        description: "Government statistics, including Consumer Price Index",
        code: "bls"
      },
      {
        name: "Department of Agriculture (USDA)",
        description: "Food and agriculture programs, including SNAP",
        code: "usda"
      },
      {
        name: "Department of Health and Human Services (HHS)",
        description: "Health and welfare programs, including TANF",
        code: "hhs"
      },
      {
        name: "Department of Labor (DOL)", 
        description: "Includes the federal minimum wage",
        code: "dol"
      },
      {
        name: "Federal Communications Commission (FCC)",
        description: "Government communications programs, including Affordable Connectivity Program",
        code: "fcc"
      },
      {
        name: "Internal Revenue Service (IRS)",
        description: "Federal income tax and tax credits",
        code: "irs"
      },
      {
        name: "Social Security Administration (SSA)",
        description: "Social Security and other retirement programs",
        code: "ssa"
      }
    ]
  },
  {
    title: "Specific Policies",
    params: [
      {
        name: "Contributed Policies",
        description: "Policy proposals from lawmakers",
        code: "contrib"
      },
      {
        name: "Affordable Care Act",
        description: "Parameters related to the ACA",
        code: "aca"
      }
    ]
  },
  {
    title: "State and Local",
    params: [
      {
        name: "State-Level",
        description: "Parameters related to state policy",
        code: "states"
      },
      {
        name: "Local-Level",
        description: "Parameters related to local policy",
        code: "local"
      }
    ]
  },
  {
    title: "Other",
    params: [
      {
        name: "Abolitions",
        description: "Deactivate any parameter",
        code: "abolitions"
      },
      {
        name: "Simulation",
        description: "Meta-parameters for the simulation",
        code: "simulation"
      }
    ]
  }
]