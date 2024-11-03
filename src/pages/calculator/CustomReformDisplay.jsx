export default function CustomReformDisplay(props) {

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