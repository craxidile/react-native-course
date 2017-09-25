# Fundamental JavaScript: Data Types Pt. 03



## Add on

**Array reduce**

```javascript
var a = [1, 2, 3, 4, 5, 6]

a.reduce((i1, i2) => i1 + i2, 0);

// initial value i1 = 0
// result 21

a.reduce((i1, i2) => i2 > i1 ? i2 : i1, 0);
// result 6
// max value

a.reduce((i1, i2) => i2 < i1 ? i2 : i1, 0);
// result 0
// min value

a.reduce((i1, i2) => i2 > i1 ? i2 : i1, Number.MAX_SAFE_INTEGER);
// result 9007199254740991

a.reduce((i1, i2) => i2 > i1 ? i2 : i1, Number.MIN_SAFE_INTEGER);
// result 6

a.reduce((i1, i2) => i1 + i2 , '');
// result "123456"
```

**Object (Destructuring)**

```javascript
//spread operator
var a = {name: 'pond'};
var b = {...a, id: 1};

var name = 'pond';
var b = {name};
// {name: 'pond'}

var age = 100;
var b = {name, age};
var b = {name, age, country:'Thailand'};
// {name: 'pond', age:100 ,country: "Thailand"}



var a = {gender: 'male', skinColor: 'dark'};
var z = a.gender;
var {gender, skinColor} = a;
// var gender = 'male'
// var skinColor = 'dark'


function a ({name}){ console.log(name);}
var b = {name: 'best'};
a(b)
// result best

```

**function to class**
```javascript
function A() {this.name = 'pond';} // contructor
A();
var a = new A();
a.name;
// "pond"

A.prototype.id = 3;
a.id
// result a.id = 3

a.hasOwnProperty('id');
// false
// because id from prototype;

a.id = 999
a.hasOwnProperty('id');
//true

a.id
//result 3
//property from prototype is permanant



Object.create();
// property from class template insert to prototype
var fruit = {name: 'Grapes', colour: 'purple'}
var grapes  = Object.create(fruit);
// result {}
//grapes.name // Grapes



//beware undefined, null, NAN, ---> initial value in prototype
var Person = {firstName: '', lastName: ''}; // template

var pond = Object.create(Person);
pond.firstName =  'Chanan'
// Chanan
delete pond.firstName
pond.firstName;
// ""
pond.firstName = 'Chanan'
pond._proto_.firstName = '*'
// result 'Chanan'

```
**setter**
```javascript
//Object
{
    id: 10,
    name: 20,
    setName(value) {
        this.name = value;
    }
}
//setter
{
    get name(){
        return Date.now();
    },
    set name(value) {
        this._name = value;
    }
    
}

a.name
// result 1506350162474 ---> Date.now();
a.name = 'yo'
a.name
// result Date.now()
a._name = 'yo'
a._name
// result "yo"

```

## Class

```javascript

class A {
    constructor() {
        console.log('Yeah');

    }

}

var b = new A();
// result yeah; ---> print console.log() in constructor

b._proto_
// b have prototype


// use function in class
class A {
    constructor() {
        console.log('Yeah');
    }
    sayHello(){
        console.log('Hello '+this.timeOfDay);
    }
}

var c = new A();
c.sayHello();
// result Hello undefined


class A {
    constructor() {
        console.log('Yeah');
        this.timeOfDay = 'Morning'
    }
    sayHello(){
        console.log('Hello '+this.timeOfDay);
    }
}

var a = new A();
a.sayHello();
// result Hello Morning


//static
class F {
    constructor() {
        console.log('Yeah');
    
    }
    sayHello(){
        console.log('Hello '+this.timeOfDay);
    }
    static test(){
        console.log('Hello')
    }
}

F.test()
// result Hello


class G {
    constructor() {
        console.log('Yeah');
    
    }
    sayHello(){
        console.log('Hello '+G.test());

    }

    static test(){
       return 'Morning'
    }

}

new G().sayHello();
//Yeah
//Hello Morning


// auto call construnctor;
// not private public 
// static function , function isn't in class.

```

### extends

```javascript
class BaseG {
    constructor(){
        console.log('Yeah')
    }
    sayHello(){
        console.log('Hello '+G.test());

    }
    static test(){
        return 'Morning'
    }
}

class G extends BaseG {

}



class BaseJ{
    constructor(){
        console.log('Yeah')

    }

    sayHello(){
        console.log('yo');

    }

}

class J extends BaseJ {
    constructor(){
        super();
    }

}

new J();
// result Yeah
// print value from BaseJ

class BaseK{
    constructor(){
        console.log('Yeah')

    }
    sayHello(){
        console.log('this colour is:', this.colour());

    }
    colour(){
        //prototype
    }

}

class K extends BaseK {
    constructor(){
        super();

    }
    color(){
        return 'red';
    }
}

new K().color();
// result return 'red'

// override BaseK ----> colour prototype

```

## React

```javascript
// package.json --> script ---> 
// start --> start project development
// build --> build project to bundle
// test --> unit test
```