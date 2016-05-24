# app.js

JavaScript objects to handle app customisation and modification of items within AppShed.


  - Change the text and image values of items
  - Move and remove items from the screen
  - Dyncamically create items using code

## Example
Here's a small example that uses `app.js` to create a simple Picture Puzzle game:

![alt text](https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/github/dogpuzzleapppng.png	 "Logo Title Text 1")

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



## Methods (app Class)

* `getItem(id)` returns an `Item` object for `id`
* `getItemHTML(id,type,data)` returns the default HTML for an item
  * `id` (optional) will be set as the HTML id
  * `type` (optional, default `thumb`) determines which type of item is returned
  * `data` (optional) a JSON object containing data for the item
* `getScreen(id)` returns the `Screen` object for `id`. `id` is optional


### Supporting Methods (app Class)
These additional supporting methods are also available in the `app` object
* `findClass(element, className)` returns the first `HTMLElement` inside `element` that contains the class `className`
* `getItemByDomId(domId)` returns an `Item` object for `domId` (where `domId` is the DOM id for the item, e.g. 'item1234')
* `getItemsElement()`returns the `HTMLElement` that contains all the `Items`. This element is used when adding or removing HTML
* `handleError(er,msg)` used for debugging to provide notification of an error

## Item (Class)
This is a top-level class representing an Item. In AppShed, items are all the 'things' you can add to your screens, e.g. text, image, image-link etc.

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
* `setImage(src)` set the image URL to `src`
* `setText(str)` set the value of Text to `str` 
* `setSubTitle()` set the value of Sub Title to `str`
* `setTitle()` set the value of Title to `str`
* `swap(otherId)` swaps this icon with the `otherId` Item


### Supporting Methods (Item class)
* `toString()` returns a string representation of the object 


------
## Screen (class)
This is a top-level class representing a Screen. In AppShed there are four main screen types:

* Standard
* Icons
* Map
* Gallery





## Version
1.0 - Updated April 2016


