$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            sname:{
                required:true,
                minlength:4

            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:6,
                maxlength:8
            },
            day:{
                required:true

            },
            month:{
                required:true

            },
            year:{
                required:true
            },
            gender:{
                required:true
            }

        },
        messages:{
            fname:{
            required:"enter first name",
            minlength:"enter atleast 4 letter"
            }
        }
        
    })
})