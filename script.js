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