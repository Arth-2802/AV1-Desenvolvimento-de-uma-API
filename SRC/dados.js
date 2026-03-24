export let tarefas = [
  { id: 1, titulo: "Estudar Node.js", concluida: false },
  { id: 2, titulo: "Fazer tarefas na AV1", concluida: true },
];

export function adicionarTarefa(titulo) {
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo,
    concluida: false,
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

export function listarTarefas() {
  const lista = [];
  tarefas.forEach((tarefa) => {
    lista.push(tarefa);
  });
  return lista;
}

export function buscarTarefaPorId(id) {
  return tarefas.find((tarefa) => tarefa.id === id);
}

export function removerTarefaPorId(id) {
  const indice = tarefas.findIndex((tarefa) => tarefa.id === id);

  if (indice === -1) {
    return null;
  }

  const [tarefaRemovida] = tarefas.splice(indice, 1);
  return tarefaRemovida;
}

export function atualizarTarefaPorId(id, dadosAtualizados) {
  const tarefa = tarefas.find((item) => item.id === id);

  if (!tarefa) {
    return null;
  }

  if (typeof dadosAtualizados.titulo === "string") {
    tarefa.titulo = dadosAtualizados.titulo;
  }

  if (typeof dadosAtualizados.concluida === "boolean") {
    tarefa.concluida = dadosAtualizados.concluida;
  }

  return tarefa;
}
