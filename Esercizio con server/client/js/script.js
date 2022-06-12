/*  const { json } = require("body-parser");  */

 document.addEventListener('DOMContentLoaded', () => {
    stampaUt()
});

function stampaUt(){
    fetch('http://localhost:3000/api/users')
.then(response => response.json())
.then(data => {
    let cont= document.querySelector('.container')
    cont.innerHTML=''
    data.forEach(element => {
        let div = document.createElement('div')
        div.innerHTML= `<img src="${element.profileURL}">
                        <h2>${element.firstName}  ${element.lastName}</h2>
                        <h3>Username: ${element.username}</h3>
                        <p>${element.email}</p>
                        <button onclick="detail(${element.id})"><i class="bi bi-body-text"></i></button>
                        <button onclick="modificaUt()"><i class="bi bi-pencil-square"></i></button> <button onclick="eliminaUt(${element.id})"><i class="bi bi-trash"></i></button>
                        `
        cont.appendChild(div)
    });
})
}

function detail(id){
    fetch('http://localhost:3000/api/users/'+id)
    .then(response => response.json())
    .then(json => {
         let det= document.querySelector('.detail')
         det.innerHTML=''
        let divdet = document.createElement('div')
        divdet.innerHTML=   `<div>
                            <img src="${json.profileURL}">
                            <div>
                            <div>
                            <h2>${json.firstName}  ${json.lastName}</h2>
                            <h3>Username: ${json.username}</h3>
                            <p>${json.email}</p>
                            <p>${json.gender}</p>
                            </div>
                            `
        det.appendChild(divdet) 
    }) 
    
} 

function eliminaUt(id){
        fetch('http://localhost:3000/api/users/'+id, 
        {method: 'DELETE'})
        .then(response => response.json())
        .then(json => {
            console.log(json);
            stampaUt()
        })
    }


function modificaUt(){
    alert('Modificato')
}


 function addUsers(){
   
    let username= document.querySelector('.user').value
    let nome= document.querySelector('.nome').value
    let cognome=document.querySelector('.cognome').value
    let sesso=document.querySelector('.gender').value
    let mail=document.querySelector('.email').value
    
    let obj ={
        username: username,
        firstName:  nome,
        lastName: cognome,
         profileURL: "img/ut.png",   
        gender:sesso,
        email: mail
    } 
    console.log(obj)
     fetch('http://localhost:3000/api/users',{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
          }
    })
    .then(response => response.json())
    .then(json => console.log(json),
    stampaUt()
    );

    }