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
const tie = document.getElementById("tie");
const guClick = document.getElementById("gu-count");
const choClick = document.getElementById("cho-count");
const paClick = document.getElementById("pa-count");


function buttonClick() {
    userName.innerText = nameText.value;
}

function inputChange(event) {
    console.log('event.currentTarget.value');
}

let nameText = document.getElementById("nametext");
nameText.value = "名前";
let userName = document.getElementById("username");

let checkButton = document.getElementById("checkButton");
checkButton.addEventListener('click',buttonClick);


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

//あいこの回数をカウントする変数を設定。初期値は0
let tieCount = 0;


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
gu.addEventListener("click", function (){
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

    //チャートを更新するための関数を呼び出す
    updateChart(myPieChart, guCount, choCount, paCount); 

    //関数result()を呼び出し
    result();
    updateGameResultsChart(myBarChart, winCount, loseCount, tieCount);
}, false);



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

    //チャートを更新するための関数を呼び出す
    updateChart(myPieChart, guCount, choCount, paCount); 

    //関数result()を呼び出し
    result();
    updateGameResultsChart(myBarChart, winCount, loseCount, tieCount);
}, false);

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

    //チャートを更新するための関数を呼び出す
    updateChart(myPieChart, guCount, choCount, paCount); 
    //関数result()を呼び出し
    result();
    updateGameResultsChart(myBarChart, winCount, loseCount, tieCount);
}, false);

//リセットボタンをクリックした時のイベント
reset.addEventListener("click",()=>{
    //関数start()を呼び出し
    start();
    //startにテキストを表示
    state.textContent = "最初はぐー！じゃんけん..."
})

//result()の関数です。じゃんけん判定をここで行う
function result(){
    //ifで分岐処理
    //プレイヤーとCPUが同じだったら、stateにテキスト表示
    if(playjan === cpuja){
        state.textContent = "あいこで..."
        tieCount++;
        tie.textContent = tieCount;

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


//チャートの記述

//type: タイプ,data: データ,options: オプション
let ctx = document.getElementById("myPieChart");

let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["ぐー", "ちょき", "ぱー"],
        datasets: [{
            backgroundColor: [
                "#3b95d3",
                "#e8c400",
                "#c73327"            ],
            data: [guCount, choCount, paCount,]
        }]
    },
    options: {
        title: {
        display: true,
        text: 'じゃんけんの出し手',
        }
    }
});
let barCtx = document.getElementById("myBarChart");
let myBarChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['勝ち', '負け', 'あいこ'],
        datasets: [
        {
            label: '勝敗',
            data: [winCount, loseCount, tieCount],
            backgroundColor: "rgba(219,39,91,0.5)"
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                    ticks: {     // 目盛り        
                        min: 0,      // 最小
                        max: 25,     // 最大値
                        stepSize: 5  // 間隔
                    }
                }]
        }
    }
});


//関数を使用してチャートを更新します。
function updateChart(chart, count) {
    //チャートのカウントを更新する
    chart.data.datasets[0].data[0] = guCount;  
    chart.data.datasets[0].data[1] = choCount;
    chart.data.datasets[0].data[2] = paCount;

    //グラフを更新する
    chart.update(); 
}

function updateGameResultsChart(chart, winCount, loseCount, tieCount) {
    // Update the chart data
    chart.data.datasets[0].data[0] = winCount;
    chart.data.datasets[0].data[1] = loseCount;
    chart.data.datasets[0].data[2] = tieCount;

    //グラフを更新する
    chart.update();
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

let braCanvas = document.querySelector('#myBarChart');
let pieCanvas = document.querySelector('#myPieChart');
//canvas size



