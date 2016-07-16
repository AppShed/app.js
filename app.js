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
	// v1.1.4 (20-06-2016) Support for Device LocalIP usage
	// v1.1.5 (22-06-2016) Enhancements to Device class
	// v1.1.6 (02-07-2016) Support for IoT Board layouts


	// TO DO
	// from V1.1.5 it is not working in Android native app - needs fixing.
	// Query IOIO boards for setup https://iot-api.appshed.com/api/boards/4195/outputs
	// Docs https://iot-api.appshed.com/api/doc/



try{


		window.app = app;





		// APP Settings
		app._REQUIREARESTSCRIPTS = true;



		// APP Properties
		app._appIPAddresses = [];
		app._currentItemId = null;
		app._currentScreen = null;
		app._defaultDevice = "IOIO";
		app._handler_arestScriptsInterval = null;
		app._intervals = []; // an array of all the Intervals started for the app using app.setInterval()
		app._screen_el = null;
		app._scripts;
		app._scriptLoaded_jquery = false;
		app._scriptLoaded_ajaxq = false;
		app._scriptLoading_ajaxq = false;
		app._scriptLoading_jquery = false;
		app._scriptsLoaded_arest = false;
		app._devices = [];
		app._url_boardWithPins = 'https://iot-api.appshed.com/api/boards/withpins/';






		// APP Methods



		app.init = function(){

			if(app._REQUIREARESTSCRIPTS)
				app.setInterval(app.addARESTScripts(),1000,10000)

			app.phone.addEvent('screen',function( id,el ){
				app.addScreenClickHandlers(id,el)
			});


//				setTimeout(function(){
//					app.addARESTScripts();
//				},100)				



		}




		app.addARESTScripts = function(){
			// Adds the script tags required by aREST to the `<head>`
			// This method is called on an `Interval` until all the scripts required by `aREST` have been loaded
			// Once all the script are loaded, the `Interval` is stopped 

			// check if all scripts have been loaded
			if(app._scriptLoaded_jquery && app._scriptLoaded_ajaxq){
				app._scriptsLoaded_arest = true;
					
				return true;
			}

			if(app._scriptLoaded_jquery){
				if(!app._scriptLoading_ajaxq){
					app._scriptLoading_ajaxq = true;
					app.addScript("http://appshed.us/arest/ajaxq.js")
				}
			} else if(!app._scriptLoading_jquery){
				app._scriptLoading_jquery = true;
				app.addScript("http://appshed.us/arest/jquery-2.1.4.min.js")
			} 

			// test for jQuery and ajaxq
			try{

				if(!app._scriptLoaded_jquery && app._scriptLoading_jquery && jQuery){
					$.noConflict();
					app._scriptLoaded_jquery = true;
				}
				if(!app._scriptLoaded_ajaxq && app._scriptLoading_ajaxq && jQuery.ajaxq)
					app._scriptLoaded_ajaxq = true;

			}catch(er){}


			setTimeout(function(){app.addARESTScripts()},300);

		}



		app.addDevice = function(props){

			// adds an IoT Device (such as ESP8266, RaspberryPi or Arduino) to this app. 
			// `props` is a JSON object containing the properties of the device


		  try{

			var device;

			device = new Device(props);

			app._devices[props.id] = device;

			return device;

		  }catch(er){
				app.handleError(er,"app.addDevice()")	
		  }

		}



		app.addInterval = function(id){
			// Adds an interval handler `id` to the array of intervals, returns the index of this handler
			return (app._intervals.push(id)-1)
		}






		app.addScreenClickHandlers = function(id,el){
			// adds the event handlers to the `Screen` to capture `click` events

			if(el)
				app._screen_el = el;

			if(app._screen_el){
				app._screen_el.getElements('.item').removeEvent('click', app.itemClicked);
				app._screen_el.getElements('.item').addEvent('click', app.itemClicked);
			}


			return this;
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



		app.digitalWrite = function(idORprops,pin,value){
			// For the device `id` the pin number `pin` is set to `value`

			// If the aREST scripts have not been loaded, load those, and return
			if(!app._scriptsLoaded_arest)
				return app.addARESTScripts();


			var props = app.idORpropsToObject(idORprops);

			return app.getDevice(props).digitalWrite(pin, value)

		}





		app.findClass = function(element, className) { 
			// Returns the first `DOM Element` matching 
			return element.querySelector("." + className) 
		}




		app.getDevice = function(idORprops){

			var props = app.idORpropsToObject(idORprops)
			var device = app._devices[props.id]

			if(device){
				device.updateProperties(props)
				return device
			}
			else 
				return app.addDevice(props)

		}



		app.getIdFromDOMId = function(domId){
			return parseInt(String(domId).replace(/[a-z]/g,""))
		}



		app.getIPs = function(callback){
			// Looks for the Local IP address(es) for the app
			// Calls `callback(ip_addr)` for each IP Address
			// Adds all the IP Addresses to `app._appIPAddresses[]`

			app._appIPAddresses = [];

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
		        if(ip_dups[ip_addr] === undefined){
		            app._appIPAddresses.push(ip_addr)
					app.scanIPSubnet(ip_addr)
			        if(callback != null) callback(ip_addr);
		        }


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
			// Returns an `Item` object for `id`
			// If no `id` supplied it returns the `Current Item` (last item clicked)

			if(!id && app._currentItemId)
				id = app._currentItemId;

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
			// Handles errors. Logs `er` and `msg` to the console.

			var msg = msg || ""
			console.log("ERROR: ",er,msg)

		}



		app.idORpropsToObject = function(idORprops){
			// Returns an `object` using `idORprops`

			var props = {};

			if (typeof idORprops === "object")
				props = idORprops;
			else
				props.id = idORprops;

			return props;
		}



		app.itemClicked = function(e){
			// Saves the `_currentItemId` when `Element` `e` is clicked.
			// Returns `this`

			if(e.target.classList.contains('item'))
				app._currentItemId = app.getIdFromDOMId(e.target.id)
			if(e.target.parentElement.classList.contains('item'))
				app._currentScreenentItemId = app.getIdFromDOMId(e.target.parentElement.id)
			if(e.target.parentElement.parentElement.classList.contains('item'))
				app._currentItemId = app.getIdFromDOMId(e.target.parentElement.parentElement.id)

			return this;
				
		}


		app.prependToVariable = function(variable,value){
			// prepends `value` to `variable`
			return this.appendToVariable(variable,value,true);
		}



		app.scanIPSubnet = function(address){
			// This function is INCOMPLETE

			// Scans the local subnet of `address` looking for devices
			// This function is INCOMPLETE


		  try{

			// local IP should be in [0]
			if(address){

				var ipParts = String(address).split(".")
				var ipPartial = ipParts[0]+"."+ipParts[1]+"."+ipParts[2]+"."

				// go through all IP addresses changing the last number only
				for(var i=183;i<188;i++){
					var ipAddress = ipPartial+i
					var thisURL = 'http://'+ipAddress;
					var response;

					app.getDevice({id:"scanAttempt-"+thisURL,localIP: ipAddress}).getInfo(function(data){
console.log("scanIPSubnet",data)
					})

				}
			}

			
		  }catch(er){
				app.handleError(er,"app.scanIPSubnet()")	
		  }


		}




		app.setInterval = function(func,delay,timeout){
			// repeatedly calls a function with a fixed delay
			// optionally stops after timeout

			try{

				var index = app.addInterval(window.setInterval(func,delay))
				if(timeout)
					setTimeout(function() { clearInterval(app._intervals[index]);}, timeout)
				return index;
			}catch(er){
				app.handleError(er,"app.setInterval()")
			}

		}







		app.setPin = function(pinNameOrNumber,val,id){
			// Sets the pin number `pinNameOrNumber` to `val`
			// Optional `id` to use a specific `Device`
			// If no `id` passed in the default `Device` is used (`IOIO` is the initial default device)


console.log("setPin","_defaultDevice: ",this._defaultDevice)

			var device = this.getDevice(id?id:this._defaultDevice)

			// For IOIO use built in iot.setPin
			if(this._defaultDevice == "IOIO"){
				try{
					window.appbuilder.events.iot.setPin(pinNameOrNumber,val)
				}catch(er){this.handleError(er,"app.setPin() IOIO error")}

			} else {
				// all other devices... use Device methods

				var pinNumber = null;

				// Check to see if we are using a board Layout
				if(device.layout){
					// go through outputs and search for name
					var outputs = device.layout.outputs;

					for(var i=0;i<outputs.length;i++){
						if(outputs[i].variable == pinNameOrNumber){
							pinNumber = outputs[i].pin;
						}
					}
				} else {
					// no layout, so presume a pin number passed in
					pinNumber = parseInt(pinNameOrNumber)
				}

				// no Layout - or invalid pinName, so check to see if it's a pin number


				if(isNaN(pinNumber)){
				} else {

					// if val is boolean then use digital output, else analog
					if(val == true || val == "true")
						device.digitalWrite(pinNumber,1)
					else if(val == false || val == "false")
						device.digitalWrite(pinNumber,0)
					else if(val == 1 || val == 0){ // special case: 1/0 might be digital or analog
					 	if(device.getPinFormat(pinNumber) == "a")
					 		device.analogWrite(pinNumber,val)
					 	else
					 		device.digitalWrite(pinNumber,val)
					} else { // everything else presume analog
						device.analogWrite(pinNumber,val)
					}

				}

			}

			return this;
		}



		app.togglePin = function(pinNameOrNumber,val,id){
			// Toggles the pin `pinNameOrNumber` 
			// Optional `id` to use a specific `Device`
			// If no `id` passed in the default `Device` is used (`IOIO` is the initial default device)


			var device = this.getDevice(id?id:this._defaultDevice)

			// For IOIO use built in iot.setPin
			if(this._defaultDevice == "IOIO"){
				try{
			        window.appbuilder.events.iot.togglePinValue(pinName)
				}catch(er){this.handleError(er,"app.togglePin() IOIO error")}
			} else {
				// TODO Code to toggle in for device
			}
		}




		app.togglePinValue = function(pinNameOrNumber,val,id){
			// Override method for `togglePin`
			return this.togglePin(pinNameOrNumber,val,id);
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


			this.getBackgroundColor = function(){
				// Returns the `backgroundColor` of this `Item`
			
				return this.element.style.backgroundColor;

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

					app.addScreenClickHandlers();

					return this;
				}catch(er){
					app.handleError(er,"Item.swap()")
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
		    	// Adds a row of `Icons` by inserting `rowHTML` into the table
		    	// `index` specifies the row where to insert. Defaults to -1 (bottom of the table)
		    	// If `rowHTML` is ommitted then the HTML is generated using `data`
		    	// `data` contains the values to be used for the Icons. 

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
		    	// Uses `data` to populate the rows

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
		    	// Clears the `items` hash (local cache)
		    	this.items = {};
		    }

			this.countColumns = function(){
				// Returns the number of columns (for Icon screen types)
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
				// Returns an object of items
				// The object has rows and columns corresponding to the icons on the screen
				// Returns `null` if not an `Icons` screen

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
				// Returns the next valid (unused) `id`. Used when creating `Items` dynamically.
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
				// Returns the HTML `table` element (for `Icon` screen types) 
		    	if(this.getType() == "icon")
					return this.element.getElementsByTagName("table")[0];
			}


			this.getType = function(){
				// Returns the type of `Screen` (`list`,`icon`,`gallery`,`map`)

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
			
				items.style.backgroundImage = 'none';
				items.style.backgroundColor = color;

				return this
			}




			this.setBackgroundImage = function(src,method){
				// Sets the `backgroundImage` of this `Screen` to `src`. 
				// Optional `method` determines the layout
				// One of: `fit` | `fill` | `stretch` | `center` | `tile`
				// `method` defaults to `fit` 

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
				// Sets the `Title` of the screen to `str`.
				// Returns the `Screen` object

				var header = app.findClass(this.element,"header")
				app.findClass(header,"title").innerHTML = str
				return this;
			}



			this.toString = function(){
				// Returns a string represenation of the `Screen`
				return "AppShed Object: Screen ("+this.id+")"
			}





		}








































// Device object.

function Device(props) {
	// Class definition for `Device`
	// Create a new `Device` object: `var obj = new Device(props)`
	// Must call `obj.init()` after creating the new `Device`
	// `props` is a JSON object of properties


	// TODO
	// * run checks on localIP to make sure the app is on same subdomain, before using it.
	// * support IOIO calls or aREST calls... and Arduino calls
	// * do setPinMode when required... on calling read/write methods... and use callback if changing pinMode.

	this.address = "";
	this.id = "";
	this.info = {};
	this.hasTestedLocalIPFromRemote = false;
	this.isTestingLocalIP = false;
	this.isTestingLocalIPFromRemote = false;
	this.isValidLocalIP = false;	
	this.isValidLocalIPFromRemote = false;	
	this.layout = null;
	this.properties = props;
	this.pinFormats = {};
	this.pinModes = {};
	this.remoteAddress = "";


	this.init = function(){	
		// Initialize the object

		// Set defaults
		this.hasTestedLocalIPFromRemote = false;
		this.isTestingLocalIP = false;
		this.isTestingLocalIPFromRemote = false;
		this.isValidLocalIP = false;	
		this.isValidLocalIPFromRemote = false;	

		// Set dynamic properties
		this.id = this.properties.id
		this.remoteAddress = "http://cors.appshed.com/?u=https://cloud.arest.io/"+this.id;

		// Call setup methods
		this.configureAddress();
		this.configureLayout();

		return this;
	}


	// if no localIP, connect to remote and query the ip



	this.analogRead = function(pin, callback) {
	    jQuery.ajaxq('queue', {
	      url: this.address + '/analog/' + pin,
	      crossDomain: true
	    }).done(function(data) {
	      callback(data);
	    });
	};

	this.analogWrite = function(pin, state) {
	    jQuery.ajaxq('queue', {
	      url: this.address + '/analog/' + pin + '/' + state,
	      crossDomain: true
	    }).done(function(data) {
	      //console.log(data);
	    });
	};


	this.callFunction = function(called_function, parameters, callback) {
		jQuery.ajaxq('queue', {
		  url: this.address + '/' + called_function + '?params=' + parameters,
		  crossDomain: true
		}).done(function(data) {
		  if (callback != null) {callback(data);}
		});
	};



	this.configureAddress = function(){
		// Configures which address to use for calls to this device.
		// Priority for which `address` to use is given in the following order:
		// * `localIP`
		// * `localIPFromRemote`
		//  * The default cloud webservice


		if(this.properties.localIP && this.properties.localIP > ""){
			if(this.isValidLocalIP)
				this.address = "http://"+this.properties.localIP;
			else 
				this.testLocalIP(); 
		}
		else if(this.properties.localIPFromRemote && this.properties.localIPFromRemote != "undefined"){
			if(this.isValidLocalIPFromRemote)
				this.address = this.address = "http://"+this.properties.localIPFromRemote;
			else 
				this.testLocalIP(1); 
		}
		else{
			this.address = this.remoteAddress;
			if(!this.hasTestedLocalIPFromRemote)
				this.getLocalIPFromRemote();
		} 

		return this;
	}


	this.configureLayout = function(){
		// configures the board layout using the IoT Builder layout settings
		// Using a layout makes it much simpler for novice users as they make use of the IoT Builder to configure the board.
		// Using a layout is optional. The app can simply set pins using pin numbers directly.

		if(this.properties.layoutId && this.properties.layoutId > ""){
			// attempt to get the board layout
			this.getLayout();
		} else {
			// remove the layout object to make sure it is not used.
			this.layout = null;
		}

		return this;
	}

	this.digitalRead = function(pin, callback) {
	    jQuery.ajaxq('queue', {
	      url: this.address + '/digital/' + pin,
	      crossDomain: true
	    }).done(function(data) {
	      callback(data);
	    });
	};


	this.digitalWrite = function(pin, state) {
		// Sets the digital output on `pin` to `state`
		// `state` must be either `1` or `0`

	  	this.setPinMode(pin,"o").setPinFormat(pin,"d");

	    jQuery.ajaxq('queue', {
	      url: this.address + '/digital/' + pin + '/' + state,
	      crossDomain: true
	    }).done(function(data) {
	    });


	    return this;
	};



	this.getInfo = function(callback,fromRemote) {
		var address = (fromRemote) ? this.remoteAddress : this.address;
		
		jQuery.ajaxq('queue', {
		  url: address + '/info',
		  crossDomain: true
		}).done(function(data) {
		  if (callback != null) {callback(data);}
		});
	};




	this.getLayout = function(callback) {
		if(!this.properties.layoutId)
			return this;

		var address = app._url_boardWithPins + this.properties.layoutId;
		var deviceId = this.id;

		jQuery.ajax({
		  url: address,
		  crossDomain: true
		}).done(function(data) {
		  if (callback != null) {callback(data);}
		  else{app.getDevice(deviceId).setLayout(data)}
		});
	};



	this.getLocalIPFromRemote = function(){
		// Try to get the LocalIP from the Remote address;

		this.hasTestedLocalIPFromRemote = true;
		this.getInfo(function(data){
			try{
				if(typeof data.variables.localIP != "undefined"){
					var device = app.getDevice({id: data.id})
					device.info = data;
					device.properties.localIPFromRemote = data.variables.localIP
					device.configureAddress();
				}
			}catch(er){}
		},1);
	};


	this.getPinFormat = function(pinNumber){
		return this.pinFormats[pinNumber];
	};


	this.getPinMode = function(pinNumber){
		return this.pinModes[pinNumber];
	};



	this.getVariable = function(variable, callback) {
	    jQuery.ajaxq('queue', {
	      url: this.address + '/' + variable,
	      crossDomain: true
	    }).done(function(data) {
	      callback(data);
	    });
	};




	this.setLayout = function(data){
		// sets the `layout` to `data` (expecting a JSON object)

		this.layout = data;
		return this;

	};


	this.setPinFormat = function(pinNumber,format){
		// Sets the format of `pinNumber` to `format`
		// `format` must be either `d` for digital or `a` for analog

		this.pinFormats[pinNumber] = format;
		return this;
	};

	
	this.setPinMode = function(pin, state) {
	  	// Set the mode of `pin` to `state`
	  	// `state` must be either `i` for input or `o` for output.

	  	// Skip the AJAX call if already set
	  	if(this.pinModes[pin] == state)
	  		return this;

	    jQuery.ajaxq('queue', {
			url: this.address + '/mode/' + pin + '/'+state,
	    	crossDomain: true
	    }).done(function(data) {
			//console.log(data);
			app.getDevice(data.id).pinModes[pin] = state;
	    });

	    return this;
	};


	this.testLocalIP = function(fromRemote){
		// Tests `this.localIP` to determine if the app can use it instead of the Remote address
		// Optional: If `fromRemote` is true it will test `this.localIPFromRemote`


		if(fromRemote){
			// If already testing, return
			if(this.isTestingLocalIPFromRemote)
				return
			this.isTestingLocalIPFromRemote = true;
			this.isValidLocalIPFromRemote = false;	
		} else {
			if(this.isTestingLocalIP)
				return
			this.isTestingLocalIP = true;
			this.isValidLocalIP = false;	
		}

		var originalID = this.id;

		var testIP = this.properties.localIP;
		if(fromRemote)
			testIP = this.properties.localIPFromRemote;

		// Query the IP and see if it is valid
	    jQuery.ajaxq('queue', {
			url: "http://"+testIP,
			crossDomain: true
	    }).done(function(data) {
			if(data.id = originalID){
				if(fromRemote)
					app.getDevice(data.id).isValidLocalIPFromRemote = true;
				else
					app.getDevice(data.id).isValidLocalIP = true;
				app.getDevice(data.id).configureAddress()					
			}
	    });


	}

	this.updateProperties = function(props){
		var addressChanges = false;
		var layoutChanges = false;


		// has the localIP changed?
		if((typeof props.localIP == "string") && 
			(!this.properties.localIP || this.properties.localIP != props.localIP)
		){

			this.isTestingLocalIP = false;
			// this.isTestingLocalIPFromRemote = false;
			this.isValidLocalIP = false;	
			// this.isValidLocalIPFromRemote = false;	

			addressChanges = true;
		}

		// has the layout changed
		if( (props.layoutId && props.layoutID != this.properties.layoutId) ||
			!props.layoutId || props.layoutId == ""	)
			layoutChanges = true;

		// update each property using values passed in
		for(var k in props)
			this.properties[k] = props[k]

		if(addressChanges)
			this.configureAddress();

		if(layoutChanges)
			this.configureLayout();

		return this;
	};


	  // We must call init() on the Device
	  this.init();
}

	// INITIALISE App
	//setTimeout(function(){app.init()},100);
	app.init()

} catch(er){alert(er)}
