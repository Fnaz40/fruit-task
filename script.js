


let val = 0, purchase = 0, count_ap = 0, count_ban = 0, count_org = 0, total_purchase = 0;
function values() {
    val = Number(document.querySelector("input").value);
}
function result() {
    document.querySelector("span").innerHTML = total_purchase;
}
function increaseValue() {
    values();
    if (val > total_purchase) {
        if (val >= 10) {
            count_ap += 1;
            purchase += 10;
            val = val - purchase;
            total_purchase = purchase + total_purchase;
            purchase = 0;
            document.querySelector("#number").value = count_ap;
            result();

        }

        else {
            alert("Not Enough Money to buy Apple")
        }
    }

    else {
        alert("Not Enough Money to buy Apple")
    }
}
function increaseValueTwo() {
    values();
    // if (val > total_purchase) {
        if (val >= 15) {
            count_org += 1;
            purchase += 15;
            val = val - purchase;
            total_purchase = purchase + total_purchase;
            purchase = 0;
            document.querySelector("#number-two").value = count_org;
            result();

        }
        else {
            alert("Not Enough Money to buy Orange")
        }
    }

//     else {
//         alert("Not Enough Money to buy orange")
//     }
// }
function increaseValueThree() {
    values();
    if (val > total_purchase) {
        if (val >= 7) {
            count_ban += 1;
            purchase += 7;
            val = val - purchase;
            total_purchase = purchase + total_purchase;
            purchase = 0;
            document.querySelector("#number-three").value = count_ban;
            result();

        }
        else {
            alert("Not Enough Money to buy Banana")
        }
    }

    else{
        alert("Not Enough Money to buy Banana")
    }
}
function decreaseValue() {
    if (total_purchase > 0 && count_ap > 0) {
        count_ap -= 1;
        purchase += 10;
        val = val + purchase;
        total_purchase = total_purchase - purchase;
        purchase = 0;
        document.querySelector("#number").value = count_ap;
        result();
    }

}
function decreaseValueTwo() {
    if (total_purchase > 0 && count_org > 0) {
        count_org -= 1;
        purchase += 15;
        val = val + purchase;
        total_purchase = total_purchase - purchase;
        purchase = 0;
        document.querySelector("#number-two").value = count_org;
        result();
    }

}
function decreaseValueThree() {
    if (total_purchase > 0 && count_ban > 0) {
        count_ban -= 1;
        purchase += 7;
        val = val + purchase;
        total_purchase = total_purchase - purchase;
        purchase = 0;
        document.querySelector("#number-three").value = count_ban;
        result();
    }
}




