function dropCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        //variable i starts at 1 ; loop runs when i < or = to 11 ; i + 1 each loop
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Launch!!! Prepare for battle";
                document.getElementById("launchSequence").innerHTML = "  "
                //When i reaches 11 countdown complete display massage
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "T -  " + currTime;
                document.getElementById("launchSequence").innerHTML = "Releasing clamps..."
                    //text can be placed on both sides of #s as long as the + and "literals" are in place
                currTime = currTime - 1;
            }, 1000 * i);
        } else if (i > 1 || i < 3) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "T -   " + currTime;
                document.getElementById("launchSequence").innerHTML = "Launch Sequence Initialized..."
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "T -  " + currTime;
                document.getElementById("launchSequence").innerHTML = "....."
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}

function nextobjective()
//to name function for html to search for
{
   
    var obj1 = 0;
    var obj2 = 0;
    var obj3 = 0;
    var obj4 = 0;
    var obj5 = 0;

document.getElementById("incoming").innerHTML = "Your mission is as follows. Your drop pod will land on coordinates at checkpoint _______ . Your Unit will" + "<br>" + "immediately proceed to objective _______ and establish a forward command. After holding this position for" + "<br>" + "two cycles, clear all enemies between checkpoints _______ and _______ . If any of you remain proceed," + "<br>" + "to objective _______ and wait for extraction.";
    
do
//do loop see close out for reasoning//
{
if (obj1 ==0)
{   
    var rando1 = Math.floor(Math.random() *5)+1;
    if (rando1 ==1)
    {document.getElementById("ob1").innerHTML = "Alpha";}
    else if (rando1 ==2)
    {document.getElementById("ob1").innerHTML = "Bravo";}
    else if (rando1 ==3)
    {document.getElementById("ob1").innerHTML = "Charlie";}
    else if (rando1 ==4)
    {document.getElementById("ob1").innerHTML = "Delta";}
    else if (rando1 ==5)
    {document.getElementById("ob1").innerHTML = "Echo";}
    //if, else, if to assign word to random number genorated//  
}

    

if (obj2 ==0)
{   
    var rando2 = Math.floor(Math.random() *5)+1;
    if (rando2 ==1)
    {document.getElementById("ob2").innerHTML = "Alpha";}
    else if (rando2 ==2)
    {document.getElementById("ob2").innerHTML = "Bravo";}
    else if (rando2 ==3)
    {document.getElementById("ob2").innerHTML = "Charlie";}
    else if (rando2 ==4)
    {document.getElementById("ob2").innerHTML = "Delta";}
    else if (rando2 ==5)
    {document.getElementById("ob2").innerHTML = "Echo";}
}

if (obj3 ==0)
{   
    var rando3 = Math.floor(Math.random() *5)+1;
    if (rando3 ==1)
    {document.getElementById("ob3").innerHTML = "Alpha";}
    else if (rando3 ==2)
    {document.getElementById("ob3").innerHTML = "Bravo";}
    else if (rando3 ==3)
    {document.getElementById("ob3").innerHTML = "Charlie";}
    else if (rando3 ==4)
    {document.getElementById("ob3").innerHTML = "Delta";}
    else if (rando3 ==5)
    {document.getElementById("ob3").innerHTML = "Echo";}
    }

if (obj4 ==0)
{   
    var rando4 = Math.floor(Math.random() *5)+1;
    if (rando4 ==1)
    {document.getElementById("ob4").innerHTML = "Alpha";}
    else if (rando4 ==2)
    {document.getElementById("ob4").innerHTML = "Bravo";}
    else if (rando4 ==3)
    {document.getElementById("ob4").innerHTML = "Charlie";}
    else if (rando4 ==4)
    {document.getElementById("ob4").innerHTML = "Delta";}
    else if (rando4 ==5)
    {document.getElementById("ob4").innerHTML = "Echo";}
}

if (obj5 ==0)
{   
    var rando5 = Math.floor(Math.random() *5)+1;
    if (rando5 ==1)
    {document.getElementById("ob5").innerHTML = "Alpha";}
    else if (rando5 ==2)
    {document.getElementById("ob5").innerHTML = "Bravo";}
    else if (rando5 ==3)
    {document.getElementById("ob5").innerHTML = "Charlie";}
    else if (rando5 ==4)
    {document.getElementById("ob5").innerHTML = "Delta";}
    else if (rando5 ==5)
    {document.getElementById("ob5").innerHTML = "Echo";}
}
}
while (rando2 == rando1 || rando3 == rando2 || rando3 == rando1 || rando4 == rando3 || rando4 == rando2 || rando4 == rando1 || rando5 == rando1 || rando5 == rando2 || rando5 == rando3 || rando5 == rando4);
//do while used to ensure each objective unique on output

//statement can not be  (r5 = r1 or r2) must be (r5 = r1 or r5 = r2)//
//=,<,> are difdirent from ==,&&,||                                 //
//Similar to math oporates like [(r5 = r1)or(r5 = r2)]              //

}

function objReset()
{
    document.getElementById("incoming").innerHTML = "Transmission Terminated--";
    document.getElementById("ob1").innerHTML = " ";
    document.getElementById("ob2").innerHTML = " ";
    document.getElementById("ob3").innerHTML = " ";
    document.getElementById("ob4").innerHTML = " ";
    document.getElementById("ob5").innerHTML = " ";
    //document.querySelectorAll("#ob1, #ob2, #ob3, #ob4, #ob5").innerHTML = "  "

}


