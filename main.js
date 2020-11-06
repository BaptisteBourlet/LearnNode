const axios = require('axios')
const fs = require('fs')


url = "http://localhost:3001/users";
let data2 = []

let form = document.getElementById('createForm');
form.addEventListener('submit', function (event) {
  data2=data2.push({firstname: this.firstname.value,
    lastname: this.lastname.value,
    age: parseInt(this.age.value),
    email: this.email.value})
  event.preventDefault();
  if (this.firstname.value != "" && this.lastname.value != "" && this.age.value != "" && this.email.value != "") {
    axios.post(url, {

      firstname: this.firstname.value,
      lastname: this.lastname.value,
      age: parseInt(this.age.value),
      email: this.email.value
    });
  } else {
    alert('Complete all input\nplease')
  }

})

