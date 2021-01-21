export const countSeeds = (seeds) =>{
    let countedSeeds = [{
        type : "Corn",
        amount : 0
    },
    {
        type : "Asparagus",
        amount : 0
    },
    {
        type : "Potato",
        amount : 0
    },
    {
        type : "Soybean",
        amount : 0
    },
    {
        type : "Sunflower",
        amount : 0
    },
    {
        type : "Wheat",
        amount : 0
    }
]
    seeds.forEach(seed => {
        switch(seed.type){
            case "Asparagus" : countedSeeds[1].amount+=seed.output; break
            case "Corn" : countedSeeds[0].amount+=seed.output;break
            case "Potato" : countedSeeds[2].amount+=seed.output; break
            case "Soybean" : countedSeeds[3].amount+=seed.output; break
            case "Sunflower" : countedSeeds[4].amount+=seed.output; break
            case "Wheat" : countedSeeds[5].amount+=seed.output; break
        }
        
    });
    return countedSeeds.slice();
}