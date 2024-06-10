// window.onload = function move() {

//     let elem = document.getElementById("greenBar");
//     let stepValue = 0;
//     let id = setInterval(frame, 500);

//     function frame() {

//       if (stepValue >= 100) {
//         clearInterval(id);
//         // window.location.href = 'xenium_details.html';
//         document.getElementById('main-container').style.display="none";
//         let details=document.getElementById('xenium_details');
//         details.style.display="block";
//         // details.style.visibility="visible";

//       } else {
//         elem.style.width = (stepValue + 10) + "%";
//         elem.innerHTML = (stepValue + 10) + "%";
//         stepValue = (stepValue + 10);
//       }
//     }
//   }
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
//--------------------------------------------------------------------------------
//----------------------- JAVASCRIPT code for TAB section ------------------------
//--------------------------------------------------------------------------------
function code_crusade() {
  document.getElementById('code-crusade').classList.remove('hidden');
  document.getElementById('web-designing').classList.add('hidden');
  document.getElementById('impromptu-relay').classList.add('hidden');
  document.getElementById('group-discussion').classList.add('hidden');
  const name=document.querySelectorAll('.event-name');
  for(var i=0;i<name.length;i++){
      name[i].classList.remove('highlight')
      if (i==0){
          name[i].classList.add('highlight')
      }
      
  }
}
function web_designing() {
  document.getElementById('code-crusade').classList.add('hidden');
  document.getElementById('web-designing').classList.remove('hidden');
  document.getElementById('impromptu-relay').classList.add('hidden');
  document.getElementById('group-discussion').classList.add('hidden');
  const name=document.querySelectorAll('.event-name');
  for(var i=0;i<name.length;i++){
      name[i].classList.remove('highlight')
      if (i==1){
          name[i].classList.add('highlight')
      }
      
  }
}
function impromptu_relay() {
  document.getElementById('code-crusade').classList.add('hidden');
  document.getElementById('web-designing').classList.add('hidden');
  document.getElementById('impromptu-relay').classList.remove('hidden');
  document.getElementById('group-discussion').classList.add('hidden');
  const name=document.querySelectorAll('.event-name');
  for(var i=0;i<name.length;i++){
      name[i].classList.remove('highlight')
      if (i==2){
          name[i].classList.add('highlight')
      }
      
  }
}
function group_discussion() {
  document.getElementById('code-crusade').classList.add('hidden');
  document.getElementById('web-designing').classList.add('hidden');
  document.getElementById('impromptu-relay').classList.add('hidden');
  document.getElementById('group-discussion').classList.remove('hidden');

  const name=document.querySelectorAll('.event-name');
  for(var i=0;i<name.length;i++){
      name[i].classList.remove('highlight')
      if (i==3){
          name[i].classList.add('highlight')
      }
      
  }
  
}

//--------------------------------------------------------------------------------
//----------------------- JAVASCRIPT code for FAQ section ------------------------
//--------------------------------------------------------------------------------
const accordionContent = document.querySelectorAll(".accordion-content"); 

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click" , () =>{
      item.classList.toggle("open");

      let description = item.querySelector(".description");
      if(item.classList.contains("open")){
          description.style.height = `${description.scrollHeight}px`;
          item.querySelector("i").classList.replace("fa-plus"," fa-minus");  
      }else{
          description.style.height = "0px";
          item.querySelector("i").classList.replace("fa-minus"," fa-plus");
      }
      removeOpen(index);

  })
})

function removeOpen(index1){
  accordionContent.forEach((item2,index2) =>{
      if(index1 != index2){
          item2.classList.remove("open");
          let des = item2.querySelector(".description");
          des.style.height = "0px";
          item2.querySelector("i").classList.replace("fa-minus"," fa-plus");

      }
  }
  
  ) 
}






const waitForImages = () => {
  const images = [...document.querySelectorAll(".xenium-loading")];
  const totalImages = images.length;
  let loadedImages = 0;
  const loaderEl = document.querySelector(".loader span");
  
  images.forEach((image) => {
    imagesLoaded(image, (instance) => {
      if (instance.isComplete) {
        loadedImages++;
        let loadProgress = loadedImages / totalImages;

        gsap.to(loaderEl, {
          duration: 1,
          scaleX: loadProgress,
          backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
        });

        if (totalImages == loadedImages) {
          gsap.timeline()
            .to(".loading__wrapper", {
            duration: 0.8,
            opacity: 0,
            pointerEvents: "none",
          })
            .call(() => init());
        }
      }
    });
  });
};

waitForImages();