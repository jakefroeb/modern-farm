export const harvestPlants = (plants) => {
    let seeds = []
    for(let plant of plants){
        if (Array.isArray(plant)){
            plant = plant[0];
        }else{}
        let plantOutput = plant.output;
        while(plantOutput > 0){
            seeds.push(plant)
            plantOutput--;
        }
    }
    return seeds;
}