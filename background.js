chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    $('#url').html(tabs[0].url);
    jQuery('#qrcodeCanvas').qrcode({
        text	: tabs[0].url
    });	
     
});

 

 