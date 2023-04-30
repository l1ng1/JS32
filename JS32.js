//Петр, скажешь когда сделать на экспорт, пока для проверки как обычно прописала


//Класс Алерт
 class Alert {
    constructor() {
        this.modal = document.createElement('div');
        this.modal.className = 'modal';
  
        this.modalContent = document.createElement('div');
        this.modalContent.className = 'modal-content';
  
        this.message = document.createElement('p');
        this.message.className = 'message';
        this.modalContent.append(this.message);
  
        this.closeButton = document.createElement('button');
        this.closeButton.className = 'ok';
        this.closeButton.textContent = 'Ok';
        this.closeButton.addEventListener('click', () => {
        this.hide();
      });
  
        this.modalContent.append(this.closeButton);
        this.modal.append(this.modalContent);

        document.body.appendChild(this.modal);
    }
  
    show(message) {
      this.message.textContent = message;
      this.modal.style.display = 'block';
    }
  
    hide() {
      this.modal.style.display = 'none';
    }
}

//Пример для класса Алерт

  
//Класс Промпт
 class Prompt {
    constructor() {

        this.result = '';

        this.modal = document.createElement('div');
        this.modal.className = 'modal';
  
        let modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
  
        let message = document.createElement('p');
        message.className = 'message';
        modalContent.append(message);
  
        let input = document.createElement('input');
        input.type = 'text';
        input.className = 'input';
        modalContent.appendChild(input);
  
        let cancelButton = document.createElement('button');
        cancelButton.className = 'cancel';
        cancelButton.textContent = 'Отмена';
        cancelButton.addEventListener('click', () => {
           this.hide();
           return null;
        });
  
        let okButton = document.createElement('button');
        okButton.className = 'ok';
        okButton.textContent = 'Ок';
        okButton.addEventListener('click', () => {
        //В общем вергуть как в обычном промпте инпут не получается, поэтому получить его можно будет через this.result
        //пишу здесь тк не знаю как это сделать в другом месте
        stops = input.value;
        if(isNaN(stops)) return
        
        ss.createStops(stops);
        let st = document.getElementById('go');
        st.classList.remove('unactive');

        this.hide();
        });

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.append(cancelButton);
        buttonContainer.append(okButton);
        modalContent.append(buttonContainer);
        this.modal.append(modalContent);
    
        document.body.append(this.modal);
      }
    
      show(message) {
          this.modal.querySelector('.message').textContent = message;
          this.modal.querySelector('.input').value = '';
          this.modal.style.display = 'block';
      }
    
      hide() {
          this.modal.style.display = 'none';
      }
}

//Пример для класса Prompt
// let prompt = new Prompt();
// let tmp = prompt.show('Введите текст:');


//Класс Автобуса
 class Bus {
    constructor(speed) {
      this.speed = speed;
      this.route = [];
      this.currentStop = 0;
      this.passengers = 0;
      this.maxPassengers = 30;

    }
  
    // Метод для установки нового маршрута
    setRoute(route) {
        this.route = route;
        this.currentStop = 0;
        this.passengers = 0;
    }
  
    // Метод для движения к следующей остановке
    go() {
    //Ну короче пока движение только до первой остановки(((

    // Перемещаем автобус на расстояние до следующей остановки
      let busElement = document.querySelector(".bus");
      let road = document.querySelector(".road").clientWidth;
      //Мой вариант
      let distance = road/quantytiOfStops;
      for(let i =0;i<quantytiOfStops;i++){
        let newPosition = Math.floor(busElement.getBoundingClientRect().left)-distance;
        console.log(busElement.getBoundingClientRect().left);
        busElement.style.left = newPosition +'px';
      }



      //Это написала Гульжан
      // console.log(busElement.offsetWidth);
      

      // let roadLength = road.offsetWidth;
      // console.log(road.offsetWidth);
      // const distance = roadLength / this.route.length;
      // console.log(distance);
    
      //   let m = roadLength;
      //   console.log(m);
      //   roadLength -= distance;
      //   console.log(roadLength);
    
      //   let timer = setInterval(() => {
      //      m -= 30;
      //     busElement.style.left = m + 'px';

      //      console.log(m);
      //      if(m < roadLength )clearInterval(timer);
    
      //   }, 200)
      
    }

    getMessage(){
      if (this.currentStop === this.route.length - 1) {
        // Если автобус на конечной остановке, выходят все пассажиры
        this.passengers = 0;
        return "Автобус на конечной остановке, все пассажиры вышли";
      }
      
      // Вычисляем расстояние до следующей остановки
      const distanceToNextStop = this.route[this.currentStop];
    
      // Случайное количество пассажиров заходят и выходят
      const exiting = Math.floor(Math.random() * (this.passengers + 1));
      const boarding = Math.floor(Math.random() * 6);
      this.passengers = Math.max(this.passengers - exiting, 0) + boarding;
    
      // Формируем сообщение
      const message = `Остановка № ${this.currentStop + 1}: проехали ${distanceToNextStop} км за ${distanceToNextStop / this.speed * 60} минут. Вышли ${exiting} человек, зашли ${boarding}, текущее количество пассажиров: ${this.passengers}`;
      
      // Увеличиваем индекс текущей остановки и возвращаем сообщение
      this.currentStop++;
      return message;
    }

}

//Класс Остановок
class StopList {
    constructor(numberOfStops) {
        this.route = [];
        // Получаю рандомные цифры и пушу их в роут, цикл зависит от колличества остановок
        // for(let i=0; i<numberOfStops; i++){
        //     let rundomNumber = (Math.random() * 4 + 1).toFixed(1);
        //     this.route.push(rundomNumber);
        // }

        //Получаю узел дивов с остановками через метод this.createStops
        // this.nodes = this.createStops(roadLength, numberOfStops);
    }
    //Метод визуализации остановок
    createStops(numberOfStops) {
        quantytiOfStops =numberOfStops;
        //Получаю дистанцию междуостановками. Будет константа.
        // const distance = roadLength / numberOfStops;
        //Инициализирую массивчик, который будет возвращаться каждый раз в узел
        // если же тупо пушить в this.nodes то каждый раз надо удалять старые значения.
        let nodes = [];
        for (let i = 0; i < numberOfStops-1; i++) {
            //Создаю дивчик с классом стоп и вставляю в него картинку
            let div = document.createElement('div');
            div.classList.add('stop');
            let imgSt = document.createElement('img');
            imgSt.src = "resources/bus-stop-icon.png";
            div.append(imgSt);

            //Расставляю картинки с остановками по дороге
            // div.style.left = `${i  * distance}px`;
            document.querySelector('.road').append(div);
            //Теперь добавляю в инициализированный заранее nodes
            nodes.push(div);
      }
      //Возвращаю массив в this.nodes
      return nodes;
    }

    clear(){
      let road =document.getElementById('road');
    }

}
  
//Пример для класса Остановок
let quantytiOfStops =0;
