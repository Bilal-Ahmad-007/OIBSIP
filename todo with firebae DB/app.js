const firebaseConfig = {
  apiKey: "AIzaSyAxQFWK6nMaaTx605Ph3v2dggrRXZ8a6zI",
  authDomain: "todoapp-1e8e6.firebaseapp.com",
  databaseURL: "https://todoapp-1e8e6-default-rtdb.firebaseio.com",
  projectId: "todoapp-1e8e6",
  storageBucket: "todoapp-1e8e6.appspot.com",
  messagingSenderId: "93006812715",
  appId: "1:93006812715:web:b09b65da05f4f1c3077c6e",
};

const fbr = firebase.initializeApp(firebaseConfig);
console.log(fbr.database);

function addTodo() {
  var input = document.getElementById("input");

  var key = firebase.database().ref("Todos").push().key;
  console.log(key);
  var obj = {
    
    value: input.value,
    key: key,
  };

  var key = firebase.database().ref("Todos").child(key).set(obj);

  input.value = "";
}

firebase
  .database()
  .ref("Todos")
  .on("child_added", (data) => {
    console.log(data.val());

    var liElement = document.createElement("li");
    var liText = document.createTextNode(data.val().value);
    liElement.appendChild(liText);

    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Dalete");
    // Get the div element by its id
var div = document.getElementById("listDev");

// Change the background image
div.style.backgroundImage = "url('bg5.jpeg')";

    
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("onclick", "deleteLi(this)");
    delBtn.setAttribute("class", "btn");
    delBtn.setAttribute("id", data.val().key);
    
    var EditBtn = document.createElement("button");
    var EditBtnText = document.createTextNode("Edit");
    EditBtn.appendChild(EditBtnText);
    EditBtn.setAttribute("onclick", "editLi(this)");
    EditBtn.setAttribute("class", "btn");
    EditBtn.setAttribute("id", data.val().key);
    
    var list = document.getElementById("list");
    list.appendChild(liElement);
    liElement.appendChild(delBtn);
    liElement.appendChild(EditBtn);
  });

function DaleteAll() {
  var list = document.getElementById("list");
  list.remove();
  firebase.database().ref("Todos").remove();
  var div = document.getElementById("listDev");
  div.style.backgroundImage = "none";
  
}
function deleteLi(a) {
    console.log(a.id);
    a.parentNode.remove();
    firebase.database().ref("Todos").child(a.id).remove();
    // Get the div element by its id
    var div = document.getElementById("listDev");
    // Get the list of li elements within the div
    var liElements = div.getElementsByTagName("li");
    if(liElements.length==0){
        div.style.backgroundImage = "none";
    }

 
}
function editLi(e) {
  let li = e.parentNode.firstChild.textContent;

  var inputField = prompt("enter updated value", li);

  var editObj = {
    value: inputField,
    key: e.id,
  };

  e.parentNode.firstChild.nodeValue = inputField;

  firebase.database().ref("Todos").child(e.id).set(editObj);
}
