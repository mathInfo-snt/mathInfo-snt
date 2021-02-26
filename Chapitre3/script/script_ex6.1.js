var prop = ['images/ex1.png','images/ex2.png','images/ex3.png','images/ex4.png'];
var rep = ['0000001010011100010000000','0010001110001001111100100','1000111111001001111110001',
            '1000111111100011111110001'];
var nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 4);
    afim = document.getElementById("ima1");
    var img1 = "<img src='"+prop[n]+"' alt='Pixel' title='Pixel' />";
    afim.innerHTML=img1;
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 4);
    afim = document.getElementById("ima2");
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * 4);
    }
    var img1 = "<img src='"+prop[n]+"' alt='Pixel' title='Pixel' />";
    afim.innerHTML=img1;
    nb[1]=n;
}

function verific(num)
{
    var val = document.getElementById(num).value;
    ent = parseInt(val);
    if(isNaN(val) || val!=ent || ent<0 || ent>1 )
    {
        alert('Il faut saisir 0 ou 1');
        document.getElementById(num).value=0;
    }
}

function verif1()
{
    var tab = document.querySelectorAll(".carB");
    var reponse="";
    var sp1 = document.getElementById("ic1");
    var sp2 = document.getElementById("m1");
    for (var i=0; i<25; i++)
    {
        reponse=reponse+tab[i].value;
    }
    if (reponse==rep[nb[0]] )
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
    for (var i=25; i<50; i++)
    {
        reponse=reponse+tab[i].value;
    }
    if (reponse==rep[nb[1]] )
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
        +"<a class='abas' href='ima_exercice6.2.html' > Exercice 6.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p6e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}