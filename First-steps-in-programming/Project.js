function project(input) {
  let name = input[0];
  let numsOfProjects = Number(input[1]);
  let neededHours = 3;
  let totalHours = numsOfProjects * neededHours;
  console.log(
    `The architect ${name} will need ${totalHours} hours to complete ${numsOfProjects} project/s .`);
}
project(["George", "4"]);
project(["Sanya", "9"]);
