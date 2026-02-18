// Page fade in
document.body.style.opacity = 0;
window.onload = () => {
  document.body.style.transition = "1.2s";
  document.body.style.opacity = 1;
};

// Typing animation
const text = "Python Developer | DBMS | DSA | Web Enthusiast";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type,80);
  }
}
type();

// Dark Light toggle
document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("themeToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent = 
      document.body.classList.contains("light") ? "☀" : "🌙";
  });

});
;
toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀" : "🌙";
};

// Scroll progress
window.onscroll = () => {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress").style.width = (winScroll / height) * 100 + "%";
};

// Section fade animation
const sections = document.querySelectorAll("section");
sections.forEach(sec=>{
  sec.style.opacity = 0;
  sec.style.transform = "translateY(60px)";
  sec.style.transition = "1s";
});

window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    if(window.scrollY > sec.offsetTop - 500){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");

chatInput.addEventListener("keypress", e => {
  if(e.key === "Enter"){
    sendMessage(chatInput.value);
    chatInput.value = "";
  }
});

function sendMessage(text){
  if(!text) return;

  chatBody.innerHTML += `<div class="msg-user">${text}</div>`;
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(()=>reply(text.toLowerCase()),600);
}

function reply(msg){
  let answer = "I'm Chandan's AI assistant 🤖 Ask about skills, projects, or experience!";

  if(msg.includes("skill"))
    answer = "Chandan is skilled in Python, DBMS, SQL, DSA, HTML, CSS, JavaScript, NumPy, and Pandas.";

  else if(msg.includes("project"))
    answer = "He built a Student Database System, Python projects, an AI chatbot, and this portfolio website.";

  else if(msg.includes("internship"))
    answer = "He completed a 4-week Python internship working on real-world coding tasks.";

  else if(msg.includes("contact"))
    answer = "You can reach Chandan via the contact form or his email listed on the site.";

  else if(msg.includes("who are you"))
    answer = "I’m Chandan’s personal AI assistant 🤖 here to guide you through his portfolio!";

  chatBody.innerHTML += `<div class="msg-bot">${answer}</div>`;
  chatBody.scrollTop = chatBody.scrollHeight;
}

