import { getFish } from './database.js'



const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
import { FishList } from './fishList.js'

let parentHTMLElement = document.querySelector(".fishDisplay")


parentHTMLElement.innerHTML = FishList();