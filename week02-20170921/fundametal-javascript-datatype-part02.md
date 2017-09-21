# Fundamental JavaScript: Data Types Pt. 02

## 1. Function

_once type of javascript_

```javascript
var a = function(){};

typeof a;
//result function
```
### declare function


**format 1**

```javascript
function a () { 
  z();
}
```

**format 2**

```javascript
const y = function () { console.log('function'); } 
```

**format 3**

_arrow function_

```javascript
var a = () => { console.log('hello'); } 
a(); // result 'hello'

var a = () => 1;
// return 1 
```
**Note** 
_default return undefined_ 


### Parameter of function

```javascript
var a = function(a) {return a + 1; }

a(1);
// result = 2

// short hand
var a = (a) => a + 1;
var a = a => a + 1;

a(2);
// result = 3 

// more than one parameter , must use parenthesis
var a = (a,b) => a + b;
```
**Note**

_if not declare parameter and use parameter in function, result equal undefined._

```javascript
function b () {
    console.log(a);
}
b();
// result = undefined
```

_use arguments instead of paramters_

```javascript
var a = function()
{ 
    let args = arguments;
    return args[0] + args[1]
}

```
### Synchronous & Asynchronous

* Synchronous

```javascript
function a () {
    console.log('1');
    console.log('2');
    console.log('3');
}

a();
// result
// 1
// 2
// 3

```

* Asynchronous

```javascript
function a () {
    setTimeout(() => {
        console.log('1')
    }, 1000)
    console.log('2')
    console.log('3')
}

a();
// result
// 2
// 3
// 1
```
**Promise**

```javascript
//Bad call asynchronous function
setTimeout(() => {
    console.log('First')
    setTimeout(( )=> {
        console.log('Second')
    }, 1000);
}, 1000);

// result
// First
// Second
```
**resolve by use promise**

_chain function_

```javascript
a().b().c()
```
_promise chain by use then_

**resolve**

_resolve to next then_

**reject**

_reject to skip all then below and to catch_ 

### Create promise

**format 1**

```javascript
new Promise( (resolve, reject) => {

});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First');
        resolve();
    },1000);

}).then(() => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Second');
        resolve();
    },1000);
}));

// result
// First
// Second

```
**format 2**

```javascript
var a = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('first');
        resolve();
    }, 1000)
});

a().then(a).then(a).then(a);

// create generator

var a = (text) => {
    return () => new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log(`${text} second.`);
         resolve();
    }, 1000)
});}

a('0')().then(a('First')).then(a('Second')).then(a('Third'));
```

**format 3**

```javascript
//async await

function a (text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${text} second.`);
            resolve(new Date());

        }, 1000)
    })
}

async function b () {
    let d;
    d = await a('First')
    console.log(d)
    d = await a('Second')
    console.log(d)
    d = await a('Third')
    console.log(d)

}

b();

// result
// First second.
// Thu Sep 21 2017 20:36:22 GMT+0700 (SE Asia Standard Time)
// Second second.
// Thu Sep 21 2017 20:36:23 GMT+0700 (SE Asia Standard Time)
// Third second.
// Thu Sep 21 2017 20:36:24 GMT+0700 (SE Asia Standard Time)

```
**Use reject**

```javascript
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First')
        reject() 
        // or 
        //throw new Error('Test error')
    }, 1000)

}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Second')
            resolve()

        }, 1000)
})}).catch((error) => {
    console.log('reject')
});

// result
// First
// reject

```
### async && await

```javascript

async function b (text) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(text)
            resolve();

        }, 1000);
    })
}

async function a () {
    await b (1);
    await b (2);
    await b (3);
}

// result
// 1
// 2
// 3
``` 

**function object**
```javascript
function A () {
    this.name = 'pond'
    //constructors
}
new A();
a.name 
// result pond

```

**prototype**

```javascript
function A () {
    this.name = 'pond'
    //constructors
}

A.prototype.sayHello = function() {
    console.log(`hello ${this.name}`)
    //this.name use variable of class
}

var a = new A();
a.sayHello()
// result
// hello pond
 

A.prototype.sayHello = () => {
    console.log(`hello ${this.name}`)
    //this.name use variable of class
}

// result
// hello
// not print this.name (pond)

```
**Note**
_if use this , must declare function () not arrow function()_


**inherit**

```javascript
function A(name) {
    this.name = name;

}

A.prototype.sayHello = function () {
    console.log(`hello ${this.name}`)
}

function Cat(){
    A.apply(this, ['Cat']);
}

var cat = new Cat();
cat.name 
//result cat

```
**class in function**

```javascript

Cat.prototype = new A();
var cat = new Cat();
cat.sayHello();

```
**call function with apply and call**

```javascript

// example 1

function a (name) { 
    console.log('Hello ' + name)
}
a('aaa'); 
// result Hello aaa

a.apply(null, ['pond']);
// result Hello pond

// example 2

var b = {};
function a (name) { 
    this.name = name;
} 
a.apply(b, ['pond']);
a.call(null, 'pond');

// b = {name: 'pond'} 


// example 3
function a (name, i) {
    console.log('Hello ' + name, i);

}

a('pond',1)
a.call(null,'pond',1)
a.apply(null,['pond',1]);

// result Hello pond 1
```

**note**
_function is truthy_



## 2. Object

**Create object**

_Object is truthy_

_null is falsy_

_null is type object_

**create object**
```javascript
var a = { name: 'pond'}

var a = new Object();

var a = new A();
```

**Access property in object**
```javascript
var a = {name: 'pond', id: 1}
a.name 
// or
a[name]

// loop object
for (let key in a){
    console.log(key, a[key]);
}
// result 
// name pond
// id 1

// use Object.key()

Object.key(a); // return arrays

let keys = Object.keys(a);
for (let i = 0; i< keys.length; i++){
    console.log(keys[i], a[keys[i]])
}

// result 
// name pond
// id 1



//add property
a.age = 100

//delete property
delete a.age;

```

**get set**
```javascript
var a = {
    get hello(){
        return 'My name is '+ this.name;
    }
    
};

a.name = 'pond';
a.hello

a.name = 'best';
a.hello


```

**function in object**
```javascript
var a = {
    a: function(){
            console.log('hello' + this.name)

    }
}; 

a.name = 'pond'
a.a();
// result hello pond;

```

**copy object**

```javascript
var a = {name: 'pond'}
var b = {name: 'pond'};

a === b;
//false

b = a;
a === b;
//true


//cloning
b = Object.assign({}, a);

a === b
//false

//Spread operator
var a = {name: 'pond'}

var b = {...a};

var b = {...a, age: 100};

// {name : 'pond', age: 100}

```

**toString()**

```javascript
var a = {
    toString: function(){
        return 'A';
    }

}

a + "";
// result A

```

```javascript
var a = {name : 'pond'};
JSON.stringify(a);

var a = {
    get a() {
        return 'A'
    }
}

Json.stringify(a)

var a = {
    get a() {
        return 'A' + this.name
    }
}

Json.stringify(a)
a.name = 'pond'

Json.stringify(a)


JSON.parse('{a:"hello"}')
{a: "hello"}

```


```javascript
document.documentElement.style.background = 'red'

//Object to String 
// many nested is don't

window.alert('yo');
```


## 3. Arrays

```javascript
var a = [1,2,3,4,5,6];

new Array(1,2,3)


//size
a.length

//push
a.push(7)

//pop
a.pop();

```

**change**
```javascript

//push last
a.push(7)
//pop last
a.pop()


a.shift()
// pop first
a.unshift(1)
//push first


```

**unchange**

```javascript
a.concat([7])

```

**unchange**
```javascript
a.forEach((item,index,array) => {console.log(index, item);})
// forEach not return array

map // change item to new item
a.map(item=> item + '');
// same size and change value in array , unchange first array
a.map(item=> 'hello '+item);
// able to chain 

a.map(item => item*item).forEach(item => console.log('*', item));

filter // filter array in condition , able to chain

a = [1,2,3,4,5,6]
a.filter(item => item % 2 === 1);
a.filter(item = > { let a = item % 2 ===1; return a;});

var a = [null, 'a', 'b', null];
a.filter(item => !!item);


//sort //change array
var a = [2,4,1,9,3]
a.sort();

//Sperad copy array and sort
var a = [2,4,1,9,3]
[...a].sort();

// input condition
[...a].sort((i1,i2) => i1-i2 );
[...a].sort((i1,i2) => i2-i1 );


//not care sign
var a = [-2,-4,-1,-9,-3,2,4,1,9,3];
[...a].sort((i1,i2) => Math.abs(i1)-Math.abs(i2))


//slice , unchange array
a.slice(0,1)

a.slice(0,-1)


//splice , change array , get , get out item in array

//get out item
a.splice(0, 1)

//input item
a.splice(4, 0, 9999)

//indexOf
a.indexOf(-9);

a = [{name: 'a'},{name: 'b'}]
a.indexOf({name: 'b'})
//not found object

//use filter

a.indexOf(a.filter(item => item.name === 'b')[0]);


// every

a =  [1,2,3,4,5,6]

a.every(item => item > 0);
//true

a = [1,2,3,4,5,6,-1]
a.every(item => item > 0);
//false


// some

a.some(item => item < 0);
//true

a.some(item => item ==0);
//false



a = [1,2,3,4,5,6];

[1,2,3,4,5,6].push(9998, 9997 ,9996)
[1,2,3,4,5,6].unshift(9998, 9997 ,9996)


[1,2,3,4,5,6].concat([9998,9997,9996])

var a = [1,2,3,4,5,6];

Array.prototype.push.applay(a,[9998,9997,9996]);
```

_array is truthy_

