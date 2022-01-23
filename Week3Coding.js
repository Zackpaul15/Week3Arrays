
var age = [3, 9, 23, 64, 2, 8, 28, 94];

// Question 1.A
let x = age[0]
let y = age[age.length - 1]

console.log(y-x);
//

// Question 1.B
age.push(24)

console.log(y-x);
//

// Question 1.C
var sum = 0
for(i = 0; i < age.length; i++){
    sum += age[i]
}
console.log(sum/age.length);
//



var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Question 2.A
let Lengths = names.map(function(x){
    return x.length
});
console.log(Lengths);
 
let total = Lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(total);

console.log(total / Lengths.length);
//

// Question 2.B
['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'].join(' ');
console.log(names.join(' '));
//

// Question 2 & 3
// To find the first and last element of a array, you can reference each using its number [0] (first), and [6](last) 
// the last number depends on the length of the array
// also you could use .length - 1 to find the last element in a array.

// Question 5
let nameLengths = names.map(function(x){
        return x.length
    });

console.log(nameLengths)
//

// Question 6
let sum2 = 0;
for(let i = 0; i < nameLengths.length; i++){
    sum2 += nameLengths[i];

}
console.log(sum2);
//

// Question 7
function myFunction(word,n){
    
    let multi = '';

    for(i = 0; i < n; i++){
        multi += word
    }
    console.log(multi)
}
myFunction('Zack',10)
//

//Question 8
function nameFunction(firstName, lastName){
    console.log(firstName +' '+ lastName);

};
nameFunction('Zack', 'Brown')
//

//Question 9
let array1 = [1,2,5,7,8,9]

function arraysum(array){

    let sum4 = 0

    for(i = 0; i < array.length; i++){
        sum4 += array[i]
        
    }
    console.log(sum4 > 100)
}
arraysum(array1)
//

//Question 10
let array2 = [2,7,11,24,35,85];

function arrayfunction(array){
    var sum3 = 0;
    
    for(i = 0; i < array.length; i++){
        sum3 += array[i]
    }
    console.log(sum3 / array.length)
}
arrayfunction(array2)

//Question 11

let array3 = [24,26,27,30]
let array4 = [12,16,20,40]

function doubleArray(array, arrayy){
    let asum1 = 0
    let asum2 = 0

    for(i = 0; i < array.length; i++){
     asum1 += array[i]
       
    }
    for(i = 0; i < arrayy.length; i++){
     asum2 += arrayy[i]
}
console.log(asum1 / array.length > asum2 / arrayy.length)
}

doubleArray(array3, array4)
//

//Question 12
function willBuyDrink(isHotOutside, moneyInPocket){
if(isHotOutside = true && moneyInPocket > 10.50){
    console.log(true);}

else if(isHotOutside = false && moneyInPocket < 10.50){
    console.log(false);
}
};

willBuyDrink(true, 10.65)
//

//Question 13
function cpuTest(cpuTemp, threshold){
    if(cpuTemp >= threshold){
        console.log('Danger Potential Damage!')
    }
    else if(cpuTemp < threshold){
        console.log('Temp is good!')};

};
cpuTest(102, 10)
// the purpose of this Function for to recieve the CPU temp and the manafacture threshold for the temp
// and will pring a warning if it exceeds said threshold.
//I created this because i love building computers and tempurtures of parts are something i keep a eye on!