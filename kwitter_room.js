 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBW6u32JskddeKJH75Xi9UkpD1w41wugXE",
  authDomain: "kwitter-40c58.firebaseapp.com",
  databaseURL: "https://kwitter-40c58-default-rtdb.firebaseio.com",
  projectId: "kwitter-40c58",
  storageBucket: "kwitter-40c58.appspot.com",
  messagingSenderId: "575895655754",
  appId: "1:575895655754:web:62f230084c9940e5619db3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
