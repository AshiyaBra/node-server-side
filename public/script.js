const showFlowers = async() => {
    const flowersJSON = await getFlowers();
    const flowersDiv = document.getElementById("flowers");

    if(flowersJSON == ""){
        console.log("Invaild");
        return;
    }

    flowersJSON.forEach((flower) => {
        const section = document.createElement("section");
        flowersDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = flower.name;
        section.append(h3);

        const petals = document.createElement("p");
        petals.innerHTML = `<strong>Petals: </strong> ${flower.petals}`;
        section.append(petals);

        const family = document.createElement("p");
        family.innerHTML = `<strong>Family: </strong> ${flower.family}`;
        section.append(family);

        const color = document.createElement("p");
        color.innerHTML = `<strong>Color: </strong> ${flower.color}`
        section.append(color);

        const places = document.createElement("p");
        places.innerHTML = `<strong>Petals: </strong> ${flower.places}`
        section.append(places);

        const img = document.createElement("img");
        img.src = "http://localhost:3000/" + flower.img;
        section.append(img);

    });
}

const getFlowers = async() => {
    try{
        return (await fetch("http://localhost:3000/api/flowers")).json();
    }catch(error){
        console.log("error retrieving json");
        return " ";
    }
}

window.onload = () => showFlowers();