console.log("Welcome to the main module")

import {createPlan} from "./plan.js"

const yearlyPlan = createPlan();
console.log(yearlyPlan);

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"

const potatoSeed = createPotato()
console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"

const wheatSeed = createWheat()
console.log(wheatSeed)

import { addPlant } from "./field.js"

const testPlantingPlan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]

import { plantSeeds } from "./tractor.js"
plantSeeds(testPlantingPlan);

import{ usePlants } from "./field.js"

let field = usePlants();
console.log(field)

import {harvestPlants} from "./harvester.js"
let harvestedSeeds = harvestPlants(field)
console.log(harvestedSeeds)

import {Catalog} from "./catalog.js"
Catalog(harvestedSeeds);


