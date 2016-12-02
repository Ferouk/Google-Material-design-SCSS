$(document).ready(function(){
    /**
     * 
     * Sidebar toggle
     * 
     **/
	if ($(window).width() <= 840 && $(window).width() > 480){	
        var sidebarPos = { left: "-50%" }
        var navbarPos = { left: "50%" }
        var device = "pad";
	}else if($(window).width() <= 480){
        var sidebarPos = { left: "-75%" }
        var navbarPos = { left: "75%" }
        var device = "mobile";
    }else{
        var sidebarPos = { left: "-25%" }
        var navbarPos = { left: "25%" }
        var device = "desktop";
    }
    var initPos = { left: "0" }

    $("#sidebar-toggle").on("click", function(){
       if($('#sidebar-toggle').hasClass('active')){
            $('aside').animate(sidebarPos, 500);
            $("header").animate(initPos, 500, function(){
                    $('span.logo').parent().show();
                });
            if(device != "mobile"){
                $('header nav').show();   
            }
            $('#sidebar-toggle').html("<i class='material-icons'>menu</i>")
            $('#sidebar-toggle').removeClass("active");
            $('.overlay').fadeOut();
        }else{
            $('aside').animate(initPos, 500);
            $("header").animate(navbarPos, 500);
            $('#sidebar-toggle').html("<i class='material-icons'>close</i>")
            if(device == "mobile"){
                $('span.logo').parent().hide();
            }
            $('header nav').hide();
            $('#sidebar-toggle').addClass("active");
            $('.overlay').fadeIn();

        }

    });

});

