var prop = ['$GPGGL,4848.15,N,217.35,W,183942,A','$GPGGL,8919.85,S,10134.95,E,223755,A',
            '$GPGGL,3551.65,S,9428.25,W,174138,A','$GPGGL,5826.45,N,13913.85,E,131629,A',
            '$GPGGL,1549.55,S,10431.25,W,155644,A','$GPGGL,7126.85,N,6428.45,E,131629,A'];
var rep1 = ['18h39m42s','22h37m55s','17h41m38s','13h16m29s','15h56m44s','13h16m29s'];
var rep2 = ["48°48'9\"n","89°19'51\"s","35°51'39\"s","58°26'27\"n","15°49'33\"s","71°26'51\"n"];
var rep3 = ["2°17'21\"o","101°34'57\"e","94°28'15\"o","139°13'51\"e","104°31'15\"o","64°28'27\"e"];

var rep = [rep1,rep2,rep3];

var nb = [0,0];
var nbp = 6;
var nberr = 0;

function init1()
{
    var n = Math.floor(Math.random() * nbp);
    sol=prop[n];
    document.write(sol);
    nb[0]=n;
}

function init2()
{
    var n = Math.floor(Math.random() * nbp);
    while (n==nb[0])
    {
        n = Math.floor(Math.random() * nbp);
    }
    sol=prop[n];
    document.write(sol);
    nb[1]=n;
}

function verif1(nom_form,nom_zone,nu)
{
    var sp = document.forms[nom_form].querySelectorAll("span");
    var repo = document.forms[nom_form].elements[nom_zone].value;
    repo = repo.toLowerCase();
    repo=repo.replace(/ /g,"");
    repo=repo.replace(/nord/g,"n");
    repo=repo.replace(/sud/g,"s");
    repo=repo.replace(/ouest/g,"o");
    repo=repo.replace(/est/g,"e");
    if (repo==rep[nu%3][nb[Math.floor(nu/3)]])
    {
        sp[0].innerHTML="<img src='../images/croix_verte.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_juste'>  Bonne réponse !</span>";
    }
    else
    {
        sp[0].innerHTML="<img src='../images/croix_rouge.png' width='20' height='20'>";
        sp[1].innerHTML="<span class='reponse_fausse'>  Mauvaise réponse ! Recommencez !</span>";
        nberr++;
        if (nberr==2)
        {
            afficherConv();
        }
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
        m.innerHTML="<span class='reponse_juste'> Toutes les réponses sont correctes ! Vous pouvez passer à l'exercice suivant : <a class='abas' href='SNT_GL_exercice4.2.html' > Exercice 4.2</a></span>";
    }
    else
    {
        m.innerHTML="<span class='reponse_fausse'>Certaines réponses sont fausses ou non validées ! Recommencez !</span>";
    }
}


function afficherConv()
{
    var cv1 = document.getElementById("conv1");
    cv1.innerHTML="<form action='' class='afficheur3'>"
                    +"<p><label for='decimal'>Latitude sexagésimale&#160;: </label>"
                    +"<input type='text' id='sexa' name='decimal' autocomplete='off' class='saisir'"
                    +"onkeypress='javascript:if (event.keyCode == 13) {xdeci();return false;}'"
                    +"value='25°30&apos;36&quot;Nord'/></p><p>"
                    +"<label for='binaire'>Latitude NMEA&#160;: </label>"
                    +"<input type='text' id='deci' name='binaire' autocomplete='off' class='saisir'"
                    +"onkeypress='javascript:if (event.keyCode == 13) {xsexa();return false;}'"
                    +"value='2530.60,N'/></p></form>";
    var cv2 = document.getElementById("conv2");
    cv2.innerHTML="<form action='' class='afficheur3'>"
                    +"<p><label for='decimal'>Longitude sexagésimale&#160;: </label>"
                    +"<input type='text' id='sexa2' name='decimal' autocomplete='off' class='saisir'"
                    +"onkeypress='javascript:if (event.keyCode == 13) {xdeci2();return false;}'"
                    +"value='25°30&apos;36&quot;Est'/></p><p>"
                    +"<label for='binaire'>Longitude NMEA&#160;: </label>"
                    +"<input type='text' id='deci2' name='binaire' autocomplete='off' class='saisir'"
                    +"onkeypress='javascript:if (event.keyCode == 13) {xsexa2();return false;}'"
                    +"value='2530.60,E'/></p></form><br><br><br><br><br><br><br>";
}

function xdeci()
{
  d = document.getElementById("deci");
  s = document.getElementById("sexa");
  sv = s.value;
  sv = sv.toUpperCase();
  sv = sv.replace(/ /g,"");
  sv = sv.replace(/''/g,'"');
  sv = sv.replace(/NORD/g,"N");
  sv = sv.replace(/SUD/g,"S");
  sp1 = sv.split('°');
  deg = sp1[0];
  if (sp1[1].includes("'")==false)
  {
    sp1[1] = "0'"+sp1[1];
  }
  sp2 = sp1[1].split("'");
  min = sp2[0];
  if (sp2[1].includes('"')==false)
  {
    sp2[1] = '0"'+sp2[1];
  }
  sp3 = sp2[1].split('"');
  sec = sp3[0];
  sec1 =  100*parseInt(sec,10)/60;
  sec = sec1.toString();
  lat = deg+min+"."+sec+","+sp3[1];
  d.value = lat;
}


function xsexa()
{
  d = document.getElementById("deci");
  s = document.getElementById("sexa");
  dv = d.value;
  dv = dv.replace(/ /g,"");
  dv = dv.replace(/N/g,"Nord");
  dv = dv.replace(/S/g,"Sud");
  sp1 = dv.split(',');
  or = sp1[1];
  sp2 = sp1[0].split('.');
  sec = sp2[1];
  sec = "0."+sec;
  sec1 = 60*parseFloat(sec,10);
  sec = sec1.toString();
  l = sp2[0].length;
  min = sp2[0].substr(l-2, 2);
  deg = sp2[0].substr(0, l-2);;
  lat = deg+'°'+min+"'"+sec+'"'+or;
  s.value=lat;
}

function xdeci2()
{
  d = document.getElementById("deci2");
  s = document.getElementById("sexa2");
  sv = s.value;
  sv = sv.toUpperCase();
  sv = sv.replace(/ /g,"");
  sv = sv.replace(/''/g,'"');
  sv = sv.replace(/OUEST/g,"W");
  sv = sv.replace(/EST/g,"E");
  sp1 = sv.split('°');
  deg = sp1[0];
  if (sp1[1].includes("'")==false)
  {
    sp1[1] = "0'"+sp1[1];
  }
  sp2 = sp1[1].split("'");
  min = sp2[0];
  if (sp2[1].includes('"')==false)
  {
    sp2[1] = '0"'+sp2[1];
  }
  sp3 = sp2[1].split('"');
  sec = sp3[0];
  sec1 =  100*parseInt(sec,10)/60;
  sec = sec1.toString();
  long = deg+min+"."+sec+","+sp3[1];
  d.value = long;
}

function xsexa2()
{
  d = document.getElementById("deci2");
  s = document.getElementById("sexa2");
  dv = d.value;
  dv = dv.replace(/ /g,"");
  dv = dv.replace(/E/g,"Est");
  dv = dv.replace(/W/g,"Ouest");
  sp1 = dv.split(',');
  or = sp1[1];
  sp2 = sp1[0].split('.');
  sec = sp2[1];
  sec = "0."+sec;
  sec1 = 60*parseFloat(sec,10);
  sec = sec1.toString();
  l = sp2[0].length;
  min = sp2[0].substr(l-2, 2);
  deg = sp2[0].substr(0, l-2);;
  long = deg+'°'+min+"'"+sec+'"'+or;
  s.value=long;
}
