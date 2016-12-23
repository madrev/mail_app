const MessageStore = require("./message_store.js");

const Inbox =  {
  render: function() {
    let node = document.createElement("ul");
    node.className = "messages";
    let messages = MessageStore.getInboxMessages();
    messages.forEach(msg => {
      let rendered = this.renderMessage(msg);
      node.appendChild(rendered);
    });

    return node;
  },

  renderMessage: function(msg) {
    let liNode = document.createElement("li");
    liNode.className = "message";
    liNode.innerHTML = `<span class="from">${msg.from}</span><span class="subject">${msg.subject}</span><span class="body">${msg.body}</span>`;
    return liNode;
  }
};

module.exports = Inbox;
