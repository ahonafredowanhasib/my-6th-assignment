
const loadPost = () => {
    const url1 = 'https://openapi.programming-hero.com/api/plants'
    fetch(url1)
    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
        displayPost(data.plants)
    })
}



// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }

const displayPost=(posts)=>{

    // 1. get the container
    const postContainer = document.getElementById("post-container")
    // console.log(postContainer)
    postContainer.innerHTML = ''


    posts.forEach((post) => {
        // console.log(post.name)

        // 2. creat element
        const postCard = document.createElement("div")
        postCard.innerHTML = `
        <div class="post-card place-items-center mt-2 bg-white h-140 w-85 rounded-2xl p-3">
            <img class=" rounded-3xl h-65 w-80" src="${post.image}" alt="${post.name}">
            <h2 class="ml-0 text-[#1F2937] text-xl mt-1 inter-sem">${post.name}</h2>
            <div class="h-28 mw-100% mb-5 mt-1"> 
            <p class="text-[#1F2937] inter-nor">${post.description}</p>
            </div>
            <div class="flex gap-[150px] items-center">
            <h5 class="bg-[#DCFCE7] text-[#15803D] rounded-3xl p-2 w-[120px] text-center">${post.category}</h5>
            <h4 class="inter-sem">৳${post.price}</h4>
            </div>
            <button id="card1" type="button" class="bg-[#15803D] text-white px-6 py-2 rounded-4xl font-semibold hover:bg-[#116530] transition mx-auto block mt-2 w-[90%] max-w-[240px]">Add to Cart</button>
        </div>`
        // add ali into container
        postContainer.append(postCard)
    });
    // console.log(posts)
}
