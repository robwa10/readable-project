/*
 Check the value of an object within an object against a filter.
 Returns a new object containing all objects that evaluated to true.
*/
const inObject = (data, filter) => {
  let myObject = {};
  for (key in data) {
    if (data[key]. === filter) {
      myObject[key] = data[key];
    }
  }
  return myObject
}
