const wppconnect = require('wppconnect');

async function startWhatsApp() {
  try {
    const client = await wppconnect.create({
      session: 'whatsapp-bot',     // nome da sessão
      useChrome: true,             // força o uso do Chromium
      headless: true,              // roda sem abrir janela
      autoClose: 0,                // não fecha sozinho
      catchQR: (qrCode, asciiQR, attempts, urlCode) => {
        console.log('QR Code gerado, escaneie no WhatsApp Web');
        console.log(asciiQR); // imprime QR no console
      },
      puppeteerOptions: {
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--single-process',
          '--disable-gpu'
        ],
        executablePath: '/usr/bin/chromium-browser' // Caminho do Chromium no Render
      }
    });

    console.log('WhatsApp iniciado com sucesso!');

    // Exemplo de evento de mensagem recebida
    client.onMessage(async (message) => {
      console.log('Mensagem recebida:', message.body);
      if (message.body.toLowerCase() === 'ping') {
        await client.sendText(message.from, 'Pong!');
      }
    });

  } catch (err) {
    console.error('Erro ao iniciar WPPConnect:', err);
  }
}

// Inicia o bot
startWhatsApp();
