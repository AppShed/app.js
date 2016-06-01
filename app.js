// JavaScript object to provide additional client-side features to AppShed apps.
// This code must be copied into the Custom JavaScript field
// Open any app with AppShed app-builder, go to Settings -> Advanced tab and find Custom JavaScript
// Created by T Stauch
// v1.1, 25-5-2016
// appshed.com
//
// v1.1 Added some methods to set colors for Item Text and Background
// v1.1.1 error handling, setInterval()



	window.app = app;






	// APP Properties
	app.currentScreen = null;
	app.intervals = []; // an array of all the Intervals started for the app using app.setInterval()











	// APP Methods



	app.addInterval = function(id){
		// Adds an interval handler to the array of intervals, returns the index of this handler
		return (app.intervals.push(id)-1)
	}



	app.findClass = function(element, className){
        var foundElement = null, found;
        function recurse(element, className, found) {
            for (var i = 0; i < element.childNodes.length && !found; i++) {
                var el = element.childNodes[i];
                var classes = el.className != undefined? el.className.split(" ") : [];
                for (var j = 0, jl = classes.length; j < jl; j++) {
                    if (classes[j] == className) {
                        found = true;
                        foundElement = element.childNodes[i];
                        break;
                    }
                }
                if(found)
                    break;
                recurse(element.childNodes[i], className, found);
            }
        }
        recurse(element, className, false);
        return foundElement;
    }





	app.getItem = function(id){

		try{

			var item = new app.Item(id)
			//item.init()
			return item;

		}catch(er){
			app.handleError(er,"app.getItem("+id+")")
		}


	}






	app.getItemHTML = function(id,type,data){
		// returns the default HTML for an item

		switch (type)
		{
			case "icon": 
				return '<td class=" item icon" id="item'+id+'"><div class="item-icon-inner"><img class="image" src="' + ( (data && data.image ) ? data.image : 'https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/images/defaultjpg.jpg') + '" width="50" height="50"><div class="title">An Icon</div></div></td>';
				break;
		   
		   default: 
		   		return '<div class=" item thumb" id="item1"><div class="image-container"><img class="image" src="https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/images/defaultjpg.jpg" width="50" height="50"></div><div class="title">A text &amp; image item</div><div class="text">A subtitle for this item</div></div>';

		}

	}

	app.getItemByDomId = function(domId){

		return app.getItem(parseInt(String(domId).replace(/[a-z]/g,"")))

	}


	app.getItemsElement = function(){
		return document.getElementsByClassName('items')[0]
	}


	app.getScreen = function(id){
		// returns the `Screen` object for `id`

		try{

			if(!id){
				id = String(document.getElementsByClassName('screen')[0].id).replace(/screen/,'')
			}

			if(app.currentScreen && app.currentScreen.id == id)
				return app.currentScreen;

			app.currentScreen = new app.Screen(id)
			return app.currentScreen;				

		}catch(er){
			app.handleError(er,"app.getScreen("+id+")")
		}


	}


	app.handleError = function(er,msg){

		var msg = msg || ""
		alert("ERROR: \n"+msg+" \n"+er)

	}


	app.setInterval = function(func,delay,timeout){
		// repeatedly calls a function with a fixed delay
		// optionally stops after timeout

		try{


			var index = app.addInterval(setInterval(func,delay))
			if(timeout)
				setTimeout("clearInterval(app.intervals["+index+"])",timeout)

		}catch(er){
			app.handleError(er,"app.setInterval()")
		}

	}






















	// Item Object
	app.Item = function(id){

		this.id = id;
		this.element= null;
		this.domId= '';

		try{
			this.domId = 'item'+this.id;
			this.element = document.getElementById(this.domId)

		}catch(er){
			app.handleError(er,'Item.init()')
		}



		this.addBefore = function(){


		}




		this.getIconAbove = function(){
			// returns the icon in the row above this icon
			return app.getScreen().getIconAbove(this.id)
		}

		this.getIconBelow = function(){
			// returns the icon in the row above this icon
			return app.getScreen().getIconBelow(this.id)
		}

		this.getIconLeft = function(){
			// returns the icon on the left of this icon
			return app.getScreen().getIconLeft(this.id)
		}

		this.getIconRight = function(){
			// returns the icon on the right of this icon
			return app.getScreen().getIconRight(this.id)
		}


		this.getImage = function(){
			// returns the URL of the image for this item
			return app.findClass(this.element,"image").src
		}


		this.isAbove = function(otherId){
			// returns true this item is above the other Item
			try{
				return (app.getItem(otherId).getIconAbove().id == this.id) 
			}catch(er){
				return false;
			}
		}

		this.isBelow = function(otherId){
			// returns true this item is below the other Item
			try{
				return (app.getItem(otherId).getIconBelow().id == this.id) 
			}catch(er){
				return false;
			}
		}

		this.isLeft = function(otherId){
			// returns true this item is left of the other Item
			try{
				return (app.getItem(otherId).getIconLeft().id == this.id) 
			}catch(er){
				return false;
			}
		}

		this.isRight = function(otherId){
			// returns true this item is right of the other Item
			try{
				return (app.getItem(otherId).getIconRight().id == this.id) 
			}catch(er){
				return false;
			}
		}

		this.place = function(x,y){
			// place the item at a certain absolute x,y position

			try{

				if(this.element){
					this.element.style.position = 'absolute';
					this.element.style.left = x+'px';
					this.element.style.top = y+'px';
				}
			}catch(er){
				app.handleError(er,'Item.place()')
			}

			return this
		}

		this.setBackgroundColor = function(color){
			//set the background color of this Item to `color`
			try{
				this.element.style.backgroundColor = color
			}catch(er){app.handleError(er,"Item.setBackgroundColor()")}
			return this;
		}

		this.setHTML = function(str){
			//set the value of Html to `str`
			try{
				app.findClass(this.element,"html").innerHTML = str
			}catch(er){app.handleError(er,"Item.setHTML()")}
			return this;
		}

		this.setImage = function(src){
			//set the image URL to `src`
			app.findClass(this.element,"image").src = src
			return this
		}

		this.setText = function(str){
			//set the value of Text to `str`
			try{
				app.findClass(this.element,"text").innerHTML = str
			}catch(er){app.handleError(er,"Item.setText()")}
			return this;
		}

		this.setTextColor = function(color){
			//set the color of Text to `color`
			try{
				app.findClass(this.element,"text").style.color = color
			}catch(er){
				// the text might be in a 'html' class
				try{
					app.findClass(this.element,"html").style.color = color
				}catch(er2){
					app.handleError(er+", "+er2,"Item.setTextColor()")
				}
			}

			return this;
		}


		this.setSubTitle = function(str){
			//set the value of Sub Title to `str`
			app.findClass(this.element,"text").innerHTML = str
			return this;
		}

		this.setTitle = function(str){
			//set the value of Title to `str`
			try{
				app.findClass(this.element,"title").innerHTML = str
			}catch(er){app.handleError(er,"Item.setTitle()")}
			return this;
		}


		this.swap = function(otherId){
			// swaps this icon with the other 

			try{
				var parentNode = this.element.parentNode;
				var thisClone = this.element.cloneNode(true);
				var otherItem = app.getItem(otherId);
				var otherParent = otherItem.element.parentNode;
				var otherClone = otherItem.element.cloneNode(true);
				parentNode.replaceChild(otherClone,this.element);
				otherParent.replaceChild(thisClone,otherItem.element);
				return this;
			}catch(er){
				app.handleError(er,"Item.swapIcon()")
			}
		}



		this.toString = function(){
			//returns a string representation of the object
			return "AppShed Object: Item ("+this.id+")"
		}

	}



































	// Screen Object
	app.Screen = function(id){

		this.id = id;
		this.element = null;
		this.domId = '';


		this.items = {};
		this.icons = {};


		try{

			this.domId = 'screen'+this.id;
			this.element = document.getElementById(this.domId)


		}catch(er){
			app.handleError(er,'Screen.init()')
		}


	    this.addIconRow = function(rowHTML,index,data){
	    	// adds a row of icons by inserting rowHTML into the table
	    	// index specifies the row where to insert. defaults to -1 (bottom of the table)

	    	if(this.getType() == "icon"){
	    		if(!index)
	    			index = -1;
	    		if(!rowHTML)
	    			rowHTML = this.getIconRowHTML(null,null,data);
	    		
	    		this.getTable().insertRow(index).outerHTML = rowHTML;

				this.clearItemsCache();
	    	} 

	    	return this;


	    }

	    this.addIconRows = function(numRows,data){
	    	// adds numRows rows of icons 
	    	if(this.getType() == "icon"){

	    		for(var i=0;i<numRows;i++){
	    			// get the data for this row if it exists
					var thisData = ((data && data[i]) ? data[i] : {})	
					// add the default if it exists
					if(data && data['default'])
						thisData['default'] = data['default']

	    			this.addIconRow(null,null,thisData)
	    		}
	    	}

	    	return this;

	    }


	    this.clearItemsCache = function(){
	    	this.items = {};
	    }

		this.countColumns = function(){

	    	if(this.getType() == "icon"){
	    		return this.getTable().rows[0].cells.length
	    	}

		}


		this.getIconAbove = function(iconId){
			// returns the icon in the row above this icon

			var icons = this.getIcons();

			for(var r in icons){
				var cells = icons[r]

				for(var c in cells){
					if(icons[r][c].id == iconId){
						r = parseInt(r)
						if(r>0)
							return icons[(r-1)][c]
					}
				}
			}

		}


		this.getIconBelow = function(iconId){
			// returns the icon in the row below this icon

			var icons = this.getIcons();
			var rowKeys = Object.keys(icons)

			for(var r in icons){
				var cells = icons[r]

				for(var c in cells){
					if(icons[r][c].id == iconId){
						r = parseInt(r)
						if(r < (rowKeys.length-1))
							return icons[(r+1)][c]
					}
				}
			}
		}


		this.getIconLeft = function(iconId){
			// returns the icon on the left of this icon

			var icons = this.getIcons();

			for(var r in icons){
				var cells = icons[r]

				for(var c in cells){
					if(icons[r][c].id == iconId){
						c = parseInt(c)
						if(c > 0)
							return icons[r][(c-1)]
					}
				}
			}
		}


		this.getIconRight = function(iconId){
			// returns the icon on the left of this icon

			var icons = this.getIcons();

			for(var r in icons){
				var cells = icons[r]
				var cellKeys = Object.keys(cells)

				for(var c in cells){
					if(icons[r][c].id == iconId){
						c = parseInt(c)
						if(c < (cellKeys.length - 1))
							return icons[r][(c+1)]
					}
				}
			}
		}


		this.getIconRowHTML = function(idStart,cols,data){
			// returns the HTML for a row of (cols) Icons

			if(!cols)
				cols = this.countColumns();

			if(!idStart)
				idStart = this.getNextId();
			
			var rVal = "<tr>"

			for(var i=0;i<cols;i++){
				var thisData = ((data && data[i]) ? data[i] : ((data && data['default']) ? data['default'] : null))
				rVal += app.getItemHTML(idStart+i,"icon",thisData)
			}
			rVal += "</tr>"

			return rVal;
		}


		this.getIcons = function(){
			// returns an object of items
			// the object has rows and columns corresponding to the icons on the screen
			// returns null if not an icons screen

			if(this.getType() != "icon")
				return null;

			this.icons = {}

			try{

				var rows = this.getTable().getElementsByTagName("tr")

				for(var r=0;r<rows.length;r++){

					var cObj = {};
					var cells = rows[r].getElementsByTagName("td")

					for(var c=0;c<cells.length;c++){
						cObj[c] = app.getItemByDomId(cells[c].id)
					}

					this.icons[r] = cObj;
				}

			}catch(er){
				app.handleError(er,"Screen.getIcons()")
			}

			return this.icons;

		}



		this.getItems = function(clearCache){
			// return all the items on this screen as objects

			if(clearCache)
				this.clearItemsCache()

			// by default, use the cached items collection
			if(Object.keys(this.items).length)
				return this.items


			// loop through all elements of a certain class name 
			var elements = this.element.getElementsByClassName("item")

			for (var i = 0; i < elements.length; i++) {
				var item = app.getItemByDomId(elements[i].id)
				this.items[item.id] = item ;
			}

			
			return this.items;

		}


		this.getNextId = function(testId){

			try{

				if(!testId)
					testId = 1;

				var items = this.getItems();
				var keys = Object.keys(items);

				if(!keys.length)
					return 1;
				else{
					// check if we can use testId 
					// otherwise increment and test again

					var items = this.getItems();
					for(var i in items){
						if(items[i].id == testId)
							return this.getNextId(testId + 1)
					}
					// if we get here, testId is not an existing id on this screen 
					return testId

				}

			}catch(er){
				app.handleError(er,"Screen.getNextId()")
			}

		}

		this.getTable = function(){
	    	if(this.getType() == "icon")
				return this.element.getElementsByTagName("table")[0];
		}


		this.getType = function(){

			var classes = this.element.classList

			if(classes.contains("list"))
				return "list"
			if(classes.contains("icon"))
				return "icon"
			if(classes.contains("gallery"))
				return "gallery"
			if(classes.contains("map"))
				return "map"

			return "";
						
		}

		this.setBackgroundImage = function(src,method){
			if(!method)
				method = 'fit'

			var items = app.findClass(this.element,"items")
		
			items.style.backgroundImage = "url('"+src+"')";
			items.style.backgroundRepeat = "no-repeat";
			items.style.backgroundPosition = "center center";

			if(method == 'fill')
				items.style.backgroundSize = "cover";
			else if(method == 'stretch')
				items.style.backgroundSize = "100% 100%";
			else if(method == 'center')
				items.style.backgroundSize = items.style.height+"px "+items.style.width+"px";
			else if(method == 'tile'){
				items.style.backgroundSize = items.style.height+"px "+items.style.width+"px";
				items.style.backgroundRepeat = "repeat";
			}
			else
				items.style.backgroundSize = "contain";


			return this
		}



		this.setTitle = function(str){
			var header = app.findClass(this.element,"header")
			app.findClass(header,"title").innerHTML = str
			return this;
		}



		this.toString = function(){
			return "AppShed Object: Screen ("+this.id+")"
		}



	}
