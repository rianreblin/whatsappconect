const wppconnect = require('@wppconnect-team/wppconnect');
const puppeteer = require('puppeteer');

// Função para criar uma sessão
async function startSession(sessionName) {
  try {
    const client = await wppconnect.create({
      session: sessionName,
      puppeteerOptions: {
        headless: true, // roda sem interface gráfica
        executablePath: puppeteer.executablePath(), // força usar o Chromium do Puppeteer
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--single-process',
          '--disable-gpu'
        ]
      },
      catchQR: (qrCode, asciiQR, attempt, urlCode) => {
        console.log(`🔹 Sessão ${sessionName} - QR Code gerado:`);
        console.log(asciiQR); // QR code em ASCII
        console.log(`URL do QR Code: ${urlCode}`);
      }
    });

    console.log(`✅ Sessão "${sessionName}" iniciada com sucesso!`);

    // Exemplo de responder "Oi" automaticamente
    client.onMessage(message => {
      if (message.body.toLowerCase() === 'oi') {
        client.sendText(message.from, `Olá! Eu sou o bot "${sessionName}" 😎`);
      }
    });

    return client;
  } catch (error) {
    console.log(`❌ Erro ao iniciar a sessão "${sessionName}":`, error);
  }
}

// Iniciando múltiplas sessões
async function main() {
  await startSession('bot1');
  await startSession('bot2');
}

main();
