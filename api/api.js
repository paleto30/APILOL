


const getAllChampions = async () =>{
    try {
        const data = await fetch("http://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion.json");
        const result =  await data.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}





const getAllMinis = async (key)=>{
    try {
        const data = await fetch (`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${key}.png`);
        const result = await data.json();
        
    } catch (error) {
        console.error(error);
    }
}










export default{
    getAllChampions
}