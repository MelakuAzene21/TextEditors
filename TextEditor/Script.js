const boldBtn = document.getElementById('bold');
const italicBtn = document.getElementById('italic');
const strikeBtn = document.getElementById('strike');
const underlineBtn = document.getElementById('underline');
const caseBtn = document.getElementById('case');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const centerBtn = document.getElementById('center');
const justifyBtn = document.getElementById('justify');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
let textArea = document.getElementById('textInputArea');

let lists=document.querySelectorAll("li");

Array.from(lists).forEach(function(ListItem){
    ListItem.addEventListener("click",function(){
        ListItem.classList.toggle("active");
    })
});

boldBtn.addEventListener("click",function(){
    textArea.classList.toggle("bold");
});
italicBtn.addEventListener("click",function(){
    textArea.classList.toggle("italic");
})
underlineBtn.addEventListener("click",function(){
    textArea.classList.toggle("underline")
});
caseBtn.addEventListener("click",()=>{
    textArea.classList.toggle("case")
})
strikeBtn.addEventListener("click",()=>{
    textArea.classList.toggle("strike");
})
leftBtn.addEventListener("click",()=>{
    textArea.classList.toggle("alignLeft")
})
rightBtn.addEventListener("click",()=>{
    textArea.classList.toggle("alignRight")
})
centerBtn.addEventListener("click",()=>{
    textArea.classList.toggle("alignCenter")
})
justifyBtn.addEventListener("click",()=>{
    textArea.classList.toggle("alignJustify")
})


let size=14;
increaseBtn.addEventListener("click",()=>{
    let textAreabtn=textArea.value;
    size+=1;
    textArea.style.fontSize=size+"px";
})
decreaseBtn.addEventListener("click",()=>{
    let textAreaValue=textArea.value;
    size-=1;
    textArea.style.fontSize=size+"px";
})