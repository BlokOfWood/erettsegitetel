function ResultCalculation(){
    összeg = 0;
    let pontszam1 = parseInt(document.getElementById("Pontszam1").value);
    let pontszam2 = parseInt(document.getElementById("Pontszam2").value);
    let pontszam3 = parseInt(document.getElementById("Pontszam3").value);
    let pontszam4 = parseInt(document.getElementById("Pontszam4").value);
    if(isNaN(pontszam1)) pontszam1 = 0;
    if(isNaN(pontszam2)) pontszam2 = 0;
    if(isNaN(pontszam3)) pontszam3 = 0;
    if(isNaN(pontszam4)) pontszam4 = 0;
    if(pontszam1 < 0 || pontszam1 > 40)
    {
        document.getElementById("végeredmény").innerHTML = "A megadott hálózati ismeretek pontszám helytelen";
        return;
    }
    if(pontszam2 < 0 || pontszam2 > 40)
    {
        document.getElementById("végeredmény").innerHTML = "A programozás pontszám helytelen";
        return;
    }
    if(pontszam3 < 0 || pontszam3 > 40)
    {
        document.getElementById("végeredmény").innerHTML = "A weboldalak kódolása, adatbázis-kezelés pontszám helytelen";
        return;
    }
    if(pontszam4 < 0 || pontszam4 > 30)
    {
        document.getElementById("végeredmény").innerHTML = "A megadott szóbeli vizsga pontszám helytelen";
        return;
    }
    összeg = pontszam1 + pontszam2 + pontszam3 + pontszam4;
    document.getElementById("végeredmény").innerHTML = "Pontszám: "+összeg+"/150"

    
}