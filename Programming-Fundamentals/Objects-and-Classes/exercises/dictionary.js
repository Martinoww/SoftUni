function dictionary(listOfTerms) {
  let objects = [];

  for (let currJsonStr of listOfTerms) {
    let parsed = JSON.parse(currJsonStr);
    for (let [term, definition] of Object.entries(parsed)) {
      let dictionaryObj = {
        term,
        definition,
      };
      let index = objects.findIndex((x) => x.term === term);
      if (index >= 0) {
        objects[index].definition = definition;
      } else {
        objects.push(dictionaryObj);
      }
    }
  }

  objects.sort( (a, b) => a.term.localeCompare(b.term));
  
  for (let result of objects) {
    console.log(`Term: ${result.term} => Definition: ${result.definition}`);
  }
}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
