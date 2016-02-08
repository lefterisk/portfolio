<!DOCTYPE html>
<html ng-app="Portfolio">
<head profile="http://www.w3.org/2005/10/profile">
    <meta charset="utf-8">
    <base href="/">
    <link rel="icon" type="image/x-icon" href="http://www.lefterisk.com/favicon.ico">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="./css/vendor.min.css">
    <link rel="stylesheet" href="./css/app.css">
    <link href='https://fonts.googleapis.com/css?family=Megrim|Lato:400,300' rel='stylesheet' type='text/css'>
</head>
<body>
<div class="outerFrame">
    <span class="borderTop"></span>
    <span class="borderLeft"></span>
    <span class="borderBottom"></span>
    <span class="borderRight"></span>
    <div ui-view></div>
</div>
<script src="./js/vendor.min.js"></script>
<script src="./js/app.min.js"></script>
<script type="application/ld+json">
{
    "@context" : "http://schema.org",
    "@type" : "Person",
    "name" : "Lefteris Kokkonas",
    "url" : "http://www.lefterisk.com",
    "sameAs" : [
        "http://www.facebook.com/lefteris.kokkonas",
        "http://www.linkedin.com/in/lefteris-kokkonas-8b853845",
        "http://www.github.com/lefterisk",
    ]
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "http://www.lefterisk.com/about",
    },
    "birthDate": "1985-03-27",
    "jobTitle": "Senior web-developer, UX Consultant",
    "description" : "Lefteris Kokkonas is a web developer and entrepreneur. Specialises in building complex data management and visualisation platforms."
    "image" : "http://www.lefterisk.com/img/brand.png"
}
</script>
</body>
</html>