export let tarefas = [
  { id: 1, titulo: "Estudar Node.js", concluida: false },
  { id: 2, titulo: "Fazer tarefas na AV1", concluida: true },
];

// Adicionar um novo objeto ao array com push
export function adicionarTarefa(titulo) {
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo,
    concluida: false,
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

// Percorrer o array com forEach e retornar todas as tarefas
export function listarTarefas() {
  const lista = [];
  tarefas.forEach((tarefa) => {
    lista.push(tarefa);
  });
  return lista;
}

// Buscar uma tarefa pelo id com find
export function buscarTarefaPorId(id) {
  return tarefas.find((tarefa) => tarefa.id === id);
}
