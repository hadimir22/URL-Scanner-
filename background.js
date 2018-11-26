chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      jQuery('#qrcodeCanvas').qrcode({
        text	: tabs[0].url
    });	
     
});

 

 