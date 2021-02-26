tab_id1 = ['i1.1','i1.2','i1.3','i2.1','i2.2','i2.3','i3.1','i3.2','i3.3'];
tab_id2 = ['id1.1','id1.2','id1.3','id2.1','id2.2','id2.3','id3.1','id3.2','id3.3'];

tab_id = [tab_id1,tab_id2];

prop1 = ['v','b','v','r','v','r','v','b','v'];
prop2 = ['v','r','v','b','v','b','v','r','v'];
prop3 = ['b','v','b','v','r','v','b','v','b'];
prop4 = ['r','v','r','v','b','v','r','v','r'];

prop = [prop1,prop2,prop3,prop4];

tab1 = ['220','81','170','51','120','49','180','79','210'];
tab2 = ['220','51','170','81','120','79','180','49','210'];
tab3 = ['81','121','79','122','50','118','82','119','78'];
tab4 = ['51','121','49','122','80','118','52','119','48'];

tab_val = [tab1,tab2,tab3,tab4];

tsp1 = ['ic1','m1'];
tsp2 = ['ic2','m2'];
tsp = [tsp1,tsp2]; 

nbc = [0,0];

function init1()
{
    nbc[0] = Math.floor(Math.random()*4);
    for (i=0;i<9;i++)
    {
        document.getElementById(tab_id[0][i]).value = tab_val[nbc[0]][i];
    }
}

function init2()
{
    nbc[1] = Math.floor(Math.random()*4);
    while (nbc[1] == nbc[0])
    {
        nbc[1] = Math.floor(Math.random()*4);
    }
    for (i=0;i<9;i++)
    {
        document.getElementById(tab_id[1][i]).value = tab_val[nbc[1]][i];
    }
}

function change_color(num)
{
    bouton = document.getElementById(num);
    n = bouton.name;
    if (n=='v')
    {
        bouton.name = 'b';
        bouton.style.background = 'blue';
    }
    else
    {
        if (n=='b')
        {
            bouton.name = 'r';
            bouton.style.background = 'red';
        }
        else
        {
            if (n=='r')
            {
                bouton.name = 'v';
                bouton.style.background = 'green';
            }
        }
    }
}

function verif(num)
{
    sp1 = document.getElementById(tsp[num][0]);
    sp2 = document.getElementById(tsp[num][1]);
    rempli = true;
    for (i=0;i<9;i++)
    {
        n = document.getElementById(tab_id[num][i]).name;
        if (n != prop[nbc[num]][i])
        {
            rempli = false;
        }
    }
    if (rempli)
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
