import { defer } from "react-router-dom";
import { updateMetadata } from "../api/call";

export function metadataLoader({params}) {

  let metadataPromise = null;
  try {
    metadataPromise = updateMetadata(params.countryId);
  } catch (e) {
    throw new Error("Error while fetching metadata in metadataLoader: ", e);
  }

  return defer({
    metadata: metadataPromise
  });
}
