
export const harvestPlants = (plants) => {
    let seeds = []
    for(let plant of plants){
        let plantOutput
        if (plant.type === "Corn"){
            plantOutput = 3;
        }else{
            plantOutput = plant.output
        }
        while(plantOutput > 0){
            seeds.push(plant)
            plantOutput--;
        }
    }
    return seeds;
}