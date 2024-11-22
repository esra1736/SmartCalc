function add() {
    const a = parseFloat(document.getElementById("MyFirstNumber").value);
    const b = parseFloat(document.getElementById("MySecondNumber").value);
    const c = a + b;
    document.getElementById("myAnswer").value = c;
}

function subtract() {
    const d = parseFloat(document.getElementById("MyFirstNumber").value);
    const e = parseFloat(document.getElementById("MySecondNumber").value);
    const f = d - e;
    document.getElementById("myAnswer").value = f;
}

function multiply() {
    const g = parseFloat(document.getElementById("MyFirstNumber").value);
    const h = parseFloat(document.getElementById("MySecondNumber").value);
    const i = g * h;
    document.getElementById("myAnswer").value = i;
}
function Divide() {
    const j = parseFloat(document.getElementById("MyFirstNumber").value);
    const k = parseFloat(document.getElementById("MySecondNumber").value);
    const l = j / k;
    document.getElementById("myAnswer").value = l;
}

function squareRoot() {
    event.preventDefault();

    var number = parseFloat(document.getElementById("MyFirstNumber").value);
    var number2 = parseFloat(document.getElementById("MySecondNumber").value);

    var squareRoot1 = Math.sqrt(number);
    var squareRoot2 = Math.sqrt(number2);

    document.getElementById("myAnswer").value = squareRoot1 + " ; " + squareRoot2;
}

function Square() {
    const m = parseFloat(document.getElementById("MyFirstNumber").value);
    const n = parseFloat(document.getElementById("MySecondNumber").value);
    const o = m* m;
    const p = n *n;
    document.getElementById("myAnswer").value = o + " ; " + p;
}

