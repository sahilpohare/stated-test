const { ApiDao } = require("../serializers/dao");
const { error, success } = require("../utils/responses");
const DateService = require("../services/date");
/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
module.exports = function getDays(req, res) {

    let attributes = new ApiDao(req.query);

    if (!attributes.is_valid) {
        return error(res, {}, "invalid date");
    }

    const { date } = attributes.data;
    let daysOfWeek = DateService.getDays(new Date(date));
    return success(res, { daysOfWeek }, "days of the week");
};
