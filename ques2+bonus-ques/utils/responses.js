/**
 * @param {Express.Response} res
 * @param {Object} payload
 * @param {String} message
 */
const success = (res, payload, message) => {
    return res.status(200).json({
        success: true,
        message: message,
        payload: payload
    });
}

/**
 * @param {Express.Response} res
 * @param {Object} payload
 * @param {String} message
 */
const error = (res, payload, message) => {
    return res.status(400).json({
        success: false,
        message: message,
        payload: payload
    });
}

module.exports = {
    success,
    error
}