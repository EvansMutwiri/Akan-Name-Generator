function akanName() {
  var day = document.getElementById("day").value;
  var dd = parseInt(day);
  var month = document.getElementById("month").value;
  var mm = parseInt(month);
  var year = document.getElementById("year").value;
  var yy = parseInt(year.toString().slice(2));

  // cc = year/100
  var cc = parseInt(year.toString().slice(0, 2));
  

}