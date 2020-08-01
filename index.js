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
        quest.textContent="";
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
            quest.innerHTML=`Eclaire nous un peu, quel est ta situation dans les études supérieures ?`;
            but1.style.height="29.5%";
            but2.style.height="29.5%";
            but1.textContent = "Parcours classique, Bac et licence de Bio";
            but2.textContent = "Parcours atypique (DUT, BTS, Licence pro...)";
            but1.style.visibility="visible";
            but2.style.visibility="visible";
            but3.style.visibility="visible";
            but4.style.visibility="visible";
            document.getElementById("form").style.visibility="hidden";
        }
    }else if(page == 3){
        answers.push(num);
        quest.textContent="Attention mise en situation ! Tu as cours à seulement 15h demain, que fais tu de ta soirée ?";
        but1.textContent = `On rentabilise, GO Tinder !`;
        but2.textContent = "Netflix & Chill";
        but3.textContent = "Apéro tranquille sur les quais sans rentrer trop tard";
        but4.textContent = "Ok alors pré-soirée chez moi, puis on enchaine les bars et on fini en boite !";
    }else if(page == 4){
        answers.push(num);
        quest.textContent = "Et sinon l'informatique ca te parle un peu ?";
        but1.style.height = "62%";
        but2.style.height = "62%";
        but1.textContent = "J'en ai déja fait dans mes études ou tout seul";
        but2.textContent = "Alors non pas vraiment c'est surtout la Bio qui m'a attiré";
        but3.style.visibility="hidden";
        but4.style.visibility="hidden";
    }else if(page == 5){
        answers.push(num);
        quest.textContent = "Oulaaaa grosse question là, tu dis plutôt...";
        but1.textContent = "Pain au chocolat";
        but2.textContent = "Chocolatine";
    }else if(page == 6){
        answers.push(num);
        quest.textContent = "Il est où ton ter-ter, ta terre de coeur, celle dont tu rêves la nuit ? ";
        but1.style.height = "29.5%";
        but2.style.height = "29.5%";
        but1.textContent = "Nord-Est";
        but2.textContent = "Nord-Ouest";
        but3.style.visibility="visible";
        but4.style.visibility="visible";
        but3.textContent = "Sud-Est";
        but4.textContent = "Sud-Ouest";
        document.getElementById("B5").style.visibility="visible";
        document.getElementById("B6").style.visibility="visible";
    }
    page++;

    textFit(document.getElementsByTagName('button'), {multiLine: true});
    textFit(document.getElementById('Q'), {multiLine: true});
    
}

