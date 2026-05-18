document.addEventListener("DOMContentLoaded", function(){
    const searchInput = document.querySelector('input[type="text"]');
    const cards = document.querySelectorAll('.ser');
    searchInput.addEventListener("keyup", function(){
        let value = searchInput.value.toLowerCase();
        cards.forEach(card => {
            let text = card.innerText.toLowerCase();
            if(text.includes(value)){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }
        });
    });
    const buttons = document.querySelectorAll('.cabrel input');
    buttons.forEach(btn => {
        btn.addEventListener("click", function(){
            let filter = btn.value.toLowerCase();
            cards.forEach(card => {
                let text = card.innerText.toLowerCase();
                if(filter === "tous"){
                    card.style.display="block";
                }else if(text.includes(filter)){
                    card.style.display="block";
                }else{
                    card.style.display="none";
                }
            });
        });
    });
    const voirBtn = document.querySelector('.caporal');
    voirBtn.addEventListener("click", function(){
        alert("toutes les offres seront bientot disponibles!");
    });
    const deposerBtn = document.getElementById("jo");
    deposerBtn.addEventListener("click", function(){
        window.location.href="publier offre.html";
    });
});