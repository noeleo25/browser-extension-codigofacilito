chrome.runtime.onInstalled.addListener( () => {
  chrome.storage.sync.set( { timeSelected: 2}, () => {
    console.log("Tiempo seleccionado por defecto");
  } )
})