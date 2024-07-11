const tasks = [
    {title: "Comprar comida para o gato", type: "Urgente"},
    {title: "Consertar Computador", type: "Importante"},
    // {title: "Beber água", type: "Normal"},
    // {title: "Enviar relatório trimestral", type: "Importante"},
    // {title: "Fazer exercícios físicos", type: "Normal"},
    // {title: "Agendar consulta médica", type: "Urgente"},
    // {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
    // {title: "Limpar a despensa", type: "Importante"},
    // {title: "Pagar a conta de energia", type: "Urgente"},
    // {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks){
    const ul = document.querySelector("ul");
    let item = [tasks.length];
    // console.log(tasks, tasks.length);
    for(let i = 0; i <tasks.length; i++){
        // console.log(i, tasks[i]);
        item[i] = createTaskItem(tasks[i].title, tasks[i].type)
        ul.appendChild(item[i])
  }
}
renderElements(tasks);
// console.log(tasks[0]);

// const li = document.querySelector(".task__item")
// // const li= document.querySelector(".task__item")
// // item.remove(item);
// // console.log(item);
// // const inputName = document.querySelector(".form__input--text__input__box");
// // const selected_type = document.querySelector(".form__input--priority__input__box");
// li.addEventListener("click", function (event) {
// // event.preventDefault();
//     console.log(event);
//     li.remove();
// })

// for(let i = 0; i <tasks.length; i++){
//     // tasks[i].title
//     console.log(tasks[i].title);
// }

function createTaskItem(title, type){
    const li = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const button = document.createElement('button');



    p.textContent = (title);

    li.appendChild(div);
    div.appendChild(span);
    div.appendChild(p);
    li.appendChild(button);

    li.classList.add("task__item");
    div.classList.add("task-info__container");
    button.classList.add("task__button--remove-task");
    
    li.addEventListener("click", function (event) {
        // event.preventDefault();
        // console.log(event);
        // const button_task = document.querySelector("p");
        let item = {title:title, type:type}
        // console.log(p);
        // console.log(item);
        // console.log('kk',tasks.indexOf(tasks[0]));
        // console.log('kk',tasks.indexOf(item));

        // console.log(tasks[0], item );
        for(let i = 0; i <tasks.length; i++){
            // tasks[i].title
            // console.log(tasks[i].title);
            if(tasks[i].title === title){
                tasks.splice(i, 1);
                console.log('novo tasks:', tasks);
            }
        }
        li.remove();
        // renderElements(tasks);  
    })

    if(type==="Urgente"){
        span.classList.add("task-type_span-urgent");
    }else if(type==="Importante"){
        span.classList.add("task-type_span-important");
    }else{
        span.classList.add("task-type_span-normal");
    }
    console.log('novo tasks:', tasks);
    return li;
}


// console.log(tasks.length);

const form = document.querySelector(".form__container")
const inputName = document.querySelector(".form__input--text__input__box");
const selected_type = document.querySelector(".form__input--priority__input__box");
const vector = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // console.log(inputName.value);
    // console.log(selected_type.value);
    const new_object = {title:inputName.value, type:selected_type.value}
    // console.log(new_object.length);
    tasks.push(new_object);
    // console.log(tasks);
    // renderElements(new_object);
    // renderElements(tasks[tasks[0]]);
    renderElements(vector);
    renderElements(tasks);
    // console.log(tasks[tasks.length-1]);
})


