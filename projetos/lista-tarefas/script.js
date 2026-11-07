"use strict";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function adicionarTarefa() {
  const textoTarefa = taskInput.value.trim();

  if (textoTarefa === "") {
    alert("adicione uma tarefa");
    taskInput.focus();
    return;
  }

  const itemTarefa = document.createElement("li");
  const texto = document.createElement("span");
  const botaoRemover = document.createElement("button");

  texto.textContent = textoTarefa;

  botaoRemover.type = "button";
  botaoRemover.textContent = "×";
  botaoRemover.title = "Remover tarefa";
  botaoRemover.setAttribute(
    "aria-label",
    `Remover tarefa: ${textoTarefa}`
  );

  botaoRemover.addEventListener("click", function () {
    itemTarefa.remove();
  });

  itemTarefa.appendChild(texto);
  itemTarefa.appendChild(botaoRemover);
  taskList.appendChild(itemTarefa);

  taskInput.value = "";
  taskInput.focus();
}

addTaskBtn.addEventListener("click", adicionarTarefa);

taskInput.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});