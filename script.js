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
const toggle = document.getElementById("themeToggle");
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
