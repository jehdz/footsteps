const submit = document.getElementById('submit')


submit.addEventListener('click', () => {

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const address = document.getElementById('address').value;


    if (name.length == 0 || description.length == 0 || category.length == 0 || address.length == 0) {
        alert('Please fill out form completely');
    } else {

        var newEntry = {
            "name": name,
            "description": description,
            "category": category,
            "address": address
        }
        locationData.push(newEntry);
        alert('Thank you for submitting! our Team will review your entry');

    }


    //For now, this line is just for testing purposes
    console.log(locationData.length);
});