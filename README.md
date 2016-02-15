### Portfolio website
This is a static website, everything required for production is in the `public` directory. Everything required for development will be in `public_dev`. 

Tech stack used:
* npm for server dependencies (Gulp, Bower etc)
* Bower for frontend dependencies
* Gulp for compiling all vendor dependencies, app code, scss files etc

The building process is run by gulp. The gulp file `gulpfile.js` contains distinctive tasks such as:
* `vendor-js`: Compiles, concats, minifies all vendor js dependencies
* `vendor-css`: Compiles, concats, minifies all vendor css dependencies
* `app-js`: Compiles, concats, minifies all app specific js
* `app-scss`: Compiles, concats, minifies all app specific css
* `default`: Runs all the tasks above in sequence once
* `watch-app-js`: Fires up the watcher for the app specific js files 
* `watch-app-css`: Fires up the watcher for the app specific css files
* `watch-init`: Fires up both file watchers

####Proposed sequence to run prior start of development
Assuming `npm`, `bower` are already installed globally
* `npm install`
* `bower install`
* `gulp watch-init`

###Dependencies
* Angular
* Bourbon
* Susy
