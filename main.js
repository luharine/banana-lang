var btnTranslate = document.querySelector("#btntranslate")
var txtinput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


btnTranslate.addEventListener("click", clickHandler())
var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"



function getTranslationurl(text) {
    return ("https://api.funtranslations.com/translate/minion.json?text=" + text)
}

function clickHandler() {
    var text1 = txtinput.value;
 fetch(getTranslationurl(text1))
        .then(response => response.json())
        .then(json => outputDiv.innerText = json.contents.translated)
        .catch(errorHandler)
}
function errorHandler(error) {
    console.log("error occured",error);
    alert("Something went wrong with the server")
}