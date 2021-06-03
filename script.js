let jerseyList = [
    {
        name: 'Atletico Madrid Home Jersey 2019/2020',
        brand: 'Nike',
        stock: 29,
        price: 599000,
        img: 'assets/atleticomadrid2019-2020.png',
        id: 1
    },
    {
        name: 'Chelsea Home Jersey 2019/2020',
        brand: 'Nike',
        stock: 33,
        price: 599000,
        img: 'assets/chelsea2019-2020.png',
        id: 2
    },
    {
        name: 'Dortmund Home Jersey 2019/2020',
        brand: 'Puma',
        stock: 37,
        price: 599000,
        img: 'assets/dortmund2019-2020.jpeg',
        id: 3
    },
    {
        name: 'Galatasaray Home Jersey 2018/2019',
        brand: 'Nike',
        stock: 15,
        price: 549000,
        img: 'assets/galatasaray2018-2019.jpeg',
        id: 4
    },
    {
        name: 'Juventus Home Jersey 2019/2020',
        brand: 'Adidas',
        stock: 14,
        price: 599000,
        img: 'assets/juventus2019-2020.png',
        id: 5
    },
    {
        name: 'Liverpool Home Jersey 2019/2020',
        brand: 'New Balance',
        stock: 12,
        price: 599000,
        img: 'assets/liverpool2019-2020.jpeg',
        id: 6
    },
    {
        name: 'Lyon Home Jersey 2019/2020',
        brand: 'Adidas',
        stock: 16,
        price: 599000,
        img: 'assets/lyon2019-2020.png',
        id: 7
    },
    {
        name: 'Manchester City Home Jersey 2019/2020',
        brand: 'Puma',
        stock: 22,
        price: 599000,
        img: 'assets/mancity2019-2020.jpeg',
        id: 8
    },
    {
        name: 'Manchester United Home Jersey 2018/2019',
        brand: 'Adidas',
        stock: 29,
        price: 549000,
        img: 'assets/mu2018-2019.png',
        id: 9
    },
    {
        name: 'Bayern Home Jersey 2019/2020',
        brand: 'Adidas',
        stock: 14,
        price: 599000,
        img: 'assets/munchen2019-2020.png',
        id: 10
    },
    {
        name: 'Real Madrid Home Jersey 2019/2020',
        brand: 'Adidas',
        stock: 9,
        price: 599000,
        img: 'assets/realmadrid2019-2020.png',
        id: 11
    },
    {
        name: 'Tottenham Home Jersey 2019/2020',
        brand: 'Nike',
        stock: 13,
        price: 599000,
        img: 'assets/tottenham2019-2020.png',
        id: 12
    }
]

const konten = document.querySelector('#content')
konten.innerHTML = generateCard(jerseyList)

function generateCard (data) {
    let result = ''
    for (let i = 0; i < data.length; i++) {
        result += 
        `<div class="card" style="width: 18rem;">
            <img src="${data[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
                <span class="badge badge-warning">${data[i].brand}</span>
                    <h5 class="card-title product-card-name font-weight-bold">${data[i].name}</h5>
                    <p class="product-card-price">Price: IDR ${data[i].price}</p>
                    <p class="product-card-stock">Stock: ${data[i].stock}</p>
                    <span class="d-inline-block" style="width: 100%; text-align: right;">
                    <button class="btn btn-success btn-addToCart" onClick="addToCart(jerseyList, ${data[i].id})">Add to cart</button> 
                </span>
            </div>
        </div>`
    }
    return result
}
      
let colImg = document.querySelector("#productCartImgBody")
let colInfo = document.querySelector("#productCartInfoBody")
let colBtnDel = document.querySelector("#productCartBtnDelBody")

function addToCart(data, id) {
    let tableBody = document.querySelector("#cartTable").getElementsByTagName(`tbody`)[0]
    let row = tableBody.insertRow()
    let colBtnDelete = row.insertCell(colBtnDel)
    let colCartInfo = row.insertCell(colInfo)
    let colCartImg = row.insertCell(colImg)
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            colCartImg.innerHTML = `<img src="${data[i].img}" alt="" style="width: 120px; height: 70px;">`
            colCartInfo.innerHTML = `<h5 class="product-cart-name font-weight-bold" style="margin-bottom: 0;">${data[i].name}</h5>
            <p class="product-cart-price" style="margin-bottom: 0;">IDR ${data[i].price}</p>
            <p class="product-cart-qty">Qty: 1</p>`
            colBtnDelete.innerHTML = `<button id="btn-delete" class="btn btn-danger" onClick="delInCart(this)">&times;</button>`
        }
    }
    return  
}

function delInCart(row) {
    let i = row.parentNode.parentNode.rowIndex;
    document.getElementById('cartTable').deleteRow(i)
}