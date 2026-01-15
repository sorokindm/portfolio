document.documentElement.lang = navigator.language;

function addToCart(id, remove=false, cartView=false) {
    const params = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value, // Include the CSRF token here
        },
        body: JSON.stringify({id: id,
            remove:remove,
        })
    };
    const url = "/addToCart";
    fetch(url, params).then(x=>x.json()).then(x=>{changeBubble(x.cart_length);cartView?changeCartQuantity(x.new_length, id, x.new_sum):null});
}

function merchViewAddToCart(id) {
        const params = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value, // Include the CSRF token here
        },
        body: JSON.stringify({id: id,
        })
    };
    const url = "/addToCartMerchView";
    fetch(url, params).then(x=>x.json()).then(x=>{changeBubble(x.cart_length);changeAddButton()});
}

function changeAddButton() {
    let list = document.querySelectorAll(".add-button");
    list[0].hidden=false;
    list[1].hidden=true;
}

function removeFromCart(id) {
        const params = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value, // Include the CSRF token here
        },
        body: JSON.stringify({id: id,
        })
    };
    const url = "/removeFromCart";
    fetch(url,params).then(x=>x.json()).then(x=>x.result?removeCartRow(id, x.new_sum):null);
}

function changeBubble(newLength) {
    document.getElementById("cart-bubble").getElementsByTagName("span")[0].textContent=newLength;
}

function changeCartQuantity(newLength, id, newSum) {
    document.getElementById(id).querySelector(".quantity").textContent=newLength;
    if (newLength<2) {
        document.getElementById(id).getElementsByTagName("button")[1].disabled = true;
    }
    else {
        document.getElementById(id).getElementsByTagName("button")[1].disabled = false;
    }
    updateSum(newSum);
}

function updateSum(newSum) {
    document.getElementById("sum").textContent="Итого:" + newSum;
}

function removeCartRow(id, newSum) {
    document.getElementById(id).remove();
    document.getElementById("cart-bubble").getElementsByTagName("span")[0].textContent--;
    updateSum(newSum);
}

function unhidePassword() {
    password = document.getElementById("id_password")
    if (password.type === "password") {
        password.type = "text"
    } else if (password.type === "text") {
        password.type = "password"
    }
}