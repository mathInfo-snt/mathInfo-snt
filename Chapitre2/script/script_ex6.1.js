var prop = ["00:0f:b5:e8:13:40","c4:36:6c:d4:85:b6","00:05:ea:59:a2:fc","00:06:a7:5f:d7:91",
            "00:08:5d:21:ed:8a","00:02:10:1e:bc:64", "00:90:b0:58:6e:a3", "00:e0:43:5b:71:0c"];

var rep1 = ["00:0f:b5","c4:36:6c","00:05:ea","00:06:a7","00:08:5d","00:02:10","00:90:b0","00:e0:43"];
var rep2 = ["e8:13:40","d4:85:b6","59:a2:fc","5f:d7:91","21:ed:8a","1e:bc:64","58:6e:a3","5b:71:0c"];
var rep3 = ["netgear","lginnotek","rednix","primarion","aastra","fenecom","vadem","vitalcom"  ];

var nb1 = 0;
var rep = [rep1,rep2,rep3];

function init1()
{
    var n = Math.floor(Math.random() * 8);
    aff=prop[n];
    document.write(aff);
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : " 
            +"<a class='abas' href='int_exercice6.2.html' > Exercice 6.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c2p6e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
