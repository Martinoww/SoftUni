import { refferencees } from "./refferencees.js";
const pageBody = document.querySelector("body");
pageBody.replaceChildren(refferencees.allYears);
pageBody.addEventListener("click", onClick);

let currYear;
function onClick(event) {
  if (event.target.tagName === "CAPTION") {
    if (pageBody.querySelector("section").className == "monthCalendar") {
      pageBody.replaceChildren(refferencees.allYears);
    } else if (pageBody.querySelector("section").className == "daysCalendar") {
      pageBody.replaceChildren(refferencees["year" + currYear + "AllMonths"]);
    }
  }
  if (event.target.tagName === "TD" && event.target.className == "day") {
    let selectedYearOrMonth = event.target.firstElementChild.textContent;
    if (selectedYearOrMonth == "2020") {
      currYear = "2020";
      pageBody.replaceChildren(refferencees.year2020AllMonths);
    } else if (selectedYearOrMonth === "2021") {
      currYear = "2021";
      pageBody.replaceChildren(refferencees.year2021AllMonths);
    } else if (selectedYearOrMonth === "2022") {
      currYear = "2022";
      pageBody.replaceChildren(refferencees.year2022AllMonths);
    } else if (selectedYearOrMonth === "2023") {
      currYear = "2023";
      pageBody.replaceChildren(refferencees.year2023AllMonths);
    }
    if (selectedYearOrMonth == "Jan") {
      pageBody.replaceChildren(refferencees["year" + currYear + "January"]);
    } else if (selectedYearOrMonth == "Feb") {
      pageBody.replaceChildren(refferencees["year" + currYear + "February"]);
    } else if (selectedYearOrMonth == "Mar") {
      pageBody.replaceChildren(refferencees["year" + currYear + "March"]);
    } else if (selectedYearOrMonth == "Apr") {
      pageBody.replaceChildren(refferencees["year" + currYear + "April"]);
    } else if (selectedYearOrMonth == "May") {
      pageBody.replaceChildren(refferencees["year" + currYear + "May"]);
    } else if (selectedYearOrMonth == "Jun") {
      pageBody.replaceChildren(refferencees["year" + currYear + "June"]);
    } else if (selectedYearOrMonth == "Jul") {
      pageBody.replaceChildren(refferencees["year" + currYear + "July"]);
    } else if (selectedYearOrMonth == "Aug") {
      pageBody.replaceChildren(refferencees["year" + currYear + "August"]);
    } else if (selectedYearOrMonth == "Sept") {
      pageBody.replaceChildren(refferencees["year" + currYear + "September"]);
    } else if (selectedYearOrMonth == "Oct") {
      pageBody.replaceChildren(refferencees["year" + currYear + "October"]);
    } else if (selectedYearOrMonth == "Nov") {
      pageBody.replaceChildren(refferencees["year" + currYear + "November"]);
    } else if (selectedYearOrMonth == "Dec") {
      pageBody.replaceChildren(refferencees["year" + currYear + "December"]);
    }
  }
}
