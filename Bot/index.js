const { WebClient } = require("@slack/web-api");
const CronJob = require("cron").CronJob;

const token = process.env.TOKEN;

const bot = new WebClient(token);

(async () => {
  var morningJob = new CronJob(
    "00 00 9 * * 1-5",
    async function() {
      await bot.chat.postMessage({
        channel: "coolbot-test-sandbox",
        text:
          "Hey I am coolBot. I post a daily 9am message. Get some coffee :coffee"
      });
    },
    null,
    true,
    "America/New_York"
  );
  var middayJob = new CronJob(
    "00 00 12 * * 1-5",
    async function() {
      await bot.chat.postMessage({
        channel: "coolbot-test-sandbox",
        text:
          "Hey I am coolBot. I post a daily 12pm message. Get some lunch! That work will still be there after. TRUST ME."
      });
    },
    null,
    true,
    "America/New_York"
  );
  var afternoonJob = new CronJob(
    "00 00 15 * * 1-5",
    async function() {
      await bot.chat.postMessage({
        channel: "coolbot-test-sandbox",
        text:
          "Hey I am coolBot. I post a daily 3pm message. It's almost clock out time! Get Excited!!"
      });
    },
    null,
    true,
    "America/New_York"
  );
  var eveningJob = new CronJob(
    "00 00 18 * * 1-5",
    async function() {
      await bot.chat.postMessage({
        channel: "coolbot-test-sandbox",
        text:
          "Hey I am coolBot. I post a daily 6pmm message. Get some dinner or drinks, it's after 5 here!"
      });
    },
    null,
    true,
    "America/New_York"
  );
  morningJob.start();
  middayJob.start();
  afternoonJob.start();
  eveningJob.start();
})();
