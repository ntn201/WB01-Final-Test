let total_price = 0

document.getElementById("selector-ebony").addEventListener("click", ()=>{
    document.getElementById("product-detail-image").src = "https://static.gibson.com/product-images/Epiphone/EPIKWM803/Ebony/PRESS_DR100EB1.jpg"
    console.log(document.getElementById("selector-ebony"))
    document.getElementById("selector-ebony").parentNode.classList.add("selector-active")
    document.getElementById("selector-natural").parentNode.classList.remove("selector-active")
})

document.getElementById("selector-natural").addEventListener("click", ()=>{
    document.getElementById("product-detail-image").src = "https://static.gibson.com/product-images/Epiphone/EPIKWM803/Natural/P_DR100-NA1.jpg"
    document.getElementById("selector-natural").parentNode.classList.add("selector-active")
    document.getElementById("selector-ebony").parentNode.classList.remove("selector-active")
})


document.getElementById("btn-add-to-cart").addEventListener("click", ()=>{
    total_price += 169.00
    document.getElementById("total-price").textContent = "$" + total_price
})
