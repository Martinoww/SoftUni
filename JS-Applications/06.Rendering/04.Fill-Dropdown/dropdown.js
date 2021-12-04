import { html, render } from "./node_modules/lit-html/lit-html.js";
const root = document.getElementById("menu");
const url = "http://localhost:3030/jsonstore/advanced/dropdown";
getData();

async function getData() {
  const response = await fetch(url);
  if (response.ok != true) {
    const err = await response.json();
    alert(err.message);
    return;
  }
  const data = await response.json();
  const dataValues = Object.values(data);
  render(
    dataValues.map((t) => optionTemplate(t)),
    root
  );
}

document.querySelector("form").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const input = document.getElementById("itemText").value.trim();
  if (input != "") {
    ev.target.reset();
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input }),
    });
    await response.json();
    getData();
  }
});

const optionTemplate = (town) => html` <option .value="${town._id}">
  ${town.text}
</option>`;
