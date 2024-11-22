const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');

document.getElementById('api-1-btn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://canvas.jmu.edu/api/v1/courses', {
            headers: {
                Authorization: '19~nKQ9wuXtzxLRfe4PUZNhxKaKH2PhYVhy3kM3LafPuXEW9DwFxYMBG2fEFncu6yzR'
            }
        });
        const data = await response.json();
        if (response.ok) {
            output1.textContent = JSON.stringify(data, null, 2);
        } else {
            output1.textContent = `Error: ${response.status} - ${data.message}`;
        }
        console.log(response);
    } catch (error) {
        output1.textContent = `Fetch error: ${error.message}`;
        console.error(error);
    }
});

document.getElementById('api-2-btn').addEventListener('click', async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            output2.innerHTML = `<img src="${data.message}" alt="Random Dog Image" style="max-width: 100%;"/>`;
        } else {
            output2.textContent = `Error: ${response.status}`;
        }
        console.log(response);
    } catch (error) {
        output2.textContent = `Fetch error: ${error.message}`;
        console.error(error);
    }
});
