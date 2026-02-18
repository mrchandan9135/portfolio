// Smooth page fade
document.body.style.opacity = 0;
window.onload = () => {
  document.body.style.transition = "1s";
  document.body.style.opacity = 1;
};

// Typing animation
const text = "Python Developer | DBMS | DSA | Web Enthusiast";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 80);
  }
}
typeText();

// Theme toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "☀" : "🌙";
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const percent = (winScroll / height) * 100;
  document.getElementById("progress").style.width = percent + "%";
});

// Chatbot system
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");

chatInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage(chatInput.value.trim());
    chatInput.value = "";
  }
});

function sendMessage(msg) {
  if (!msg) return;

  chatBody.innerHTML += `<div class="msg-user">${msg}</div>`;
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => botReply(msg.toLowerCase()), 500);
}

function botReply(msg) {
  let reply = "Ask me about skills, projects or internship!";

  if (msg.includes("skill"))
    reply = "Chandan knows Python, DBMS, DSA, HTML, CSS, JavaScript, NumPy and Pandas.";

  else if (msg.includes("project"))
    reply = "Projects include Student Database System, AI chatbot and portfolio website.";

  else if (msg.includes("internship"))
    reply = "Chandan completed a 4-week Python internship.";

  else if (msg.includes("who"))
    reply = "I'm Chandan's personal AI assistant 🤖";

  chatBody.innerHTML += `<div class="msg-bot">${reply}</div>`;
  chatBody.scrollTop = chatBody.scrollHeight;
}
