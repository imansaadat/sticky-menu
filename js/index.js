window.addEventListener("scroll" , ()=>{
    const header = document.querySelector(".main-header");
    header.classList.toggle("sticky" , window.scrollY > 0)
})


