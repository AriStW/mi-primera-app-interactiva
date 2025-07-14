let resultList= [0,0,0,0,0,0,0,0,0,0];

function initGame() {                                           //inicia juego solicitando nombre saluda y mostrar cuerpo de juego
    const welcome = document.getElementById("welcome");
    const questions = document.getElementById("questions");

    let name = prompt("Por favor, ingresa tu nombre:");         
    welcome.textContent = "Hola " + name + " las Reglas son";   
    questions.style.display = "flex";                           
}

function answerYes(index) {             //cambia color de fondo y oculta boton si
    const list = document.getElementById("questionsList");
    const elemento= list.getElementsByTagName("li");

    elemento[index].style.backgroundColor = "#00FF00";
    resultList[index] = 1;    
}

function answerNo(index) {              //cambia color de fondo y oculta boton no
    const list = document.getElementById("questionsList");
    const elemento= list.getElementsByTagName("li");

    elemento[index].style.backgroundColor = "#FF0000";
    resultList[index] = 0;  
}

function seeResult() {                                          //ingresa la cantidad de si a futuro mejorar o autoatizar con un metodo de acuulacion
    let result = resultList.reduce((acu, valueNow) => acu + valueNow, 0);
    
    printResult(result);
}

function printResult(result) {                                  //desoculta     
    const result8to10 = document.getElementById("result8to10");
    const result5to7 = document.getElementById("result5to7");
    const result0to4 = document.getElementById("result0to4");
    const finishResult = document.getElementById("listResult");

    finishResult.style.display = "flex";                        

    if (result <= 4) {
        result0to4.style.backgroundColor = "#00FF00";
    }
    else if (result >= 8) {
        result8to10.style.backgroundColor = "#00FF00";
    }
    else if (result >= 5 && result <= 7) {
        result5to7.style.backgroundColor = "#00FF00";
    }
}

