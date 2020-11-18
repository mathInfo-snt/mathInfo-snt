var prop1 = ["M1","M2","M3"];

var prop2 = ["M4","M5","M6"];

var rep1 = ["192.168.1.1","192.168.1.2","192.168.1.3"];

var rep2 = ["255.255.255.0","255.255.255.0","255.255.255.0"];

var rep3 = ["192.168.1","192.168.1","192.168.1"];

var rep4 = ["1","2","3"];

var rep=[rep1,rep2,rep3,rep4];

var repp1 = ["192.168.2.1","192.168.2.2","192.168.2.3"];

var repp3 = ["192.168.2","192.168.2","192.168.2"];

var repp=[repp1,rep2,repp3,rep4];

var repg = [rep,repp];

var nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 3);
    ordi=prop1[n];
    document.write(ordi);
    nb[0]=n;
}

function init2()
{
  var n = Math.floor(Math.random() * 3);
  ordi=prop2[n];
  document.write(ordi);
  nb[1]=n;
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
    if (repon == repg[q][r][nb[q]])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='int_exercice3.4.html' > Exercice 3.4</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p3e3',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}