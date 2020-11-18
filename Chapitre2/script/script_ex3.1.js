var prop = ["192.168.0.7 (255.255.255.0)","192.168.10.2 (255.255.255.0)",
            "192.168.2.11 (255.255.0.0)","192.169.25.11 (255.255.0.0)",
            "192.168.255.24 (255.255.0.0)","192.168.1.3 (255.255.255.0)",
            "192.168.12.33 (255.255.0.0)","192.168.13.23 (255.255.255.0)" ];

var rep1 = ["255.255.255.0","255.255.255.0","255.255.0.0","255.255.0.0",
            "255.255.0.0","255.255.255.0","255.255.0.0","255.255.255.0"];

var rep2 = ["192.168.0","192.168.10","192.168","192.169","192.168","192.168.1","192.168","192.168.13"];

var rep3 = ["7","2","2.11","25.11","255.24","3","12.33", "23"];

var rep4 = ["192.168.0.7/24","192.168.10.2/24",
            "192.168.2.11/16","192.169.25.11/16",
            "192.168.255.24/16","192.168.1.3/24",
            "192.168.12.33/16","192.168.13.23/24"];

var rep5 = ["254","254","65534","65534","65534","254","65534", "254"];


var rep=[rep1,rep2,rep3,rep4,rep5];
var nb1 = 0;

function init()
{
    var n = Math.floor(Math.random() * 8);
    ipv4=prop[n];
    document.write(ipv4);
    nb1=n;
} 

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon == rep[ind][nb1])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='int_exercice3.2.html' > Exercice 3.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p3e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}