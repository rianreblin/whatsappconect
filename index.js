const express = require('express');
const wppconnect = require('@wppconnect-team/wppconnect');

const app = express();
const port = process.env.PORT || 10000;

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Oi') {
      client.sendText(message.from, 'Olá! Estou conectado com sucesso 🚀');
    }
  });
}

wppconnect.create({
  session: 'whatsapp-bot',
  puppeteerOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
    // ❌ removido executablePath
  }
})
.then(client => start(client))
.catch(err => console.error('Erro ao iniciar WPPConnect:', err));

app.get('/', (req, res) => {
  res.send('Servidor rodando com WPPConnect 🚀');
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
