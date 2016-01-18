Website for Innovative Design, built using Meteor. 

I wasn't thinking for some reason, and all h3 tages should be h2 tags, and vice versa, oops. Need to fix.

TO-DOs
* ~~get the favicon to work~~
* move Orion CMS into file outside server/client
* add marketing tab
* add alumni tab
* ~~club page redesign~~
* ~~member page redesign~~
* tweak to decal page squares, add description as it's own square
* ~~fix requests redirect to homepage~~
* fix footer positioning (also on mobile)
* image compression
* less janky way to render decal pages
* ~~break up templates into smaller templates~~

Download meteor https://www.meteor.com/install, clone the repository, cd to root directory and run "meteor". 

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

Uploading relative larger file sizes (>5 MB) causes Chromium/Chrome to crash.

Common classes:
* rowFix - sets margin-bottom for row to 0px
* removeLeftPadding, removeRightPadding - removes padding for columns
* img-responsive - sets max-width to 100%

Package for deploying to Heroku:
https://github.com/jordansissel/heroku-buildpack-meteor.git


