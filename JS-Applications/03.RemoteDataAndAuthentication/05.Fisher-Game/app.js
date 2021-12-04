let userData = JSON.parse(sessionStorage.getItem("userData"));
window.addEventListener("load", () => {
  loadCatches();
  if (userData == null) {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "inline-block";
    document.querySelector(".email span").textContent = `guest`;
    document.querySelector("#addForm button").disabled = true;
  } else {
    document.getElementById("user").style.display = "inline-block";
    document.getElementById("guest").style.display = "none";
    document.querySelector(".email span").textContent = userData.email;
    document.querySelector("#addForm button").disabled = false;
    document.querySelector("#addForm").addEventListener("submit", listACatch);
    document.querySelector(".load").addEventListener("click", loadCatches);
    document
      .querySelector("#catches")
      .addEventListener("click", deleteOrUpdateACatch);
  }

  document.getElementById("logout").addEventListener("click", loggingOut);
});

async function deleteOrUpdateACatch(event) {
  if (event.target.textContent == `Update`) {
    let url = `http://localhost:3030/data/catches/`;
    let parent = event.target.parentElement;
    let allInputs = parent.querySelectorAll("input");
    let body = {};
    Array.from(allInputs).forEach((inp) => {
      Object.assign(body, { [inp.className]: inp.value });
    });
    try {
      let response = await fetch(url + event.target.dataset.id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": userData.accessToken,
        },
        body: JSON.stringify(body),
      });
      if (response.ok == false) {
        let err = await response.json();
        throw new Error(err.message);
      } else {
        let data = await response.json();
        loadCatches();
      }
    } catch (error) {
      alert(error.message);
    }
  } else if (event.target.textContent == `Delete`) {
    let url = `http://localhost:3030/data/catches/`;

    try {
      let response = await fetch(url + event.target.dataset.id, {
        method: "delete",
        headers: {
          "X-Authorization": userData.accessToken,
        },
      });
      if (response.ok == false) {
        let err = await response.json();
        throw new Error(err.message);
      } else {
        let data = await response.json();
        loadCatches();
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

async function listACatch(event) {
  event.preventDefault();

  let formData = new FormData(event.target);
  formData = [...formData].reduce(
    (acc, [key, value]) => Object.assign(acc, { [key]: value.trim() }),
    {}
  );
  if (Object.values(formData).some((x) => x == "")) {
    alert(`All field are required!`);
  } else {
    try {
      let response = await fetch(`http://localhost:3030/data/catches`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": userData.accessToken,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok == false) {
        let err = await response.json();
        throw new Error(err.message);
      } else {
        event.target.reset();
        let data = await response.json();
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

async function loadCatches() {
  let url = "http://localhost:3030/data/catches";
  try {
    let response = await fetch(url);
    if (response.status != 200) {
      let err = await response.json();
      throw new Error(err.message);
    } else {
      let data = await response.json();
      document
        .querySelector("#catches")
        .replaceChildren(...data.map(createElement));
    }
  } catch (error) {
    alert(error.message);
  }
}

function createElement(dataObj) {
  let isOwner = userData && dataObj._ownerId === userData.id;
  let myDiv = document.createElement("div");
  myDiv.className = "catch";
  myDiv.innerHTML = `<label>Angler</label>
<input type="text" class="angler" value="${dataObj.angler}" ${
    !isOwner ? "disabled" : ""
  }>
<label>Weight</label>
<input type="text" class="weight" value="${dataObj.weight}"${
    !isOwner ? "disabled" : ""
  }>
<label>Species</label>
<input type="text" class="species" value="${dataObj.species}"${
    !isOwner ? "disabled" : ""
  }>
<label>Location</label>
<input type="text" class="location" value="${dataObj.location}"${
    !isOwner ? "disabled" : ""
  }>
<label>Bait</label>
<input type="text" class="bait" value="${dataObj.bait}"${
    !isOwner ? "disabled" : ""
  }>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${dataObj.captureTime}"${
    !isOwner ? "disabled" : ""
  }>
<button class="update" data-id="${dataObj._id}"${
    !isOwner ? "disabled" : ""
  }>Update</button>
<button class="delete" data-id="${dataObj._id}"${
    !isOwner ? "disabled" : ""
  }>Delete</button>`;

  return myDiv;
}

async function loggingOut() {
  if (userData != null) {
    try {
      let response = await fetch("http://localhost:3030/users/logout", {
        method: "get",
        headers: {
          "X-Authorization": userData.accessToken,
        },
      });
      if (response.ok == false) {
        let err = await response.json();
        throw new Error(err.message);
      } else {
        sessionStorage.clear();
        window.location = "/index.html";
      }
    } catch (err) {
      alert(err.message);
    }
  }
}
