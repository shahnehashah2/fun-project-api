'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.HOST ? '0.0.0.0' : 'localhost'
    });

    const swaggerOptions = {
        info : {
            title: 'Fun Project API',
            version: '0.0.1'
        }
    };

    // need to register swagger before server start
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
    server.route(routes);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();