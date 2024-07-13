document.querySelector('#contact-form').addEventListener('submit', submitContact);
var toastError = document.querySelector('.toast-error');


function submitContact(ev){
    ev.preventDefault();
    var form = this.elements;
    var errors = [];
    var mailformat = /^[\w\.\-\+]+@[\w\.\-]+\.[a-z]{2,5}$/;
    var phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    var phoneInput = form['contact'];

    if(form['name'].value === ''){
        errors.push("<span> Full name required </span>");
    }

    if(form['email'].value === '' || !form['email'].value.match(mailformat)){
        errors.push("<span> Valid email required </span>");
    }

    if(phoneInput.value === ''){
        errors.push("<span> Phone number <br /> required </span>");
    }

    if(form['query'].value === ''){
        errors.push("<span> Query required </span>");
    }

    if(form['message'].value === ''){
        errors.push("<span> Message required </span>");
    }

    if (errors.length > 0) {
        ev.preventDefault();
        toastError.innerHTML = errors.join('<br />')
        toastError.classList.add('show');
        setTimeout(timeOut, 5000)
        return;
    }

    var url = this.getAttribute("action");
    var formData = new FormData(this);

    // Send the data to the PHP script using Ajax
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.onreadystatechange = function() {
        
        if (request.readyState === 4 && request.status === 200) {
            var successToast = document.querySelector('.toast-success');
            successToast.innerHTML = '<span>Your email was sent successfully !</span>';
            successToast.classList.add('show');
            setTimeout(function(){
                successToast.classList.remove('show');
                window.location('/');
            }, 5000)
        }
    };
    
    request.send(formData);

    return true;
}

function timeOut(){
    toastError.classList.remove('show');
}