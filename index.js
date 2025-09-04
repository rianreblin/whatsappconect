const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
  session: 'bot2',
  headless: true,
  useChrome: true
})
.then(client => start(client))
.catch(err => console.log(err));

function start(client) {
  client.onMessage(message => {
    if (message.body.toLowerCase() === 'oi' && !message.isGroupMsg) {
      client.sendText(message.from, 'Olá! Bot conectado no Render ✅');
    }
  });
}
