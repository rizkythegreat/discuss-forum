const api = (() => {
    const BASE_URL = 'https://forum-api.dicoding.dev/v1';
    async function getAllThreads() {
        const response = await fetch(`${BASE_URL}/threads`);

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        const {
            data: { threads },
        } = responseJson;

        return threads;
    }

    async function getAllUsers() {
        const response = await fetch(`${BASE_URL}/users`);

        const responseJson = await response.json();

        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        const {
            data: { users },
        } = responseJson;

        return users;
    }


    return {
        getAllThreads,
        getAllUsers
    };
})();


export default api;