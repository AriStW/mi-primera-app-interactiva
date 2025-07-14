let yesOrNoList = [];

function initGame() {                                           //inicia juego solicitando nombre saluda y mostrar cuerpo de juego
    const welcome = document.getElementById("welcome");
    const questions = document.getElementById("questions");
    const initMenu = document.getElementById("initMenu");

    let name = prompt("Por favor, ingresa tu nombre:");
    welcome.textContent = "Bienvenido/a " + name +"descubrelo respondiendo si o no";
    questions.style.display = "flex";
    initMenu.style.display = "none";
}

function answerYes(index) {             //cambia color de fondo y oculta boton si
    const list = document.getElementById("questionsList");
    const element = list.getElementsByTagName("li");

    element[index].style.backgroundColor = "#00FF00";
    yesOrNoList[index] = "yes";
}

function answerNo(index) {              //cambia color de fondo y oculta boton no
    const list = document.getElementById("questionsList");
    const element = list.getElementsByTagName("li");

    element[index].style.backgroundColor = "#FF0000";
    yesOrNoList[index] = "no";
}

function seeResult() {                                          //ingresa la cantidad de si a futuro mejorar o autoatizar con un metodo de acuulacion
    const yesArray = yesOrNoList.filter(element => element === "yes");
    const yesCounter = yesArray.length;
    console.log(yesCounter);
    const optionByYesCounter = filterResult(yesCounter);
    printResult(optionByYesCounter);
    const questions = document.getElementById("questions");
    questions.style.display = "none";

    console.log(optionByYesCounter);
}

function printResult(option) {
    const answerList = document.getElementById("listResult");                           //desoculta     
    const answersHTMLCollection = answerList.getElementsByTagName("li");
    const answers = Array.from(answersHTMLCollection);

    answers.map((answer, index) => {
        if (index === option) {
            answerList.style.display = "flex";
            answersHTMLCollection[option].style.display = "flex";
        }
    });

}

function filterResult(yesCounter) {
    if (yesCounter <= 4) {
        return 2;
    } else if (yesCounter >= 8) {
        return 0;
    } else {
        return 1;
    }
}