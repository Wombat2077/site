

function openUserAgreement() {
    document.querySelector('#user-agreement').dataset.open = true;
}
function closeUserAgreement() {
    document.querySelector('#user-agreement').dataset.open = false;
}
function submitData(e) {
    e.preventDefault();
    let data = {};
    let form = document.querySelector('#request');
    data.name = form.name.value;
    data.phone = form.phone.value;
    data.city = form.city.value;
    data.age = form.age.value;
    data.telegram = form.telegram.value;
    axios
        .post('/create-request', data)
        .then(response =>{
            console.log(response);
            launch_success_toast();
        })
        .catch(error => launch_error_toast())
}
var error = document.getElementById("error-toast")
var success = document.getElementById("success-toast")
function launch_success_toast() {
    
    success.className = "toast show";
    setTimeout(function(){ success.className = success.className.replace("show", ""); }, 5000);
}
function launch_error_toast() {
    
    error.className = "toast show";
    setTimeout(function(){ error.className = error.className.replace("show", ""); }, 5000);
}