export default {
    apps: [
      {
        name: 'API Server',
        script: './src/server.js', 
        args: 'start',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development',
          PORT: 3000
        },
        env_production: {
          NODE_ENV: 'production',
          PORT: 3000
        }
      }
    ]
  };
  