# app.js

JavaScript objects to handle app customisation and modification of items within AppShed.


  - Change the text and image values of items
  - Move and remove items
  - Dyncamically create screens and items using code

## Example
Here's a small example that uses `app.js` to create a simple Picture Puzzle game:

![alt text](https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/github/dogpuzzleapppng.png	 "Logo Title Text 1")

### See it in action:
  - On a phone http://apps.appshed.com/787693/
  - On a PC http://appshed.com/appbuilder/preview/787693/
  - Move the puzzle pieces by tapping on them

## app Methods
* `findClass(element, className)` returns the first `HTMLElement` inside `element` that contains the class `className`. 
* `getItem(id)` returns an `Item` object for `id`
* `getItemHTML(id,type,data)` returns the default HTML for an item. 
  * `id` (optional) will be set as the HTML id
  * `type` (optional, default `thumb`) determines which type of item is returned
  * `data` (optional) a JSON object containing data for the item
* 
