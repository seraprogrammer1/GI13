const fs = require('fs');

const express = require('express')
const path = require('path');
const app = express()

const port = 4000;

app.use(express.static('Public'))

app.get('/search', (req, res) => {
    const title = req.query.title
    
        const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzk4NzllMWE4ZTVjOWNhNjk2YjMyNzlkMmE1ZTdiYyIsInN1YiI6IjY2Njg2OWJjZjc3ODE5NjNmMjhiNzNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3FCViJcq9JieoPFG7sH_-70swYDgNgCRWYlSCqgAZHc'
        }
        };

        // fetch(url, options)
        // .then(res => res.json())
        // .then(json => {  
        //     res.json(json)    
        //     console.log(json)
        // })
        // .catch(err => res.json({error: err}));
        res.json({
            page: 1,
            results: [
              {
                adult: false,
                backdrop_path: '/k7DaDGncswdzynJ1ANki4UsgpPU.jpg',
                genre_ids: [Array],
                id: 466639,
                original_language: 'ru',
                original_title: 'Необыкновенное путешествие Мишки Стрекачева',
                overview: 'A funny story about Mishka Strekachyov and his remarkable journey across the Soviet Union.',
                popularity: 0.359,
                poster_path: '/1BJf0ftHsYlhiJetmzWlP6Fo50N.jpg',
                release_date: '1959-08-27',
                title: 'The Unusual Voyage of Mishka Strekachyov',
                video: false,
                vote_average: 7,
                vote_count: 1
              },
              {
                adult: false,
                backdrop_path: null,
                genre_ids: [Array],
                id: 688810,
                original_language: 'no',
                original_title: 'Over streken',
                overview: 'Normal intrusive thoughts are a common psychological phenomenon, even the most trusted members of our society have got them. The judge jumps the bench, the nurse hurts her patient and the priest throws his children off the cliff.  This short, humorous film points out how fragile our society is and questions our liability as citizens.',
                popularity: 3.796,
                poster_path: '/gjV3rN8TllEvdH2Ef8Pz319mEP0.jpg',
                release_date: '2016-01-28',
                title: 'Beyond the Pale',
                video: false,
                vote_average: 5,
                vote_count: 1
              },
              {
                adult: false,
                backdrop_path: null,
                genre_ids: [],
                id: 351452,
                original_language: 'nl',
                original_title: 'Sprookjesboom Deel 16 Streken In Het Sprookjesbos',
                overview: '',
                popularity: 0.009,
                poster_path: null,
                release_date: '2015-07-21',
                title: 'Sprookjesboom Deel 16 Streken In Het Sprookjesbos',
                video: true,
                vote_average: 0,
                vote_count: 0
              },
              {
                adult: false,
                backdrop_path: '/dyELPfHSejdFqu9tsg99C4NIq4b.jpg',
                genre_ids: [],
                id: 422697,
                original_language: 'nl',
                original_title: 'De Club Van Sinterklaas 5 De Streken Van Tante Toets',
                overview: '',
                popularity: 0.001,
                poster_path: '/buPRCEsvzvcCYgoLRuTgdS7yIrY.jpg',
                release_date: '2005-09-25',
                title: 'De Club Van Sinterklaas 5 De Streken Van Tante Toets',
                video: false,
                vote_average: 0,
                vote_count: 0
              },
              {
                adult: false,
                backdrop_path: '/jqcILemNblXGIOeg9CDCzHEBEpc.jpg',
                genre_ids: [Array],
                id: 208277,
                original_language: 'de',
                original_title: 'Feuchtgebiete',
                overview: 'Helen is a nonconformist teenage girl who maintains a conflictual relationship with her parents. Hanging out most of her time with her friend Corinna, with whom she breaks one social taboo after another, she uses sex as a way to rebel and break the conventional bourgeois ethic. After an intimate shaving accident, Helen ends up in the hospital where it doesn’t take long before she makes waves. But there she finds Robin, a male nurse who will sweep her off her feet...',
                popularity: 9.503,
                poster_path: '/6hfZij2Nd8rCT1tezRkbzm7xWkl.jpg',
                release_date: '2013-08-22',
                title: 'Wetlands',
                video: false,
                vote_average: 5.2,
                vote_count: 274
              },
              {
                adult: false,
                backdrop_path: '/85G8sdp0XiRReaNEWR6hubG6BBR.jpg',
                genre_ids: [Array],
                id: 11946,
                original_language: 'sv',
                original_title: 'Nya hyss av Emil i Lönneberga',
                overview: "Emil's reputation for being a troublemaker makes the Svensson family's neighbours take up a collection for sending the boy off to America. But even if he among other unfortunate mishaps causes his father to get stuck in the outhouse window and get bitten by crawfish, all is forgotten when he skillfully wins the family a free horse. And when Alfred the farmhand gets seriously ill, Emil puts his own life on the line, venturing into a snow storm to get his best friend to a doctor before it is too late.",
                popularity: 6.927,
                poster_path: '/2QRvDHBNHQ1yR4D7gkFhrzCTAHm.jpg',
                release_date: '1972-10-21',
                title: 'New Mischief by Emil',
                video: false,
                vote_average: 6.794,
                vote_count: 63
              },
              {
                adult: false,
                backdrop_path: null,
                genre_ids: [Array],
                id: 139231,
                original_language: 'ru',
                original_title: 'Стрекоза и муравей',
                overview: 'An ant works to prepare for winter while a drunken grasshopper plays his violin and dances away his time. When the snow arrives, the grasshopper pleads with the ant for shelter and is turned away to die.',
                popularity: 1.8,
                poster_path: '/bOEcipXdJpLN3ku8d69wrWbw2aR.jpg',
                release_date: '1913-01-01',
                title: 'The Grasshopper and the Ant',
                video: false,
                vote_average: 5.712,
                vote_count: 26
              }
            ],
            total_pages: 1,
            total_results: 7
          })
})

app.get('/search/similar', (req, res) => {
  const movie_id = req.query.movie_id;

  const url = `https://api.themoviedb.org/3/movie/${movie_id}/similar?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzk4NzllMWE4ZTVjOWNhNjk2YjMyNzlkMmE1ZTdiYyIsInN1YiI6IjY2Njg2OWJjZjc3ODE5NjNmMjhiNzNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3FCViJcq9JieoPFG7sH_-70swYDgNgCRWYlSCqgAZHc'
    }
  };

  fetch(url, options)
  .then(res => res.json())
  .then(json => {
    res.json(json)
    console.log(json)
  })
  .catch(err => res.json({error: err}));
})

app.get('/list', (req, res) => {
  const list_type = req.query.list_type;

  if (list_type !== 'popular' && list_type !== 'top_rated' && list_type !== 'upcoming' && list_type !== 'now_playing') {
    res.json({error: 'Invalid list type'});
    return;
  }

  const url = `https://api.themoviedb.org/3/movie/${list_type}?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzk4NzllMWE4ZTVjOWNhNjk2YjMyNzlkMmE1ZTdiYyIsInN1YiI6IjY2Njg2OWJjZjc3ODE5NjNmMjhiNzNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3FCViJcq9JieoPFG7sH_-70swYDgNgCRWYlSCqgAZHc'
    }
  };

  fetch(url, options)
  .then(res => res.json())
  .then(json => {
    res.json(json)
    console.log(json)
  })
  .catch(err => res.json({error: err}));
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})