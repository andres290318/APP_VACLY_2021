var vacunas=["pzifer","Astrazeneca","Biotech","moderna"];
var master_container=document.getElementById("Bars");
var bar1=document.getElementById("Sub-Bone-pain");
var bar2=document.getElementById("Sub-headache");
var bar3=document.getElementById("Sub-malestar");
var bar4=document.getElementById("Sub-insomia");
//var indicador_totalusers=document.getElementById("Number-indicador#0");
var Number_indicador1=document.getElementById("Number-indicador#1");
var Number_indicador2=document.getElementById("Number-indicador#2");
var Number_indicador3=document.getElementById("Number-indicador#3");
var Number_indicador4=document.getElementById("Number-indicador#4");
//codigo no barras
var BTN_derecho_Vaccine=document.getElementById("left-2");
var BTN_izquierdo_Vaccine=document.getElementById("right-2");
var monitor_vaccine=document.getElementById("monitor-2");
var fechas=document.getElementsByClassName("date");
var desde=document.getElementById("desde");
var hasta=document.getElementById("hasta");
var sub_desde=document.getElementById("sub_desde");
var sub_hasta=document.getElementById("sub_hasta");
var sub_monitor_2=document.getElementById("sub_monitor_2");
var totalusers=50000;
var Contador=0;
//barra
var btn=document.getElementById("btn-menu");
//elementos del documento
var title=document.getElementById("title");
var cajadetexto=document.getElementById("cajadetexto");
var img=document.getElementById("img");
var select=document.getElementById("select-vaccine");
var hr=document.getElementById("hr");

btn.addEventListener("click",()=>{
    if(select.style.opacity=="0.5"){
        title.style.opacity="100%";
        master_container.style.opacity="100%";
        cajadetexto.style.opacity="100%";
        img.style.opacity="100%";
        select.style.opacity="100%";
        hr.style.opacity="100%"
    }else{
        title.style.opacity="50%";
        master_container.style.opacity="50%";
        cajadetexto.style.opacity="50%";
        img.style.opacity="50%";
        select.style.opacity="50%";
        hr.style.opacity="50%"
    }
})
function calcular_y_poner_barras(){
    //escribo "totalusers" en el p que me muestra cuantos usuarios hay hecho la encuenta
    //indicador_totalusers.textContent= `${totalusers}`;
    //obtengo los numeros que estan e los p que se encuentran en el div bar y los comvierto en en numeros
    let bonepain=parseInt(Number_indicador1.textContent);
    let headache=parseInt(Number_indicador2.textContent);
    let malestar=parseInt(Number_indicador3.textContent);
    let insomia=parseInt(Number_indicador4.textContent);
    //calculo el porcentaje que ocuparan en pantalla y se lo asigno
    bar1.style.width=`${parseInt((bonepain/totalusers)*master_container.offsetWidth)}px`;
    bar2.style.width=`${(parseInt((headache/totalusers)*master_container.offsetWidth))}px`;
    bar3.style.width=`${parseInt((malestar/totalusers)*master_container.offsetWidth)}px`;
    bar4.style.width=`${(parseInt((insomia/totalusers)*master_container.offsetWidth))}px`;
    
    //coloco el porcentaje en los p que estan en cada barra
    Number_indicador1.textContent= `${parseInt((bonepain/totalusers)*100)}%`;
    Number_indicador2.textContent= `${parseInt((headache/totalusers)*100)}%`;
    Number_indicador3.textContent= `${parseInt((malestar/totalusers)*100)}%`;
    Number_indicador4.textContent= `${parseInt((insomia/totalusers)*100)}%`;
   
}
calcular_y_poner_barras();
//-----------------------------------------------------------------//
//programcion de botones para escoger la vacuna
BTN_derecho_Vaccine.addEventListener("click",()=>{
    if(Contador==4){
        sub_monitor_2.textContent=vacunas[0];
        Contador=0;
    }else{
        sub_monitor_2.textContent=vacunas[Contador];
        Contador++;
    }
});
BTN_izquierdo_Vaccine.addEventListener("click",()=>{
    if(Contador==-1){
        Contador=3;
        sub_monitor_2.textContent=vacunas[3]
    }else{
        sub_monitor_2.textContent=vacunas[Contador];
        Contador--;
    }
});
//--------------------------------------------------------------------//
//programcion fechas,capturar la fecha escogida
// fechas[0].addEventListener("change",()=>{
//     sub_desde.textContent=" ";
//     sub_desde.append(fechas[0].value);
// });
// fechas[1].addEventListener("change",()=>{
//     sub_desde.textContent=" ";
//     sub_desde.append(fechas[1].value);
// });
// fechas[2].addEventListener("change",()=>{
//     sub_hasta.textContent=" ";
//     sub_hasta.append(fechas[2].value);
// });
// fechas[3].addEventListener("change",()=>{
//     sub_hasta.textContent=" ";
//     sub_hasta.append(fechas[3].value);
// });
//restriciones de la fecha






