const inp = document.querySelector('#qr-input');
const genBtn = document.querySelector('#genratebtn');
const qrPopup = document.querySelector('#qr-show');
const qrImg = document.querySelector('#og-qr');
const downloadBtn = document.querySelector('#downlaod-btn');
const closeBtn = document.querySelector('#close-btn');




const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

genBtn.addEventListener('click', () => {
    if(!inp.value){
        alert('Enter text or Url first')
    } else{

    const imgUrl = url + inp.value;
    qrImg.setAttribute('src', imgUrl); // this gives the new url of the genrated qr
    setTimeout(() => {
        qrPopup.classList.add('reveal');
    }, 1000)}
})


