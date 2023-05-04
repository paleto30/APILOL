


const showAllMiniChamps = () =>{

    const ws =  new Worker("../storage/ws.js", {type:"module"});
    ws.postMessage({accion:"showMiniChamps", body:""});


    ws.addEventListener("message",(e)=>{
        console.log("result:",e.data);
        document.querySelector("#minisF").innerHTML = e.data;

        ws.terminate();
    })

}

























export default{
    showAllMiniChamps
}