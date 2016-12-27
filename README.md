# app.js

JavaScript objects to handle app customisation and modification of items within AppShed.


  - Change the text and image values of items
  - Move and remove items from the screen
  - Dyncamically create items using code

## Example
Here's a small example that uses `app.js` to create a simple Picture Puzzle game. Download the ZIP file and follow the Quick Start Guide.

https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/files/picture-puzzle-quick-start-guidezip.zip	

### See it in action:
  - On a phone http://apps.appshed.com/787693/
  - On a PC http://appshed.com/appbuilder/preview/787693/
  - Move the puzzle pieces by tapping on them

## Usage
To use  `app.js` in your AppShed app:
* Copy the code from `app.js`
* Open your app in the AppBuilder
* Open the `Settings`
* Go to the `Advanced` tab
* Paste the JavaScript code into the field called `Custom JavaScript`
* You can now call any of the `app` methods as `JavaScript` actions
  * Add an item to your app
  * Change the `Action` to `JavaScript`
  * use the format `app.method()`, e.g. `app.getItem(123)`



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
* 1.0 - Updated April 2016
 * v1.1 (26-5-2016) Added some methods to set colors for Item Text and Background
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
 
 
