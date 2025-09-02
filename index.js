// index.js
const wppconnect = require('@wppconnect-team/wppconnect');

// Cria a sessão do WPPConnect
wppconnect
  .create({
    session: 'bot-session', // nome da sessão
    puppeteerOptions: {
      executablePath: '/usr/bin/chromium', // caminho do Chromium no Render
      headless: true,                   // roda sem interface gráfica
      args: ['--no-sandbox', '--disable-setuid-sandbox'] // necessário no Render
    },
    catchQR: (qrCode, asciiQR) => {
      console.log('Escaneie o QR Code abaixo com o WhatsApp do seu celular:');
      console.log(asciiQR); // QR em ASCII no terminal
    },
    statusFind: (statusSession, session) => {
      console.log(`Status da sessão: ${statusSession}`);
    },
    logQR: false // evita mostrar QR duplicado
  })
  .then((client) => start(client))
  .catch((err) => console.error('Erro ao iniciar o bot:', err));

// Função principal do bot
function start(client) {
  console.log('Bot iniciado com sucesso!');

  // Exemplo: envia mensagem de teste
  client.onMessage((message) => {
    console.log('Mensagem recebida:', message.body);

    // Responde automaticamente
    if (message.body.toLowerCase() === 'oi') {
      client.sendText(message.from, 'Olá! Bot funcionando 😎');
    }
  });
}
