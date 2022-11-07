// Code your solution here
// function findMatching(name, sought) {
//     return name.filter(
//       (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
//     );
//   }
// console.log(findMatching);

// function fuzzyMatch(source, testString) {
//     return source.filter(
//       (possibleMatch) =>
//         possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     );
//   }
  
    
//   function matchName(object, names){
//     return object.filter((record)=>record.name ===names);
//   }

function findMatching(name, sought){
  return name.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
  );
}

function fuzzyMatch(source, testString){
  return source.filter(
    (possibleMatch) =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(object, names){
  return object.filter((record)=>record.name ===names);
}

