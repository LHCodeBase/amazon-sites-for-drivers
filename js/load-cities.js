const data = fetch("./site-list.json")
    .then(response => {
        console.log(response); /* debug */
        /* .json() returns another promise that needs to be handled */
        response.json();
    })
    .then(_data => console.log(_data))
    .catch(error => {
        console.log("Problem loading JSON data")
    })
