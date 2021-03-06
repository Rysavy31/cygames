const socket = io();
socket.emit("hello");
socket.on("helloClient",function(data){
  console.log(data);
});

function login(){
  socket.emit("startSession", {userName: $('#userName').val()});
  return false;
}

function sendMessage(){
  socket.emit('chat message', {
    msg: $('#m').val(),
    groupName: "Main Room"
  });
  $('#m').val('');
  return false;
}

socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg.sender + ': '+msg.message));
});
