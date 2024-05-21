import { Navigate } from "react-router-dom";
import { COUNTRY_CODES } from "../data/countries";

export default function RedirectToCountry() {

  // Find country ID
  const countryId = findCountryId();

  return (
    <Navigate to={`/${countryId}`} />
  )
}

/**
 * Based on the URL and user's browser, determine country ID;
 * if not possible, return "us" as country ID
 * @returns {String}
 */
export function findCountryId() {

  const path = window.location.pathname;
  const pathParts = path.split("/");
  let pathCountry = pathParts[1];

  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  let localeCountry = undefined;
  if (locale.includes("-")) {
    localeCountry = locale.split("-")[1].toLowerCase();
  }

  if (COUNTRY_CODES.includes(pathCountry)) {
    return pathCountry;
  } else if (COUNTRY_CODES.includes(localeCountry)) {
    return localeCountry;
  } else {
    return "us";
  }
}