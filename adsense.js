// in articles ads 
var article_ads ='<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'+
'<ins class="adsbygoogle"'+
     'style="display:block; text-align:center;"'+
     'data-ad-layout="in-article"'+
     'data-ad-format="fluid"'+
     'data-ad-client="ca-pub-1525045383348447"'+
     'data-ad-slot="3060535157"></ins>'+
'<!-- ads ending -->'

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
//article ads insert loop
var ad1 = document.getElementsByClassName('article_ads');
for (let a = 0; a < ad1.length; a++) {
    ad1[a].innerHTML = article_ads;
    const script = document.createElement('script');
    document.body.append(script);
    script.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
}
// side ads insert
document.getElementById('side_ads').innerHTML = side_ads
// bottom ads insert
document.getElementById('bottom_ads').innerHTML = bottom_ads
