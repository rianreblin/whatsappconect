const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
  session: 'bot-whatsapp',
  headless: true, // Chromium headless
  browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
}).then(client => {
  console.log('✅ WPPConnect iniciado com sucesso');

  client.onMessage(message => {
    if (message.body.toLowerCase() === 'oi') {
      client.sendText(message.from, 'Olá! Eu sou seu bot 😄');
    }
  });

}).catch(err => {
  console.error('❌ Erro ao iniciar WPPConnect:', err);
});
