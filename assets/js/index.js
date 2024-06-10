//  Script for navbar hamburger responsivness

const mobile_nav= document.querySelector(".hamburger");
const nav_header = document.querySelector(".nav-elements");


const toggleNavbar = () => {
    // alert(" Aarohna ");
    nav_header.classList.toggle("active");
    // document.querySelector("body").style.overflow="hidden";
    if (nav_header.classList.contains("active")){
        document.body.style.overflow='hidden';
    }
    else{
        document.body.style.overflow='scroll';
    }

};



mobile_nav.addEventListener("click",() => toggleNavbar(
    
));



// logo click
const logo = document.querySelector(".Parikalan-logo");
const logo_clicked = () => {
    // logo.style.pointer = "cursor";
    if (window.location.href.includes('events')){
        window.location.href = "index.html";
    }
    else{
        window.location.href = "index.html";
    }
}
logo.addEventListener("click",() => logo_clicked());





$(document).ready(function(){
    $('#form-container-render').on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                // Handle success here
                alert('Form submitted successfully');
                $('#form-container-render')[0].reset();
                $('#website-hero').toggleClass('website-hero');
                $('#contact-form-render').toggleClass('contact-form-norender');
            },
            error: function(error) {
                // Handle error here
                alert('An error occurred');
            }
        });
    });
});


let elm = document.getElementById("contact-form-loader");
let body = document.getElementById("body");
let contactContent=document.getElementById("contact-form-render")
let websiteHero = document.getElementById("website-hero");
function showfun(){
    // console.log("clicked");;
    contactContent.classList.toggle("contact-form-norender");
    websiteHero.classList.toggle("website-hero");
    // body.classList.toggle("body-overflow");

}
elm.addEventListener('click',showfun);
let closeBtn=document.getElementById("close-btn");
function myfun(){
    contactContent.classList.toggle("contact-form-norender");
    websiteHero.classList.toggle("website-hero");
    // body.classList.remove("body-overflow");
}

closeBtn.addEventListener('click',myfun);