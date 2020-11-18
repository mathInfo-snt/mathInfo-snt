var num=0;

function createCookie(name,value,days) 
{
    if (days) 
    {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) 
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) 
    {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function afCook()
{
    var cook = readCookie('mCook');
    var af = document.getElementById('mes1');
    if(cook==null)
    {
        af.innerHTML = "Bonjour !";
    }
    else
    {
        var sp1 = document.forms["saisie_1"].querySelector(".spanquiz");
        sp1.innerHTML = "<img src='images/croix_verte.png' width='20' height='20'>";
        num = readCookie('nb');
        nm = parseInt(num);
        nm++;
        if (nm>2)
        {
            var sp2 = document.forms["saisie_2"].querySelector(".spanquiz");
            sp2.innerHTML = "<img src='images/croix_verte.png' width='20' height='20'>";
        }
        num = nm.toString();
        createCookie('nb',num,1);
        af.innerHTML = "Bonjour <b>"+cook+"</b> ! Connexion numéro : <b>"+num+"</b>";
    }
}

function setCook(nom_form)
{
    var nom = document.forms[nom_form].elements['in'].value;
    createCookie('mCook',nom,1);
    var nm=0;
    num = nm.toString();
    createCookie('nb',num,1);
    var sp1 = document.forms[nom_form].querySelector(".spanquiz");
    sp1.innerHTML = "<img src='images/croix_verte.png' width='20' height='20'>";
    afCook();
}

function verif_exo(no)
{
    var somme=0;
    var prop = document.querySelectorAll(".spanquiz");
    for (var i=0; i<no; i++)
    {
        if (prop[i].innerHTML == '<img src="images/croix_verte.png" width="20" height="20">')
        {
            somme++;
        }
    }
    var m=document.querySelector(".reponse");
    if (somme == no)
    {
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='web_exercice6.2.html' > Exercice 6.2 </a></span>";
        if(typeof localStorage!='undefined') 
        {
            localStorage.setItem('c1p6e1',1);
            fait();
        }
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Rentrer votre prénom et augmenter plusieurs fois le nombre de connexions !</span>";
    }
}
