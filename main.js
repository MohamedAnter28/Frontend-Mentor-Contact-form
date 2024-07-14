const form = document.querySelector("#contact-form");

form.addEventListener("submit",(e) => {
  e.preventDefault()

  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const queryType = document.querySelector('input[name="Query Type"]:checked');
  const consent = document.getElementById('check').checked;

  let hasError = false;

  if (!firstName) {
    document.getElementById('first-name').classList.add("error")
    document.querySelector('#first-name + .error-ms').classList.add("active")
    hasError = true;
  }else if (firstName){
    document.getElementById('first-name').classList.remove("error")
    document.querySelector('#first-name + .error-ms').classList.remove("active")
    hasError = false;
  }

  if (!lastName) {
    document.getElementById('last-name').classList.add("error")
    document.querySelector('#last-name + .error-ms').classList.add("active")
    hasError = true;
  }else if (lastName){
    document.getElementById('last-name').classList.remove("error")
    document.querySelector('#last-name + .error-ms').classList.remove("active")
    hasError = false;
  }
  
  if (!email) {
    document.getElementById('email').classList.add("error")
    document.querySelector('#email + .error-ms').classList.add("active")
    hasError = true;
  }else if (email){
    document.getElementById('email').classList.remove("error")
    document.querySelector('#email + .error-ms').classList.remove("active")
    hasError = false;
  }

  if (!message) {
    document.getElementById('message').classList.add("error")
    document.querySelector('#message + .error-ms').classList.add("active")
    hasError = true;
  }else if (message){
    document.getElementById('message').classList.remove("error")
    document.querySelector('#message + .error-ms').classList.remove("active")
    hasError = false;
  }

  if (!queryType) {
    document.querySelector('.col-3 .error-ms').classList.add("active")
    hasError = true;
  }else if (queryType){
    document.querySelector('.col-3 .error-ms').classList.remove("active")
    hasError = false;
  }

  if (!consent) {
    document.querySelector('.col-5 .error-ms').classList.add("active")
    hasError = true;
  }else if (consent){
    document.querySelector('.col-5 .error-ms').classList.remove("active")
  }


  const SuccesMs = document.querySelector(".succes-ms");
  const inputs  = document.querySelectorAll("input");
  const textareas = document.querySelectorAll("textarea");

  if (!hasError) {
    document.querySelectorAll('.error-ms').forEach((e) =>{
      e.classList.remove("active")
    })
    SuccesMs.classList.add("active");
    inputs.forEach((input) => {
      input.value = "";
    });
    textareas.forEach((textarea) => {
      textarea.value = "";
    });

    document.getElementById('check').checked = false;
    queryType.checked = false;
    setTimeout(() => {
      SuccesMs.classList.remove("active");
    },5000)
  }



  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
    queryType: queryType ? queryType.value : "",
    consent: consent
  };
  const jsonData = JSON.stringify(formData);
  localStorage.setItem('formData', jsonData);
})




