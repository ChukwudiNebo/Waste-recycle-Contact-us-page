const hamburger = document.querySelector('.hamburger');
let hamburgerOpen = false;
hamburger.addEventListener('click', () =>
{
    if (!hamburgerOpen)
    {
        hamburger.classList.add('open');
        hamburgerOpen = true;
    } else
    {
        hamburger.classList.remove('open');
        hamburgerOpen = false;
    }
});

const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');
const userPhone = document.querySelector('.user-phone');
const textArea = document.querySelector('.text-area');
const formdiv = document.querySelector('.button-sign');

userName.addEventListener('blur', validateName);
userEmail.addEventListener('blur', validateEmail);
userPhone.addEventListener('blur', validatePhone);


function validateName(e)
{
    const userName = document.querySelector('.user-name');
    const re = /^[a-zA-Z]{5,15}$/;

    if (!re.test(userName.value))
    {
        userName.classList.add('is-invalid'); 
    } else{
        userName.classList.remove('is-invalid'); 
    }
};

function validateEmail(e)
{
    const userEmail = document.querySelector('.user-email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(userEmail.value))
    {
        userEmail.classList.add('is-invalid'); 
    } else{
        userEmail.classList.remove('is-invalid'); 
    } 
};


function validatePhone(e)
{
    const userPhone = document.querySelector('.user-phone');
    const re = /^\(?\+\d{3}\)?[-. ]?\d{3}[-. ]?\d{5}$/;

    if (!re.test(userPhone.value))
    {
        userPhone.classList.add('is-invalid'); 
    } else{
        userPhone.classList.remove('is-invalid'); 
    } 
};





// load event listeners function

formdiv.addEventListener( 'click' , formField);


function formField(e){
    if (userName.value === "" || userEmail.value === "" ||  userPhone.value === "" || textArea.value === "")
    {
        const alert = document.createElement('div');
        alert.classList = "alert alert-danger mt-3";
        alert.appendChild(document.createTextNode('Form incomplete'));
        document.querySelector(".form").appendChild(alert);
    } else
    {
        // remy make sure the submit button when clicked here is directed to your own login page
        const alert = document.createElement('div');
        alert.classList = "alert alert-danger mt-3";
        alert.appendChild(document.createTextNode('Data completed'));
        document.querySelector(".form").appendChild(alert);
    }

    setTimeout(function ()
    {
        document.querySelector('.alert').remove();
    }, 2000);

        document.querySelector('.user-name').value = "";
        document.querySelector('.user-email').value = "";
        document.querySelector('.user-phone').value = "";
        document.querySelector('.text-area').value = "";
    
    e.preventDefault();
};