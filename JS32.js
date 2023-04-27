//Класс Алерт
export class Alert {
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
const alert = new Alert();
alert.show('Привет, мир!');
  
//Класс Промпт
export class Prompt {
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
        this.result = input.value;
        console.log(inputValue);
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
let prompt = new Prompt();
let tmp = prompt.show('Введите текст:')


//Класс Автобуса
export class Bus {
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

}

//Класс Остановок
export class StopList {
    constructor(roadLength, numberOfStops) {
        this.route = [];
        // Получаю рандомные цифры и пушу их в роут, цикл зависит от колличества остановок
        for(let i=0; i<numberOfStops; i++){
            let rundomNumber = (Math.random() * 4 + 1).toFixed(1);
            this.route.push(rundomNumber);
        }

        //Получаю узел дивов с остановками через метод this.createStops
        this.nodes = this.createStops(roadLength, numberOfStops);
    }
    //Метод визуализации остановок
    createStops(roadLength, numberOfStops) {
        //Получаю дистанцию междуостановками. Будет константа.
        const distance = roadLength / numberOfStops;
        //Инициализирую массивчик, который будет возвращаться каждый раз в узел
        // если же тупо пушить в this.nodes то каждый раз надо удалять старые значения.
        let nodes = [];
        for (let i = 0; i < numberOfStops; i++) {
            //Создаю дивчик с классом стоп и вставляю в него картинку
            let div = document.createElement('div');
            div.classList.add('stop');
            let imgSt = document.createElement('img');
            imgSt.src = "resources/bus-stop-icon.png";
            div.append(imgSt)

            //Расставляю картинки с остановками по дороге
            div.style.left = `${i  * distance}px`;
            document.querySelector('.road').append(div);
            //Теперь добавляю в инициализированный заранее nodes
            nodes.push(div);
      }
      //Возвращаю массив в this.nodes
      return nodes;
    }
}
  
//Пример для класса Остановок

let stop = new StopList(document.querySelector('.road').offsetWidth - 80, 6);







