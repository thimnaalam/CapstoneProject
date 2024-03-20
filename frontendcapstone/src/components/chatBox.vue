<template>
    <div v-if="showchatBox" class="chat-box">
        <input type="text" v-model="newMessage" :disabled="!isAdmin" @keyup.enter="sendMessage" placeholder="Type a message...">
    </div>
    <div v-else class="chat-icon" @click="togglechatBox">
      
      <img src="../assets/chatBox.png" alt="Chat Icon">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showchatBox: false,
        messages: [],
        newMessage: '',
        isAdmin: true
      };
    },
    methods: {
    togglechatBox() {
      this.showchatBox = !this.showchatBox;
    },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.sendMessageToAdmin(this.newMessage);
        this.messages.push(this.newMessage);
        this.newMessage = '';
      }
    },
    sendMessageToAdmin(message) {
      //  HTTP request to send the message to the admin
      console.log('Sending message to admin:', message);
    
      console.log('Message sent to admin:', message);
    }
  }

  };
  </script>
  
  <style scoped>

img{
    width: 50px;
    height: 50px;
    margin-left: 95%;
    position:absolute;
    bottom: 20%;
}
  .chat-box {
    width: 300px;
    border: 1px solid #f56c03;
    padding: 10px;
    margin-bottom: 2%;
    margin-left: 80%;
  }
  
  .messages {
    height: 200px;
    overflow-y: auto;
  }
  
  .message {
    margin-bottom: 5px;
  }
  input{
    width: 280px;
  }
  </style>
  