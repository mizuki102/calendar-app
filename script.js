const calcButton = document.getElementById('calc-btn');
const resultSpan = document.getElementById('result-price');
const historyList = document.getElementById('history-list');
const calendarBody = document.getElementById('calendar-body');

for (let i = 1; i <= 31; i++) {
    const day = document.createElement('div');
    day.classList.add('day-box');
    day.innerHTML = `<span>${i}</span><div id="day-${i}-amount"></div>`;
    calendarBody.appendChild(day);
}

calcButton.addEventListener('click', function() {
    alert('クリックされました！');

    const rate = Number(document.getElementById('hourly-rate').value);
    const hours = Number(document.getElementById('working-hours').value);

    const total = rate * hours;

    resultSpan.innerText = `${total}円`;

    console.log("計算結果:", total);
    
    const dateText = document.querySelector('h2').innerText;
    const li = document.createElement('li');
    li.innerText = `${dateText} : ${total}円`;
    historyList.appendChild(li);
});
