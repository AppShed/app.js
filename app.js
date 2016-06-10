	// JavaScript object to provide additional client-side features to AppShed apps.
	// This code must be copied into the Custom JavaScript field
	// Open any app with AppShed app-builder, go to Settings -> Advanced tab and find Custom JavaScript
	// Created by T Stauch
	// v1 (25-5-2016)
	// appshed.com
	//
	// v1.1 (26-5-2016) Added some methods to set colors for Item Text and Background
	// v1.1.1 (02-06-2016) error handling, setInterval()
	// v1.1.2 (02-06-2016) app.addDevice()
	// v1.1.3 (10-06-2016) app.getRandomColor(), app.appendToVariable(), screen.setBackgroundColor


		window.app = app;



		// INITIALISE
//		setTimeout(function(){
//			app.addARESTScripts();
//		},100)




		// APP Properties
		app._appIPAddresses = [];
		app._arestScriptsAdded = false;
		app._currentScreen = null;
		app._intervals = []; // an array of all the Intervals started for the app using app.setInterval()
		app._scripts
		app.devices = []









		// APP Methods


		app.addARESTScripts = function(){
			// Adds the script tags required by aREST to the `<head>`

			app.addScript("http://appshed.us/arest/jquery-2.1.4.min.js")

			setTimeout(function(){
				app.addScript("http://appshed.us/arest/ajaxq.js")
			},2000)

			setTimeout(function(){
				$.noConflict()
			},4000);

			setTimeout(function(){
				app._arestScriptsAdded = true
			},4500);

		}



		app.addDevice = function(props){

			// adds an IoT Device (such as ESP8266, RaspberryPi or Arduino) to this app. 
			// `props` is a JSON object containing the properties of the device


		  try{

//			var device = new Device(props.ip);
			var device = new Device("cors.appshed.com/?u=https://cloud.arest.io/"+props.id);
			device.pinMode(16, "OUTPUT");
			app.devices.push(device)

			return device;

		  }catch(er){
				app.handleError(er,"app.addDevice()")	
		  }

		}






		app.addInterval = function(id){
			// Adds an interval handler `id` to the array of intervals, returns the index of this handler
			return (app._intervals.push(id)-1)
		}




		app.addScript = function(url){
			// Adds a `<script>` tag with `src = url` to the `<head>` 
			var head= document.getElementsByTagName('head')[0];
			var script= document.createElement('script');

			// check if this script already present
			var currentScripts = head.getElementsByTagName('script')
			for(var j=0;j<currentScripts.length;j++){
				if(currentScripts[j].src == url)
					return
			}

			script.type= 'text/javascript';
			script.src= url;
			return head.appendChild(script);									
		}



		app.appendToVariable = function(variable,value,atFront){
			// appends `value` to `variable`
			// Optionally if `atFront` is `true` adds the `value` to the front of the `variable`

			try{

				if(atFront)
					return this.setVariable(variable,value+this.getVariable(variable))
				else
					return this.setVariable(variable,this.getVariable(variable)+value)

			}catch(er){
				app.handleError(er,"app.getItem("+id+")")
			}
		}



		app.digitalWrite = function(id,pin,value){
			// For the device `id` the pin number `pin` is set to `value`

			var props = {};
			props.id = id;

			app.addDevice(props).digitalWrite(pin, value)

		}







		// alternative code
		app.findClass = function(element, className) { 
			// Returns the first `DOM Element` matching 
			return element.querySelector("." + className) 
		}



		app.getIPs = function(callback){
			// Returns an array of actice IP addresses on the same Subdomain. Optionally calls `callback` when done.

		    var ip_dups = {};

		    //compatibility for firefox and chrome
		    var RTCPeerConnection = window.RTCPeerConnection
		        || window.mozRTCPeerConnection
		        || window.webkitRTCPeerConnection;
		    var useWebKit = !!window.webkitRTCPeerConnection;

		    //bypass naive webrtc blocking using an iframe
		    if(!RTCPeerConnection){
		        //NOTE: you need to have an iframe in the page right above the script tag
		        //
		        //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
		        //<script>...getIPs called in here...
		        
		        var win = iframe.contentWindow;
		        RTCPeerConnection = win.RTCPeerConnection
		            || win.mozRTCPeerConnection
		            || win.webkitRTCPeerConnection;
		        useWebKit = !!win.webkitRTCPeerConnection;
		    }

		    //minimal requirements for data connection
		    var mediaConstraints = {
		        optional: [{RtpDataChannels: true}]
		    };

		    var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};

		    //construct a new RTCPeerConnection
		    var pc = new RTCPeerConnection(servers, mediaConstraints);

		    function handleCandidate(candidate){
		        //match just the IP address
		        var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
		        var ip_addr = ip_regex.exec(candidate)[1];

		        //remove duplicates
		        if(ip_dups[ip_addr] === undefined)
		            app._appIPAddresses.push(ip_addr)

		            //callback(ip_addr);

		        ip_dups[ip_addr] = true;
		    }

		    //listen for candidate events
		    pc.onicecandidate = function(ice){

		        //skip non-candidate events
		        if(ice.candidate)
		            handleCandidate(ice.candidate.candidate);
		    };

		    //create a bogus data channel
		    pc.createDataChannel("");

		    //create an offer sdp
		    pc.createOffer(function(result){

		        //trigger the stun server request
		        pc.setLocalDescription(result, function(){}, function(){});

		    }, function(){});

		    //wait for a while to let everything done
		    setTimeout(function(){
		      try{		      	
		        //read candidate info from local description
		        var lines = pc.localDescription.sdp.split('\n');

		        lines.forEach(function(line){
		            if(line.indexOf('a=candidate:') === 0)
		                handleCandidate(line);
		        });
		      }catch(er){}

		        callback()
		    }, 1000);

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




		app.getRandomColor = function(numOfSteps, step){
			// Returns a random color in the format `rgb(x,y,z)`. 
			// Optional `numOfSteps` determines how many steps to separate the color spectrum into.
			// Optional `step` specifies the specific step to return. Default is a random step.

			var numOfSteps = numOfSteps || 100
			var step = step || parseInt(Math.random()*numOfSteps)

		    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
		    // Adam Cole, 2011-Sept-14
		    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
		    var r, g, b;
		    var h = step / numOfSteps;
		    var i = ~~(h * 6);
		    var f = h * 6 - i;
		    var q = 1 - f;
		    switch(i % 6){
		        case 0: r = 1; g = f; b = 0; break;
		        case 1: r = q; g = 1; b = 0; break;
		        case 2: r = 0; g = 1; b = f; break;
		        case 3: r = 0; g = q; b = 1; break;
		        case 4: r = f; g = 0; b = 1; break;
		        case 5: r = 1; g = 0; b = q; break;
		    }
		    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
		    return (c);



		}







		app.getScreen = function(id){
			// returns the `Screen` object for `id`

			try{

				if(!id){
					id = String(document.querySelector('.screen').id).replace(/screen/,'')
				}

				return new app.Screen(id)		

			}catch(er){
				app.handleError(er,"app.getScreen("+id+")")
			}


		}


		app.handleError = function(er,msg){

			var msg = msg || ""
			alert("ERROR: \n"+msg+" \n"+er)

		}



		app.scanIPs = function(props){

		  try{

			// local IP should be in [0]
			if(app._appIPAddresses[0]){

				var ipParts = String(app._appIPAddresses[0]).split(".")
				var ipPartial = ipParts[0]+"."+ipParts[1]+"."+ipParts[2]+"."

				// go through all IP addresses changing the last number only
				for(var i=0;i<5;i++){

					var thisURL = 'http://'+ipPartial+i;
					var response;

					app.ajaxRequest(thisURL, 'jsonp', 'json', {  "q":"London" }, function(response) {
					  alert('success'+response);

					}, function(response) {
					  alert('Failed to get the weather');

					})


				}
			}

			
		  }catch(er){
				app.handleError(er,"app.scanIPs()")	
		  }


		}

		app.setInterval = function(func,delay,timeout){
			// repeatedly calls a function with a fixed delay
			// optionally stops after timeout

			try{


				var index = app.addInterval(setInterval(func,delay))
				if(timeout)
					setTimeout(function() { clearInterval(app.intervals[index]);}, timeout)

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


			this.getBackgroundColor = function(){
				// Returns the `backgroundColor` of this `Screen`

				var items = app.findClass(this.element,"items")
			
				return items.style.backgroundColor;

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


			this.setBackgroundColor = function(color){
				// Sets the `backgroundColor` of this `Screen` to `color`

				var items = app.findClass(this.element,"items")
			
				items.style.backgroundColor = color;

				return this
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








































// Device object.

function Device(address) {
  this.address = address;

  this.pinMode = function(pin, state) {
    jQuery.ajaxq('queue', {
      url: 'http://' + this.address + '/mode/' + pin + '/o',
      crossDomain: true
    }).done(function(data) {
      //console.log(data);
    });
  };

  this.digitalWrite = function(pin, state) {
    jQuery.ajaxq('queue', {
      url: 'http://' + this.address + '/digital/' + pin + '/' + state,
      crossDomain: true
    }).done(function(data) {
      //console.log(data);
    });
  };

  this.analogWrite = function(pin, state) {
    jQuery.ajaxq('queue', {
      url: 'http://' + this.address + '/analog/' + pin + '/' + state,
      crossDomain: true
    }).done(function(data) {
      //console.log(data);
    });
  };

  this.analogRead = function(pin, callback) {
    jQuery.ajaxq('queue', {
      url: 'http://' + this.address + '/analog/' + pin,
      crossDomain: true
    }).done(function(data) {
      callback(data);
    });
  };

  this.digitalRead = function(pin, callback) {
    jQuery.ajaxq('queue', {
      url: 'http://' + this.address + '/digital/' + pin,
      crossDomain: true
    }).done(function(data) {
      callback(data);
    });
  };

  this.getVariable = function(variable, callback) {
    jQuery.ajaxq('queue', {
      url: 'http://' + this.address + '/' + variable,
      crossDomain: true
    }).done(function(data) {
      callback(data);
    });
  };

  this.callFunction = function(called_function, parameters, callback) {
    jQuery.ajaxq('queue', {
      url: 'http://' + this.address + '/' + called_function + '?params=' + parameters,
      crossDomain: true
    }).done(function(data) {
      if (callback != null) {callback(data);}
    });
  };
}

