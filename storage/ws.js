import api from "../api/api.js";


let ws = {


    async getALlChamps (){
        const data = await api.getAllChampions();
        const arr =  Object.values(data.data);
        return arr
    },


    async showMiniChamps(ini,fin){

        const datos = await this.getALlChamps();
        console.log(datos);
        const paginas = datos.slice(`${ini}`,`${fin}`);

        let html = ''
        datos.forEach((e,v) =>{
            //console.log(`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${e}.png`);
            html += /*html*/`<div class=" minis  p-1 " style="width: 90px; height: 90px;display: inline;">
                                    <img src="http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${e.id}.png" style="width: 80px;" alt="" srcset="">
                             </div>`


        })

        console.log([html]);
        return [html];

    }


}

// limites (0,60)  , (61,121), (122,163)

self.addEventListener("message",(e)=>{

    //ws.getALlChamps();

    Promise.resolve(ws[`${e.data.accion}`]()).then(res =>{postMessage(res)});

    //postMessage(ws[`${e.data.accion}`]());


})