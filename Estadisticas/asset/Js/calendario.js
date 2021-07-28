var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Noviembre","Diciembre"]

var fecha_actual=new Date();
var dia_actual=fecha_actual.getDate();
var mes_actual=fecha_actual.getMonth();
var año_actual=fecha_actual.getFullYear();

var days=document.getElementById("days");
var mes=document.getElementById("mes");
var año=document.getElementById("year");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var diascalendario=document.getElementById("dia_del_calendario");

mes.textContent=meses[mes_actual]
año.textContent=año_actual.toString();
escribir_mes();

//escribir mes
function escribir_mes(){
    diascalendario.textContent=" ";
    for(let i=0;i<calculardiasdel_mes(mes_actual);i++){
        diascalendario.innerHTML+=`<div class="calendario_day calendar_item">${i}</div>`
    }
}

//cuantos dias tiene ese mes
function calculardiasdel_mes(month){
    if(month==-1)month=11;
    if(month ==0|| month==2 ||month==4|| month==6|| month==7||month==9||month==11 ){
        return 31;
    }else if(month==3||month==5||month==8||month==10){
        return 30;
    }else{
        return bisciesto() ? 29:28;
    }
}

//en que dia cae el primer dia del mes
function cual_es_el_primerdia_del_mes(){
    let primer_dia=new Date(año_actual,mes_actual,1);
    //me devuelve numeros desde 0 a 7,en caso el dia sea domingo no devolvera 0
    return((primer_dia.getDay()-1)=== -1)? 6: primer_dia.getDay()-1;
}
//ver si el dia es bisciesto
function bisciesto(){
    return((año_actual %100 !=0)&&(año_actual%4==0)||(año_actual%400==0));
}
//dibujar proximo el ultimo mes
function ultimo_mes(){
    if(mes_actual!=0){
        mes_actual--;
        dibujar_fecha();
        escribir_mes();
    }else if(mes_actual==0){
        mes_actual=11
        mes.textContent=meses[mes_actual]
        año_actual--;
    }else{
        mes_actual=11;
        año_actual--;
        dibujar_fecha();
        escribir_mes();
    }
}
//dibujar el proximo mes
function proximo_mes(){
    if(mes_actual!=10){
        mes_actual++;
    }else{
        mes_actual=0;
        año_actual++;
    }
    dibujar_fecha();
    escribir_mes();
}

//funcion dibujar fecha
function dibujar_fecha(){
    fecha_actual.setFullYear(año_actual,mes_actual,dia_actual);
    mes.textContent=meses[mes_actual]
    año.textContent=año_actual.toString();
}

prev.addEventListener("click",ultimo_mes);
next.addEventListener("click",proximo_mes);