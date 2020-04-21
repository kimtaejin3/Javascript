function squared(num){
    return num*num;
}

function cubed(num){
    return num*num*num;
}

function factorial(num){
    let x=num;
    while(x>1){
        num*=x-1;
        x--;
    }
    return num;
}