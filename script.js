$(document).ready(function() {   // Load the function after DOM ready.
    console.log("test");
    var t1= '<p>This is a demo page</p>'+
            '<link rel=\'stylesheet\' href=\'https://eu-bots.kore.ai:443/webclient/UI/dist/kore-ai-sdk.min.css\'></link>'+
            '<script src=\'https://eu-bots.kore.ai:443/api/platform/websdkjs/a0e83cecdd294e688e1db09aacc2ef5690d38e021aef49bebff49e32bcdde578st53\'></script>'+
            '<script>KoreSDK.show(KoreSDK.chatConfig);</script>';
    
    $("body").append(t1);
    });



