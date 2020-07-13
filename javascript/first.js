//Es5
Ecma Script 5
//Es6
Ecma Script 6

var
let
const

//es5
function add(a,b){
    return a+b
}

add(1,2)

//es6
let add = (a,b) => { return a+b}
add(1,2)


/////////
var > we can redeclare and reassign
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

var a = 10
var a > declare a variable
a =10 > assignment

> var a = 10
undefined
> a
10
> var a = 11
undefined
> a
11
> a =12
12
> a
12
> let b = 10
undefined
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b =11
11
> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.
>



function add(){
    var data = [a,b]
    return data
}