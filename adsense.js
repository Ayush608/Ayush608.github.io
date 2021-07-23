// adsense script
data-ad-client="ca-pub-1525045383348447" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
// in articles ads 
var article_ads ='<ins class="adsbygoogle"'+
     'style="display:block; text-align:center;"'+
     'data-ad-layout="in-article"'+
     'data-ad-format="fluid"'+
     'data-ad-client="ca-pub-1525045383348447"'+
     'data-ad-slot="3060535157"></ins>'


// side-bar ads desktop
var side_ads = '<ins class="adsbygoogle"'+
    'style="display:block"'+
    'data-ad-client="ca-pub-1525045383348447"'+
    'data-ad-slot="5166941866"'+
    'data-ad-format="auto"'+
    'data-full-width-responsive="true"></ins>'


// bottom article ads
var bottom_ads = '<!-- for new layout square -->'+
'<ins class="adsbygoogle"'+
    'style="display:block"'+
    'data-ad-client="ca-pub-1525045383348447"'+
    'data-ad-slot="5166941866"'+
    'data-ad-format="auto"'+
    'data-full-width-responsive="true"></ins>'
// ad1 2 3 variable
var ad1 = document.getElementsByClassName('article_ads');
var ad2 = document.getElementsByClassName('side_ads');
var ad3 = document.getElementsByClassName('bottom_ads');
// total ads variable
let tads = ad1.length + ad2.length + ad3.length;

//article ads insert loop
for (var l1 = 0; l1 < ad1.length; l1++) {
    ad1[l1].innerHTML = article_ads;
}
// side ads insert loop
for (var l2 = 0; l2 < ad2.length; l2++) {
    ad2[l2].innerHTML = side_ads;
}
// bottom ads insert loop
for (var l3 = 0; l3 < ad3.length; l3++) {
    ad3[l3].innerHTML = bottom_ads;
}
 // pushing ads via this loop
for (let adpush = 0; adpush < tads; adpush++) {
    const script = document.createElement('script');
    document.body.append(script);
    script.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});'
}
