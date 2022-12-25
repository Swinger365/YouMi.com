const aboutUs = document.querySelector("#aboutUs");
const chat = document.querySelector("#chat");
const burger = document.querySelector("#burger");
const psychologists = document.querySelector("#psychologists");
const hidden = document.querySelector("#hidden-menu");
burger.addEventListener("touchstart",(evt)=>{
    hidden.classList.toggle("hidden");
});
burger.addEventListener("click",(evt)=>{
    hidden.classList.toggle("hidden");
});
aboutUs.addEventListener("click",(evt)=>{
    window.location.href = "../pages/about us.html"
});
psychologists.addEventListener("click",(evt)=>{
    window.location.href = "../pages/psychologists.html"
});
// chat.addEventListener("click", (evt)=>{
//     window.locatio.href = "../pages/chat.html";
// })
