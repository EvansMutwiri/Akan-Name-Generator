function akanName() {
  var day = document.getElementById("day").value;
  var dd = parseInt(day);
  var month = document.getElementById("month").value;
  var mm = parseInt(month);
  var year = document.getElementById("year").value;
  var yy = parseInt(year.toString().slice(2));

  // cc = year/100
  var cc = parseInt(year.toString().slice(0, 2));

  var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  // Name arrays
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (document.getElementsByClassName("gender").checked) {
    var gender = "male";
  }
  else{
    var gender = "female";
  }

  // Validate entries.
  if (dd <= 0 || dd > 31) {
    alert("invalid date");
  }
  else if (mm <= 0 || mm > 12) {
    alert("invalid month");
  }
  else if (mm == 2 && dd > 29) {
    alert("invalid day of month");
  }
  else if (yy % 4!==0 && dd > 28) {
    alert("invalid day of month!")
  }
  else if (cc < 19) {
    alert("Hahaha.. Please use correct year!!")
  }
  //  Dom output
  else if (Math.round(result) == 0 && gender === 'male') {
    document.getElementById("name").innerHTML = ("You were born on Sunday, your Akan Name is " + maleNames[0]);
    }
  else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === 'male') {
    document.getElementById("name").innerHTML = ("You were born on Monday, your Akan Name is " + maleNames[1]);
    }
  else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === 'male') {
    document.getElementById("name").innerHTML = ("You were born on Tuesday, your Akan Name is " + maleNames[2]);
    }
  else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === 'male') {
    document.getElementById("name").innerHTML = ("You were born on Wednesday, your Akan Name is " + maleNames[3]);
    }
  else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === 'male') {
    document.getElementById("name").innerHTML = ("You were born on Thursday, your Akan Name is " + maleNames[4]);
    }
  else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === 'male') {
    document.getElementById("name").innerHTML = ("You were born on Friday, your Akan Name is " + maleNames[5]);
    }
  else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === 'male') {
    document.getElementById("name").innerHTML = ("You were born on Saturday, your Akan Name is " + maleNames[6]);
    }
  
}