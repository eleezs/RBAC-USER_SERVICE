// export default client
const { createClient } = require('redis');
const { promisify } = require ('util');

class Redis {

    constructor() {
        this.client = createClient({
            url: process.env.REDIS_URL || process.env.REDIS_URL_DEV,
            retry_strategy: function (options) {
                if (options.error && options.error.code === "ECONNREFUSED") {
                    // End reconnecting on a specific error and flush all commands with
                    // a individual error
                    return new Error("The server refused the connection");
                }
                if (options.total_retry_time > 1000 * 60 * 60) {
                    // End reconnecting after a specific timeout and flush all commands
                    // with a individual error
                    return new Error("Retry time exhausted");
                }
                if (options.attempt > 10) {
                    // End reconnecting with built in error
                    return undefined;
                }
                // reconnect after
                return Math.min(options.attempt * 100, 3000);
            },
        });

        this.client.on("error", function (error) {
            console.error(error.message);
        });

        this.client.on("connect", function (error) {
            console.log('connected');
        });

    }
    connect = () => {
        return this.client.connect()
    }

    redisClient = () => {
        return this.client
    }

    checkExists = async (param) => {
        return new Promise((resolve, reject) => {
            this.client.exists(param, function (err, reply) {
                resolve(reply);
            });
        });
    }

    getHash = async () => {
        return promisify(this.client.hgetall.bind(this.client));
    }

    // check if redis key exists
    keyExists = async (param) => {
        const exists = promisify(this.client.exists).bind(this.client)
        return await exists(param)
    }

    // get redis string 
    getKey = async (param) => {
        const get_key = promisify(this.client.get).bind(this.client)
        return await get_key(param)
    }

    // set redis string 
    setKey = async (key, value) => {
        const set_key = promisify(this.client.set).bind(this.client)
        return await set_key(key, value)
    }

    // get redis hash keys
    getHashKeys = async (key) => {
        const hkey = promisify(this.client.hkeys).bind(this.client)
        return await hkey(key)
    }
    // set redis hash keys
    setHash = async (key, field, value) => {
        const hmset = promisify(this.client.hmset).bind(this.client)
        return await hmset(key, field, value)
    }

    //delete redis hash key
    deleteHashKey = async (key, field) => {
        const hdel = promisify(this.client.hdel).bind(this.client)
        return await hdel(key, field)
    }

    //delete redis  key
    deleteKey = async (key) => {
        const del = promisify(this.client.del).bind(this.client)
        return await del(key)
    }

    // get redis hash key:value pair
    getAllHash = async (param) => {
        const hgetall = promisify(this.client.hgetall).bind(this.client)
        return await hgetall(param)
    }

    // increment redis hash value
    hIncrby = async (key, field, incr) => {
        const hincrby = promisify(this.client.hincrby).bind(this.client)
        return await hincrby(key, field, incr)
    }

    // add redis set
    setAdd = async (key = "key", field) => {
        const sadd = promisify(this.client.sadd).bind(this.client)
        return await sadd(key, field)
    }

    // get redis Set members
    getSetMembers = async (key = "key") => {
        const smembers = promisify(this.client.smembers).bind(this.client)
        return await smembers(key)
    }

    // remove redis Set members
    setRemoveMembers = async (key = "key", key2 = "") => {
        const srem = promisify(this.client.srem).bind(this.client)
        return await srem(key, key2)
    }
    // get redis set members
    zAdd = async (key = "key", key2 = "", value) => {
        const zadd = promisify(this.client.zadd).bind(this.client)
        return await zadd(key, key2, value)
    }
    zrevrange = async (key = "key", offset = 0, size = 50) => {
        const zrevrange = promisify(this.client.zadd).bind(this.client)
        return await zrevrange(key, offset, offset + size)
    }
}

module.exports = new Redis();