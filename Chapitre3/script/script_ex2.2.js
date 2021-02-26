var prop = ['RVB(125,70,210)','RVB(150,20,200)','RVB(120,80,240)','RVB(90,170,60)','RVB(50,140,230)','RVB(130,210,70)'
            ,'RVB(75,160,30)','RVB(25,220,175)','RVB(100,50,24)','RVB(200,95,24)','RVB(40,135,250)','RVB(10,205,82)'];
var nb = [0,0];

function init1()
{
    var n = Math.floor(Math.random() * 12);
    document.write(prop[n]);
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * 12);
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * 12);
    }
    document.write(prop[n]);
    nb[1]=n;
}

function verific(num)
{
    var val = document.getElementById(num).value;
    val = val.replace('.',',');
    ent = parseInt(val);
    if(isNaN(val) || val!=ent || ent<0 || ent>255 )
    {
        alert('Il faut saisir un entier entre 0 et 255');
    }
    else
    {

    }
}

function verif1()
{
    var vert = parseInt(document.getElementById("i2.2").value);
    var r1 = parseInt(document.getElementById("i2.1").value);
    var r2 = parseInt(document.getElementById("i2.3").value);
    var rouge = Math.floor((r1+r2)/2);
    var b1 = parseInt(document.getElementById("i1.2").value);
    var b2 = parseInt(document.getElementById("i3.2").value);
    var bleu = Math.floor((b1+b2)/2);
    var rep = 'RVB('+rouge+','+vert+','+bleu+')';
    var sp1 = document.getElementById("ic1");
    var sp2 = document.getElementById("m1");
    if (rep==prop[nb[0]])
    {
        if (r1!=r2 && b1!=b2)
        {
            sp1.innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
            sp2.style.color="green";
            sp2.innerHTML="<b>Bonne réponse !</b>";
        }
        else
        {
            sp1.innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
            sp2.style.color="darkorange";
            sp2.innerHTML="<b>Réponse correcte ! Mais on demande de rentrer des valeurs différentes pour le rouge et le bleu !</b>";
        }
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
    var rouge = parseInt(document.getElementById("id2.2").value);
    var v1 = parseInt(document.getElementById("id2.1").value);
    var v2 = parseInt(document.getElementById("id2.3").value);
    var v3 = parseInt(document.getElementById("id1.2").value);
    var v4 = parseInt(document.getElementById("id3.2").value);
    var vert = Math.floor((v1+v2+v3+v4)/4);
    var b1 = parseInt(document.getElementById("id1.1").value);
    var b2 = parseInt(document.getElementById("id1.3").value);
    var b3 = parseInt(document.getElementById("id3.1").value);
    var b4 = parseInt(document.getElementById("id3.3").value);
    var bleu = Math.floor((b1+b2+b3+b4)/4);
    var rep = 'RVB('+rouge+','+vert+','+bleu+')';
    var sp1 = document.getElementById("ic2");
    var sp2 = document.getElementById("m2");
    if (rep==prop[nb[1]])
    {
        if (v1!=v2 && v1!=v3 && v1!=v4 && v2!=v3 && v2!=v4 && v3!=v4 && 
            b1!=b2 && b1!=b3 && b1!=b4 && b2!=b3 && b2!=b4 && b3!=b4)
        {
            sp1.innerHTML="<img src='images/croix_verte.png' width='20' height='20'>";
            sp2.style.color="green";
            sp2.innerHTML="<b>Bonne réponse !</b>";
        }
        else
        {
            sp1.innerHTML="<img src='images/croix_rouge.png' width='20' height='20'>";
            sp2.style.color="darkorange";
            sp2.innerHTML="<b>Réponse correcte ! Mais on demande de rentrer des valeurs différentes pour le vert et le bleu !</b>";
        }
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='ima_exercice2.3.html' > Exercice 2.3</a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c3p2e2',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}
