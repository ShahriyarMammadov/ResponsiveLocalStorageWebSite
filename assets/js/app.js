let images = document.querySelectorAll('img')
let imgText = document.querySelector('#imgText')
let living = document.querySelector('#two')
let dining = document.querySelector('#three')
let bedroom = document.querySelector('#four')
let living2 = document.querySelector('#five')
let srcImg = document.querySelector('#srcImg')
let searchLeftBtn = document.querySelector('#searchLeftBtn')
let checkIn = document.querySelector('#checkIn')
let checkOut = document.querySelector('#checkOut')
let adults = document.querySelector('#adults')
let kids = document.querySelector('#kids')
let alertIn = document.querySelector('.alertIn')
let alertOut = document.querySelector('.alertOut')


// SEARCH AVAILABILITY

let reservationArray = JSON.parse(localStorage.getItem("reservation")) ?? []
x = /(0[1-9]|10|11|12)\/(18|19|20|21|22|23|24|25|26)/;

searchLeftBtn.addEventListener('click', function () {
    reservationObj = {
        checkIn: '',
        checkOut: '',
        Adults: '',
        Kids: '',
    }
    alertIn.innerHTML = ''
    alertOut.innerHTML = ''

    reservationObj.checkIn = checkIn.value
    reservationObj.checkOut = checkOut.value
    reservationObj.Adults = adults.value
    reservationObj.Kids = kids.value

    if (reservationObj.checkIn == '') {
        let pElement = document.createElement('p')
        pElement.innerText = 'This field is request'
        alertIn.append(pElement)
    } else {
        var regex = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
        var dateOk = regex.test(reservationObj.checkIn);
        if (dateOk) {
            // alert("Ok");
        } else {
            let pElement = document.createElement('p')
            pElement.innerText = 'This not is valid'
            alertIn.append(pElement)
        }
    }
    if (reservationObj.checkOut == '') {
        let pElement = document.createElement('p')
        pElement.innerText = 'This field is request'
        alertOut.append(pElement)
    } else {
        var regex = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
        var dateOk = regex.test(reservationObj.checkOut);
        if (dateOk) {
            // alert("Ok");
        } else {
            let pElement = document.createElement('p')
            pElement.innerText = 'This not is valid'
            alertOut.append(pElement)
        }
    }
    if (reservationObj.checkOut != '' && reservationObj.checkIn != '' && dateOk === true) {
        reservationArray.push(reservationObj)
        localStorage.setItem("reservation", JSON.stringify(reservationArray))
        checkIn.value = ''
        checkOut.value = ''
        adults.value = 1
        kids.value = 0
    }
})

// localStorage.clear()

//----------------------------END--------------------------------

//Email 

let infoName = document.querySelector('#name')
let infoEmail = document.querySelector('#email')
let infoMessage = document.querySelector('#message')
let sendMessageBtn = document.querySelector('#sendMessage')
let nameAlert = document.querySelector('.nameAlert')
let emailAlert = document.querySelector('.emailAlert')
let messageAlert = document.querySelector('.messageAlert')

let information = JSON.parse(localStorage.getItem('Information')) ?? []

sendMessageBtn.addEventListener('click', function () {

    nameAlert.innerHTML = ''
    emailAlert.innerHTML = ''
    messageAlert.innerHTML = ''

    informationObj = {
        Name: '',
        Email: '',
        Message: '',
    }

    informationObj.Name = infoName.value
    informationObj.Email = infoEmail.value
    informationObj.Message = infoMessage.value

    if (informationObj.Name == '') {
        let pElement = document.createElement('p')
        pElement.innerText = 'This field is request'
        nameAlert.append(pElement)
    }
    if (informationObj.Email == '') {
        let pElement = document.createElement('p')
        pElement.innerText = 'This field is request'
        emailAlert.append(pElement)
    } else {
        var regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        var dateOk = regex.test(informationObj.Email);
        if (dateOk) {
            // alert("Ok");
        } else {
            let pElement = document.createElement('p')
            pElement.innerText = 'Email is not valid'
            emailAlert.append(pElement)
        }
    }
    if (informationObj.Message == '') {
        let pElement = document.createElement('p')
        pElement.innerText = 'This field is request'
        messageAlert.append(pElement)
    }

    if (informationObj.Name != '' && informationObj.Email != '' && informationObj.Message != '' && dateOk) {
        information.push(informationObj)
        localStorage.setItem('Information', JSON.stringify(information))

        infoName.value = ''
        infoEmail.value = ''
        infoMessage.value = ''
    }
})

//----------------------------END-----------------------


//SUBSCRIBE

let subscribeBtn = document.querySelector('#subscribe')
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let modalSubscribe = document.querySelector('#modalSubscribe')
let modalInput = document.querySelector('#modalInput')
let modalAlert = document.querySelector('.modalAlert')
let subsLeftBtn = document.querySelector('#subsLeftBtn')

let subscribe = localStorage.getItem('Subscribe') ?? []

subscribeBtn.addEventListener('click', function () {
    modal.style.display = "block";
})

subsLeftBtn.addEventListener('click', function () {
    modal.style.display = "block";
})

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modalSubscribe.addEventListener('click', function () {
    modalAlert.innerHTML = ''
    if (modalInput.value == '') {
        let pElement = document.createElement('p')
        pElement.innerText = 'This field is request'
        modalAlert.append(pElement)
    } else {
        var regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        var dateOk = regex.test(modalInput.value);
        if (dateOk) {
            // alert("Ok");
        } else {
            let pElement = document.createElement('p')
            pElement.innerText = 'Email is not valid'
            modalAlert.append(pElement)
        }
    }

    if (modalInput.value != '' && dateOk) {
        subscribe.push(modalInput.value)
        localStorage.setItem('Subscribe', modalInput.value)
        modalInput.value = ''
    }

})
// localStorage.clear()

//--------------------------END--------------------------

//MENUBARSCLICK

let menuBars = document.querySelector('#menuBars')
let leftSide = document.querySelector('.left')

menuBars.addEventListener('click', function () {
    // leftSide.classList.remove('left')
    leftSide.classList.toggle("block")
})

//------------------------END---------------------------

//images slider

living.addEventListener('click', function () {
    living.style.opacity = '1'
    dining.style.opacity = '0.6'
    bedroom.style.opacity = '0.6'
    living2.style.opacity = '0.6'
    srcImg.src = './assets/images/3.jpg'
    imgText.innerText = living.className

})
dining.addEventListener('click', function () {
    dining.style.opacity = '1'
    living.style.opacity = '0.6'
    bedroom.style.opacity = '0.6'
    living2.style.opacity = '0.6'
    srcImg.src = './assets/images/2.jpg'
    imgText.innerText = dining.className

})
bedroom.addEventListener('click', function () {
    bedroom.style.opacity = '1'
    living.style.opacity = '0.6'
    dining.style.opacity = '0.6'
    living2.style.opacity = '0.6'
    srcImg.src = './assets/images/1.jpg'
    imgText.innerText = bedroom.className

})
living2.addEventListener('click', function () {
    living2.style.opacity = '1'
    living.style.opacity = '0.6'
    bedroom.style.opacity = '0.6'
    dining.style.opacity = '0.6'
    srcImg.src = './assets/images/4.jpg'
    imgText.innerText = living2.className
})

//----------------------END-----------------------------