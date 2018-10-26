const api = 'https://api.github.com/users';

async function getUser() {
    try {
        let response = await fetch(api);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
}

export {getUser};
