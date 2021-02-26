var rep = [['PANASONIC','DCGH5SEK','NICOLAS','15072019','535','1024','837'],
            ['NIKON','D5600','JEAN','29082019','260','385','82'],
            ['SAMSUNG','SMG935F','MAXIME','24102018','900','1200','113'],
            ['CANON','EOS4000D','MARIE','18082018','700','1600','5']];

var prop = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg'];

var nb = [0,0];

function init1(ind)
{
    var n = Math.floor(Math.random() * 4);
    while(n==nb[0] && ind>0)
    {
        n = Math.floor(Math.random() * 4);
    }
    im=prop[n];
    document.write(im);
    nb[ind]=n;
}

function verif(nom_form,ind,num)
{
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    var sp2 = document.forms[nom_form].querySelector(".spanmes");
    var repo = document.forms[nom_form].elements['in'];
    repon = repo.value;
    repon = repon.toUpperCase();
    repon = repon.replace(/ /g,"");
    repon = repon.replace(/:/g,"");
    repon = repon.replace(/\//g,"");
    repon = repon.replace(/-/g,"");
    repon = repon.replace(/\.0/g,"");
    repon = repon.replace(/,0/g,"");
    
    if (repon == rep[nb[num]][ind])
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

function verif1(nom_form,nom_zone,ind,num)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var aff = document.forms[nom_form].elements[nom_zone].value;
    aff=aff.toUpperCase();
    aff=aff.replace(/ /g,"");
    aff=aff.replace(/:/g,"");
    aff=aff.replace(/\//g,"");
    aff=aff.replace(/-/g,"");
    aff=aff.replace(/\.0/g,"");
    aff=aff.replace(/,0/g,"");
    if (aff==rep[nb[num]][ind])
    {
        sp[0].innerHTML="<img src='../.images/.croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../.images/.croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
        //document.forms[nom_form].elements[nom_zone].value="";
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
        +"<a class='abas' href='ima_exercice4.2.html' > Exercice 4.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p4e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}