// in articles ads 
var article_ads = `<script type="text/javascript">
var channel_condition = object.booleanMethod();
google_ad_client = "ca-pub-1525045383348447;
google_ad_slot = "3060535157";
google_ad_width = 728;
google_ad_height = 90;
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>`

// side-bar ads desktop
var side_ads = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'+
'<!-- for new layout -->'+
'<ins class="adsbygoogle"'+
    'style="display:block"'+
    'data-ad-client="ca-pub-1525045383348447"'+
    'data-ad-slot="5166941866"'+
    'data-ad-format="auto"'+
    'data-full-width-responsive="true"></ins>'+
'<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>'

// bottom article ads
var bottom_ads = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'+
'<!-- for new layout square -->'+
'<ins class="adsbygoogle"'+
    'style="display:block"'+
    'data-ad-client="ca-pub-1525045383348447"'+
    'data-ad-slot="5166941866"'+
    'data-ad-format="auto"'+
    'data-full-width-responsive="true"></ins>'+
'<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>'
//side article ads insert
document.getElementById('article_ads').innerHTML = article_ads
// side ads insert
document.getElementById('side_ads').innerHTML = side_ads
// bottom ads insert
document.getElementById('bottom_ads').innerHTML = bottom_ads
