const wppconnect = require('@wppconnect-team/wppconnect');
const path = require('path');

// Pasta para salvar sessão
const sessionPath = path.join(__dirname, 'tokens');

wppconnect.create({
    session: 'bot-whatsapp', // nome da sessão
    catchQR: true,           // imprime QR code no console
    headless: true,          // rodar sem interface gráfica
    browserWS: false,
    logQR: true,
    folderNameToken: sessionPath
})
.then(client => start(client))
.catch(err => console.error('Erro ao iniciar WPPConnect:', err));

function start(client) {
    console.log('✅ WPPConnect iniciado com sucesso!');

    client.onMessage(async (msg) => {
        console.log('Mensagem recebida:', msg.body);

        // Aqui vamos enviar para o Python depois
        // Exemplo:
        // await axios.post('http://localhost:5000/process', { message: msg.body, from: msg.from });
    });
}
