function f(){
    var a=[];
    let i;//var i 도 동일.

    for(i=0; i<3; i++){
        a[i]=function(){
            return i;
        }
      }
      return a;
}

function f2(){
    var a=[];
    var i;

    for(i=0; i<3; i++){
        a[i]=(function(x){
            return function(){
                return x;
            }
        })(i);
    }
    return a;
}


var b=f();

console.log(b[0]());//i의 메모리에는 3이 있다.
console.log(b[1]());
console.log(b[2]());


b=f2();

console.log(b[0]());
console.log(b[1]());
console.log(b[2]());
