var prop1 = ["(BY)","(BY-ND)","(BY-NC-ND)","(BY-NC)","(BY-NC-SA)","(BY-SA)"];

var tabid = ["d1","d2","d3","d4","d5","d6"];

function verif1(nom_form)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    test = true;
    for (i=0;i<6;i++)
    {
        var zone = document.getElementById(tabid[i]);
        var rep = zone.querySelector(".drag2"); 
        rept = rep.innerHTML;
        if (rep==null)
        {
            test = false;
        }
        else
        {
            if (rept!=prop1[i])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='web_exercice7.2.html' > Exercice 7.2 </a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p7e1',1);
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

