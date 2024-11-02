/**
 * Standardized class for policy objects
 * @param {Object | null} baseline The policy's baseline object
 * @param {Object | null} reform The policy's reform object
 */
export default class Policy {
  constructor(baseline = null, reform = null) {
    this.baseline = baseline;
    this.baseline.data = this.#populate_data(baseline.data);
    this.reform = reform;
    this.reform.data = this.#populate_data(reform.data);
  }

  #populate_data(data) {
    let output = {};
    for (const [key, dataObject] of data) {
      output[key] = new Param(dataObject);
    }
    return output;
  }
}