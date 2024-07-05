$(document).ready(function(){
    $(".divs").hide()
    $("#nav1").on("click",function(e){
        mostrarCuadrados(1)
    })
    $("#nav2").on("click",function(e){
        mostrarCuadrados(2)
    })
    $("#nav3").on("click",function(e){
        mostrarCuadrados(3)
    })
    $("#nav4").on("click",function(e){
        mostrarCuadrados(4)
    })
    
})

function mostrarCuadrados(numero)
{
    if($("#div_"+numero).is(":visible"))
        {
            $("#div_"+numero).hide()
        }else{
            $(".divs").hide()
            $("#div_"+numero).show()
        }
}