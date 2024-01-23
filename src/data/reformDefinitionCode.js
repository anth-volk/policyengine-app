export function getReformDefinitionCode(policy) {
  let lines = ["def modify_parameters(parameters):"];

  if (Object.keys(policy.reform.data).length === 0) {
    lines.pop();
    return lines;
  }

  for (const [parameterName, parameter] of Object.entries(policy.reform.data)) {
    for (let [instant, value] of Object.entries(parameter)) {
      const MAX_LINE_LENGTH = 80;
      const [start, end] = instant.split(".");
      if (value === false) {
        value = "False";
      } else if (value === true) {
        value = "True";
      }

      const paramLine = `    (parameters.${parameterName}.update(start=instant("${start}"), stop=instant("${end}"), value=${value})`;
      if (paramLine.length > MAX_LINE_LENGTH) {
        lines.push(...separateLines(paramLine, MAX_LINE_LENGTH));
      } else {
        lines.push(paramLine);
      }

    }
  }
  lines.push("    return parameters");

  lines = lines.concat([
    "",
    "",
    "class reform(Reform):",
    "    def apply(self):",
    "        self.modify_parameters(modify_parameters)",
    "",
    "",
  ]);
  return lines;
}

/**
 * Function that separates parameter lines based on desired line length
 * @param {String} paramLine The entire parameter line to be displayed
 * @param {Number} MAX_LINE_LENGTH The desired max line length
 * @returns {Array<String>} An array of the resulting lines
 */
function separateLines(paramLine, MAX_LINE_LENGTH) {

  const BREAK_SYMBOLS = ["(", ".",",","="];
  const NEW_LINE_INDENT = "        ";
  let remainingLine = paramLine;
  let separatedLines = [];
  let counter = MAX_LINE_LENGTH;

  while (remainingLine.length > MAX_LINE_LENGTH - NEW_LINE_INDENT.length) {
    if (counter <= 0) {
      console.error("separateLines: Provided text cannot be broken within " + 
      `${MAX_LINE_LENGTH} characters`);
      return [paramLine];
    }
    const testSymbol = remainingLine[counter];
    if (BREAK_SYMBOLS.includes(testSymbol)) {
      let firstPortion = remainingLine.slice(0, counter + 1);
      remainingLine = remainingLine.slice(counter + 1);
      console.log(firstPortion);
      console.log(remainingLine);
      if (separatedLines.length > 0) {
        firstPortion = NEW_LINE_INDENT.concat(firstPortion);
      }
      separatedLines.push(firstPortion);
      counter = MAX_LINE_LENGTH - NEW_LINE_INDENT.length;
    } else {
      counter--;
    }
  }
  separatedLines.push(NEW_LINE_INDENT.concat(remainingLine));

  return separatedLines;


}