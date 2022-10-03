function formatMoney(value){
    value = value.toFixed(2);
    return "$" + value;
}

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
    document.getElementById("totalWithTip").innerHTML = formatMoney(totalBill);
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue); 
    document.getElementById("billEach").innerHTML = formatMoney(billEach);
    document.getElementById("tipEach").innerHTML = formatMoney(tipEach);   
}


let container = document.getElementById("container");
container.addEventListener("input",update);
