function showPage(pageId){

    let pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

}

function sendForm(){

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    if(name === '' || phone === ''){
        alert('Пожалуйста, заполните имя и телефон');
        return;
    }

    let popup = document.getElementById('popup');

    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    },3000);

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';

}
