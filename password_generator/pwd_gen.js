const userForm = document.getElementById('user-form')

const loadForm = (e) => {
    console.log('Reloading the form...');
    e.preventDefault()
}

const pass_el = document.querySelector('#gen_pwd')
const length = 16
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

const GeneratePassword = (e) => {
    let pass = ''
    for (let index = 0; index <= length; index++) {
        let rand = Math.floor(Math.random() * chars.length)
        pass += chars.substring(rand, rand + 1)
    }
    pass_el.innerText = pass

    userForm.addEventListener('load', loadForm)
}

GeneratePassword()
