const { success } = require("../utils/responses");

module.exports = async (req, res) => {
    return success(
        res,
        {},
        "health check successfull from meta scrape"
    );
}