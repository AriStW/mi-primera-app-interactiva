let yesOrNoList = [];

function initGame() {       //inicia juego solicitando nombre                                    
    const form = document.getElementById('formInitMenu');
    const welcome = document.getElementById("welcome");
    const questions = document.getElementById("questions");
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;  

        form.style.display = "none";
        questions.style.display = "flex";
        welcome.textContent = "Bienvenido/a " + name +" descubrelo respondiendo si o no";        
        
    });
    console.log("Funciona");
    console.log(form.name);
    
}
document.addEventListener('DOMContentLoaded', initGame);  //necesario para que initGame se ejecute una sola vez

function answerYes(index) {             
    const list = document.getElementById("questionsList");
    const element = list.getElementsByTagName("li");

    element[index].style.backgroundColor = "#00FF00";    //cambia color de fondo a verde en respuestas yes
    yesOrNoList[index] = "yes";                          //guarda respuesta yes en un array en cuyo index conincidente orden de la pregunta
}

function answerNo(index) {              
    const list = document.getElementById("questionsList");
    const element = list.getElementsByTagName("li");

    element[index].style.backgroundColor = "#FF0000";   //cambia color de fondo a rojo en respuestas no
    yesOrNoList[index] = "no";                          //guarda respuesta no en un array en cuyo index conincidente orden de la pregunta
}

function seeResult() {                                          
    const yesArray = yesOrNoList.filter(element => element === "yes"); //filtra y guarda en array respuesta yes
    const yesCounter = yesArray.length;                                //contador de yes
    const optionByYesCounter = filterResult(yesCounter);               

    printResult(optionByYesCounter);   

    const questions = document.getElementById("questions");
    questions.style.display = "none";                                   //oculta las preguntas
}

function printResult(option) {
    const answerList = document.getElementById("listResult");                                
    const answersHTMLCollection = answerList.getElementsByTagName("li");
    const answers = Array.from(answersHTMLCollection);

    answers.map((answer, index) => {                                    //uso  de map para recorrer (a mejorar)
        if (index === option) {
            answerList.style.display = "flex";
            answersHTMLCollection[option].style.display = "flex";       //muestra la respuesta
        }
    });

}

function filterResult(yesCounter) { //segun cant de respuestas afirativas esta funcion filtra sengun el rango definiciondo la opcion correspondiente
    if (yesCounter <= 4) {
        return 2;
    } else if (yesCounter >= 8) {
        return 0;
    } else {
        return 1;
    }
}