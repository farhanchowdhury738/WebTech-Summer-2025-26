

function calculate() {

    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    if (quantity <= 0) {

        document.getElementById("err").innerHTML = "Quantity must be greater than 0";
        document.getElementById("payable").value = "";
        document.getElementById("button").style.display = "none";

    }
    else {

        document.getElementById("err").innerHTML = "";

        const bill = price * quantity;

        document.getElementById("payable").value = bill;

        document.getElementById("button").style.display = "block";
    }

}