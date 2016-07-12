$(document).ready(function () {
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    
    $(".boton").click(function (){
        $(".errorL").remove();
        if( $(".nombre").val() == "" ){
            $(".nombre").focus().after("<span class='errorL'>Ingrese su nombre</span>");
            return false;
        }else if( $(".apellido").val() == "" ){
            $(".apellido").focus().after("<span class='errorL'>Ingrese su apellido</span>");
            return false;
        }else if( $(".email").val() == "" || !emailreg.test($(".email").val()) ){
            $(".email").focus().after("<span class='errorL'>Ingrese un email correcto</span>");
            return false;
        }else if( $(".empresa").val() == ""){
            $(".empresa").focus().after("<span class='errorL'>Ingrese una Empresa</span>");
            return false;
        }else if( $(".pais").val() == ""){
            $(".pais").focus().after("<span class='errorL'>Ingrese un Pais</span>");
            return false;
        }else if( $("#inputPostal").val() == "" ){
            $(".codpostal").focus().after("<span class='errorL'>Ingrese un codigo postal</span>");
            return false;
        }
    });
    $(".nombre, .apellido, .empresa, .pais, .codpostal").keyup(function(){
        if( $(this).val() != "" ){
            $(".errorL").fadeOut();
            return false;
        }
    });
    $(".email").keyup(function(){
        if( $(this).val() != "" && emailreg.test($(this).val())){
            $(".errorL").fadeOut();
            return false;
        }
    });
    /*
    $('.solo-numero').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        });
    });
    */
});