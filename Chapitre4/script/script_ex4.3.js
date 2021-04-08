rep1 = ['prixm2','insee_dep'];

prop1 = ['OISE','SARTHE','ORNE','EURE','JURA','MEUSE'];
prop2 = ['1000','1200','1300','1400','1500','1600'];
prop3 = ['1','2','3','4','3','4'];

prop = [prop1,prop2,prop1,prop3];

repon1 = ['60','72','61','27','39','55'];
repon2 = ['63','35','23','28','34','19'];
repon3 = ['crapeaumesnil','avesnes-en-saosnois','menil-erreux','tocqueville',
            'lachaux-en-bresse','billy-sous-mangiennes'];

repons = [repon1,repon2,repon3];

prop4 = [['74080,laclusaz,639574299,veyrier-du-lac,6145'],
            ['74173,megeve,654474056,chamonix-mont-blanc,6344'],
            ['74195,musieges,500574044,bossey,4229'],
            ['74191,morzine,538474315,yvoire,4309']];

nb = [0,0,0,0];

function init1(ind)
{
    var n = Math.floor(Math.random() * 6);
    af=prop[ind][n];
    document.write(af);
    nb[ind]=n;
}

function verif1(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon==rep1[ind])
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

function verif2(nom_form,ind)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toLowerCase();
    repon = repon.replace(/ /g,"");
    if (repon==repons[ind][nb[ind]])
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

function verif3(nom_form)
{
    var tab = document.forms[nom_form].querySelectorAll(".caseP");
    var reponse="";
    var sp1 = document.getElementById("ic1");
    var sp2 = document.getElementById("m1");
    for (var i=0; i<2; i++)
    {
        reponse=reponse+tab[i].value;
    }
    reponse=reponse.toLowerCase();
    reponse=reponse.replace(/ /g,"");
    reponse=reponse.replace(/é/g,"e");
    reponse=reponse.replace(/è/g,"e");
    num = prop3[nb[3]]-1;
    if (reponse==prop4[num])
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! \
        Vous pouvez passer à l'exercice suivant : <a class='abas' href='don_exercice4.4.html' > Exercice 4.4</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c4p4e3',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}