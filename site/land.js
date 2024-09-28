

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
        .then(response => console.log(response))
}