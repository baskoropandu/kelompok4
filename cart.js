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
        price: 499000,
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
        brand: 'nike',
        stock: 29,
        price: 599000,
        img: 'assets/mancity2019-2020.jpeg',
        id: 8
    },
    {
        name: ' Home Jersey 2019/2020',
        brand: 'nike',
        stock: 29,
        price: 599000,
        img: 'assets/atleticomadrid2019-2020.png',
        id: 9
    },
    {
        name: ' Home Jersey 2019/2020',
        brand: 'nike',
        stock: 29,
        price: 599000,
        img: 'assets/atleticomadrid2019-2020.png',
        id: 10
    },
    {
        name: ' Home Jersey 2019/2020',
        brand: 'nike',
        stock: 29,
        price: 599000,
        img: 'assets/atleticomadrid2019-2020.png',
        id: 11
    },
    {
        name: ' Home Jersey 2019/2020',
        brand: 'nike',
        stock: 29,
        price: 599000,
        img: 'assets/atleticomadrid2019-2020.png',
        id: 12
    },
]
// let cart = []

function totalPrice(arr){
    output = 0
    for(let i = 0 ; i < arr.length ; i++){
        output += arr[i].price
    }
    return output
}

function addToCart(id,produk){
    let cart = {}
    for(let i = 0 ; i < produk.length ; i++){
        if(produk[i].id === id && produk[i].stock > 0){
            let jumlah = 1
            if(cart[produk[i].nama] === undefined){
                cart[produk[i].nama] = {
                    nama : produk[i].name,
                    id : produk[i].id,
                    jumlah,
                    harga : produk[i].price,
                }
            }else{
                cart[produk[i].nama].jumlah += jumlah
                cart[produk[i].nama].price += produk[i].price
            }
            produk[i].stock--
        }
    }
    return cart
}

console.log(addToCart(1,jerseyList));
// console.log(`=====${cart}====`);