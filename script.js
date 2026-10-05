//Selecting the container elements using its ID
//user cards will be added inside this container

const container=document.getElementById("userContainer");

//Async function to fetch user data from API
async function fetchUser(){
    try{

        //Make an HTTP request to the API using fetch()
        const response=await fetch("https://jsonplaceholder.typicode.com/users")

        //Converting the JSON response to JavaScript value
        const users=await response.json();

        //Displaying the fetched user in console
        console.log(users);

        //Calling the displayUser function and passing the fetched users as argument
        displayUser(users);
    }
    catch(error){

        //Handles errors if the API request fails
        console.log("error");
    }
}

//Calling the fetchUser function 
fetchUser();

//Creating a funtion to display users on the webpage
function displayUser(users){

    //forEach loops through each user in the users array
    users.forEach((user)=>{

        //Creating a new div element for each user
        const card=document.createElement("div");

        //Adding the card class to the newly created div
        card.classList.add("card");

        //Adding the userdetails inside the card
        card.innerHTML=` <h3>${user.name}</h3>
            <p><strong>Email: </strong> ${user.email}</p>
            <p><strong>Phone: </strong> ${user.phone}</p>
            <p><strong>City: </strong> ${user.address.city}</p>
            <p><strong>Company</strong> ${user.company.name}</p> `

            //Appending the completed user card to the main container
            container.appendChild(card);

    })
}