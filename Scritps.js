const qrinput = document.querySelector("#qr-input");
const qrbut = document.querySelector(".qr-button");
const qrimg = document.querySelector("#qr-img");

qrbut.addEventListener("click", ()=>{

    const inputValue = qrinput.value;

    if ( ! inputValue ) {

        alert("Please enter a valid URL");
        return;
        
    }else{

        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt =`QR Code for ${inputValue}`;
    }
    

})




