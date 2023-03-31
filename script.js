historyContent = document.getElementById("History")
historyBtn = document.getElementById("history-btn")

historyBtn.addEventListener("click", ()=>{
    visionContent.classList.remove("active");
    goalsContent.classList.remove("active");
    historyContent.classList.toggle("active");
})

visionContent = document.getElementById("Vision")
visionBtn = document.getElementById("vision-btn")

visionBtn.addEventListener("click", ()=>{
    historyContent.classList.remove("active");
    goalsContent.classList.remove("active");
    visionContent.classList.toggle("active");
})


goalsContent = document.getElementById("Goals")
goalsBtn = document.getElementById("goals-btn")

goalsBtn.addEventListener("click", ()=>{
    visionContent.classList.remove("active");
    historyContent.classList.remove("active");
    goalsContent.classList.toggle("active");
})


