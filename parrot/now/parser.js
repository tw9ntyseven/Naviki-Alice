const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://krd.kassir.ru/bilety-na-koncert'
let data;

axios.get(url)
    .then(response => {
        const getData = html  => {
            data = [];
            const $ = cheerio.load(html)
            $('div.events').each((i, elem) => {
                data.push({
                    Name : $(elem).find('.title, .date, .place, .cost.rub').text()
                })
            })
            console.log(data);
            return data;
        }
        getData(response.data);
    })
    .catch (error => {
        console.log(error);
    })