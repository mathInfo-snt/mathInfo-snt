var prop = ['images/imaex1.png','images/imaex2.png','images/imaex3.png','images/imaex4.png'];
var rep1 = ['01110010','01101111','01110101','01100111','01100101'];
var rep2 = ['01101100','01111001','01100011','11101001','01100101'];
var rep3 = ['01110010','01100101','01110000','01101111','01110011'];
var rep4 = ['01101111','01110010','01100001','01100111','01100101'];
var rep=[rep1,rep2,rep3,rep4];
var mot = ['rouge','lycée','repos','orage'];
var nb = 0;

function init1()
{
    var n = Math.floor(Math.random() * 4);
    afim = document.getElementById("ima1");
    var img1 = "<img src='"+prop[n]+"' alt='image' title='image' />";
    afim.innerHTML=img1;
    nb=n;
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.replace(/ /g,"");
    if (repon == rep[nb][ind])
    {
        sp1.innerHTML = "<img src='images/croix_verte.png' width='20' height='20'>";
        sp2.innerHTML = "<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp1.innerHTML = "<img src='images/croix_rouge.png' width='20' height='20'>";
        sp2.innerHTML = "<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
    }
}

function verif2(nom_form)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon == mot[nb])
    {
        sp1.innerHTML = "<img src='images/croix_verte.png' width='20' height='20'>";
        sp2.innerHTML = "<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp1.innerHTML = "<img src='images/croix_rouge.png' width='20' height='20'>";
        sp2.innerHTML = "<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
    }
}

function verif_exo(no)
{
    var somme=0;
    var tab = document.querySelectorAll(".spanquiz");
    for (var i=0; i<no; i++)
    {
        if (tab[i].innerHTML == '<img src="images/croix_verte.png" width="20" height="20">')
        {
            somme++;
        }
    }
    var m=document.querySelector(".reponse");
    if (somme == no)
    {
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : "
        +"<a class='abas' href='ima_exercice7.2.html' > Exercice 7.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p7e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

function xbin()
{
    bin = document.getElementById("binaire");
    dec = document.getElementById("decimal");
    car = document.getElementById("caractere");
    dec.value = parseInt(bin.value,2);
    car.value = String.fromCharCode(dec.value);
}

function xdec()
{
    bin = document.getElementById("binaire");
    dec = document.getElementById("decimal");
    car = document.getElementById("caractere");
    car.value = String.fromCharCode(dec.value);
    bin.value = (dec.value-0).toString(2);
    while(bin.value.length<8)
    {
        bin.value = '0'+bin.value;
    }
}

function xcar()
{
    bin = document.getElementById("binaire");
    dec = document.getElementById("decimal");
    car = document.getElementById("caractere");
    dec.value = car.value.charCodeAt(0);
    bin.value = (dec.value-0).toString(2);
    while(bin.value.length<8)
    {
        bin.value = '0'+bin.value;
    }
}