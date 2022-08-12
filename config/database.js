module.exports = ({ env }) => ({
  defualtConnection: 'default',
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost2'),
      port: env.int('DATABASE_PORT', 8000),
      database: env('DATABASE_NAME', 'codewithrocky'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '******'),
      schema: env('DATABASE_SCHEMA', 'public'), 
    },
  }
});