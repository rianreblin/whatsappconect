const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
  session: 'bot-whatsapp',
  headless: true,
  browserArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox'
  ]
})
.then(client => start(client))
.catch(err => console.error('Erro ao iniciar WPPConnect:', err));

function start(client) {
  console.log('🚀 Bot conectado ao WhatsApp!');

  // Exemplo: responder mensagens
  client.onMessage(message => {
    if (message.body.toLowerCase() === 'oi') {
      client.sendText(message.from, 'Olá! Eu sou seu bot 🤖');
    }
  });
}
