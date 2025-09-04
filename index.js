const express = require('express');
const wppconnect = require('@wppconnect-team/wppconnect');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('✅ Bot do WhatsApp rodando com WPPConnect no Render!');
});

wppconnect.create({
  session: 'whatsapp-bot',
  puppeteerOptions: {
    args: ['--no-sandbox']
  }
}).then(client => start(client))
  .catch(err => console.error(err));

function start(client) {
  client.onMessage(message => {
    if (message.body === 'ping') {
      client.sendText(message.from, 'pong 🏓');
    }
  });
}

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
