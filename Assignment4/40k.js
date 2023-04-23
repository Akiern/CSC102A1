//Daniel "Akiern" Courtemanche//

/////////////////////////LAUNCH COUNTDOWN//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let selfDestructActivated = false;
let launchActivated = false;
let stopped = false;
//similar to var bt limited to the block they are placed

function launch()
//for creating passcode access to launch command
    {
        let answer = prompt("Enter Access Number To Confirm Launch");
        //promt similar to alert but has input field

        if (answer == 57021)
        //if condition for passcode, having difficulty making range as in access panel section
            {
                alert("Access Granted - Launch Sequence Initiating");
                countBlastoff();
                //function started by another function
            }
    }

function countBlastoff()
//updated timer system
    {
        launchActivated = true;
        stopped = false;
        //conditions

        for (let z = 10;z >=0; z--)
        {
            timerID = setTimeout(function ()
            {
                if (stopped)
                {
                    clearTimeout(timerID)
                }

                else if (z == 0)
                //if z equals 0 then perform the following
                {
                    document.getElementById("countdownTimer").innerHTML = "Launch!!! Prepare for battle";
                    //displays text at completion of timer
                    document.getElementById("launchSequence").innerHTML = "  ";
                    //nothing needed in launch sequence
                }

                else if (z < 6)
                //if z is less than 6 IE: 5,4,3,2,1
                {
                    document.getElementById("countdownTimer").innerHTML = "T -  " + z;
                    //display T- and the current countdown time
                    document.getElementById("launchSequence").innerHTML = "Releasing clamps...";
                    //displays text in launch sequence
                }

                else if (z > 5)
                //if z is greater than 5 IE: 10,9,8,7,6
                {
                    document.getElementById("countdownTimer").innerHTML = "T -  " + z;
                    document.getElementById("launchSequence").innerHTML = "Launch Sequence Initialized...";
                }

                else
                {
                    document.getElementById("countDownTimer").innerHTML = "T - " + z;
                    document.getElementById("launchSequence").innerHTML = "Launch Sequence Initialized...";
                }
            }, (10-z) * 1000);
            //*1000 time set in milliseconds, 1000 equals 1 second
        }
    }

function abortDrop()
//addintional code to stop countdown
    {
        if (launchActivated)
        //only functions if countdown initiated
        {
            let answer = prompt("Confirm Abort Command Y/N");
            //request confiration
            if (answer == "Y")
            //answer yes do the following
            {
                alert("Mission Aborted");
                stopped = true;
                //condition switched to true stops count
                document.getElementById("countDownTimer").innerHTML = "Launch Sequence Aborted";
            }  
            else if (answer == "N")
            {
                alert("Standing Down Abort Command")
            }  
            else
            {
                alert("Command Not Recognized - Continuing Launch")
                eRror()
                //sound alerting of incorrect input
            }
        }
    }


/////////////////////////COMM PANNEL OBJECTIVE/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function nextobjective()
//name of function for comm panels random objective generator 
//revamped this function
{
    var obj1 = 0;
    var obj2 = 0;
    var obj3 = 0;
    var obj4 = 0;
    var obj5 = 0;
    //variables for each of the 5 objectives

do
//do loop ending with while statement
{
 
var rando1 = Math.floor(Math.random() *5)+1;
//generates randome nuber 1-5 
    if (rando1 ==1) 
        {obj1 = "Alpha";}
        //statement if random number generated is 1 set var obj1 value to Alpha
    else if (rando1 ==2) 
        {obj1 = "Bravo";}
        //statement if random number generated is 2 set var obj1 value to Bravo
    else if (rando1 ==3) 
        {obj1 = "Charlie";}
        //statement if random number generated is 3 set var obj1 value to Charlie
    else if (rando1 ==4) 
        {obj1 = "Delta";}
        //statement if random number generated is 4 set var obj1 value to Delta
    else if (rando1 ==5) 
        {obj1 = "Echo";}
        //statement if random number generated is 5 set var obj1 value to Echo 
 
var rando2 = Math.floor(Math.random() *5)+1;
    if (rando2 ==1) 
        {obj2 = "Alpha";}
    else if (rando2 ==2) 
        {obj2 = "Bravo";}
    else if (rando2 ==3) 
        {obj2 = "Charlie";}
    else if (rando2 ==4) 
        {obj2 = "Delta";}
    else if (rando2 ==5) 
        {obj2 = "Echo";}
        //Random number function output for obj2

var rando3 = Math.floor(Math.random() *5)+1;
    if (rando3 ==1) 
        {obj3 = "Alpha";}
    else if (rando3 ==2) 
        {obj3 = "Bravo";}
    else if (rando3 ==3) 
        {obj3 = "Charlie";}
    else if (rando3 ==4) 
        {obj3 = "Delta";}
    else if (rando3 ==5) 
        {obj3 = "Echo";}
        //Random number function output for obj3

var rando4 = Math.floor(Math.random() *5)+1;
    if (rando4 ==1) 
        {obj4 = "Alpha";}
    else if (rando4 ==2) 
        {obj4 = "Bravo";}
    else if (rando4 ==3) 
        {obj4 = "Charlie";}
    else if (rando4 ==4) 
        {obj4 = "Delta";}
    else if (rando4 ==5) 
        {obj4 = "Echo";}
        //Random number function output for obj4

var rando5 = Math.floor(Math.random() *5)+1;
    if (rando5 ==1) 
        {obj5 = "Alpha";}
    else if (rando5 ==2) 
        {obj5 = "Bravo";}
    else if (rando5 ==3) 
        {obj5 = "Charlie";}
    else if (rando5 ==4) 
        {obj5 = "Delta";}
    else if (rando5 ==5) 
        {obj5 = "Echo";}
        //Random number function output for obj5

}
while (rando2 == rando1 || rando3 == rando2 || rando3 == rando1 || rando4 == rando3 || rando4 == rando2 || rando4 == rando1 || rando5 == rando1 || rando5 == rando2 || rando5 == rando3 || rando5 == rando4);
//while continues do loop if any random number equals another, this guarantees that each objective is unique for continuous play
document.getElementById("incoming").innerHTML = "Your mission is as follows. Your drop pod will land on coordinates at checkpoint " + obj1 + ". Your Unit will immediately proceed to objective " + obj2 + " and establish a forward command. After holding this position for" + "two cycles, clear all enemies between checkpoints " + obj3 + " and " + obj4 + " . If any of you remain proceed," + "to objective " + obj5 + " and wait for extraction.";
//statement can not be  (r5 = r1 or r2) must be (r5 = r1 or r5 = r2)//
//=,<,> are difdirent from ==,&&,||                                 //
//Similar to math oporates like [(r5 = r1)or(r5 = r2)]              //
}

function objReset()
//name of function for clearing out comm panel
{
    document.getElementById("incoming").innerHTML = "Transmission Terminated--";
    //places new message to incoming element on HTML, this replaces objective gen message
}

/////////////////////////ACCESS PANNEL/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function commandLogin()
//name of function for login access for other pages
{
    alert ("Accessing");
var userId = document.getElementById("userId").value;
var faction = document.getElementById("faction").value;
var accessNum = document.getElementById("accessNum").value;
//variables pulling data from HTML form
var chainCode = userId + faction;
//adds userId and faction strings together for code length validation

faction = faction.toLowerCase();
//takes input from faction and converts to all lower case, prevents else if error based on user input of lower or caps

    if(chainCode.length > 20)
    //.length count the charachters in the string and can be compared to real numbers//
        {
            document.getElementById("commAccess").innerHTML = "Unauthorized Access - Provide Valid Credentials"
            //notification to display on HTML if string length >20
            
        }

    if (accessNum >999 || accessNum <100)
    //.length not required for numpart validating, number within numPart must be between literal 10 and 2//
        {
            document.getElementById("commAccess").innerHTML = "Unauthorized Access - Invalid Access Code"
            //notification to display on HTML access code is not 3 digit
        }

    else if(faction == "tau") 
    //if first two if statments are passed and faction equals tau do the following
        {
        alert("Codes Accepted - Activating Command Interface");
        //post alert stating code accepted
        location.replace("Pages/TauHome.html");
        //.replace with tau home page
        }

    else if(faction == "eldar") 
    //if first two if statments are passed and faction equals eldar do the following
        {
        alert("Codes Accepted - Activating Command Interface");
        location.replace("Pages/EldarHome.html");
        //.replace with eldar home page
        }

    else if(faction == "orks") 
    //if first two if statments are passed and faction equals orks do the following
        {
        alert("Codes Accepted - Activating Command Interface");
        location.replace("Pages/OrksHome.html");
        //.replace with orks home page
        }
    
    else if(faction == "space marines") 
    //if first two if statments are passed and faction equals space marines do the following
        {
        alert("Codes Accepted - Activating Command Interface");
        location.replace("Pages/SpaceMarinesHome.html");
        //.replace with space marines home page
        }
}

/////////////////////////AUDIO FUNCTION////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function xMit()
    {
        mySound = new sound("Audio/commOpen.wav");
        //source filr for used audio
        mySound.play();
        //play command for audio
    }

function cLose()
    {
        mySound = new sound("Audio/commClose.wav");
        //source filr for used audio
        mySound.play();      
        //play command for audio
    }

function eRror()
    {
        mySound = new sound("Audio/error.wav");
        //source filr for used audio
        mySound.play();      
        //play command for audio
    }

function sound(src)
//this is a helper function to impliment sound
{
    this.sound = document.createElement("audio");
    //this "sound" will create within the HTML "audio"
    this.sound.src = src
    //this sound will come from the following source
    this.play = function()
        {this.sound.play()}
    this.Stop = function()
        {this.sound.Stop()}
}