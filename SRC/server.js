import express from "express";
import { adicionarTarefa, atualizarTarefaPorId, listarTarefas, removerTarefaPorId } from "./dados.js";

const app = express();
const PORTA = 3000;

app.use(express.json());

app.get("/tarefas", (req, res) => {
  const lista = listarTarefas();
  res.status(200).json(lista);
});

app.post("/tarefas", (req, res) => {
  const { descricao } = req.body;

  if (!descricao) {
    return res.status(400).json({ erro: "Descrição é obrigatória" });
  }

  const novaTarefa = adicionarTarefa(descricao.trim());

  res.status(201).json(novaTarefa);
});

app.delete("/tarefas/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({ erro: "ID inválido" });
  }

  const tarefaRemovida = removerTarefaPorId(id);

  if (!tarefaRemovida) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  res.status(200).json({ mensagem: "Tarefa deletada com sucesso", tarefa: tarefaRemovida });
});

app.put("/tarefas/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const { titulo, concluida } = req.body;

  if (Number.isNaN(id)) {
    return res.status(400).json({ erro: "ID inválido" });
  }

  if (titulo !== undefined && (!titulo || typeof titulo !== "string")) {
    return res.status(400).json({ erro: "Título inválido" });
  }

  if (concluida !== undefined && typeof concluida !== "boolean") {
    return res.status(400).json({ erro: "O campo concluida deve ser boolean" });
  }

  if (titulo === undefined && concluida === undefined) {
    return res.status(400).json({ erro: "Informe ao menos um campo para atualizar" });
  }

  const tarefaAtualizada = atualizarTarefaPorId(id, {
    titulo: typeof titulo === "string" ? titulo.trim() : titulo,
    concluida,
  });

  if (!tarefaAtualizada) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  res.status(200).json(tarefaAtualizada);
});


app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
