// OnInterval
var threeSecondInterval = function(){
    console.log("Another 3 seconds have gone by. What did you do in them?");
}
setInterval(threeSecondInterval, 1000)

//For specific times, use a chron job
// var fifteenSeconsAfterMinute = function() {
//   console.log("Another minute is gone forever. Hopefully, you made the most of it...");
// }
var CronJob = require('cron').CronJob;
var worker = require('./worker.js');
new CronJob({
  cronTime: "* * * * * *",
  onTick: worker.runEverySecond(),
  start: true,
  timeZone: "America/Los_Angeles"
});
