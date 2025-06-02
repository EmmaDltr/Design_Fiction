const data = fetch('data.json').then(response => {
    response.json().then(jsonData => {
        console.log(jsonData);
    }
).catch(error => {
        console.error('Error fetching data:', error);
    });
});