/* I'm trying to get into the habit of commenting out all my code
    just so I'm sure what each line does 

    MAKE CLASSES FOR API REQUEST!!!!!!!!!!!!
    
    It's good to make classes for API request because it helps keep your code reusable and clean.
    I didn't do that at the start but TIL thats why I had to restructure my project :/ */ 

export default class Exchange {
    // DEFINE STATIC METHOD FOR EXCHANGE CLASS
    // THIS METHOD WILL CALL API AND RETURN PROMISE
    static getExchange() {
        // FETCH WILL RETURN AN API PROMISE
        return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
        // .THEN TAKES A CALLBACK FUNCTION TO DETERMINE WHAT HAPPENS NEXT
        .then(function(response) {
            // IF THE RESPONSE IS NOT OK (GETS A BAD STATUS CODE)
            // DEFINE AN ERROR MESSAGE AND THROW NEW ERROR
            // ERROR GETS SENT TO CATCH BLOCK BELOW
            if (!response.ok) {
                const errorMsg = `${response.status}, something went wrong!!`
                throw new Error(errorMsg);
            } else {
                // IF STATUS CODE IS OKAY (200) STATIC METHOD WILL RETURN PARSED JSON DATA
                return response.json();
                /* unfortunately I thought .json() and JSON.parse() were the same thing (they are not!)
                so my previous code did not work (could not access any properties!)
                
                .json() only parses JSON response from network request
                JSON.parse() actually turns a JSON string into a Javascript Object you can manipulate,
                They look really similar I guess I was confused when I did the reading*/
            } 
        }) // This code is simple just returns error object, it will be used for further error handling
        .catch(function(error) {
            return error 
        })
    }
}