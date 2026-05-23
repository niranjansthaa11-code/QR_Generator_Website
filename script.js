const inp = document.querySelector('#qr-input');
const genBtn = document.querySelector('#genratebtn');
const qrPopup = document.querySelector('#qr-show');
const qrImg = document.querySelector('#og-qr');
const downloadBtn = document.querySelector('#downlaod-btn');
const closeBtn = document.querySelector('#close-btn');
const mainbaksa= document.querySelector('#mainbaksa');
const waInput = document.querySelector('#wa-input');
const waBtn = document.querySelector('#wa-genratebtn');




const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

genBtn.addEventListener('click', () => {
    if(!inp.value){
        alert('Enter text or Url first')
    } else{

    const imgUrl = url + inp.value;
    qrImg.setAttribute('src', imgUrl); // this gives the new url of the genrated qr for me
    setTimeout(() => {
        qrPopup.classList.add('reveal');
        mainbaksa.classList.add('opacity')
    }, 1000)}
});

downloadBtn.addEventListener('click', () => {
    const imgUrl =url+inp.value;
    fetch(imgUrl)
    .then((res) => res.blob()) // blob means binary large objet which can be used create the fie like object comming from api
    .then((blob)=> {
        const link =document.createElement('a');
        link.href =URL.createObjectURL(blob);
        link.download ='qr.jpg'
        link.click(); //yelsey chahi auto click garunxa kinaki user le tw pahilai nai click garisakyo feri kina garush

    })
});

closeBtn.addEventListener('click' , () => {
    qrPopup.classList.remove('reveal');
    mainbaksa.classList.remove('opacity')
})

// for the whatsapp adding
waBtn.addEventListener('click', () => {
    if(!waInput.value){
        alert('Enter Whatsapp number first');
    } else{
        const waUrl='https://wa.me/'+waInput.value;
        const imgUrl=url + encodeURIComponent(waUrl);
        qrImg.setAttribute('src',imgUrl);
        setTimeout(() => {
            qrPopup.classList.add('reveal');
            mainbaksa.classList.add('opacity');
        },1000);
    }
})

