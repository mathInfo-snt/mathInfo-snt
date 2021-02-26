var prop = ['lac','tri','bol','rat','roi','sir'];
var rep1 = ['01101100','01100001','01100011'];
var rep2 = ['01110100','01110010','01101001'];
var rep3 = ['01100010','01101111','01101100'];
var rep4 = ['01110010','01100001','01110100'];
var rep5 = ['01110010','01101111','01101001'];
var rep6 = ['01110011','01101001','01110010'];
var rep=['011011000110000101100011','011101000111001001101001','011000100110111101101100',
            '011100100110000101110100','011100100110111101101001','011100110110100101110010'];

var nb = 0;

function init1()
{
    var n = Math.floor(Math.random() * 6);
    document.write(prop[n]);
    nb=n;
}

function verific(num)
{
    var val = document.getElementById(num).value;
    ent = parseInt(val);
    if(isNaN(val) || val!=ent || (num%2==0 && ent!=num+1) || (num%2==1 && ent!=num-1))
    {
        alert('Il ne faut changer que le bit de poids faible');
        document.getElementById(num).value=num;
    }
}

function verif1()
{
    var tab = document.querySelectorAll(".carP");
    var reponse="";
    var sp1 = document.getElementById("ic1");
    var sp2 = document.getElementById("m1");
    for (var i=0; i<24; i++)
    {
        reponse=reponse+(tab[i].value%2);
    }
    if (reponse==rep[nb] )
    {
        sp1.innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp2.style.color="green";
        sp2.innerHTML="<b>Bonne réponse !</b>";
    }
    else
    {
        sp1.innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp2.style.color="red";
        sp2.innerHTML="<b>Mauvaise réponse ! Recommencez !</b>";
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
        +"<a class='abas' href='ima_exercice7.3.html' > Exercice 7.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p7e2',1);
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
