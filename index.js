const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
    session: 'whatsapp-bot',
    catchQR: (qrCode, asciiQR) => {
        console.log('📱 Escaneie o QR abaixo com seu WhatsApp:');
        console.log(asciiQR);
    },
    puppeteerOptions: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
}).then(client => {
    console.log('🚀 Bot iniciado e rodando!');

    client.onMessage(message => {
        if (message.body.toLowerCase() === 'oi') {
            client.sendText(message.from, 'Olá! Bot funcionando ✅');
        }
    });
}).catch(err => {
    console.error('❌ Erro ao iniciar WPPConnect:', err);
});
