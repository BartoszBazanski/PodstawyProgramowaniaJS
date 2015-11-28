/**
 * Created by bartosz on 21.11.15.
 */
/*console.log("Dziala 1!"); // Comment text
console.log("Dziala 2!");
console.log("Dziala 3!");

var number = 10;
console.log(number);

var text = "napis";
console.log(text);

var bool = true;
console.log(bool);

var bool2 = false;
console.log(bool2);

var nothing = null;
console.log(nothing);

number = 3;

if(number > 5){
    console.log("Number jest wieksze od 5");
}
else{
    console.log("Number jest mniejsze od 5");
}*/

/*Rozwiazanie zadania 4


function maxOf(number1, number2, number3){
    if(number1 > number2){
        if(number1 > number3){
            console.log(number1);
        }
        else{
            console.log(number3);
        }
    }
    else{
        if(number2 > number3){
            console.log(number2);
        }
        else{
            console.log(number3);
        }
    }
}
maxOf(12, 3, 5);
maxOf(15, 55, -5);
maxOf(16,1505,153268);
 */
/*Rozwiazanie zadania 5

var ocena_z_testu = 100;

if(0 <= ocena_z_testu && ocena_z_testu <= 39){
    console.log("Ocena niedostateczna");
}
else if(40 <= ocena_z_testu && ocena_z_testu <= 54){
    console.log("Ocena dopuszczalna");
}
else if(55 <= ocena_z_testu && ocena_z_testu <= 69){
    console.log("Ocena dostateczna");
}
else if(70 <= ocena_z_testu && ocena_z_testu <= 84){
    console.log("Ocena dobra");
}
else if(88 <= ocena_z_testu && ocena_z_testu <= 98){
    console.log("Ocena bardzo dobra");
}
else if(99 <= ocena_z_testu && ocena_z_testu <= 100) {
    console.log("Ocena celujaca");
}
else {
    console.log("Error");
}*/

/*Rozwiazanie zadania 6

var x = 10;
var silnia = 1;

for(i=1; i<=x; i++){
    silnia = silnia*i;
}
console.log("Silnia z " + x + " rowna sie " + silnia);
var j = 1;
silnia = 1;
while(j <= x){
    silnia = silnia*j;
    j++;
}
console.log("Silnia z " + x + " rowna sie " + silnia);
k = 0;
while(k < 10){
    console.log("Wartosc k =" + k);
    k++;
}
console.log("Koniec while");
*/

/*Rozwiązanie zadania 7

var x = 10;
var y = 5;

var suma_przedzialow = 0;

if(x > y){
    for(var l = 0; l <= (x-y); l++){
        suma_przedzialow = suma_przedzialow + y + l;
    }
}
else if(x == y){
    console.log("Error");
}
else if(x < y){
    for(var l = 0; l <= (y-x); l++){
        suma_przedzialow = suma_przedzialow + x + l;
    }
}
console.log("Suma przedzialow = " + suma_przedzialow);
*/

/*Rozwiazanie zadania 8

var n = 8;
var line = "";
for(var j = 0; j < n; j++){
    for(var i = 0; i < n; i++){
        line = line + "* ";
    }
    console.log(line);
    line = "";
}*/

/*Rozwiazanie zadania 9

var m = 15;
var wzorek2 = "* ";

for(i = 1; i <= m; i++){
    console.log(wzorek2);
    wzorek2 = wzorek2 + "* ";
}*/
/* Rozwiazanie zadania 10

var numer_wyliczanki = 10;
var nowy_wzorek = "";
for(var i = 1; i <= numer_wyliczanki; i++){
    for(var j = 1; j <= numer_wyliczanki; j++){
        if(j <= i){
            nowy_wzorek = nowy_wzorek + "*";
        }
        else{
            nowy_wzorek = nowy_wzorek + j;
        }
    }
    console.log(nowy_wzorek);
    nowy_wzorek = "";
}
for(var i = numer_wyliczanki; i >= 0; i = i - 1){
    for(var j = 1; j <= numer_wyliczanki; j++){
        if(j <= i){
            nowy_wzorek = nowy_wzorek + "*";
        }
        else{
            nowy_wzorek = nowy_wzorek + j;
        }
    }
    console.log(nowy_wzorek);
    nowy_wzorek = "";
}*/


/*
for(var k = 0; k <= 10; k++){
    for(var l = 0; l <= 10; l++){
        console.log("Wartosc k = " + k + ", wartosc l = " + l);
    }
}*/

/* Rozwiazanie zadania 11

var zmienna = 10;

for(var i = 0; i <= zmienna; i++){
    if(i % 2 == 0){
        console.log(i + " - parzysta");
    }
    else{
        console.log(i + " - nieparzysta");
    }
}
 */
/* Rozwiazanie zadania 12

var zmienna = 10;
var wynik_mnozenia;
var rzad_tabliczki_mnozenia = "";
for(var i = 1; i <= zmienna; i++){
    for(var j = 1; j <= zmienna; j++){
        wynik_mnozenia = i * j;
        rzad_tabliczki_mnozenia = rzad_tabliczki_mnozenia + i + " * " + j + " = " + wynik_mnozenia + "      ";
    }
    console.log(rzad_tabliczki_mnozenia);
    rzad_tabliczki_mnozenia = "";
}*/

/* Rozwiazanie zadania 13

var liczba_iteracji = 1000000;
var liczbaPI = 0;
for(var i = 0; i < liczba_iteracji; i++){
    if(i % 2 == 0) {
        liczbaPI = liczbaPI + 4 * (1 / (1 + 2 * i)) * (1);
    }
    else {
        liczbaPI = liczbaPI + 4 * (1 / (1 + 2 * i)) * (-1);
    }
}
console.log(liczbaPI);
*/

/* Rozwiazanie zadania 14

function FooBar(number){
    var ciagFooBar = "";
    for(var i = 1; i <= number; i++){
        if(i % 3 == 0 && i % 5 == 0){
            ciagFooBar = ciagFooBar + "FOOBAR";
        }
        else if(i % 3 == 0){
            ciagFooBar = ciagFooBar + "Foo";
        }
        else if(i % 5 == 0){
            ciagFooBar = ciagFooBar + "Bar";
        }
        else {
            ciagFooBar = ciagFooBar + i;
        }
    }
    console.log(ciagFooBar);
}
FooBar(30);
*/

/* Rozwiazanie zadania 15


function fibonacciSequence(number){
    var sequenceArray = [];
    var sequence = "";
    for(var i = 0; i < number; i++){
        if(i == 0){
            sequenceArray.push(0);
            sequence = sequence + sequenceArray[0] + " ";
        }
        else if (i == 1){
            sequenceArray.push(1);
            sequence = sequence + sequenceArray[1] + " ";
        }
        else {
            sequenceArray.push(sequenceArray[i-2] + sequenceArray[i-1]);
            sequence = sequence + sequenceArray[i] + " ";
        }
    }
    console.log(sequence);
}
fibonacciSequence(20);
*/
/* Rozwiazanie zadania 16
function powerTo(base, power){
    var result = 1;
    if(power == 0){
        result = 1;
    }
    else if(power > 0){
        for(var i = 1; i <= power; i++){
            result = result * base;
        }
    }
    else if(power < 0){
        for(var j = 1; j <= (-power); j++){
            result = result * 1 / base;
        }
    }
    console.log(base + " do potegi " + power + " rowna sie " + result);
}
powerTo(8, 10);
*/
/* Rozwiazanie zadania 17

var isFirstNumber = 11;
function firstNumberCheck(number){
    for(var i = 2; i < number; i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}
console.log("Czy " + isFirstNumber + " jest liczba pierwsza? --> " + firstNumberCheck(isFirstNumber));
 */
/* Rozwiazanie zadania 18

function losowanieLiczby(number){
    if(number < 0 || number > 20){
        return console.log("Wybrales liczbe nie z zakresu (0-20)");
    }
    var i = 0;
    var wyniklosowania;
    while(wyniklosowania != number){
        wyniklosowania = Math.floor(Math.random() * 20);
        i++;
    }
    console.log("Twoja liczba zostala wylosowana! Gratulacje!");
    console.log("Liczba losowan: " + i);
}
losowanieLiczby(10);
*/
/* Rozwiazanie zadania 19

function fiboBezRekurencji(numer){
    var fibo1 = 0;
    var fibo2 = 1;
    var fiboSequence = "";
    if(numer == 1){
        fiboSequence = 0 + " ";
    }
    else if(numer == 2){
        fiboSequence = 0 + " " + 1 + " ";
    }
    else{
        fiboSequence = 0 + " " + 1 + " ";
        for(var i = 2; i <= numer; i++){
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
            fiboSequence = fiboSequence + fibo2 + " ";
        }
    }
    console.log(fiboSequence);
}
fiboBezRekurencji(20);
function fiboInFibo(number){
    if(number == 0 || number == 1){
        return number;
    }
    else if(number >= 2){
        return fiboInFibo(number - 2) + fiboInFibo(number - 1);
    }
}
function printFibo(number){
    var sequence = "";
    for(var i = 0; i <= number; i++){
        sequence = sequence + fiboInFibo(i) + " ";
    }
    console.log(sequence);
}
printFibo(20);
 */
/* Rozwiazanie zadania 20

function myFactorial(number){
    var factorial = 1;
    for(var i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
function myPowerTo(base, power){
    var resultOfPower = 1;
    if(power == 0){
        return 1;
    }
    for(var j = 1; j <= power; j++){
        resultOfPower = resultOfPower * base;
    }
    return resultOfPower;
}
console.log(myPowerTo(2, 2));
function mySin(input, approximation){
    var sinOf = 0;
    for(var k = 0; k < approximation; k++){
        sinOf = sinOf + myPowerTo(-1, k) * myPowerTo(input, 2*k+1) / myFactorial(2*k+1);
    }
    return sinOf;
}
console.log(mySin(Math.PI/6, 100));
function myCos(input, approximation){
    var cosOf = 0;
    for(var l = 0; l < approximation; l++){
        cosOf = cosOf + myPowerTo(-1, l) * myPowerTo(input, 2*l) / myFactorial(2*l);
    }
    return cosOf;
}
console.log(myCos(Math.PI/3, 100));
 */
/* Rozwiazanie zadania 21

function perfectOrNot(number){
    for(var n = 1; n <= number; n++){
        var sumOfDenominators = 0;
        for(var m = 1; m < n; m++){
            if(n % m == 0){
                sumOfDenominators = sumOfDenominators + m;
            }
        }
        if(sumOfDenominators == n){
            console.log("Liczba " + n + " jest doskonala.");
        }
        else if(sumOfDenominators < n){
            console.log("Liczba " + n + " jest niekompletna.");
        }
        else {
            console.log("Liczba " + n + " nie jest ani doskonala ani niekompletna.");
        }
    }
}
perfectOrNot(496);
*/