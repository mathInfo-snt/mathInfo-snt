var prop = ['<b style="color:red;">a=22 km</b>, <b style="color:blue;">b=19 km</b> et <b style="color:green;">c=21 km</b>',
            '<b style="color:red;">a=22 km</b>, <b style="color:blue;">b=41 km</b> et <b style="color:green;">c=21 km</b>',
            '<b style="color:red;">a=22 km</b>, <b style="color:blue;">b=19 km</b> et <b style="color:green;">c=35 km</b>',
            '<b style="color:red;">a=46 km</b>, <b style="color:blue;">b=19 km</b> et <b style="color:green;">c=21 km</b>',
            '<b style="color:red;">a=46 km</b>, <b style="color:blue;">b=19 km</b> et <b style="color:green;">c=50 km</b>',
            '<b style="color:red;">a=18 km</b>, <b style="color:blue;">b=50 km</b> et <b style="color:green;">c=35 km</b>',
            '<b style="color:red;">a=5 km</b>, <b style="color:blue;">b=41 km</b> et <b style="color:green;">c=35 km</b>',
            '<b style="color:red;">a=46 km</b>, <b style="color:blue;">b=8 km</b> et <b style="color:green;">c=35 km</b>',
            '<b style="color:red;">a=46 km</b>, <b style="color:blue;">b=50 km</b> et <b style="color:green;">c=19 km</b>',
            '<b style="color:red;">a=50 km</b>, <b style="color:blue;">b=41 km</b> et <b style="color:green;">c=14 km</b>'];
var rep1 = ["A","B","C","D","E","F","G","H","I","J"];

var nb = [0,0,0];
var tv = ["v1","v2","v3"];
var ts = ['s1','s2','s3'];
var tse = ['se1','se2','se3'];
var ns = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
nbp = 10;

function init(j)
{
    vspan = document.getElementById(tv[j]);
    var n = Math.floor(Math.random() * nbp);
    if (j==1)
    {
        while(n==nb[j-1])
        {
            n = Math.floor(Math.random() * nbp);
        }
    }
    if (j==2)
    {
        while(n==nb[j-1] || n==nb[j-2])
        {
            n = Math.floor(Math.random() * nbp);
        }
    }
    sol=prop[n];
    vspan.innerHTML =sol;
    nb[j]=n;
}

function initd(j)
{
    sais1 = document.getElementById(ts[j]);
    sais1.innerHTML = "";
    code = '&emsp;&emsp;<select id='+tse[j]+' class="sel3" style="width:500px;">';
    for (i=0; i<nbp; i++)
    {
        ns[j][i]=0;
    }
    for (i=0; i<nbp; i++)
    {
        n = Math.floor(Math.random() * nbp);
        while (ns[j][n]>0)
        {
            n = Math.floor(Math.random() * nbp);
        }
        code = code +'<option>'+rep1[n]+'</option>';
        ns[j][n]=1;
    }
    code = code + '</select><br><br>';
    sais1.innerHTML = code;
}

function toutInit()
{
    for (k=0;k<3;k++)
    {
        initd(k);
    }
}

function verif()
{
    test = true;
    for (k=0; k<3; k++)
    {
        sel = document.getElementById(tse[k]);
        if (sel.value!=rep1[nb[k]])
        {
            test = false;
        }
    }
    sp1 = document.getElementById("icone");
    sp2 = document.getElementById("reponse");
    if (test==true)
    {
        sp1.innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
        sp2.innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp1.innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
        sp2.innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
        toutInit();
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='gl_ex3.2.html' > Exercice 3.2</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c6p3e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}