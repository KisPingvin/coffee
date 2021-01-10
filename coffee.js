function fuggveny1(s1, s2)
{
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";
    if(s1.value == "Latte")
    {
        var valasztasTomb = ["------|------", "tej|Tej" , "laktózmentes tej|Laktózmentes tej" , "mandulatej|Mandulatej"];
    }
    else if(s1.value == "Espresso")
    {   
        var valasztasTomb = ["------|------" , "-|-"];
    }
    else if(s1.value == "Cappuccino")
    {
        var valasztasTomb = ["------|------", "tej|Tej" , "laktózmentes tej|Laktózmentes tej" , "mandulatej|Mandulatej"];
    }

    for(var valasztas in valasztasTomb)
    {
        var seged = valasztasTomb[valasztas].split("|");
        var ujOpcio = document.createElement("option");
        ujOpcio.value = seged[0];
        ujOpcio.innerHTML = seged[1];
        s2.options.add(ujOpcio);
    }
}

function fuggveny2(s1, s3)
{
    var s1 = document.getElementById(s1);
    var s3 = document.getElementById(s3);
    
    s3.innerHTML = "";
    if(s1.value == "Latte") 
    {
        var valasztasTomb = ["------|------" , "tasakosKristaly|Tasakos kristálycukor" , "tasakosBarna|Tasakos barnacukor" , "edesitoTabletta|Édesítő tabletta"];
    }
    else if(s1.value == "Espresso")
    {
        var valasztasTomb = ["------|------" , "tasakosKristaly|Tasakos kristálycukor" , "tasakosBarna|Tasakos barnacukor" , "edesitoTabletta|Édesítő tabletta"];
    }
    else if(s1.value == "Cappuccino")
    {
        var valasztasTomb = ["------|------" , "tasakosKristaly|Tasakos kristálycukor" , "tasakosBarna|Tasakos barnacukor" , "edesitoTabletta|Édesítő tabletta"];
    }

    for(var valasztas in valasztasTomb)
    {
        var seged = valasztasTomb[valasztas].split("|");
        var ujOpcio = document.createElement("option");
        ujOpcio.value = seged[0];
        ujOpcio.innerHTML = seged[1];
        s3.options.add(ujOpcio);
    }
}

function fuggveny3(s1, s2, s3, s4)
{
    let kave1 = 400;
    let kave2 = 300;
    let kave3 = 500;
    let mastej = 20;
    let mascukor = 20;
    let cukor2 = 20;
    let cukor3 = 40; 
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
    var s4 = document.getElementById(s4);

    if(s1.value == "Latte" && s2.value == "tej"  && s3.value == "tasakosKristaly" && (s4.value == "0" || s4.value == "1"))
    {
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if(s1.value == "Latte" && s2.value == "tej" && s3.value == "tasakosKristaly" && s4.value == "2")
    {
        kave1 = kave1 + cukor2;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if(s1.value == "Latte" && s2.value == "tej" && s3.value == "tasakosKristaly" && s4.value == "3")
    {
        kave1 = kave1 + cukor3;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if(s1.value == "Latte" && s2.value == "tej" && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && (s4.value == "0" || s4.value == "1"))
    {
        kave1 = kave1 + mascukor;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if(s1.value == "Latte" && s2.value == "tej" && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "2")
    {
        kave1 = kave1 + mascukor + cukor2;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if (s1.value == "Latte" && s2.value == "tej" && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "3")
    {
        kave1 = kave1 + mascukor + cukor3;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if(s1.value == "Latte" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && s3.value == "tasakosKristaly" && (s4.value == "0" || s4.value == "1"))
    {
        kave1 = kave1 + mastej;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if(s1.value == "Latte" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && s3.value == "tasakosKristaly" && s4.value == "2")
    {
        kave1 = kave1 + cukor2 + mastej;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if(s1.value == "Latte" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && s3.value == "tasakosKristaly" && s4.value == "3")
    {
        kave1 = kave1 + cukor3 + mastej;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if(s1.value == "Latte" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && (s4.value == "0" || s4.value == "1"))
    {
        kave1 = kave1 + mascukor + mastej;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if(s1.value == "Latte" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "2")
    {
        kave1 = kave1 + mascukor + cukor2 + mastej;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }
    else if (s1.value == "Latte" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "3")
    {
        kave1 = kave1 + mascukor + cukor3 + mastej;
        document.getElementById("ar").innerHTML = kave1 + " Ft";
    }



    if(s1.value == "Espresso" && s2.value == "-" && s3.value == "tasakosKristaly" && (s4.value == "0" || s4.value == "1"))
    {
        document.getElementById("ar").innerHTML = kave2 + " Ft";
    }
    else if(s1.value == "Espresso" && s2.value == "-" && s3.value == "tasakosKristaly" && s4.value == "2")
    {
        kave2 = kave2 + cukor2; 
        document.getElementById("ar").innerHTML = kave2 + " Ft";
    }
    else if(s1.value == "Espresso" && s2.value == "-" && s3.value == "tasakosKristaly" && s4.value == "3")
    {
        kave2 = kave2 + cukor3; 
        document.getElementById("ar").innerHTML = kave2 + " Ft";
    }
    else if(s1.value == "Espresso" && s2.value == "-" && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && (s4.value == "0" || s4.value == "1"))
    {
        kave2 = kave2 + mascukor; 
        document.getElementById("ar").innerHTML = kave2 + " Ft";
    }
    else if(s1.value == "Espresso" && s2.value == "-" && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "2")
    {
        kave2 = kave2 + mascukor + cukor2; 
        document.getElementById("ar").innerHTML = kave2 + " Ft";
    }
    else if(s1.value == "Espresso" && s2.value == "-" && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "3")
    {
        kave2 = kave2 + mascukor + cukor3; 
        document.getElementById("ar").innerHTML = kave2 + " Ft";
    }


    
    if(s1.value == "Cappuccino" && s2.value == "tej"  && s3.value == "tasakosKristaly" && (s4.value == "0" || s4.value == "1"))
    {
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if(s1.value == "Cappuccino" && s2.value == "tej" && s3.value == "tasakosKristaly" && s4.value == "2")
    {
        kave3 = kave3 + cukor2;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if(s1.value == "Cappuccino" && s2.value == "tej" && s3.value == "tasakosKristaly" && s4.value == "3")
    {
        kave3 = kave3 + cukor3;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if(s1.value == "Cappuccino" && s2.value == "tej" && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && (s4.value == "0" || s4.value == "1"))
    {
        kave3 = kave3 + mascukor;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if(s1.value == "Cappuccino" && s2.value == "tej" && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "2")
    {
        kave3 = kave3 + mascukor + cukor2;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if (s1.value == "Cappuccino" && s2.value == "tej" && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "3")
    {
        kave3 = kave3 + mascukor + cukor3;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if(s1.value == "Cappuccino" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && s3.value == "tasakosKristaly" && (s4.value == "0" || s4.value == "1"))
    {
        kave3 = kave3 + mastej;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if(s1.value == "Cappuccino" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && s3.value == "tasakosKristaly" && s4.value == "2")
    {
        kave3 = kave3 + cukor2 + mastej;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if(s1.value == "Cappuccino" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && s3.value == "tasakosKristaly" && s4.value == "3")
    {
        kave3 = kave3 + cukor3 + mastej;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if(s1.value == "Cappuccino" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && (s4.value == "0" || s4.value == "1"))
    {
        kave3 = kave3 + mascukor + mastej;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if(s1.value == "Cappuccino" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "2")
    {
        kave3 = kave3 + mascukor + cukor2 + mastej;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }
    else if (s1.value == "Cappuccino" && (s2.value == "laktózmentes tej" || s2.value == "mandulatej") && (s3.value == "tasakosBarna" || s3.value == "edesitoTabletta") && s4.value == "3")
    {
        kave3 = kave3 + mascukor + cukor3 + mastej;
        document.getElementById("ar").innerHTML = kave3 + " Ft";
    }

}