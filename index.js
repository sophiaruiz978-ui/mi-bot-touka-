console.log("Hola, soy Touka, tu bot esta listo!");const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', (qr) => {
  console.log('Escanea este QR con tu WhatsApp:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Touka esta lista! 💜');
});

client.on('message', async (msg) => {
  const texto = msg.body.toLowerCase();

  if (texto === '!hola') {
    msg.reply('Holaa! Soy Touka 💜 ¿Como estas?');
  }

  if (texto === '!menu') {
    msg.reply('Menu de Touka 💜\n\n!hola - Te saludo\n!menu - Ver este menu\n!amor - Te doy amor\n!chiste - Te cuento un chiste');
  }

  if (texto === '!amor') {
    msg.reply('Te quiero mucho 💜✨ Eres la mejor!');
  }

  if (texto === '!chiste') {
    msg.reply('¿Que le dice un gato a otro gato? ¡Miau ravilloso! 😹');
  }
});

client.initialize();