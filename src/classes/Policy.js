import Param from './Param.js';

/**
 * Standardized class for policy objects
 * @param {Object | {}} baseline The policy's baseline object
 * @param {Object | {}} reform The policy's reform object
 */
export default class Policy {
  constructor(baseline = {}, reform = {}) {
    this.baseline = baseline;
    this.reform = reform;
    if (baseline.data) {
      this.baseline.data = this.#populate_data(baseline.data);
    }
    if (reform.data) {
      this.reform.data = this.#populate_data(reform.data);
    }
  }

  #populate_data(data) {
    let output = {};
    for (const key in data) {
      output[key] = new Param(data[key]);
    }
    return output;
  }
}