//YOUR FIRE BASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyA-lIoP-cw9nlZBFVxnplUjAwVFlGxmChI",
  authDomain: "pneumonia-c91bc.firebaseapp.com",
  databaseURL: "https://pneumonia-c91bc-default-rtdb.firebaseio.com",
  projectId: "pneumonia-c91bc",
  storageBucket: "pneumonia-c91bc.appspot.com",
  messagingSenderId: "446899025335",
  appId: "1:446899025335:web:eccea1dc345d3270a6a432"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
      like2 = false;
      user_name = "Unknown";
      room_name = "Pneumonia2";
  
  function send()
  {
    msg = document.getElementById("msg").value;
    if(msg != ""){
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
  }
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
           console.log(firebase_message_id);
             console.log(message_data);
             name = message_data['name'];
             message = message_data['message'];
           like = message_data['like'];
           name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick (1).png'></h4>";
           message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  
          row = name_with_tag + message_with_tag +like_button + span_with_tag;
          like2 = false;       
          document.getElementById("output").innerHTML += row;
  //End code
        } });  }); }
  getData();
  
  function updateLike(message_id)
  {
    if(like2 == false){
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes  
     });
     like2 = true;
    }
  }
  
  