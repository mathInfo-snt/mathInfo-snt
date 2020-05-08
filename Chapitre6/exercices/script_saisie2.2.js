var prop = ['Paris','Marseille','Toulouse','Lyon','Grenoble','Nantes','Rennes','Bordeaux','Nice','Strasbourg','Brest','Lille'];
var rep1 = ["( 48°51'Nord , 2°21'Est )","( 43°17'Nord , 5°22'Est )","( 43°36'Nord , 1°26'Est )",
            "( 45°45'Nord , 4°50'Est )","( 45°11'Nord , 5°44'Est )","( 47°12'Nord , 1°33'Ouest )",
            "( 48°6'Nord , 1°40'Ouest )","( 44°50'Nord , 0°34'Ouest)","( 43°41'Sud , 7°15'Est)",
            "( 48°34'Nord , 7°44'Est)","( 48°23'Nord , 4°29'Ouest )","( 50°37'Nord , 3°4' Est )"];

var nb = [0,0,0];
var tv = ["v1","v2","v3"];
var ts = ['s1','s2','s3'];
var tse = ['se1','se2','se3'];
var ns = [[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0]];
nbp = 12;

function init(j)
{
    ville = document.getElementById(tv[j]);
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
    ville.innerHTML =sol;
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
        sp1.innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
        sp2.innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp1.innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
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
        if (tab[i].innerHTML == '<img src="../images/croix_verte.png" width="20" height="20">')
        {
            somme++;
        }
    }
    var m=document.querySelector(".reponse");
    if (somme == no)
    {
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_GL_exercice2.3.html' > Exercice 2.3</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}