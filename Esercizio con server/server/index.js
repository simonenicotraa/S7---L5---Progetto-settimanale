


const express = require('express');
const cors =  require('cors');
const { response } = require('express');
const app = express();


app.use(cors());
app.listen(3000, () => console.log('Server attivo sulla porta 3000'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

let count = 3
let utenti = 
 [
    {
        id: 1,
      username: "john",
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      profileURL: "img/male.png",
      email: "john.doe@example.com"
    },
    {
        id: 2,
      username: "jane",
      firstName: "Jane",
      lastName: "Doe",
      gender: "Female",
      profileURL: "img/female.png",
      email: "jane.doe@example.com"
    } 
  ] 

  //-----------------------------------GET---------------------------------

    app.get('/api/users', (request, response) =>{ /* se client fa chiamata a questa rotta rispondo con questa funzione */
    response.json(utenti)
    })

    app.get('/api/users/:id', (request, response) => {
      const id = request.params.id;
      utenti.forEach(ele => {
          if(ele.id === +id) {
              response.json(ele);
              return;
          }
      })
  })

  //-----------------------------------PUT---------------------------------




  //-----------------------------------DELETE---------------------------------
  app.delete('/api/users/:id', (request, response) => {
    const id = request.params.id;
    utenti = utenti.filter(ele => ele.id !== +id);
    response.json('Utente Eliminato dal DB');
})
  //-----------------------------------POST---------------------------------
   app.post('/api/users', (request, response) =>{
    const obj= request.body;
    obj.id = count++;
    utenti.push(obj);
    response.json('utente registrato')
   })
