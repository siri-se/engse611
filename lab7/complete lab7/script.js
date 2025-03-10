document.querySelectorAll('.show-btn').forEach(button => {
    button.addEventListener('click', function() {
       
        const exerciseId = this.getAttribute('data-exercise');
        
       
        const url = `ten-challengs/index${exerciseId}.html`;  

        window.location.href = `../ten-challengs/index${exerciseId}.html`;  
    });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const profileImg = document.getElementById("zoom"); 

profileImg.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src; 
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
