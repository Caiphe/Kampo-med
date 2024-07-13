document.querySelector('#appointment-form').addEventListener('submit', submitContact);
var toastError = document.querySelector('.toast-error');


function submitContact(ev){
    ev.preventDefault();
    var form = this.elements;
    var errors = [];
    var phoneInput = form['phone'];

    if(form['name'].value === ''){
        errors.push("<span> Full name required </span>");
    }

    if(phoneInput.value === ''){
        errors.push("<span> Phone number <br /> required </span>");
    }

    if(form['department'].value === ''){
        errors.push("<span> Department required </span>");
    }

    if(form['message'].value === ''){
        errors.push("<span> Message required </span>");
    }

    if (errors.length > 0) {
        toastError.innerHTML = errors.join('<br />')
        toastError.classList.add('show');
        setTimeout(timeOut, 5000)
        return;
    }

    var url = this.getAttribute("action");
    var formData = new FormData(this);

    console.log(formData);

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
            }, 5000)
        }
    };
    
    request.send(formData);

    return;

}

function timeOut(){
    toastError.classList.remove('show');
}