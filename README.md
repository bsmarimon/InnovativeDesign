Website for Innovative Design, built using Meteor 1.1.0.3

TO-DOs
* ~~get the favicon to work~~
* move Orion CMS into file outside server/client
* add marketing tab
* add alumni tab
* Sass-ify 
* ~~club page redesign~~
* ~~member page redesign~~
* tweak to decal page squares, add description as it's own square
* ~~fix requests redirect to homepage~~
* fix footer positioning (also on mobile)
* image compression
* less janky way to render decal pages
* ~~break up templates into smaller templates~~
* all h3 tages should be h2 tags, and vice versa, oops

Download meteor https://www.meteor.com/install, clone the repository, cd to root directory and run "meteor". For deploying to heroku, read http://justmeteor.com/blog/deploy-to-production-on-heroku/. 

Package for deploying to Heroku:
https://github.com/jordansissel/heroku-buildpack-meteor.git

Package List:
* meteor-platform
* iron:router
* materialize:materialize
* fortawesome:fontawesome
* orionjs:core
* orionjs:materialize
* orionjs:filesystem
* orionjs:file-attribute
* orionjs:summernote
* orionjs:relationships
* orionjs:image-attribute
* orionjs:s3

Uploading relative larger file sizes (>5 MB) causes Chromium/Chrome to crash. Video doesn't work on Safari, updating to Meteor 1.2 fixes issue but causes problems with packages. Saving AWS config can also cause a crash. You can always run 

heroku restart -a app_name

Important base classes:
* rowFix - sets margin-bottom for row to 0px
* removeLeftPadding, removeRightPadding - removes padding for columns
* img-responsive - sets max-width to 100%




