const btn = document.querySelector("#Btn");
let flag = true;
btn.addEventListener('click',()=>{
    document.body.classList.toggle("dark-mode");
    flag = !flag;
    btn.innerText = flag?"Dark Mode":"light Mode" 
})