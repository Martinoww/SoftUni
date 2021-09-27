function constructionCrew(workerObj) {
  if (workerObj.dizziness === true) {
    workerObj.levelOfHydrated += workerObj.experience * workerObj.weight * 0.1;
    workerObj.dizziness = false;
  }
  return workerObj;
}
console.log(
  constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);
