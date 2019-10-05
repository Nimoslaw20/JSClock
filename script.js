var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partyTime = false;
var evening = 18;

var events = {
  "wake": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg",
    "text": "Wake up!"
  },
  "party": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg",
    "text": "Let's party!"
  },
  "lunch": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg",
    "text": "Let's have some lunch!"
  },
  "naptime": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg",
    "text": "Sleep tight!"
  },
  "morning": {
    "image": "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg",
    "text": "Good morning!"
  },
  "evening": {
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg",
    "text": "Good evening!"
  },
  "afternoon": {
    "image": "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg",
    "text": "Good afternoon!"
  }
};


var showCurrentTime = function(){
  var clock = document.getElementById('clock');
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var date = currentDate.toUTCString();
  var meridian = hours >= noon ? 'PM': 'AM';
  clock.innerText = date;
  var lolcatImage = document.getElementById('lolcatImage');

//Party time
 if (partyTime){
  var {party} =events.party;
  lolcatImage.src = party.image;
  timeEvent = party.text;
  var partyButton = document.getElementById('partyTimeButton');
  partyButton.innerText = 'End Party';
 }
 //lunch time
 else if (hours == lunchtime){
  var {image, text} = events.lunch;
  lolcatImage.src = image;
  timeEvent.innerText = text;
}
//morning
 else if (hours == wakeuptime){
  var {wake} = events.wake;
  lolcatImage.src = wake.image;
  timeEvent.innerText = wake.text;
 } 
 //nap time
 else if (hours == naptime){
  var {image, text} = events.naptime;
  lolcatImage.src = image;
  timeEvent.innerText = text;
 }

//afternoon
 else if (hours < noon){
  var {image, text} = events.morning;
  lolcatImage.src = image;
  timeEvent.innerText = text;
 }

 //evening
 else if (hours >= evening){
  var {image, text} = events.evening;
  lolcatImage.src = image;
  timeEvent.innerText = text;

 } else {
  var {image, text} = events.afternoon;
  lolcatImage.src = image;
  timeEvent.innerText = text;
 };   
};


window.onload = function(){
  setInterval(()=>{
    showCurrentTime();
  }, 1000);
  eventTriggers();
};


function eventTriggers(){
  var wakeSelector = document.getElementById('wakeUpTimeSelector');
  wakeSelector.addEventListener('change', ()=> {
    //console.log(wakeSelector.value);
    wakeuptime = wakeSelector.value;
    partyTime = false;
  });

  var lunchSelector = document.getElementById('lunchTimeSelector');
  lunchSelector.addEventListener('change', () => {
    //console.log(lunchSelector.value);
    lunchtime = lunchSelector.value;
    partyTime = false;
  });

  var napSelector = document.getElementById('napTimeSelector');
  napSelector.addEventListener('change', () =>{
    //console.log(napSelector.value);
    naptime = napSelector.value;
    partyTime = false;

  });

  var partyButton = document.getElementById('partyTimeButton');
  partyButton.addEventListener('click', ()=>{
    partyTime = true;
  })

}