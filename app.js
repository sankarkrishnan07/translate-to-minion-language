var btnTranslate = document.querySelector("#btn-translate");

var input = document.querySelector("#input").value;

var output = document.querySelector("#output");

var translateURL = "https://api.funtranslations.com/translate/minion.json?text="+input;

function errorHandler(error){
    console.log("Error Occured!",error);
    alert("Something went wrong! Try again after sometime");
}

function clickHandler(){
    fetch(translateURL)
    .then(response => json)
    .then(json => {output.innerText = json.contents.translated})
    .catch(errorHandler)
        
}

btnTranslate.addEventListener("click",clickHandler);