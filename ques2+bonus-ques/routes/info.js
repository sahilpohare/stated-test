const { success } = require("../utils/responses");

module.exports = async (req, res) => {
    return success(
        res,
        {
            "app": process.env.APP_VERSION
        },
        "info from date service"
    );
}