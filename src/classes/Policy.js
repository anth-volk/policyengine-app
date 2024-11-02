/**
 * Standardized class for policy objects
 * @param {Object | null} baseline The baseline policy's data object
 * @param {Object | null} reform The reform policy's data object
 */
export default class Policy {
  constructor(baseline, reform) {
    this.baseline = baseline;
    this.reform = reform;
  }
}