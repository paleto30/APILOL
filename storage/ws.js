import api from "../api/api.js";


let ws = {


    async showMiniChamps(){
        
        const data = await api.getAllChampions();

        let html = ''
        Object.keys(data.data).forEach(e =>{
        
            //console.log(`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${e}.png`);
            html += /*html*/`<div class=" minis  p-1 " style="width: 90px; height: 90px;display: inline;">
                                    <img src="http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${e}.png" style="width: 80px;" alt="" srcset="">
                             </div>`


        })
        
        return [html]

    }


}



self.addEventListener("message",(e)=>{


    Promise.resolve(ws[`${e.data.accion}`]()).then(res =>{postMessage(res)});

    //postMessage(ws[`${e.data.accion}`]());


})