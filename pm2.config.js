module.exports = {
    apps: [
        {
            name: 'demo-service',
            script: './app.js',
            args: [],
            exec_mode: 'cluster',
            autorestart: false,
            watch: false,
            ignore_watch: ['node_modules'],
            watch_delay: 1000,
            merge_logs: true,
            cwd: __dirname + '/',

            env: {
                'NODE_ENV': 'development',
                'DEBUG': 'express:*,demo:*'
            },
            env_production: {
                'NODE_ENV': 'production',
                'DEBUG': 'demo:*'
            },

            instances: 1
        }
    ]
};
