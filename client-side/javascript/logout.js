$(document).ready(function(){
    $("#userName").click(function(){
        $("#confirmLogoutPopup").css("display", "inline-block");
    
        $("#confirmLogout").click(function(){
            $.ajax({
                type: "POST",
                url: "https://comp426-bookclub.herokuapp.com/logout",
                success: function () {
                    window.location = '../';
                }
              });
        })
    
        $("#cancelLogout").click(function(){
            $("#confirmLogoutPopup").css("display", "none");
        })
    })
})

