export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  // Convert from set to array
  const array = Array.from(set);
  // filter the array to retrieve the values with the specific string
  const values = array.filter((value) => value.startsWith(startString));
  // apply map to retrieve the rest of the string
  const result = values.map((value) => value.substring(startString.length));
  // use join to join the strings
  return result.join('-');
}
