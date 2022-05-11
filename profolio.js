const contactbtn = document.querySelector(".btn-contact");
const formpage = document.querySelector(".contactus-form")
const closebtn = document.querySelector(".material-symbols-outlined")


function show(){
  formpage.classList.add("show");
}

function hide(){
    formpage.classList.remove("show")
}



contactbtn.addEventListener("click", show)
closebtn.addEventListener("click", hide)