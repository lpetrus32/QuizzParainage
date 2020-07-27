answers = [];
page = 0;

function answer1(){
    answers.push(document.getElementById("B1").value);
    console.log(answers);
}

function answer2(){
    answers.push(document.getElementById("B2").value);
    console.log(answers);
    console.log("A");
}

function answer3(){
    answers.push(document.getElementById("B3").value);
    console.log(answers);
}

function answer4(){
    answers.push(document.getElementById("B4").value);
    console.log(answers);
}

function next(num){
    let but1 = document.getElementById("B1");
    let but2 = document.getElementById("B2");
    let but3 = document.getElementById("B3");
    let but4 = document.getElementById("B4");
    let quest = document.getElementById("Q");

    if(page == 0){
        document.getElementById("page0").style.visibility="hidden";
        quest.style.visibility="visible";
        but1.style.visibility="visible";
        but2.style.visibility="visible";
    }else if(page == 1){
        answers.push(num);
        document.getElementById("Q").textContent="";
        but1.style.visibility="hidden";
        but2.style.visibility="hidden";
        document.getElementById("form").style.visibility="visible";
    }else if(page == 2){
        let name = document.getElementById("name").value;
        if(name == "" ){
            answers.splice(1,1);
            document.getElementById("error").textContent="Veuillez entrer vos nom et prénom";
            page--;
        }else{
            answers.push(document.getElementById("name").value);
            quest.textContent="Eclaire nous un peu, quel est ta situation dans les études supérieures ?";
            but1.style.height="29.5%";
            but2.style.height="29.5%";
            but1.textContent = "Parcours classique, Bac et licence de Bio";
            but2.textContent = "Parcours atypique (DUT, BTS, Licence pro...)"
            but1.style.visibility="visible";
            but2.style.visibility="visible";
            but3.style.visibility="visible";
            but4.style.visibility="visible";
            document.getElementById("form").style.visibility="hidden";
        }
        console.log(answers);
    }else if(page == 3){
        answers.push(num);
        quest.textContent="";
    }else if(page == 4){
        answers.push(num);
        quest.textContent="";
    }
    page++;
}