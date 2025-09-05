const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
  session: 'bot-whatsapp',              // Nome da sessão
  headless: true,                        // Roda sem interface gráfica
  browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  executablePath: '/usr/bin/chromium'   // Usa o Chromium do sistema
})
.then(client => start(client))
.catch(err => console.error('Erro ao iniciar WPPConnect:', err));

function start(client) {
  console.log('🚀 Bot conectado ao WhatsApp!');

  // Exemplo de resposta automática
  client.onMessage(msg => {
    if (msg.body === 'Oi') {
      client.sendText(msg.from, 'Olá! Tudo certo?');
    }
  });
}
