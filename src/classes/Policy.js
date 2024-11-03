import { COUNTRY_BASELINE_POLICIES } from '../data/countries.js';
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
      this.baseline.data = this.#populateData(baseline.data);
    }
    if (reform.data) {
      this.reform.data = this.#populateData(reform.data);
    }
  }

  #populateData(data) {
    let output = {};
    for (const key in data) {
      output[key] = new Param(data[key]);
    }
    return output;
  }

  setBaselineCurrentLaw(countryId) {
    this.baseline.label = "Current Law";
    this.baseline.data = {};
    this.baseline.id = COUNTRY_BASELINE_POLICIES[countryId];
    return this;
  }

  setReformCurrentLaw(countryId) {
    this.reform.label = "Current Law";
    this.reform.data = {};
    this.reform.id = COUNTRY_BASELINE_POLICIES[countryId];
    return this;
  }

  setDefaultPolicy(countryId) {
    this.setBaselineCurrentLaw(countryId);
    this.setReformCurrentLaw(countryId);
    return this;
  }

  setBaselineId(id) {
    this.baseline.id = id;
    return this;
  }

  setReformId(id) {
    this.reform.id = id;
    return this;
  }

  setBaselineLabel(label) {
    this.baseline.label = label;
    return this;
  }

  setReformLabel(label) {
    this.reform.label = label;
    return this;
  }

  updateBaseline(data) {
    this.setBaselineLabel(null);
    this.setBaselineId(null);
    this.baseline.data = this.#populateData(data);
    return this;
  }

  updateReform(data) {
    this.setReformLabel(null);
    this.setReformId(null);
    this.reform.data = this.#populateData(data);
    return this;
  }
}