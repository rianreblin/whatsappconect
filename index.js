const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
    session: 'bot-whatsapp',
    browserArgs: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu'
    ],
    headless: true,
    useChrome: false
}).then(client => {
    console.log('WhatsApp conectado!');
}).catch(err => {
    console.error('Erro ao iniciar WPPConnect:', err);
});
