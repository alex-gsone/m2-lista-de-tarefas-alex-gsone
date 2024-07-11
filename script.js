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

function renderElements(taks){
  const ul = document.querySelector("ul");
  let item = [tasks.length];
  for(i=0; i<tasks.length; i++){
    item[i] = createTaskItem(tasks[i].title, tasks[i].type)
    ul.appendChild(item[i])
  }
  // ul.appendChild(item[0])
}
renderElements(tasks);



function createTaskItem(title, type){
  const li = document.createElement('li');
  const div = document.createElement('div');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const button = document.createElement('button');

  p.textContent=(title);

  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(button);

  li.classList.add("task__item");
  div.classList.add("task-info__container");
  button.classList.add("task__button--remove-task");
  
  if(type==="Urgente"){
    span.classList.add("task-type_span-urgent");
  }else if(type==="Importante"){
    span.classList.add("task-type_span-important");
  }else{
    span.classList.add("task-type_span-normal");
  }
  return li;
}
createTaskItem(tasks[3].title, tasks[3].type);