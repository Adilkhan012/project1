let filename = "basic_1_Caribbean Green_Copper_Deep Sea_Honey Flower_Endeavour_Husk_193321_i_0_(15_2p0_2p0_0p5_4_0p15_0p0_128_2_5_2_10L-(_2)_111415 (1).png"

filename = filename.split("_")

let attributes = []
attributes.push({ trait_type: "Color 1", value: filename[2] })
attributes.push({ trait_type: "Color 1", value: filename[2] })
attributes.push({ trait_type: "Color 1", value: filename[2] })
attributes.push({ trait_type: "Color 1", value: filename[2] })
attributes.push({ trait_type: "Color 1", value: filename[2] })
attributes.push({ trait_type: "Color 1", value: filename[2] })
console.log(JSON.stringify({attributes}, null,4))