//입출력모듈 가져오기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 인풋 받아오기
let Input = [];
let N,M;

// 부모ID Array 생서
let Parent =[];

// Line 이벤트 발생시 마다 행렬로 인풋을 받아오기
rl.on('line',function(value){
    value = value.split(' ').map((element)=>(parseInt(element)));
    Input.push(value);
})

// Close 이벤트 발생시
rl.on('close',function(){
    // N,M에 문제의 첫번째 줄의 요소를 반환하고 Input[]에서 삭제시킴
    [N,M] = Input.shift();
    // 해결함수
    Solve();
    process.exit();
})

// 모든 원소의 부모를 자기로 설정.
function Initialize(){
    for(let i = 0 ; i <= N ; ++i)
    {
        Parent[i] = i;
    }
}

// 재귀로 부모노드를 찾아감
function Find(x){
    if(Parent[x] == x)
    {
        return x;
    }
    else
    {
        let p = Find(Parent[x]);
        Parent[x] = p;
        return p;
    }
}

// 부모노드가 같지 않다면 합침.
function Union(x,y){
    x = Find(x);
    y = Find(y);
    if(x!=y)
    {
        Parent[y] = x;
    }
}

function Solve(){
    Initialize();
    for(let i = 0 ; i < Input.length; ++i)
    {
        let x,y;
        x = Input[i][1];
        y = Input[i][2];

        if(Input[i][0] == 0)
        {
            Union(x,y);
        }
        else if(Input[i][0] == 1)
        {
            if(Find(x) == Find(y)){console.log("YES")}
            else{console.log("NO")}
        }
    }
}