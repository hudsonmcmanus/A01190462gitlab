//Global list for the history so it isnt reset by accident
var historyList = [];
//This appends the movie to the movie list
function appendToList() {
  var inputText = document.getElementById("text").value;
  var li = document.createElement("li");
  var listItem = document.createTextNode(inputText);
  li.appendChild(listItem);
  //check for whitespace
  if (inputText.trim() === '') {
    alert("You must write something!");
  } else {
    if (!(historyList.includes(inputText))){
      document.getElementById("movieGroup").appendChild(li);
    }
    document.getElementById("text").value = "";
    history(inputText, historyList);
  }

}

// Completley clears the table and the history array, including the movie list
function clearList() {
  document.getElementById("movieGroup").innerHTML = "";
  document.getElementById("myTable").innerHTML = "";
  historyList = [];
}

/* This function adds all the movies to an array and counts their occurence, then passes
it to other functions to be processed*/
function history(input, historyCount) {
  if (input == "") {
  } else {
    historyCount.push(input);
    console.log(historyCount)
    var amount = 0
    for (i = 0; i < historyCount.length; i++) {
      if (historyCount[i] == input) { amount++ }
    }
    if (amount === 1) {
      amount = String("(" + amount + ")")
      tableInput(input, amount);
    } else {
      amount = String("(" + amount + ")")
      tableAmount(amount, input);
    }
  }
}

//This function changes the amount that the movie has been watched
function tableAmount(watchCount, title) {
  document.getElementById(title).innerHTML = watchCount;
}

// This function creates a new cell in the table
function tableInput(text, count) {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  //Setting the id of the cell to the input, making it easier to find later
  cell2.setAttribute("id", text)
  cell1.innerHTML = text;
  cell2.innerHTML = count;

}




