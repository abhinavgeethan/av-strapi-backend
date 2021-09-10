const axios = require('axios');

module.exports = {
    tmdbFetch: async ctx => {
        const {data} = await axios.get(' https://api.themoviedb.org/3/discover/movie?api_key=2fa8a59772d1023bb5efb7d823fcb7fd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1');
        ctx.send(data);
        console.log("Hey");
    }
}