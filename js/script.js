let stars= document.getElementById("stars");
let Nouvil= document.querySelector(".Nouvil"); 
let moon= document.getElementById("moon"); 
let mountains3= document.getElementById("mountains3"); 
let mountains4= document.getElementById("mountains4"); 
let river= document.getElementById("river"); 
let boat= document.getElementById("boat"); 



onscroll=()=>{
    let value=scrollY;
stars.style.left=value *3+"px";
moon.style.top=value *3+"px";
mountains3.style.top=value *2+"px";
mountains4.style.top=value *1.5+"px";
river.style.top=value+"px";
boat.style.top=value-20+"px";
boat.style.left=value*2+"px";

console.log(value)

Nouvil.style.position ="fixed";
Nouvil.style.fontSize  = value +"px";
    if(scrollY>=120){
        Nouvil.style.fontSize  =122+"px";

if(scrollY>= 504){
    Nouvil.style.display ="none";


}else{
    Nouvil.style.display ="block";

}

        if(scrollY>=211){

    document.querySelector(".mine").style.background="linear-gradient(#0c4d6c  ,#10001f)";

        }   else{
            document.querySelector(".mine").style.background="linear-gradient(#000000 ,#10001f)";

        }
        
        





    }
}  