function Messages(msg, showUsername) {
  let container = document.createElement('div');
  let isMe = msg.email === user.email;

  container.style.textAlign = isMe ? 'right' : 'left';
  container.style.margin = '20px';

  container.innerHTML = `
    ${showUsername ? 
      `<div class="msg-name">
        ${msg.email.split('@')[0]}
      </div>` 
      : ''}
    
    <div style="display: flex; justify-content: ${isMe ? 'flex-end' : 'flex-start'}"> 
      ${
        !isMe ? 
    `<img style="border-radius: 50%; background-color: #000;" src="${msg.photoURL ? msg.photoURL : './img/hexagon.png'}" width="50px" height="50px" />` 
        : ''
      }
      
      <div class="bubble ${isMe ? 'msg-bubble-right' : 'msg-bubble-left'}">
        <div>${msg.text}</div>
        <div class="msg-date-time">${moment(msg.date).format('MM/DD/YYYY hh:mm')}</div>
      </div>
    </div>
    
    
    
  `
  return container;
}