import mapping from '../data/language-color-mapping';

/**
 * This utility function will return the color string, based on
 * the Language from the language-color mapping.
 *
 * @export
 * @param {*} languageName
 * @returns {string}
 */
export function getLanguageColor(languageName) {
  const defaultColor = '#e2e2e2';
  if (languageName) {
    const { color } = mapping[languageName];
    return color || defaultColor; // return default color if mapping color is not valid string
  }
  // return the default color in case of language is not valid
  return defaultColor;
}

/**
 * This function will format the date.
 * @param {*} dateString - DateTime string
 */
export const getFormattedDate = (dateString) => {
  const monthsShortName = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sept',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };
  const date = new Date(dateString);
  return `${date.getDate()} ${
    monthsShortName[date.getMonth() + 1]
  } ${date.getFullYear()}`;
};
