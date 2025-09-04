const wppconnect = require('wppconnect');

wppconnect.create({
  session: 'bot1',
  headless: true,
  browserExecutablePath: '/usr/bin/chromium-browser' // Caminho do Chromium do Render
})
.then((client) => start(client))
.catch((err) => console.error('Erro ao iniciar WPPConnect:', err));

function start(client) {
  console.log('Bot iniciado!');

  // Exemplo de resposta automática
  client.onMessage((message) => {
    if (message.body === 'Oi') {
      client.sendText(message.from, 'Olá! Tudo bem?');
    }
  });
}
