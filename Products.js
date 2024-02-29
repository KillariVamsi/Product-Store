var list = document.getElementById("wrapper");

axios("https://dummyjson.com/products").then( (res) => {
    var products = res.data.products;
    products.map( (product, index) => {
        console.log(product)
        var item = document.createElement("div")
        item.className = "col-lg-4 col-md-6 col-sm-12 mb-5 text-center p-2 item-card"
        var itemImg = document.createElement("img")
        itemImg.src = product.thumbnail
        itemImg.className = "h-75 w-75"
        var title = document.createElement("p")
        title.innerHTML = `<b>${product.title}</b>`
        var price = document.createElement("p")
        price.innerHTML = `<b>$ ${product.price}</b>`
        var rating = document.createElement("p")
        rating.innerHTML = `<b><i class="fa-solid fa-star"></i> ${product.rating}</b>`
        item.append(itemImg,title,price,rating)
        list.appendChild(item)
    })
})

function logout(){
    location.href = "./index.html"
}