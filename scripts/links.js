const hiddenLog = document.querySelector("#hiddenLog");
const aboutUs = document.querySelector("#aboutUs");
const chat = document.querySelector("#chat");
const burger = document.querySelector("#burger");
const rates = document.querySelector("#rates");
const psychologists = document.querySelector("#psychologists");
const hidden = document.querySelector("#hidden-menu");
const personalAcc = document.querySelector("#personalAccount");
function personalAccount(evt){
    hiddenLog.classList.toggle("hidden");
}
rates.addEventListener("click",(evt)=>{
    window.location.href = "../pages/rates.html"
});
personalAcc.addEventListener("click",(evt)=>{
    personalAccount();;
})
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
