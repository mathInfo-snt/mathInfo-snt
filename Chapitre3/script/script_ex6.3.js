var prop1 = ['images/imex1.png','images/imex2.png','images/imex3.png','images/imex4.png'];
var prop2 = ['images/imex5.png','images/imex6.png','images/imex7.png','images/imex8.png'];
var rep1 = ['5170515031','6031605150','2150515081','3170316061'];
var rep2 = ['30515021305120','71202120412061','50312031208120','21302180215031']
var nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 4);
    afim = document.getElementById("ima1");
    var img1 = "<img src='"+prop1[n]+"' alt='Pixel' title='Pixel' />";
    afim.innerHTML=img1;
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 4);
    afim = document.getElementById("ima2");
    var img1 = "<img src='"+prop2[n]+"' alt='Pixel' title='Pixel' />";
    afim.innerHTML=img1;
    nb[1]=n;
}

function verific(num)
{
    var val = document.getElementById(num).value;
    ent = parseInt(val);
    if(isNaN(val) || val!=ent || ent<0 )
    {
        alert('Il faut saisir un entier positif');
        document.getElementById(num).value=0;
    }
}

function verif1()
{
    var tab = document.querySelectorAll(".carB");
    var reponse="";
    var sp1 = document.getElementById("ic1");
    var sp2 = document.getElementById("m1");
    for (var i=0; i<10; i++)
    {
        reponse=reponse+tab[i].value;
    }
    reponse=reponse.replace(/ /g,"");
    if (reponse==rep1[nb[0]] )
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

function verif2()
{
    var tab = document.querySelectorAll(".carB");
    var reponse="";
    var sp1 = document.getElementById("ic2");
    var sp2 = document.getElementById("m2");
    for (var i=10; i<24; i++)
    {
        reponse=reponse+tab[i].value;
    }
    reponse=reponse.replace(/ /g,"");
    if (reponse==rep2[nb[1]] )
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


function verif3()
{
    var sp1 = document.getElementById("ic3");
    var sp2 = document.getElementById("m3");
    var affi = document.getElementById('scim1').value;
    if (affi=="60%")
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


function verif4()
{
    var sp1 = document.getElementById("ic4");
    var sp2 = document.getElementById("m4");
    var affi = document.getElementById('scim2').value;
    if (affi=="44%")
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : "
        +"<a class='abas' href='ima_exercice6.4.html' > Exercice 6.4</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p6e3',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}