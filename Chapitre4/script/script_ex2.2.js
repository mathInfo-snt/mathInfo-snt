var prop = ['vcard1.vcf','vcard2.vcf','vcard3.vcf'];

var rep1 = ['marie','lucie','sophie'];
var rep2 = ['23rueverrerie21000dijonfrance','12avenuegambetta76200dieppefrance',
            '11boulevardtaine74000annecyfrance'];
var rep3 = ['2.1','3.0','4.0'];
var rep4 = ['marie.benand@gmail.com','lucie.gendre@gmail.com','sophie.maurice@gmail.com'];

var rep = [rep1,rep2,rep3,rep4];

var nb = 0;

function init1()
{
    var n = Math.floor(Math.random() * 3);
    document.write(prop[n]);
    nb=n;
}

function verif(nom_form,num)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon==rep[num][nb])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! \
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice2.3.html' > Exercice 2.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p2e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}