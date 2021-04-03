const goTop = document.querySelector(".gotop-btn");

window.addEventListener("scroll", scrollFunction)

function scrollFunction(){
    if(window.pageYOffset > 340){
        goTop.style.display = "block"
    }
    else{
        goTop.style.display = "none"
    }
}



const acordionItemHeader = document.querySelectorAll(".acordion-item-header");

acordionItemHeader.forEach(acordionItemHeader => {
    acordionItemHeader.addEventListener("click", event =>{
        acordionItemHeader.classList.toggle("active");
        acordionItemHeader.classList.toggle("b-bottom");
    })
})


const navbarToggle = document.getElementsByClassName("navbar-toggle")[0]
const navbarLink = document.getElementsByClassName("navbar-links")[0]

navbarToggle.addEventListener("click", () => {
    navbarLink.classList.toggle('active')
})


const icotgle = document.getElementById("ham-icon")

icotgle.addEventListener("click", () => {
    
    if ( document.getElementById("ham-icon").classList.contains('fa-bars') ){
        document.getElementById("ham-icon").classList.add('fa-times');
        document.getElementById("ham-icon").classList.remove('fa-bars');
    }
    else{
        document.getElementById("ham-icon").classList.add('fa-bars');
        document.getElementById("ham-icon").classList.remove('fa-times');
    }



})



    



//document.getElementById("ham-icon").classList.add('fa-chart-bar');

//document.getElementById("MyElement").classList.remove('fa-bars');



