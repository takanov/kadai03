// indexからidを取得して固定値を代入
const state = document.getElementById("state");
const cpu = document.getElementById("cpu");
const gu = document.getElementById("gu");
const cho = document.getElementById("cho");
const pa = document.getElementById("pa");
const player = document.getElementById("player");
const reset = document.getElementById("reset");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const guClick = document.getElementById("gu-count");
const choClick = document.getElementById("cho-count");
const paClick = document.getElementById("pa-count");

//idが取得できているか確認
console.log(state,cpu,gu,cho,pa,player,reset,win,lose);


//配列にじゃんけんの選択肢を入れる
//jans[0]="ぐー",jans[1]="ちょき",jans[2]="ぱー"
const jans = ["ぐー","ちょき","ぱー"]

//プレイヤーの選択肢を格納する変数を設定
let playjan;

//CPUの選択肢を格納する変数を設定
let cpuja;

//買った回数をカウント
let winCount = 0;

//負けた回数をカウントする変数を設定。初期値は0
let loseCount = 0;

//ぐーを押した回数
let guCount = 0;

//ちょきを押した回数
let choCount = 0;

//ぱーを押した回数
let paCount = 0;


//関数start()を呼び出し
start();


//ぐーのボタンを押下した時のイベント
// =>はアロー関数：勉強しないと
gu.addEventListener("click",function(){
    //プレイヤーのテキストにグーを表示
    player.textContent = jans[0];

    //プレイヤーの選択肢を格納する変数にグーを格納
    playjan = jans[0];

    //CPUの選択肢を格納する変数に配列jansからランダムに取得した選択肢を格納
    cpuja = jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
    console.log(cpuja);
    //上記で取得した変数をCPUのテキストに表示
    cpu.textContent = cpuja;

    //ぐーをクリックした回数に１プラス
    guCount++;

    //ぐーをクリックした回数をテキストに表示
    guClick.textContent = guCount;

    //関数result()を呼び出し
    result();
});

//チョキのボタンを押した時イベント。挙動はグーと同じ
cho.addEventListener("click",function(){
    //プレイヤーのテキストにちょきを表示
    player.textContent = jans[1];

    //プレイヤーの選択肢を格納する変数にちょきを格納
    playjan = jans[1];

    //CPUの選択肢を格納する変数に配列jansからランダムに取得した選択肢を格納
    cpuja = jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
    console.log(cpuja);
    //上記で取得した変数をCPUのテキストに表示
    cpu.textContent = cpuja;

    //ちょきをクリックした回数に１プラス
    choCount++;

    //ちょきをクリックした回数をテキストに表示
    choClick.textContent = choCount;

    //関数result()を呼び出し
    result();
});

//パーのボタンを押した時イベント。挙動はグーと同じ
pa.addEventListener("click",function(){
    //プレイヤーのテキストにパーを表示
    player.textContent = jans[2];

    //プレイヤーの選択肢を格納する変数にパーを格納
    playjan = jans[2];

    //CPUの選択肢を格納する変数に配列jansからランダムに取得した選択肢を格納
    cpuja = jans[Object.keys(jans)[Math.floor(Math.random() * Object.keys(jans).length)]];
    console.log(cpuja);
    //上記で取得した変数をCPUのテキストに表示
    cpu.textContent = cpuja;

    //パーをクリックした回数に１プラス
    paCount++;

    //パーをクリックした回数をテキストに表示
    paClick.textContent = paCount;

    //関数result()を呼び出し
    result();
});

//リセットボタンをクリックした時のイベント
reset.addEventListener("click",()=>{
    //関数start()を呼び出し
    start();
    //startにテキストjを表示
    state.textContent = "最初はぐー！じゃんけん..."
})

//result()の関数です。じゃんけん判定をここで行う
function result(){
    //ifで分岐処理
    //プレイヤーとCPUが同じだったら、stateにテキスト表示
    if(playjan === cpuja){
        state.textContent = "あいこで..."

    //プレイヤーが勝った場合の表示
    } else if(playjan === jans[0] && cpuja === jans[1] || playjan === jans[1] && cpuja === jans[2] || playjan === jans[2] && cpuja === jans[0]){
        //statにテキストを表示
        state.textContent = "かち";

        //関数display()を呼び出し
        display();

        //勝った回数に一回プラス
        winCount++;

        //勝った回数をテキストに表示
        win.textContent = winCount;
    }else{
        //statにテキストを表示
        state.textContent = "まけ";

        //関数display（）を呼び出し
        display();

        //負けた回数に1プラス
        loseCount++;

        //負けた回数をテキストに表示
        lose.textContent = loseCount;
    }
}

//start()の関数。ボタンの表示、非表示を設定。disabled＝falseだとボタンを表示され、disabled＝tureだと非表示となる。
function start(){
    gu.disabled = false;
    cho.disabled = false;
    pa.disabled = false;
    reset.disabled = true;
}

//display()の関数。ボタンの表示、非表示を設定。disabled＝falseだとボタンを表示され、disabled＝tureだと非表示となる。
function display(){
    gu.disabled = true;
    cho.disabled = true;
    pa.disabled = true;
    reset.disabled = false;
}