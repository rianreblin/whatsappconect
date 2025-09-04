const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
  session: 'bot1',
  puppeteerOptions: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
}).then(client => start(client));

function start(client) {
  client.onMessage(message => {
    if (message.body === 'Oi') {
      client.sendText(message.from, 'Olá! Bot ativo 😎');
    }
  });
}
