document.getElementById("btn").addEventListener("click", () => {
 // 1. Define the URL. This endpoint gives us one random, safe joke.
const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function getNewData() {
    try {
        // 2. FETCH: The 'await' tells JS to wait for the server to answer
        const response = await fetch(url);

        // 3. CHECK: If the server is busy or down, catch it early
        if (!response.ok) throw new Error("Server is busy");

        // 4. PARSE: Convert the raw response into a usable JS Object
        const data = await response.json();

        // 5. LOGIC: Jokes can come in 1 part or 2 parts (Setup/Delivery)
        if (data.type === "single") {
            console.log("Joke:", data.joke);
        } else {
            console.log("Setup:", data.setup);
            console.log("Delivery:", data.delivery);

            document.getElementById("quote").innerHTML = data.setup;
    document.getElementById("author").innerHTML = data.delivery
        }

    } catch (error) {
        // 6. ERROR HANDLING: If anything fails, show us why
        console.error("Oops! Something went wrong:", error.message);
    }

    ;


}

// Call the function
getNewData();

   


  
});

