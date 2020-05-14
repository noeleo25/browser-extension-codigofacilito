
chrome.storage.sync.get("timeSelected", function (val) {
  if(val != undefined && val != null){
    var timeSelectedByUser = val.timeSelected;
    filterByTime(timeSelectedByUser);
  }
});

function filterByTime(time){
  const times = document.querySelectorAll("div.course-horizontal-card .box > span.align-icon");
  const maxTime = time;
  times.forEach(tm => {
    validateTime(tm, maxTime);
  })
}

function validateTime(time, maxTime){
  const html = time.innerText;
  const hours = html.charAt(0);
  if(hours < maxTime)
    setNewStyle(time);
}

function setNewStyle(time){
  time.style.color = "green";
  time.style.fontWeight = "bold";

  const parentCard = time.closest(".card.course-horizontal-card");
  parentCard.style.border = "2px solid green";
}