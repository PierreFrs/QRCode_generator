const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url, 
        width: size, 
        height: size
    });
}

const onSubmit = (e) => {
    e.preventdefault();
    
    const url = document.getElementById('url').value;
        const size = document.getElementById('size').value;
    if(url === '') {
            alert('Please enter a URL');
        } else {
    generateQRCode(url, size);
      }
    };
    
    form.addEventListener("submit", onSubmit);