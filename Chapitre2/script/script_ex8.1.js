var prop1 = ["google.com","duckduckgo.com","startpage.com","archive.org"];
var prop2 = ["172.217.14.228","23.21.193.169","64.71.134.84","207.241.224.2"];
var prop = [prop1,prop2];
var nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 4);
    affi=prop2[n];
    document.write(affi);
    nb[0]=n;
}

function init2()
{
  var n = Math.floor(Math.random() * 4);
  while (n==nb[0])
  {
    n = Math.floor(Math.random() * 4);
  }
  affi=prop2[n];
  document.write(affi);
  nb[1]=n;
}

function verif(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon == prop1[nb[ind]])
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
            +"<a class='abas' href='int_exercice8.2.html' > Exercice 8.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p8e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
