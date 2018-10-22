const urlAPI = 'https://api.github.com/users';

function* getMoviesFromApi() {
    const response = yield fetch(urlAPI, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): [];
    return movies;
}

export const Api = {
    getMoviesFromApi
};
