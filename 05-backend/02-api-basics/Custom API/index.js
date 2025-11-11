const PORT = 3000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const articles = [];
const newspapers = [
    { name: 'theguardian', address: 'https://www.theguardian.com/environment/climate-crisis', base: 'https://www.theguardian.com' },
    { name: 'bbc', address: 'https://www.bbc.com/news/science_and_environment', base: 'https://www.bbc.com' },
    { name: 'telegraph', address: 'https://www.telegraph.co.uk/climate-change', base: 'https://www.telegraph.co.uk' },
    { name: 'nyt', address: 'https://www.nytimes.com/international/section/climate', base: 'https://www.nytimes.com' },
    { name: 'latimes', address: 'https://www.latimes.com/environment', base: 'https://www.latimes.com' },
    { name: 'smh', address: 'https://www.smh.com.au/environment/climate-change', base: 'https://www.smh.com.au' },
    { name: 'un', address: 'https://www.un.org/climatechange', base: 'https://www.un.org' },
    { name: 'bbc', address: 'https://www.bbc.co.uk/news/science_and_environment', base: 'https://www.bbc.co.uk' },
    { name: 'es', address: 'https://www.standard.co.uk/topic/climate-change', base: 'https://www.standard.co.uk' },
    { name: 'sun', address: 'https://www.thesun.co.uk/topic/climate-change-environment/', base: 'https://www.thesun.co.uk' },
    { name: 'dm', address: 'https://www.dailymail.co.uk/news/climate_change_global_warming/index.html', base: 'https://www.dailymail.co.uk' },
    { name: 'nyp', address: 'https://nypost.com/tag/climate-change/', base: 'https://nypost.com' }
];


app.get('/', (req, res) => {
    res.jsonp("Welcome to climate Crises News API");
});

newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);

            $('a:contains("climate")', html).each(function () {
                const title = $(this).text();
                const url = $(this).attr('href');

                articles.push({
                    title,
                    url: url.startsWith('http') ? url : `${newspaper.base || ''}${url}`,
                    source: newspaper.name
                });
            });
        })
        .catch(err => console.log(err));
});
//All news related to climate crisis
app.get('/news', (req, res) => {
    res.jsonp(articles);
});
//For news for a specific newspaper
app.get('/news/:newspaperid',(req,res)=>{
    const newspaperId = req.params.id;
        const randomPaper = newspapers[Math.floor(Math.random() * newspapers.length)];
        axios.get(randomPaper.address)
        .then(response=>{
            const html =response.data;
            const $=cheerio.load(html)
            const specificArticles = [];
            $('a:contains("climate")',html).each(function(){
                const title = $(this).text();
                const url = $(this).attr('href');
                specificArticles.push({
                    title,
                    url: url.startsWith('http') ? url : `${randomPaper.base || ''}${url}`,
                    source: randomPaper.name
                });
            });
            res.jsonp(specificArticles);
        })
})
// Random news related to climate crisis 
app.get('/news/random/:id', (req, res) => {
  const count = parseInt(req.params.id);
  const randomNews = [];
  for (let i = 0; i < count; i++) {
    const random = newspapers[Math.floor(Math.random() * newspapers.length)];
    randomNews.push(random);
  }
  res.json(randomNews);
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
