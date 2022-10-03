function update() {
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    console.log({bill, tipPercent, split});

    let tipValue = bill * (tipPercent/100);
    let tipEach = tipValue/split;
    let totalBill = bill+tipValue;
    let billEach = totalBill/split;

    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("totalWithTip").innerHTML = "$" + totalBill;
    document.getElementById("tipValue").innerHTML = "$" + tipValue; 
    document.getElementById("billEach").innerHTML = "$" + billEach;
    document.getElementById("tipEach").innerHTML = "$" + tipEach;   
}

let container = document.getElementById("container");
container.addEventListener("input",update);
