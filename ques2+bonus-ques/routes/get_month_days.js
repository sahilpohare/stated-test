const { ApiDao } = require("../serializers/dao");
const DateService = require("../services/date");
const { error,success } = require("../utils/responses");

module.exports = async function (req, res) {
    const attributes = new ApiDao(req.query);
    if (!attributes.is_valid) {
        return error(res, {}, "invalid date");
    }

    const { date } = attributes.data;

    let { firstDay, lastDay } = DateService.getFirstAndLastDayOfMonth(date);
    return success(res, { firstDay, lastDay }, "days of the month");
}
