// getting modal open
let modalBtns = document.querySelectorAll('.modal-open');
let mobile_nav2= document.querySelector(".hamburger");

modalBtns.forEach(function(btn){
    btn.onclick=function(){
        var modal=btn.getAttribute('data-modal');

        document.getElementById(modal).style.display='block';
        document.body.style.overflow='hidden'
    

    }
})

let closeBtns=document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
    btn.onclick=function(){
        
        
        btn.closest('.modal').style.display='none';
        document.body.style.overflowY='scroll';
        
    }
})

window.onclick=function(e){
    if(e.target.className==='modal'){
        
        e.target.style.display='none';
        document.body.style.overflowY='scroll';
    }
}