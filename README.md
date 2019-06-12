# app.js

JavaScript objects to handle app customisation and modification of items within AppShed.


  - Change the text and image values of items
  - Move and remove items from the screen
  - Dyncamically create items using code
  
  
## Usage 
### Stable Version
To use  the stable version of `app.js` in your AppShed app:
* Open your app in the AppBuilder
* Open `Settings`
* Got to the `Advanced` tab
* Paste this line of code at the top of `Custom JavaScript`:

 `window.app = app; var script= document.createElement('script'); script.type= 'text/javascript'; script.src='https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/files/appjs.js'; document.getElementsByTagName('head')[0].appendChild(script);`

* You can now call any of the `app` methods as `JavaScript` actions
  * Add an item to your app
  * Change the `Action` to `JavaScript`
  * Past this code into the code area:  `app.setBackground()` 
  * This will set a random background color for the screen
  
  
### Latest updates
NOTE: The latest updates may not be fully tested, so only use this if you are prepared to experiemnt a bit!

To use  the latest updates of `app.js` in your AppShed app:
* Copy the code from the `app.js` file in GitHub
* Open your app in the AppBuilder
* Open the `Settings`
* Go to the `Advanced` tab
* Paste the JavaScript code into the field called `Custom JavaScript`





## Example
Here's a small example that uses `app.js` to create a simple Picture Puzzle game. Download the ZIP file and follow the Quick Start Guide.

https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/files/picture-puzzle-quick-start-guidezip.zip	

### See it in action:
  - On a phone http://apps.appshed.com/picturepuzzle/
  - On a PC http://appshed.com/appbuilder/preview/picturepuzzle
  - Move the puzzle pieces by tapping on them



## app (Object)
The app Object is instantitated when the app loads. It is the starting point for all interactions with the app. It contains methods to instantiate objects for Screens, Items, Devices etc.

### app Methods
* `addDevice(props)` Adds an IoT Device (such as ESP8266, RaspberryPi or Arduino) to this app. `props` is a JSON object containing the properties of the device
* `appendToVariable(variable,value[,atFront])` Appends `value` to `variable`. Optionally if `atFront` is `true` adds the `value` to the front of the `variable`
* `digitalWrite(id,pin,value)` For the device `id` the pin number `pin` is set to `value`
* `getItem(id)` returns an `Item` object for `id`
* `getItemHTML([id,type,data])` returns the default HTML for an item
  * `id` (optional) will be set as the HTML id
  * `type` (optional, default `thumb`) determines which type of item is returned
  * `data` (optional) a JSON object containing data for the item
* `getRandomColor([numOfSteps, step])` Returns a random color in the format `rgb(x,y,z)`. 
  * Optional `numOfSteps` determines how many steps to separate the color spectrum into.
  * Optional `step` specifies the specific step to return. Default is a random step.
* `getScreen([id])` returns the `Screen` object for `id`. `id` is optional. If `id` is ommitted the current screen is returned.
* `setInterval(func,delay[,timeout])` repeatedly calls `func` with a fixed `delay`, optionally stops after `timeout`

### app Supporting Methods 
These additional supporting methods are also available in the `app` object
* `addARESTScripts()` Adds the script tags required by aREST to the `<head>`
* `addInterval(id)` Adds an interval handler `id` to the array of intervals, returns the array index of this handler
* `addScript(url)` Adds a `<script>` tag with `src = url` to the `<head>` 
* `findClass(element, className)` returns the first `HTMLElement` inside `element` that contains the class `className`
* `getIPs(callback)` Returns an array of actice IP addresses on the same Subdomain. Returns an array of actice IP addresses on the same Subdomain. Optionally calls `callback` when done.
* `getItemByDomId(domId)` returns an `Item` object for `domId` (where `domId` is the DOM id for the item, e.g. 'item1234')
* `getItemsElement()`returns the `HTMLElement` that contains all the `Items`. This element is used when adding or removing HTML
* `handleError(er,msg)` used for debugging to provide notification of an error

## Item (Class)
This is a top-level class representing an Item. In AppShed, items are all the 'things' you can add to your screens, e.g. text, image, image-link etc.


### Item Properties
* `id` The `id` of the Item. This is required to instantiate the object.
* `element` The `DOMElement` for this item
* `domId` The `DOM Id` for this item (typically item+id)


### Item Methods
* `getIconAbove()` returns the icon in the row above this icon
* `getIconBelow` returns the icon in the row above this icon
* `getIconLeft()` returns the icon on the left of this icon
* `getIconRight()` returns the icon on the right of this icon
* `getImage()` returns the URL of the image for this item
* `isAbove(otherId)` returns true this item is above the `otherId` Item
* `isBelow(otherId)` returns true this item is below the `otherId` Item
* `isLeft(otherId)` returns true this item is left of the `otherId` Item
* `isRight(otherId)` returns true this item is right of the `otherId` Item
* `place(x,y)` place the item at a certain absolute `x,y` position
* `setBackgroundColor()` set the background color of this Item to `color`
* `setHTML(str)` set the value of Html to `str`
* `setImage(src)` set the image URL to `src`
* `setText(str)` set the value of Text to `str` 
* `setTextColor()` set the color of Text to `color`
* `setSubTitle()` set the value of Sub Title to `str`
* `setTitle()` set the value of Title to `str`
* `swap(otherId)` swaps this icon with the `otherId` Item


### Item Supporting Methods 
* `toString()` returns a string representation of the object 


------
## Screen (Class)
This is a top-level class representing a Screen. In AppShed there are four main screen types:

* Standard
* Icons
* Map
* Gallery


### Screen Properties
* `id` The `id` of the Screen. This is required to instantiate the object.
* `element` The `DOMElement` for this screen
* `domId` The `DOM Id` for this screen (typically screen+id)
* `items` A hash of `Item` objects for this screen
* `icons`  A hash of `Icon` objects for this screen


### Screen Methods
* `addIconRows(numRows,data)` Adds `numRows` rows of icons. Uses `data` to populate the rows 
* `countColumns()` Returns the number of columns (for `Icon` screen types)
* `getBackgroundColor()` Returns the `backgroundColor` of this `Screen`
* `getIconAbove(iconId)` returns the icon in the row above this icon
* `getIconBelow(iconId)` returns the icon in the row below this icon
* `getIconLeft(iconId)` returns the icon on the left of this icon
* `getIconRight(iconId)` returns the icon on the left of this icon
* `getIconRowHTML(idStart,cols,data)` returns the HTML for a row of (cols) Icons
* `getIcons()` 
 * `Returns an object of `Items`
 * The object has rows and columns corresponding to the icons on the screen
 * `Returns `null` if not an `Icons` screen
* `getItems(clearCache)` return all the items on this screen as objects
* `getType()` Returns the type of `Screen`, one of: `list` | `icon` | `gallery` | `map`
* `setBackgroundColor(color)` Sets the `backgroundColor` of this `Screen` to `color`
* `setBackgroundImage(src[,method])` Sets the `backgroundImage` of this `Screen` to `src`. 
 * `Optional `method` determines the layout
 * One of: `fit` | `fill` | `stretch` | `center` | `tile`
 * `method` defaults to `fit`
* `setTitle(str)` Sets the `Title` of the screen to `str`. Returns the `Screen` object


### Screen Supporting Methods
* `addIconRow(rowHTML,index,data)`
 * Adds a row of `Icons` by inserting `rowHTML` into the table
 * `index` specifies the row where to insert. Defaults to -1 (bottom of the table)
 * If `rowHTML` is ommitted then the HTML is generated using `data`
 * `data` contains the values to be used for the Icons. 
* `clearItemsCache()` Clears the `items` hash (local cache)
* `getNextId(testId)` Returns the next valid (unused) `id`. Used when creating `Items` dynamically.
* `getTable()` Returns the HTML `table` element (for `Icon` screen types) 
* `toString()` Returns a string represenation of the `Screen`



## Versions
 * v1.0.0 (01-04-2016) Launched April 2016
 * v1.1.0 (26-05-2016) Added some methods to set colors for Item Text and Background
 * v1.1.1 (02-06-2016) error handling, setInterval()
 * v1.1.2 (02-06-2016) app.addDevice()
 * v1.1.3 (10-06-2016) app.getRandomColor(), app.appendToVariable(), screen.setBackgroundColor
 * v1.1.4 (20-06-2016) Support for Device LocalIP usage
 * v1.1.5 (22-0 016) Enhancements to Device class
 * v1.1.6 (02-07-2016) Support for IoT Board layouts
 * v1.1.7 (23-07-2016) Support for built-in LED, simpler device calling, stability improvements
 * v1.1.8 (10-08-2016) Support for findLocalDevices, blink LED
 * v1.2.1 (06-10-2016) aREST Pro support added. aREST local-and-cloud not supported
 * v1.2.2 (26-10-2016) Minor changes and additions
 * v1.2.3 (07-11-2016) Support for aREST Pro enhancements
 * v1.2.4 (12-11-2016) Send aREST Commands - multiple pin settings in one API call, servo support
 * v1.2.5 (15-12-2016) Tie device outputs to app variables to monitor values
 * v1.2.6 (20-12-2016) Event and Timer handling improvements
 * v1.2.7 (23-12-2016) Support for single device operating a softAP (Access Point)
 * v1.2.8 (26-12-2016) Touch position, touchX, touchY, touchAngle etc.
 * v1.2.9 (11-01-2017) Logo commands
 * v1.3.0 (17-02-2017) Motion Driving
 * v1.3.1 (12-03-2017) Switching between AP and Cloud mode
 * v1.3.2 (29-03-2017) Loop function 
 * v1.3.3 (01-04-2017) Form class added
* v1.3.4 (05-04-2017) import (library), applyStyles, range/slider and other special inputs
* v1.3.5 (09-04-2017) import improvements, accordion
* v1.3.6 (17-04-2017) RGB LED, theme & import in Description
* v1.3.7 (26-04-2017) Form localStorage save, aggregate functions
* v1.3.8 (28-04-2017) Data Class added, replaces Form Class, AppBuilder CSS, Blue light
 * v1.3.9 (05-05-2017) Data calculations, Data select, Data filters
* v1.3.10 (07-05-2017) Data enhancements
* v1.3.11 (14-05-2017) NeoPixel basic support
* v1.3.12 (27-05-2017) UI enhancements
* v1.3.13 (01-06-2017) Device supports Sketch 39 (getInfo() sends all pin values)
* v1.3.14 (07-06-2017) Minor enhancements, PhoneGap/Cordova fixes
* v1.3.15 (13-06-2017) AppBuilder UI enhancements
* v1.3.16 (20-06-2017) Import and Theme stability enhancements
* v1.3.17 (25-06-2017) app.log(), Mobile UI
* v1.3.18 (30-06-2017) Mobile UI enhancements
* v1.4.1 (10-07-2017) Included in UI for all users on load (no Custom JavaScript required), separated out CSS files
* v1.4.2 (12-07-2017) device.togglePin(), app.ready
* v1.4.3 (16-07-2017) Device.connect (with onConnected event)
* v1.4.4 (17-07-2017) app.doScreenImports()	
* v1.4.5 (19-07-2017) moved to ./appbuilder, wrap all in window.addEvent
* v1.4.6 (22-07-2017) bug fixing - Live site updated to include app.js 28-07-2017
* v1.4.7 (28-07-2017) Bug fixes
* v1.4.8 (01-08-2017) Connect to devices using local_ip, Device.tieAllPinsToVariables updated
* v1.4.9 (01-08-2017) Device.tie() supports analog
* v1.4.10 (05-08-2017) Item.addAction, hideTab(), showTab(), app.addClass(), app.removeClass(), core styles
* v1.4.11 (15-08-2017) Bug fixes
* v1.4.12 (30-08-2017) Phaser.io integration, doScreenOnload
* v1.4.13 (09-09-2017) hideTabBar() fixed, app.loadScript() now with callback onload, app.onReady()
* v1.4.14 (25-09-2017) Item.show(), Item.hide(), Item.isFormItem(), Item.getVariable(), Item.getVariableName()
* v1.4.15 (28-09-2017) app.import - callback has timeout, app.repositionItems()
* v1.4.16 (08-10-2017) Fixed Device.analogRead() 
* v1.4.17 (14-10-2017) .hidden-live, Screen.addItem, app.stopLoops()
* v1.4.18 (19-10-2017) .template, Screen.addItem({template}), Item.setAction()
* v1.4.19 (24-10-2017) coreStyles... Academy
* v1.4.20 (25-10-2017) renamed Data.getData() to Data.rows(), JavaScript API Documentation started
* v1.4.21 (25-10-2017) bug fixes: onLoad running multiple times, data.email
* v1.4.22 (11-12-2017) expanding addItem template
* v1.4.23 (11-02-2018) fixes to Item templates, minor bugs
* v1.4.24 (12-04-2018) Board definitions stored in local storage, Item.getLargeImage(), Device.tiePinsToVariables default true 
* v1.4.25 (31-05-2018) Integrate Phaser, Joystick and Gyro, minify 
* v1.4.26 (02-06-2018) Restructure some game stuff , Improve Device performance and reconnecting
* v1.4.27 (05-06-2018) addIotEvent, joystick and gyro enhancements
* v1.4.28 (24-06-2018) loader fixes, Device.getPinLayout
* v1.4.29 (29-07-2018) Game changes, keyboard control, Phaser styles, Device D0 support
* v1.5 (18-08-2018) Improved support for Phaser and Device integration with Phaser 
* v1.5.1 (18-08-2018) Better support for Export web-app, Base64 joystick sounds, added app.assets, app.game.[sprite,spriteSheet,tileSprite,audio, etc], new AppShed Academy
* v1.5.2 (10-10-2018) Game Maker IDE, Phaser 3
* 1.6.1 (31-10-2018) AppShed 3.0
* 1.6.2 (15-11-2018) Various Game Maker fixes, Firefox fixes /s regular expression
* 1.6.3 (18-11-2018) Go live, AppShed 3.0
* 1.6.4 (19-11-2018) Move to Open Street Map
* 3.0.1 (22-11-2018) Version change to match AppShed 3.0 release
* 3.0.2 (22-11-2018) Game changes to support Platformer
* 3.0.3 (28-11-2018) Fixes to Map (edit, delete)
* 3.0.4 (27-01-2019) Remove OpenStreetMap from app.js (loaded server side)
* 3.0.5 (05-02-2019) doScreenOnLoad not run in AppBuilder
* 3.0.6 (26-04-2019) Fixed  properties fieds, start stop, layout, indefinite spinner), joystick, pointer
* 3.0.7 (11-05-2019) object shortcut names, updated game tools
* 3.0.8 (15-05-2019) Academy course database search/browse, game items added to game from bottom up, GameObject.group as options
* 3.0.9 (19-05-2019) Process all game objects together (ensure correct layering), drop-downs for object selection (groups, events), Phaser 3.17.0, audio.allowSimultaneous
* 3.0.10 (31-05-2019) Game Maker enhancements, call functions function1() not function1.call(), params passed to funcs, fixed Text
* 3.0.11 (08-06-2019) Keyboard, pointer now in Events

