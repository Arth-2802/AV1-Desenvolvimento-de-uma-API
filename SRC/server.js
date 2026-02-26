import express from "express";
import { adicionarTarefa, listarTarefas } from "./dados.js";

const app = express();
const PORTA = 3000;

app.use(express.json());

// GET /tarefas - Percorre e lista todas as tarefas
app.get("/tarefas", (req, res) => {
  const lista = listarTarefas();
  res.status(200).json(lista);
});

// POST /tarefas - Valida e adiciona uma nova tarefa
app.post("/tarefas", (req, res) => {
  const { descricao } = req.body;

  if (!descricao) {
    return res.status(400).json({ erro: "Descrição é obrigatória" });
  }

  const novaTarefa = adicionarTarefa(titulo.trim());

  res.status(201).json(novaTarefa);
});

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
