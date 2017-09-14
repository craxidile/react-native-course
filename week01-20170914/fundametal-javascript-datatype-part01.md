```javascript
//ep 1 : var , let ,const

const c = 100;
c = 102;
----------------
let
var
var a = 10;
a=12;
console.log(a) // 12

-----no scope-----
{var b = 12; }

-----scope-------
{let f = 13; }

for() let ok ------> scope
for() var no ok ----> unscope


------closure----
(function(){
    var z = 10;

})();

----------------


// ep 2: operator 

+,-,*,//

typeof javascript

- undefined
- boolean (true,flase)
- number  
- string
- object {}
- function

*warning 'undefined'*

//ep 3 : truthly and falsy

empty string ('') => falsy

boolean 

var m = true | false;

&& || 

function example(){
    var m = 0;
    if( m >0){
        console.log('yes');
    }else{
        console.log('no');
    }
}

function exampleShorthand(){
   // m > 0 ? console.log('yes') : console.log('no');
   // m > 0 && console.log('yes);
    //m <= 0 && console.log('yes');
    //m <= 0 && m == 0 && console.log('yo');
    //!m && console.log('yo');


    

    //m == 0 || console.log('yo');
    //m || console.log('yo');


}

undefined = falsy 
!!undefined

//

//new or not new 

var n = new Boolean(true)
n.name = 'pond';

new Boolean () <- wrapper object
Boolean() | true | false <- primitive type

// ---- wrapper object ------
new String()
new Object
new Array()

//-------- Number ----------

var m  = Number(5);
var m = 5.000;
// integer

var m = 5.001;
// floating point

//limit Number.MAX_VALUE
//safe Number.MAX_SAFE_INTEGER

//integer + floating = floating

// 1 + undefined = NaN
// NaN --> type error
// NaN --> falsy
// NaN == false ----> false
// NaN == NaN ----> false
// solve by isNaN(m) ***********

var q = 1/0;
// q ----> Infinity , tyoeof q ---> number

var q = 1/0.000000000001;
// q ----> not infinity 

// decimal 

var a = 5;
a.toFixed(20);


//0o11 --> 9 base number = 8
//0b1010101 --> binary
// 0b 0o 0x 

var a = 17;
a.toString(16);

// number to base number use toString(baseNumber)

//-----------String-------------------

var a = "aaa";
var a = 'aaa';
var a = `aaa`;

//change number to string 
// 6 + ""

// ``
let num = 1;
let num2 = 2;

var a = `number = ${num} , number2 = ${num2}`;

//ascii code 
'a'.charCodeAt(0)
//ascii code to String 
String.fromCharCode(99)

// function of String

var a = 'asdsadasd#asdsad'
a.indexOf('#')
a.lastIndexOf('#')

// if not found retur -1 


var a = 'hellodsadsad'
a.subString(0,5);

// **** start index , end index ****


//parseInt , parseFloat;
+'5.0000000000034' 

//result ---> 5.0000000000034 


// ~~

// if not number 
 
//~~'2222222222222' --------> 22222222222
//~~'dasdasda' ----------> 0

// Split 

var a = 'a,b,c,d,e,f';
a.split(',')

//result --- > array

var a ='abcd'
a.split(',');
//result --- > ['abcd']
 
//join 

//slice 

var a  = 'abcdefg'
a.slice(0,-1);
a.slice(0, 5);
a.trim();

//----- function()-------

function a(){


}

typeof a -----> function typex

//format function 

var a = function() { bbbbb = 2 } ;

var a = () => { bbbb = 2};

var a = new Function();
var a = new Function('console.log("hello"));

a();

function a (){
    //arguments[0]
    
}

//format 



```

