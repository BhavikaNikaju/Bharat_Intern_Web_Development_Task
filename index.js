const cel=document.getElementById("cel");
const feh=document.getElementById("feh");
const i=document.getElementById("image");
cel.addEventListener('input',function(){
    let c=this.value ;
    let f=(c*9/5)+32;
    feh.value=f;
    i.src="feh-removebg-preview (1).png"
})
feh.addEventListener('input',function(){
    let f=this.value ;
    let c=(f-32)*5/9;
    cel.value=c;
    i.src="cel-removebg-preview.png"
})
