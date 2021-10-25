window.addEventListener("load", solve);

function solve() {
  let modelInpField = document.getElementById("model");
  let yearInpField = document.getElementById("year");
  let descriptionInpField = document.getElementById("description");
  let priceInpField = document.getElementById("price");
  let addBtn = document.getElementById("add");
  let furnitureList = document.getElementById("furniture-list");
  let totalPriceList = document.querySelector(".total-price");

  addBtn.addEventListener("click", addFurniture);

  function addFurniture(ev) {
    ev.preventDefault();

    if (
      modelInpField.value != "" &&
      descriptionInpField.value != "" &&
      Number(priceInpField.value) > 0 &&
      Number(yearInpField.value) > 0
    ) {
      let mainTr = document.createElement("tr");
      mainTr.classList.add("info");
      let nameTd = document.createElement("td");
      nameTd.textContent = `${modelInpField.value}`;
      mainTr.appendChild(nameTd);
      let priceTd = document.createElement("td");
      priceTd.textContent = `${Number(priceInpField.value).toFixed(2)}`;
      mainTr.appendChild(priceTd);
      let buttonsTd = document.createElement("td");
      let moreInfBtn = document.createElement("button");
      moreInfBtn.textContent = "More Info";
      moreInfBtn.classList.add('moreBtn')
      buttonsTd.appendChild(moreInfBtn);
      let buyBtn = document.createElement("button");
      buyBtn.textContent = "Buy it";
      buyBtn.classList.add('buyBtn');
      buttonsTd.appendChild(buyBtn);
      mainTr.appendChild(buttonsTd);

      let hiddenTr = document.createElement("tr");
      hiddenTr.classList.add("hide");
      hiddenTr.innerHTML = `<td>Year: ${yearInpField.value}</td><td colspan="3">Description: ${descriptionInpField.value}</td>`;
      furnitureList.appendChild(mainTr);
      furnitureList.appendChild(hiddenTr);

      moreInfBtn.addEventListener("click", () => {
        moreInfBtn.textContent =
          moreInfBtn.textContent == "More Info" ? "Less Info" : "More Info";
        hiddenTr.style.display = hiddenTr.style.display == "" ? "contents" : "";
      });

      buyBtn.addEventListener("click", () => {
        let total = Number(totalPriceList.textContent);
        total += Number(priceTd.textContent);
        furnitureList.removeChild(hiddenTr);
        furnitureList.removeChild(mainTr);
        totalPriceList.textContent = total.toFixed(2);
      });

      modelInpField.value = "";
      descriptionInpField.value = "";
      priceInpField.value = "";
      yearInpField.value = "";
    }
  }
}
