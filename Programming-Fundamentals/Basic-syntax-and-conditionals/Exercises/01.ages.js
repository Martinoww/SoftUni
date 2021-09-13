function ages(age) {
  let typeOfPerson = "";
  if (age >= 0 && age <= 2) {
    typeOfPerson = "baby";
    console.log(typeOfPerson)
  } else if (age > 2 && age <= 13) {
    typeOfPerson = "child";
    console.log(typeOfPerson)
  } else if (age > 13 && age <= 19) {
    typeOfPerson = "teenager";
    console.log(typeOfPerson)
  } else if (age > 19 && age <= 65) {
    typeOfPerson = "adult";
    console.log(typeOfPerson)
  } else if (age >= 66) {
    typeOfPerson = "elder";
    console.log(typeOfPerson)
  }else{
      console.log(`out of bounds`)
  }
  
}
ages(100);
