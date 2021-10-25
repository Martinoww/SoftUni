function solve() {
  let divSectionOfOutput = document.querySelector(".user-view div");
  let nameInpField = document.querySelectorAll(".form-control input")[0];
  let dateInpField = document.querySelectorAll(".form-control input")[1];
  let moduleSelectField = document.querySelectorAll(".form-control select")[0];
  let addBtn = document.querySelectorAll(".form-control button")[0];

  addBtn.addEventListener("click", addModule);
  function addModule(ev) {
    ev.preventDefault();
    if (
      nameInpField.value == "" ||
      dateInpField.value == "" ||
      moduleSelectField == "" ||
      moduleSelectField.value == "Select module"
    ) {
      return;
    }

    let h3Arr = Array.from(
      divSectionOfOutput.querySelectorAll("div .module h3")
    );
    let found = h3Arr.find(
      (e) =>
        e.textContent == `${moduleSelectField.value.toUpperCase()}-MODULE`
    );
    if (found) {
      let [unsplitedDate, time] = dateInpField.value.split("T");
      let splitedDate = unsplitedDate.split("-").join("/");

      let myLi = document.createElement("li");
      myLi.classList.add("flex");
      let myH4 = document.createElement("h4");
      myH4.textContent = `${nameInpField.value} - ${splitedDate} - ${time}`;
      myLi.appendChild(myH4);

      let myDelBtn = document.createElement("button");
      myDelBtn.classList.add("red");
      myDelBtn.textContent = `Del`;
      myDelBtn.addEventListener("click", deleteLi);
      myLi.appendChild(myDelBtn);
      found.nextElementSibling.appendChild(myLi);

      let UlChildren = Array.from(found.nextElementSibling.children);
      let sorted = UlChildren.sort((a, b) => {
        let dateA = a.textContent;
        let firstIndexA = dateA.indexOf("-");
        let lastIndA = dateA.lastIndexOf("-");
        let dateB = b.textContent;
        let firstIndexB = dateB.indexOf("-");
        let lastIndB = dateB.lastIndexOf("-");

        dateA = dateA.slice(firstIndexA + 1, lastIndA).trim();
        dateB = dateB.slice(firstIndexB + 1, lastIndB).trim();

        return dateA.localeCompare(dateB);
      });
      found.nextElementSibling.innerHTML = "";
      for (let el of sorted) {
        found.nextElementSibling.appendChild(el);
      }
    } else {
      let [unsplitedDate, time] = dateInpField.value.split("T");
      let splitedDate = unsplitedDate.split("-").join("/");

      let myDiv = document.createElement("div");
      myDiv.classList.add("module");

      let myH3 = document.createElement("h3");
      myH3.textContent = `${moduleSelectField.value.toUpperCase()}-MODULE`;
      myDiv.appendChild(myH3);

      let myUl = document.createElement("ul");

      let myLi = document.createElement("li");
      myLi.classList.add("flex");

      let myH4 = document.createElement("h4");
      myH4.textContent = `${nameInpField.value} - ${splitedDate} - ${time}`;
      myLi.appendChild(myH4);

      let myDelBtn = document.createElement("button");
      myDelBtn.classList.add("red");
      myDelBtn.textContent = `Del`;
      myDelBtn.addEventListener("click", deleteLi);
      myLi.appendChild(myDelBtn);
      myUl.appendChild(myLi);
      myDiv.appendChild(myUl);
      divSectionOfOutput.appendChild(myDiv);
    }
    document.querySelector("form").reset();

    function deleteLi(ev) {
      let currLi = ev.target.parentElement;
      let currUl = ev.target.parentElement.parentElement;
      let currDiv = ev.target.parentElement.parentElement.parentElement;
      currUl.removeChild(currLi);
      if (Array.from(currUl.children).length === 0) {
        divSectionOfOutput.removeChild(currDiv);
      }
    }
  }
}
