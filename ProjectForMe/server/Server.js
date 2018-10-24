const getUsers = 'https://api.github.com/users';

async function getListUser() {
    try {
        let response = await fetch(getUsers);
        let responseJson = await response.json();
        return responseJson;
    } catch (e) {
        console.error(e);
    }
}
export {getListUser};
