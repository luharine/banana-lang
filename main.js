var btnTranslate = document.querySelector("#btntranslate")
var  txtinput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")





function clickHandler(){
    outputDiv.innerText =  "banananannnanananana" + txtinput.value;
}

btnTranslate.addEventListener("click",clickHandler())