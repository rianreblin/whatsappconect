const express = require("express");
const wppconnect = require("@wppconnect-team/wppconnect");

const app = express();
app.use(express.json());

let clientWpp;

// Inicializa o WPPConnect
wppconnect.create({
  session: 'bot-session',
  headless: true,
  useChrome: false,
  debug: false
}).then(client => {
  clientWpp = client;
  console.log("✅ WPPConnect iniciado!");
}).catch(err => console.error("Erro ao iniciar:", err));

// Rota para enviar mensagem
app.post("/send-message", async (req, res) => {
  if (!clientWpp) {
    return res.status(500).send({ error: "Cliente WPPConnect não iniciado" });
  }

  const { number, message } = req.body;
  try {
    await clientWpp.sendText(number + "@c.us", message);
    res.send({ status: "Mensagem enviada", number, message });
  } catch (err) {
    res.status(500).send({ error: "Falha ao enviar mensagem", details: err });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("🚀 Servidor rodando na porta", PORT));