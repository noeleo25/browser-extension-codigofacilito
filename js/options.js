var App = App || {};

App.Preferences = ( () => {
  function init() {
    setInputSelectedTime();
    addInputEventListener();
  }

  function setInputSelectedTime(){
    const timeSelectorEl = document.getElementById("time-selector");

    chrome.storage.sync.get("timeSelected", function (val) {
      if(val != undefined && val != null){
        var timeSelectedByUser = val.timeSelected;
        timeSelectorEl.value = timeSelectedByUser;
      }
    });
  }

  function addInputEventListener() {
    const timeSelectorEl = document.getElementById("time-selector");
    timeSelectorEl.addEventListener("change", (e) => 
    { 
      saveOptions(e) 
    });
  }

  function saveOptions(e) {
    const timeSelected = e.target.value;
    chrome.storage.sync.set({
        timeSelected: timeSelected
    });
  }

  init();
})();