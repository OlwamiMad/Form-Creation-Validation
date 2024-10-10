// Step 1: Define the async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Container to display the data

    try {
        // Step 2: Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json(); // Parse the JSON data

        // Step 3: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 4: Create a <ul> element
        const userList = document.createElement('ul');

        // Step 5: Loop through the user data and display names
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Add <li> to the <ul>
        });

        // Step 6: Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 7: Handle any errors
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 8: Fetch user data when the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
