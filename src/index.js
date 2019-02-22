/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;

  for ( let i = 0; i < preferences.length; i++){
   if (preferences[i] - 1 === i) continue;   // если спичони любит сам себя, то новый цикл for
   let love1 = preferences[i] -1;
   if (preferences[love1] - 1 === love1) continue;
   let love2 = preferences[love1] - 1;
   if (preferences[love2] - 1 === love2 || preferences[love2] - 1 != i) continue;
   counter++;
  }

  return counter/3;
  


};
