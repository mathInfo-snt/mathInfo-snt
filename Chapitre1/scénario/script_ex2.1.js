var prop1 = ["document.odt","im1.png","fiche1.pdf","travaux.doc"];
var prop2 = ["odt","png","pdf","doc"];
var tabid = ["d1","d2","d3","d4"];

function verif1(nom_form)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    test = true;
    for (i=0;i<4;i++)
    {
        var zone = document.getElementById(tabid[i]);
        var rep = zone.querySelector(".drag1");        
        if (rep==null)
        {
            test = false;
        }
        else
        {
            if (rep.innerHTML!=prop1[i])
            {
                    test = false;
            }
        }
    }
    if (test)
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
    var tabrep = document.forms[nom_form].querySelectorAll(".zone_saisie");
    test = true;
    for (i=0;i<4;i++)
    {
        val = tabrep[i].value;
        val = val.toLowerCase();
        val = val.replace(/ /g,"");
        val = val.replace(/\./g,"");
        if (val!=prop2[i])
        {
            test = false;
        }
    }
    if (test)
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='web_exercice2.2.html' > Exercice 2.2 </a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p2e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}

function allowDrop(ev) 
{
  ev.preventDefault();
}

function drag(ev) 
{
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) 
{
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

