function derexo()
{
    if(typeof localStorage!='undefined') 
    {
        localStorage.setItem('c3p3e3',1);
    }
}

function afficherCol(idr,idv,idb,colr)
{
    xcol = document.getElementById(colr);
    xr = document.getElementById(idr).value;
    xv = document.getElementById(idv).value;
    xb = document.getElementById(idb).value;
    rvb = [xr,xv,xb];
    var hexa = ['00','00','00'];
    for (var i=0; i<3; i++)
    {
        hexa[i] = parseInt(rvb[i],10).toString(16);
        while(hexa[i].length<2)
        {
            hexa[i] = '0'+hexa[i];
        }
    }
    shexa = '#'+hexa[0]+hexa[1]+hexa[2];
    xcol.value = shexa;
}

