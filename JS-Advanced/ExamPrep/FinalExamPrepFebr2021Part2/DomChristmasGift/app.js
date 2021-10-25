function solution() {
  let addGiftSection = document.querySelectorAll(".card ")[0];
  let listOfGiftsSection = document.querySelectorAll(".card ")[1];
  let UllistOfGiftSection = listOfGiftsSection.querySelector("ul");
  let SendGiftsSection = document.querySelectorAll(".card ul")[1];
  let DiscardGiftsSection = document.querySelectorAll(".card ul")[2];

  let giftInpField = addGiftSection.querySelector("div input");
  let addGiftBtn = addGiftSection.querySelector("div button");

  addGiftBtn.addEventListener("click", addGift);

  function addGift(ev) {
    if (giftInpField.value != "") {
      let myLi = document.createElement("li");
      myLi.classList.add("gift");
      myLi.innerHTML = `${giftInpField.value}<button id="sendButton">Send</button><button id="discardButton">Discard</button></li>`;

     myLi.querySelectorAll("button")[0].addEventListener('click', sendGift);
     myLi.querySelectorAll("button")[1].addEventListener('click', discardGift);


      UllistOfGiftSection.appendChild(myLi);
      giftInpField.value = "";

      let ulChildren = Array.from(UllistOfGiftSection.querySelectorAll("li"));
      let sorted = ulChildren.sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
      );
      UllistOfGiftSection.innerHTML = "";

      for (let el of sorted) {
        UllistOfGiftSection.appendChild(el);
      }

      
    }
}
function sendGift(ev) {
  let liParent = ev.target.parentElement;
  SendGiftsSection.appendChild(liParent);
  liParent.removeChild(liParent.querySelector("button"));
  liParent.removeChild(liParent.querySelector("button"));
}

 function discardGift(ev) {
  let liParent = ev.target.parentElement;
  DiscardGiftsSection.appendChild(liParent);
  liParent.removeChild(liParent.querySelector("button"));
  liParent.removeChild(liParent.querySelector("button"));
 }
}
