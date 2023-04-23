//Header Unit Table constant
var uT11 = "Name";
var uT12 = "M";
var uT13 = "WS";
var uT14 = "BS";
var uT15 = "S";
var uT16 = "T";
var uT17 = "W";
var uT18 = "A";
var uT19 = "Ld";
var uT110 = "Sv";
//Header Weapons Table constant
var wT11 = "Weapon";
var wT12 = "Range";
var wT13 = "Type";
var wT14 = "S";
var wT15 = "AP";
var wT16 = "D";
var wT17 = "Ability";


function headerTableConst()
//info within this function used for all selection for table inout
{
    document.getElementById("uT11").innerHTML = uT11;
    document.getElementById("uT12").innerHTML = uT12;
    document.getElementById("uT13").innerHTML = uT13;
    document.getElementById("uT14").innerHTML = uT14;
    document.getElementById("uT15").innerHTML = uT15;
    document.getElementById("uT16").innerHTML = uT16;
    document.getElementById("uT17").innerHTML = uT17;
    document.getElementById("uT18").innerHTML = uT18;
    document.getElementById("uT19").innerHTML = uT19;
    document.getElementById("uT110").innerHTML = uT110;

    document.getElementById("wT11").innerHTML = wT11;
    document.getElementById("wT12").innerHTML = wT12;
    document.getElementById("wT13").innerHTML = wT13;
    document.getElementById("wT14").innerHTML = wT14;
    document.getElementById("wT15").innerHTML = wT15;
    document.getElementById("wT16").innerHTML = wT16;
    document.getElementById("wT17").innerHTML = wT17;
}

function farseerStat()
//function for specific unit input
{  
    document.getElementById("farSeer").disabled = true;
    document.getElementById("guardian").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //disables button of current selection, gives visual representation of selected unit
  
    //Guardian
    document.getElementById("uT21").innerHTML = "Farseer";
    document.getElementById("uT22").innerHTML = "7";
    document.getElementById("uT23").innerHTML = "2+";
    document.getElementById("uT24").innerHTML = "2+";
    document.getElementById("uT25").innerHTML = "3";
    document.getElementById("uT26").innerHTML = "3";
    document.getElementById("uT27").innerHTML = "5";
    document.getElementById("uT28").innerHTML = "2";
    document.getElementById("uT29").innerHTML = "9";
    document.getElementById("uT210").innerHTML = "6+";
    //Shuriken P
    document.getElementById("wT21").innerHTML = "Shuriken Pistol";
    document.getElementById("wT22").innerHTML = "12in";
    document.getElementById("wT23").innerHTML = "Pistol";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "-1";
    document.getElementById("wT26").innerHTML = "1";
    document.getElementById("wT27").innerHTML = "Shuriken";
    //Witch Blade
    document.getElementById("wT31").innerHTML = "Witch Blade";
    document.getElementById("wT32").innerHTML = "M";
    document.getElementById("wT33").innerHTML = "Melee";
    document.getElementById("wT34").innerHTML = "U";
    document.getElementById("wT35").innerHTML = "-1";
    document.getElementById("wT36").innerHTML = "2";
    document.getElementById("wT37").innerHTML = "2 + Success";
    //Once figure out better input method take weapons and create into objects so they can be used on multiple units
}

function guardianStat()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("guardian").disabled = true;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("clearOut").disabled = false;
    //Farseer
    document.getElementById("uT21").innerHTML = "Guardian";
    document.getElementById("uT22").innerHTML = "7";
    document.getElementById("uT23").innerHTML = "3+";
    document.getElementById("uT24").innerHTML = "3+";
    document.getElementById("uT25").innerHTML = "3";
    document.getElementById("uT26").innerHTML = "3";
    document.getElementById("uT27").innerHTML = "1";
    document.getElementById("uT28").innerHTML = "1";
    document.getElementById("uT29").innerHTML = "7";
    document.getElementById("uT210").innerHTML = "4+";
    //Shuriken C
    document.getElementById("wT21").innerHTML = "Shuriken";
    document.getElementById("wT22").innerHTML = "18in";
    document.getElementById("wT23").innerHTML = "Assult";
    document.getElementById("wT24").innerHTML = "4";
    document.getElementById("wT25").innerHTML = "-1";
    document.getElementById("wT26").innerHTML = "0";
    document.getElementById("wT27").innerHTML = "Shuriken";
    //Witch Blade
    document.getElementById("wT31").innerHTML = "-";
    document.getElementById("wT32").innerHTML = "-";
    document.getElementById("wT33").innerHTML = "-";
    document.getElementById("wT34").innerHTML = "-";
    document.getElementById("wT35").innerHTML = "-";
    document.getElementById("wT36").innerHTML = "-";
    document.getElementById("wT37").innerHTML = "-";
}

function wraithGuardStat()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("wraithGuard").disabled = true;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Wraith Guard
        document.getElementById("uT21").innerHTML = "Wraith Guard";
        document.getElementById("uT22").innerHTML = "4";
        document.getElementById("uT23").innerHTML = "4";
        document.getElementById("uT24").innerHTML = "5";
        document.getElementById("uT25").innerHTML = "5";
        document.getElementById("uT26").innerHTML = "1";
        document.getElementById("uT27").innerHTML = "4";
        document.getElementById("uT28").innerHTML = "1";
        document.getElementById("uT29").innerHTML = "10";
        document.getElementById("uT210").innerHTML = "3+";
        //Wraith Cannon
        document.getElementById("wT21").innerHTML = "Wraith Cannon";
        document.getElementById("wT22").innerHTML = "12in";
        document.getElementById("wT23").innerHTML = "Small Arms";
        document.getElementById("wT24").innerHTML = "4";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "0";
        document.getElementById("wT27").innerHTML = "Destroyer";
        //Scythes
        document.getElementById("wT31").innerHTML = "D-Scythes";
        document.getElementById("wT32").innerHTML = "8";
        document.getElementById("wT33").innerHTML = "Small Arms";
        document.getElementById("wT34").innerHTML = "x2";
        document.getElementById("wT35").innerHTML = "6+";
        document.getElementById("wT36").innerHTML = "4+";
        document.getElementById("wT37").innerHTML = "Inferno";
}

function waveSerpantStat()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = true;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("clearOut").disabled = false;
        //Wave Serpant
        document.getElementById("uT21").innerHTML = "Wave Serpant";
        document.getElementById("uT22").innerHTML = "18";
        document.getElementById("uT23").innerHTML = "6+";
        document.getElementById("uT24").innerHTML = "3+";
        document.getElementById("uT25").innerHTML = "6";
        document.getElementById("uT26").innerHTML = "7";
        document.getElementById("uT27").innerHTML = "13";
        document.getElementById("uT28").innerHTML = "3";
        document.getElementById("uT29").innerHTML = "8";
        document.getElementById("uT210").innerHTML = "3+";
        //Twin Bright Lance
        document.getElementById("wT21").innerHTML = "Twin Bright Lance";
        document.getElementById("wT22").innerHTML = "36in";
        document.getElementById("wT23").innerHTML = "Heavy 2";
        document.getElementById("wT24").innerHTML = "6";
        document.getElementById("wT25").innerHTML = "-1";
        document.getElementById("wT26").innerHTML = "2";
        document.getElementById("wT27").innerHTML = "-";
        //Sunburst
        document.getElementById("wT31").innerHTML = "Sunburst";
        document.getElementById("wT32").innerHTML = "48in";
        document.getElementById("wT33").innerHTML = "Heavy 2D2";
        document.getElementById("wT34").innerHTML = "4";
        document.getElementById("wT35").innerHTML = "-1";
        document.getElementById("wT36").innerHTML = "1";
        document.getElementById("wT37").innerHTML = "Blast";
}

function firePrismStat()
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = true;
    document.getElementById("clearOut").disabled = false;
        //Fire Prism
        document.getElementById("uT21").innerHTML = "Fire Prism";
        document.getElementById("uT22").innerHTML = "116";
        document.getElementById("uT23").innerHTML = "6+";
        document.getElementById("uT24").innerHTML = "3+";
        document.getElementById("uT25").innerHTML = "8";
        document.getElementById("uT26").innerHTML = "7";
        document.getElementById("uT27").innerHTML = "17";
        document.getElementById("uT28").innerHTML = "3";
        document.getElementById("uT29").innerHTML = "8";
        document.getElementById("uT210").innerHTML = "3+";
        //Prism Cannon
        document.getElementById("wT21").innerHTML = "Prism Cannon";
        document.getElementById("wT22").innerHTML = "60in";
        document.getElementById("wT23").innerHTML = "Heavy 3";
        document.getElementById("wT24").innerHTML = "6";
        document.getElementById("wT25").innerHTML = "-2";
        document.getElementById("wT26").innerHTML = "2";
        document.getElementById("wT27").innerHTML = "Blast";
        //Focused Lance
        document.getElementById("wT31").innerHTML = "Focused Lance";
        document.getElementById("wT32").innerHTML = "60in";
        document.getElementById("wT33").innerHTML = "Heavy 2";
        document.getElementById("wT34").innerHTML = "14";
        document.getElementById("wT35").innerHTML = "-5";
        document.getElementById("wT36").innerHTML = "3D3";
        document.getElementById("wT37").innerHTML = "-";
}

function clearOut()
//for clear out of all table data
{
    document.getElementById("farSeer").disabled = false;
    document.getElementById("guardian").disabled = false;
    document.getElementById("wraithGuard").disabled = false;
    document.getElementById("waveSerp").disabled = false;
    document.getElementById("firePrism").disabled = false;
    document.getElementById("clearOut").disabled = true;
        //Set all fields to empty, experiment further with using class or variables
        document.getElementById("uT21").innerHTML = "";
        document.getElementById("uT22").innerHTML = "";
        document.getElementById("uT23").innerHTML = "";
        document.getElementById("uT24").innerHTML = "";
        document.getElementById("uT25").innerHTML = "";
        document.getElementById("uT26").innerHTML = "";
        document.getElementById("uT27").innerHTML = "";
        document.getElementById("uT28").innerHTML = "";
        document.getElementById("uT29").innerHTML = "";
        document.getElementById("uT210").innerHTML = "";
        //
        document.getElementById("wT21").innerHTML = "";
        document.getElementById("wT22").innerHTML = "";
        document.getElementById("wT23").innerHTML = "";
        document.getElementById("wT24").innerHTML = "";
        document.getElementById("wT25").innerHTML = "";
        document.getElementById("wT26").innerHTML = "";
        document.getElementById("wT27").innerHTML = "";
        //
        document.getElementById("wT31").innerHTML = "";
        document.getElementById("wT32").innerHTML = "";
        document.getElementById("wT33").innerHTML = "";
        document.getElementById("wT34").innerHTML = "";
        document.getElementById("wT35").innerHTML = "";
        document.getElementById("wT36").innerHTML = "";
        document.getElementById("wT37").innerHTML = "";
        //
        document.getElementById("uT11").innerHTML = "";
        document.getElementById("uT12").innerHTML = "";
        document.getElementById("uT13").innerHTML = "";
        document.getElementById("uT14").innerHTML = "";
        document.getElementById("uT15").innerHTML = "";
        document.getElementById("uT16").innerHTML = "";
        document.getElementById("uT17").innerHTML = "";
        document.getElementById("uT18").innerHTML = "";
        document.getElementById("uT19").innerHTML = "";
        document.getElementById("uT110").innerHTML = "";
        //
        document.getElementById("wT11").innerHTML = "";
        document.getElementById("wT12").innerHTML = "";
        document.getElementById("wT13").innerHTML = "";
        document.getElementById("wT14").innerHTML = "";
        document.getElementById("wT15").innerHTML = "";
        document.getElementById("wT16").innerHTML = "";
        document.getElementById("wT17").innerHTML = "";
}