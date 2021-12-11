let tash2_1 = document.getElementById('task2_1');

tash2_1.onclick = function () {
    let a = 2;
    let b = 3;
    let c, d;
    c = ++a;
    d = b++;
    c = (2 + ++a);
    d = (2 + b++);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}