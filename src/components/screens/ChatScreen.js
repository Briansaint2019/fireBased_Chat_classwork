function mountChatScreen() {
  let db = firebase.database();
  let messages = db.ref('messages/');

  $('#root').html(ChatScreen());
  initChatScreenListeners(messages);
}

function ChatScreen() {
  let container = document.createElement('div');

  container.id = 'chat-screen';
  container.classList.add('chat-screen');
  container.innerHTML = `
      <div class="chat-header"> 
        <div>  Hello ${window.user.email.split('@')[0]}! </div>
      
        <div id="signout-btn" class="signout-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 12.771h-3.091c-.542 0-.82-.188-1.055-.513l-1.244-1.674-2.029 2.199 1.008 1.562c.347.548.373.922.373 1.42v4.235h-1.962v-3.981c-.016-1.1-1.695-2.143-2.313-1.253l-1.176 1.659c-.261.372-.706.498-1.139.498h-3.372v-1.906l2.532-.001c.397 0 .741-.14.928-.586l1.126-2.75c.196-.41.46-.782.782-1.102l2.625-2.6-.741-.647c-.223-.195-.521-.277-.812-.227l-2.181.381-.342-1.599 2.992-.571c.561-.107 1.042.075 1.461.462l2.882 2.66c.456.414.924 1.136 1.654 2.215.135.199.323.477.766.477h2.328v1.642zm-2.982-5.042c1.02-.195 1.688-1.182 1.493-2.201-.172-.901-.96-1.528-1.845-1.528-1.186 0-2.07 1.078-1.85 2.234.196 1.021 1.181 1.69 2.202 1.495zm4.982-5.729v15l6 5v-20h-6z"/></svg>
        </div>
      </div>
      <div id="chat-messages" class="chat-messages"></div>
      
      <div class="chat-input-btn-container">
        <input type="text" class="chat-input-msg" id="chat-input-msg" placeholder="Show Me A Good Time" />
        <div id="chat-send-btn" class="chat-send-btn"> 
          <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"/></svg>
        </div>
      </div>
    `;

  return container;
}

function initChatScreenListeners(messages) {
  let sendMessage = () => {
    let date = new Date();
    let text = $("#chat-input-msg").val();

    messages.push({
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      date: date,
      text: text,
    });

    $("#chat-input-msg").val('');
  }

  $('#signout-btn').on('click', signOut);

  $('#chat-send-btn').on('click', sendMessage);

  $('#chat-input-msg').keypress(function (e) {
    if (e.keyCode === 13) {
      sendMessage();
    }
  }).keyup(function () {
    // we are going to do some cool stuff here 
  });

  messages.on('value', function (snapshot) {
    let msgs = snapshot.val();

    $('#chat-messages').html('');

    let currentPerson = '';

    for (let mid in msgs) {
      let msg = msgs[mid];
      let showUsername = true;

      if (user.email === msg.email) {
        currentPerson = msg.email;
        showUsername = false;
      }
      else if (currentPerson === msg.email) {
        showUsername = false;
      }
      else {
        currentPerson = msg.email;
      }

      $('#chat-messages').append(Messages(msg, showUsername));
    }
    scroll();
  });
}

function scroll() {
  let height = $('#chat-messages')[0].scrollHeight;
  $('#chat-messages').scrollTop(height);
}


