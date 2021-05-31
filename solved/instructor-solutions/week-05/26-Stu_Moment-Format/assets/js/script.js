const gradDate = moment("2010-12-20").format("MMM Do, YYYY");
$("#1a").text(gradDate);

const weekDay = moment("1-1-2022").format("dddd");
$("#2a").text(weekDay);

const now = moment().format("DDD");
$("#3a").text(now);

const time = moment().format("k:mm:ss");
$("#4a").text(time);

const unix = moment().format("X");
$("#5a").text(unix);

const unixFormat = moment.unix(1318781876).format("MM-DD-YYYY | hh:mm:ss");
$("#6a").text(unixFormat);
