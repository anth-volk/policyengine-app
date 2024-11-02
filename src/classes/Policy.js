/**
 * Standardized class for reform objects
 * @param {Object | null} data The reform's data object
 * @param {String} label The reform's label
 */
export default class Reform {
  constructor(data, label) {
    this.data = this.#populate_data(data);
    this.label = label;
  }

  #populate_data(data) {
    let output = {};
    for (const [key, dataObject] of data) {
      output[key] = new Param(dataObject);
    }
    return output;
  }
}