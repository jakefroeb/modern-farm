export const countSeeds = (seeds) =>{
    let countedSeeds = [{
        
    }]
    seeds.forEach(seed => {
        switch(seed.type){
            case "Asparagus" : ; break
            case "Corn" : const corn = createCorn()
                            addPlant(corn[0])
                            addPlant(corn[1]); break
            case "Potato" : addPlant(createPotato()); break
            case "Soybean" : addPlant(createSoybean()); break
            case "Sunflower" : addPlant(createSunflower()); break
            case "Wheat" : addPlant(createWheat()); break
        }
        
    });
}