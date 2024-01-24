const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/2 * 11 * 1 *", function () {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});
