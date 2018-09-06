var imenik = [];

function validate (ime, prezime, brfix, brmob, adresa, email) {
    var errorMsg = '';
    var pravilnoIme = ime.match(/^[A-Z][a-z]*(\s?[A-Z][a-z]+$)?/gm);
    if(!ime || !pravilnoIme){
        document.getElementById("ime").style.borderColor="red";
        errorMsg += 'Unesi ime\n';
    } else {
        document.getElementById("ime").style.borderColor="green";
    }
    var pravilnoPrezime = prezime.match(/^[A-Z][a-z]*(\s?[A-Z][a-z]+$)?/gm);
    if(!prezime || !pravilnoPrezime){
        document.getElementById("prezime").style.borderColor="red";
        errorMsg += 'Unesi prezime\n';
    } else {
        document.getElementById("prezime").style.borderColor="green";
    }
    var pravilanBrmob = brmob.match(/[06][0-9]+[/]?\d{3}[-]?\d{3,4}$/gm);
    if(!brmob || !pravilanBrmob){
        document.getElementById("brmob").style.borderColor="red";
        errorMsg += 'Unesi broj mobilnog\n';
    }else{
        document.getElementById("brmob").style.borderColor="green";
    }
    var pravilanBrfix = brfix.match(/\d{3}[/]\d{3}[-]?\d{3}$/gm);
    if(!brfix || !pravilanBrfix){
        document.getElementById("brfix").style.borderColor="red";
        errorMsg += 'Unesi broj fixnog\n';
    } else {
        document.getElementById("brfix").style.borderColor="green";
    }
    var pravilnaAdresa = adresa.match(/^[A-Z][a-z]*(\s?[A-z]+)?\s[0-9]*([A-z]+)?/gm);
    if(!adresa || !pravilnaAdresa) {
        document.getElementById("adresa").style.borderColor="red";
        errorMsg += 'Unesi adresu\n';
    } else {
        document.getElementById("adresa").style.borderColor="green";
    }
    var pravilanEmail = email.match(/^[a-z]*([._-])?([A-z0-9]+)?[@][a-z]*[.][a-z]*/);
    if (!email || !pravilanEmail) {
        document.getElementById("email").style.borderColor="red";
        errorMsg += 'Unesi email\n';
    } else {
        document.getElementById("email").style.borderColor="green";
    }
    if (errorMsg){
        alert(errorMsg);
        return false;
    }

        return true;
}

function unesi() {
    var ime = document.getElementById('ime').value;
    var prezime = document.getElementById('prezime').value;
    var adresa = document.getElementById('adresa').value;
    var brfix = document.getElementById('brfix').value;
    var brmob = document.getElementById('brmob').value;
    var email = document.getElementById('email').value;
    
    if(!validate(ime, prezime, brfix, brmob, adresa, email)) {
        console.log(ime, prezime, brfix, brmob, adresa, email);
        return false;
    }
    
    var kontakt = { ime: ime, prezime: prezime, brfix: brfix, brmob: brmob, adresa: adresa, email: email };
    
    
    if(localStorage.getItem('kontakti') === null) {
        imenik = [];
    } else {
        imenik = JSON.parse(localStorage.getItem('kontakti'));
    }

    imenik.push(kontakt);
    localStorage.setItem('kontakti', JSON.stringify(imenik));

    
    alert('Uneto u imenik');
    document.getElementById('ime').value = "";
    document.getElementById('prezime').value = "";
    document.getElementById('adresa').value = "";
    document.getElementById('brfix').value = "";
    document.getElementById('brmob').value = "";
    document.getElementById('email').value = "";
    document.getElementById("ime").style.borderColor="";
    document.getElementById("prezime").style.borderColor="";
    document.getElementById("brmob").style.borderColor="";
    document.getElementById("brfix").style.borderColor="";
    document.getElementById("adresa").style.borderColor="";
    document.getElementById("email").style.borderColor="";


}

function prikazi() {
    var prikaz = "";
    var naslov = "<tr>" + "<th>IME</th>" + "<th>PREZIME</th>" + "<th>ADRESA</th>"+ "<th>FIKSNI TELEFON</th>" + "<th>MOBILNI TELEFON</th>" + "<th>e-mail</th>" + "</tr>";
    imenik = JSON.parse(localStorage.getItem('kontakti'))
    var sortirano = imenik.sort();
    for(var i=0; i<sortirano.length; i++) {
        prikaz += "<tr>" + "<td>" + sortirano[i].ime + "</td>" + "<td>" + sortirano[i].prezime + "</td>" +
        "<td> " + sortirano[i].adresa + "</td>" + "<td>" + sortirano[i].brfix + "</td>" + "<td>" + sortirano[i].brmob + "</td>" + "<td>" + sortirano[i].email + "</td>" + "</tr>" ;
    }
    
    document.getElementById('imenik').innerHTML = naslov + prikaz;
}



    
   

