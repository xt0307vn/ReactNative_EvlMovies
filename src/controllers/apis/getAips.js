import axios from 'axios';

class EvlMoviesApis {
  static endpoint = {
    url: 'https://api.themoviedb.org/3/',
    apiKey: 'a06e5a0d50cfbc16b1af9734dba78f95',
    language: 'en-US',
    movie: {
      urlMovie: 'https://api.themoviedb.org/3/movie/',
      popular:
        'https://api.themoviedb.org/3/movie/popular?api_key=a06e5a0d50cfbc16b1af9734dba78f95&language=en-US',
      topRated:
        'https://api.themoviedb.org/3/movie/top_rated?api_key=a06e5a0d50cfbc16b1af9734dba78f95&language=en-US&page=1',
      
      cast: 'https://api.themoviedb.org/3/movie/297762/casts?api_key=e9e9d8da18ae29fc430845952232787c'
    },
    search: {
      urlSearchMovie: 'https://api.themoviedb.org/3/search/movie',
    },
    iamges: {
      urlImage: 'https://image.tmdb.org/t/p/w500/'
    },
    cast: {
      
    }

    // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

    // https://api.themoviedb.org/3/movie/315162?language=en-US&api_key=a06e5a0d50cfbc16b1af9734dba78f95

    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  };

  static getPopular = async (page) => {
    try {
      const response = await axios.get(this.endpoint.movie.urlMovie + 'popular', {
        params: {
          api_key: this.endpoint.apiKey,
          language: this.endpoint.language,
          page: page
        }
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  // https://api.themoviedb.org/3/movie/top_rated?api_key=a06e5a0d50cfbc16b1af9734dba78f95&language=en-US&page=1
  static async getTopRated(page) {
    try {
      let response = await axios.get(this.endpoint.movie.urlMovie + 'top_rated', {
        params: {
          api_key: this.endpoint.apiKey,
          language: this.endpoint.language,
          page: page
        }
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  // https://api.themoviedb.org/3/search/movie?api_key=a06e5a0d50cfbc16b1af9734dba78f95&page=1&query=avatar
  static getSearch = async (keyword, page) => {
    try {
      const response = await axios.get(this.endpoint.search.urlSearchMovie,
        {
          params: {
            api_key: this.endpoint.apiKey,
            page: page,
            query: keyword,
          },
        },
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };

  static async rev(key) {
    try {
      let response = await axios.get(this.endpoint.movie.popular);
      let review = [];
      for (let i = 0; i < 7; i++) {
        review.push(response.data.results[i]);
      }
      return review;
    } catch (error) {
      console.log(error);
    }
  }

  // https://api.themoviedb.org/3/movie/315162?api_key=a06e5a0d50cfbc16b1af9734dba78f95&language=en-US
  static async getDetailMovie(idMovie) {
    try {
      const response = await axios.get(this.endpoint.movie.urlMovie + idMovie, {
        params: {
          api_key: this.endpoint.apiKey,
          language: this.endpoint.language,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  // Videos Movie
  // https://api.themoviedb.org/3/movie/76600/videos?api_key=a06e5a0d50cfbc16b1af9734dba78f95
  static async getVideosMovie(idMovie) {
    try {
      const response = await axios.get(this.endpoint.movie.urlMovie + idMovie + '/videos', {
        params: {
          api_key: this.endpoint.apiKey,
          language: this.endpoint.language,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  
  // Cast
  // http://api.themoviedb.org/3/movie/297762/casts?api_key=e9e9d8da18ae29fc430845952232787c
  static async getCast(idMovie) {
    try {
      const response = await axios.get(this.endpoint.movie.urlMovie + idMovie + '/casts', {
        params: {
          api_key: this.endpoint.apiKey,
        },
      });
      return response.data.cast;
    } catch (error) {
      console.log(error);
    }
  }
  
  // https://api.themoviedb.org/3/movie/76600/images?api_key=a06e5a0d50cfbc16b1af9734dba78f95&language=en-US&include_image_language=en
  static async getImages(idMovie) {
    try {
      const response = await axios.get(this.endpoint.movie.urlMovie + idMovie + '/images', {
        params: {
          api_key: this.endpoint.apiKey,
          language: this.endpoint.language,
          include_image_language: 'en'
        },
      });
      return response.data.posters;
    } catch (error) {
      console.log(error);
    }
  }

  // https://api.themoviedb.org/3/movie/76600/reviews?api_key=a06e5a0d50cfbc16b1af9734dba78f95&language=en-US&page=1

  static async getReviews(idMovie, page) {
    try {
      const response = await axios.get(this.endpoint.movie.urlMovie + idMovie + '/reviews', {
        params: {
          api_key: this.endpoint.apiKey,
          language: this.endpoint.language,
          page: page
        },
      });
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }


}

export default EvlMoviesApis;
