import pg from 'pg';

const { Pool } = pg;

const connectionDb = new Pool({
    connectionString: "postgres://postgres:admin@localhost:5433/movieTs"
});

export default connectionDb;