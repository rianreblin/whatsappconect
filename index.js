const wppconnect = require('@wppconnect-team/wppconnect');
const puppeteer = require('puppeteer');

// Cria a sessão do bot
wppconnect.create({
  session: 'bot2',
  headless: true,
  useChrome: true,
  browserArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--no-first-run',
    '--no-zygote',
    '--disable-gpu'
  ],
  puppeteerOptions: {
    executablePath: puppeteer.executablePath() // força usar o Chromium baixado pelo puppeteer
  }
})
.then(client => start(client))
.catch(err => console.log('Erro ao iniciar WPPConnect:', err));

function start(client) {
  console.log('🤖 Bot conectado e pronto!');

  client.onMessage(message => {
    if (message.body.toLowerCase() === 'oi' && !message.isGroupMsg) {
      client.sendText(message.from, 'Olá! Bot conectado no Render ✅');
    }
  });
}
