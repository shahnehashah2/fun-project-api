const controller = require('./controller')

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return controller.sayHello();
        }
    },
    {
        method: 'GET',
        path: '/jokes',
        handler: (request, h) => {
            return controller.getJokes();
        }
    }
]