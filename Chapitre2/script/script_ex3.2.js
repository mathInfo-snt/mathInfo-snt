var prop1 = ["192.168.1","192.168.2","172.23.3","172.16.2",
            "192.168","172.25","192.169","172.61" ];

var prop2 = ["5","4","1","15",
            "12.1","1.8","2.6","7.18"];

var rep1 = ["192.168.1.5","192.168.2.4","172.23.3.1","172.16.2.15",
             "192.168.12.1","172.25.1.8","192.169.2.6","172.61.7.18"];

var rep2 = ["255.255.255.0","255.255.255.0","255.255.255.0","255.255.255.0",
            "255.255.0.0","255.255.0.0","255.255.0.0","255.255.0.0"];

var rep3 = ["192.168.1.5/24","192.168.2.4/24","172.23.3.1/24","172.16.2.15/24",
             "192.168.12.1/16","172.25.1.8/16","192.169.2.6/16","172.61.7.18/16"];

var rep4 = ["254","254","254","254","65534","65534","65534","65534"];

var rep=[rep1,rep2,rep3,rep4];
var nb = [0,0];
var nb1 = 0;
var nb2 = 0;

function init1()
{
    var n = Math.floor(Math.random() * 4);
    ipv4r=prop1[n];
    document.write(ipv4r);
    nb[0]=n;
}

function init2()
{
    ipv4m=prop2[nb[0]];
    document.write(ipv4m);
}

function init11()
{
    var n = Math.floor(Math.random() * 4) + 4;
    ipv4r=prop1[n];
    document.write(ipv4r);
    nb[1]=n;
}

function init12()
{
    ipv4m=prop2[nb[1]];
    document.write(ipv4m);
}

function verif1(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    q = Math.floor(ind/4);
    r = ind%4;
    if (repon == rep[r][nb[q]])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='int_exercice3.3.html' > Exercice 3.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p3e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}