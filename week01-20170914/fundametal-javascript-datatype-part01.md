# Fundamental JavaScript: Data Types Pt. 01

## 1. Var / Let / Const
**var**: Create a variable without consideration of scopes wrapping around it

**let**: Create a variable with consideration of scopes wrapping around it

``` javascript

var a = 10;
a = 12; // The variable can be reassigned.
console.log(a) // 12
let b = 10;
b = 12;// The variable can be reassigned.
console.log(b) //12


```
**diffrence between var and let**

**let** in scope
```javascript
for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
}
console.log(i); //error 
```
**var** not in scope
```javascript
for(var i = 1 ; i <= 10 ; i++){
    console.log(i);
}
console.log(i); // print i = 10; 
```
**const**: Create a constant (No assignment later)


``` javascript

const c = 100;
c = 102; // Will produces an error.

```
_In last peroid , there isn't let_ 

_use closure style_
```javascript
(function(){
    var z = 10;

})();
```

## 2. Type of javascript

  * undefined
  * boolean(true,false)
  * number
  * string
  * object {}
  * function

## 3. truthly and falsy

**undefined** is falsy

**0** is falsy

**NaN** is falsy

**other number** is truthly

**Empty String** is falsy

**String** is truthly

**true** is truthly

**false** is falsy

**null** is falsy
   
**Wrapper object**

```javascript
new String()
new Object
new Array()
// Can add properties to wrapper object

//Example
var n = new Boolean(true);
n.name = 'pond';
console.log(n.name); //pond
```

**Primitive type**

```javascript
var n = Boolean() 
// Can't add properties to primitive type
```

## 4. Type Number

```javascript
var m  = Number(5);
var m = 5.000;
// integer

var m = 5.001;
// floating point
```
**Limit of Number**
```javascript
Number.MAX_VALUE //1.7976931348623157e+308
```
**Safe Number**
```javascript
Number.MAX_SAFE_INTEGER //9007199254740991
```

**NOTES 01:  Number Operation with different types**

_integer + float = float_

_number + String = String_

_number + undefined = NaN_

_number + true = number + 1_

_number + false = number + 0_

_number + function = String_

_number + Object = String_

**NOTES 02: NaN**

_NaN is type error_

_NaN is falsy_

```javascript
NaN == false // result = false
NaN == NaN // result = false
```
_*** Solve by use isNaN(m)_

**NOTES 03: Infinity**

```javascript
var q = 1 / 0;

//q = Infinity , typeof q = number

var q = 1/0.000000000001;

// q isn't Infinity 
```

_Infinity + Infinity = Infinity_

_Infinity - Infinity = NaN_

**NOTES 04: Decimal and Base number**

```javascript
var a = 5;
a.toFixed(2);

//result = 2.00

var a = 0o11;
var b = 0b1001;
var c = 0x9;

//result = 9

var a = 17;
a.toString(8)
//result = 21
//Number to Number base use toString(Base number)
```

## 5. Type String

**Initialize String**

```javascript
var a = "abc";
var a = 'abc';
var a = `abc`;
```
**Parse Number to String**
```javascript
6 + ""
//or
var num = 1;
var num2 =2 ;
var a = `number = ${num}, number2 = ${num2}`
```
**Ascii code**
```javascript
'a'.charCodeAt(0)
// char to ascii code

String.fromCharCode(97)
// result = 'a' ascii code to String
```

**Function of String**

  * IndexOf and lastIndexOf 

```javascript
var a ='abcd#fg'
a.indexOf('#')
//result = 
a.lastIndexOf('#')
```

``` javascript

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
```

