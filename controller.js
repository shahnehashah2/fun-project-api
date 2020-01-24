const service = require('./service')

module.exports = {
    sayHello() {
        return service.sayHello();
    },
    getJokes() {
        return service.getJokes();
    }
}