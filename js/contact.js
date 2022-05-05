
function printAnswers() {
    const form = document.getElementById("signup");
    const result = document.getElementsByClassName("result");

    let print = function(n) {
        result[n].innerHTML = document.getElementById("signup")[n].value;
    }

    print(0);
    print(1);
    print(2);
    print(3);
    print(4);
    print(5);
    print(6);
}
