const tasks = [
    {title: "Comprar comida para o gato", type: "Urgente"},
    {title: "Consertar Computador", type: "Importante"},
    {title: "Beber água", type: "Normal"},
    {title: "Enviar relatório trimestral", type: "Importante"},
    {title: "Fazer exercícios físicos", type: "Normal"},
    {title: "Agendar consulta médica", type: "Urgente"},
    {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
    {title: "Limpar a despensa", type: "Importante"},
    {title: "Pagar a conta de energia", type: "Urgente"},
    {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks){
    const ul = document.querySelector("ul");
    let item = [tasks.length];
    for(let i = 0; i < tasks.length; i++){
        item[i] = createTaskItem(tasks[i].title, tasks[i].type);
        ul.appendChild(item[i]);
  };
};
renderElements(tasks);

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
        let item = {title:title, type:type};
        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].title === title){
                tasks.splice(i, 1);
            };
        };
        li.remove();
    });

    if(type==="Urgente"){
        span.classList.add("task-type_span-urgent");
    }else if(type==="Importante"){
        span.classList.add("task-type_span-important");
    }else{
        span.classList.add("task-type_span-normal");
    };
    return li;
};

const form = document.querySelector(".form__container");
const inputName = document.querySelector(".form__input--text__input__box");
const selected_type = document.querySelector(".form__input--priority__input__box");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const new_object = {title:inputName.value, type:selected_type.value}
    const ul = document.querySelector("ul");
    ul.innerHTML = '';
    tasks.push(new_object);
    renderElements(tasks);
});