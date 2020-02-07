const controller = require('./controller')

module.exports = [
    {
        method: 'GET',
        path: '/',
        options: {
            handler: controller.sayHello,
            description: 'Say Hello',
            tags: ['api']
            }
        },
        {
        method: 'GET',
        path: '/jokes',
        options: {
            handler: controller.getJokes,
            description: 'List all jokes',
            tags: ['api']
        }
    }
]