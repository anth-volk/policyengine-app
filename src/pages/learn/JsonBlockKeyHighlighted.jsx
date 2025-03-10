import React, { useState } from 'react';
import { JsonEditor } from 'json-edit-react';

const initialData = { id: 1, name: "Alice", "testValue": {nestedValue: "innerNest"}, status: "active" };

/*
keysAndColors schema (should be replaced with legitimate schema in TypeScript):

{
  key: string,
  color: string (hex code, rgba value, string, etc.)
}

*/

/**
 * @param {Object} props 
 * @param {String} props.jsonData
 * @param {Object<String>} props.keysToHighlight
 */
export default function JsonBlockKeyHighlighted(props) {
  const {
    jsonData,
    setJsonData,
    keysAndColors
  } = props;

  // Custom theme: style function highlights the key if it matches keyToHighlight
  const keysToHighlight = keysAndColors.map(item => item.key);
  const customTheme = {
    styles: {
      property: ({ key }) =>
        keysToHighlight.includes(key) ? { backgroundColor: keysAndColors.find(item => item.key === key).color } : {}
    }
  };

  return (
    <JsonEditor
      data={jsonData}
      setData={setJsonData}         // enable editing by updating state
      theme={customTheme}          // apply custom styling theme
      // restrictEdit={({ key }) => true}  // example: restrict all edits (read-only)
      // restrictDelete={({ key }) => true}
      // restrictAdd={({ key }) => true}
    />
  );
}
