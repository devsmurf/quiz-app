// const { Utilities } = require("winjs");

// OOP: Nesne Tabanlı Programlama
const quiz = new Quiz(sorular);
const ui = new UI();

// document.querySelector(".btn_start") (ui.btn_start  yerine koyduk )
   ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayısınıGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
})

    ui.btn_next.addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        ui.soruGoster(quiz.soruGetir());
    ui.soruSayısınıGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");

    } else {
        console.log("quiz bitti");
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayısı);


    }
});
// const option_list = document.querySelector(".option_list")
// const correctIcon = '  <div class="icon"><i class="fas fa-check"></i></div>'
// const IncorrectIcon = '  <div class="icon"><i class="fas fa-times"></i></div>'

ui.btn_quit.addEventListener("click", function(){
     window.location.reload();
})
ui.btn_replay.addEventListener("click", function(){
    quiz.soruIndex=0;
    quiz.dogruCevapSayısı=0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active")
})

function optionSelected(option){
    let cevap =option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

if(soru.cevabiKontrolEt(cevap)){
    quiz.dogruCevapSayısı +=1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
    
}
else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.IncorrectIcon);
   
}
for(let i=0; i<ui.option_list.children.length; i++){
    ui.option_list.children[i].classList.add("disabled")
}

ui.btn_next.classList.add("show");


}
