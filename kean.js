
var kean = {
    name : 'Kean',
    yearOfBirth : 1989,
    calculateAge : function (){
        console.log(2020 - this.yearOfBirth);

        function testFunc (){
            console.log(this)
        }

        testFunc();
    }
}
kean.calculateAge();

var cher = {
    name : 'Cherry',
    yearOfBirth : 1988
}
cher.calculateAge = kean.calculateAge;

cher.calculateAge();



"use strict";

// CODING CHALLENGE 5
// var arr = [1,2,3];
// for (var i = 0; i < arr.length; i++) {
//     console.log('output : ', arr[i]);
// }

var john = {
    fullname : 'John Smith',
    bills : [124, 48, 268, 180, 42],
    tips : [],
    paidBillTips : [],
    calcTip : function (){
        var tip = 0;
        var totalPaid = 0;
        var sum = 0;
        for (var i in this.bills) {
            var bill = this.bills[i];
            if (bill < 50) {
                tip = bill * 0.2;
                this.tips.push(tip);

                totalPaid = bill + tip;
                this.paidBillTips.push(totalPaid);
            } else if(bill > 50 && bill < 200) {
                tip = bill * 0.15;
                this.tips.push(tip);

                totalPaid = bill + tip;
                this.paidBillTips.push(totalPaid);
            } else {
                tip = bill * 0.10;
                this.tips.push(tip);

                totalPaid = bill + tip;
                this.paidBillTips.push(totalPaid);
            }
        }
    }
}

var mark = {
    fullname : 'Mark Army',
    bills : [77, 375, 110, 45],
    tips : [],
    paidBillTips : [],
    calcTip : function (){
        var tip = 0;
        var totalPaid = 0;
        var sum = 0;
        for (var i in this.bills) {
            var bill = this.bills[i];
            if (bill < 100) {
                tip = bill * 0.2;
                this.tips.push(tip);

                totalPaid = bill + tip;
                this.paidBillTips.push(totalPaid);
            } else if(bill > 100 && bill < 300) {
                tip = bill * 0.10;
                this.tips.push(tip);

                totalPaid = bill + tip;
                this.paidBillTips.push(totalPaid);
            } else {
                tip = bill * 0.25;
                this.tips.push(tip);

                totalPaid = bill + tip;
                this.paidBillTips.push(totalPaid);
            }
        }
    }
}

john.calcTip();
john.average = calcAvg(john.tips);

mark.calcTip();
mark.average = calcAvg(mark.tips);

function calcAvg (tips){
    var sum = 0;
    var avg;

    for (var i in tips) {
        sum += tips[i];
        avg = sum / tips.length;
    }
    return avg;
}

console.log(john, mark);

if (john.average > mark.average){
    console.log(john.fullname+' is the Highest tips on Avg : ', john.average);
} else if(mark.average > john.average){
    console.log(mark.fullname+' is the Highest tips on Avg : ', mark.average);
} else {
    console.log('its a tie!');
}


/* var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}

for (var i = 0; i <  john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
} */

/* // CODING CHALLENGE 4

var mark = {
    fullname : 'Mark Spencer',
    mass : 78, // kg
    height : 1.69, // in meter 5.5ft
    calcBMI : function (){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var john = new Object();
john.fullname = 'John Cena';
john.mass = 92;
john.height = 1.95; //6.3 ft
john.calcBMI = function (){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}

if(mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullname + " has the highest BMI of : " + mark.bmi);
} else if (john.bmi > mark.bmi){
    console.log(john.fullname + " has the highest BMI of : " + john.bmi);
} else {
    console.log(mark.fullname +' & '+ john.fullname + ' has same BMI\s');
}
 */

/* var id = {
    firstName : 'Kean',
    lastName : 'Duque',
    age : 30,
    isMarried : true,
    job : 'Programmer',
    yearOfBirth : 1989,
    hobbies : ['basketball', 'beatboxing', 'coding']

}
console.log(id);

var egg = new Object ();
egg.color = 'red';
egg.size = 'medium';
egg.type = 'chicken';
egg.age = 2;
egg.isAlive = true;

console.log(egg); */


/*Coding Challenge 3*/
/* var bills = [124, 48, 268];

var tipCalculator = function (bill) {
    var tip, totalBillTip;
    var arrTips = [];
    var arrBillTip = [];

    for (var i in bill){
        if (bill[i] < 50){
            tip = bill[i] * 0.2;
            totalBillTip = bill[i] + tip;

            arrTips.push(tip.toFixed(2));
            arrBillTip.push(totalBillTip);
        } else if(bill[i] >= 50 && bill[i] < 200) {
            tip = bill[i] * 0.15;
            totalBillTip = bill[i] + tip;

            arrTips.push(tip.toFixed(2));
            arrBillTip.push(totalBillTip);
        } else if (bill[i] >= 200) {
            tip = bill[i] * 0.10;
            totalBillTip = bill[i] + tip;

            arrTips.push(tip.toFixed(2));
            arrBillTip.push(totalBillTip);
        }
    }
    console.log(arrTips, arrBillTip);
}

tipCalculator(bills); */

/* var computeTip = function (tip) {

} */

/* var whatToDo = function (job, firstName) {
    switch (job) {
        case 'programmer' :
            return firstName + ' love to code';
            break;
        case 'pilot' :
            return firstName + ' run and fly airplane';
            break;
        case 'chef' :
            return firstName + ' love to cook';
            break;
        default :
            return firstName + ' is retired!';
    }
}

console.log(whatToDo('programmer', 'kean'));
console.log(whatToDo('pilot', 'kobe'));
console.log(whatToDo('chef', 'lagro'));
console.log(whatToDo('retired', 'yamashita'));

 */
/* CODING CHallenge 2
var johnTeam = [89, 120, 103];
var mikeTeam = [116, 94, 123];
var maryTeam = [97, 134, 105];

function computeAverage (arr) {
    var sum = 0;
    var avg = 0;

    for(var i in arr){
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
var johnTeamAvg = computeAverage(johnTeam);
var mikeTeamAvg = computeAverage(mikeTeam);
var maryTeamAvg = computeAverage(maryTeam);

if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
    console.log('johnTeam has the highest average of score');
    console.log('with the average of : ', johnTeamAvg);
} else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
    console.log('mikeTeamAvg has the highest average of score');
    console.log('with the average of : ', mikeTeamAvg);
} else if (maryTeamAvg > mikeTeamAvg && maryTeamAvg > johnTeamAvg) {
    console.log('maryTeamAvg has the highest average of score');
    console.log('with the average of : ', maryTeamAvg);
}else if (mikeTeamAvg === johnTeamAvg && maryTeamAvg === johnTeamAvg && mikeTeamAvg === maryTeamAvg) {
    console.log('both teams has same Average its a DRAW');
    console.log('the Draw averages are : ', johnTeamAvg + ' ' + mikeTeamAvg + ' ' + maryTeamAvg );
} else {
    console.log('no score');
} */


// CODING CHALLENGE 1

/* var markMass = 78, //kg
    markHeight = 1.69; //meter
var johnMass = 92, //kg
    johnHeight = 1.95; //meter

var markBMI, johnBMI;
markBMI = markMass / (markHeight * markHeight); //0.048
johnBMI = johnMass / (johnHeight * johnHeight); //0.043

console.log('mark BMI is : ', markBMI);
console.log('john BMI is : ', johnBMI);

var compareBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\s? ', compareBMI);
 */

/* var arr = [1,2,5];
var sum = 0;

for(var i in arr) {
    sum += arr[i];
}
console.log(sum);

 */
//type of coercion
// var height;
// height = 0;

// if (height || height === 0){
//     console.log('variable is defined');
// } else {
//     console.log('variable has not been defined');
// }