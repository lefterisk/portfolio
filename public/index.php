<?php
    $name        = "Lefteris Kokkonas";
    $title       = "Lefteris Kokkonas, senior web-developer, UX Consultant";
    $description = "Lefteris Kokkonas is a web developer and entrepreneur. Specialises in building complex data management and visualisation platforms.";
    $image       = "http://www.lefterisk.com/img/brand.jpg";
?>
<!DOCTYPE html>
<html ng-app="Portfolio">
<head profile="http://www.w3.org/2005/10/profile">
    <meta charset="utf-8">
    <base href="/">
    <link rel="icon" type="image/x-icon" href="http://www.lefterisk.com/favicon.ico">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="./css/vendor.min.css">
    <link rel="stylesheet" href="./css/app.css">
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300|Dosis:200' rel='stylesheet' type='text/css'>

    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@LKokkonas">
    <meta name="twitter:creator" content="<?php echo $name; ?>">
    <meta name="twitter:title" content="<?php echo $title; ?>">
    <meta name="twitter:description" content="<?php echo $description; ?>">
    <meta name="twitter:image:src" content="<?php echo $image; ?>">
    <meta property="og:url" content="http://www.lefterisk.com/">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo $image; ?>">
    <meta property="og:description" content="<?php echo $description; ?>">
    <meta property="og:site_name" content="<?php echo $name; ?>">
    <meta name="og:title" content="<?php echo $title; ?>" />
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
    "name" : "<?php echo $name; ?>",
    "url" : "http://www.lefterisk.com",
    "sameAs" : [
        "http://www.facebook.com/lefteris.kokkonas",
        "http://www.linkedin.com/in/lefteris-kokkonas-8b853845",
        "http://www.github.com/lefterisk"
    ],
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "http://www.lefterisk.com/about"
    },
    "birthDate": "1985-03-27",
    "jobTitle": "<?php echo $title; ?>",
    "description" : "<?php echo $description; ?>",
    "image" : "<?php echo $image; ?>"
}
</script>
</body>
</html>