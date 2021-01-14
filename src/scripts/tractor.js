
import {addPlant} from "./field.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"


export function plantSeeds(plantingPlan) {
    for (const row of plantingPlan) {
        for (const seed of row) {
            switch(seed){
                case "Asparagus" : addPlant(createAsparagus()); break
                case "Corn" : const corn = createCorn()
                                addPlant(corn[0])
                                addPlant(corn[1]); break
                case "Potato" : addPlant(createPotato()); break
                case "Soybean" : addPlant(createSoybean()); break
                case "Sunflower" : addPlant(createSunflower()); break
                case "Wheat" : addPlant(createWheat()); break
            }
        
        }
    }
}