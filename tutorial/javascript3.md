# 자바스크립트 변수에 대하여 알아보자

자바스크립트에서는 let-var-const가 있다. 우선 이 세 개의 차이점은 무엇일까?

Hosting이란? 
[js1](https://velog.io/@marcus/Javascript-Hoisting, "js1")
이분 블로그에 매우 정리가 잘 돼 있다. 아래 소스코드는 이분 블로그름 참고했다.
<pre>
    <code>
        const hosting=()=>{
            console.log("First-Name": name);//undefined
            var name="Marcus";
            console.log("Last-Name: name);//Marcus
        }

        hosting();
    </code>
</pre>

let과 const는?

<pre>
    <code>
        const hosting=()=>{
            console.log("First-Name": name);
            let name="Marcus";
        }

        hosting();// ReferenceError: name is not defined
    </code>
</pre>

왜 var를 사용했을 때는 undefined, let을 사용했을 때는 name is not defined error가 뜨는 것일까? 우선, 변수가 함수내에서 정의되면 선언이 함수의 최상위로 함수 바깥에서 정의되었을 경우는 전역 컨텍스트의 최상위로 변경된다. 

TDZ: let const선언은 기본적으로 실행중인 실행 컨텍스트의 어휘적 환경으로 범위가 지정된 변수를 정의한다. 

어휘적 바인딩이 실행되기 전까지 액세스할 수 없는 현상을 TDZ라고 한다
스코프에 진입할 떄 변수가 만들어지고 TDZ가 생성되지만, 코드 실행이 변수가 실제 있는 위치에 도달할 떄까지 액세스할 수 없는 것이다.

## var, let, const의 차이점

기존의 자바스크립트는 var만 사용할 수 있었다고 한다.

<pre>
    <code>
      var name = "Marcus";
console.log(name);

var name = "Jogeonsang";
console.log(name);

output: Marcus
output: Jogeonsang
    </code>
</pre>

c언어를 처음 공부했던 나로썬 전혀 이해가 안가는 구조이다. 하지만 ES6 업데이트 이후로 추가된 변수 선언 방식인 let과 const가 추가되었다고 한다.
위 코드의 var를 let으로 바꾼다면 오류가 나타날 것이다.

그럼 let과 const의 차이점은?
let은 변수에 재할당이 가능하다. 반면에 const는 그렇지 않다.

<pre>
    <code>
     let testCase='let'
     let testCase='let2'// error
     testCase='let3'//no matter
    </code>
</pre>

<pre>
    <code>
     const testCase='let'
     const testCase='let2'// error
     const testCase='let3'// error
    </code>
</pre>

이상 자바스크립트의 변수 설명이었다.