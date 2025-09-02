const wppconnect = require('@wppconnect-team/wppconnect');
const puppeteer = require('puppeteer');

wppconnect.create({
  session: 'bot-session',
  puppeteerOptions: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: puppeteer.executablePath() // usa o Chromium do Puppeteer
  },
  catchQR: (qrCode, asciiQR) => console.log(asciiQR),
  statusFind: (status) => console.log(`Status: ${status}`)
}).then(client => start(client));

function start(client) {
  console.log('Bot rodando!');
  client.onMessage(msg => {
    if (msg.body.toLowerCase() === 'oi') {
      client.sendText(msg.from, 'Olá! Bot ativo 😎');
    }
  });
}
