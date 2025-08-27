function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  input.value = "";

  // Câu trả lời mẫu (cứng)
  let reply = "Xin chào, tôi là chatbot!";
  if (message.includes("hello") || message.includes("xin chào")) {
    reply = "Chào bạn 👋! Bạn cần tôi giúp gì?";
  } else if (message.includes("tên")) {
    reply = "Tôi là chatbot demo được viết bằng JavaScript.";
  } else if (message.includes("bye")) {
    reply = "Tạm biệt, hẹn gặp lại!";
  }

  setTimeout(() => addMessage(reply, "bot"), 500);
}

function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
