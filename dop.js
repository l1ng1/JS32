// let a =new StopList(5);
// a.createStops(5);

// let b =new Bus(20);
// b.go();

let busImg =document.querySelectorAll('.bus')[0];


let sptosScore = 1;

function removeStopElements() {
    const stopDivs = document.querySelectorAll('.stop'); // Получаем все элементы с классом stop
    for (let i = 0; i < stopDivs.length; i++) {
      const stopDiv = stopDivs[i];
      stopDiv.parentNode.removeChild(stopDiv); // Удаляем каждый элемент
    }
}

let unactiveBtn =document.querySelectorAll('.unactive')[0];


unactiveBtn.onclick = (ev)=>{ev.preventDefault();}


function makeGo(){

    if(isRoad===false) return;

    const alert = new Alert();
    let newPas = pasIn(autobus);
    let outPas = pasOut(autobus);

    if(sptosScore==stops){
        massege = 'Это конечная остановка №'+sptosScore+',  людей зашло: 0'+'  Людей вышло:'+autobus.passengers+'  Всего людей : 0';
        alert.show(massege);
        autobus.go();
        autobus.passengers = 0 ;
        removeStopElements();
        isRoad =false;
        go.classList.add('unactive');
        sptosScore =1;
    }
    else{
        massege = 'Остановка №'+sptosScore+',  людей зашло:'+newPas+'  Людей вышло:'+outPas+'  Всего людей '+autobus.passengers;
        alert.show(massege);
        autobus.go();
        
    }
    sptosScore++;
}



let go =document.getElementById('go');

go.onclick = makeGo;


let autobus = new Bus(100);
let ss = new StopList();



let isRoad =false;

let stops;

function makeNewRoad(){
    let prompt = new Prompt();
    let tmp = prompt.show('Из скольки остановок будует состоять ваш маршрут?');
    isRoad =true;
    busImg.style.left = '98%';
}

let newRoad = document.getElementById('new-road');
let start =document.getElementById('go');

newRoad.onclick = makeNewRoad;


function RandomPassengers(bus){

    let max = bus.maxPassengers;
    let now =bus.passengers;
    let newPas;
    if(now>=5){
        newPas = Math.floor(Math.random()*max)-now;
        now = newPas;
        let oldPas = Math.floor(now/100*30);
        now -= oldPas;
    }
    if(now<5){
        newPas = Math.floor(Math.random()*5)+5;
        now = newPas;
    }
    bus.passengers =now;
    console.log(bus.passengers);

}


function pasOut(bus){
    let max = bus.maxPassengers;
    let now =bus.passengers;
    let oldPas;
    if(now>=5){
        oldPas = Math.floor(now/100*10);
        now -= oldPas;
    }

    bus.passengers =now;
    return oldPas;
    
}

function pasIn(bus){
    let max = bus.maxPassengers;
    let now =bus.passengers;
    let newPas;
    if(now>=5){
        newPas = Math.floor(Math.random()*max)-now;
        now = newPas;
        
    }
    if(now<5){
        newPas = Math.floor(Math.random()*5)+5;
        now = newPas;
    }
    bus.passengers =now;
    return newPas;
}





