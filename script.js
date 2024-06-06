function convertDate() {
  var inputDate = document.getElementById("inputDate").value;
  var outputDate = document.getElementById("outputDate");

  if (inputDate.length == 7) {
    // Julian to Date conversion
    outputDate.textContent = julianToDate(inputDate);
  } else if (inputDate.length == 8) {
    // Date to Julian conversion
    outputDate.textContent = dateToJulian(inputDate);
  } else {
    outputDate.textContent = "Invalid input format";
  }
}

function julianToDate(julianDate) {
  var year = julianDate.substring(0, 4);
  var dayOfYear = julianDate.substring(4);
  var date = new Date(year, 0);
  date.setDate(dayOfYear);
  return formatDate(date);
}

function dateToJulian(dateString) {
  var year = dateString.substring(0, 4);
  var month = dateString.substring(4, 6) - 1;
  var day = dateString.substring(6);
  var date = new Date(year, month, day);
  var startOfYear = new Date(year, 0, 1);
  var dayOfYear = Math.floor((date - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
  return year + dayOfYear.toString().padStart(3, "0");
}

function formatDate(date) {
  var month = "" + (date.getMonth() + 1);
  var day = "" + date.getDate();
  var year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("");
}
