import { Navigate, Outlet, useParams } from "react-router-dom";
import { COUNTRY_CODES } from "../data/countries";

/**
 * react-router-dom layout component that validates
 * URL param country ID
 */
export default function CountryIdLayout() {
  console.log("Layout loaded");
  const {countryId} = useParams();

  if (COUNTRY_CODES.includes(countryId)) {
    console.log("1");
    return <Outlet />
  } else {
    console.log("2");
    return <Navigate to="/us" />
  }

}