module.exports = function parsseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(tech => tech.trim());
}