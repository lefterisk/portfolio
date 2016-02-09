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
    <style>
        /*Inlining minified css resources to save on number of requests*/
        <?php require_once("./css/vendor.min.css"); ?>
        <?php require_once("./css/app.css"); ?>

        /* minified  <link href='https://fonts.googleapis.com/css?family=Lato:400,300|Dosis:200' rel='stylesheet' type='text/css'>*/
        @font-face{font-family:Dosis;font-style:normal;font-weight:200;src:local('Dosis ExtraLight'),local('Dosis-ExtraLight'),url(https://fonts.gstatic.com/s/dosis/v4/zuuDDmIlQfJeEM3Uf6kkpnYhjbSpvc47ee6xR_80Hnw.woff) format('woff')}@font-face{font-family:Lato;font-style:normal;font-weight:300;src:local('Lato Light'),local('Lato-Light'),url(https://fonts.gstatic.com/s/lato/v11/kcf5uOXucLcbFOydGU24WALUuEpTyoUstqEm5AMlJo4.woff) format('woff')}@font-face{font-family:Lato;font-style:normal;font-weight:400;src:local('Lato Regular'),local('Lato-Regular'),url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff')}
    </style>
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
<script type="application/javascript">
    /*Inlining minified js resources to save on number of requests*/
    <?php require_once("./js/vendor.min.js");?>
    <?php require_once("./js/app.min.js");?>
</script>
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