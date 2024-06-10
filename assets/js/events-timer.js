

//  change id of days hours minutes and seconds in html as well as js file


let api = "https://eventspgdav.onrender.com/events/parikalan"

async function fetchData(api) {
    try {
      const response = await fetch(api);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

function failedToLoad() {
    const container1 = document.getElementById("upcomingEventsContainer");
    const container2 = document.getElementById("pastEventsContainer");
    const cardContainer1 = document.createElement("div");
    const cardContainer2 = document.createElement("div");
    cardContainer1.classList.add("failed-to-load");
    cardContainer1.innerHTML = `
    <div class="failed-to-load">
        <p>Failed to load events</p>
    </div>
    `;
    cardContainer2.classList.add("failed-to-load");
    cardContainer2.innerHTML = `
    <div class="failed-to-load">
        <p>Failed to load events</p>
    </div>
    `;
    container1.appendChild(cardContainer1);
    container2.appendChild(cardContainer2);    
}    



// Function to create a card based on event data
function createEventCard(event , index) {

  

    const containerId = eventIsUpcoming(event) ? "upcomingEventsContainer" : "pastEventsContainer";
    const container = document.getElementById(containerId);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("item-container");

    // HTML structure for the card
    cardContainer.innerHTML = `
    <div class="item-container">
        <div class="img-container">
            <img src="https://drive.google.com/uc?id=${event.cloudImgId}" alt="Event image">
        </div>

        <div class="body-container">
            <div class="overlay"></div>
            <div class="event-info">
                <p class="title">${event.name}</p>
                <div class="separator"></div>


                <div class="additional-info">
                    <p class="line" id="line2"><strong> Registration ends in</strong></p>
                    <p class="register" id="register">Registeration Closed!</p>
                    <div id="time" class="time" style="zoom: 0.4; margin-left=100px;">
                        <div class="circle" style="--clr: #fff" ;>
                            <div class="dots day_dot1"></div>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70" id="dd1" class="dd"></circle>
                            </svg>
                            <div id="days1" class="days">00<br><span>Days</span></div>
                        </div>

                        <div class="circle" style="--clr: #ff2972" ;>
                            <div class="dots hr_dot1"></div>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70" id="hh1" class="hh"></circle>
                            </svg>
                            <div id="hours1" class="hours">00<br><span>Hours</span></div>
                        </div>

                        <div class="circle" style="--clr: #fee800" ;>
                            <div class="dots min_dot1"></div>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70" id="mm1" class="mm"></circle>
                            </svg>
                            <div id="minutes1" class = "minutes">00<br><span>Mins</span></div>
                        </div>
                        <div class="circle" style="--clr: #04fc43" ;>
                            <div class="dots sec_dot1"></div>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70" id="ss1" class="ss"></circle>
                            </svg>
                            <div id="seconds1" class = "seconds">00<br><span>Sec</span></div>
                        </div>
                    </div>
                    <p class="info">

                    <p>
                        <i class="fa-solid fa-calendar-days"></i>
                        ${event.Date}
                    </p><br>
                    <p>
                        <i class="fa-solid fa-clock"></i>
                        ${event.Time}

                    </p><br>
                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        ${event.Venue}
                    </p>
                    <br>
                    </p>

                    <br><br><br>
                    <br><br><br>
                </div>
            </div>

            <!-- <div class="border"> -->

            <div class="des modal-open" data-modal="modal2">
                <button class="action"> REGISTER </button>
            </div>
        // </div> 
    </div>
    `;
    const exploreButton = cardContainer.querySelector(".modal-open");
    exploreButton.addEventListener("click", function() {
        window.location.href = `./registration.html?${event._id}`
    });


    // console.log(`https://drive.google.com/uc?id=${event.cloudImgId}`)

    let days1 = cardContainer.querySelector('.days');
    let hours1 = cardContainer.querySelector('.hours');
    let minutes1 = cardContainer.querySelector('.minutes');
    let seconds1 = cardContainer.querySelector('.seconds');
  
    let day_dot1 = cardContainer.querySelector('.day_dot1');
    let hr_dot1 = cardContainer.querySelector('.hr_dot1');
    let min_dot1 = cardContainer.querySelector('.min_dot1');
    let sec_dot1 = cardContainer.querySelector('.sec_dot1');
    let endDate1 = event.Date ;
    // console.log(event.Date);
    
    let x1 = setInterval(function () {
        let now = new Date(endDate1).getTime();
        let countDown = new Date().getTime();
        let distance = now - countDown
    

        //time calculation for days,hours,minutes and seconds
    
        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((distance % (1000 * 60)) / 1000);
    
    
        days1.innerHTML = d + "<br><span>Days</span>";
        hours1.innerHTML = h + "<br><span>Hours</span>";
        minutes1.innerHTML = m + "<br><span>Mins</span>";
        seconds1.innerHTML = s + "<br><span>Sec</span>";
    
        //animate stroke
    
        let dd = cardContainer.querySelector('.dd' );
        let hh = cardContainer.querySelector('.hh' );
        let mm = cardContainer.querySelector('.mm' );
        let ss = cardContainer.querySelector('.ss' );
    
        // change id of dd hh mm ss
    
        dd.style.strokeDashoffset = 440 - (440 * d) / 30;
        //365 days in a year
        hh.style.strokeDashoffset = 440 - (440 * h) / 24;
        //24 hr in a day
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        //60min a day
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;
        day_dot1.style.transform = `rotateZ(${d * 12}deg) `;
        //360deg / 30days = 12
        hr_dot1.style.transform = `rotateZ(${h * 15}deg)`;
        //360deg / 24hrs = 15
        min_dot1.style.transform = `rotateZ(${m * 6}deg)`;
        //360deg / 60minutes = 6
        sec_dot1.style.transform = `rotateZ(${s * 6}deg)`;
        //360deg / 60seconds = 6
    
        if (distance <= 0) {
            clearInterval(x1);
            cardContainer.querySelector(".time").style.display = 'none';
            cardContainer.querySelector(".line").style.display = 'none';
            cardContainer.querySelector(".register").style.display = 'block';
            cardContainer.querySelector(".modal-open").style.display = 'none';
            cardContainer.querySelector(".register").style.color = 'red';
            
            return;
        }
    
    })
    // Return the created card container
    return cardContainer;
}

function eventIsUpcoming(event) {
    const eventDate = new Date(event.Date).getTime();
    const currentDate = new Date().getTime();
    return eventDate > currentDate;
}

// Function to render all event cards
async function renderEventCards() {
    const upcomingContainer = document.getElementById("upcomingEventsContainer");
    const pastContainer = document.getElementById("pastEventsContainer");

    const eventData = await fetchData(api);
    if (eventData.length === 0) {
        failedToLoad();
        return;
    }

    // Loop through the eventsData array and append each card to the corresponding container
    eventData.forEach((event, index) => {
        const eventCard = createEventCard(event, index);
        if (eventIsUpcoming(event)) {
            upcomingContainer.appendChild(eventCard);
        } else {
            pastContainer.appendChild(eventCard);
        }
    });
}
// Call the function to render event cards when the page loads
document.addEventListener("DOMContentLoaded", renderEventCards);