/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @author Nasasira Shafik Muhairwe <https://github.com/Muhairwe144J>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
