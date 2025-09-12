  
//   card 1
  const cart = []
  const cartBox = document.getElementById("yourCart")
  const addBtn = document.getElementById("card1")

  addBtn.addEventListener("click", function() {
    const name = document.getElementById("mango-tree").innerText
    const price = document.getElementById("mango-tree-price").innerText

    // cart array add
    cart.push({ name, price })

    // UI update
    const item = document.createElement("p")
    item.innerText = name + " - " + price + " ";

    // Cancel button
    const cancelBtn = document.createElement("button")
    cancelBtn.innerText = "❌"
    cancelBtn.style.cursor = "pointer"
    cancelBtn.style.marginLeft = "10px"

    // cancel button click event
    cancelBtn.addEventListener("click", function() {
      cartBox.removeChild(item);
      const index = cart.findIndex(i => i.name === name && i.price === price);
      if(index > -1) cart.splice(index, 1)
    })
    item.appendChild(cancelBtn)
    cartBox.appendChild(item)
  })


//   card 2

const cart2 = []
  const cartBox2 = document.getElementById("yourCart")
  const addBtn2 = document.getElementById("card2")

  addBtn2.addEventListener("click", function() {
    const name = document.getElementById("jack-tree").innerText
    const price = document.getElementById("jack-tree-price").innerText

    // cart array add
    cart.push({ name, price })

    // UI update
    const item = document.createElement("p")
    item.innerText = name + " - " + price + " ";

    // Cancel button
    const cancelBtn = document.createElement("button")
    cancelBtn.innerText = "❌"
    cancelBtn.style.cursor = "pointer"
    cancelBtn.style.marginLeft = "10px"

    // cancel button click event
    cancelBtn.addEventListener("click", function() {
      cartBox.removeChild(item);
      const index = cart.findIndex(i => i.name === name && i.price === price);
      if(index > -1) cart.splice(index, 1)
    })
    item.appendChild(cancelBtn)
    cartBox.appendChild(item)
  })

//   card 3

const cart3 = []
  const cartBox3 = document.getElementById("yourCart")
  const addBtn3 = document.getElementById("card3")

  addBtn3.addEventListener("click", function() {
    const name = document.getElementById("banana-tree").innerText
    const price = document.getElementById("banana-tree-price").innerText

    // cart array add
    cart.push({ name, price })

    // UI update
    const item = document.createElement("p")
    item.innerText = name + " - " + price + " ";

    // Cancel button
    const cancelBtn = document.createElement("button")
    cancelBtn.innerText = "❌"
    cancelBtn.style.cursor = "pointer"
    cancelBtn.style.marginLeft = "10px"

    // cancel button click event
    cancelBtn.addEventListener("click", function() {
      cartBox.removeChild(item);
      const index = cart.findIndex(i => i.name === name && i.price === price);
      if(index > -1) cart.splice(index, 1)
    })
    item.appendChild(cancelBtn)
    cartBox.appendChild(item)
  })

  //   card 4

const cart4 = []
  const cartBox4 = document.getElementById("yourCart")
  const addBtn4 = document.getElementById("card4")

  addBtn4.addEventListener("click", function() {
    const name = document.getElementById("Bamboo-tree").innerText
    const price = document.getElementById("Bamboo-tree-price").innerText

    // cart array add
    cart.push({ name, price })

    // UI update
    const item = document.createElement("p")
    item.innerText = name + " - " + price + " ";

    // Cancel button
    const cancelBtn = document.createElement("button")
    cancelBtn.innerText = "❌"
    cancelBtn.style.cursor = "pointer"
    cancelBtn.style.marginLeft = "10px"

    // cancel button click event
    cancelBtn.addEventListener("click", function() {
      cartBox.removeChild(item);
      const index = cart.findIndex(i => i.name === name && i.price === price);
      if(index > -1) cart.splice(index, 1)
    })
    item.appendChild(cancelBtn)
    cartBox.appendChild(item)
  })


  

  for(let n = 1; n<13 ; n++){
    
  }