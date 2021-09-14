var btnTranslate = document.querySelector("#btntranslate")
var  txtinput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


btnTranslate.addEventListener("click",clickHandler())


function clickHandler(){
    outputDiv.innerText =  ("bnananana "+ txtinput.value);
}

