var num=1;

function foo(){
    var num=2;

    function bar(){
        console.log(num);
    }
    return bar;
}

var baz=foo();
baz();




// console.log(i);

// if(0<3){//if->ㄹfunction이면 에러가 발생한다.
//     var i=3;
//     console.log(i);
// }