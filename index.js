function receivesAFunction(callback){
    callback();
}
/*function callback (){


}
*/


function returnsANamedFunction(){
   return function namedFunction(){
        console.log("broooo");
    };
}

function returnsAnAnonymousFunction(){
    return function (){
console.log("slime")
    }
}