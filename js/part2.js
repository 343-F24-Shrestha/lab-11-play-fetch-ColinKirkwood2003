const userList = document.getElementById("user-list");
const userCardTemplate = document.getElementById("user-card-template");

document.addEventListener("DOMContentLoaded", async () => {
        const response = await fetch("https://reqres.in/api/users?page=1");

        if (!response.ok) {
            throw new Error(`Error fetching users: ${response.statusText}`);
        }

        const data = await response.json();

        data.data.forEach(user => {
            const userCard = userCardTemplate.content.cloneNode(true);
            
            userCard.querySelector("h2").textContent = `${user.first_name} ${user.last_name}`;
            const userImg = userCard.querySelector("img");
            userImg.src = user.avatar;
            userImg.alt = `${user.first_name} ${user.last_name}`;

            userList.appendChild(userCard);
        });
});