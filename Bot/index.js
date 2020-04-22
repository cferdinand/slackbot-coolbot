const { WebClient } = require("@slack/web-api");

const token = process.env.TOKEN;

const bot = new WebClient(token);

(async () => {
  const postedMessage = await bot.chat.postMessage({
    channel: "coolbot-test-sandbox",
    text: "Hey I am coolBot. I can do stuff"
  });

  setInterval(async () => {
    await bot.chat.postMessage({
      channel: "coolbot-test-sandbox",
      text: "Hey I am coolBot. I post messages at random times"
    });
  }, 10000);
})();
