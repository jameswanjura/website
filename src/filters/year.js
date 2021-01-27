// This filter formats dates nicely via moment
// It is used for blog posts amongst other things

const moment = require("moment");

module.exports = (value) => {
  const dateObject = moment(value).format("YYYY");
  return dateObject;
};
