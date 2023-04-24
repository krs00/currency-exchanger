export default class Exchange {
    static getExchange() {
        return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
        .then(function(response) {
            if (!response.ok) {
                const errorMsg = `${response.status}, something went wrong!!`
                throw new Error(errorMsg);
            } else {
                return response.json();
            } 
        })
        .catch(function(error) {
            return error 
        })
    }
}