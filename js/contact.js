
function printAnswers() {
    const form = document.getElementById("signup");

    let print = function(n) {
        console.log(document.getElementById("signup")[n].value);
    }

    print(0);
    print(1);
    print(2);
    print(3);
    print(4);
    print(5);
    print(6);
}
