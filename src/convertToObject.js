'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const answer = {};
  const arrayString = sourceString.split(';');

  for (const item of arrayString) {
    const trimmedItem = item.trim();

    if (trimmedItem !== '') {
      if (trimmedItem.includes(':')) {
        const firstColonIndex = trimmedItem.indexOf(':');
        const key = trimmedItem.substring(0, firstColonIndex).trim();
        const value = trimmedItem.substring(firstColonIndex + 1).trim();

        answer[key] = value;
      }
    }
  }

  return answer;
}

module.exports = convertToObject;
