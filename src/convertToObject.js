'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesObject = {};
  const declarations = sourceString.split(';');

  for (const item of declarations) {
    const trimmedItem = item.trim();

    if (trimmedItem !== '') {
      if (trimmedItem.includes(':')) {
        const firstColonIndex = trimmedItem.indexOf(':');
        const key = trimmedItem.substring(0, firstColonIndex).trim();
        const value = trimmedItem.substring(firstColonIndex + 1).trim();

        stylesObject[key] = value;
      }
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
