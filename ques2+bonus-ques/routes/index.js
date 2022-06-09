module.exports = [
    {
        url: '/',
        method: 'get',
        handler: require('./health')
    },
    {
        url: '/info',
        method: 'get',
        handler: require('./info')
    },
    {
        url: '/get_days',
        method: 'get',
        handler: require('./get_days')
    },
    {
        url: '/get_month_days',
        method: 'get',
        handler: require('./get_month_days')
    }
]