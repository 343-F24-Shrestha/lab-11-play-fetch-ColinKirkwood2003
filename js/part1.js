const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let query = new URLSearchParams({name, age});

    let response = await fetch('https://echo.zuplo.io/api?'+ query.toString());
    console.log(response);
    const data = await response.json();

    output.textContent = JSON.stringify(data, null, 2); 
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
    };

    try {
        let response = await fetch('https://echo.zuplo.io/api', options);
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error("Error:", error);
        output.textContent = "Failed to fetch data.";
    }
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**

    // TODO
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ name, age }).toString(),
    };

    let response = await fetch('https://echo.zuplo.io/api', options);
    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
});
