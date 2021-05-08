//**定義・初期化**/
let view  = document.getElementById('view');
const hitNum = document.getElementById('hitNum');
const reset  = document.getElementById('reset');

const bingo = ['B', 'I', 'N', 'G', 'O'];
const tables = [];
const number = [];
let max;
let min;

let td = document.createElement('td')

const createSheet = function() {
    //　**ヘッダー作成　**/
    let thead = document.createElement('thead');
    view.appendChild(thead);
    for (let x = 0; x < 5; x++) {
    let th = document.createElement('th');
    th.textContent = bingo[x];
    thead.appendChild(th);
    }
    //　**ボディ作成　**/
    for (let y = 0; y < 5; y++) {
        let tbody = document.createElement('tbody');
        let tr = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            let td = document.createElement('td');
            switch (j) {
                case 0: {
                    randomMath(15, 1)
                    td.textContent = random;
                    td.setAttribute('id', tables.length - 1);
                    break;
                }
                case 1: {
                    randomMath(30, 16)
                    td.textContent = random;
                    td.setAttribute('id', tables.length - 1);
                    break;
                }
                case 2: {
                    randomMath(45, 31)
                    td.textContent = random;
                    td.setAttribute('id', tables.length - 1);
                    break;
                }
                case 3: {
                    randomMath(60, 46)
                    td.textContent = random;
                    td.setAttribute('id', tables.length - 1);
                    break;
                }
                case 4: {
                    randomMath(75, 61)
                    td.textContent = random;
                    td.setAttribute('id', tables.length - 1);
                    break;
                }
            }
            tbody.appendChild(tr);
            tr.appendChild(td);
        }
        view.appendChild(tbody);
    }
};
//**数生成→値の重複確認→配列に代入**/
const randomMath = function(max, min) {
    while (true) {
        random = Math.floor(Math.random() * (max - min) + min);
        if (!tables.includes(random)) {
            tables.push(random);
            
            break;
        }
    }
};

console.log(tables);
createSheet();

//**freeの場所**/
let rows = view.rows;
const middle = rows[2].cells[2];
middle.textContent = "Free";
middle.className = 'hit-num';

//**リセットボタン**/
reset.addEventListener('click',function() {
    location.reload();
})
//**セットボタン**/
hitNum.addEventListener('click', function() {
    while (true) {
        let calc = (Math.floor(Math.random() * 75 + 1));
        if (!number.includes(calc)) {
            alert(`${calc}番です！`);
            number.push(calc);
            let result = tables.indexOf(calc);
            if (result === -1) {
                return;
            }
            const target = document.getElementById(result);
            target.className = 'hit-num';
            break;
        }
     }
});
