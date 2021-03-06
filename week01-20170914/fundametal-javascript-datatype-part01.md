# Fundamental JavaScript: Data Types Pt. 01

## 1. Var / Let / Const

**let**: Create a variable in consideration of scopes wrapping around it

**var**: Scopes are not considered.

``` javascript

var a = 10;
a = 12; // The variable can be reassigned.
console.log(a) // 12
let b = 10;
b = 12; // The variable can be reassigned.
console.log(b) // 12


```
**Difference between var and let**

**let** can be seen only in scopes
```javascript
{
  let i=1;
}

for (let i=1; i<=10; i++) {
  console.log(i);
}
console.log(i); // error 
```
**var** is everywhere
```javascript
{
  var i=1;  
}

for (var i=1; i<=10; i++) {
  console.log(i);
}
console.log(i); // print i = 10; 
```
**const**: Create a constant (No assignment later)


``` javascript

const c = 100;
c = 102; // Will produce an error.

```
_In the past, there isn't the keyword 'let'._
_Scopes could be made by using __closures__._
```javascript
(function() {
  var z = 10;
})();
```

## 2. Types in JavaScript
  Imutable(pass by value) 
  * Undefined
  * Boolean (true|false)
  * Number
  * String
 
  Mutable (pass by reference)
  * Object
  * Function
 
check type variable by tyoeof ....

## 3. Truthy and Falsy
Truthy values represent the value __true__ when they appear in boolean expressions.

Falsy values represent the value __false__ when they appear in boolean expressions.

**undefined** is falsy

**0** is falsy

**NaN** is falsy

**Other numbers** are truthy

**Empty String** is falsy

**String with characters** is truthy

**true** is truthy

**false** is falsy

**null** is falsy

_If you are not sure whether a value is **truthy** or **falsy**,
you can use an operator **!!**_.

```javascript
!!0 // result = false
!!20 // result = true
!!NaN // result = false
```
   
## 4. Wrapper objects

```javascript
new Boolean()
new Number()
new String()
new Object()
new Array()
new Function()
// Can add properties to wrapper object

//Example
var n = new Boolean(true);
n.name = 'pond';
console.log(n.name); // {name: "pond", [[PrimitiveValue]]: true}
```

**Primitive values**

```javascript
var n = Boolean(true);
var n = true;
// Can't add properties to a primitive value
```

## 5. Type: Number

```javascript
var m = Number(5);
var m = 5.000;
// integer

var m = 5.001;
// floating point
```
**Limit of Number**
```javascript
Number.MAX_VALUE // 1.7976931348623157e+308
```
**Safe Number**
```javascript
Number.MAX_SAFE_INTEGER // 9007199254740991
```

**_Note 01_:  Number Operation with different types**

_integer + float = float_

_number + string = string_

_number + undefined = NaN_

_number + true = number + 1_

_number + false = number + 0_

_number + function = string_

_number + object = string_

**_NOTE 02_: NaN (Not a Number) Properties**

_NaN is type error_

_NaN is falsy_

```javascript
NaN == false // result = false
NaN == NaN // result = false
NaN === NaN // result = false
```
_*** Can be solved using isNaN(m)_

**_NOTE 03_: Infinity**

```javascript
var q = 1/0;

// q = Infinity, typeof q = number

var q = 1/0.000000000001;

// q isn't Infinity 
```

_Infinity + number = Infinity_

_Infinity + Infinity = Infinity_

_Infinity - Infinity = NaN_

**_NOTE 04_: Decimal and Base number**

```javascript
var a = 5;
a.toFixed(2);

// result = 2.00

var a = 0o11; // Octal
var b = 0b1001; // Binary
var c = 0x9; // Hexadecimal

// result = 9

var a = 17;
a.toString(8)
// result = 21
// To change a decimal Number to Number with different base
// Use -> toString(BASE)
```

## 6. Type: String

**Initialize String**

```javascript
var a = "abc";
var a = 'abc';
var a = `abc`;
var a = `a
b
c`
```
**Convert numbers to strings**
```javascript
6 + ""
"" + 6
//or
var num = 1;
var num2 = 2 ;
var a = `number = ${num}, number2 = ${num2}`
```
**ASCII code**
```javascript
'a'.charCodeAt(0)
// 97 (Single letter to an ASCII code)

String.fromCharCode(97)
// result = 'a' (The other way around)
```

**String functions**

  * indexOf and lastIndexOf 

``` javascript
indexOf(string);
lastIndexOf(string);
```

```javascript
var a ='abcd#f#g#'

a.indexOf('#')
//result = 4;

a.lastIndexOf('#')
//result = 8;
```
**NOTE:**  _If the text is not found, it will return -1._

  * substring

_The first argument is the starting index._
_The second one is the ending index._

``` javascript
substring(startIndex, endIndex);
```

```javascript
var a = 'abcdefgh';

a.substring(0, 5);
// result = 'abcde';

a.substring(5, 0);
// result = 'abcde'; It equals to a.substring(0, 5)

a.substring(-1, 5);
// result = 'abcde'; It equals to a.substring(0, 5)
// JavaScript would automatically convert from negative numbers to zero.

a.substring(-1, -5);
// result = ''; It equals to a.substring(0,0)

a.substring(-5, -1);
// result = ''; It equals to a.substring(0,0)
```
* slice

_The first argument is the starting index._
_The second one is the ending index._

_It's similar to **substring** but arguments managed to be negative number._

```javascript
slice(firstIndex);

slice(firstIndex, secondIndex);
```


```javascript
var a = 'abcdefgh';

a.slice(2);
// result = 'cdefgh'

a.slice(-2);
// result ='fg'

a.slice(0, 5);
// result = 'abcde';

a.slice(5, 0);
// result = '';
// It couldn't make its way to the left.

a.slice(-1, 5);
// result = '';

a.slice(-1, -5);
// result = '';

a.slice(-5, -1);
// result = 'cdef';

```
**Note**
```javascript
// Left indexes
0  1  2  3  4  5  6  7
  a  b  c  d  e  f  g
-7 -6 -5 -4 -3 -2 -1 0
// Right indexes
```
_**slice** is able to cut a string from left to right only._

* substr

_The first argument is the starting index._
_The second one is the length._

```javascript
substr(firstIndex, length);
```
```javascript
var a = 'abcdefgh';
a.substr(1, 5)
// result = "bcdef"

a.substr(-1, 1)
// result = "h"

a.substr(1, -5)
// result = ""

a.substr(-1,-5)
// result = ""

a.substr(-5,-1)
// result = ""
```

* split

_split a string to an array_
```javascript
split(string);
```
```javascript
var a = 'a,b,c,d,e,f';

a.split(',');
// result = ["a", "b", "c", "d", "e", "f"]

a.split('');
// result = ["a", ",", "b", ",", "c", ",", "d", ",", "e", ",", "f"]

a.split('#')
// result = ["a,b,c,d,e,f"]

```

* join

_join an array into a string_
```javascript
Array.join(separator)
```
``` javascript
var a = ["a","b"]
a.join()
//result = 'ab'

a.join('*')
//result = 'a*b' 
```

* trim

_remove whitespaces from both sides of a string_
```javascript
string.trim()
```
``` javascript
var a = "\n \t hello     \n \t"
a.trim()
//result = "hello"
```

## 6. String-to-number conversion shorthands
```javascript
// parseInt
parseInt('5.0000000000034')
// result = 5; type = number

// parseFloat
parseFloat('5.0000000000034')
+'5.0000000000034'
// result = 5.0000000000034; type = number

-'5.0000000000034'
// result = -5.0000000000034; type = number

+'helloworld'
// result = NaN

// As '+' operator can produce a NaN value,
// we are able to use '~~' instead.
~~'helloworld'
// result = 0

~~'5.0000000000034'
// result = 5.0000000000034

```


