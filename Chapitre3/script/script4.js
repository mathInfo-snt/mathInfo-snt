var tabnf = ['c3p4q4','c3p4e1','c3p4e2','c3p4e3'];

var tnf = ['href="ima_quiz4.html">Quiz 4</a>',
           'href="ima_exercice4.1.html">Exercice 4.1</a>',
           'href="ima_exercice4.2.html">Exercice 4.2</a>',
           'href="ima_exercice4.3.html">Exercice 4.3</a>'];

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
            localStorage.setItem('c3p4',1);
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

var clic = [true,true];

function afficheInfo(nom,num)
{
    if (clic[num])
    {
        document.getElementById(nom).style.display='block';
        clic[num]=false;
    }
    else
    {
        document.getElementById(nom).style.display='none';
        clic[num]=true;
    }
}