

function calculate() {

    const priceEl = document.getElementById("price");
    const qtyEl = document.getElementById("quantity");
    const errEl = document.getElementById("err");
    const payableEl = document.getElementById("payable");
    const buttonEl = document.getElementById("button");

    const price = Number(priceEl.value);
    const quantity = Number(qtyEl.value);

    // Validate quantity input
    if (qtyEl.value === "" || !Number.isFinite(quantity)) {
        errEl.innerHTML = "Please enter a valid quantity";
        payableEl.value = "";
        buttonEl.style.display = "none";
    } else if (quantity <= 0) {
        errEl.innerHTML = "Quantity must be greater than 0";
        payableEl.value = "";
        buttonEl.style.display = "none";
    } else {
        errEl.innerHTML = "";
        const bill = price * quantity;
        payableEl.value = bill;
        buttonEl.style.display = "block";
    }

    return false;
}