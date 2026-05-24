const TelegramBot = require('node-telegram-bot-api');

const token = '8977522670:AAF-ZAO0lhV6PJ9krJ7QZnjyXhA32yuBics';

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/start/, (msg) => {

bot.sendMessage(

msg.chat.id,

`🔥 Bienvenido a ZKIZZLE CLUB

🛍️ Compra productos premium directamente desde nuestra tienda.`,

{
reply_markup:{
inline_keyboard:[
[
{
text:'🛍️ Abrir tienda',
web_app:{
url:'https://losjnrs-shop.vercel.app'
}
}
]
]
}
}

);

});
`