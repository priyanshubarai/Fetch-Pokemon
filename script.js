document.body.querySelector("button").addEventListener("click",(e) => {getData()})

async function getData() {
    try{
        let Name = document.body.querySelector("input").value
        if(Name == ''){
            throw new Error ("no Name Provided")
        }
        else{
            console.log("Pokemon = "+Name)
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Name}`);
            if (!response.ok){
                throw new Error("pokemon do not exist!")
            }
            let img_src = (await response.json()).sprites.front_default        
            document.body.querySelector("Img").attributes.src.value
     = img_src
        }
    }
    catch(error){console.error(error)}
}
