/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var couter = 0;
  var arrayModified = preferences.slice();

  for (var i = 0; i < arrayModified.length; i++) {

    if ((j = arrayModified[i]-1) && (k = arrayModified[j]-1) && (i === arrayModified[k]-1) && (j !== k)) {
      couter++;
      arrayModified[i] = null;
      arrayModified[j] = null;
      arrayModified[k] = null;
    } else {
      arrayModified[i] = null;
    }
  }
  
  return couter;
};
