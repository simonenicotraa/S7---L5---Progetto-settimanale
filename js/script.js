


let promise = fetch("../json/users.json")
.then(response => response.json())
.then(data => {
    let cont= document.querySelector('.container')

    data.forEach(element => {
        let div = document.createElement('div')
        div.innerHTML= `<img src="${element.profileURL}">
                        <h2>${element.firstName}  ${element.lastName}</h2>
                        <h3>Username: ${element.username}</h3>
                        <p>${element.email}</p>
                        `
        cont.appendChild(div)
    });
})