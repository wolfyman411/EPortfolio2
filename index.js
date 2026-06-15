// template_5a9fb5j
// service_jv8u7qq
// OIAcwsHQrAdncjmB6

let isModalOpen = false;
let isDarkTheme = false;

function contact(event) {
    event.preventDefault()

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    loading.classList += ' modal__overlay--visible'

    emailjs.sendForm(
        'service_jv8u7qq',
        'template_5a9fb5j',
        event.target,
        'OIAcwsHQrAdncjmB6'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible')
        success.classList += ' modal__overlay--visible'
        console.log('it worked')
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible')
        alert(
            "The email service is temporarily unavailible, please contact me directly at eliwhuffman@gmail.com"
        )
    })

    // loading.classList += ' modal__overlay--visible'
    
    // setTimeout(() => {
    //     loading.classList.remove('modal__overlay--visible')
    //     success.classList += ' modal__overlay--visible'
    //     console.log('it worked')
    // }, 1000)
}

function toggleModal() {
    isModalOpen = !isModalOpen

    if (isModalOpen) {
        document.body.classList += " modal--open"
    }
    else {
        document.body.classList.remove('modal--open')
    }
}

function toggleContrast() {
    isDarkTheme = !isDarkTheme

    if (isDarkTheme) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove('dark-theme')
    }
}