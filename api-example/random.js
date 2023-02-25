const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    const nameTag = user.results[0].name.title + '. ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = nameTag;
    // console.log(nameTag);
    const locationTag = user.results[0].location.street.number;
    document.getElementById('location').innerHTML = locationTag;
    console.log(user.results[0].location.street.number);
}

loadUser();