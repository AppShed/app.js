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
	// v1.1.7 (23-07-2016) Support for built-in LED, simpler device calling, stability improvements
	// v1.1.8 (10-08-2016) Support for findLocalDevices, blink LED
	// v1.2.1 (06-10-2016) aREST Pro support added. aREST local-and-cloud not supported
	// v1.2.2 (26-10-2016) Minor changes and additions
	// v1.2.3 (07-11-2016) Support for aREST Pro enhancements
	// v1.2.4 (12-11-2016) Send aREST Commands - multiple pin settings in one API call, servo support
	// v1.2.5 (15-12-2016) Tie device outputs to app variables to monitor values
	// v1.2.6 (20-12-2016) Event and Timer handling improvements


	// TO DO
	// from V1.1.5 it is not working in Android native app - needs fixing.
	// Query IOIO boards for setup https://iot-api.appshed.com/api/boards/4195/outputs
	// Docs https://iot-api.appshed.com/api/doc/



try{


	window.app = app;

	app.version = "1.2.6"; // The version number of this code




	// APP Settings
	app._REQUIREARESTSCRIPTS = true;



	// APP Properties
	app._appIPAddresses = [];
	app._ajaxqURL = "https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/files/ajaxqjs.js";
	app._currentItemId = null;
	app._currentScreen = null;
	app._defaultDevice = "IOIO";
	app._devices = {};
	app._handler_arestScriptsInterval = null;
	app._intervals = {}; // an object of all the Intervals started for the app using app.setInterval()
	app._ioBatchMode = true; // Send IO commands to devices in batches
	app._ioBatchTimeout = 100; // how long to wait while collecting IO commands (e.g. from multiple Blockly commands)
	app._ioMaxCommandsPerBatch = 4;
	app._jqueryURL = "https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/files/jquery-311minjs.js";
	app._scanIPTimeout = 4000; // The timeout for requests when scanning local IP addresses.
	app._screen_el = null;
	app._scripts;
	app._scriptLoaded_jquery = false;
	app._scriptLoaded_ajaxq = false;
	app._scriptLoading_ajaxq = false;
	app._scriptLoading_jquery = false;
	app._scriptsLoaded_arest = false;
	app._url_boardWithPins = 'https://iot-api.appshed.com/api/boards/withpins/';

	app.isMobile_xxx; // Will be true when running on a supported mobile device (actual property is app.isMobile)
	app.isPhoneGap_xxx; // Will be true when running on a phonegap platform (actual property is app.isPhoneGap)
	app.mouseX;
	app.mouseY;




	// APP Methods



	app.init = function(){

		if(app._REQUIREARESTSCRIPTS)
			app.setInterval(app.addARESTScripts(),1000,10000)

		// add the event handlers to the `Screen` to capture `click` events
		app.phone.addEvent('screen',function( id,el ){
			app.addScreenClickHandlers(id,el)


			$(document.getElementsByClassName('app')[0].id).removeEvent('mousemove', app.appMousemove);
			$(document.getElementsByClassName('app')[0].id).addEvent('mousemove', app.appMousemove);

		});


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
				app.addScript(app._ajaxqURL)
			}
		} else if(!app._scriptLoading_jquery){
			app._scriptLoading_jquery = true;
			app.addScript(app._jqueryURL)
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

		// If this is the first device added, make it the default
		if(Object.keys(app._devices).length == 1){
			app._defaultDevice = props.id;
		}
		return device;

	  }catch(er){
			app.handleError(er,"app.addDevice()")	
	  }

	}



	app.addInterval = function(identifier,name){
		// Adds an interval handler `identifier` to the `_intervals`, 
		//returns `identifier`
		// Optional `name` can be used as a reference to the `identifier` (used by `app.clearInterval()`)

		name = name || identifier;

		try{
			this._intervals[name] = identifier;
			return identifier
		}catch(er){
			app.handleError(er,"app.addInterval")
		}
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






	app.addScreenEvent = function(id,func){
		// The given `func` will be called whenever the screen `id` is shown. 
		// `id` can be the `Screen.id` or the `Screen ClassName`
		// This function returns an `identifier`. 
		// Within `func`, `this` will refer to the `Element` of the `Screen` that is shown. 
		// There is one parameter `app`.
		// Example:
/*
```
app.addScreenEvent(17078, function() {
    app.getScreen(this).setBackgroundColor("Blue")
});
```
*/


		var f=function(eid,screen){
		
			// If a Class Name passed in, test for that and get the id
			if(isNaN(id) && screen.classList.contains(id))
				id = app.getIdFromDOMId(screen.id);


			if(id==eid){
				appbuilder.app.debug("api","screenEvent",id);
				try{
					func.call(screen,this)
				}catch(e){
					appbuilder.app.debug("api","Error with custom js on screen event",e)
				}
			}
		}.bind(this);
		
		return this.phone.addEvent("screen",f)

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




	app.addTabEvent = function(id,func){
		// The given `func` will be called whenever the Tab `id` is shown. 
		// `id` can be the `Tab.id` or the `Tab ClassName`
		// The given `func` will be called whenever the Tab `id` is shown. 
		// This function returns an `identifier`. 
		// Within `func`, `this` will refer to the `Element` of the `Tab` that is shown. 
		// There is one parameter `app`.

		var f=function(eid,tab){

			// If a Class Name passed in, test for that and get the id
			if(isNaN(id) && tab.classList.contains(id))
				id = app.getIdFromDOMId(tab.id);

			if(id==eid){
				appbuilder.app.debug("api","tabEvent",id);
				try{
					//func.call(tab,this)
					// Call func after timeout to give time for DOM to load new Screen 
					setTimeout(function(){
						func.call(tab,app)
					},10)
				}catch(e){
					appbuilder.app.debug("api","Error with custom js on tab event",e)
				}
			}
		}.bind(this);
		
		return this.phone.addEvent("tab",f),f
	}


	app.addVariableEvent_xxx = function(id, func){
		// The given `func` will be called whenever the `Variable` `id` is changed. 
		// This function returns an `identifier`. 
		// Within `func`, `this` will refer to the `Element` of the `Tab` that is shown. 
		// There are two parameters: `val` and `app`.

/*
```
app.addVariableEvent('textbox', function(val) {
    var t = document.getElement('#screen17078 .title span');
    if(t) {
        t.set('text', val);
    }
});
```
*/

	}


	app.alertPinValue = function(idOrProps,pin,format){
		// Shows a screen alert message with the value of the pin for the device `idOrProps`.
		// Optional `format` can be `a` (for analog) or `d` (for digital) value (Default: `d`)
		// Returns `this`

		var props = this.idOrPropsToObject(idOrProps);
		this.getDevice(props).alertPinValue(pin,format);

		return this;
	}


	app.appMousemove = function(e){
		app.mouseX = e.event.clientX;
		app.mouseY = e.event.clientY;
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

 




	app.blinkAllDevices = function(number,duration,noBgChange){
		// Blink all connected devices  
		// The parameters `number`,`duration`,`noBgChange` are passed through to `Device.blink()`
		// Return `this`

		for(var k in this._devices){
			this._devices[k].blink(number,duration,noBgChange);			
		}				

		return this;

	}



	app.clearDevices = function(){
		// Clears all `Devices` that have been connected
		// Returns `this`

		this._devices = {};
		this._defaultDevice = "";
		return this;
	}

	app.clearInterval = function(identifierOrName){
		// Clears the interval identified by `identifierOrName`
		// Optional `identifierOrName` can be the `identifier` of the interval, or a `name` supplied by `app.setInterval()`
		// If no  `identifierOrName` then all Intervals are cleared
		// Returns `this`

		try{
			// if no identifierOrName, clear all Intervals
			if(identifierOrName){
				// try clear the interval using both forms
				window.clearInterval(identifierOrName)
				window.clearInterval(this._intervals[identifierOrName])

				// Delete the property from _intervals
				delete this._intervals[identifierOrName];
			}else{
				var keys = Object.keys(this._intervals);
				for(var i=0;i<keys.length;i++){
					window.clearInterval(this._intervals[keys[i]]);

					// Delete the property from _intervals
					delete this._intervals[keys[i]];
				}
			}


		}catch(er){
			app.handleError(er,"app.clearInterval()")	
		}

		return this;

	}


	app.devicesToString = function(){
		// Returns a string represenation of all the connected `devices`
		// Default layout is: id - local_ip

		var rVal = "";
		for(var k in this._devices)
			rVal += this._devices[k].id + " - " + this._devices[k].variables.local_ip + "\n";

		return rVal;
	}



	app.digitalRead = function(idOrProps,pin,callback){
		// Read the digital state of `pin` for the device `idOrProps`
		// Optional `callback(data)` function is called passing the `data` of the Response
		// Returns `this`
		
		var props = this.idOrPropsToObject(idOrProps);
		this.getDevice(props).digitalRead(pin, callback)

		return this;
	}


	app.digitalWrite = function(idOrProps,pin,value){
		// Write the digital `value` to `pin` for the device `idOrProps`
		// Returns `this`

		var props = this.idOrPropsToObject(idOrProps);
		this.getDevice(props).digitalWrite(pin, value)

		return this;
	}





	app.findClass = function(element, className) { 
		// Returns the first `DOM Element` matching 
		return element.querySelector("." + className) 
	}



	app.findLocalDevices = function(address){
		// Finds devices on the same LAN
		// The devices are "linked" to the app - stored in `app._devices`
		// Optional `address` is the local IP address of the app.
		// If `address` is ommitted the app will try to determine it's own Local IP (must be online to do this)
		// The first device found will be made the default device


		// iPhone Personal Hotspot Tethering IP range... 172.20.10.1-172.20.10.3
		// Android Hotspot IP 192.168.42.x

	  try{

	  	if(!address || address == ""){
	  		// try get the local address, then re-call this method 
	  		this.getLocalIP(function(ip_addr){
	  			app.findLocalDevices(ip_addr);
	  		})
	  	} else{


			// Scan the local subnet of `address` looking for devices

			var ipParts = String(address).split(".")
			var ipPartial = ipParts[0]+"."+ipParts[1]+"."+ipParts[2]+"."

			// go through all IP addresses changing the last number only
			for(var i=0;i<255;i++){
				var ipAddress = ipPartial+i
				var thisURL = 'http://'+ipAddress;
				var response;
				jQuery.ajax({
					url: thisURL + '/info',
					ipAddress: ipAddress,
					crossDomain: true,
					timeout: app._scanIPTimeout
				}).done(function(data) {
					// inspect the `data` sent to determine if it is a valid device
					// Expect to find `name` and `id` in the `data` object
					if(data && data.id && data.name){
						// get the device, passing the properties
						// The local_ip is valid, so indicate this in props
						var props = {id: data.id, name: data.name, hardware: data.hardware, connected: data.connected, local_ip: this.ipAddress, isValidLocalIP: true}
						var device = app.getDevice(props);
						device.info = data;

						// If IOIO stil the default, or no default, make this device default
						if(!app._defaultDevice || app._defaultDevice == "" || app._defaultDevice == "IOIO")
							app._defaultDevice = data.id;

						// Some devices (Arduino) sometimes do not return variables - due to requests in rapid succession. 
						// Do getInfo() to retry
						if(!data.variables || !data.variables.local_ip)
							device.getInfo();
					}

				});


			}
		}

		
	  }catch(er){
			app.handleError(er,"app.findLocalDevices()")	
	  }

	  return this;
	}


	app.getDevice = function(idOrProps,key){
		// Returns the device for `idOrProps`
		// `idOrProps` can be a `deviceId` (a ten character string) 
		// or an object in the form
		// * {id: xxx, [local_ip: xxx, layoutId: xxx]}
		// If no `idOrProps` passed in, the default device is returned
		// Optionl `key` is the aREST Pro key 

		var idOrProps = idOrProps || this._defaultDevice;
		var props = app.idOrPropsToObject(idOrProps);
		if(key)
			props.key = key;
		var device = app._devices[String(props.id).trim()]

		if(device){
			// don't update properties if only id passed in (1 key)
			if(Object.keys(props).length > 1)
				device.updateProperties(props)
			return device
		}
		else {
			return app.addDevice(props)
		}

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




	app.getItem = function(idOrClassName,element){
		// Returns an `Item` object for `idOrClassName`
		// If no `idOrClassName` supplied it returns the `Current Item` (last item clicked)
		// `idOrClassName` can be the `ItemId` or the `ClassName` set in `Custom Classes`
		// If multiple items have the same `ClassName`, the first item is returned
		// Optional `element` is assinged to the `Item.element` property

		if(!idOrClassName && app._currentItemId)
			idOrClassName = app._currentItemId;

		try{

			var item = new app.Item(idOrClassName)

			if(element)
				item.element = element;


			// if no element, try getting the item by ClassName
			if(item.element == null)
				item = app.getItemByClassName(idOrClassName)

			// If still no element, there is no item
			if(item.element == null)
				return null;
			else
				return item;


		}catch(er){
			app.handleError(er,"app.getItem("+idOrClassName+")")
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


	app.getItemByClassName = function(name){

		var elements = document.getElementsByClassName(name);
		if(elements && elements.length && elements[0].id.match(/item/))
			return this.getItemByDomId(elements[0].id)

	}


	app.getItemByDomId = function(domId,element){
		// Returns an `Item` object for `domId` which is the `id` of the `Element` in the `DOM Tree`
		// Optional `element` is the `DOM Element`

		return app.getItem(parseInt(String(domId).replace(/[a-z]/g,"")),element)

	}


	app.getItemsElement = function(){
		return document.getElementsByClassName('items')[0]
	}




	app.getLocalIP = function(callback){
		// Searches for the Local IP Address for the app
		// IP addresses starting with 10. and 192. are treated as local
		// `callback(ip_addr)` is called if a local IP is found.
		// The app needs internet connectivity to do this.

		this.getIPs(function(ip_addr){
			if(String(ip_addr).match(/^10\./) || String(ip_addr).match(/^192\./)){
				if(callback != null) callback(ip_addr);
			}
		});
	}


	app.getPinValue = function(pinNameOrNumber,id){

		// Returns the value for pin `pinNameOrNumber` 
		// Optional `id` to use a specific `Device`
		// If no `id` passed in the default `Device` is used (`IOIO` is the initial default device)



		var device = this.getDevice(id?id:this._defaultDevice)

		// For IOIO use built in iot.setPin
		if(device.id == "IOIO"){
			try{
				return window.appbuilder.events.iot.getPinValue(pinName)
			}catch(er){this.handleError(er,"app.getPin() IOIO error")}

		} else {
			// all other devices... use Device methods
			return device.getPinValue(pinNameOrNumber);
		}
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






	app.getRemoteIP = function(callback){
		// Searches for the Remote IP Address for the app
		// IP addresses starting with 10. and 192. are treated as local
		// `callback(ip_addr)` is called if a remote IP is found.
		
		this.getIPs(function(ip_addr){
			if(ip_addr != null && ip_addr != undefined && !String(ip_addr).match(/^10\./) && !String(ip_addr).match(/^192\./)){
				if(callback != null) callback(ip_addr);
			}
		});
	}



	app.getScreen = function(id){
		// returns the `Screen` object for `id`

		try{

			var element;

			if(!id){
				id = String(document.querySelector('.screen').id).replace(/screen/,'')
			}

			// Special Case: id is the DOM Element of the screen
			// then the DomID will be in the format "screen123"
			// This happens if app.addScreenEvent() passes `this` to app.getScreen()
			if((typeof id === "object" && id.id && id.id.match(/screen/))){
				element = id;
				id = element.id.replace(/screen/,'')
			}

			var aScreen = new app.Screen(id);
			if(element)
				aScreen.element = element;

			return aScreen;		

		}catch(er){
			app.handleError(er,"app.getScreen("+id+")")
		}


	}




	app.getVariable_xxx = function(name){
		// Returns the value of a form variable with the given `name`.
		// [NOTE: the method name is getVariable without _xxx and it already exists in the built-in JavaScript library. 
		//   It is included here for documentation purposes only.]


	}



	app.handleError = function(er,msg){
		// Handles errors. Logs `er` and `msg` to the console.

		var msg = msg || ""
		console.log("ERROR: ",er,msg)

	}



	app.idOrPropsToObject = function(idOrProps){
		// Returns an `object` using `idOrProps`

		var props = {};

		if (typeof idOrProps === "object")
			props = idOrProps;
		else
			props.id = String(idOrProps).trim();

		return props;
	}





	app.itemClicked = function(e){
		// Saves the `_currentItemId` when `Element` `e` is clicked.
		// Returns `this`


		if(e.target.classList.contains('item'))
			app._currentItemId = app.getIdFromDOMId(e.target.id)
		if(e.target.parentElement.classList.contains('item'))
			app._currentItemId = app.getIdFromDOMId(e.target.parentElement.id)
		if(e.target.parentElement.parentElement.classList.contains('item'))
			app._currentItemId = app.getIdFromDOMId(e.target.parentElement.parentElement.id)

		return this;
			
	}


	app.prependToVariable = function(variable,value){
		// prepends `value` to `variable` and return the result

		return this.appendToVariable(variable,value,true);
	}



	app.removeScreenEvent_xxx = function(identifier){
		// Stops a `Screen` event from being called when a screen loads
		// `identifier` is the return value of `app.addScreenEvent()` 

	}


	app.removeTabEvent_xxx = function(identifier){
		// Stops a `Tab` event from being called when a screen loads
		// `identifier` is the return value of `app.addTabEvent()` 

	}


	app.removeVariableEvent_xxx = function(identifier){
		// Stops a `Variable` event from being called when a variable value changes
		// `identifier` is the return value of `app.addVariableEvent()` 

	}




	app.sendCommands = function(cmds,id,key,callback){
		// Sends commands `cmds` to a `Device` 
		// Optional `id` specifies the Device ID, otherwise `_defaultDevice` is used
		// Optional `key` specidies the Pro key
		// Optional `callback` is called once the commands have been sent.
		// `callback` may be called multiple times if the number of commands being sent exceeds `Device.ioMaxCommandsPerBatch`

		this.getDevice(id,key).sendCommands(cmds,callback)

		return this;
	}



	app.setBackgroundColor = function(color){
		// Set the `BackgroundColor` of the current screen to `color`
		// Returns `this`
		app.getScreen().setBackgroundColor(color);

		return this;
	}


	app.setBackgroundImage = function(src,method){
		// Set the `BackgroundIamge` of the current screen to `src` 
		// Optional `method` determines the layout
		// Returns `this`

		app.getScreen().setBackgroundImage(src,method);
	}



	app.setDefaultDevice = function(idOrProps){
		// Sets the default device for the app. 
		// `idOrProps` can pass in either the `deviceId` or a properties `Object`
		// Returns `this`

		var props = this.idOrPropsToObject(idOrProps);
		this._defaultDevice = props.id;
		this.getDevice(props);

		return this;
	}


	app.setInterval = function(func,delay,timeout,name){
		// repeatedly calls a function `func` with a fixed `delay`
		// optionally stops after `timeout`
		// Optionally gives this interval a `name` which can be used by `clearInterval`

		try{

			// make sure another interval is not using "name" - cancel it
			app.clearInterval(name);

			var identifier = app.addInterval(window.setInterval(func,delay),name)
			if(timeout)
				setTimeout(function() { app.clearInterval(identifier);}, timeout)
		}catch(er){
			app.handleError(er,"app.setInterval()")
		}

		return this;

	}



	app.setLED = function(val,id){
		// Sets the built-in LED to `val`
		// `val` can be 1/0 or ON/OFF or true/false
		// Optional `id` to use a specific `Device`
		// If no `id` passed in the default `Device` is used 
		// Returns `this`

		try{
			this.getDevice(id?id:this._defaultDevice).setLED(val);
		}catch(er){
			this.handleError(er,"app.setLED()")
		}

		return this;
	}




	app.setPin = function(pinNameOrNumber,val,id,key){
		// Sets the pin number `pinNameOrNumber` to `val`
		// Optional `id` to use a specific `Device`
		// If no `id` passed in the default `Device` is used (`IOIO` is the initial default device)



		var device = this.getDevice((id?id:this._defaultDevice),key)

		// For IOIO use built in iot.setPin
		if(device.id == "IOIO"){
			try{
				window.appbuilder.events.iot.setPin(pinNameOrNumber,val)
			}catch(er){this.handleError(er,"app.setPin() IOIO error")}

		} else {
			// all other devices... use Device methods
			device.setPin(pinNameOrNumber,val);
		}

		return this;

	}



	app.setVariable_xxx = function(name, value){
		// Set the value of the variable `name` to `value`.
		// [NOTE: the method name is setVariable without _xxx and it already exists in the built-in JavaScript library. 
		//   It is included here for documentation purposes only.]
	}



	app.showRemoteScreen_xxx = function(url){
		// The app will navigate to a remote screen that is loaded from `url`. 
		// `url` can contain parameters in the form `{name}` that will be replaced with the value of a form `variable` with the given `name`.
		// For example url = `https://mydomain.com/myscript.php?FirstName=[myName]`
		//   This requires a form `variable` in your app with the Name `myName`
		// [NOTE: the method name is showRemoteScreen without _xxx and it already exists in the built-in JavaScript library. 
		//   It is included here for documentation purposes only.]

	}


	app.showScreen_xxx = function(id){
		// The app will navigate the screen with `id`
		// [NOTE: the method name is showScreen without _xxx and it already exists in the built-in JavaScript library. 
		//   It is included here for documentation purposes only.]
	} 

	app.showTab_xxx = function(id){
		// The app will navigate the tab with `id`
		// [NOTE: the method name is showTab without _xxx and it already exists in the built-in JavaScript library. 
		//   It is included here for documentation purposes only.]
	}


	app.togglePin = function(pinNameOrNumber,val,id){
		// Toggles the pin `pinNameOrNumber` 
		// Optional `id` to use a specific `Device`
		// If no `id` passed in the default `Device` is used (`IOIO` is the initial default device)


		var device = this.getDevice(id?id:this._defaultDevice)

		// For IOIO use built in iot.setPin
		if(device.id == "IOIO"){
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



		this.getSubTitle = function(str){
			//Returns the `Subtitle` of the item

			try{
				return app.findClass(this.element,"text").innerText;
			}catch(er){
				app.handleError(er,"Item.getSubTitle()")
			}
			return null;
		}


		this.getText = function(str){
			//Returns the `Text` of the item

			try{
				return app.findClass(this.element,"text").innerText;
			}catch(er){
				// the text might be in a 'html' class
				try{
					return app.findClass(this.element,"html").innerText;
				}catch(er2){
					app.handleError(er+", "+er2,"Item.getText()")
				}
			}
			return null;
		}


		this.getTitle = function(str){
			//Returns the `Title` of the item

			try{
				return app.findClass(this.element,"title").innerText;
			}catch(er){
				app.handleError(er,"Item.getText()")
			}
			return null;
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

		this.setBackgroundImage = function(src,method){
			// Sets the `backgroundImage` of this `Item` to `src`. 
			// Optional `method` determines the layout
			// One of: `fit` | `fill` | `stretch` | `center` | `tile`
			// `method` defaults to `fit` 

			if(!method)
				method = 'fill'

			var items = this.element;

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

		this.setSubTitle = function(str){
			//set the value of Sub Title to `str`
			app.findClass(this.element,"text").innerHTML = str
			return this;
		}


		this.setSubTitleColor = function(color){
			//set the color of SubTitle to `color`
			try{
				app.findClass(this.element,"text").style.color = color
			}catch(er){
				app.handleError(er,"Item.setSubTitleColor()")
			}

			return this;
		}


		this.setText = function(str){
			//set the value of Text to `str`

			try{
				app.findClass(this.element,"text").innerHTML = str
			}catch(er){
				// the text might be in a 'html' class
				try{
					app.findClass(this.element,"html").innerHTML = str
				}catch(er2){
					app.handleError(er+", "+er2,"Item.setText()")
				}
			}

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


		this.setTitleColor = function(color){
			//set the color of Title to `color`
			try{
				app.findClass(this.element,"title").style.color = color
			}catch(er){
				app.handleError(er,"Item.setTitleColor()");
			}

			return this;
		}

		this.setTitle = function(str){
			//set the value of Title to `str`
			try{
				app.findClass(this.element,"title").innerHTML = str
			}catch(er){
				app.handleError(er,"Item.setTitle()")
			}
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
				// ignore new-item-placeholder
				if(!elements[i].classList.contains("new-item-placeholder")){
					var item = app.getItemByDomId(elements[i].id,elements[i])
					this.items[item.id] = item ;
				}
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



		this.getTitle = function(str){
			// Returns the `Title` of the screen

			var header = app.findClass(this.element,"header")
			return app.findClass(header,"title").innerText;
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
				method = 'fill'

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
		// `props` is a JSON object of properties used to instantiate the Device
		// - `props.id` The `id` is mandatory and is used to identify the device.
		// - `props.local_ip` Optional Local IP Address of the device 
		// - `props.layoutId` Optional board layout ID (from AppShed IoT Builder)



		// TODO
		// * run checks on localIP to make sure the app is on same subdomain, before using it.
		// * support IOIO calls or aREST calls... and Arduino calls
		// * do setPinMode when required... on calling read/write methods... and use callback if changing pinMode.

		this.address = "";
		this.connected = false; // This value is passed in from the device
		this.id = "";
		this.handle_ioBatchCommands = null; // a handle for the timeout to send batch commands
		this.hardware = ""; // This value is passed in from the device
		this.hasTestedLocalIPFromRemote = false;
		this.info = {}; // Holds the data returned by `getInfo()`
		this.ioBatchCommands = []; // Array of commands to be sent as a batch to the device
		this.ioBatchMode = app._ioBatchMode; // Send IO commands to devices in batches, defaults to `true`
		this.ioBatchTimeout = app._ioBatchTimeout; // how long to wait while collecting IO commands (e.g. from multiple Blockly commands), Defaults to `100`
		this.ioMaxCommandsPerBatch = app._ioMaxCommandsPerBatch = 4;
		this.isTestingLocalIP = false;
		this.isTestingLocalIPFromRemote = false;
		this.isValidLocalIP = false;	
		this.isValidLocalIPFromRemote = false;	
		this.layout = null;
		this.local_ipFromRemote = null; // Stores the local IP Address received from Remote
		this.name = ""; // This value is passed in from the device
		this.pendingMethods = {analogRead:{},analogWrite:{},digitalRead:{},digitalWrite:{}}; // An object of objects for each of the IO methods. This holds a flag when a certain method is pending (i.e. AJAX call in process)
		this.properties = props; // Stores the `props` passed in when the device is instantiated  
		this.pinFormats = {};
		this.pinNames = []; // An array of pin names (from the layout)
		this.pinModes = {};
		this.pinValues = {};
		this.pinVariableTies = []; // array of arrays of variables tied to each pin
		this.pollActive = []; // Array of booleans to indicate if a poll is active for that index/pin
		this.pollTimeout = 1000;
		this.remoteAddress = "";
		this.tiePinsToVariables = false; // If true, variables in the app are tied to pins by the same name
		this.variables = {}; // This object is passed in from the device




		this.init = function(){	
			// Initialize the object

			// Set defaults
			this.hasTestedLocalIPFromRemote = false;
			this.isTestingLocalIP = false;
			this.isTestingLocalIPFromRemote = false;
			this.isValidLocalIP = false;	
			this.isValidLocalIPFromRemote = false;	
			this.pendingMethods = {analogRead:{},analogWrite:{},digitalRead:{},digitalWrite:{}};

			// Set dynamic properties
			this.id = this.properties.id;
			this.key = this.properties.key; // Optional key for the aREST Pro account

			// Update remote address
			this.updateRemoteAddress();


			// Update the device info using properties passed in
			this.updateInfo(this.properties);

			// Call setup methods
			this.configureAddress();
			this.configureLayout();

			return this;
		};


		this.addBatchCommand = function(format,pin,value,duration){
			// Add a command to the batch, and send after a timeout
			// This allows multiple commands issued in close succession to be batched up, reducing dealys in multiple API calls			

			this.ioBatchCommands[this.ioBatchCommands.length] = [format,pin,value,duration];

			// start the timeout if not already running
			if(!this.handle_ioBatchCommands){
				var deviceId = this.id;

				this.handle_ioBatchCommands = setTimeout(function(){
					app.getDevice(deviceId).sendCommands().handle_ioBatchCommands = undefined; 
				},this.ioBatchTimeout);

			}

		};



		this.alertPinValue = function(pin,format){
			// Shows a screen alert message with the value of the pin.
			// Optional `format` can be `a` (for analog) or `d` (for digital) value (Default: `d`)
			// Returns `this`

			var format = format || 'd';

			if(format == 'd')
				this.digitalRead(pin,function(data){
					appbuilder.app.alert("Pin "+pin+" = "+data.return_value)
				});
			if(format == 'a')
				this.analogRead(pin,function(data){
					appbuilder.app.alert("Pin "+pin+" = "+data.return_value)
				});

			return this;
		};



		this.analogRead = function(pin, callback) {

		  	this.setPinMode(pin,"i").setPinFormat(pin,"a");
		    jQuery.ajaxq(this.id, {
		      url: this.address + '/analog/A' + pin +'?key='+this.key,
		      crossDomain: true
		    }).done(function(data) {
		      if(callback != null) callback(data);
		    });
		    return this;
		};


		this.analogWrite = function(pin, state, noBatch) {
			// Send an API call to the device to write an analog `value` to `pin`.
			// Optionally If `useBatchCommands` is true the command is cached and sent after a short delay in a batch


		  	this.setPinMode(pin,"o").setPinFormat(pin,"a");

		  	if(noBatch || !this.ioBatchMode){
			    jQuery.ajaxq(this.id, {
			      url: this.address + '/analog/' + pin + '/' + state +'?key='+this.key,
			      crossDomain: true
			    }).done(function(data) {
			    });		  		
		  	} else {
		  		this.addBatchCommand(0,pin,state,0);
		  	}
		    return this;
		};



		this.attachServos = function(attachArray){
			// Attach servos to pins
			// `attachArray` is a two-dimensional array [x][2]
			// For each x, the array has the servo number (e.g. 1) and the pin number (e.g. 7)
			
			var params = ""; // Build up the params to send to the board to attach the required arrays

			for(var i=0;i<attachArray.length; i++){
				// for first one add 
				if(i>0)
					params += ":"; // `:` is the separator between servo definitions
				params += attachArray[0]+","+attachArray[1];

			}

			if(params>"")
				this.callFunction("attachServos",params);

			return this;
		};


		this.blink = function(number,duration,noBgChange){
			// Blink the built-in LED
			// Optional `number` specifies how many blinks (default 5)
			// Optional `duration` specifies the time to stay on and off (default 1 second)
			// Optional `noBgChange` ensures that the Screen BackgroundColor is not changed during blink

			var number = number || 5;
			var duration = duration || 1000;
			var deviceId = this.id;
			var noBgChange = noBgChange || false;
			var origColor = app.getScreen().getBackgroundColor();


			app.setInterval(function(){
				app.getDevice(deviceId).setLED(1);
				if(!noBgChange)
					app.getScreen().setBackgroundColor("Red")

				setTimeout(function(){
					app.getDevice(deviceId).setLED(0);
					if(!noBgChange)
						app.getScreen().setBackgroundColor("Gray")
				},duration)
			},(duration*2),(duration*2*number))		

			// Put the Screen Bg back
			if(!noBgChange)
				setTimeout(function(){app.getScreen().setBackgroundColor(origColor)},(duration*2*(number + 1)))

			return this;
		}


		this.callFunction = function(called_function, parameters, callback) {
			// Calls a function defined on the device

			jQuery.ajaxq(this.id, {
			  url: this.address + '/' + called_function + '?params=' + parameters +'%26key='+this.key,
			  crossDomain: true
			}).done(function(data) {
			  if (callback != null) {callback(data)}
			})

			return this;
		}



		this.cancelPending = function(method,pin,state){
			// Cancels the `method`,`pin`,`state` combination from the pending methods.
			// Return `this`

			this.pendingMethods[method][pin+"_"+state] = false;

			return this;
		}






		this.configureAddress = function(){
			// Configures which address to use for calls to this device.
			// Priority for which `address` to use is given in the following order:
			// * `localIP`
			// * `localIPFromRemote`
			// * The default cloud webservice

			if(this.variables.local_ip && this.variables.local_ip > ""){
				if(this.isValidLocalIP)
					this.address = "http://"+this.variables.local_ip;
				else 
					this.testLocalIP(); 
			}
			else if(this.local_ipFromRemote && this.local_ipFromRemote != "undefined"){
				if(this.isValidLocalIPFromRemote)
					this.address = this.address = "http://"+this.local_ipFromRemote;
				else 
					this.testLocalIP(1); 
			}
			else{
				this.updateRemoteAddress();
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
			// Reads the digital value of `pin`
			// Optional `callback(data)` function is called passing the `data` from the Response
			// Returns `this`

		  	this.setPinMode(pin,"i").setPinFormat(pin,"d");
		    jQuery.ajaxq(this.id, {
		      url: this.address + '/digital/' + pin +'?key='+this.key,
		      crossDomain: true
		    }).done(function(data) {
		      if(callback != null) callback(data);
		    });
		    return this;
		};



		this.digitalWrite = function(pin, state, noBatch) {
			// Sets the digital output on `pin` to `state`
			// `state` must be either `1` or `0`
			// Optionally If `useBatchCommands` is true the command is cached and sent after a short delay in a batch

		  	this.setPinMode(pin,"o").setPinFormat(pin,"d");

		  	if(noBatch || !this.ioBatchMode){

				if(this.isPending("digitalWrite",pin,state)){
					return this;
				}

				this.setPending("digitalWrite",pin,state);

				

			    jQuery.ajaxq(this.id, {
			      url: this.address + '/digital/' + pin + '/' + state + '?key='+this.key,
			      crossDomain: true,
			      id: this.id
			    }).always(function(data) {
			    	app.getDevice(this.id).cancelPending("digitalWrite",pin,state);
			    });
		  	} else {
		  		this.addBatchCommand(1,pin,state,0);
		  	}
		    return this;

		};




		this.fade = function(pin,direction,duration,noBgChange){
			// Fade `pin` on or off, depending on `direction`.
			// Optional `pin` is the pin number (Default: 5, except on RaspberryPi: 7)
			// If `direction` is "on" or 1, the pin will fade from 0 to 100% 
			// If `direction` is "out", "off" or 0, the pin will fade from 100% to 0
			// Default `direction` is 1
			// Optional `duration` determines how long the fade should take (Default: 5 seconds) 
			// Optional `noBgChange` ensures that the Screen BackgroundColor is not changed during blink
			// Returns `this`

			var pin = pin || ((this.hardware == "rpi")?7:5);
			var direction = (direction != null && (direction == 0 || direction == "off" || direction == "out")) ? 0 : 1;
			var deviceId = this.id;

			if(direction){
				this.analogWrite(pin,0);
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,20)},1000)
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,40)},2000)
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,60)},3000)
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,80)},4000)
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,100)},5000)				
			} else {
				this.analogWrite(pin,100);
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,80)},1000)
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,60)},2000)
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,40)},3000)
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,20)},4000)
				setTimeout(function(){app.getDevice(deviceId).analogWrite(pin,0)},5000)				
			}

			return this;
		}



		this.getInfo = function(callback,address) {
			// Queries the device to get basic info
			// `callback` is the function run when the `data` is returned from the device
			// Optional `address` can be passed in, the default address is `this.address`
			// Returns `this`

			var address = address || this.address;

			if(!address || address == "" || address == "undefined")
				return;

			if(!address.match(/http/))
				address = 'http://'+address;


			jQuery.ajaxq(this.id, {
			  url: address + '/info' +'?key='+this.key,
			  crossDomain: true
			}).done(function(data) {
				try{app.getDevice(data.id).updateInfo(data).info = data}
				catch(er){app.handleError(er,"Device.getInfo()")};
				if (callback != null) {callback(data);}
			});

			return this;
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




		this.getLEDPin = function(){
			// Returns the `pinNumber` for the built-in LED for this device

			// Need to know the hardware type - from the "name" parameter or "hardware" variable
			if(this.hardware == "esp8266")
				return 0;

			switch (this.name){
				case "ArduinoCytron":
					return 13; 
					break;
				case "esp8266":
					return 0; 
					break;
				default:
					return 1; 
			}

		}


		this.getLocalIPFromRemote = function(){
			// Try to get the LocalIP from the Remote address;

			this.hasTestedLocalIPFromRemote = true; // This is to ensure that the test is only performed once
			var address = this.remoteAddress;

			this.getInfo(function(data){
				try{
					if(typeof data.variables.local_ip != "undefined"){
						var device = app.getDevice({id: data.id})
						device.local_ipFromRemote = data.variables.local_ip
						device.configureAddress();
					}
				}catch(er){}
			},address);
		};


		this.getPin = function(pinNameOrNumber){
			// Redundant function 
			// Returns `this.getPinValue()`

			return this.getPinValue(pinNameOrNumber);
		};


		this.getPinFormat = function(pinNumber){
			return this.pinFormats[pinNumber];
		};


		this.getPinMode = function(pinNumber){
			return this.pinModes[pinNumber];
		};



		this.getPinValue = function(pinNameOrNumber){
			// Returns the value of pin `pinNameOrNumber` 
			// This function requires the pin value to be polled (regular lookup every x milliseconds)
			// If the polling has not started, this function starts the polling loop, but a `null` value is returned
			// The polling loop constantly updates the value




			// presume a pin number passed in
			
			var pinNumber = parseInt(pinNameOrNumber)

			// if pinNameOrNumber is not a pinNumber
			if(pinNameOrNumber != pinNumber){
				// Check to see if we are using a board Layout
				if(this.layout){
					// go through outputs and search for name
					var inputs = this.layout.inputs;

					for(var i=0;i<inputs.length;i++){
						if(inputs[i].variable == pinNameOrNumber){
							// a named pin matches, so use this pin number
							pinNumber = inputs[i].pin;
						}
					}
				} 
			}


			// no Layout - or invalid pinName, so check to see if it's a pin number
			if(isNaN(pinNumber)){
				// not a number, do nothing
			} else {
				// make sure this pin is being pollled
				this.poll(pinNumber);

				// return the value saved for this pin
		 		return this.pinValues[pinNumber];
			}

			return null;
		}




		this.getVariable = function(variable, callback) {
		    jQuery.ajaxq(this.id, {
		      url: this.address + '/' + variable +'?key='+this.key,
		      crossDomain: true
		    }).done(function(data) {
		      callback(data);
		    });
		};



		this.isPending = function(method,pin,state){
			// Returns true if the `method`,`pin`,`state` combination is pending.

			try{return this.pendingMethods[method][pin+"_"+state];}catch(er){}

			// If error then the key does not exist, so pending must be false because the AJAX wasn't started
			return false
		};


		this.poll = function(pinNumber,timeout){
			// Polls `pinNumber` to constantly check the value;
			// The pin value is saved and can be accessed (after a timeout) using `this.getPinValue()`
			// Optional `timeout` determines how long to wait before polling again
			// Returns `this`

			var deviceId = this.id;
			var timeout = timeout || this.pollTimeout; // use the default timeout if none supplied


			// Start polling if not currently active

			if(!this.pollActive[pinNumber]){
				this.pollActive[pinNumber] = true;
				this.digitalRead(pinNumber, function(data){
					var device = app.getDevice(deviceId);
					device.pollActive[pinNumber] = false;
					device.pinValues[pinNumber] = data.return_value;
					device.updatedTiedVariables(pinNumber);

					// poll again
					setTimeout(function(){
						device.poll(pinNumber);
					},timeout)
				})
			}

		};





		this.sendCommands = function(cmds,callback){
			// Sends the next batch of commands
			// Optional `cmds` arary holds the commands to send, otherwise uses `this.ioBatchCommands`
			// `cmds` expect an array of `command` arrays, where each `command` array contains 4 items: `[format,pin,value,duration]`
			// Optional `callback` is the callback function


			var commands;
			if(cmds)
				commands = cmds;
			else{
				commands = this.ioBatchCommands.slice(); // create a copy of the commands
				this.ioBatchCommands = []; // empty the commands array (so it can be added to again)
			}

			// send up to maxCommandsPerBatch
			var i = 0;
			var params = "";

			while(commands.length && i < this.ioMaxCommandsPerBatch){
				var next = commands.shift();
				if(params > "")
					params += ":";
				params += next[0]+","+next[1]+","+next[2]+","+next[3];
				i++;
			}

			this.callFunction("commands",params,callback);

			// If some commands still in the array, send those.
			if(commands.length)
				return this.sendCommands(commands);

			return this;
		};






		this.setLayout = function(data){
			// sets the `layout` to `data` (expecting a JSON object)

			this.layout = data;
			return this;

		};



		this.setLED = function(val){
			// Sets the built-in LED to `val`
			// `val` can be 1/0 or ON/OFF or true/false
			// NB: Setting the LED "ON" in some cases pulls the Pin down (i.e. "OFF")!
			// Returns `this`

			var pinNumber = this.getLEDPin();
			var invert = true; // most boards turn the LED by pulling the pin down.

			if(this.hardware == "arduino")
				invert = false;

			// Invert the val if required
			if(invert){
				if(val == 1 || val == true || val == "true" || String(val).match(/on/i))
					val = 0;
				else
					val = 1
			}

			this.setPin(pinNumber,val)

			return this;

		}



		this.setPending = function(method,pin,state){
			// Sets a flag to indicate that a `method`,`pin`,`state` combination is pending (i.e. the AJAX request is running)
			// This is used to stop duplicate requests being sent continuously thereby overloading the device
			// `method` must be one of:
			// * `analogRead`
			// * `analogWrite`
			// * `digitalRead`
			// * `digitalWrite`
			// Return `this`

			// Create a key using pin_state
			this.pendingMethods[method][pin+"_"+state] = true;

			return this;

		}



		this.setPin = function(pinNameOrNumber,val){
			// Sets the pin number `pinNameOrNumber` to `val`
			// Returns `this`


			// presume a pin number passed in
			
			var pinNumber = parseInt(pinNameOrNumber)

			// if pinNameOrNumber is not a pinNumber
			if(pinNameOrNumber != pinNumber){
				// Check to see if we are using a board Layout
				if(this.layout){
					// go through outputs and search for name
					var outputs = this.layout.outputs;

					for(var i=0;i<outputs.length;i++){
						if(outputs[i].variable == pinNameOrNumber){
							// a named pin matches, so use this pin number
							pinNumber = outputs[i].pin;
						}
					}
				} 
			}


			// no Layout - or invalid pinName, so check to see if it's a pin number
			if(isNaN(pinNumber)){
				// not a number, do nothing
			} else {

				// if val is boolean then use digital output
				if(val == true || val == "true" || String(val).match(/on/i))
					this.digitalWrite(pinNumber,1)
				else if(val == false || val == "false" || String(val).match(/of/i))
					this.digitalWrite(pinNumber,0)
				else if(val == 1 || val == 0){ // special case: 1/0 might be digital or analog. 
					// Presume digital unless analog specified.
				 	if(this.getPinFormat(pinNumber) == "a")
				 		this.analogWrite(pinNumber,val)
				 	else
				 		this.digitalWrite(pinNumber,val)
				} else { // everything else presume analog
					this.analogWrite(pinNumber,val)
				}

			}
			return this;
		}






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


		    jQuery.ajaxq(this.id, {
				url: this.address + '/mode/' + pin + '/'+state+'?key='+this.key,
		    	crossDomain: true
		    }).done(function(data) {
				var device = app.getDevice(data.id)
				device.pinModes[pin] = state;

			  	// If all variables tied to pins, then tie this if input
			  	if( device.tiePinsToVariables && state == "i"){
			  		device.tie(pin,pin); // use the pin number as the name of the variable
			  		device.poll(pin);
			  	}

		    });

		    return this;
		};


		this.testLocalIP = function(fromRemote){
			// Tests `this.local_ip` to determine if the app can use it instead of the Remote address
			// Optional: If `fromRemote` is true it will test `this.local_ipFromRemote`
			// Returns `this`

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

			var testIP = this.variables.local_ip;
			if(fromRemote)
				testIP = this.local_ipFromRemote;


			// Query the IP and see if it is valid
			this.getInfo(function(data){

				if(data.id == originalID){
					if(fromRemote)
						app.getDevice(data.id).isValidLocalIPFromRemote = true;
					else
						app.getDevice(data.id).isValidLocalIP = true;
					app.getDevice(data.id).configureAddress()					
				}
		    },testIP);

			return this;
		}





		this.tie = function(pinNameOrNumber,variable){
			// Ties the pin `pinNameOrNumber` to a `variable`
			// The variable is updated every time the pin is polled
			// Returns `this`


			// presume a pin number passed in
			
			var pinNumber = parseInt(pinNameOrNumber)

			// if pinNameOrNumber is not a pinNumber
			if(pinNameOrNumber != pinNumber){
				// Check to see if we are using a board Layout
				if(this.layout){
					// go through inputs and search for name
					var inputs = this.layout.inputs;

					for(var i=0;i<inputs.length;i++){
						if(inputs[i].variable == pinNameOrNumber){
							// a named pin matches, so use this pin number
							pinNumber = inputs[i].pin;
						}
					}
				} 
			}


			// no Layout - or invalid pinName, so check to see if it's a pin number
			if(isNaN(pinNumber)){
				// not a number, do nothing
			} else {
				// Check if any ties yet for this pin
				if(!this.pinVariableTies[pinNumber])
					this.pinVariableTies[pinNumber] = [];

				// add the variable to the array of ties
				this.pinVariableTies[pinNumber].push(variable);
				this.poll(pinNumber);
			}
			return this;
		}


		this.tieAllPinsToVariables = function(){
			// Ties all input pins to variables by the same name
			// Requires a layout to be specified for the device (to determine which pins are inputs)
			// Allows for easy moniotring of pins: simply create form fields (variables) with the same names as the pins
			// Also allows you to name variables using the `pinNumber`, 
			// but with multiple connected devices using `pinNumber` will cause conflicts.
			// Returns `this`

			this.tiePinsToVariables = true; // remember this setting, might need to tie later (e.g. in setPinMode())


			if(this.layout){
				// go through inputs 
				var inputs = this.layout.inputs;

				for(var i=0;i<inputs.length;i++){
					this.tie(inputs[i].pin,inputs[i].variable);
					this.poll(inputs[i].pin);
				}
			} 


			return this;
		}





		this.toString = function(){
			return JSON.stringify({
				id: this.id,
				name: this.name,
				hardware: this.hardware,
				connected: this.connected,
				variables: this.variables
			})
		}


		this.updateInfo = function(data){
			// Update the basic Info of the device using `data`

			if(data){
				if(data.name)
					this.name = data.name;
				if(data.connected)
					this.connected = data.connected;
				if(data.hardware)
					this.hardware = data.hardware;
				if(data.variables)
					this.variables = data.variables;

				// Special cases (These might be passed in props when instantiating)
				if(data.local_ip)
					this.variables.local_ip = data.local_ip;
				if(data.isValidLocalIP)
					this.isValidLocalIP = data.isValidLocalIP;

			}

			return this;
		}



		this.updateProperties = function(props){
			var addressChanges = false;
			var layoutChanges = false;


			// has the localIP changed?
			if((typeof props.local_ip == "string") && 
				(!this.variables.local_ip || this.variables.local_ip != props.local_ip)
			){

				// save the local_ip in variables
				this.variables.local_ip = props.local_ip;
				this.isTestingLocalIP = false;
				this.isValidLocalIP = false;	
				addressChanges = true;
			}

			// has the layout changed
			if( (props.layoutId && props.layoutID != this.properties.layoutId) ||
				!props.layoutId || props.layoutId == ""	)
				layoutChanges = true;

			// update each property using values passed in
			for(var k in props)
				this.properties[k] = props[k]

			if(props.key)
				this.key = props.key;
			this.updateRemoteAddress();

			if(addressChanges)
				this.configureAddress();

			if(layoutChanges)
				this.configureLayout();

			return this;
		};


		this.updateRemoteAddress = function(){
			this.remoteAddress = "http://cors.appshed.com/?u=https://cloud.arest.io/"+this.id;
			if(this.key)
				this.remoteAddress = "http://cors.appshed.com/?u=https://pro.arest.io/"+this.id;

			return this;
		}



		this.updatedTiedVariables = function(pinNumber){
			// Update all variables tied to a pin with the current value
			// Return `this`


			if(this.pinVariableTies[pinNumber] && this.pinVariableTies[pinNumber].length){
				for(var i=0;i<this.pinVariableTies[pinNumber].length;i++){
					try{
						app.setVariable(this.pinVariableTies[pinNumber][i],this.pinValues[pinNumber])
					}catch(er){}
				}
			}
		}








		// ************************************************************
		// We must call init() on the Device
		// ************************************************************
		this.init();
	}


	Device.prototype.toString = function deviceToString() {
	  var ret = 'Device ' + this.id;
	  return ret;
	}


	// INITIALISE App
	//setTimeout(function(){app.init()},100);
	app.init()



} catch(er){console.log("ERROR IN app.js",er)}



