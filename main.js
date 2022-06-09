let carts = document.querySelectorAll('.add-cart')

let products = [
  {

    name: 'BBQ-Chicken-Wings',
    tag: 'bbq',
    price: 2600,
    incart: 0
  },
  {
    name: 'Pancakes',
    tag: 'pancakes',
    price: 2000,
    incart: 0
  },
  {
    name: 'Drinks',
    tag: 'zgb',
    price: 300,
    incart: 0
  },
  {
    name: 'Steak Meat',
    tag: 'meat',
    price: 2500,
    incart: 0
  },
  {
    name: 'Gizdodo',
    tag: 'giz',
    price: 1700,
    incart: 0
  },
  {
    name: 'Fries',
    tag: 'wxf',
    price: 600,
    incart: 0
  }
]

for (let i =0; i< carts.length; i++){
  carts[i].addEventListener('click', () =>{
    cartNumbers(products[i])
  })
}

function onLoadCartnumbers(){
  let productNumbers = localStorage.getItem('cartNumbers')

  if(productNumbers){
    document.querySelector('.cart span').textContent = productNumbers
  }
}

function cartNumbers(product){
 
  let productNumbers = localStorage.getItem('cartNumbers')
  


  productNumbers = parseInt(productNumbers)

  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.cart span').textContent = productNumbers + 1
  }
 else{
  localStorage.setItem('cartNumbers', 1) 
  document.querySelector('.cart span').textContent = 1
 }
  
setItems(product)

}
function setItems(product){ 
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)

  

  if(cartItems != null){

    if(cartItems[product.tag] == undefined){
      cartItems = {
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].incart += 1
  }else{
    product.incart = 1
    cartItems = {
      [product.tag]: product
  }

  
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems))

}
onLoadCartnumbers()