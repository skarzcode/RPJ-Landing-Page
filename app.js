const images = document.querySelectorAll(".Gallery-images");
const modal = document.getElementsByClassName("modal")[0];
const modalImg = document.getElementsByClassName("modalImg")[0];
const modalTxt = document.getElementsByClassName("modalTxt")[0];
const close = document.getElementById("close");
const boxImg = document.querySelectorAll(".box-img");
var galleryImg = ["galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg"];




console.log(modalTxt.innerHTML, "willy wanker");

console.log(galleryImg[0]);




images.forEach((image) => {
            image.addEventListener("click", () => {
                modalImg.src = image.src;
                modal.classList.add("appear");
                close.addEventListener("click", () =>{
                    modal.classList.remove("appear");
                    
                } );
                for (let i= 0; i<galleryImg.length; i++){
                    boxImg[i].src = galleryImg[i];
                };
            });

            
});


boxImg.forEach((img) => {
    img.addEventListener("click", () => {
        const modalSrc = modalImg.src;
        const boxSrc = img.src
        modalImg.src = boxSrc;
        img.src = modalSrc;
    });
});


document.addEventListener("click", function(event){
    if(event.target.id == "Gallery__images"){
        console.log("chiken dinner");
    };
});





