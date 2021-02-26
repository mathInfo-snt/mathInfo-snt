var tabnf = ['c3p3q3','c3p3e1','c3p3e2','c3p3e3'];

var tnf = ['href="ima_quiz3.html">Quiz 3</a>',
           'href="ima_exercice3.1.html">Exercice 3.1</a>',
           'href="ima_exercice3.2.html">Exercice 3.2</a>',
           'href="ima_exercice3.3.html">Exercice 3.3</a>'];

var nexnf = 4;

function fait()
{
    if(typeof localStorage!='undefined') 
    {
        affnf = "";
        fnf = 0;
        for(knf=0;knf<nexnf;knf++)
        {
            var nf = localStorage.getItem(tabnf[knf]);
            if(nf!=null) 
            {
                nf = parseInt(nf);
            } 
            else 
            {
                nf = 0;
                localStorage.setItem(tabnf[knf],nf);
            }
            if (nf == 1)
            {
                affnf = affnf + "<li><a class='li2' "+tnf[knf]+"</li>";
                fnf++
            }
            else
            {
                affnf = affnf + "<li><a class='li1' "+tnf[knf]+"</li>";
            }     
        }
        if (fnf == nexnf)
        {
            localStorage.setItem('c3p3',1);
        }
    }
    else
    {
        affnf = "";
        for(knf=0;knf<nexnf;knf++)
        {
            affnf = affnf + "<li><a class='li3' "+tnf[knf]+"</li>"; 
        }
    }
    document.getElementById('nf').innerHTML = affnf;
}

function affichecolor()
{
    xcol = document.getElementById("col1");
    xrvb = document.getElementById("rvb1").value;
    xrvb = xrvb.toUpperCase();
    //xrvb = xrvb.replace('rvb','');
    xrvb = xrvb.replace(/ /g,""); // Remplace tous les espaces
    xrvb = xrvb.replace('RVB','');
    xrvb = xrvb.replace('(','');
    xrvb = xrvb.replace(')','');
    trvb = xrvb.split(',');
    var hexa = ['00','00','00'];
    for (var i=0; i<3; i++)
    {
        hexa[i] = parseInt(trvb[i],10).toString(16);
        while(hexa[i].length<2)
        {
            hexa[i] = '0'+hexa[i];
        }
    }
    shexa = '#'+hexa[0]+hexa[1]+hexa[2];
    xcol.value = shexa;
}

function affichecode()
{
    xcolhex = document.getElementById("col1").value;
    rc = parseInt(xcolhex.substring(1,3),16);
    rv = parseInt(xcolhex.substring(3,5),16);
    rb = parseInt(xcolhex.substring(5,7),16);    //rcol=parseInt(xcolhex.substring(0,2),16);
    document.getElementById("rvb1").value="rvb("+rc+","+rv+","+rb+")";
}

function comprouge()
{
    var cr = document.getElementById('ir').value;
    xcol = document.getElementById("colr");
    document.getElementById('Affr').textContent=document.getElementById('ir').value;
    chex = parseInt(cr,10).toString(16);
    shexa = '#'+chex+'0000';
    xcol.value = shexa;
    var cr = document.getElementById('ir').value;
    rr = parseInt(cr,10).toString(16);
    while(rr.length<2)
    {
        rr = '0'+rr;
    }
    var cv = document.getElementById('iv').value;
    rv = parseInt(cv,10).toString(16);
    while(rv.length<2)
    {
        rv = '0'+rv;
    }
    var cb = document.getElementById('ib').value;
    rb = parseInt(cb,10).toString(16);
    while(rb.length<2)
    {
        rb = '0'+rb;
    }
    rvbcol = document.getElementById("rvb2");
    rvbhexa = '#'+rr+rv+rb;
    rvbcol.value = rvbhexa;
}

function compverte()
{
    var cv = document.getElementById('iv').value;
    xcol = document.getElementById("colv");
    document.getElementById('Affv').textContent=document.getElementById('iv').value;
    chex = parseInt(cv,10).toString(16);
    shexa = '#00'+chex+'00';
    xcol.value = shexa;
    var cr = document.getElementById('ir').value;
    rr = parseInt(cr,10).toString(16);
    while(rr.length<2)
    {
        rr = '0'+rr;
    }
    var cv = document.getElementById('iv').value;
    rv = parseInt(cv,10).toString(16);
    while(rv.length<2)
    {
        rv = '0'+rv;
    }
    var cb = document.getElementById('ib').value;
    rb = parseInt(cb,10).toString(16);
    while(rb.length<2)
    {
        rb = '0'+rb;
    }
    rvbcol = document.getElementById("rvb2");
    rvbhexa = '#'+rr+rv+rb;
    rvbcol.value = rvbhexa;
}

function compbleu()
{
    var cb = document.getElementById('ib').value;
    xcol = document.getElementById("colb");
    document.getElementById('Affb').textContent=document.getElementById('ib').value;
    chex = parseInt(cb,10).toString(16);
    shexa = '#0000'+chex;
    xcol.value = shexa;
    var cr = document.getElementById('ir').value;
    rr = parseInt(cr,10).toString(16);
    while(rr.length<2)
    {
        rr = '0'+rr;
    }
    var cv = document.getElementById('iv').value;
    rv = parseInt(cv,10).toString(16);
    while(rv.length<2)
    {
        rv = '0'+rv;
    }
    var cb = document.getElementById('ib').value;
    rb = parseInt(cb,10).toString(16);
    while(rb.length<2)
    {
        rb = '0'+rb;
    }
    rvbcol = document.getElementById("rvb2");
    rvbhexa = '#'+rr+rv+rb;
    rvbcol.value = rvbhexa;
}