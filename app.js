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
						// v1.2.7 (23-12-2016) Support for single device running a softAP (Access Point)
						// v1.2.8 (26-12-2016) Touch position, touchX, touchY, touchAngle etc.
						// v1.2.9 (11-01-2017) Logo commands
						// v1.3.0 (17-02-2017) Motion Driving
						// v1.3.1 (12-03-2017) Switching between AP and Cloud mode
						// v1.3.2 (29-03-2017) Loop function 
						// v1.3.3 (01-04-2017) Form class added
						// v1.3.4 (05-04-2017) import (library), applyStyles, range/slider and other special inputs
						// v1.3.5 (09-04-2017) import improvements, accordion
						// v1.3.6 (17-04-2017) RGB LED, theme & import in Description
						// v1.3.7 (26-04-2017) Form localStorage save, aggregate functions
						// v1.3.8 (28-04-2017) Data Class, Aggregate, Email, Statistics, AppBuilder CSS, Blue light
						// v1.3.9 (05-05-2017) Data calculations, Data select, Data filters
						// v1.3.10 (07-05-2017) Data enhancements
						// v1.3.11 (14-05-2017) NeoPixel basic support
						// v1.3.12 (27-05-2017) UI enhancements
						// v1.3.13 (01-06-2017) Device supports Sketch 39 (getInfo() sends all pin values)
						// v1.3.14 (07-06-2017) Minor enhancements, PhoneGap/Cordova fixes
						// v1.3.15 (13-06-2017) AppBuilder UI enhancements
						// v1.3.16 (20-06-2017) Import and Theme stability enhancements
						// v1.3.17 (25-06-2017) app.log(), Mobile UI
						// v1.3.18 (30-06-2017) Mobile UI enhancements
						// v1.4.1 (10-07-2017) Included in UI for all users on load (no Custom JavaScript required), separated out CSS files
						// v1.4.2 (12-07-2017) device.togglePin(), app.ready
						// v1.4.3 (16-07-2017) Device.connect (with onConnected event)
						// v1.4.4 (17-07-2017) app.doScreenImports()	
						// v1.4.5 (19-07-2017) moved to ./appbuilder, wrap all in window.addEvent
						// v1.4.6 (22-07-2017) bug fixing - Live site updated to include app.js 28-07-2017
						// v1.4.7 (28-07-2017) Bug fixes
						// v1.4.8 (01-08-2017) Connect to devices using local_ip, Device.tieAllPinsToVariables updated
						// v1.4.9 (01-08-2017) Device.tie() supports analog
						// v1.4.10 (05-08-2017) Item.addAction, hideTab(), showTab(), app.addClass(), app.removeClass(), core styles
						// v1.4.11 (15-08-2017) Bug fixes
						// v1.4.12 (30-08-2017) Phaser.io integration, doScreenOnload
						// v1.4.13 (09-09-2017) hideTabBar() fixed, app.loadScript() now with callback onload, app.onReady()
						// v1.4.14 (25-09-2017) Item.show(), Item.hide(), Item.isFormItem(), Item.getVariable(), Item.getVariableName()
						// v1.4.15 (28-09-2017) app.import - callback has timeout, app.repositionItems()
						// v1.4.16 (08-10-2017) Fixed Device.analogRead() 
						// v1.4.17 (14-10-2017) .hidden-live, Screen.addItem, app.stopLoops()
						// v1.4.18 (19-10-2017) .template, Screen.addItem({template}), Item.setAction()
						// v1.4.19 (24-10-2017) coreStyles... Academy
						// v1.4.20 (25-10-2017) renamed Data.getData() to Data.rows(), JavaScript API Documentation started
						// v1.4.21 (25-10-2017) bug fixes: onLoad running multiple times, data.email
						// v1.4.22 (11-12-2017) expanding addItem template
						// v1.4.23 (11-02-2018) fixes to Item templates, minor bugs
						// v1.4.24 (12-04-2018) Board definitions stored in local storage, Item.getLargeImage(), Device.tiePinsToVariables default true 
						// v1.4.25 (31-05-2018) Integrate Phaser, Joystick and Gyro, minify 
						// v1.4.26 (02-06-2018) Restructure some game stuff , Improve Device performance and reconnecting
						// v1.4.27 (05-06-2018) addIotEvent, joystick and gyro enhancements
						// v1.4.28 (24-06-2018) loader fixes, Device.getPinLayout
						// v1.4.29 (29-07-2018) Game changes, keyboard control, Phaser styles, Device D0 support
						// v1.5 (18-08-2018) Improved support for Phaser and Device integration with Phaser 
						// v1.5.1 (18-08-2018) Better support for Export web-app, Base64 joystick sounds, added app.assets, app.game.[sprite,spriteSheet,tileSprite,audio, etc], new AppShed Academy
						// v1.5.2 (10-10-2018) Game Maker IDE, Phaser 3
						// 1.6.1 (31-10-2018) AppShed 3.0
						// 1.6.2 (15-11-2018) Various Game Maker fixes, Firefox fixes /s regular expression
						// 1.6.3 (18-11-2018) Go live, AppShed 3.0
						// 1.6.4 (19-11-2018) Move to Open Street Map
						// 3.0.1 (22-11-2018) Version change to match AppShed 3.0 release
						// 3.0.2 (22-11-2018) Game changes to support Platformer
						// 3.0.3 (28-11-2018) Fixes to Map (edit, delete)
						// 3.0.4 (27-01-2019) Remove OpenStreetMap from app.js (loaded server side)
						// 3.0.5 (05-02-2019) doScreenOnLoad not run in AppBuilder
						// 3.0.6 (26-04-2019) Fixed  properties fieds, start stop, layout, indefinite spinner), joystick, pointer
						// 3.0.7 (11-05-2019) object shortcut names, updated game tools
						// 3.0.8 (15-05-2019) Academy course database search/browse, game items added to game from bottom up, GameObject.group as options
						// 3.0.9 (19-05-2019) Process all game objects together (ensure correct layering), drop-downs for object selection (groups, events), Phaser 3.17.0, audio.allowSimultaneous
						// 3.0.10 (31-05-2019) Game Maker enhancements, call functions function1() not function1.call(), params passed to funcs, fixed Text
						// 3.0.11 (08-06-2019) Keyboard, pointer now in Events

						// HOW TO USE
						// app.js is available on all new apps built on AppShed. Use Custom JavaScript or JavaScript actions, prefixing everytihng with the app object
						// e.g. app.setBackground()


						// NOTES

						// Custom Class
						// "hidden" - class to hide a tab, screen or item 
						// "hidden-live" - hide something in the live (published) app, but visible in AppBuilder
						// "scroll-disabled" - add to a Screen to disabled scrolling.
						// "no-arrow" - add to a link to hide the navigate arrow
						// To automatically import a library, add an `Item`, enter the library name into the `Text` or `Title` fields, and add a Custom Class "import". The library will be imported when the screen loads. It is advisable to put these `import Items` on the home screen so they load when the app loads.
						// 
						
						// Custom JavaScript
						// To access the JavaScript code for the Action, find it in this object
						// appbuilder.app.api.phone.navigator.screenObj.javascripts[]
						// (Thanks Vitaliy, email 11-10-2018)
						
						// To use devices on Local LAN:
						// You can turn off the CSP for your entire browser in Firefox by disabling security.csp.enable in the about:config menu. 
						// Disable security.mixed_content.block_active_content
						// WARNING: this will make your computer vulnerable to hacking, spam, viruses etc. Do this at your own risk.

						// IoT Builder & Layouts
						// Pins 40-46 on IoT Builder are mapped to analog pins for the device
						// i.e. pin 40 is mapped to A0, pin 41 to A1 ... A6
						// Pin 30 is mapped to D0 (since IOIO board has no pin 0)

						// EXPORT
						// Offline operation of the export (web-app) run from a local folder....
						// If a Board Layout for the device is assigned, this will not automatically be included in the export.
						// Manually create a file called "layoutlocal.js"
						// Add the following wrapper for the JSON:
						//     localStorage['layoutlocal']  = '..<JSON Code>..';
						// ALSO in index.html add the <script> tag to load this JSON... must happen BEFORE app.js
						//     <script src="layoutlocal.js"> .... then app.js script

						// TO DO
						// from V1.1.5 it is not working in Android native app - needs fixing.
						// Query IOIO boards for setup https://iot-api.appshed.com/api/boards/4195/outputs
						// Docs https://iot-api.appshed.com/api/doc/
						// Change accelerometer to use https://github.com/tomgco/gyro.js

						// methods starting with _ are private methods




			window.addEvent('app',function(app){


				 

					try{

		/**
		* The main object that contains everything that you use in app.js
		*
		* @class app
		* @constructor
		*/

						window.app = app;



						// add the phone object
			//			var phoneOptions=document.getElementsByClassName("phone-container")[0].getOptionsFromClass("phone-options");
			//			app.phone = new appbuilder.app.Phone(phoneOptions); 

		/**
		* The version number of app.js
		* 
		* @property version
		* @type {String}
		* @default "1.2.3"
		*/
						app.version = "3.0.11.2"; // The version number of this code

		 


						// APP Settings
						app._REQUIREJQUERYSCRIPTS = true;
						app._JQUERYHARDCODED = true;

						app._blockly2Workspace = null; // will save the Blockly2 object ehre
						// APP Properties
						app._actions = {}; // an object holding actions for each item. Each `key` is `idOrClassName`. Each value is an `Array`, allowing multiple actions to be stored for each `Item`
						app._appData = {}; // object to hold app data for other apps
						app._appIPAddresses = [];
						app._app_navigatorTop = 0;
						app._app_navigatorBottom = 0;
						app._ajaxqURL = "https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/files/ajaxqjs.js";
						app._ajaxTimeout = 4500; // default timeout for ajax queries
						app._autoConnectDevices = false; // must the app attempt auto connecting devices
						app._autoConnectGotLocal = false;
						app._autoConnectHandle = null; // handle for the interval
						app._autoConnectInterval = 5000; // time interval for attempting auto connect
						app._autoConnectTimestamp = 0; // timestamp for that last connection attempt
						app._currentItemId = null;
						app._currentScreen = null;
						app._currentHoverElement = null; // The DOM `Element` that is currently hovered over
						app._currentHoverItem = null; // The `Item` Object currently hovered over
						app._datasets = {}; // Object to hold all the datasets
						app._debug = true; // set to false to stop all console messages 
						app._defaultAjaxTimeout = 1000; // Default timeout for Ajax requests
						app._defaultDevice = null;
						app._devices = {};
						app._DOMSubtreeModifiedChecked = 0; // the time when the subtree is checked
						app._DOMSubtreeModifiedInterval = 300; // the interval between subtree checking
						app._DOMSubtreeModifiedPending = false; // shows if a function call is pending

						//app._firstMapScreenDone = false; // Don't instantiate this, otherwise it is reset every time the app event fires. we only want it set once per screen load...set to true after the first map screen has been loaded
						app._firstMapScreenDone = false;
						app._firstScreenDone = false;
						app._formItemsCSSSelector = ".screen input, .screen textarea, .screen .picker .picked, .screen .select .selected"; // The CSS Selectors to find all form Items
						app._formItemCSSSelector = "input, textarea, .picked, .selected"; // The CSS Selectors to find the form element for an individual Item
						app._formItemTypes = ["textbox","textarea","switch","checkbox","radio","select","picker","capture"];
						app._handler_arestScriptsInterval = null;
						app._importCallbackTimeout = 2000;
						app._importsDone = false;
						app._intervals = {}; // an object of all the Intervals started for the app using app.setInterval()
						app._ioBatchMode = true; // Send IO commands to devices in batches
						app._ioBatchTimeout = 100; // how long to wait while collecting IO commands (e.g. from multiple Blockly commands)
						app._ioMaxCommandsPerBatch = 4;
						app._isActiveTouchmove = false;
						app._items = {}; // Object to hold `Item` objects;
						app._jqueryURL = "https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/files/jquery-320minjs.js";
						app._jqueryURL311 = "https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/files/jquery-311minjs.js";
						app._lastScrollRulesScreen = 0;
						app._loadBlockly2ScriptsStart = false;
						app._loadBlockly2ScriptsDone = false; // true once all the scripts for Blockly2 have loaded
						app._log = []; // holds useful log info for the user
						app._loopFunctions = []; // array of functions to call on loop
						app._loopTimeout = 100; // Time delay between loop calls
						app._mapbox_accessToken = 'pk.eyJ1IjoiYXBwc2hlZGRldnRlYW0iLCJhIjoiY2pvb3ByOWduMTV6YTNxdXVzdmJwNmNnYiJ9.LNhsSp1fu3a0taJ1ert7Ng'; // Mapbox Open Street Map token				
						app._onApp_id = 0; // Every time the window.addEvent('app' fires, save the app.id
						app._onceEditItem;
						app._onGameTools; // will hold a function ref to call when the Game Tools load
						app._onceGameTools; // will hold a function ref to call once when the Game Tools load, then clear the fn
						app._readyFunctions = [];
						app._readyFunctionsParams = [];
						app._scanIPTimeout = 4000; // The timeout for requests when scanning local IP addresses.
						app._screen_el = null;
						app._screenOnLoadDone = false;
						app._screens = {}; // Object to hold `Screen` objects
						app._scripts = null;
						app._scriptLoaded_jquery = false;
						app._scriptLoaded_ajaxq = false;
						app._scriptLoading_ajaxq = false;
						app._scriptLoading_jquery = false;
						app._scriptsLoaded_arest = false;
						app._url_boardWithPins = 'https://iot-api.appshed.com/api/boards/withpins/';

						app.deviceMotionEvent = null;
						app.data = new AppShedData(); // Handles the data on the current screen
						app.id = null;
						app.isAppBuilder = false; // True if in the AppBuilder editor
						app.isPreview = false; // True if on the Preview screen
						app.isEDUUser = false;
						//app.isMobile_xxx; // Will be true when running on a supported mobile device (actual property is app.isMobile)
						app.isMobileEditor = false; // True when the editor switches to mobile mode
						//app.isPhoneGap_xxx; // Will be true when running on a phonegap platform (actual property is app.isPhoneGap)
						app.isTouching = false;
						app.ready = false; // Will be true once initilisation complete
						app.touchStartX = 100; // The x coordinate of the touchStart point
						app.touchStartY = 100; // The y coordinate of the touchStart point
						app.touchX = 100; // The x coordinate of the current touch point
						app.touchY = 100; // The y coordinate of the current touch point
						app.touchAngle = 0; // The angle in degrees of the current touch point relative to touchStart


						// Properties that might already be set
						if(app.disableSystemAlerts === undefined){
							app.disableSystemAlerts = false; // If true the system alerts won't display (messages for updates, offline etc)
						}



						app._blockly2Toolbox = `
							<xml id="blockly2Toolbox" class="toolbox">
        <category name="AppShed">
	        <block type="appshed_phone"></block>
	        <block type="appshed_email"></block>
	        <block type="appshed_showFile"></block>
	        <block type="appshed_playSound"></block>
	        <block type="appshed_showapp2"></block>
	        <block type="appshed_showtab2"></block>
	        <block type="appshed_showscreen2"></block>
	        <block type="appshed_showremotescreen"></block>
	        <block type="appshed_showweb"></block>
	        <block type="appshed_showyoutube"></block>
	        <block type="appshed_showvimeo"></block>
	        <block type="appshed_showtwitter"></block>
	        <block type="appshed_showfacebook"></block>
	        <block type="appshed_showbbm"></block>
	        <block type="appshed_back"></block>
	        <block type="appshed_variable"></block>
	        <block type="appshed_variableset"></block>
	        <block type="appshed_runonce"></block>
	        <block type="appshed_tabevent"></block>
	        <block type="appshed_screenevent"></block>
        </category>
    
						    <category name="Logic" colour="210">
						      <block type="controls_if"></block>
						      <block type="logic_compare"></block>
						      <block type="logic_operation"></block>
						      <block type="logic_negate"></block>
						      <block type="logic_boolean"></block>
						      <block type="logic_null"></block>
						      <block type="logic_ternary"></block>
						    </category>
						    <category name="Loops" colour="120">
						      <block type="controls_repeat_ext">
						        <value name="TIMES">
						          <shadow type="math_number">
						            <field name="NUM">10</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="controls_whileUntil"></block>
						      <block type="controls_for">
						        <value name="FROM">
						          <shadow type="math_number">
						            <field name="NUM">1</field>
						          </shadow>
						        </value>
						        <value name="TO">
						          <shadow type="math_number">
						            <field name="NUM">10</field>
						          </shadow>
						        </value>
						        <value name="BY">
						          <shadow type="math_number">
						            <field name="NUM">1</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="controls_forEach"></block>
						      <block type="controls_flow_statements"></block>
						    </category>
						    <category name="Math" colour="230">
						      <block type="math_number"></block>
						      <block type="math_arithmetic">
						        <value name="A">
						          <shadow type="math_number">
						            <field name="NUM">1</field>
						          </shadow>
						        </value>
						        <value name="B">
						          <shadow type="math_number">
						            <field name="NUM">1</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="math_single">
						        <value name="NUM">
						          <shadow type="math_number">
						            <field name="NUM">9</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="math_trig">
						        <value name="NUM">
						          <shadow type="math_number">
						            <field name="NUM">45</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="math_constant"></block>
						      <block type="math_number_property">
						        <value name="NUMBER_TO_CHECK">
						          <shadow type="math_number">
						            <field name="NUM">0</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="math_round">
						        <value name="NUM">
						          <shadow type="math_number">
						            <field name="NUM">3.1</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="math_on_list"></block>
						      <block type="math_modulo">
						        <value name="DIVIDEND">
						          <shadow type="math_number">
						            <field name="NUM">64</field>
						          </shadow>
						        </value>
						        <value name="DIVISOR">
						          <shadow type="math_number">
						            <field name="NUM">10</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="math_constrain">
						        <value name="VALUE">
						          <shadow type="math_number">
						            <field name="NUM">50</field>
						          </shadow>
						        </value>
						        <value name="LOW">
						          <shadow type="math_number">
						            <field name="NUM">1</field>
						          </shadow>
						        </value>
						        <value name="HIGH">
						          <shadow type="math_number">
						            <field name="NUM">100</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="math_random_int">
						        <value name="FROM">
						          <shadow type="math_number">
						            <field name="NUM">1</field>
						          </shadow>
						        </value>
						        <value name="TO">
						          <shadow type="math_number">
						            <field name="NUM">100</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="math_random_float"></block>
						    </category>
						    <category name="Text" colour="160">
						      <block type="text"></block>
						      <block type="text_join"></block>
						      <block type="text_append">
						        <value name="TEXT">
						          <shadow type="text"></shadow>
						        </value>
						      </block>
						      <block type="text_length">
						        <value name="VALUE">
						          <shadow type="text">
						            <field name="TEXT">abc</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="text_isEmpty">
						        <value name="VALUE">
						          <shadow type="text">
						            <field name="TEXT"></field>
						          </shadow>
						        </value>
						      </block>
						      <block type="text_indexOf">
						        <value name="VALUE">
						          <block type="variables_get">
						            <field name="VAR">text</field>
						          </block>
						        </value>
						        <value name="FIND">
						          <shadow type="text">
						            <field name="TEXT">abc</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="text_charAt">
						        <value name="VALUE">
						          <block type="variables_get">
						            <field name="VAR">text</field>
						          </block>
						        </value>
						      </block>
						      <block type="text_getSubstring">
						        <value name="STRING">
						          <block type="variables_get">
						            <field name="VAR">text</field>
						          </block>
						        </value>
						      </block>
						      <block type="text_changeCase">
						        <value name="TEXT">
						          <shadow type="text">
						            <field name="TEXT">abc</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="text_trim">
						        <value name="TEXT">
						          <shadow type="text">
						            <field name="TEXT">abc</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="text_print">
						        <value name="TEXT">
						          <shadow type="text">
						            <field name="TEXT">abc</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="text_prompt_ext">
						        <value name="TEXT">
						          <shadow type="text">
						            <field name="TEXT">abc</field>
						          </shadow>
						        </value>
						      </block>
						    </category>
						    <category name="Lists" colour="260">
						      <block type="lists_create_with">
						        <mutation items="0"></mutation>
						      </block>
						      <block type="lists_create_with"></block>
						      <block type="lists_repeat">
						        <value name="NUM">
						          <shadow type="math_number">
						            <field name="NUM">5</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="lists_length"></block>
						      <block type="lists_isEmpty"></block>
						      <block type="lists_indexOf">
						        <value name="VALUE">
						          <block type="variables_get">
						            <field name="VAR">list</field>
						          </block>
						        </value>
						      </block>
						      <block type="lists_getIndex">
						        <value name="VALUE">
						          <block type="variables_get">
						            <field name="VAR">list</field>
						          </block>
						        </value>
						      </block>
						      <block type="lists_setIndex">
						        <value name="LIST">
						          <block type="variables_get">
						            <field name="VAR">list</field>
						          </block>
						        </value>
						      </block>
						      <block type="lists_getSublist">
						        <value name="LIST">
						          <block type="variables_get">
						            <field name="VAR">list</field>
						          </block>
						        </value>
						      </block>
						      <block type="lists_split">
						        <value name="DELIM">
						          <shadow type="text">
						            <field name="TEXT">,</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="lists_sort"></block>
						    </category>
						    <category name="Colour" colour="20">
						      <block type="colour_picker"></block>
						      <block type="colour_random"></block>
						      <block type="colour_rgb">
						        <value name="RED">
						          <shadow type="math_number">
						            <field name="NUM">100</field>
						          </shadow>
						        </value>
						        <value name="GREEN">
						          <shadow type="math_number">
						            <field name="NUM">50</field>
						          </shadow>
						        </value>
						        <value name="BLUE">
						          <shadow type="math_number">
						            <field name="NUM">0</field>
						          </shadow>
						        </value>
						      </block>
						      <block type="colour_blend">
						        <value name="COLOUR1">
						          <shadow type="colour_picker">
						            <field name="COLOUR">#ff0000</field>
						          </shadow>
						        </value>
						        <value name="COLOUR2">
						          <shadow type="colour_picker">
						            <field name="COLOUR">#3333ff</field>
						          </shadow>
						        </value>
						        <value name="RATIO">
						          <shadow type="math_number">
						            <field name="NUM">0.5</field>
						          </shadow>
						        </value>
						      </block>
						    </category>
						    <sep></sep>

						    <category name="Game Objects" expanded="true" colour="255">
						      <category name="Setup" colour="60">
						          <block type="text"></block>
						      </category>
						      <category name="Sprites" colour="60">
						          <block type="text"></block>
						      </category>
						      <category name="Graphics" colour="60">
						          <block type="text"></block>
						      </category>
						      <category name="Events" colour="60">
						          <block type="text"></block>
						      </category>
						      <category name="Functions" colour="60">
						          <block type="text"></block>
						      </category>
						    </category>
						    <sep></sep>

						    <category name="Phaser" expanded="false" colour="0">
						      <category name="Actions" colour="30">
						      </category>
						      <category name="Actions" colour="30">
						      </category>
						      <category name="Actions" colour="30">
						      </category>
						      <category name="Actions" colour="30">
						      </category>
						    </category>
						    <sep></sep>

						    <category name="Variables" colour="330" custom="VARIABLE"></category>
						    <category name="Functions" colour="290" custom="PROCEDURE"></category>
						  </xml>
						  `;



						// APP Methods


		/**
		* Initialises app.js on startup.
		* A number of setup procedures are called.
		* This is a Private method and should not be called by the user.
		* 
		* @method _init
		*/
				
						app._init = function(){

							app.log("app version " + app.version);

							try{
								window.appbuilder.events.iot.init()
							}catch(er){
								//console.warn('ioio.init()',er);
							}

							app.element = document.getElementsByClassName('app')[0];
							app.id = String(app.element.id).replace(/app/,"");
							app.description = app.element.dataset.description;


							if(document.getElementById('academy')){
								app.isAppBuilder = true;

								// bounce the Academy tab after a while, to get the user's attention
								setTimeout(function(){
									app.ui.bounce('#academy .button',3);
								},20000);
								setTimeout(function(){
									app.ui.bounce('#academy .button',3);
								},180000);
							}


							if(app._REQUIREJQUERYSCRIPTS){
								app.setInterval(app.addJQueryScripts(),1000,10000);
							}

							// Load Open Street Map Leaflet files
							
								//deprecated
								//app.loadScript('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/leaflet/leafletcss.css',null,"css");
							
							// Script file now included in app.js 
							//app.loadScript('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/leaflet/leafletjs.js')


							app.element.removeEvent('touchstart', app.onTouchstart);
							app.element.removeEvent('mousedown', app.onTouchstart);
							app.element.addEvent('touchstart', app.onTouchstart);
							app.element.addEvent('mousedown', app.onTouchstart);

							app.element.removeEvent('touchmove', app.onTouchmove);
							app.element.removeEvent('mousemove', app.onTouchmove);
							app.element.addEvent('touchmove', app.onTouchmove);
							app.element.addEvent('mousemove', app.onTouchmove);

							app.element.removeEvent('touchend', app.onTouchend);
							app.element.removeEvent('mouseup', app.onTouchend);
							app.element.addEvent('touchend', app.onTouchend);
							app.element.addEvent('mouseup', app.onTouchend);


							if(navigator && navigator.accelerometer){
								// Cordova
								navigator.accelerometer.watchAcceleration(app.deviceMotionHandler,null,{frequency: 100});
							} else if (window.DeviceMotionEvent) {
								// Web app
								window.addEventListener('devicemotion', app.deviceMotionHandler, false);
							}




							// add the event handlers to the `Tab` to initialise the screen
							app.phone.addEvent('tab',function( id,el ){
								app._initTab(id,el);
							});


							// add the event handlers to the `Screen` to initialise the screen
							app.phone.addEvent('screen',function( id,el ){
								app._initScreen(id,el);

								// first map screen needs special treatment
								//app._fixFirstMapScreen()
							});


							// For the first screen this needs to be called manually
							// test...try avoid this...
							//app._call_initScreen();


							// Connect Devices... if auto, or there is a Board Layout assigned to the app
							if(app._autoConnectDevices || !isNaN(app.getDefaultLayoutId())){
								setTimeout(app.autoConnectDevices,app._autoConnectInterval);
							}


							setTimeout(function(){
								try{
									app.loop();
								}catch(er){}
							},app._loopTimeout);


							// Import andy required libraries
							app.doImports();


							app._init2();


						};




						app._init2 = function(){
							// some init tasks can only be done once jQuery loaded

							if(app._scriptLoaded_jquery && app._scriptLoaded_ajaxq && app._importsDone){


								// If the Registration popup does not render correctly, reload it
								// Only once
								// This can happen it seems, if JS files not loaded in time
								if(localStorage['registrationPopupReloaded'] != 'true' && jQuery('.popup-window:contains("Registration")').css('height') != "625px"){

									localStorage['registrationPopupReloaded'] = 'true';
									window.location.reload();
								}



								if(jQuery('.preview-content-wrapper').length){
									app.isPreview = true;
									jQuery('body').addClass('preview');

									// replace "//" in the description with two line breaks
									jQuery('.description').each(function(i,el){
									  jQuery(el).html(String(jQuery(el).text()).replace(/\/\//g,"<br><br>"))
									})							
								}



								app.addCoreStyles();


								// Check if EDU User
								// Look for a menu dropdown for Gallery Apps... this determines if it is an EDU user
								if(jQuery('.dropdown .icon-appshed-apps').length){
									app.isEDUUser = true;
									jQuery('body').addClass('edu-user')
								}else{
									jQuery('body').addClass('not-edu-user')	
								}




								// Remap the iot.js methods
								try{
									window.appbuilder.events.iot.setPin = function (pinName, value){
										app.getDevice().setPin(pinName, value);
									}
									window.appbuilder.events.iot.togglePinValue = function(pinName){
										app.getDevice().togglePin(pinName);
									}

								}catch(er){}


								if(true){  // app.isAppBuilder
									// Pulsing light and Log Messages
									try{

										// set the default style properties for the web app
										var top = '13px'
										var leftright = 'right: 30px; ';
										var descriptor = '.phone';
										var descriptor2 = '.phone';
										// change properties for AppBuilder
										if(app.isAppBuilder){
											top = '35px';
											leftright = 'left: 50px; ';
											descriptor = '.phone.background';
											descriptor2 = '.app';
										}

										if(jQuery('#statusIndicator').length == 0){
											jQuery(descriptor).prepend("<div id='statusIndicator' class='light-pulse' style='position: absolute; z-index: 99; "+leftright+";  top: "+top+";'><img src='https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/modules/pulsing-blue4gif.gif' title='"+ app.version +"' width='10'></div>");
										}

										if(jQuery('#logMessages').length == 0){
											jQuery(descriptor2).prepend('<div id="logMessages" class="loader" style="display: none;"><div class="inner" style="overflow: auto; font-size: 8pt; margin-top: -175px; margin-left: -150px; height: 350px; width: 300px;"><div class="text"><hr></div></div></div>');
										}

										// Status Indicator click

										jQuery('#statusIndicator').click(app.showStatusMessage);




										// Make some changes to Modules aka Templates
										// change tab label
										jQuery(".content-items.modules").html('<i class="icon-copy"></i> Templates');

										// change button label
										jQuery("#tab_modules a:contains('New Module')").text('New Template')


										// Add a search box to Modules search
										jQuery("#search-form-modules input[name='srch']").attr('placeholder','Search Templates')
										if(jQuery("#search-form-modules-button").length == 0){
											jQuery('#search-form-modules input').after('<button id="search-form-modules-button" style="margin-left: 4px; margin-bottom: 10px; height: 30px" type="submit">Search</button>')	
										}




									}catch(er){
										app.handleError(er,"Can't show status LED app._init2");
									}						
								}


								// disable console.log console.warn console.debug console.info if not AppBuilder, too many logs (especially with device variable updates) might cause sluggish behaviour
								if(!app.isAppBuilder && !app._debug){
									app.disableLogging();
								}


								// Add an event handler to run every time the "app" changes...
								// ie App listing shown, or a different app loaded 
								// Run after delay to take it out of sync 

								// prepare some Game Maker things
								app.game._onLoadApp();



								// Now it's ready
								app.ready = true;


								// call all ready functions
								app.doReady();


								// if there is an app.init() function in this app, call it
								if(typeof app.init == "function")
									app.init();



								// in gamemaker, apps homescreen needs resizing
								jQuery('.gamemaker .items-inner .apps').css('width','328')

								app.doThemes();


								install30();





							} else{
								setTimeout(app._init2,500);
							}

						};



						app._call_initScreen = function(id,el){
							// repeatedly try call _initScreen for a duration
							// this is used on the first screen load
							/*
							app.setInterval(()=>{
								try{
									app._initScreen(app.getScreen().id,app.getScreen().element);
									app.clearInterval("_call_initScreen");
								}catch(er){}
							},100,2000,"_call_initScreen")
							*/
						};


						app._initScreen = function(id,el){
							// initilisation of each screen on load
							// 
							app._currentScreen = id;

							// fix Map screens
							//app._fixMapScreen(id,el);

							// do imports
							app.doScreenImports(id,el);

							// run any Screen.onLoad event handlers
							app.doScreenOnLoad(id,el);

							// log screen classNames, id
			//app._saveScreenData(id,el)

							// to capture `click` events
							app.addScreenClickHandlers(id,el);
							
							// to reformat Capture elements using HTML5
							app.reformatCaptureItems(id,el);

							// to reformat range elements using HTML5
							app.reformatInputTypes(id,el);

							// reformat data items
							app.reformatDataItems(id,el);

							// Initialise accordions on the screen
							app.initAccordion.call(el);

							// reposition Items
							app.repositionItems(id,el);

							// disable scroll
							app.applyScrollRules(el);

							// if this is the first screen to display for this app...
							if(!app._firstScreenDone){
								app._firstScreenDone = true;

								// show the default product
								app.game._showProduct();

							}


							// auto-start game, maybe?
							app.game.autoStart(id,el);


						};




						app._initTab = function(id,el){
							id = null;
							el = null;
						};

						app.addActions = function(arr){
							// Adds actions to `Items`
							// `arr` is an `Array` of `descriptors` in the format:
							// `arr = [  
							//    { idOrClassName: "" , actionType: "", handler: [ad-hoc function] }
							// ]`
							//
							// `idOrClassName` - this can be the `itemId`, the `DOM id` or a `Classname` for the item
							
							for(i=0;i<arr.length;i++){
								app.addAction(arr[i].idOrClassName,arr[i].handler);
							}

							
							return this;
						};


						app.addAction = function(idOrClassName,handler){
							// Adds an action `handler` for `idOrClassName`
							// Multiple actions can be added for each `idOrClassName`
							// The `Item` does not need to exist on the current screen... i.e. this method can be called on init
							// Returns `this`
							// See if `_actions` is instantitated for this idOrClassName
							if(!this._actions[idOrClassName])
								this._actions[idOrClassName] = [];
							
							// Add this to the array of actions
							this._actions[idOrClassName].push(handler.bind(app.getItem(idOrClassName)));
							
							   
							return this;
						};



						app.addCoreStyles = function(){
							// Add the core styles to the page
							// These can be used in the Custom Class field of the Styles tab for tabs, screens and items
							// Returns `this`


							// hide the second div on the Map screen... it's a Google Map overlay
							// Also, the Sliding element on Firefox ignores the following css rule , so need a workaround
							// 	.no-css3 & .sliding.hidden-left {		display: none;	} 
							// 	
							// 	Deprecated
							// 	
							//app.addStyles(" #app"+app.id+" .screen.map .map-holder>div {     display: none; } #app"+app.id+" .screen.map .map-holder>div#map-div {     display: block; }  .ios7style .leaflet-control-zoom { margin-top: 70px; } .sliding.hidden-left {		display: none;	}" );

							// Accordion
							app.addStyles("#app"+app.id+" .accordion .title{	line-height: 40px; } #app"+app.id+" .accordion.item{ 	margin-bottom: 0px; /* fix bootstrap style */ }  #app"+app.id+" .accordion.image-float-right .image-container{ 	float: right; }  #app"+app.id+" .accordion.image-20 .image{ 	width: 20px; }    #app"+app.id+" .accordion.image-40 .image{ 	width: 40px; }  #app"+app.id+" .accordion.image-rotate.item img.rotate { 	     -moz-transform: rotate(-90deg); /* Firefox */     -ms-transform: rotate(-90deg); /* IE */     -webkit-transform: rotate(-90deg); /* Safari, Chrome, iOS */     -o-transform: rotate(-90deg); /* Opera */     transform: rotate(-90deg);    }  #app"+app.id+" .accordion.image-rotate.item img{ 	-webkit-transition: all 0.5s ease-out 0.2s;      -moz-transition: all 0.5s ease-out 0.2s;      -o-transition: all 0.5s ease-out 0.2s;      transition: all 0.5s ease-out 0.2s;  }");


							// Input, range, color
				            app.addStyles("#app"+app.id+" input[type=range], #app"+app.id+" input[type=color]{width: 100% !important;} #app"+app.id+" input[type=color] { -webkit-appearance: none; border: none; } #app"+app.id+" input[type=color]::-webkit-color-swatch-wrapper { padding: 0; } #app"+app.id+" input[type=color]::-webkit-color-swatch { border: none; } #app"+app.id+" input[type=color]{padding: 0px;}"); 
							
							// position
							app.addStyles(".position-absolute{ position: absolute; } .position-relative{ position: relative; } .float-left{ float: left; } .float-right{ float: right; } .clear-right{ clear: right; } .clear-left{ clear: left; } .clear-both{clear:both} .width-1-3{ width: 30%; } .width-2-3{ width: 62%; } .width-1-2{ width: 46%; }  .width-1-4{ width: 21%; } .width-2-4{ width: 46%; } .width-3-4{ width: 71%; } .width-4-4{ width: auto; }  .width-1-5{ width: 17%; } .width-2-5{ width: 35%; } .width-3-5{ width: 58%; } .width-4-5{ width: 75%; } .width-5-5{ width: auto; } .width-1-6{ width: 15%; } .width-2-6{ width: 30%; } .width-3-6{ width: 46%; } .width-4-6{ width: 62%; } .width-5-6{ width: 77%; } .width-6-6{ width: auto; } .width-1-8{ width: 9%; } .width-2-8{ width: 21%; } .width-3-8{ width: 33%; } .width-4-8{ width: 46%; } .width-5-8{ width: 54%; } .width-6-8{ width: 64%; } .width-7-8{ width: 83%; }  #app"+app.id+" .image-float-right img{float: right;}");

							// tables
							app.addStyles(".screen .datatable table{width: 100%;}.screen .datatable th{color:#000000;  background:#a6a6a6;  border-bottom:1px solid #22262e;  border-right: 1px solid #22262e;  font-weight: normal;  padding:10px;  text-align:left;  vertical-align:middle;}.screen .datatable th:last-child{border-right:none;} .screen .datatable tr{border-top: 1px solid #C1C3D1;  border-bottom-: 1px solid #C1C3D1;  color:#494949;  font-size:16px;}.screen .datatable tr:hover td{background:#a6a6a6;  color:#FFFFFF;  border-top: 1px solid #22262e;  border-bottom: 1px solid #22262e;}.screen .datatable tr:first-child{border-top:none;}.screen .datatable tr:last-child{border-bottom:none;}.screen .datatable tr:nth-child(odd) td{background:#EBEBEB;}.screen .datatable tr:nth-child(odd):hover td{background:#a6a6a6;}.screen .datatable td{background:#FFFFFF;  padding:12px;  text-align:left;  vertical-align:middle;  border-right: 1px solid #C1C3D1;}.screen .datatable td:last-child{border-right: 0px;}");   


							// Text, align, borders
							app.addStyles(".text-align-center input{text-align: center;} .image-align-center img{display: block; margin: auto;} .border-bottom-none{border-bottom: none;} .padding-unset{padding: unset;} .padding-none{padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;}");


							// display, show hide
							// hidden-live and template: if there is a phone-container class, then this is AppBuilder, so show the item 
							app.addStyles(".no-arrow.link .link-arrow{display: none;} .hidden-live, .event, .template{display: none;} .phone-container .hidden-live, .phone-container .event, .phone-container .template{display: block;}");   


			  
							// Phaser
							app.addStyles("#phaser-canvas{height: inherit; width: inherit} #phaser-example{height: inherit; width: inherit}   .phone .phone-navigator .app .app-navigator .screen.list .items .phaser.item.thumb{ background-color: #000000;    background-position: top left;     background-repeat: no-repeat;     padding-top: 20px;     border-bottom: 6px solid #191919; } .phone .phone-navigator .app.phaser-show-hidden.phaser-setup .phaser.phaser-setup.item.thumb.phaser-hidden, .phone .phone-navigator .app.phaser-show-hidden.phaser-object .phaser.phaser-object.item.thumb.phaser-hidden, .phone .phone-navigator .app.phaser-show-hidden.phaser-event .phaser.phaser-event.item.thumb.phaser-hidden, .phone .phone-navigator .app.phaser-show-hidden.phaser-graphic .phaser.phaser-graphic.item.thumb.phaser-hidden, .phone .phone-navigator .app.phaser-show-hidden.phaser-function .phaser.phaser-function.item.thumb.phaser-hidden { background-color: #1e1e1e;}  .phaser.phaser-text.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-textpng.png');}  .phaser.phaser-function.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-functionpng.png');}  .phaser.phaser-event.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-eventpng.png');}  .phaser.phaser-audio.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-audiopng.png');} .phaser.phaser-collide.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-collidepng.png');}  .phaser.phaser-collider.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-colliderpng.png');} .phaser.phaser-config.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-configpng.png');}  .phaser.phaser-joystick.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-joystickpng.png');}   .phaser.phaser-create.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-createpng.png');} .phaser.phaser-for-loop.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-for-looppng.png');}  .phaser.phaser-game.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-gamepng.png');}   .phaser.phaser-group.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-grouppng.png');}   .phaser.phaser-image.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-imagepng.png');}  .phaser.phaser-item.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-itempng.png');}  .phaser.phaser-keyboard.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-keyboardpng.png');}  .phaser.phaser-overlap.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-overlappng.png');}  .phaser.phaser-pointer.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-pointerpng.png');}  .phaser.phaser-sprite.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-spritepng.png');}  .phaser.phaser-spriteSheet.item.thumb{ background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-spritesheetpng.png');}  .phaser.phaser-staticbody.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-staticbodypng.png');}   .phaser.phaser-staticGroup.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-staticgrouppng.png');}  .phaser.phaser-tileSprite.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-tilespritepng.png');}  .phaser.phaser-update.item.thumb{background-image: url('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/images/phaser/phaser-updatepng.png');}                 .phone .phone-navigator .app .app-navigator .screen.list .items .phaser.item.thumb .image {     width: auto;     max-width: 90px;     max-height: 90px;     height: auto; }   .phone .phone-navigator .app .app-navigator .screen.list .items .phaser.item.thumb .image-container, .phaser-spriteSheet.item.thumb .image-container  {     width: 90px;     height: 90px;     float: left; padding-right: 10px; }  .gamemaker .phone .phone-navigator .app .app-navigator .screen.list .items .phaser.item.thumb .title{   color: #00e300; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;   font-size: 15px;     font-weight: normal;     padding-left: 110px;     margin-top: 5px;}   .gamemaker .phone .phone-navigator .app .app-navigator .screen.list .items .phaser.item.thumb .text  {   color: #00e300; font-size: 10px;    height: 15px;    overflow: hidden;    padding-left: 12px; }    .gamemaker .phaser-setup .phaser-setup.phaser-hidden.phaser.item, .gamemaker .phaser-object .phaser-object.phaser-hidden.phaser.item, .gamemaker .phaser-event .phaser-event.phaser-hidden.phaser.item, .gamemaker .phaser-graphic .phaser-graphic.phaser-hidden.phaser.item, .gamemaker .phaser-function .phaser-function.phaser-hidden.phaser.item {    display: none; }    .phaser-setup.phaser-show-hidden .phaser-setup.phaser-hidden.phaser.item, .phaser-object.phaser-show-hidden .phaser-object.phaser-hidden.phaser.item, .phaser-event.phaser-show-hidden .phaser-event.phaser-hidden.phaser.item, .phaser-graphic.phaser-show-hidden .phaser-graphic.phaser-hidden.phaser.item, .phaser-function.phaser-show-hidden .phaser-function.phaser-hidden.phaser.item {    display: block; }  .gm-left-panel hr{border-top: 1px solid var(--gm-panel-border); border-bottom: 0px; margin: 10px 0;}   ");


							// Import Event Hidden Template Loader
							app.addStyles("#app"+app.id+" .import.item, #app"+app.id+" .event.item, #app"+app.id+" .hidden-live.item{font-size: 10pt;      font-family: courier;         color: white;      background-color: #535353;  border: 2px dashed white;      padding: 3px;      padding-left: 25px;	}  #app"+app.id+" .template.item{border: 2px dashed black;}  #app"+app.id+" .import.item {background-image: url(http://d3s8dljl1bm5rz.cloudfront.net/1579269);      background-repeat: no-repeat;      background-position: left;      background-size: 20px;}   .phone .loader .inner .text { margin: 3px auto 3px auto;   xxwidth: 240px;}");


							// ------------------------------
							// AppBuilder UI
							// ------------------------------


							if(app.isAppBuilder){

								/*
								var metaTag=document.createElement('meta');
								metaTag.name = "viewport";
								metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
								document.getElementsByTagName('head')[0].appendChild(metaTag);
								*/
					

								// Controls on Forms, Tools, Blockly2
								app.addStyles(".controls .help-block{line-height: normal; font-style: italic;}   .box2 .content .icon {    width: 60px;    padding: 2px;}   .tab-pane.active {    overflow: hidden;}   a.icon h3, a.icon div.tool:before {cursor: pointer;}     .blockly2_titlebar{background-color: #191919; }   body>#blockly2>.blockly2_titlebar{     background-image: url(https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/branding/appshed-white-h55png.png);  background-repeat: no-repeat; background-size: contain;}   .blocklyTreeLabel { color: black; }");
								


								// Module Popup
								app.addStyles(".categories-list-popup a { background-repeat: no-repeat; background-image: url(https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/modules/folder2png.png); padding: 10px; padding-left: 60px; background-color: silver; width: 85%; display: inline-block; margin-bottom: 5px; }  ul.categories-list-popup{ margin-left: 0px; }");

								// Hide Module New and Search fields
								// TODO... Show/hide templates based on status, FREE, EDU, PREMIUM
								//app.addStyles('#tab_modules .margin-t-20{display: none} #modules-browser h1 a{display: none}   .edu-user #tab_modules .margin-t-20{display: initial}   .edu-user #modules-browser h1 a{display: initial}');

								// Image Chooser
								app.addStyles("li.group-browser-group i.collapsed{     background-size: 22px;     height: 22px;     width: 22px;     background-repeat: no-repeat;     background-image: url(https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/appbuilder/arrow-inactive-lgpng.png); }");
								app.addStyles("li.group-browser-group i.expanded{     background-size: 22px;     height: 22px;     width: 22px;     background-repeat: no-repeat;     background-image: url(https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/appbuilder/arrow-active-lgpng.png); }");
								app.addStyles("li.group-browser-group i.icon-circle{     font-size: 10px;      height: 22px;     width: 22px;   display: inline-block; }");

								// ID
								app.addStyles(".control-group:last-of-type{ border: 1px solid silver;     background-color: #f2f2f2; }");
								app.addStyles("$.control-group .variable-chooser{ border: none;}");



								// Actions Extensions Drop-down
								app.addStyles(".action-selector .action.selected {    background-color: #C8C8C8;background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/TriangleArrow-Down.svg/532px-TriangleArrow-Down.svg.png);    background-size: 20px 20px;    background-repeat: no-repeat;    background-position-x: 372px;    background-position-y: 20px;}");



								// EDU
								app.addStyles(' .for-edu{ display: none;}    .for-not-edu{display: initial} .edu-user .for-edu{display: initial}  .edu-user .for-not-edu{display: none}')



								// Academy
								app.addStyles('#academy .item h3{font-size: 18px}  #academy .button {color: #2394FF; border-color: #2394FF; background-color: #ffffff}  #academy .button.arrow-up {color: #ffffff; border-color: #ffffff; background-color: #2394FF}  .academy-categories.category .breadcrumb li.active, .academy-categories.unit .breadcrumb li.active{    display: block;font-size: 25px;margin-top: 6px;color: #0088cc;margin-bottom: 1px;}  .academy-categories.category .academy-scroller .wrapper .page .item .description{ font-size: 13px}   .academy-categories.category .academy-scroller .wrapper .page .item{margin: 0px 6px 8px; border: 1px solid grey;    height: 81px;    width: 326px;    padding: 9px;    background-image: linear-gradient(#fcfcfc,#d5d5d5);}   .academy-categories.category .academy-scroller .wrapper .page .item.no-free,  .academy-categories.category .academy-scroller .wrapper .page .item.no-free:hover{background-image: url(" https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/appbuilder/course-banner-premium2png.png "); background-size: contain} .academy-categories.category .academy-scroller .wrapper .page .item:hover {    background-image: linear-gradient(#ffffff,#fcfcfc); }  .academy-categories.category .breadcrumb li.active:after {    content: " (Category)"; } .academy-categories.unit .breadcrumb li.active:after {    content: " (Course)"; }  .academy-categories.category .breadcrumb li.li-btn .btn, .academy-categories.unit .breadcrumb li.li-btn .btn  {    margin-top: -66px; }');




		    					// Game Maker IDE
								app.addStyles("  ");


								// ------------------------------
								// MOBILE AppBuilder 
								// ------------------------------

								if(app.isAppBuilder && (screen.width < 963 || jQuery( document ).width() < 963)){

									app.isMobileEditor = true;

									// General UI
									app.addStyles(".status-bar, .header, .span-toolbox {touch-action: none;} .navbar-fixed-top {     margin-bottom: 20px;     width: 320px;     display: none; }  @media (max-width: 767px) bootstrap.scss:4892 .container {     width: inherit; }  .container {     margin-right: inherit;     margin-left: inherit; }   .phone {     width: 100%;     height: 100%;     margin: inherit; }  .phone, .phone.background, .phone.android, .android, .phone.android.background {     padding-top: 0px;     padding-bottom: 0px;     padding-left: 0px;     padding-right: 0px;     background-image: inherit; }  .phone, .android {     width: 100%;     background-size: 98%;     height: 480px; }  .span-phone, #phone, .phone, .phone .phone-inner {     position: inherit; }  .phone.status .phone-navigator {     top: 0px; }   .span-toolbox {     width: 360px;     position: absolute;     left: 0px;     top: 0px;  bottom: 0px;  overflow: auto;  z-index: 200;     background-color: white; }  .slider .sliding {     background-color: white; }     .phone:not(.horizontal) .cable, .home-button, .iphone5.background .home-button, .phone.background .home-button , .ipad.background .home-button, .ipad.ipadair.background .home-button {height: 0px;     display: none;} .iphone5.iphone5s.background{background-image: inherit}   #academy{display: none} .box2 .app-controls li { width: 55px;");

									// Edit items
									app.addStyles(".action-selector2-btn{float: none;} .nav-tabs li i{display: none} .nav-tabs>li>a {    padding-right: 3px;    padding-left: 3px;    white-space: nowrap;}  .edit-btns{padding-bottom: 10px; padding-right: 10px} .form-horizontal .control-label {    float: none;    text-align: left;} .form-horizontal .controls {    margin-left: 0px;}");

									// Toolbox
									app.addStyles(".span-toolbox{display: none; border: 1px solid black;} #toggle-menu{    position: fixed;z-index: 9999;    left: 0px;    top: -8px;    font-size: 30px;    padding: 5px;    background-color: white;    text-align: center;    line-height: 5px;    padding-top: 0px;    padding-bottom: 20px;    border: 1px solid black;    background-color: rgb(238, 238, 238);}  .box2 .content {  padding-top: 20px;} .box2.sliding.toolbox {    border: 1px solid black;    border-top: none;}");



									// buttons to open/close toolbox
									jQuery('.app').append("<div id='toggle-menu'>_<br>_<br>_</div>");
									jQuery('#toggle-menu').click(function(){
										if(jQuery('.span-toolbox').css('display') == "block"){
											jQuery('.span-toolbox').css('display','none');
										}else {
											jQuery('.span-toolbox').css('display','block');
										}
									});

								
									// Image Chooser
			//						jQuery('.popup-window.upload-picker').css("z-index",300).css("left","10px");
									
									app.addStyles(".popup-window {z-index: 300 !important; } .popup-window.upload-picker {left: 10px !important; right: 10px !important;} .popup-window.upload-picker .popup-loaded form .popup-content .row-fluid .span4.resizable: {    xxxmin-height: 400px;} .uploader{display: none;} .popup-window.upload-picker{top: 10px; bottom: 10px; width: inherit} .upload-picker .group-browser{height: 220px; width: 320px; overflow: auto;} .popup-window.upload-picker .popup-loaded form .popup-content .row-fluid .span4.resizable{width: 90%} .popup-window.upload-picker .popup-loaded form .popup-content .row-fluid{overflow: auto} .file-browser-element{overflow: inherit; height: inherit;} .popup-window.upload-picker .popup-loaded form .popup-content .row-fluid .span8{margin-top: 50px;}");

								} else {
								// ------------------------------
								// NOT MOBILE AppBuilder 
								// ------------------------------

									app.addStyles(".new-tab-placeholder, .new-item-placeholder{display: none}")

								}


							}



							// ------------------------------
							// NOT AppBuilder UI
							// ------------------------------


							if(!app.isAppBuilder){


								// Imports
								app.addStyles(".import.item{display: none}");

							}
							return this;

						};



						app.addClass = function(className){
							// Adds `className` to the app `element`
							// Returns `this`
							
							jQuery(".app-navigator").addClass(className);

							return this;
						};


						app.addCSS = function(url){
							// Loads `url` as a CSS file to the page

							return jQuery('head').append('<link rel="stylesheet" href="' + url + '" type="text/css" />');

						};




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
								app.handleError(er,"app.addDevice()");	
						  }

						};



						app.addHoverImages = function(imageArray){
							// Adds hover images that appear when the user hovers over the `Item` 
							// Works with touch and mouse events
							// `imageArray` is an array of objects in the format 
							//    `[
							//	   `{`
							//		`id: id,`
							//		`class: className,`
							//		`url: imageURL,`
							//		`doActions: true|false`
							//	   `}`,
							//		...
							// Returns `this`

							for(var i=0;i<imageArray.length;i++){

								// Preload the image
								jQuery('<img />')[0].src = imageArray[i].url;

								// Get the Item
								var idOrClassName = ((imageArray[i].id)?imageArray[i].id:imageArray[i].class);
								var thisItem = this.getItem(idOrClassName);


								if(thisItem && thisItem.element){

									// Make sure originalImage is saved
									if(!thisItem.originalImage)
										thisItem.originalImage = thisItem.getImage();
									
									thisItem.hoverImage = imageArray[i].url;
									thisItem.onHoverDoActions = imageArray[i].doActions;
								}
							}
							return this;
						};



						app.addInterval = function(identifier,name){
							// Adds an interval handler `identifier` to the `_intervals`, 
							//returns `identifier`
							// Optional `name` can be used as a reference to the `identifier` (used by `app.clearInterval()`)

							name = name || identifier;

							try{
								this._intervals[name] = identifier;
								return identifier;
							}catch(er){
								app.handleError(er,"app.addInterval");
							}
						};



						addIotEvent = function(variable,value,range,method,callback){
							console.warn('addIotEvent',variable,value,range,method,callback);

							// method: comparison operator, one of == != >= <= > <
							
							return this.phone.navigator.events.addEvent({type:"iot",variable:variable,value:value,range:range,method:method,callback:callback})
						}


						app.addJQueryScripts = function(){
							// Adds the script tags required for jQuery to the `<head>`
							// This method is called on an `Interval` until all the scripts required have been loaded
							// Once all the script are loaded, the `Interval` is stopped 

							if(app._JQUERYHARDCODED){
							// jQuery code is pasted in Settings, do not need to load
								app._scriptLoaded_jquery = true;
								app._scriptLoaded_ajaxq = true;
								app._scriptsLoaded_arest = true;
								//$.noConflict(); .. This is done in index.html
							}

							// check if all scripts have been loaded
							if(app._scriptLoaded_jquery && app._scriptLoaded_ajaxq){
								app._scriptsLoaded_arest = true;
									
								return true;
							}

							if(app._scriptLoaded_jquery){
								if(!app._scriptLoading_ajaxq){
									app._scriptLoading_ajaxq = true;
									app.loadScript(app._ajaxqURL);
								}
							} else if(!app._scriptLoading_jquery){
								app._scriptLoading_jquery = true;
								app.loadScript(app._jqueryURL);
							} 




							// test for jQuery and ajaxq
							try{

								if(!app._scriptLoaded_jquery && app._scriptLoading_jquery && jQuery){
									jQuery.noConflict();
									app._scriptLoaded_jquery = true;
								}
								if(!app._scriptLoaded_ajaxq && app._scriptLoading_ajaxq && jQuery.ajaxq)
									app._scriptLoaded_ajaxq = true;

							}catch(er){}


							setTimeout(function(){app.addJQueryScripts()},300);

						};




						app.addScreenClickHandlers = function(id,el){
							// adds the event handlers to the `Screen` to capture `click` events

							if(el)
								app._screen_el = el;

							if(app._screen_el){
								app._screen_el.getElements('.item').removeEvent('click', app.onItemClicked);
								app._screen_el.getElements('.item').addEvent('click', app.onItemClicked);

							}

							return this;
						};






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
										func.call(screen,this);
									}catch(e){
										appbuilder.app.debug("api","Error with custom js on screen event",e);
									}
								}
							}.bind(this);
							
							return this.phone.addEvent("screen",f);

						};











						app.addScript = function(code,callback,el){
							// Loads the JavaScript content `script` into the page
							// If `script` holds  a url, passes this to `app.loadScript()`
							// Optional `el` specifies the element to add it to (e.g. iframe target for Blockly)

							var el = el || 'body';

							if(code.match(/^http/)){
								return app.loadScript(script,callback,el);
							}


							var script= document.createElement('script');

							script.type= 'text/javascript';
							script.innerHTML = code;
							return jQuery(el).prepend(script);									

						};







						app.addStyles = function(styleDescriptor){
							// add `styleDescriptor` CSS styles to the document head
							// Returns the result of DOM method `appendChild()`

							var head= document.getElementsByTagName('head')[0];
							var tag = document.createElement('style');


							tag.innerHTML = styleDescriptor;
							return head.appendChild(tag);	

						};



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
											func.call(tab,app);
										},10)
									}catch(e){
										appbuilder.app.debug("api","Error with custom js on tab event",e);
									}
								}
							}.bind(this);
							
							return this.phone.addEvent("tab",f),f;
						};


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

						};




						//Override method for alert
						appbuilder.app.alert = function(message, context) {

							// don't show system alerts
							if(app.disableSystemAlerts){
								if(message == "Downloading updates to app" || message == "App is now available offline")
									return;					
							}

							if(appbuilder.app.isPhoneGap) {
								navigator.notification.alert(message);
							}
							else if(appbuilder.app.isMobile) {
								alert(message);
							}
							else {
								appbuilder.app.makeConfirm(message, null, null, null, false).inject(document.id(context || document.getElement('.phone-inner') || document.getElement('.phone') || document.body));
							}
						};





						app.alertPinValue = function(idOrProps,pin,format){
							// Shows a screen alert message with the value of the pin for the device `idOrProps`.
							// Optional `format` can be `a` (for analog) or `d` (for digital) value (Default: `d`)
							// Returns `this`

							var props = this.idOrPropsToObject(idOrProps);
							this.getDevice(props).alertPinValue(pin,format);

							return this;
						};



						app.analogRead = function(pin,callback,idOrProps){
							// v1.3.6 changing the order of the arguments, was: idOrProps,pin,callback 
							// Read the analog state of `pin` for the device `idOrProps`
							// Optional `callback(data)` function is called passing the `data` of the Response
							// Returns `this`
							
							var props = this.idOrPropsToObject(idOrProps);
							this.getDevice(props).analogRead(pin, callback);

							return this;
						};



						app.analogWrite = function(pin,value,idOrProps){
							// v1.3.6 changing the order of the arguments, was: idOrProps,pin,value 
							// Write the PWM `value` to `pin` for the device `idOrProps`
							// `value` is in the range 0-255 (Uno) and 0-1023 (ESP8266)
							// Returns `this`

							var props = this.idOrPropsToObject(idOrProps);
							this.getDevice(props).analogWrite(pin, value);

							return this;
						};




						app.appendToVariable = function(variable,value,atFront){
							// appends `value` to `variable`
							// Optionally if `atFront` is `true` adds the `value` to the front of the `variable`

							try{

								if(atFront)
									return this.setVariable(variable,value+this.getVariable(variable));
								else
									return this.setVariable(variable,this.getVariable(variable)+value);

							}catch(er){
								app.handleError(er,"app.getItem("+id+")");
							}
						};




						app.applyScrollRules = function(el){
							// Applies scroll rules to the current screen (based on classList)
							// This must only happen once for each screen load
							if(app._currentScreen != app._lastScrollRulesScreen){
								app._lastScrollRulesScreen = app._currentScreen;

								if(el.classList.contains('scroll-disabled') ||
									(app.isMobile && el.classList.contains('mobile-scroll-disabled') )
									)
								{
									el.getElementsByClassName('items')[0].retrieve('scroll').disable();
								}
							}

						};


					 

					 	app.applyStyles = function(idOrSlug){
							// Applies the styles from another app with `idOrSlug` to this app
							// The other app must be published.
							// Returns `this`


							if(!idOrSlug)
								return this;

							// make sure the appdata object exists
							if(!app._appData[idOrSlug])
								app._appData[idOrSlug] = {};



							// check if appData loaded
							if(app._appData[idOrSlug].data){

								// if already added, return
								if(app._appData[idOrSlug].stylesAdded)
									return this;

								// get the styles from splashhtml
								var css = app._appData[idOrSlug].data['html'].replace(/<style scoped>([\s\S]*)<\/style>[\s\S]*/,"$1");
								// remove #app1234 from the css
								css = css.replace(/#app\d+/g,"#app"+app.id); //
								app.addStyles(css);

								// mark this as added
								app._appData[idOrSlug].stylesAdded = true;

								app.log("Style added: "+idOrSlug);

								app.hideLoader();

								return this;
							}


							// If the appData hasn't been loaded, load now
							app.showLoader(10000);

							app.loadAppData(idOrSlug,function(idOrSlug){
								// call this same function once loaded to put the styles on the page
								app.applyStyles(idOrSlug);
							});


							return this;
						};



						app.autoConnectDevices = function(){
							// Automatically connects to available devices. 
							// The first available device becomes the defaultDevice

							// if the time has come to autoconnect...
							if(Date.now() >= app._autoConnectTimestamp + app._autoConnectInterval){
								app._autoConnectTimestamp = Date.now();

								if(!app._autoConnectGotLocal){
									app.getDevice(); // try get the local device
									app._autoConnectGotLocal = true;
								}

								for(var i in app._devices){
									var d = app._devices[i];
									d.getInfo(function(a,textStatus,b){

										// jQuery really messed up the arguments to .always...
										var data,jqXHR, errorThrown; 
									    if (a.statusCode) { // this happens when fail
									    	jqXHR = a; 
									    	errorThrown = b; 
									    }else{ // success
									    	data = a;
									    	jqXHR = b; 

											// if multiple devices connect, the last one will become the default device.
											if(data.id && data.id > ""){
												if(data.connected)
													app._defaultDevice = data.id;
												else if(app._defaultDevice == data.id)
													app._defaultDevice = "";
											}
									    }

									});
								}
							}

							// run again if required
							if(app._autoConnectDevices)
								setTimeout(app.autoConnectDevices,app._autoConnectInterval);

						};


						app.blink = function(number,duration,noBgChange,id){
							// Blinks the built-in LED
							// Optional `id` to use a specific `Device`
							// If no `id` passed in the default `Device` is used (`IOIO` is the initial default device)


							this.getDevice(id?id:this._defaultDevice).blink(number,duration,noBgChange);
							
							return this;
						}




						app.blinkAllDevices = function(number,duration,noBgChange){
							// Blink all connected devices  
							// The parameters `number`,`duration`,`noBgChange` are passed through to `Device.blink()`
							// Return `this`

							for(var k in this._devices){
								this._devices[k].blink(number,duration,noBgChange);			
							}				

							return this;

						};


						app.callFunction = function(deviceId, called_function, parameters, callback) {
							// Calls the specified `called_function` on the device`deviceId` sending `parameters` and calling `callback` on the return.
							// [Optional] `deviceId` defaults to `app._defaultDevice`
							// Returns `this`

							var device = this.getDevice(deviceId?deviceId:this._defaultDevice);
							device.callFunction(called_function, parameters, callback);

							return this;

						};


						app.camelize = function(str) {
							// Return a single word formatted in Camel Case 
							return str.replace(/[^a-z ]/ig, '').replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
								if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
								return index == 0 ? match.toLowerCase() : match.toUpperCase();
							});
						}


						app.clearDevices = function(){
							// Clears all `Devices` that have been connected
							// Returns `this`

							this._devices = {};
							this._defaultDevice = null;
							return this;
						};

						app.clearInterval = function(identifierOrName){
							// Clears the interval identified by `identifierOrName`
							// Optional `identifierOrName` can be the `identifier` of the interval, or a `name` supplied by `app.setInterval()`
							// If no  `identifierOrName` then all Intervals are cleared
							// Returns `this`

							try{
								// if no identifierOrName, clear all Intervals
								if(identifierOrName){
									// try clear the interval using both forms
									window.clearInterval(identifierOrName);
									window.clearInterval(this._intervals[identifierOrName]);

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
								app.handleError(er,"app.clearInterval()");
							}

							return this;

						};



						app.closeAcademyBrowse = function(callback){
					        jQuery('.popup-underlay.academy-browse').remove(); 
					        jQuery('.popup-window.academy-browse').remove()
					    }




						app._createBlockly2Loader = function(){

							// add the loader div if not present
							if(jQuery('#action-target .blockly2Loader').length == 0){
								jQuery('#action-target').append('<div class="blockly2Loader loading"></div>') 
							}

						}


						app.deviceMotionHandler = function(eventData) {
							if(navigator && navigator.accelerometer){
								// this is Cordova
								app.deviceMotionEvent = eventData;
							}else{
								app.deviceMotionEvent = eventData.accelerationIncludingGravity;					
							}
						};




						app.devicesToString = function(){
							// Returns a string represenation of all the connected `devices`
							// Default layout is: id - local_ip

							var rVal = "";
							for(var k in this._devices)
								rVal += this._devices[k].id + " - " + this._devices[k].variables.local_ip + "\n";

							return rVal;
						};



						app.digitalRead = function(pin,callback,idOrProps){
							// v1.3.6 changing the order of the arguments, was: idOrProps,pin,callback 
							// Read the digital state of `pin` for the device `idOrProps`
							// Optional `callback(data)` function is called passing the `data` of the Response
							// Returns `this`
							
							var props = this.idOrPropsToObject(idOrProps);
							this.getDevice(props).digitalRead(pin, callback)

							return this;
						};


						app.digitalWrite = function(pin,value,idOrProps){
							// v1.3.6 changing the order of the arguments, was: idOrProps,pin,value 
							// Write the digital `value` to `pin` for the device `idOrProps`
							// Returns `this`

							var props = this.idOrPropsToObject(idOrProps);
							this.getDevice(props).digitalWrite(pin, value)

							return this;
						};


						app.disableLogging = function(){
						    if(!window.console) window.console = {};
						    var methods = ["log", "debug", "warn", "info"];
						    for(var i=0;i<methods.length;i++){
						        console[methods[i]] = function(){};
						    }
						};


						app.disableScroll = function(){
							app.getScreen().disableScroll();
							return this;
						};



						app.doDOMSubtreeModified = function(){


							var origType = app._popupContainerType;

							// determine the container type
							if( jQuery('#popup-container #edit_item input[name=item_type][value=location]').length && jQuery('#popup-container #edit_item .map-chooser').length){
								app._popupContainerType = 'edit_location';
							} else if(jQuery('#popup-container .sliding .sliding-inner h1:contains("Rearranging Items")').length ){
								app._popupContainerType = 'move_items';
							} else if(app._popupContainerType != 'edit_item' && jQuery('#popup-container #edit_item').length){
								app._popupContainerType = 'edit_item';
							} else if(app._popupContainerType != 'edit_screen' && jQuery('#popup-container #edit_screen').length){
								app._popupContainerType = 'edit_screen';
							} else if(jQuery('#popup-container .sliding.toolbox:not(.hidden-left) #nav-tabs_game.active').length && jQuery('#popup-container  .sliding.toolbox').css('display') != 'none'){
								app._popupContainerType = 'game_tools';
							} else if(app._popupContainerType != '' && jQuery('#popup-container>div').length == 1){
								app._popupContainerType = '';
							}



							// If the container type has changed
							if(app._popupContainerType != origType){

	//console.warn('doDOMSubtreeModified container changed from:to  ',origType,app._popupContainerType);

								if(app._popupContainerType == 'edit_location'){

									//depreacted
									//app._onLoadEditLocation();	    

								} else if(app._popupContainerType == 'edit_item'){

									// if there is a once function,  call it
									if(app._onceEditItem){
										var callback = app._onceEditItem;
										app._onceEditItem = null;
										callback.call();
									}


									// If Blockly present
									if(jQuery('#action-target iframe').length){

										// Fix collapsed Blocks... collapse and expand all blocks
										app.setInterval(function(){
											var win = jQuery('#action-target iframe')[0].contentWindow
											win.Blockly.mainWorkspace.getAllBlocks().forEach(function(bl){bl.setCollapsed(true);bl.setCollapsed(false)})
										},100,4000)
									}



									// in Game Maker load Blockly 2
									// Later can do this for AppBuilder too
									if(app.currentProduct == "gamemaker"){

										/*										
										// Blockly action
										if(jQuery('#action-target input[name="action_code_type"]').filter(function(){return jQuery(this).val() == "blockly"}).length){
											app._insertBlockly2();
										}

										// On the Action selector for blockly, insert Blockly2
										jQuery('#edit_action_selector .action[data-codetype="blockly"]').click(function(){
										  app._insertBlockly2();
										})
										*/


									} 



									// Edit Item Panel onLoad
									if(app.currentProduct == 'gamemaker'){
									    app.game._onLoadEditPanel();					
									}


								} else if(app._popupContainerType == 'edit_screen'){
									// Edit Screen Panel onLoad


								} else if(app._popupContainerType == 'game_tools'){
									// game tools
								

									if(app._onGameTools){
										try{
											app._onGameTools.call(app.game.this);
										}catch(er){}
									}

									if(app._onceGameTools){
										app.hideDeepLoader();
										try{
											app._onceGameTools.call(app.game.this);
											app._onceGameTools = null;
										}catch(er){
										}
									}


								} else if(app._popupContainerType == 'move_items'){
									// in Game Maker, stop the game after moving
									if(app.isAppBuilder && app.currentProduct == "gamemaker"){
										jQuery('#popup-container .sliding .sliding-inner .btn-success').on('click',function(){
											app.game.stop();
										})
									}


								} else if(app._popupContainerType == ''){
								// Nothing being edited... some tools

								}

							}	

						};





						app.doImports = function(){
							// Import required libraries
							// The libraries are listed in the App Description: 
							//   Add a line(s) starting with the keyword `import` followed by a list of libraries to import 
							//   Additional libraries can be on the same line (space or comma delimited) or on a new line with the `import` keyword
							//   e.g. `import libdemo`
							// Returns `this`

							// Requires jQuery and ajaxq
							// Load the libraries using ajaxq to allow for dependencies on previous libraries

							// if jquery not ready, wait and call again
							if(!app._scriptLoaded_jquery || !app._scriptLoaded_ajaxq){
								setTimeout(function(){app.doImports()},500)
								return this;				
							}

							var libraries = app.getLibraries();

							for(var i=0;i<libraries.length;i++){
								app.import(libraries[i]);
							}				

							app._importsDone = true;


							return this;
						};



						app.doReady = function(){
							// Calls all functions that have been set for app onReady
							// returns `this`
							
							for(var i=0; i<app._readyFunctions.length;i++){
								try{
									app._readyFunctions[i].apply(app._readyFunctionsParams[i])
								}catch(er){}
							} 

						}




						app.doScreenImports = function(id,el){
							// Import libraries referenced on the current screen


							jQuery('.import').each(function(){
								try{
									// presume a text item with the library name as the only content in the .html
									// also look for an Icon with content in .title
									var el = jQuery(this);
									var content = el.find('.html').first().text();
									if(el.hasClass('icon')){
										content = el.find('.title').first().text();
									}
									if(content){
										app.import(content,function(){
											setTimeout(function(){
												el.css('display',"none");
											},2000)	    				
										});
									}
								}catch(er){
									//
								}

							});

						};



						app.doScreenOnLoad = function(id,el){
							// Run any onLoad handlers for for the current screen
							// Return `this`
							
							// temporarily set a variable "done" so that the method is not called twice.
							if(app._screenOnLoadDone){
								return this;
							} else {
								app._screenOnLoadDone = true;
								setTimeout(function(){
									// Set "done" back to false ready for the next screen load
									app._screenOnLoadDone = false;

									jQuery(el).find(".event.onLoad.item").each(function(){
										var el = this;

										if(!app.isAppBuilder){
											setTimeout(function(){
												app.getItem(el.id,el).callActions();							
											},1)
										}
									});					
								},1000);
							}

							return this;

						};






						app.doThemes = function(){
							// Apply required themes
							// The themes are listed in the App Description: 
							//   Add a line(s) starting with the keyword `theme` followed by the theme name 
							//   Additional themes can be on the same line (space or comma delimited) or on a new line with the `theme` keyword
							//   e.g. `theme urban`
							// Returns `this`

							var themes = app.getThemes();

							for(var i=0;i<themes.length;i++){
								app.applyStyles(themes[i]);
							}

							return this;
						};


						app.enableScroll = function(){
							app.getScreen().enableScroll();
							return this;
						};


						app.findClass = function(element, className) { 
							// Returns the first `DOM Element` matching  `className`
							return element.querySelector("." + className);

						};



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
						};



						app.findParentItem = function(element){
							// Returns the `Item` containing the DOM `element`
							// This traverses up each `parentElement` 
							// If it finds an `Item` it returns the `Item` object
							
							try{
								if(element && element.classList){
									if(element.classList.contains("item"))
										return app.getItem(element.id)
									
									// if we reach the 'screen' element, return 
									if(element.classList.contains("screen"))
										return null;				

									// call this method on the parent
									return app.findParentItem(element.parentElement)

								}
									
								
							}catch(er){
								app.handleError(er,"app.findParentItem()")
							}

							return null;
						
						};


						app._fixFirstMapScreen = function(){
							// first load of map fix needs to be delayed

							// deprecated
							return;

							/*
							if(!app._firstMapScreenDone){
								app._firstMapScreenDone = true;
								setTimeout(()=>{
									//app._fixMapScreen()					
								},1000);						
							}
							*/

						}




						app._responseActions = {

							// method to handle all the actoins in a response
							do: function(response){

								try{

									var json = JSON.parse(response);
									// look for actions in the json
									if(typeof json === "object" && json.hasOwnProperty("action") && json.action.length > 0){
										jQuery.each(json.action,(i,val)=>{
											// try get the details for this action in the json
											if(json.hasOwnProperty(val)){
												try{
													// if the action has an argument, it will be as a propoerty in the json onbject
													// e.g. json = {phone_item_refresh: {arg_object} }
													// the arg_object will be available as `this`
													app._responseActions[val].call(app.game.this,json)
												}catch(er){
													console.warn('app._jsonActions[val].call()',val,er);												
												}
											}
										})
									}

								}catch(er){
		console.warn('app._responseActions do()',er)									
								}


							},


							close: function(json){

								var cover, popup;
								if(app._popup2){
									cover = app._cover2;
									popup = app._popup2
								}else{
									cover = app._cover1;
									popup = app._popup1;
								}

								// show the toolbox if phone-cover
								if(cover){
									if(cover.hasClass("phone-cover")){
										jQuery('.box2.sliding.toolbox.hidden-left').removeClass('hidden-left');
									}

									cover.remove();
									popup.remove();

								}


								// now remove the cover history
								if(app._popup2){
									app._popup2 = null;
									app._cover2 = null;
								}else{
									app._popup1 = null;
									app._cover1 = null;
								}

							},


							close_all: function(json){
								this.close();
								this.close();
							},


							phone_item_refresh: function(json){
								// 						
								appbuilder.app&&appbuilder.app.current&&(appbuilder.eventsManager.closeEvents(),appbuilder.app.current.loaded(json.phone_item_refresh,!0));						
								return;

							}	

						}



						app._popup1;
						app._popup2;



						app._openPopup = function(options){

							// used to open edit, delete popups
							// they can be embeded (edit) or window (delete)
							// options = {id: 123, task: edit|delete }
							
							var cover, popup;


							if(options.task == "edit"){
								// Show a cover
								cover = jQuery('<div class="phone-cover "></div>');
								cover.appendTo('.app')
								jQuery('.box2.sliding.toolbox').addClass('hidden-left');						

								// Add the popup container
								popup = jQuery('<div class="popup-embed sliding "><div class="popup-loaded sliding-inner"></div</div>').appendTo('#popup-container');

							}else if(options.task == "delete"){
								// Show a cover
								cover = jQuery('<div class="popup-underlay" style="z-index: 101; opacity: 0.5;"></div>')
								cover.appendTo('body');

								// Add the popup container
								popup = jQuery('<div class="popup-window" style=" z-index: 102; opacity: 1; visibility: visible; width: 350px; height: 120px; position:fixed; top: 50%; left: 50%; margin-top: -60px; /*set to a negative number 1/2 of your height*/ margin-left: -175px; /*set to a negative number 1/2 of your width*/ border: 1px solid #ccc; background-color: #f3f3f3; "><div class="popup-loaded"></div></div>').appendTo('body');

							}


							// save the cover (in 2 if 1 already used)
							if(app._popup1){
								app._popup2 = popup
								app._cover2 = cover
							}else{
								app._popup1 = popup;
								app._cover1 = cover;
							}

							// Now call the AJAX
							jQuery.ajax('/index.php?telPreview=true&emailPreview=true&version=2&option=com_appbuilder&task='+options.task+'&controller=items&app_id='+app.id+'&item_id='+options.id+'&time='+Date.now()).done( (data, textStatus, jqXHR )=> {
								
								var data = JSON.parse(data);



								// Populate the panel
								jQuery('.popup-loaded').append(data.content)



								// Change submit form to use AJAX
								jQuery(".popup-loaded form").submit(function(event){
									event.preventDefault(); //prevent default action 
									var post_url = jQuery(this).attr("action"); //get form action url
									var request_method = jQuery(this).attr("method"); //get form GET/POST method
									var form_data = jQuery(this).serialize(); //Encode form elements for submission
									
									jQuery.ajax({
										url : post_url,
										type: request_method,
										data : form_data
									}).done(function(response){ 
										// There should be a few response actions to do
										app._responseActions.do(response);
									});
								});


								// Put actions on the buttons
								jQuery('.popup-loaded .btn[data-popup="close"]').click((event)=>{
									event.preventDefault(); //prevent default action 
									app._responseActions.close();

								})
								jQuery('.popup-loaded .btn[data-popup="no-embed"]:contains("Delete")').click((event)=>{
									event.preventDefault(); //prevent default action 							
									app._openPopup({id: options.id, task: "delete"})
								})


							}).fail((jqXHR, textStatus, errorThrown)=>{
		console.warn('_openPanelEditItem AJAX fail',jqXHR, textStatus, errorThrown)						
							});


						}







						app._fixMapScreen = function(){

							//deprecated
							return;

							/*
							try{

								if(jQuery('.map-holder').length ){

									// remove Google Map
									jQuery('.map-holder .gm-style').remove();

									// remove the map div and recreate
									jQuery('.map-holder>div').remove();
									jQuery('<div id="map-div" style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; z-index: 0; background-color: rgb(229, 227, 223);"></div>').appendTo(' .map-holder')


									var mymap = L.map('map-div');


									var bounds = [];

									var markers = JSON.parse(jQuery('.items script').text());



									jQuery.each(markers,(i,val)=>{
										var thisPoint = [val.latitude, val.longitude];
										bounds.push(thisPoint)

										// creaet a jQuery object after converting the escaped val.html to unescaped by putting it into a div... there must be an easier way!
										var pJ = jQuery(jQuery('<span />',{html: val.html}).text());
						///////				var id = val.html.replace(/.*id="item(\d+)".*                     /,"$1")

										var oJ = jQuery('<div style="position: relative"><div class="open" style="position: absolute; top: 63px; left: 0px;"><ul class="dropdown-menu"></ul></div></div>').appendTo(pJ);
										var nJ = jQuery('<li class="map-menu-navigate" data-id="'+id+'"><a><i class="icon-edit"></i> Navigate</a></li>').appendTo(oJ.find('.dropdown-menu'));
										var eJ = jQuery('<li class="map-menu-edit" data-id="'+id+'"><a><i class="icon-edit"></i> Edit</a></li>').appendTo(oJ.find('.dropdown-menu')).click(()=>{}).click(()=>{app._showEditPanel(val)});
										var dJ = jQuery('<li class="map-menu-delete" data-id="'+id+'"><a><i class="icon-edit"></i> Delete</a></li>').appendTo(oJ.find('.dropdown-menu')).click(()=>{console.warn('delete',this)});


										var mymarker = L.marker(thisPoint).bindPopup(pJ.html()).addTo(mymap);

										mymarker.on("click", function (event) {


											// show the context menu
											//jQuery('body>.open').remove();

											// add actions to each of the context menu items
											
											jQuery('.map-menu-navigate').click(()=>{
												console.warn('navigate',this)
												jQuery('.leaflet-popup-close-button')[0].click()
											});
											jQuery('.map-menu-edit').click(()=>{
												console.warn('edit',this)
												jQuery('.leaflet-popup-close-button')[0].click()
												//app._openPanelEditItem(id)
												app._openPopup({id: id, task: "edit"})
											});
											jQuery('.map-menu-delete').click(()=>{
												console.warn('delete',this)
												jQuery('.leaflet-popup-close-button')[0].click()
												app._openPopup({id: id, task: "delete"})
											});

										});



									})


									//.setView([51.505, -0.09], 13);
									mymap.fitBounds(bounds);


									L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
									    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
									    maxZoom: 18,
									    id: 'mapbox.streets',
									    accessToken: app._mapbox_accessToken
									}).addTo(mymap);



								}


							}catch(er){
		console.warn('app._fixMapScreen',er)						
							}

							*/

						}






						app.getData = function(idOrClassName){
							// returns the Data object for `idOrClassName'
							// the `ClassName` doesn't need to exist in the app... it can be a made-up 'table name', e.g. 'users'
							// If any screen has this ClassName, it will be linked to this 'table'
							// Multiple screens can use the same ClassName (even adding different fields to the same 'table')

							// If `idOrClassName` is 
							//   null, and the current screen has ClassNames, check each ClassName for app data
							//      if app data found, then return the first one found.
							//      else return the screen data and save the classnames in app localstorage
							//   a ClassName, then look for app data (not Screen data) matching ClassName
							//      if app data found, return it
							//      else go through classnames in app locastorage.. 
							//         if a match found, move the screendata to classname data and return
							//      else create an empty app data and return it
							//   an Id (number), 
							//   	return the screen data 

							var currentScn = this.getScreen();

							if(!idOrClassName){
								for(var c=0; c<currentScn.element.classList.length;c++){
									//ignore built-in classes
									if(!(['screen','list','icon'].contains(currentScn.element.classList[c]))){
										var datasetNames = Object.keys(this.getLocalProperty('datasets')) ;

										for(var d=0; d<datasetNames.length;d++){
											if(datasetNames[d] == idOrClassName){
												// Save the object in app.datasets
												if(!this._datasets[idOrClassName]){
													this._datasets[idOrClassName] = new AppShedData(idOrClassName,{isAppData: true});
												}
												return this._datasets[idOrClassName];										
											}
										}
									}
								}
							}
							return this.getScreen(idOrClassName).getData()

						};



						app.getDefaultLayoutId = function(){
							//from Attached data-board attribute (linked board)
							var data_board = jQuery('.app').data('board');
							if(data_board && !isNaN(data_board)){
								return parseInt(data_board);
							}

							return null;
						};


						app.getDevice = function(idOrProps,key){
							// Returns the device for `idOrProps`
							// `idOrProps` can be a `deviceId` (a ten character string) 
							// or an object in the form
							// * {id: xxx, [local_ip: xxx, layoutId: xxx]}
							// If no `idOrProps` passed in, the default device is returned
							// Optionl `key` is the aREST Pro key 
							var idOrProps = idOrProps || this._defaultDevice;
							var props = app.idOrPropsToObject(idOrProps);

							// special case local - if device is running softAP (local Access Point)
							// If no id, and no _defaultDevice, default to `local`
							if(!props.id || props.id == ""){
								props.id = "local";
								this._defaultDevice = "local";
							}



							if(key && key > "")
								props.key = key;

							var device = app._devices[String(props.id).trim()]


							if(device){
								// don't update properties if only id passed in (1 key)
								if(Object.keys(props).length > 1){
									device.updateProperties(props)
								}
							} else {
								device = app.addDevice(props)
							}

							// if no default, make this the default
							if(!this._defaultDevice)
								this._defaultDevice = props.id; 

							return device

						};




						app.getIdFromDOMId = function(domId){
							return parseInt(String(domId).replace(/[a-z]/g,""))
						};



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
						        //<screenipt>...getIPs called in here...
						        
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

						};




						app.getItem = function(idOrClassName,element){
							// Returns an `Item` object for `idOrClassName`
							// If no `idOrClassName` supplied it returns the `Current Item` (last item clicked)
							// `idOrClassName` can be the `ItemId` or the `ClassName` set in `Custom Classes`, or the DOM id of the item
							// If multiple items have the same `ClassName`, the first item is returned
							// Optional `element` is assinged to the `Item.element` property

							if(!idOrClassName && this._currentItemId)
								idOrClassName = this._currentItemId;


							// If 'element' supplied but no id, get id from the element
							if(!idOrClassName && (element  && typeof elemet === "object" && element.id && element.id.match(/item/))){
								idOrClassName = element.id.replace(/item/,'');
							}


							var testId = this.getIdFromDOMId(idOrClassName);

							try{

								if(this._items[testId]){
									// MUST reload the `element` otherwise it references old stuff
									this._items[testId].init(element);
									return this._items[testId];
								}




								var item = new this.Item(testId)

								if(element)
									item.element = element;

								// if no element, try getting the item by ClassName
								if(item.element == null)
									item = this.getItemByClassName(idOrClassName)

								// If still no element, there is no item
								if(!item || item.element == null){
									return null;
								}
								else{
									this._items[item.id] = item;
									return item;
								}


							}catch(er){
								this.handleError(er,"app.getItem("+idOrClassName+")")
							}
						};


						app.getItemHTML = function(id,type,data){
							// returns the default HTML for an item

							switch (type)
							{
								case "icon": 
									return '<td class=" item icon" id="item'+id+'"><div class="item-icon-inner"><img class="image" src="' + ( (data && data.image ) ? data.image : 'https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/images/defaultjpg.jpg') + '" width="50" height="50"><div class="title">An Icon</div></div></td>';
									break;


								case "plain": 
									return '<div class=" item plain link" id="item'+id+'" data-linktype="screen" data-href="16011448" x-blackberry-focusable="true"><div class="link-arrow"></div><img class="icon" src="' + ( (data && data.image ) ? data.image : 'https://d1yeqpqwjn2qg3.cloudfront.net/UQugOX_P3gdOptCVr3u-_oq-6Zs=/80x80/http://appshed-id-images.s3-website-eu-west-1.amazonaws.com/8') + '" width="40" height="40"><div class="text">A link</div></div>';
									break;




								case "radio": 
									var checked = "";
									if(data && data.name && data.value && app.getVariable(data.name) == data.value){
										checked = 'checked="checked"';
									}
									return '<div class=" item radio" id="item'+id+'"><span class="radio-container no-title"><input class="radio" type="radio" name="'+((data && data.name)?data.name:'radio')+'" value="'+((data && data.value)?data.value:'radio')+'" id="label-'+id+'" data-variable="'+((data && data.name)?data.name:'radio')+'" data-save-value="yes" '+checked+'></span><label class="title" for="label-'+id+'">'+((data && data.title)?data.title:'A radio button')+'</label></div>';
									break;
							   
							   default: 
							   		return '<div class=" item thumb" id="'+(id?id:'item1')+'"><div class="image-container"><img class="image" src="' + ( (data && data.image ) ? data.image : 'https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/images/defaultjpg.jpg') + '" width="50" height="50"></div><div class="title">'+((data && data.title)?data.title:'A text &amp; image item')+'</div><div class="text">'+((data && data.text)?data.text:'A subtitle for this item')+'</div></div>';

							}

						};


						app.getItemByClassName = function(name){
							// Returns an `Item` matching `name`

							var elements = document.getElementsByClassName(name);

							if(elements && elements.length && elements[0].id.match(/item/))
								return this.getItemByDomId(elements[0].id)

						};


						app.getItemByDomId = function(domId,element){
							// Returns an `Item` object for `domId` which is the `id` of the `Element` in the `DOM Tree`
							// Optional `element` is the `DOM Element`

							return app.getItem(parseInt(String(domId).replace(/[a-z]/g,"")),element)

						};


						app.getItemsElement = function(){
							return document.getElementsByClassName('items')[0]
						};


						app.getJSON = function(appIdOrSlug){
							// returns a JSON object 

						};


						app.getLibraries = function(){
							// Returns an array of libraries that are required for this app

							var libs = [];

							var desc = "\n"+app.description;
							var matches = desc.match(/[\n]import.*/gi);

							if(matches && matches.length){
								for(var i=0;i<matches.length;i++){
									libs = libs.concat(matches[i].replace(/\nimport */i,"").replace(/ /g,",").replace(/,+/g,",").split(",")); //
								}
							}

							return libs;


						};



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
						};




						app.getLocalProperty = function(property){
							// Returns the value for `property` from `localStorage` for the app

							return this.getLocalStorage()[property];

						}

						app.getLocalStorage = function(){
							// Returns the object stored in localStorage for this screen
							// The Key for app localstorage is app123 (where 123 is the ID of the app)
							// The following properties are stored
							// 		AppId (integer)
							// 		datasets (object) {ClassName: [{},{}...]  }
							// 		  e.g. datasets.users = [{username: 'abc'},{username:'xyz'}]

							if(typeof localStorage['app'+this.id] == "undefined"){
								localStorage['app'+this.id] = JSON.stringify({AppId: this.id, datasets: {} })
							}

							return JSON.parse(localStorage['app'+this.id]);


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
						};




						


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



						};






						app.getRemoteIP = function(callback){
							// Searches for the Remote IP Address for the app
							// IP addresses starting with 10. and 192. are treated as local
							// `callback(ip_addr)` is called if a remote IP is found.
							
							this.getIPs(function(ip_addr){
								if(ip_addr != null && ip_addr != undefined && !String(ip_addr).match(/^10\./) && !String(ip_addr).match(/^192\./)){
									if(callback != null) callback(ip_addr);
								}
							});
						};



						app.getScreen = function(id){
							// returns the `Screen` object for `id`

							try{


								var element;

								if(!id){
									id = String(document.querySelector('.screen').id).replace(/screen/,'')
								}


								// look in the cache for the screen
								if(this._screens[id]){
									// MUST reload the `element` otherwise it references old stuff
									this._screens[id].element = document.getElementById(this._screens[id].domId)
									return this._screens[id];
								}




								// Special Case: id is the DOM Element of the screen
								// then the DomID will be in the format "screen123"
								// This happens if app.addScreenEvent() passes `this` to app.getScreen()
								if((typeof id === "object" && id.id && id.id.match(/screen/))){
									element = id;
									id = element.id.replace(/screen/,'')
								}


								// look in the cache for the screen
								if(this._screens[id]){
									// MUST reload the `element` otherwise it references old stuff
									if(element)
										this._screens[id].element = element;
									else
										this._screens[id].element = document.getElementById(this._screens[id].domId)

								} else {
									var aScreen = new app.Screen(id);
									if(element)
										aScreen.element = element;
									this._screens[id] = aScreen;
								}

								return this._screens[id];

							}catch(er){
								app.handleError(er,"app.getScreen("+id+")")
							}


						};



						app.getThemes = function(){
							// Return an array of themes for this app

							var themes = [];


							var desc = "\n"+app.description;
							var matches = desc.match(/[\n]theme.*/gi);
							//var matches = app.description.match(/^theme.*/i);
							if(matches && matches.length){
								for(var i=0;i<matches.length;i++){
									themes = themes.concat(matches[i].replace(/^themes* */i,"").replace(/:/g,"").replace(/ /g,",").replace(/,+/g,",").split(",")); //
								}
							}

							return themes;

						};


						app.getVariable_xxx = function(name){
							// Returns the value of a form variable with the given `name`.
							// [NOTE: the method name is getVariable without _xxx and it already exists in the built-in JavaScript library. 
							//   It is included here for documentation purposes only.]


						};



						app.handleError = function(er,msg){
							// Handles errors. Logs `er` and `msg` 

							var msg = msg || ""
							console.log("ERROR: ",er,msg)

						};



						app.hideAcademyLoader = function(timeout){
							// Hides the loading element
							// Optional - Delay hiding until `timeout`
							// Returns `this`
							
							if(!timeout){
								jQuery('.academyLoader').addClass('invisible')
							}else{
								setTimeout(app.hideAcademyLoader,timeout)
							}

							return this;
						};




						app._hideBlockly2Loader = function(){
							// Hide the loader for Blockly2

							app._createBlockly2Loader();

							jQuery('#action-target .blockly2Loader').addClass("hidden");
						}




						app.hideDeepLoader = function(timeout){

							if(timeout && !isNaN(timeout)){
								setTimeout(()=>{
									jQuery('.deep-loader').hide()
									//jQuery('.screen').css('visibility','visible');
								},timeout);

							}else{
		//						jQuery('.screen').css('visibility','visible');						
								jQuery('.deep-loader').hide()
							}

						};

						app.hideLoader = function(timeout){
							// Hides the loading element
							// Optional - Delay hiding until `timeout`
							// Returns `this`

							if(!timeout)
								timeout = 1;

							setTimeout(function(){
								//document.getElementsByClassName('loader')[0].style.display = 'none'
								jQuery('.loader').each(function( index ) {
									if(jQuery(this).attr('id') != 'logMessages'){
										jQuery(this).css('display','none');								
									}
								});
							},timeout);

							return this;
						};



						app.hideTabBar = function(){
							// Hides the tab bar
							// Returns `this`
							try{
								var an = jQuery(".app-navigator")
								this._app_navigatorTop = an.css("top");
								this._app_navigatorBottom = an.css("bottom");

								an.css("top",0);
								an.css("bottom",0);
								//an.css('height',jQuery(".app").css('height'));
								an.css('height','unset');

								jQuery(".tab-bar").hide();
							}catch(er){}

							return this;
						};


						app.idOrPropsToObject = function(idOrProps){
							// Returns an `object` using `idOrProps`

							var props = {id: null};

							if (idOrProps && typeof idOrProps === "object")
								props = idOrProps;
							else if(idOrProps)
								props.id = String(idOrProps).trim();

							return props;
						};



						app.import = function(idOrSlug,callback){
							// Imports the required JavaScript `library` 
							// The library is imported from the Custom JavaScript from another app `idOrSlug`
							// Optional `callback` called once imported
							// Valid values for `library` include:
							//  * appcar, libphaser
							// Returns `this`


							if(!idOrSlug)
								return this;

							// make sure the appdata object exists
							if(!app._appData[idOrSlug])
								app._appData[idOrSlug] = {};

							// check if appData loaded
							if(app._appData[idOrSlug].data){
								// if already added, return
								if(app._appData[idOrSlug].jsAdded){
									if(callback != null) callback(idOrSlug);
									return this;
								}

								//  Special Case: `callback` for libphaser must be saved as a window variable - called by libphaser
								if(idOrSlug == "libphaser"){
									window._liphaser_callback = callback;
									callback = null;
								}

								// get the script from .javascript
								app.addScript(app._appData[idOrSlug].data['javascript'],callback);

								// mark this as added
								app._appData[idOrSlug].jsAdded = true;

								app.log("Imported: "+idOrSlug);

			//					if(callback != null) callback(idOrSlug);

								return this;
							}

							// if no appData, load it and import again on callback
							// set a flag so that the data is only loaded once

							if(!app._appData[idOrSlug].loadingData){
								app._appData[idOrSlug].loadingData = true;

								app.loadAppData(idOrSlug,function(idOrSlug){
									app._appData[idOrSlug].dataLoaded = true;	
									app.import(idOrSlug,callback);
								});

							}



							return this;
						};


						app.initAccordion = function() {
							// Initialises any accordions on the screen
							// To create an Accordion add the className `accordion` to the `Item`
							// Returns `this`

							// Thumb/ Image Links
							new Fx.Accordion(this, '.accordion.item', '.accordion.item .text', {
								alwaysHide: true,
								display:-1,
								onActive:function(t,el){
									el.getParent('.accordion.item').getElement('img').addClass('rotate');
								},	
								onBackground:function(t,el){
									el.getParent('.accordion.item').getElement('img').removeClass('rotate');
								},
								onComplete: function(){
							        try{app.refreshScroll();}catch(er){}
							    }
							});
							
							return this;	
						};




						app._insertBlockly2 = function(){
							// Add Blockly2 editor (new version)


							// the first time loading blockly2 , load Blockly2 scripts
							if(!app._loadBlockly2ScriptsStart){
								return app._loadBlockly2Scripts(function(){
									// in the callback, setup Blockly2
									app._insertBlockly2();
								});
							}


							try{


								if(jQuery('#action-target').length){

									// hide old blockly
									jQuery('#action-target>div:first').children().hide();

							    	// add blockly2 div 
									jQuery('#action-target>div:first').append('<div id="blockly2" style="height: 700px; width: 410px;"><div class="blockly2_titlebar" style="height: 42px;    width: 100%;    background-color: #262626;"></div></div>'); 



									// Expand button
									jQuery('.blockly2_titlebar').append('<button class="btn expand do-expand" type="button"><i class="icon-resize-full"></i> Expand</button>');
									jQuery('.blockly2_titlebar .do-expand').click(function(){
							        
								        window.scrollTo(0, 0);
											
								        // expand blockly2
										jQuery('#blockly2').prependTo('body').css('z-index',1200).css('position','absolute').css('top','0px').css('left','0px').css('bottom','0px').css('right','0px').css('width','unset').css('height','unset');
										Blockly.svgResize(app._blockly2Workspace);

										// hide the Expand button
										jQuery('.blockly2_titlebar button.do-expand').addClass('hidden')
										// show the Shrink button
										jQuery('.blockly2_titlebar button.do-shrink').removeClass('hidden')
									});



									// Shrink button
									jQuery('.blockly2_titlebar').append('<button class="btn expand do-shrink hidden" type="button"><i class="icon-resize-small"></i> Shrink</button>');
									jQuery('.blockly2_titlebar .do-shrink').click(function(){
											
								        window.scrollTo(0, 0);

								        // shrink blockly2
										jQuery('#blockly2').prependTo('#action-target').css('z-index',1200).css('position','inherit').css('width',document.getElementById('action-target').offsetWidth+'px').css('height','700px');
										Blockly.svgResize(app._blockly2Workspace);

										// hide the Expand button
										jQuery('.blockly2_titlebar button.do-expand').removeClass('hidden')
										// show the Shrink button
										jQuery('.blockly2_titlebar button.do-shrink').addClass('hidden')
									});
									
							

								    var options = { 
								      toolbox : app._blockly2Toolbox, 
								      collapse : true, 
								      comments : false, 
								      disable : false, 
								      maxBlocks : Infinity, 
								      trashcan : true, 
								      horizontalLayout : false, 
								      toolboxPosition : 'start', 
								      css : true, 
								      media : 'https://blockly-demo.appspot.com/static/media/', 
								      rtl : false, 
								      scrollbars : true, 
								      sounds : true, 
								      oneBasedIndex : true, 
								      grid : {
								        spacing : 20, 
								        length : 1, 
								        colour : '#888', 
								        snap : true
								      }, 
								      zoom : {
								        controls : true, 
								        wheel : true, 
								        startScale : 1, 
								        maxScale : 3, 
								        minScale : 0.3, 
								        scaleSpeed : 1.2
								      }
								    };
 
									app._blockly2Workspace = Blockly.inject('blockly2', options);
									Blockly.addChangeListener(app._blocklyChangeHandler)



									app._blocklyWinInterval = app.setInterval(()=>{
										// Populate the workspace with the old Blockly dom
										// only do this once, by saving status in the Blockly iFrame
										var blocklyWin = jQuery("#action-target iframe")[0].contentWindow;
										if(!blocklyWin.originalLoad){
											Blockly.Xml.domToWorkspace(blocklyWin.Blockly.Xml.workspaceToDom(blocklyWin.Blockly.mainWorkspace),Blockly.mainWorkspace)
											blocklyWin.originalLoad = true;										
										}

										// sometimes blockly does not appear, so need to try resize a couple times
										Blockly.svgResize(app._blockly2Workspace)
									},100,4000);

								}

							}catch(er){
console.warn('ERROR app._insertBlockly2 ',er)								
							}

						};


						app._blocklyChangeHandler = function(){

							var output = jQuery("[name=blocky_output]")[0]

							var code=Blockly.JavaScript.workspaceToCode(Blockly.mainWorkspace)
							var editor=output.retrieve("editor");
							if(editor){
								editor.setValue(code)
							}
							output.set("value",code)

						}


						app.loadAppData = function(idOrSlug,callback){
							// Loads the app data for another app `idOrSlug`
							// Optional `callback` function called, passed one parameter: `idOrSlug`
							// Returns `this`

							// SPECIAL CASE
							// Change 'appcar' to 'libappcar'  - temporary workaround to get appcar library from another app
							// this allows the app 'appcar' to be the user facing app
							if(idOrSlug == "appcar")
								idOrSlug = 'libappcar';


							jQuery.ajax({			
								url: "http://cors.appshed.com/?u=http://apps.appshed.com/"+idOrSlug
							}).always(function(data) {
								if(data.status == 200 || data.statusText == "OK"){
									var appId = data.responseText.replace(/[\s\S]*"app":(\d+),"request"[\s\S]*/,"$1"); //

									// now get the app json
									jQuery.ajax({			
										url: "http://cors.appshed.com/?u=http://apps.appshed.com/"+idOrSlug+"/"+appId+".app.js"
									}).always(function(data) {
										if(data.status == 200 || data.statusText == "OK"){
											try{
												var rObj = JSON.parse(data.responseText.replace(/appbuilder\.app\.FileLoader\.fetched\(([\s\S]*)\);$/,"$1")); //
												if(!app._appData[idOrSlug])
													app._appData[idOrSlug] = {};

												app._appData[idOrSlug].data = rObj['app'][Object.keys(rObj['app'])[0]];

												if(callback != null) callback(idOrSlug);
											} catch(er){
												app.handleError(er,"app.loadAppData("+idOrSlug+")");
											}
										}
									});



								}
							});		
						};




						app._loadBlockly2Scripts = function(callback){
							// Start loading the Blockly2 scripts
							app._loadBlockly2ScriptsStart = true;

							// hide old blockly
							jQuery('#action-target>div').children().hide();
							// Add a loading placeholder
							app._showBlockly2Loader();

							// load the blockly scripts
							// load the new blockly2 scripts, and the old blocks and javascript files that have all the old definitions
							app.loadScript('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/blockly/blockly-compressedjs.js',function(){
								app.loadScript('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/blockly/javascript-compressedjs.js',function(){
									app.loadScript('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/blockly/blocks-compressedjs.js',function(){
										app.loadScript('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/blockly/blocksjs.js',function(){
											app.loadScript('https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/blockly/enjs.js',function(){
											
												// all scripts loaded
												app._loadBlockly2ScriptsDone = true;
												app._hideBlockly2Loader();

												if(callback){
													callback.call();
												}

											});
										});
									});		
								});
							});

						};



						app.loadScript = function(url,callback,filetype,el){
							// Adds a `<link>` tag with `src = url` to the `<head>` 

							// Optional `el` specifies the element to add it to (e.g. iframe target for Blockly)

							try{

								var el = el || document.getElementsByTagName('head')[0];
								var tag = "script";

							    if (filetype=="css"){ //if filename is an external CSS file
							        var fileref=document.createElement("link")
							        fileref.setAttribute("rel", "stylesheet")
							        fileref.setAttribute("type", "text/css")
							        fileref.setAttribute("href", url)
							    }else{ //if filename is a external JavaScript file
							        var fileref=document.createElement('script')
							        fileref.setAttribute("type","text/javascript")
							        fileref.setAttribute("src", url)
							    }


								// check if this link already present
								var currentlinks = el.getElementsByTagName(tag)
								for(var j=0;j<currentlinks.length;j++){
									if(currentlinks[j].href == url || currentlinks[j].src == url){
										return true;
									}
								}


								if(callback){
									if(fileref.readyState) {  //IE
										fileref.onreadystatechange = function() {
										  if ( fileref.readyState === "loaded" || fileref.readyState === "complete" ) {
										    fileref.onreadystatechange = null;
										    callback(url);
										  }
										};
									} else {  //Others
										fileref.onload = function() {
										  callback(url);
										};
									}
								}

							    if (typeof fileref!="undefined"){
							        el.appendChild(fileref)    
							    }
							}catch(er){
console.warn('ERROR app.loadScript',er,url,callback,filetype,el)								
							}

							return true;
										
						};




						app.log = function(aMsg){
							// Save `aMsg` to the `app._log`
							// The user can access the log by clicking on the status light in the simulator

							var now = Date.now();
							app._log.push({timestamp: now, msg: aMsg});

						};




						app.logo = function(params,deviceId,callback){
							// Sends `params` to `deviceId` to draw logo commands
							// Optional `deviceId` specifies the device, else `_deafultDevice` is used
							// Params can be in the default Logo format:
							//	<cmd> <value> <cmd> <value> etc... (line breaks are ignored)
							// or in script form:
							//	<cmd>,<value>;<cmd>,<value>;etc.
							// Optional `callback` is called on completion
							// Returns `this`


							params = String(params);
							params = params.replace(/\n/g,";");
							params = params.replace(/;;/g,";");
							params = params.replace(/^;/g,"");
							params = params.replace(/  /g," ");

							params = params.replace(/(\w) (\d)/g,"$1,$2");
							params = params.replace(/(\d) /g,"$1;");
							params = params.replace(/(\w) (\w)/g,"$1;$2");
							params = params.replace(/ /g,"");

							this.callFunction(deviceId,"logo",params,callback);

							return this;

						};



						app.loop = function(){
							// the `loop` function repeats continuously carrying out any user defined tasks
							// Add new functionsthe to  loops by passing arguments to `loop`
							// arg[0] - function reference or an ad-hoc function
							// arg[1] - the interval for this function, e.g. 1000 will run it every second.
							// arg [2...n] - arguments to the function arg[0]
							// e.g. `app.loop('app.setBackgroundColor',2000,'random')`

							// If there are arguments, add the new function to the loop
							try{

								if(arguments.length){

									var obj = {};
									obj.func = arguments[0];
									obj.lastCalled = 0;
									obj.interval = 0;
									
									// if an interval passed in, use it, or default to always
									if(arguments.length > 1)
										obj.interval = arguments[1];

									// if additional arguments, these will be the arguments to pass to the func
									obj.arguments = [];
									if(arguments.length > 2){
										for (var i = 2; i < arguments.length; i++) {
											obj.arguments[(i-2)] = arguments[i]
								    	}
									}

									// add this obj to the loop functions
									app._loopFunctions[app._loopFunctions.length] = obj;

									// if called with arguments don't self-call
									return
								}

								var now = Date.now();

								// now call all the loop functions
								for(var i=0;i<app._loopFunctions.length;i++){
									if(!app._loopFunctions[i].interval || app._loopFunctions[i].lastCalled + app._loopFunctions[i].interval < now){
										app._loopFunctions[i].lastCalled = now;
										try{
											app._loopFunctions[i].func.apply(app._loopFunctions[i].arguments)
										}catch(er){
										}
									}

								}	

							}catch(er){
			console.log("ERROR in app.loop",er);					
							}
				
								setTimeout(app.loop,app._loopTimeout);

						};







						app.neoPixel = function(params,deviceId,callback){
							// Sends `params` to `deviceId` to do NeoPixel routines
							// `params` is an object in the format:
							//	{
							//		routine: [101...199],	// the routine number
							//		s: [1...4],    			// Optional, the Strip number, default 1  
							//		wait: int,				// Optional, the number of milliseconds to wait between changes, default 20
							//		duration: int,			// Optional, duration of the routine, default to 0 - ongoing
							//		color: "hex"/{rgb}		// Optional, color either hex string or rgb object
							//	}
							// Optional `deviceId` specifies the device, else `_deafultDevice` is used
							// Optional `callback` is called on completion
							// Returns `this`

							try{
								// construct the value string
								var val = "";
								var arr = [];

								// Defaults
								params.s = params.s || 1;
								params.wait = params.wait || 20;
								params.duration = params.duration || 0;

								if(params.routine == 102){
									val = this.toRGBInt(params.color);
									arr = [params.routine,params.s,val,params.duration]
								}

								// expecting array of arrays e.g. [ [1,4,1,1000] , [1,4,0,0] ]
								// cmds,id,key,callback
								this.sendCommands([arr]);

							}catch(er){
								app.handleError(er,"app.neoPixel()")
							}

							return this;

						};




						app.onItemClicked = function(e){
							// Saves the `_currentItemId` when `Element` `e` is clicked.
							// Returns `this`


							if(e.target.classList.contains('item'))
								app._currentItemId = app.getIdFromDOMId(e.target.id)
							if(e.target.parentElement.classList.contains('item'))
								app._currentItemId = app.getIdFromDOMId(e.target.parentElement.id)
							if(e.target.parentElement.parentElement.classList.contains('item'))
								app._currentItemId = app.getIdFromDOMId(e.target.parentElement.parentElement.id)

							app.ui.handlerContextMenuItemEdit();

							return app;
								
						};


						app._onLoadEditLocation = function(){

							//deprecated
							return;

							// called when the edit location panel opens
							
							// replace Google Map with Open Street Map/Leaflet
							
							/*

							try{

								jQuery('.mapper').remove();

								// make sure there is a sub-div... on re-edit this is not present
								if(jQuery('.map-chooser>div').length == 0){
									var id = jQuery('.popup-loaded form input[name="item_id"]').val()
									var jItem = jQuery('#item'+id);

									jQuery('<div><input type="text" name="item_location[0]" value="'+jItem.data("latitude")+'"><input type="text" name="item_location[1]" value="'+jItem.data("longitude")+'"><form class="input-append"><input type="text" class="map-address" name="item_location[2]"><button class="btn btn-info" type="submit"><i class="icon-search"></i> Find</button></form></div>').appendTo('.map-chooser')
								}

								jQuery('<div class="mapper" id="mapper"></div>').appendTo('.map-chooser>div')

								var mymap = L.map('mapper')
								mymap.setView([parseFloat(jItem.data("latitude")), parseFloat(jItem.data("longitude"))], 13);


								L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
								    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
								    maxZoom: 18,
								    id: 'mapbox.streets',
								    accessToken: app._mapbox_accessToken
								}).addTo(mymap);


								var mymarker = L.marker([parseFloat(jQuery('.map-chooser>div>input')[0].value), parseFloat(jQuery('.map-chooser>div>input')[1].value)]).addTo(mymap)


								jQuery('.map-chooser .input-append').submit(()=>{
									app.setInterval(()=>{
										var thisLL = [parseFloat(jQuery('.map-chooser>div>input')[0].value), parseFloat(jQuery('.map-chooser>div>input')[1].value)];
										mymarker.setLatLng(thisLL);
										mymap.setView(thisLL)			
									},100,2000)
								})


							}catch(er){
		console.warn('app._onLoadEditLocation',er)						
							}

							*/


						}

						app.onReady = function(fn,params){
							// Will call function `fn` when the app is ready
							// (optional) `params` is an array of parameters that will be passed to `fn` when calling/apply
							// This method can be called multiple times to add multiple functions to the `ready` event
							// Returns `this`
							
							if(fn){
								app._readyFunctions.push(fn);
								var p = params || [];
								app._readyFunctionsParams.push(p);
							}

							// if the app is ready, call it now
							if(app.ready){
								fn.apply(params);
							}

							return this;
						}






						app.openAcademyBrowse = function(callback){
						    jQuery('body').append('<div class="popup-underlay academy-browse" style="z-index: 101; opacity: 0.5;"></div>       <div class="popup-window upload-picker academy-browse" style="z-index: 102; opacity: 1; visibility: visible; left: 352px;"><div class="popup-loaded"><form>      <div class="navbar" style="margin-bottom: 0px;">          <div class="navbar-inner">              <div class="container">                  <span class="brand">Courses</span>                  <a href="#" data-popup="hidecourses" title="Close" class="btn pull-right"><i class="icon-remove"></i> Close</a>                                </div>          </div>      </div>      <div class="popup-content  upload-picker">          <div class="row-fluid">              <iframe id="courses_frame" src="https://appshed.com/courses" style="position: absolute; z-index: 103; width: 100%; height: 90%; border-width: 0px">       </iframe>          </div>      </div>  </form></div></div>');

						    jQuery('.popup-window .btn[data-popup="hidecourses"]').click(function(){
						        jQuery('.popup-underlay.academy-browse').remove(); jQuery('.popup-window.academy-browse').remove()
						    });

						}




						app.openAcademyCategories = function(callback){


							app.openAcademyPanel();
							app.showAcademyLoader();

							// must have .academy-categories but NOT .category or .unit
							if(jQuery('#academy .academy-categories').length && !jQuery('#academy .academy-categories.category').length && !jQuery('#academy .academy-categories.unit').length){
								app.hideAcademyLoader();						

								if(callback){
									callback.call();
								}
								return;
							}else{
								app.openAcademyHome(()=>{
										app.openAcademyPath(["#academy a:contains('Course Categories')"],null,callback);
								})
							}
						}

						app.openAcademyCategory = function(categoryName,callback){


							app.openAcademyPanel();
							app.showAcademyLoader();

							// must have .academy-categories and .category and categoryName active
							if(jQuery('#academy .academy-categories.category .breadcrumb li.active:contains("'+categoryName+'")').length){
								app.hideAcademyLoader();						

								if(callback){
									callback.call();
								}
								return;
							}else{
								app.openAcademyHome(()=>{
									app.openAcademyCategories(()=>{
										return app.openAcademyPath(["#academy a.item:contains('"+categoryName+"')"],null,callback);
									})
								})
							}
						}


						app.openAcademyCourse = function(courseName,categoryName,callback){

							// this Opens a course in AppShed Academy.

							// Just for safety, close the Loader after a while
							setTimeout(function(){
								app.hideAcademyLoader();
							},5000)

							// close the Course Browser
							app.closeAcademyBrowse();


							app.openAcademyPanel();
							app.showAcademyLoader();

							// must have .academy-categories and .category
							if(jQuery('#academy .academy-categories.unit .breadcrumb li:contains("'+categoryName+'")').length && jQuery('#academy .academy-categories.unit .breadcrumb li.active:contains("'+courseName+'")').length){

								setTimeout(app.hideAcademyLoader,500);						

								if(callback){
									callback.call();
								}
								return;
							}else{
								app.openAcademyHome(()=>{
									app.openAcademyCategories(()=>{
										app.openAcademyCategory(categoryName,()=>{
											return app.openAcademyPath(["#academy a.item:contains('"+courseName+"')"],null,callback);
										})
									})
								})
							}
						}


	/*
						app.openAcademyHome = function(callback){
							// This function simply adds a call to close the loader when done

							// add a command to hide loader in the callback
							var callback2;
							if(!callback){
								callback2 = function(){
									app.hideAcademyLoader();
								}
							}else{
								callback2 = function(){
									callback.call();
									app.hideAcademyLoader();
								}
							}

							app.openAcademyHome(callback2);
						}

	*/
						app.openAcademyHome = function(callback){


							app.openAcademyPanel();
							app.showAcademyLoader();

							// If we are on Home, do callback
							if(jQuery('#academy .academy-intro').length){
								app.hideAcademyLoader();
								if(callback){
									callback.call();
								}
								return;
							}else{
								return app.openAcademyPath(["#academy .breadcrumb a:contains('Home')"],null,callback);
							}
						}

						app.openAcademyPanel = function(callback){
								// first check if Academy is closed, and open it
							if(jQuery('#academy .button.arrow-up').length){
								jQuery('#academy .button.arrow-up').click();
								app.hideAcademyLoader();						

								if(callback){
									setTimeout(()=>{
										callback.call()
									},1000);
								}

							}else{
								//It's open already
								app.hideAcademyLoader();						

								if(callback){
									callback.call()
								}
							}

						}

						app.openAcademyPath = function (path,repeat,callback){
							// if this method is called recursively, repeat will be true
							

							app.showAcademyLoader();

							var delayTimeout = 100;
							var giveUpTime = 2000;
							var runTime = Date.now();

							// set a global time variable
							if(!repeat){
								window._as_navigateAcademyStart = runTime;
							}

							app.openAcademyPanel();
							app.showAcademyLoader();


							// if over time, just stop trying, 
							if(runTime > (window._as_navigateAcademyStart + giveUpTime)){
								// try next path
								return;			
							}

							// If found path, click it
							if(jQuery(path[0]).length){
								app.hideAcademyLoader();						

								jQuery(path[0]).get(0).click();

								if(callback){
									callback.call();
								}
								return;
							}else{
								// not found the path, try again after delay
								setTimeout(function(){app.openAcademyPath(path,true,callback)},delayTimeout)
							} 

						}












































						app.ui = {

				

							bounce: function(selector,repeat){
								// bounce an element
								// (optional) repeat that many times, default 1

								var repeat = repeat || 1;
							    jQuery(selector).animate({top: -81},null,null,function(){
							      jQuery(selector).animate({top: -41},200,null,function(){
									if(repeat > 1){
										repeat--;
										app.ui.bounce(selector,repeat);
									}
							      });
							    });
							},


							closeToolbox: function(){
								jQuery('.span-toolbox').css('display','none');
							},

							handlerContextMenuItemEdit: function(timeout){
								// add the event handler to the Item Context Menu for Edit
								
								if(app.isMobileEditor){

									timeout = timeout || 0;

									// If the element does not exist, try again after a timeout 
									// (but not if this method being called with a timeout already - avoid infinite loop)

									if(jQuery('.open>.dropdown-menu').length == 0 && timeout<=3000){
										return setTimeout(function(){app.ui.handlerContextMenuItemEdit(timeout+500)},500);
									}

									jQuery('.open>.dropdown-menu').children().each(function () {
									    if(jQuery(this).find('.icon-edit').length){
											jQuery(this).click(function(){
												app.ui.openToolbox();

												app.ui.handlerItemSave()

											});
									    } 
									});
								}
							},


							handlerItemSave: function(timeout){

								if(app.isMobileEditor){
									timeout = timeout || 0;

									if(jQuery('#popup-container .btn-success').length == 0 && timeout<=3000){
										return setTimeout(function(){app.ui.handlerItemSave(timeout+500)},500);
									}

									jQuery('#popup-container .btn-success').click(function(){
										app.ui.closeToolbox();
									});						
								}

							},



							openToolbox: function(){
								jQuery('.span-toolbox').css('display','block');
							},


							toggleToolbox: function(){
								if(jQuery('.span-toolbox').css('display') == "block"){
									jQuery('.span-toolbox').css('display','none');
								}else {
									jQuery('.span-toolbox').css('display','block');
								}

							}
						};


						app.onTouchend = function(e){
							// Event handler for the `touchend` and `mouseup` events

							app.isTouching = false;	
						}		


						app.onTouchmove = function(e){
							// Event handler when touch or mouse moves

							// Avoid calling this method if it is currently executing
							if(app._isActiveTouchmove)
								return;

							app._isActiveTouchmove = true;


							var ident = Math.random();

							// Event handler for the `touchmove` and `mousemove` events
							var touchobj = ((e.event.changedTouches) ? e.event.changedTouches[0] : e.event) // reference first touch point for this event
							app.touchX = touchobj.clientX;
							app.touchY = touchobj.clientY;	

							// Get the touchAngle
							app.touchAngle = Math.atan2(app.touchY - app.touchStartY, app.touchX - app.touchStartX) * 180 / Math.PI;
							// make angle 0-360, not negatives.
							if(app.touchAngle < 0)
								app.touchAngle = 360 + app.touchAngle;
							

							// see if hovering over item
							// Get the Element below the current point
							var thisHoverElement = document.elementFromPoint(touchobj.clientX, touchobj.clientY)
							var thisHoverItem = app.findParentItem(thisHoverElement)

							// Is it a new Element
							if(!app._currentHoverItem || (thisHoverItem && thisHoverItem.id != app._currentHoverItem.id)){
								var oldHoverItem = app._currentHoverItem;

								// Save this as the current Element and Item
								app._currentHoverElement = thisHoverElement;
								app._currentHoverItem = thisHoverItem;


								// reset the hover image on oldHoverItem if it has a hover image
								if(oldHoverItem && oldHoverItem.hoverImage && oldHoverItem.originalImage)
									oldHoverItem.setImage(oldHoverItem.originalImage)


								// set the new hover image if required
								if(app._currentHoverItem && app._currentHoverItem.hoverImage){
									app._currentHoverItem.setImage(app._currentHoverItem.hoverImage)
								}

								// call actions for this `Item`
								if(app._currentHoverItem && app._currentHoverItem.callActions && app._currentHoverItem.onHoverDoActions)
									app._currentHoverItem.callActions();
							}

							//        e.preventDefault()
							app._isActiveTouchmove = false;

						};


						app.onTouchstart = function(e){
							// Event handler for the `touchstart` and `mousedown` events

							// need to make sure scroll rules have been applied, because on some mobiles the screen event doesn't fire
							app.applyScrollRules(document.querySelector('.screen'));

							app._isTouching = true;	
							var touchobj = ((e.event.changedTouches) ? e.event.changedTouches[0] : e.event) // reference first touch point for this event
							app.touchStartX = touchobj.clientX;
							app.touchStartY = touchobj.clientY;	
							app.touchX = touchobj.clientX;
							app.touchY = touchobj.clientY;	
						};




						app.preload = function(images){
							// Preloads the `images` passed in an array
							// Format of `images':
							//  `[ 'url1','urls',...]`
							// returns `this`

							for(var i=0;i<images.length;i++){
								// Preload the image
								jQuery('<img />')[0].src = images[i];
							}

							return this;

						};




						app.prependToVariable = function(variable,value){
							// prepends `value` to `variable` and return the result

							return this.appendToVariable(variable,value,true);
						};





						app.reformatCaptureItems = function(id,el){
							// Reformat `Items` of type `Capture` to show the `file input` element
							// This is a temporary fix because the AppShed UI did not update to support HTML5 capture items

							var els = el.getElementsByClassName('capture');
							for(var i=0;i<els.length;i++){
								try{
						    		if(els[i].getElementsByClassName('file').length){
						    			break;
						    		}

									var input = document.createElement('input');
						    		input.type="file";
						    		input.id = els[i].dataset.name;
						    		input.name = els[i].dataset.name;
						    		input.className = "file";
						    		input.accept = els[i].dataset.capturetype+"/*";
						    		input.dataset.variable = els[i].dataset.name;
						    		input.dataset.name = els[i].dataset.name;
						    		input.dataset.capturetype = els[i].dataset.capturetype;


						    		var offEl = els[i].getElementsByClassName('off')[0];
						    		var parent = offEl.parentNode;
						    		parent.appendChild(input);
						    		offEl.style.display = 'none';				
								}catch(er){

								}
							}

						};



						app.reformatDataItems = function(id,el){
							// Reformat `Items` that have special functionality for `Data`
							// returns `this`

							var vars = app.data.getVariables();


							// DATA SELECT
							// Add variable selection

							app.addStyles(".data_select_controls input{zoom: 2;} .data_select_variable label{float: left; width: inherit; padding-right: 10px} .data_select_controls select{width: inherit;} ")	   

							jQuery(".data_select_controls").remove();


							jQuery('.data_select.item').each(function( index ) {

								var el = (this);

								var id = 'data_select'+el.id.replace(/item/,"");
								var insert = '<div id="'+id+'" class="data_select_controls">';

								insert += '<div class="data_select_variable">';

								vars.forEach(function(currentValue, index, array) {
									insert += '<label><input name="data_select_variable_'+currentValue+'" type="checkbox">'+currentValue+'</label>'; 
								});
								insert += "</div>"; // data_select_variable

								insert += "</div>"; // data_select_controls

								jQuery(this).before(insert)
							});



							// DATA FILTER
							// add additional controls to buttons with class `data_filter`
							// Remove the existing controls if present
							jQuery(".data_filter.item .data_filter_controls").remove();

							app.addStyles(".data_filter.item{clear: both;} #app"+app.id+" .data_filter.item.button button.button{width:inherit;} .data_filter_variable,.data_filter_comparison,.data_filter_value{float: left; width: inherit; padding-right: 10px} .data_filter_value{width: 50px;} .data_filter_controls input, .data_filter_controls select{width: inherit;} .data_filter_controls input{line-height: 24px;}")	   
							var insert = '<div class="data_filter_controls">';

							insert += '<div class="data_filter_variable">';
							insert += '<select name="data_filter_variable">';
							insert += '<option value=""> - no filter - </option>';
							vars.forEach(function(currentValue, index, array) {
								insert += "<option>"+currentValue+"</option>"; 
							});
							insert += "</select></div>";


							insert += '<div class="data_filter_comparison"><select name="data_filter_comparison">';
							["==","!=","<>",">","<",">=","<="].forEach(function(currentValue, index, array) {
								insert += "<option>"+currentValue+"</option>"; 
							});
							insert += "</select></div>";

							insert += '<div class="data_filter_value"><input name="data_filter_value" /></div>';

							insert += "</div>"; // data_filter_controls

							jQuery('.data_filter.item button').before(insert);

							return this;
						};




						app.reformatInputTypes = function(id,el){
							// Reformat `Items` that have className `range` or 'slider' to show the `range input` element
							// This is a temporaru fix because the AppShed UI did not update to support HTML5 range items
							// returns `this`


							var inputTypes = ["color","date","datetime-local","email","month","number","range","search","tel","time","url","week"];

							// Set the `type` for `textbox` Items
							for(var t=0;t<inputTypes.length;t++){
								var els = el.getElementsByClassName(inputTypes[t]);
								for(var i=0;i<els.length;i++){
									try{
										// check that the `type` has not already been set
							    		if(els[i].getElementsByClassName('textbox')[0].type == inputTypes[t]){
							    			break;
							    		}				

										els[i].getElementsByClassName('textbox')[0].type = inputTypes[t];
									}catch(er){
									}
								}

							}

							// Disable	
							jQuery(".disabled.item input").each(function(){
								jQuery(this).attr("disabled", "true");
							});


							return this;

						};



						app.refreshScroll = function(){
							// Refresh the iScroll
							// This is needed if items are added to the screen, as the size of the scroll area changes
							// Returns `this`

							try{
								jQuery('.items')[0].retrieve('scroll').refresh();				
							}catch(er){}

							return this;

						};




						app.removeClass = function(className){
							// Removes `className` from the app `element`
							// Returns `this`
							
							jQuery(".app-navigator").removeClass(className);

							return this;
						};




						app.removeScreenEvent_xxx = function(identifier){
							// Stops a `Screen` event from being called when a screen loads
							// `identifier` is the return value of `app.addScreenEvent()` 

						};


						app.removeTabEvent_xxx = function(identifier){
							// Stops a `Tab` event from being called when a screen loads
							// `identifier` is the return value of `app.addTabEvent()` 

						};


						app.removeVariableEvent_xxx = function(identifier){
							// Stops a `Variable` event from being called when a variable value changes
							// `identifier` is the return value of `app.addVariableEvent()` 

						};





						app.replaceItemHTML = function(html,data){
							// Replace the values of the `Item html` using the properties supplied in `data`
							// Supported Properties
							// 		image: the URL of the image
							// 		title
							// 		text 
							// 		name (and data-variable)
							// 		value
							// 		checked
							
							if(!data){
								return html;
							}

							if(data.id){
				    			html = html.replace(/id="item\d+"/,'id="item'+data.id+'"'); 						
							}

							if(data.image){
								html = html.replace(/<img class="icon" src=".*?"/,'<img class="icon" src="'+data.image+'"');
								html = html.replace(/<img class="image" src=".*?"/,'<img class="image" src="'+data.image+'"');
							}

							if(data.title){
								// Special case: plain items, treat the text class as the title 
								if(html.match(/item plain/)){
									html = html.replace(/<div class="text">.*?<\/div>/,'<div class="text">'+data.title+'</div>');
								}else{
									html = html.replace(/<div class="title">.*?<\/div>/,'<div class="title">'+data.title+'</div>');
								}
							}

							if(data.text){
								html = html.replace(/<div class="text">.*?<\/div>/,'<div class="text">'+data.text+'</div>');
							}

							if(data.name){
								html = html.replace(/name=".*?"/,'name="'+data.name+'"');
								html = html.replace(/data-variable=".*?"/,'data-variable="'+data.name+'"');
							}

							if(data.value){
								html = html.replace(/value=".*?"/,'value="'+data.value+'"');
								html = html.replace(/<\/textarea>/,data.value+'</textarea>');
							}

							if(data.checked){
								html = html.replace(/value="/,'checked value="');
							}else{
								html = html.replace(/checked/,'');						
							}

							return html;
						}


						app.repositionItems = function(id,el){
							// Reposition items based on `className`
							// Supported `classNames`:
							//    `position-bottom`
							// Returns `this`
							
							var newEl = jQuery(el).find('.position-bottom').detach();
							 
							 
							newEl.css('position','absolute').css('bottom', '0px').css('width', '100%');
							 
							if(parseInt(jQuery('.tab-bar').css('bottom')) == 0) {
							                newEl.css('bottom',jQuery('.tab-bar').css('height'));
							}

							jQuery(el).find('.scrolling').append(newEl);

							return this;
						}

						app._saveScreenData = function(id,el){
							// Save data about the screen to localStorage
							// Return `this`



							return this;

						};
							




						app.sendCommands = function(cmds,id,key,callback){
							// Sends commands `cmds` to a `Device` 
							// `cmds` expect an array of `command` arrays, where each `command` array contains 4 items: `[format,pin,value,duration]`
							// Example: Turn digital Pin 4 on for 1 second
							//		[ [1,4,1,1000] , [1,4,0,0] ]   
							// Optional `id` specifies the Device ID, otherwise `_defaultDevice` is used
							// Optional `key` specidies the Pro key
							// Optional `callback` is called once the commands have been sent.
							// `callback` may be called multiple times if the number of commands being sent exceeds `Device.ioMaxCommandsPerBatch`

							this.getDevice(id,key).sendCommands(cmds,callback)

							return this;
						};




						app.setAction = function(idOrClassName,handler){
							// Sets the action `handler` for `idOrClassName`
							// Removes all other Actions for this `idOrClassName`
							
							this._actions[idOrClassName] = null;
							this.addAction(idOrClassName,handler);

							return this;
						};



						app.setBackground = function(color){
							// Shortcut for app.setBackgroundColor
							// If no `color` uses random color
							// Returns app.getBackgroundColor()

							if(!color)
								color = app.getRandomColor();

							return app.setBackgroundColor(color);

						};



						app.setBackgroundColor = function(color){
							// Set the `BackgroundColor` of the current screen to `color`
							// Returns `this`
							app.getScreen().setBackgroundColor(color);

							return this;
						};


						app.setBackgroundImage = function(src,method){
							// Set the `BackgroundIamge` of the current screen to `src` 
							// Optional `method` determines the layout
							// Returns `this`

							app.getScreen().setBackgroundImage(src,method);

							return this;
						};



						app.setDefaultDevice = function(idOrProps){
							// Sets the default device for the app. 
							// `idOrProps` can pass in either the `deviceId` or a properties `Object`
							// Returns `this`

							var props = this.idOrPropsToObject(idOrProps);
							this._defaultDevice = props.id;
							this.getDevice(props);

							return this;
						};


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

						};



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
						};



						app.setLocalProperty = function(property,value){
							// Saves the `value` for `property` in `localStorage` for the app
							// Returns `bool true` if successful

							var obj = this.getLocalStorage()
							obj[property] = value;

							return this.setLocalStorage(obj);
						}



						app.setLocalStorage = function(obj){
							// Saves the `obj` to in localStorage for the app
							// `obj` must have a valid format
							//    Required: AppId (int)
							//    Required: data (Array)
							// Returns `bool true` if the process was successful

							try{

								if(obj && typeof obj === "object"){
									if(!isNaN(parseInt(obj.AppId))){
										if(Array.isArray(obj.data)){

											// obj passes all the tests
											// Save to local Storage

											localStorage['app'+this.id] = JSON.stringify(obj)

											return true;
										}
									}
								}
							} catch(er){
							}
							return false;

						}


						app.setMotorDriver = function(type,id,key,callback){
							// Sends commands `cmds` to a `Device` 
							// `cmds` expect an array of `command` arrays, where each `command` array contains 4 items: `[format,pin,value,duration]`
							// Example: Turn digital Pin 4 on for 1 second
							//		[ [1,4,1,1000] , [1,4,0,0] ]   
							// Optional `id` specifies the Device ID, otherwise `_defaultDevice` is used
							// Optional `key` specidies the Pro key

							this.getDevice(id,key).setMotorDriver(type,callback);

							return this;
						};



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

						};



						app.setRGB = function(color,pins,id,key){
							// Sets the RGB LED to `color` (see Device.setRGB)
							// Optional `id` to use a specific `Device`
							// If no `id` passed in the default `Device` is used
							// Returns `this`

							this.getDevice((id?id:this._defaultDevice),key).setRGB(color,pins);

							return this;

						};


						app.setTabBarBackgroundColor = function(color){
							// Sets the `backgroundColor` of the `TabBar`  to `color`
							// Return `this`

							jQuery(".tab-bar").css("background",color);

							return this;

						};



						app.setTabBarColor = function(color){
							// Sets the text color on the `TabBar`  to `color`
							// Return `this`

							jQuery(".tab-bar .label").css("color",color).css("text-shadow","none");

							return this;

						};

						app.setTitleBackgroundColor = function(color){
							// Sets the `backgroundColor` of the `Screen Title`  to `color`
							// Return `this`

							this.getScreen().setTitleBackgroundColor(color);

							return this;

						};



						app.setTitleColor = function(color){
							// Sets the `color` of the `Screen Title`  to `color`
							// Return `this`

							this.getScreen().setTitleColor(color);

							return this;

						};

						app.setVariable_xxx = function(name, value){
							// Set the value of the variable `name` to `value`.
							// [NOTE: the method name is setVariable without _xxx and it already exists in the built-in JavaScript library. 
							//   It is included here for documentation purposes only.]
						};




						app.showAcademyLoader = function(timeout){
							// Shows the loading element
							
							jQuery('.academyLoader').removeClass('invisible')

							if(timeout){
									app.hideAcademyLoader(timeout);
							}

							return this;
						};





						app._showBlockly2Loader = function(){
							// Show a loader while Blockly 2 scripts load

							app._createBlockly2Loader();

							jQuery('#action-target .blockly2Loader').removeClass("hidden");
						}




						app.showDeepLoader = function(timeout,msg){
							// Show the Deep Loader
							// This is a loader sitting under the screen, so the Screen element will be hiddne
							// The normal loader sits above/on top of the screen

							// Add the screen loader (sits behind the screen objects)
							if(jQuery(".deep-loader").length == 0){
								// Add loading spinner behind screen
								jQuery(".app-navigator").append(' <div class="deep-loader" style="     position: absolute;     left: 0px;     right: 0;     top: 0;     bottom: 0;     background-color: black; "><div style="width: 50%;height: 100%;margin: 156px auto;text-align: center;"><i class="icon-spinner icon-spin " style="     zoom: 6;     color: var(--gm-color-low); "></i><div class="deep-loader-text" style="margin-top: 30px; color: var(--gm-color-low);"></div></div></div>'); 
							}

							jQuery('.deep-loader').show()
							
							//jQuery('.screen').css('visibility','hidden');

							if(msg){
								jQuery('.deep-loader-text').text(msg)
							}

							if(timeout){
								app.hideDeepLoader(timeout);
							}

							return this;

						}


						app.showLoader = function(timeout,msg){
							// Shows the loading element
							// Optional - Hide the loader after `timeout`
							// Optional `msg` is the message to show in the loader. Default is "Loading..."
							// Returns `this`

							
							//document.getElementsByClassName('loader')[0].style.display = 'block';
							jQuery('.loader').each(function( index ) {
								var el = jQuery(this);
								if(el.attr('id') != 'logMessages'){
									el.css('display','block');
									if(msg){
										el.find('.text').text(msg);
									}else{
										el.find('.text').text('Loading...');
									}
								}
							});

							if(timeout){
									app.hideLoader(timeout);
							}



							return this;
						};

						app.showRemoteScreen_xxx = function(url){
							// The app will navigate to a remote screen that is loaded from `url`. 
							// `url` can contain parameters in the form `{name}` that will be replaced with the value of a form `variable` with the given `name`.
							// For example url = `https://mydomain.com/myscript.php?FirstName=[myName]`
							//   This requires a form `variable` in your app with the Name `myName`
							// [NOTE: the method name is showRemoteScreen without _xxx and it already exists in the built-in JavaScript library. 
							//   It is included here for documentation purposes only.]

						};


						app.showScreen_xxx = function(id){
							// The app will navigate the screen with `id`
							// [NOTE: the method name is showScreen without _xxx and it already exists in the built-in JavaScript library. 
							//   It is included here for documentation purposes only.]
						} 




						app.showStatusMessage = function(){

							var logHeading = "Log&nbsp;&nbsp;&nbsp;<div id='closeLogMessages' style='display: block;    position: absolute;    top: 5px;    right: 10px;    background: url(https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/appbuilder/icon-close-whitepng.png);    width: 20px;    height: 20px;    background-size: 20px;' onClick='document.getElementById(\"logMessages\").style.display = \"none\"'>x</div><br>";

							var logs = "";
							app._log.forEach(function(e){
								logs += e.msg  + " (" + (e.timestamp - app._log[0].timestamp) +  ")<br>";
							});

							if(Object.keys(app._devices).length){
								Object.keys(app._devices).forEach(function(e){
									var d = app._devices[e];
									logs += 'Device: ' + (d.id) + ', ' + (d.connected ? 'Connected ' : 'Not connected ') +  d.address + '<br>';
								});						
							}

							jQuery('#logMessages .text').html(logHeading + logs);
							jQuery('#logMessages').css('display', 'block');
						};


						app.showTab_xxx = function(id){
							// The app will navigate the tab with `id`
							// [NOTE: the method name is showTab without _xxx and it already exists in the built-in JavaScript library. 
							//   It is included here for documentation purposes only.]
						};




						app.showTabBar = function(id){
							// Show the tab bar (if it is hidden)
							// Returns `this`
							
							try{
								var tb = jQuery(".tab-bar");
								tb.show();
		/*
								var an = jQuery(".app-navigator");
								an.css("top",this._app_navigatorTop);
								an.css("bottom",this._app_navigatorBottom);
								an.css('height',jQuery(".app").css('height'));
		*/
								var an = jQuery(".app-navigator");
								an.css("top",'');
								an.css("bottom",'');
								an.css('height','');


							}catch(er){}

							return this;
						};




						app.stopLoops = function(){
							// Stop all the loops
							

							app._loopFunctions = [];

							return this;


						}

						app.togglePin = function(pinNameOrNumber,id){
							// Toggles the pin `pinNameOrNumber` 
							// Optional `id` to use a specific `Device`
							// If no `id` passed in the default `Device` is used (`IOIO` is the initial default device)


							var device = this.getDevice(id?id:this._defaultDevice)

							// For IOIO use built in iot.togglePinValue
							if(device.id == "IOIO"){
								try{
							        window.appbuilder.events.iot.togglePinValue(pinNameOrNumber)
								}catch(er){this.handleError(er,"app.togglePin() IOIO error")}
							} else {
								device.togglePin(pinNameOrNumber);
							}
						};




						app.togglePinValue = function(pinNameOrNumber,id){
							// Override method for `togglePin`
							return this.togglePin(pinNameOrNumber,val,id);
						};







						app.toRGB = function(color){
							// Returns an object with `r,g,b` properties for the supplied `color'
							// `color` must be a 6 character Hexadecimal 
							// If `color` is already an rgb object, return it 

							if(typeof color === "object" && color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b"))
								return color;

							var obj = {};

							color.match(/[A-Za-z0-9]{2}/g).map(function(v,index) { 
								switch(index){
									case 0:
										obj.r = parseInt(v, 16);
										break;
									case 1:
										obj.g = parseInt(v, 16);
										break;
									case 2:
										obj.b = parseInt(v, 16);
										break;
								}
							});

							return obj;

						};




						app.toRGBInt = function(color){
							// Returns the RGB integer value for `color`
							// `color` can be hex color or RGB object

							color = this.toRGB(color);

							return 256*256*color.r+256*color.g+color.b;
						};










































						// Item Object
						app.Item = function(id){

							this.id = id;
							this.element= null; // HTML DOM element for this Item
							this.jQuery = null; // a jQuery object for the DOM lement
							this.domId= '';
							this.hoverImage = null; // Image to display when hovering over this item (our touchover)
							this.game = {}; // Hold various game parameters relating to this Item
							this.onHoverDoActions = false;
							this.originalImage = null;
							this.type = null;


							try{
								this.domId = 'item'+this.id;
								this.element = document.getElementById(this.domId)
								this.jQuery = jQuery(this.element);

								if(this.jQuery.hasClass("plain"))
									this.type = "plain";
								if(this.jQuery.hasClass("thumb"))
									this.type = "thumb";
								if(this.jQuery.hasClass("image"))
									this.type = "image";
								if(this.jQuery.hasClass("icon"))
									this.type = "icon";
								if(this.jQuery.hasClass("html")){
									// might be Styled Text or Text item
									if(this.jQuery.hasClass("text"))
										this.type = "text";
									else
										this.type = "html"
								}

							}catch(er){
								app.handleError(er,'Item.init()')
							}



							this.init = function(element){
								this.element = document.getElementById(this.domId)
								this.jQuery = jQuery(this.element);

							}


							this.addAction = function(handler){
								// Add an `Action` for this `Item`
								// `handler` is a function name or adhoc function
								// `Items` can contain multiple actions. The AppBuilder defines only the default action
								// returns `this`

								app.addAction(this.id,handler);

								return this;
							}


							this.addBefore = function(){
							}


							this.callActions = function(){
								// calls all actions for this `Item`
								// The default Action is set in AppBuilder
								// Additional Actions can be set using `app.addAction()`
								// Actions can be identified using the `itemId`, `DOM id`, and all `Classnames`
								// Returns `this`
								

								// if the screen is being scrolled, don't call actions
								try{						
									if(document.getElementsByClassName('items')[0].retrieve('scroll').iScroll.moved){
										return false;
									}
								}catch(er){
									return false;
								}

								// remove any existing .glow elements on the screen
								jQuery('.item .glow').remove();


								// call the default action
								// set the currentId so this item can retrieve itself using app.getItem()
								app._currentItemId = this.id;
								appbuilder.app.api.phone.navigator.click(null, this.element );

								if(app._actions[this.id])
									this.callEachAction(app._actions[this.id])

								if(app._actions[this.domId])
									this.callEachAction(app._actions[this.domId])

								// for each class, call actions
								if(this.element && this.element.classList){
									for(var i=0;i<this.element.classList.length;i++){
										if(app._actions[this.element.classList.item(i)])
											this.callEachAction(app._actions[this.element.classList.item(i)]);
									}
								}
								return this;

							}


							this.callEachAction = function(arr){
								// Loops through `arr` and calls the action for each element
								if(arr && arr.length){
									for(var i=0;i<arr.length;i++)
										arr[i].call();
								}
							}

							this.containsClass = function(className){
								// Returns true if this `Item` contains the custom class `className`

								return this.element.classList.contains(className);

							}

							this.getBackgroundColor = function(){
								// Returns the `backgroundColor` of this `Item`
							
								return this.element.style.backgroundColor;

							}

							this.getDefaultValue = function(){
								// Return the `Default Value` for this item

								// Check the actual HTML code to see get the original value set in AppBuilder... the value="" will hold the Default Value
								if(String(this.element.outerHTML).match(/.* value="\d+".*/)){
									thisVal = String(this.element.outerHTML);
									thisVal = thisVal.replace(/.* value="(\d+)".*/,"$1");
									if(thisVal > ""){
										return thisVal;
									}
								}
								return "";
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


							this.getLargeImage = function(){
								// If the Image is compressed, the URL of the larger source image is returned
								var img = this.getImage();
								if(img.match(/fit-in/)){
									// get the id number from end of string	
									img = img.replace(/.*?(\d+)$/,'$1');
									// create the  https url for the source image
									img = 'https://d3s8dljl1bm5rz.cloudfront.net/'+img; 
								}
								return img;
							}

							this.getPosition = function(){
								// Returns an object with the x,y coordinates of the item
								// This is only relevant when the item has been placed using `this.place()`;
								var obj = {};
								obj.x = parseFloat(String(this.element.style.left).replace("/\D/g",""))
								obj.y = parseFloat(String(this.element.style.top).replace("/\D/g",""))

								return obj;
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



							this.getVariable = function(){
								// Returns `app.getVariable()` if this Item is a `Form Item` 

								if(this.isFormItem()){
									return app.getVariable(this.getVariableName());
								}

								return null;
							}


							this.getVariableName = function(){
								// Returns the `variable name` if this is a `Form Item`
								
								var rVal = null;

								if(this.isFormItem()){
									jQuery(this.element).find(app._formItemCSSSelector).each(function( index ) {
								      // If there is no dataset.variable, it is not an Item so skip							
										if(this.dataset.variable && this.dataset.variable != "undefined"){
											rVal = this.dataset.variable;								
										}
										
									});

								}

								return rVal;
							}


							this.hide = function(){
								// Hide this `Item`
								// Returns `this`
								
								jQuery(this.element).hide();

								return this;

							}


							this.isFormItem = function(){
								// Returns `true` if this is a `Form Item`

								for(var i=0;i<app._formItemTypes.length;i++){
									if(this.element && this.element.classList && this.element.classList.contains(app._formItemTypes[i])){
										return true;
									}
								}   

								return false;
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
										this.element.style.left = parseInt(x)+'px';
										this.element.style.top = parseInt(y)+'px';
									}
								}catch(er){
									app.handleError(addscrer,'Item.place()')
								}

								return this
							}



							this.setAction = function(handler){
								// Sets the `Action` for this `Item`
								// `handler` is a function name or adhoc function
								// returns `this`

								app.setAction(this.id,handler);

								return this;
							}



							this.setBackgroundColor = function(color){
								//set the background color of this Item to `color`
								// Special case: `color` is `'random'` will get a random color.
								try{
									if(!color || color == 'random')
										color = app.getRandomColor();
									this.element.style.backgroundColor = color;
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
								if(this.type == "plain"){
									this.jQuery.find(".icon").first().attr("src",src);
								}else{
									this.jQuery.find(".image").first().attr("src",src);
								}
			//					app.findClass(this.element,"image").src = src;
								return this
							}


							this.setLabel = function(str){
								//set the value of Label to `str`
								try{
									app.findClass(this.element,"button").innerHTML = str
								}catch(er){app.handleError(er,"Item.setLabel()")}
								return this;
							}


							this.setLabelColor = function(color){
								//set the color of Label to `color`
								try{
									app.findClass(this.element,"button").style.color = color
								}catch(er){
									app.handleError(er,"Item.setLabelColor()")
								}

								return this;
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

							this.setTitle = function(str){
								//set the value of Title to `str`
								try{
									app.findClass(this.element,"title").innerHTML = str
								}catch(er){
									app.handleError(er,"Item.setTitle()")
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




							this.show = function(){
								// Show this `Item`
								// Returns `this`
								
								jQuery(this.element).show();

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

						};

























































						// Screen Object
						app.Screen = function(id){

							this.id = id;
							this.element = null;
							this.jQuery = null; // a jQuery object for the DOM lement
							this.domId = '';

							this.data; // Data object for this screen
							this.items = {};
							this.icons = {};

							this.originalBackgroundImage; 

							try{

								this.domId = 'screen'+this.id;
								this.element = document.getElementById(this.domId)
								this.jQuery = jQuery(this.element);


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


						    this.addItem = function(data){
						    	// Adds an `Item` to the `Screen`
						    	// `data` (optional) An object containing the values to be used for the Item. 
						    	//    All properties are optional
						    	//    {
						    	//    	id: <A unique integer to be used as the ItemId>,
						    	//    	type: <The `Item type 'text','image','link','thumb' etc`>,
						    	//    	image: <The image URL>,
						    	//    	title: <Item title>,
						    	//    	text: <Item text>,
						    	//    	html: <The html to be used for this item>,
						    	//    	value: <The value for a form field>,
						    	//    	action: <The JavaScript action>,
						    	//    	afterId: <Insert the `Item` after an item with this `id` (deafult added to bottom)>,
						    	//    	beforeId: <Insert the `Item` before this>,
						    	//    	template: <The idOrClassName of the item to use as a template for the new item.> 
						    	//    	   Must be on the current screen.
						    	//    	   If a template is supplied, the following properties are set by the template:	
						    	//    	      type
						    	//    	      beforeId (by default the item is added before the template)
						    	//    }

						    	var data = data || {};
						    	var template;
						    	var id = this.getNextId()
						    	if(data.id){
						    		id = data.id;
						    	}else{
						    		data.id = id;
						    	}


						    	if(data && data.template){
									template = app.getItem(data.template);
						    	}
						    	
						    	if(this.getType() == "list"){

						    		var type = 'thumb';
						    		if(data && data.type){
						    			type = data.type;
						    		} 
						    		if(template){
						    			type = template.type;
						    		} 

						    		var html = "";
						    		if(template){
						    			// get html from template and replace properties with data
						    			html = app.replaceItemHTML(template.element.outerHTML,data); 
						    		} else if(data && data.html){
						    			html = app.replaceItemHTML(data.html,data); 
						    		} else {
						    			html = app.getItemHTML(id,type,data);
						    		}
						    		
						    		var beforeId = null;
						    		if(template){
						    			beforeId = template.id;
						    		} 
						    		if(data && data.beforeId){
						    			beforeId = data.beforeId;
						    		} 
						    		var added = false;
						    		if(beforeId){
						    			var sibling = app.getItem(beforeId);
						    			if(sibling && sibling.element){
						    				jQuery(sibling.element).before(html);
						    				added = true;
						    			}
						    		} else if(data && data.afterId){
						    			var sibling = app.getItem(data.afterId);
						    			if(sibling && sibling.element){
						    				jQuery(sibling.element).after(html);
						    				added = true;
						    			}
						    		}
						    		if(!added){
							    		jQuery('.items-inner').append(html);				    			
						    		}

						    		var newItem = app.getItem(id);
									// remove the 'template' class
									if(template){
										jQuery(newItem.element).removeClass('template');
									}

						    		if(data && data.action){
						    			newItem.setAction(data.action);
						    			jQuery(newItem.element).click(function(){
											app.getItem(app.getIdFromDOMId(this.id)).callActions();		    				
						    			})
						    		}

						    		// add the on-change event handler to form items to make sure app variables work properly
						    		if(newItem && newItem.isFormItem()){
						    			jQuery(newItem.element).find(':input').change(function(){
						    				var jEl = jQuery(this);
						    				app.setVariable(jEl.attr('name'),jEl.val())
						    			})
						    		}


									this.clearItemsCache();

						    	} else if(this.getType() == "icon"){
						    		if(!index)
						    			index = -1;
						    		if(!rowHTML)
						    			rowHTML = this.getIconRowHTML(null,null,data);
						    		
						    		this.getTable().insertRow(index).outerHTML = rowHTML;

									this.clearItemsCache();
						    	} 


						    	setTimeout(function(){
				                    app.refreshScroll();
				                },100);

						    	return this;


						    }





						    this.clearItemsCache = function(){
						    	// Clears the `items` hash (local cache)
						    	this.items = {};
						    }



							this.containsClass = function(className){
								// Returns true if this `Screen` contains the custom class `className`

								return this.element.classList.contains(className);

							}



							this.countColumns = function(){
								// Returns the number of columns (for Icon screen types)
						    	if(this.getType() == "icon"){
						    		return this.getTable().rows[0].cells.length
						    	}

							}

							this.disableScroll = function(){
								// Disables the defult scrolling of the screen. 
								// All the content is at fixed position, and content below the fold remains hidden. 
								// Returns `this`

								this.element.getElementsByClassName('items')[0].retrieve('scroll').disable();

								// To do this using event handler on the screen
								// app.phone.addEvent('screen',function(id,screen){
								//  	screen.getElement('.items').retrieve('scroll').disable();
								// });

								return this;
							}


							this.enableScroll = function(){
								// Enables the defult scrolling of the screen. 
								// Returns `this`

								this.element.getElementsByClassName('items')[0].retrieve('scroll').enable()
								return this;
							}


							this.getBackgroundColor = function(){
								// Returns the `backgroundColor` of this `Screen`

								var items = app.findClass(this.element,"items")
							
								return items.style.backgroundColor;

							}




							this.getData = function(){
								// Returns the Data object for this screen

								if(!this.data)
									this.data = new AppShedData(this.id);

								return this.data;
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



							this.getLocalProperty = function(property){
								// Returns the value for `property` from `localStorage` for this screen

								return this.getLocalStorage()[property];

							}



							this.getLocalStorage = function(){
								// Returns the object stored in localStorage for this screen

								if(typeof localStorage[this.id] == "undefined")
									localStorage[this.id] = JSON.stringify({ScreenId: this.id, data: []})

								return JSON.parse(localStorage[this.id]);


							}



							this.getNextId = function(testId){
								// Returns the next valid (unused) `id`. Used when creating `Items` dynamically.
								// The first ID for a screen is the Screen.id + 1
								try{

									if(!testId)
										testId = +(this.id) + 1;

									var items = this.getItems();
									var keys = Object.keys(items);

									if(!keys.length)
										return testId;
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

								if(!color || color == 'random')
									color = app.getRandomColor();

								var items = app.findClass(this.element,"items")
							
								items.style.backgroundImage = 'none';
								items.style.backgroundColor = color;

								return this
							}





							this.setBackgroundImage = function(src,method){
								// Sets the `backgroundImage` of this `Screen` to `src`. 
								// Special case: if `src` is omitted, sets the background to the original background image
								// Optional `method` determines the layout
								// One of: `fit` | `fill` | `stretch` | `center` | `tile`
								// `method` defaults to `fit` 

								if(!method)
									method = 'fill'

								if(!src && this.originalBackgroundImage > "")
									src = this.originalBackgroundImage;

								var items = app.findClass(this.element,"items")
								
								// first time, save original
								if(!this.originalBackgroundImage)
									this.originalBackgroundImage = String(items.style.backgroundImage).replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');

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




							this.setLocalProperty = function(property,value){
								// Saves the `value` for `property` in `localStorage` for this screen
								// Returns `bool true` if successful

								var obj = this.getLocalStorage()
								obj[property] = value;

								return this.setLocalStorage(obj);
							}



							this.setLocalStorage = function(obj){
								// Saves the `obj` to in localStorage for this screen
								// `obj` must have a valid format
								//    Required: ScreenId (int)
								//    Required: data (Array)
								// Returns `bool true` if the process was successful

								try{

									if(obj && typeof obj === "object"){
										if(!isNaN(parseInt(obj.ScreenId))){
											if(Array.isArray(obj.data)){

												// obj passes all the tests
												// Save to local Storage

												localStorage[this.id] = JSON.stringify(obj)

												return true;
											}
										}
									}
								} catch(er){
								}
								return false;

							}



							this.setTitle = function(str){
								// Sets the `Title` of the screen to `str`.
								// Returns the `Screen` object

								jQuery(this.element).find('.header .title span').text(str)
								
								return this;
							}



							this.setTitleBackgroundColor = function(color){
								// Sets the `backgroundColor` of this `Screen Title`  to `color`

								var header = app.findClass(this.element,"header")

								header.style.backgroundImage = 'none';
								header.style.backgroundColor = color;

								return this;
							}




							this.setTitleColor = function(color){
								// Sets the `backgroundColor` of this `Screen Title`  to `color`

								jQuery(".header .title").css("color",color);

								return this;
							}





							this.toString = function(){
								// Returns a string represenation of the `Screen`
								return "AppShed Object: Screen ("+this.id+")"
							}





						};



























































						app.utils = {

							compare: function (actual, needed, method, range) {

								if (method == 'equal') { // =
									if (actual == needed || ( ((needed - range) <= actual) && (actual <= (needed + range)))) {
							            return true;
							        }
							    }
							    else if (method == 'notequal') { //!=
							        if ((range && ((actual < (needed - range)) || ((needed + range) < actual ))) ||  (!range && (needed != actual))) {
							            return true;
							        }
							    }
							    else if (method == 'lessthan') { //<
							        if (actual < needed) {
							            return true;
							        }
							    }
							    else if (method == 'greaterthan') { //>
							        if (actual > needed) {
							            return true;
							        }
							    }
							    else if (method == 'lessthanorequalto') { //<=
							        if (actual <= needed) {
							            return true;
							        }
							    }
							    else if (method == 'greaterthanorequalto') {
							        if (actual >= needed) {
							            return true;
							        }
							    }
							    return false;
							},


							getObjProp: function(obj,propName,type){
								// return a 'safe' value as a property from an object
								// `format` (optional) defines the Type to return. Default `string`
								// `format` can be: 0 (string - safe value is ""), 1 (number - safe value is 0)
								
								var type = type || 0;

								// String
								if(type == 0){
									if( typeof obj === "object" && obj.hasOwnProperty(propName)){
										return ''+obj[propName];
									}
									return '';
								}

								// Number
								if(type == 1){
									if( typeof obj === "object" && obj.hasOwnProperty(propName) && !isNaN(obj[propName])){
										return +obj[propName];
									}
									return 0;
								}

								return '';
							},




							setJSField: function(code,callback){
		

								// wait for the box to be ready
								// the interval will continue for a period of time, to keep checking the editor has the correct value
								// neccesary because some glitch causes the value to be lost in random instances after some timeout		

								// make sure we are working with an empty string at least
								var code = code || "";

								app.setInterval(function(){
									try{

										if(document.id('action_js')){

											var ed = document.id('action_js').retrieve('editor');

							//console.warn('setJSField ed',ed)				

											if(typeof ed === "object"){


												// Check it is set
												var check = (ed.getValue() == code);
							//console.warn('setJSField code check ',check)				
												if(check){
													// if code already set, break 
													// cancel interval after a timeout
													setTimeout(function(){
														app.clearInterval("app-game-addItem-action");
														if(callback){
															callback.call();
														}
													},1000);
													return;
												}

							//console.warn('setJSField set code ')				

												// set the value
												ed.setValue(code); 



											}
										}

									}catch(er){
console.warn('ERROR setJSField interval waiting for editor',er)				
									}

								},200,10000,"app-game-addItem-action");	
							},




							stringToArray: function(str){
								// Returns an array, from `str`
								// Error handling ensures that an object is always returned, even if empty
								

								try{
									var arr = JSON.parse(str)
									
									if( Array.isArray(arr)){
										return arr;
									}

								}catch(er){
								};

								try{
									// try adding braces
									var arr = JSON.parse("[" + str + "]");
									if( Array.isArray(arr)){
										return arr;
									}
								}catch(er){
								};

								return [];

							},


							stringToObject: function(str){
								// Returns an object, from `str`
								// Error handling ensures that an object is always returned, even if empty
								
								var obj = {};

								try{
									var objS;
									eval("objS = "+str)
									
									if( typeof objS === "object" ){
										obj = objS;
									}
								
								}catch(er){
								};

								return obj;

							}






						};























						app.stats = {	

							max: function(array) {
								return Math.max.apply(null, array);
							},
							
							min: function(array) {
								return Math.min.apply(null, array);
							},
							
							range: function(array) {
								return app.stats.max(array) - app.stats.min(array);
							},
							
							midrange: function(array) {
								return app.stats.range(array) / 2;
							},

							sum: function(array) {
								var num = 0;
								for (var i = 0, l = array.length; i < l; i++) num += array[i];
								return num;
							},
							
							mean: function(array) {
								return app.stats.sum(array) / array.length;
							},
							
							median: function(array) {
								array.sort(function(a, b) {
									return a - b;
								});
								var mid = array.length / 2;
								return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
							},
							
							modes: function(array) {
								if (!array.length) return [];
								var modeMap = {},
									maxCount = 0,
									modes = [];

								array.forEach(function(val) {
									if (!modeMap[val]) modeMap[val] = 1;
									else modeMap[val]++;

									if (modeMap[val] > maxCount) {
										modes = [val];
										maxCount = modeMap[val];
									}
									else if (modeMap[val] === maxCount) {
										modes.push(val);
										maxCount = modeMap[val];
									}
								});
								return modes;
							},
							
							variance: function(array) {
								var mean = app.stats.mean(array);
								return app.stats.mean(array.map(function(num) {
									return Math.pow(num - mean, 2);
								}));
							},
							
							standardDeviation: function(array) {
								return Math.sqrt(app.stats.variance(array));
							},
							
							meanAbsoluteDeviation: function(array) {
								var mean = app.stats.mean(array);
								return app.stats.mean(array.map(function(num) {
									return Math.abs(num - mean);
								}));
							},
							
							zScores: function(array) {
								var mean = app.stats.mean(array);
								var standardDeviation = app.stats.standardDeviation(array);
								return array.map(function(num) {
									return (num - mean) / standardDeviation;
								});
							}
						};

						// Function aliases:
						app.stats.average = app.stats.mean;
						app.stats.avg = app.stats.mean;

































































							app.assets = {


								// A collection of Base64 encoded assets for use within apps (image and audio)
								// Used mainly for offline functionality where dynamic loading of assets is required
								
								// Some sound effects obtained from https://www.zapsplat.com
								

								atlas: {

								},




								audio: {

									// zapsplat_household_rubber_glove_pull_finger_release_002_22249
									flick: 'data:audio/mp3;base64,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',




									// zapsplat_cartoon_jump_jaw_harp_edited_006_17212-mp3-Base64
									jump: 'data:audio/mp3;base64,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',





									shoot: 'data:audio/mp3;base64,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',




									levelComplete: 'data:audio/mp3;base64,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'

								},






								image: {


								},






								json: {

									joystick: {"frames": [  { 	"filename": "base", 	"frame": {"x":2,"y":2,"w":280,"h":280}, 	"rotated": false, 	"trimmed": false, 	"spriteSourceSize": {"x":0,"y":0,"w":280,"h":280}, 	"sourceSize": {"w":280,"h":280} }, { 	"filename": "button1-down", 	"frame": {"x":2,"y":284,"w":132,"h":132}, 	"rotated": false, 	"trimmed": false, 	"spriteSourceSize": {"x":0,"y":0,"w":132,"h":132}, 	"sourceSize": {"w":132,"h":132} }, { 	"filename": "button1-up", 	"frame": {"x":136,"y":284,"w":132,"h":132}, 	"rotated": false, 	"trimmed": false, 	"spriteSourceSize": {"x":0,"y":0,"w":132,"h":132}, 	"sourceSize": {"w":132,"h":132} }, { 	"filename": "button2-down", 	"frame": {"x":270,"y":284,"w":132,"h":132}, 	"rotated": false, 	"trimmed": false, 	"spriteSourceSize": {"x":0,"y":0,"w":132,"h":132}, 	"sourceSize": {"w":132,"h":132} }, { 	"filename": "button2-up", 	"frame": {"x":284,"y":138,"w":132,"h":132}, 	"rotated": false, 	"trimmed": false, 	"spriteSourceSize": {"x":0,"y":0,"w":132,"h":132}, 	"sourceSize": {"w":132,"h":132} }, { 	"filename": "button3-down", 	"frame": {"x":418,"y":138,"w":132,"h":132}, 	"rotated": false, 	"trimmed": false, 	"spriteSourceSize": {"x":0,"y":0,"w":132,"h":132}, 	"sourceSize": {"w":132,"h":132} }, { 	"filename": "button3-up", 	"frame": {"x":404,"y":272,"w":132,"h":132}, 	"rotated": false, 	"trimmed": false, 	"spriteSourceSize": {"x":0,"y":0,"w":132,"h":132}, 	"sourceSize": {"w":132,"h":132} }, { 	"filename": "stick", 	"frame": {"x":404,"y":2,"w":134,"h":134}, 	"rotated": false, 	"trimmed": false, 	"spriteSourceSize": {"x":0,"y":0,"w":134,"h":134}, 	"sourceSize": {"w":134,"h":134} }], "meta": { 	"app": "http://www.codeandweb.com/texturepacker", 	"version": "1.0", 	"image": "arcade-joystick.png", 	"format": "RGBA8888", 	"size": {"w":552,"h":418}, 	"scale": "1", 	"smartupdate": "$TexturePacker:SmartUpdate:10346054b252ab14bb310a8d6bd547c8:95c6dd72d4153222351a2981c3dd9889:a263a0553fca6de61a66e4e620c067cc$" } }
								}

							};

































































































































































































































						// Phaser Game object
						// The default variable for Phaser games is 
						// 
						//      window.game
						//      
						// The appshed object for game properties and methods is
						// 
						// 		app.game
						// 		
						// So the code below can be a bit confusing. 
						// 
						// 		app.game != game   !!!!
						// 		
						// 		
						// JSON object
						// Various Phaser game objects can have a JSON string in the Text field of the item
						// This holds various properties and methods that can be used to configure the game
						// These Properties and Methods correlate to Phaser's properties and methods
						// 





						window.game = {}; // this will hold the Phaser game object
						window.player = {}; // in most games this is used for the main character

							
						
						app.addStyles('.box2 .content .icon h3{overflow: inherit; white-space: inherit}')

						
						app.game = {

							_collectionNames: ["preload","create","update","render","audio","collider","config","group","image","joystick","keyboard","overlap","otherFunction","pointer","settings","sprite","staticGroup","text","tileset","tileSprite"],
							_default_width: 800,
							_default_height: 600,
							_delayActionTypes: ["overlap","collider","joystick","keyboard","otherFunction","pointer","update"],
							_gyroPreviousH: 0, // remember the last gyro movement, horizontal and vertical
							_gyroPreviousV: 0,
							_installed: false,
							_menuAdded: false,
							_funcs: [], // an array to hold functions that run during the game, e.g. update()
							_funcsObjectList: "", // holds a string listing all the objects for quick ref in funcs
							_funcsObjectListDone: false, // indicates the _funcsObjectList has been prepared
							_guis: {}, // place to hold the gui objects 
							_ide: "objects", // what state the IDE is in
							_pause: false, // hidden property to pause wihin the update
							_onPause: null, // function to run when _pause detected
							_requireRestart: false, // If true, the game will be stopped and restarted when viewing game. This flag set when editing objects
		    				_toolTypes: [],					
							_validConfigKeys: ["width","height","zoom","resolution","type","parent","canvas","canvasStyle","context","scene","seed","title","url","version","autoFocus","input","disableContextMenu","banner","dom","fps","render","backgroundColor","callbacks","loader","images","physics","plugins"], // Valid keys that can be used in the Game Config
							_visibleTypes: ["image","sprite","text","spriteSheet","tileSprite"],

							this: null, // holds the `this` from the scene
							//cursors: null, // access the keyboard cursors keys
							width: this._default_width,
							height: this._default_height,
							
							//keyObjects: {}, // object holding arrays of Keyboard objects for matching  keys, allows for multiple Objects to be assiciated to one key
							keys: {}, // hold all the Phaser Key objects
							renderer: null,
							parent: null,
							state: null,
							stateName: "Game",

							isStickDown: true, 

							//messageText: null,

							//enableJoystick: true,
							enableGyro: true,


							// ===============================================================================
							// Containers for the Game Objects and Preperties

						    preload: {},
						    create: {},
						    update: {},
						    render: {},

							score: 0,
							scoreText: "",

							// Objects to hold game assets
							audio: {}, 
							cameraAdjust: {tileSprite: {}, sprite: {}}, // objects that need to be adjusted relative to the camera
							collider: {}, // holds details of all collider items
							collision: {}, // holds the state of collissions in the format collision['object1_object2'] = true
							config: {},						
							group:  {},
						    image: {},
						    joystick: {},
						    keyboard: {},
						    keyCode: {}, // object holding arrays of Javascript for each key, allows for multiple scripts to be assiciated to every key
						    overlap: {},
							otherFunction: {}, // holds function items
						    pointer: {},
						    settings: {}, // Holds particular settings for a game. Was config{}, need to rename to settings{} because Phaser 3 uses game.config{}
							sprite: {},
							staticGroup:  {},
							text: {},
							tileset: {},
							tileSprite: {},


						// ===============================================================================

						    _bodyPropertiesDescriptor: {
								"acceleration": {vector: true}, 
								"allowDrag": {}, 
								"allowGravity": {}, 
								"allowRotation": {}, 
								"angularAcceleration": {},  
								"angularVelocity": {}, 
								"bounce": {vector: true},  
								"checkCollision": {},
								"collideWorldBounds": {}, 
								"debugBodyColor": {}, 
								"deltaMax": {vector: true},  
								"debugShowBody": {}, 
								"debugShowVelocity": {}, 
								"drag": {vector: true},  
								"enable": {}, 
								"friction": {vector: true},  
								"gravity": {vector: true},  
								"immovable": {}, 
								"isCircle": {}, 
								"mass": {},  
								"maxVelocity": {vector: true},  
								"moves": {}, 
								"useDamping": {}, 
								"velocity": {vector: true} 
					    	
						    },




		                    warnings: [
		                    	{
		                    		type: 0,
		                    		name: "General",
		                    		initial: "There is an error in your code.",
		                    		count: 0
		                    	},                    	
		                    	{
		                    		type: 1,
		                    		name: "JSON",
		                    		initial: "Some of your JSON has errors.",
		                    		count: 0
		                    	},
		                    	{
		                    		type: 2,
		                    		name: "Game Setup",
		                    		initial: "Your Game Setup has errors.",
		                    		count: 0
		                    	},
		                    	{
		                    		type: 3,
		                    		name: "Style",
		                    		initial: "The Style object has errors.",
		                    		count: 0
		                    	},
		                    	{
		                    		type: 4,
		                    		name: "Keyboard",
		                    		initial: "The Keyboard object has errors.",
		                    		count: 0
		                    	}                    	
		                    ],



							// an array of sections and tools for the Game panel
							_tools: [
								{
									name: "Game Setup",
									icon: "tab",
									tools: [
										{
											name: "Game Config",
											icon: "icon-play-circle",
											itemTitle: "gameConfig",
											itemImageId: 8027100,
											fixedImage: true,
											itemText: '{"width": 350,"height": 450,"data": {"debug": false,"origin": 0.5,"gravity": {"x": 0,"y": 0},"bounds": {"width": 350,"height": 450,"x": 0,"y": 0}}}',
											itemCustomClass: "phaser phaser-setup phaser-config",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "LyoKVGhpcyBpcyB0aGUgbWFpbiBzY3JpcHQgb2YgdGhlIGdhbWUuClRoZSBmaXJzdCBsaW5lIGxhdW5jaGVzIHRoZSBnYW1lLCBhbmQgY29ubmVjdHMgYWxsIHRoZSBHYW1lIE1ha2VyIG9iamVjdHMgdG8gdGhlIFBoYXNlciBlbmdpbmUuClRoZSBmaXJzdCBsaW5lIG11c3Qgbm90IGJlIGNoYW5nZWQgb3IgcmVtb3ZlZDogZXZhbChhcHAuZ2FtZS5ydW4oKSk7CgpBbnkgdmFsaWQgUGhhc2VyMyBKYXZhU2NyaXB0IGNhbiBiZSBhZGRlZCB0byB0aGlzIHNjcmlwdC4gVGhpcyBpbmNsdWRlcyB2YXJpYWJsZXMgYW5kIG1ldGhvZHMsIGFuZCBldmVuIGNsYXNzZXMuCihTZWUgd3d3LnBoYXNlci5pbyBmb3IgZnVsbCBkb2N1bWVudGF0aW9uIG9mIFBoYXNlcjMpCgpUaGUgbWFpbiBtZXRob2RzIG9mIGFueSBQaGFzZXIgZ2FtZSBhcmU6CiAgcHJlbG9hZCgpCiAgY3JlYXRlKCkKICB1cGRhdGUoKQogIHJlbmRlcigpCiAgClRoZXNlIG1ldGhvZHMgY2FuIGJlIHBvcHVsYXRlZCBpbiB0aGlzIHNjcmlwdC4gQnV0IHRoZXkgYXJlIG9wdGlvbmFsIC0gdGhpcyBzY3JpcHQgZG9lcyBub3QgbmVlZCB0byBpbmNsdWRlIGFueSBjb2RlLgoKVGhlIEdhbWUgT2JqZWN0cyBhbHNvIGNvbnRhaW4gY29kZSBmb3IgdGhlIGdhbWUuClRoZSBHYW1lIE1ha2VyIGVuZ2luZSBjb21iaW5lcyB0aGUgY29kZSBmcm9tIHRoaXMgc2NyaXB0LCB3aXRoIGFsbCB0aGUgR2FtZSBPYmplY3RzLCB0byBjcmVhdGUgdGhlIGZpbmFsIGdhbWUgY29kZS4KKi8KCgovLyBMYXVuY2ggdGhlIGdhbWUKZXZhbChhcHAuZ2FtZS5ydW4oKSk7CgoKLy8gRGVmYXVsdCBQaGFzZXIgbWV0aG9kcy4gCgpmdW5jdGlvbiBwcmVsb2FkICgpCnsKCn0KCgpmdW5jdGlvbiBjcmVhdGUgKCkKewoJCn0KCgpmdW5jdGlvbiB1cGRhdGUgKCkKewoKfQoKCmZ1bmN0aW9uIHJlbmRlcigpCnsKCn0KCgo="


											}
										},


								
										{
											name: "Group",
											icon: "icon-th-list",
											itemTitle: "group1",
											itemImageId: 7963111,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-setup phaser-group",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Static Group",
											inactive: false,
											hidden: true,
											icon: "icon-th-list",
											itemTitle: "staticGroup1",
											itemImageId: 7963111,
											fixedImage: true,
											itemText: '{"data": {"rows": 4,"cols": 5,"offsetX": 100,"offsetY": 100,"spacingX": 32,"spacingY": 32}}',
											itemCustomClass: "phaser phaser-setup phaser-staticGroup",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gIENyZWF0ZSBhIGdyaWQgb2YgIGJyaWNrcyAKCgpmb3IodmFyIGkgPSAwOyBpPCBkYXRhLmdldCgncm93cycpOyBpKyspewkKCWZvcih2YXIgaiA9IDA7IGogPCBkYXRhLmdldCgnY29scycpOyBqKyspewoJCS8vIENyZWF0ZSBhIHNwcml0ZSB3aXRoaW4gdGhlIHN0YXRpY0dyb3VwCgkJLy8gdXNpbmcgdGhlIGF0dHJpYnV0ZXMgb2YgaW1hZ2UxCgkJdmFyIHNwcml0ZSA9IG9iamVjdC5jcmVhdGUoCgkJCWRhdGEuZ2V0KCdvZmZzZXRYJykrKGoqZGF0YS5nZXQoJ3NwYWNpbmdYJykpLAoJCQlkYXRhLmdldCgnb2Zmc2V0WScpKyhpKmRhdGEuZ2V0KCdzcGFjaW5nWScpKSwKCQkJJ2ltYWdlMScpOwoJCXNwcml0ZS5zZXRTaXplKGltYWdlMS53aWR0aCxpbWFnZTEuaGVpZ2h0KTsKCQlzcHJpdGUuc2V0RGlzcGxheVNpemUoaW1hZ2UxLndpZHRoLGltYWdlMS5oZWlnaHQpOwoJfQp9"
											}
										},

										{
											name: "Camera",
											inactive: true,
											icon: "icon-facetime-video",
											itemTitle: "camera1",
											itemImageId: 0,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-setup phaser-camera",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										}		
									]
								},
								{
									name: "Sprites",
									icon: "standard",
									tools: [
										{
											name: "Image",
											icon: "icon-picture",
											itemTitle: "image1",
											itemImageId: 7957318,
											itemText: '{"x": 41,"y": 136,"width": 32,"height": 32,"group": ""}',
											itemCustomClass: "phaser phaser-object phaser-image",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Sprite",
											icon: "icon-star",
											itemTitle: "sprite1",
											itemImageId: 7957354,
											itemText: '{"x": 175,"y": 390,"width": 22,"height": 22,"group": "","body": {"collideWorldBounds": true,"bounce": {"x": 1,"y": 1}}}' ,
											itemImage: "http://appshed-id-images.s3-website-eu-west-1.amazonaws.com/6657056",
											itemCustomClass: "phaser phaser-object phaser-sprite",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gVGhpcyBpcyBhIHNhbXBsZSBKYXZhU2NyaXB0IHNuaXBwZXQgdG8gZGVtb25zdHJhdGUgdGhlIGFjdGlvbiBvbiBhIFNwcml0ZQovLyBUaGlzIEFjdGlvbiBpcyBjYWxsZWQgb25jZSBpbiB0aGUgZ2FtZSAiY3JlYXRlKCkiIG1ldGhvZC4KLy8gVGhlIGZvbGxvd2luZyB2YXJpYWJsZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGlzIGNvbnRleHQ6Ci8vIAlvYmplY3QgLSB0aGUgU3ByaXRlIGdhbWUgb2JqZWN0LCBpLmUuIGFwcC5nYW1lLnNwcml0ZVsidGhpc05hbWUiXQovLyAJZGF0YSAtIHRoZSBkYXRhIG9iamVjdAovLyAgdGhpcyAtIHRoZSBQaGFzZXIgZ2FtZSBvYmplY3QKCgoKLy8gU2V0IGEgdmFyaWFibGUgdG8gc2hvdyBpZiB0aGUgYmFsbCBpcyBvbiB0aGUgcGxheWVyCgpvYmplY3Quc2V0RGF0YSgnb25wbGF5ZXInLCB0cnVlKTs="
											}

										},
										{
											name: "Sprite Sheet",
											icon: "icon-user",
											itemTitle: "player",
											itemImageId: 8641124,
											itemText: '{"x": 175,"y": 422,"width": 104,"height": 24,"group": "","body": {"immovable": true}}',
											itemCustomClass: "phaser phaser-object phaser-spriteSheet",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Tile Sprite",
											icon: "icon-cloud",
											itemTitle: "tileSprite1",
											itemImageId: 7973547,
											itemText: '{"x": 175,"y": 225,"width": 350,"height": 450,"group": "group1"}',
											itemCustomClass: "phaser phaser-object phaser-tileSprite",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										
										{
											name: "Audio",
											icon: "icon-volume-up",
											itemTitle: "audio1",
											itemImageId: 7973689,
											fixedImage: true,
											itemText: '{}',
											itemCustomClass: "phaser phaser-object phaser-audio",
											helpText: '<div class="warning">You must select the Sound File (Action tab) every time you edit an audio object.</div>',
											action: {
												value: "sound",
												content: 148431
											}
										},
										{
											name: "Text",
											icon: "icon-font",
											itemTitle: "score",
											itemImageId: 7974003,
											fixedImage: true,
											itemText: '{"x": 130,"y": 10,"text": "Score: 0","group": ""}',
											itemCustomClass: "phaser phaser-object phaser-text",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										}
									]
								},


								{
									name: "Graphics",
									icon: "advanced",
									tools: [			
										{
											name: "Square",
											inactive: true,
											icon: "icon-unchecked",
											itemTitle: "square1",
											itemImageId: 8026970,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-graphic phaser-square",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Circle",
											inactive: true,
											icon: "icon-adjust",
											itemTitle: "circle1",
											itemImageId: 8026970,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-graphic phaser-circle",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Rectangle",
											inactive: true,
											icon: "icon-stop",
											itemTitle: "rectangle1",
											itemImageId: 8026970,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-graphic phaser-rectangle",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Ellipse",
											inactive: true,
											icon: "icon-eye-open",
											itemTitle: "ellipse1",
											itemImageId: 8026970,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-graphic phaser-ellipse",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Line",
											inactive: true,
											icon: "icon-minus",
											itemTitle: "line1",
											itemImageId: 8026970,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-graphic phaser-line",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Arc",
											inactive: true,
											icon: "icon-chevron-up",
											itemTitle: "arc1",
											itemImageId: 8026970,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-graphic phaser-arc",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Polygon",
											inactive: true,
											icon: "icon-bookmark",
											itemTitle: "polygon1",
											itemImageId: 8026970,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-graphic phaser-polygon",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										}
									]
								},
								{
									name: "Events",
									icon: "form",
									tools: [
										{
											name: "Collider",
											icon: "icon-resize-small",
											itemTitle: "collider1",
											itemText: '{"a": "sprite1","b": ["staticGroup1","image1"]}',
											itemImageId: 7963106,
											fixedImage: true,
											itemCustomClass: "phaser phaser-event phaser-collider",
											helpText: "The special properties (a & b) define the Objects or Groups involved in the collision.",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gVGhpcyBpcyBhIHNhbXBsZSBKYXZhU2NyaXB0IHNuaXBwZXQgdG8gZGVtb25zdHJhdGUgdGhlIHVzZSBvZiBhIENvbGxpZGVyIEFjdGlvbgovLyBUaGlzIEFjdGlvbiBpcyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgY29saXNzaW9uIGJldHdlZW4gImEiIGFuZCAiYiIgb2NjdXJzLgovLyBUaGUgZm9sbG93aW5nIHZhcmlhYmxlcyBhcmUgYXZhaWxhYmxlIGluIHRoaXMgY29udGV4dDoKCi8vIG9iamVjdCAtIFRoaXMgb2JqZWN0Ci8vIHRoaXMgLSB0aGUgR2FtZSBPYmplY3QKLy8gCW9iamVjdEEgLSBUaGUgZmlyc3Qgb2JqZWN0IGludm9sdmVkIGluIHRoZSBjb2xsaXNpb24KLy8gCW9iamVjdEIgLSBUaGUgc2Vjb25kIG9iamVjdCBpbnZvbHZlZCBpbiB0aGUgY29sbGlzaW9uCgoKCi8vIEluY3JlbWVudCB0aGUgc2NvcmUgYnkgMQovLyBJZiB0aGVyZSBpcyBhIFRleHQgT2JqZWN0IGNhbGxlZCBzY29yZSwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGdldCB1cGRhdGVkIHdpdGggdGhlIGFwcC5nYW1lLnNjb3JlCmFwcC5nYW1lLnNjb3JlICs9IDE7CgoKLy8gUGxheSBhIHNvdW5kIAp0cnl7CglhdWRpbzEucGxheSgpOwp9Y2F0Y2goZXIpe30KCgoKLy8gRGlzYWJsZSB0aGUgb2JqZWN0IHRoYXQgd2FzIGhpdApvYmplY3RCLmRpc2FibGVCb2R5KHRydWUsIHRydWUpOwoKLy8gcmVidWlsZCB0aGUgZ3JpZCBpZiBhbGwgb2JqZWN0cyBoaXQJCnRyeXsKICBpZihzdGF0aWNHcm91cDEgJiYgc3RhdGljR3JvdXAxLmNvdW50QWN0aXZlKCkgPT09IDApewoJc3RhdGljR3JvdXAxLmNoaWxkcmVuLmVhY2goZnVuY3Rpb24gKHNwcml0ZSkgewoJCS8vIEVuYWJsZSB0aGUgYm9keSBvZiBlYWNoIGJsb2NrLCBhbmQgbWFrZSBpdCB2aXNpYmxlICh0cnVlKSAKCQlzcHJpdGUuZW5hYmxlQm9keShmYWxzZSwgMCwgMCwgdHJ1ZSwgdHJ1ZSk7CQkKCX0pOwogIH0KfWNhdGNoKGVyKXt9"
											}
										},
										{
											name: "Overlap",
											icon: "icon-copy",
											itemTitle: "overlap1",
											itemImageId: 7963112,
											fixedImage: true,
											itemText: '{"a": "player","b": "sprite1"}',
											itemCustomClass: "phaser phaser-event phaser-overlap",
											helpText: "The special properties (a & b) define the Objects or Groups involved in the overlap.",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gVGhpcyBpcyBhIHNhbXBsZSBKYXZhU2NyaXB0IHNuaXBwZXQgdG8gZGVtb25zdHJhdGUgdGhlIHVzZSBvZiBhbiBPdmVybGFwIEFjdGlvbgovLyBUaGlzIEFjdGlvbiBpcyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgb2JqZWN0cyAiYSIgYW5kICJiIiBvdmVybGFwLgovLyBUaGUgZm9sbG93aW5nIHZhcmlhYmxlcyBhcmUgYXZhaWxhYmxlIGluIHRoaXMgY29udGV4dDoKCi8vIG9iamVjdCAtIHRoaXMgb2JqZWN0Ci8vIHRoaXMgLSB0aGUgR2FtZSBPYmplY3QKLy8gCW9iamVjdEEKLy8gCW9iamVjdEIKCgovLyBwbGF5IGEgc291bmQKaWYoYXVkaW8xKXsKCWF1ZGlvMS5wbGF5KCk7Cn0KCgovLyByZXZlcnNlIHRoZSB2ZWxvY2l0eSBvZiB0aGUgYmFsbC9zcHJpdGUKdHJ5ewkJCQkKCWlmKCFzcHJpdGUxLmdldERhdGEoJ29ucGxheWVyJykpewoJCXNwcml0ZTEuYm9keS52ZWxvY2l0eS55ICo9IC0xOyAKCX0JCn1jYXRjaChlcil7fQoKCi8vIENhbGwgdGhlIE90aGVyIEZ1bmN0aW9uIHRvIGNoYW5nZSB0aGUgYm91bmNlIGFuZ2xlCnRyeXsKCWZ1bmN0aW9uMS5jYWxsKHRoaXMpCn1jYXRjaChlcil7CmNvbnNvbGUud2FybignZnVuY3Rpb24xLmNhbGwodGhpcyknLGVyKQp9Cg=="
											}
										},
										{
											name: "Keyboard",
											icon: "icon-th",
											itemTitle: "w",
											itemImageId: 7965627,
											fixedImage: true,
											itemText: '{"key": "w","data": {"delta": -1}}',
											itemCustomClass: "phaser phaser-event phaser-keyboard",
											helpText: "Valid values for key are: A, ALT, B, BACKSPACE, BACKTICK, BACK_SLASH, C, CAPS_LOCK, CLOSED_BRACKET, COMMA, CTRL, D, DELETE, DOWN, E, EIGHT, END, ENTER, ESC, F, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, FIVE, FORWARD_SLASH, FOUR, G, H, HOME, I, INSERT, J, K, L, LEFT, M, MINUS, N, NINE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, O, ONE, OPEN_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PERIOD, PLUS, PRINT_SCREEN, Q, QUOTES, R, RIGHT, S, SEMICOLON, SEVEN, SHIFT, SIX, SPACE, T, TAB, THREE, TWO, U, UP, V, W, X, Y, Z, ZERO",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gVGhpcyBpcyBhIHNhbXBsZSBKYXZhU2NyaXB0IHNuaXBwZXQgdG8gZGVtb25zdHJhdGUgdGhlIHVzZSBvZiBhIEtleWJvYXJkIEFjdGlvbgovLyBUaGlzIEFjdGlvbiBpcyBjYWxsZWQgZXZlcnkgdGltZSB0aGUga2V5IGlzIHByZXNzZWQuCi8vIFRoZSBrZXkgbXVzdCBiZSBzZXQgaW4gdGhlIHByb3BlcnRpZXM6CgpwbGF5ZXIueSArPSBkYXRhLmdldCgnZGVsdGEnKQ=="
											}
										},
										{
											name: "Pointer",
											inactive: false,
											icon: "icon-arrow-up",
											itemTitle: "pointer1",
											itemImageId: 8640887,
											fixedImage: true,
											itemText: '{"on_pointerdown": true,"on_pointerdownoutside": false,"on_pointermove": false,"on_pointerout": false,"on_pointerover": false,"on_pointerup": false,"on_pointerupoutside": false,"object_name": "","data": {}}',
											itemCustomClass: "phaser phaser-event phaser-pointer",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gSWYgdGhlIHBvaW50ZXIgaXMgZG93biwgc2VuZCB0aGUgYmFsbCBvZmYgYnkgc2V0dGluZyB4IGFuZCB5IHZlbG9jaXR5LgppZiAoc3ByaXRlMS5nZXREYXRhKCdvbnBsYXllcicpKQp7CglzcHJpdGUxLnNldFZlbG9jaXR5KC03NSwgLTMwMCk7CgkKCS8vIFNhdmUgdGhlIGRhdGUgdG8gc2hvdyB0aGF0IHRoZSBzcHJpdGUgaXMgbm8gbG9uZ2VyIG9uIHRoZSBwbGF5ZXIuCglzcHJpdGUxLnNldERhdGEoJ29ucGxheWVyJywgZmFsc2UpOwp9Cg=="
											}
										},
										{
											name: "Joystick",
											inactive: false,
											icon: "icon-hand-up",
											itemTitle: "joystick1",
											itemImageId: 8620863,
											fixedImage: true,
											itemText: '{"on_up": true,"on_down": true,"on_left": true,"on_right": true,"on_up_left": true,"on_up_right": true,"on_down_left": true,"on_down_right": true,"base_color": "0x888888","base_alpha": 0.2,"thumb_color": "0x101010","thumb_alpha": 0.2,"force_min": 10,"radius": 40,"data": {}}',
											itemCustomClass: "phaser phaser-event phaser-joystick",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gVGhpcyBpcyBhIHNhbXBsZSBKYXZhU2NyaXB0IHNuaXBwZXQgdG8gZGVtb25zdHJhdGUgdGhlIHVzZSBvZiBhIEpveXN0aWNrIEFjdGlvbgovLyBUaGlzIEFjdGlvbiBpcyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgam95c3RpY2sgaXMgdXBkYXRlZC4KLy8gVGhlIERhdGEgUHJvcGVydGllcyBkZWZpbmUgd2hlbiB0aGlzIGFjdGlvbiBpcyBjYWxsZWQsIChlLmcuIG9uX3VwKQoKCgovLyBTZXQgdGhlIHBsYXllci54IHRvIGJlIG9mZnNldCBmcm9tIHRoZSBtaWRwb2ludAovLyBhdCBkb3VibGUgdGhlIGZvcmNlIGFwcGxpZWQgYnkgdGhlIGpveXN0aWNrCnBsYXllci54ID0gdGhpcy5jYW1lcmFzLm1haW4ubWlkUG9pbnQueCArICgyKnRoaXMuam95c3RpY2suZm9yY2VYKTsKCi8vICBLZWVwIHRoZSBwbGF5ZXIueCB3aXRoaW4gY2VydGFpbiBib3VuZHMKcGxheWVyLnggPSBQaGFzZXIuTWF0aC5DbGFtcChwbGF5ZXIueCwgNTIsIDI5OCk7CgoKCgovLyBwbGFjZSB0aGUgYmFsbCBvbiB0aGUgcGxheWVyIGlmIHJlcXVpcmVkIAppZiAoc3ByaXRlMSAmJiBzcHJpdGUxLm9ucGxheWVyKQp7CglzcHJpdGUxLnggPSBwbGF5ZXIueDsKfQ=="
											}
										},
										{
											name: "Gyro",
											inactive: true,
											icon: "icon-fullscreen",
											itemTitle: "gyro1",
											itemImageId: 0,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-event phaser-gyro",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Level Done",
											inactive: true,
											icon: "icon-flag",
											itemTitle: "onLevelDone",
											itemImageId: 0,		
											fixedImage: true,									
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-event phaser-level-done",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Play",
											inactive: true,
											icon: "icon-play",
											itemTitle: "onGamePlay",
											itemImageId: 0,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-event phaser-game-play",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Pause",
											inactive: true,
											icon: "icon-pause",
											itemTitle: "onGamePause",
											itemImageId: 0,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-event phaser-pause",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "End",
											inactive: true,
											icon: "icon-stop",
											itemTitle: "onGameEnd",
											itemImageId: 0,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-event phaser-game-end",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Other Event",
											inactive: true,
											icon: "icon-time",
											itemTitle: "event1",
											itemImageId: 0,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-event phaser-other-event",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										}
									]
								},

								
								{
									name: "Functions",
									icon: "tab",
									tools: [
										{
											name: "Preload",
											icon: "icon-download",
											itemTitle: "preload1",
											itemImageId: 7963107,
											fixedImage: true,
											itemText: '{"data": {"colorBg": "0x000000","colorProgressBox": "0x222222","colorProgressBar": "0x00e300","colorText": "0x00e300"}}',
											itemCustomClass: "phaser phaser-function phaser-preload",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gVGhpcyBpcyBhIHNhbXBsZSBKYXZhU2NyaXB0IHNuaXBwZXQgdG8gZGVtb25zdHJhdGUgdGhlIHVzZSBvZiBhIFByZWxvYWQgQWN0aW9uCi8vIFRoaXMgQWN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBnYW1lIGlzIGxvYWRpbmcgYXNzZXRzLCBpLmUuIHRoZSBwcmVsb2FkKCkgZnVuY3Rpb24uCgovLyBUaGlzIHNhbXBsZSBjb2RlIGNyZWF0ZXMgYSBwcm9ncmVzcyBiYXIgd2hpbGUgaW1hZ2VzIGFuZCBvdGhlciBhc3NldHMgYXJlIGxvYWRlZAoKdmFyIHdpZHRoID0gYXBwLmdhbWUudGhpcy5jYW1lcmFzLm1haW4ud2lkdGgKdmFyIGhlaWdodCA9IGFwcC5nYW1lLnRoaXMuY2FtZXJhcy5tYWluLmhlaWdodDsKCnZhciBib3hXaWR0aCA9IDAuOSp3aWR0aDsKdmFyIGJveEhlaWdodCA9IC4wNSpoZWlnaHQ7CnZhciBib3hNYXJnaW4gPSA1Owp2YXIgc3BhY2luZyA9IDIwOwoKdmFyIGNvbG9yQmcgPSBvYmplY3QuZGF0YS5nZXQoJ2NvbG9yQmcnKSB8fCAweDAwMDAwMDsKdmFyIGNvbG9yUHJvZ3Jlc3NCb3ggPSBvYmplY3QuZGF0YS5nZXQoJ2NvbG9yUHJvZ3Jlc3NCb3gnKSB8fCAweDIyMjIyMjsKdmFyIGNvbG9yUHJvZ3Jlc3NCYXIgPSBvYmplY3QuZGF0YS5nZXQoJ2NvbG9yUHJvZ3Jlc3NCYXInKSB8fCAweDAwZTMwMDsKdmFyIGNvbG9yVGV4dCA9IChvYmplY3QuZGF0YS5nZXQoJ2NvbG9yVGV4dCcpIHx8IDB4MDBlMzAwKS5yZXBsYWNlKC9eMHgvLCIjIik7CgoKdmFyIHhNaWQgPSB3aWR0aC8yOwp2YXIgeU1pZCA9IGhlaWdodC8yCgp2YXIgYmcgPSB0aGlzLmFkZC5ncmFwaGljcygpOwp2YXIgcHJvZ3Jlc3NCb3ggPSB0aGlzLmFkZC5ncmFwaGljcygpOwp2YXIgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5ncmFwaGljcygpOwoKYmcuZmlsbFN0eWxlKGNvbG9yQmcsIDEpOwpiZy5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTsKCnByb2dyZXNzQm94LmZpbGxTdHlsZShjb2xvclByb2dyZXNzQm94LCAxKTsKcHJvZ3Jlc3NCb3guZmlsbFJlY3QoeE1pZC0oYm94V2lkdGgvMiksIHlNaWQtKGJveEhlaWdodC8yKSwgYm94V2lkdGgsIGJveEhlaWdodCk7Cgp2YXIgbG9hZGluZ1RleHQgPSB0aGlzLm1ha2UudGV4dCh7Cgl4OiB3aWR0aCAvIDIsCgl5OiBoZWlnaHQgLyAyIC0gc3BhY2luZywKCXRleHQ6ICdMb2FkaW5nLi4uJywKCXN0eWxlOiB7CgkJZm9udDogJzE2cHggQXJpYWwnLAoJCWZpbGw6IGNvbG9yVGV4dAoJfQp9KTsKbG9hZGluZ1RleHQuc2V0T3JpZ2luKDAuNSwgMC41KTsKCnZhciBwZXJjZW50VGV4dCA9IHRoaXMubWFrZS50ZXh0KHsKCXg6IHdpZHRoIC8gMiwKCXk6IGhlaWdodCAvIDIgK3NwYWNpbmcsCgl0ZXh0OiAnMCUnLAoJc3R5bGU6IHsKCQlmb250OiAnMTJweCBBcmlhbCcsCgkJZmlsbDogY29sb3JUZXh0Cgl9Cn0pOwpwZXJjZW50VGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpOwoKdmFyIGFzc2V0VGV4dCA9IHRoaXMubWFrZS50ZXh0KHsKCXg6IHdpZHRoIC8gMiwKCXk6IGhlaWdodCAvIDIgKyAoc3BhY2luZyoyKSwKCXRleHQ6ICcnLAoJc3R5bGU6IHsKCQlmb250OiAnMTBweCBBcmlhbCcsCgkJZmlsbDogY29sb3JUZXh0Cgl9Cn0pOwphc3NldFRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTsKCnRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCBmdW5jdGlvbiAodmFsdWUpIHsKCXBlcmNlbnRUZXh0LnNldFRleHQocGFyc2VJbnQodmFsdWUgKiAxMDApICsgJyUnKTsKCXByb2dyZXNzQmFyLmNsZWFyKCk7Cglwcm9ncmVzc0Jhci5maWxsU3R5bGUoY29sb3JQcm9ncmVzc0JhciwgMSk7Cglwcm9ncmVzc0Jhci5maWxsUmVjdCh4TWlkLShib3hXaWR0aC8yKSwgeU1pZC0oYm94SGVpZ2h0LzIpLCBib3hXaWR0aCAqIHZhbHVlLCBib3hIZWlnaHQpOwp9KTsKCnRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgZnVuY3Rpb24gKGZpbGUpIHsKCWFzc2V0VGV4dC5zZXRUZXh0KCdMb2FkaW5nIGFzc2V0OiAnICsgZmlsZS5rZXkpOwp9KTsKCnRoaXMubG9hZC5vbignY29tcGxldGUnLCBmdW5jdGlvbiAoKSB7CgkvL2JnLmRlc3Ryb3koKTsKCXByb2dyZXNzQmFyLmRlc3Ryb3koKTsKCXByb2dyZXNzQm94LmRlc3Ryb3koKTsKCWxvYWRpbmdUZXh0LmRlc3Ryb3koKTsKCXBlcmNlbnRUZXh0LmRlc3Ryb3koKTsKCWFzc2V0VGV4dC5kZXN0cm95KCk7Cn0pOwoK"
											}
										},
										{
											name: "Create",
											icon: "icon-repeat",
											itemTitle: "create1",
											itemImageId: 7963108,
											fixedImage: true,
											itemText: '{"data": {"left": true,"right": true,"up": true,"down": false}}',
											itemCustomClass: "phaser phaser-function phaser-create",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gVGhpcyBpcyBhIHNhbXBsZSBKYXZhU2NyaXB0IHNuaXBwZXQgdG8gZGVtb25zdHJhdGUgdGhlIHVzZSBvZiB0aGUgQ3JlYXRlIGZ1bmN0aW9uCi8vIFRoaXMgQWN0aW9uIGlzIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBHYW1lLmNyZWF0ZSgpIGZ1bmN0aW9uLgovLyBNdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhpcyB0eXBlIGNhbiBiZSBhZGRlZAoKLy8gT2JqZWN0cyBhdmFpbGFibGUgYXJlOiAKLy8gIG9iamVjdCAtIHRoaXMgb2JqZWN0IAovLyAgZGF0YSAtIHRoZSBkYXRhIGZvciB0aGlzIG9iamVjdCAgCi8vICB0aGlzIC0gdGhlIEdhbWUgT2JqZWN0CgoKLy8gIEVuYWJsZSB3b3JsZCBib3VuZHMgYmFzZWQgb24gdGhlIGRhdGEgcHJvcGVydGllcwp0aGlzLnBoeXNpY3Mud29ybGQuc2V0Qm91bmRzQ29sbGlzaW9uKAoJZGF0YS5nZXQoJ2xlZnQnKSwKCWRhdGEuZ2V0KCdyaWdodCcpLAoJZGF0YS5nZXQoJ3VwJyksCglkYXRhLmdldCgnZG93bicpCik7CgoKCi8vVGhpcyB2YXJpYWJsZSBpcyBhICJnbG9iYWwiIHRoYXQgaG9sZHMgdGhlIGxhc3QgeCBwb3NpdGlvbiBvZiB0aGUgcGxheWVyLgp3aW5kb3cubGFzdFBsYXllclggPSAxNTU7CgoKCgovLyAgQ3JlYXRlIHNvbWUgYW5pbWF0aW9ucyBmb3Igb3VyIHBsYXllcgp0cnl7CiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7CiAgICAgICAga2V5OiAnbGVmdCcsCiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwbGF5ZXInLCB7IHN0YXJ0OiAwLCBlbmQ6IDMgfSksCiAgICAgICAgZnJhbWVSYXRlOiA1LAogICAgICAgIHJlcGVhdDogLTEKICAgIH0pOwoKICAgIHRoaXMuYW5pbXMuY3JlYXRlKHsKICAgICAgICBrZXk6ICdzdG9wJywKICAgICAgICBmcmFtZXM6IFsgeyBrZXk6ICdwbGF5ZXInLCBmcmFtZTogNCB9IF0sCiAgICAgICAgZnJhbWVSYXRlOiA1CiAgICB9KTsKCiAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7CiAgICAgICAga2V5OiAncmlnaHQnLAogICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygncGxheWVyJywgeyBzdGFydDogNSwgZW5kOiA4IH0pLAogICAgICAgIGZyYW1lUmF0ZTogNSwKICAgICAgICByZXBlYXQ6IC0xCiAgICB9KTsKCgp9Y2F0Y2goZXIpe30KCgo="
											}
										},
										{
											name: "Update",
											icon: "icon-refresh",
											itemTitle: "update1",
											itemImageId: 7963114,
											fixedImage: true,
											itemText: '{"data": {"yAbovePlayer": 30,"yRespawn": 650}}',
											itemCustomClass: "phaser phaser-function phaser-update",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gVGhpcyBpcyBhIHNhbXBsZSBKYXZhU2NyaXB0IHNuaXBwZXQgdG8gZGVtb25zdHJhdGUgdGhlIHVzZSBvZiB0aGUgVXBkYXRlIGZ1bmN0aW9uCi8vIFRoaXMgQWN0aW9uIGlzIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBHYW1lLnVwZGF0ZSgpIGZ1bmN0aW9uLgovLyBNdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhpcyB0eXBlIGNhbiBiZSBhZGRlZAoKLy8gVGhlIGZvbGxvd2luZyB2YXJpYWJsZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGlzIGNvbnRleHQ6Ci8vICAgdGltZSAtIHBhc3NlZCBmcm9tIFBoYXNlci51cGRhdGUoKQovLyAgIGRlbHRhIC0gcGFzc2VkIGZyb20gUGhhc2VyLnVwZGF0ZSgpCi8vICAgb2JqZWN0IC0gdGhpcyBvYmplY3QKLy8gICBkYXRhIC0gdGhlIGRhdGEgcHJvcGVydGllcyBmb3IgdGhpcyBvYmplY3QKLy8gICB0aGlzIC0gdGhlIEdhbWUgT2JqZWN0CgoKCgppZiAoc3ByaXRlMS55ID4gZGF0YS5nZXQoJ3lSZXNwYXduJykpCnsKCXNwcml0ZTEuc2V0VmVsb2NpdHkoMCk7CglzcHJpdGUxLnNldFBvc2l0aW9uKHBsYXllci54LCBwbGF5ZXIueSAtIGRhdGEuZ2V0KCd5QWJvdmVQbGF5ZXInKSk7CglzcHJpdGUxLnNldERhdGEoJ29ucGxheWVyJywgdHJ1ZSk7Cn0KCgovLyBBcHBseSB0aGUgcmVxdWlyZWQgYW5pbWF0aW9uCi8vIGJhc2VkIG9uIHRoZSBsYXN0IHBvc2l0aW9uIG9mIHRoZSBwbGF5ZXIuCi8vIGUuZy4gSWYgdGhlIHBsYXllciBoYXMgbW92ZWQgbGVmdCwgc2hvdyB0aGUgImxlZnQiIGFuaW1hdGlvbi4KdHJ5ewoJaWYocGxheWVyLnggPCB3aW5kb3cubGFzdFBsYXllclgpewoJCXBsYXllci5wbGF5KCdsZWZ0Jyk7Cgl9ZWxzZSBpZihwbGF5ZXIueCA+IHdpbmRvdy5sYXN0UGxheWVyWCl7CgkJcGxheWVyLnBsYXkoJ3JpZ2h0Jyk7Cgl9ZWxzZXsKCQlwbGF5ZXIucGxheSgnc3RvcCcpOwoJfQoKCS8vIE5vdyBzYXZlIHRoZSBjdXJyZW50IHBsYXllciBwb3NpdGlvbiBmb3IgdGhlIG5leHQgdXBkYXRlIGxvb3AuCgl3aW5kb3cubGFzdFBsYXllclggPSBwbGF5ZXIueDsKfWNhdGNoKGVyKXt9Cgo="
											}
										},
										{
											name: "Render",
											inactive: true,
											icon: "icon-print",
											itemTitle: "render1",
											itemImageId: 7963113,
											fixedImage: true,
											itemText: "{\n}",
											itemCustomClass: "phaser phaser-function phaser-render",
											action: {
												value: "code",
												codetype: "js",
												base64Content: ""
											}
										},
										{
											name: "Function",
											icon: "icon-wrench",
											itemTitle: "function1",
											itemImageId: 7963110,
											fixedImage: true,
											itemText: '{"data": {"bounceFactor": 10}}',
											itemCustomClass: "phaser phaser-function phaser-otherFunction ",
											action: {
												value: "code",
												codetype: "js",
												base64Content: "Ly8gVGhpcyBpcyBhIHNhbXBsZSBKYXZhU2NyaXB0IHNuaXBwZXQgdG8gZGVtb25zdHJhdGUgdGhlIHVzZSBvZiBhIEZ1bmN0aW9uIEFjdGlvbgovLyBUaGlzIEFjdGlvbiBjYW4gYmUgY2FsbGVkIGJ5IG90aGVyIGdhbWUgb2JqZWN0cywgc3VjaCBhcyBhIENvbGxpZGVyIGNhbGxiYWNrLgoKLy8gUGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiBhbmQgd2lsbCBiZSBhdmlhbGFibGUgYXMgZm9sbG93czoKLy8gYXBwLmdldEl0ZW0oKS5hY3Rpb25QYXJhbXMKCi8vIFRvIHBhc3MgcGFyYW1ldGVycyB0byB0aGlzIGZ1bmN0aW9uLCB1c2U6Ci8vIGZ1bmN0aW9uMS5jYWxsKHRoaXMscGFyYW1zKTsKCgovL2NvbnNvbGUud2FybignaW5zaWRlIGZ1bmN0aW9uMScsdGhpcyxwYXJhbXMpCgoKdmFyIGRpZmYgPSAwOwoKaWYgKHNwcml0ZTEueCA8IHBsYXllci54KQp7CgkvLyAgQmFsbCBpcyBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHBsYXllcgoJZGlmZiA9IHBsYXllci54IC0gc3ByaXRlMS54OwoJc3ByaXRlMS5zZXRWZWxvY2l0eVgoLTEgKiBkYXRhLmdldCgnYm91bmNlRmFjdG9yJykgKiBkaWZmKTsKfQplbHNlIGlmIChzcHJpdGUxLnggPiBwbGF5ZXIueCkKewoJLy8gIEJhbGwgaXMgb24gdGhlIHJpZ2h0LWhhbmQgc2lkZSBvZiB0aGUgcGxheWVyCglkaWZmID0gc3ByaXRlMS54IC1wbGF5ZXIueDsKCXNwcml0ZTEuc2V0VmVsb2NpdHlYKGRhdGEuZ2V0KCdib3VuY2VGYWN0b3InKSAqIGRpZmYpOwp9CgllbHNlCnsKCS8vICBCYWxsIGlzIHBlcmZlY3RseSBpbiB0aGUgbWlkZGxlCgkvLyAgQWRkIGEgbGl0dGxlIHJhbmRvbSBYIHRvIHN0b3AgaXQgYm91bmNpbmcgc3RyYWlnaHQgdXAhCglzcHJpdGUxLnNldFZlbG9jaXR5WCgyICsgTWF0aC5yYW5kb20oKSAqIDgpOwp9Cgo="
											}
										}
									]
								}
							],	


							// Help Text for all tools
							_toolsHelpText: {
								"title": "The Object Name can only include letters, numbers and underscore.",
								"text": "The JSON describes all the properties of this object.<br>Do not edit this field directly unless you know what you are doing, because you could break your game!"
							},





							_addEditHandler: function(sprite,item){
								// When the object is clicked open the editor
								
								try{

				                    if(app.isAppBuilder){      
				                    	sprite.setInteractive();                          	
										sprite.on('pointerdown', function (pointer) {
											// make sure option to edit is ticked
											if(jQuery('#gm-setting-editOnClick')[0].checked){

												// make sure Editor is not open already for another item
												// if toolbox is not hidden, then can open editor
												if(jQuery('#popup-container .toolbox.hidden-left').length == 0){
													jQuery(item.element).click();
													// try a few times to click the Edit option
													app.setInterval(function(){
														app.game.pause();
														jQuery('.dropdown-menu .icon-edit').click()
													},100,1000)

												}
											}
										});
				                    }

								}catch(er){
		console.warn('_addEditHandler',sprite,item,er)

								}

							},





							_addPanelItem: function(obj){

								// Add an Item using the properties from tool object `obj`
								// Uses the properties from _tool

								// Click to add Image Link
								jQuery('.toolbox .tab-content div:nth-child(1)>div:nth-child(4)>a:nth-child(4)')[0].click()


								// Once the Edit Panel is open, call this function
								app._onceEditItem = function(){
									try{


										// Hide the edit-btns untl slow tasks done (like adding Action to JavaScript Editor)
										jQuery('#popup-container .edit-btns').addClass('invisible');
										var autoShowBtns = true;

										// open Edit tab
										jQuery('.form-horizontal .nav-tabs li:nth-child(1)>a')[0].click()

										// Add various features to the Edit Panel
										//app.game._prepareEditPanel(obj)


										// Set the Title
										jQuery('#edit_item #item_title').val(obj.itemTitle);
										jQuery('#item_title').val(app.game._fixTitle(jQuery('#item_title').val(),true));									


										// Set the Text
										jQuery('#edit_item #item_text').val(obj.itemText);


										// Try format the JSON
										try{
											jQuery('#item_text').val(JSON.stringify(JSON.parse(obj.itemText),null,"\t") )
										}catch(er){
console.warn('_addPanelItem contains invalid JSON',obj,er)											
										}


										// click on Clear for image
										jQuery('.file-chooser-clear.btn').click()

										// change the Image displayed in the Editor
										setTimeout(function(){
											jQuery(".file-chooser-image.custom-input").attr('style', 'background-image: url(https://appshed-id-images.s3-eu-west-1.amazonaws.com/'+obj.itemImageId+');     background-repeat: no-repeat;     background-size: contain;    background-position: center center;');

											// Item Image
											jQuery('input[name=item_image]').val(obj.itemImageId);
										},200)


										// Set CustomClasses
										jQuery('#style_costumclases').val(obj.itemCustomClass);


										// Set the Action
										if(obj.action && typeof obj.action === "object"){
											// Click the Change Action button
											jQuery('#edit_action_trigger').click();

											// find the action box we need
											jQuery('#edit_action_selector div.action[data-value="'+obj.action.value+'"]').each(function(){

												var jThis = jQuery(this);
												if(obj.action && obj.action.base64Content && obj.action.base64Content.length){
													obj.action.atob = atob(obj.action.base64Content);
												}
												var dataValue = jThis.data("value");



												// some values have multiple options
												if(dataValue == "code"){
													if(jThis.data("codetype") == "js"){
														// Don't auto show Save Btns .. need a callback to handle this
														autoShowBtns = false;
														this.click()
														// Set the JS Editor value and show btns when done
														app.utils.setJSField(obj.action.atob,function(){
															jQuery('#popup-container .edit-btns').removeClass('invisible');
														})
													}

												}else if(dataValue == "sound" && obj.action.content){
													this.click();
													jQuery('input[name=action_sound]').val(obj.action.content);
												}else if(dataValue == "screen"){
													if(jQuery(this).data("screentype") == obj.action.screentype){
														this.click();
													}
												}else{
													this.click();
												}
											});
										}




										if(autoShowBtns){
											jQuery('#popup-container .edit-btns').removeClass('invisible');
										}


									}catch(er){
										// panel was not ready
console.warn('ERROR _addPanelItem',er)
									}

								}



							},

							_applyFilter: function(){
								// Apply object filters
								// `this` is the object that changed
								// 	filters work by adding the  allowed class to the .app element
								// 	CSS rules will show items if their collection is in the .app element


								// hide the Empty message
				    			app.game.setEmptyMessage();


								// Get a count of all hidden items
								var countHidden = 0;
								var checkedCollections = 0;

								var showAll = jQuery('#gm-filter-all').prop('checked');

								// Count ticked collections
								jQuery('.gm-filter-collection').each(function(){
									if(jQuery(this).prop('checked')){
										checkedCollections++;
									}
								});

								// If any collection not checked, untick All
								if(!showAll){	
									jQuery('.gm-filter-collection').each(function(){
										if(!jQuery(this).prop('checked')){
											jQuery('#gm-filter-all').prop('checked',false);
										}
									});
								}



								// TOGGLE
								// if not showAll and only 2 collections are now ticked, then 'toggle' between the two collections, 
								if(!showAll && jQuery(this).prop('checked') && checkedCollections == 2){
										// turn off the previous one and only leave the recently ticked filter on
										jQuery('.gm-filter-collection').prop('checked',false);
										jQuery(this).prop('checked',true);

								}



								// Go through all colelction filters
								jQuery('.gm-filter-collection').each(function(){
									// If showAll, make sure it is ticked
									if(showAll){
										jQuery(this).prop('checked',true);
									}

									// Add or remove the class to the app (to apply CSS filetering on objects)
									if(jQuery(this).prop('checked')){
										jQuery('.app').addClass(jQuery(this).data('class'));
										// count hidden items of this class
										countHidden += jQuery('.item.phaser-hidden.'+jQuery(this).data('class')).length
									}else{
										jQuery('.app').removeClass(jQuery(this).data('class'));					
									}
								});							

								// Show or hide hidden items using a class on the app
								if(jQuery('#gm-filter-hidden').prop('checked')){
									jQuery('.app').addClass('phaser-show-hidden');
									countHidden = 0;					
								}else{
									jQuery('.app').removeClass('phaser-show-hidden');					
								}



								// Show 'active' class based on checked status
								jQuery('.gm-filter-collection, .gm-filter').each(function(){
									if(jQuery(this).prop('checked')){
										jQuery(this).parent().addClass('active');					
									}else{
										jQuery(this).parent().removeClass('active');					
									}
								});		


								// in case no visible objects, show message
						    	setTimeout(function(){
					    			app.game.setEmptyMessage(countHidden);
						    		app.refreshScroll();
						    	},400);						


						    	// Check for valid object names
						    	app.game._fixInvalidNames();
							},





							autoStart: function(id,el){
								// el is the screen element

								if(!app.isAppBuilder){							
									// use the first config item
									var hasGame = false;
									jQuery(el).find(".phaser-config.item:first").each(function(){
										hasGame = true;
									});

									if(hasGame){
										setTimeout(()=>{
											app.game._launchGame();
										},1000);
									}else{
										app.game.hide();
									}
								}						
							},



		                    callGroupSetAll: function(group,obj){
		                        // call group.setAll for each of the properties in obj
		                        // The value can be a single object {} , or an array of objects [ {},{},...], 
		                        // with key/value pairs for properties to be set {key:value}
		                        
		                        if(Array.isArray(obj)){
		                            for(var j=0;j<obj.length;j++){
		                                try{
		                                    jQuery.each(obj[j],function(key,value){
		                                        group.setAll(key,value)
		                                    });
		                                }catch(er){
		console.log('callGroupSetAll',obj,group,er)                                
		                                }                                                
		                            }

		                        }
		                        else if(typeof obj === "object"){
		                            // it's an object, so we only expect one entry
		                            jQuery.each(obj,function(key,value){
		                                group.setAll(key,value)
		                            });
		                        }
		                    },



		                    checkValidJSON: function(obj,item){

		                    	var valid = true;

		                        // Help the user by giving suggestions on error
		                        try{

		                            var text = item.getText()

		                            if(text.length && (!obj || Object.keys(obj).length == 0)){
		                                // a common error is to forget the '' if the JSON has complex properties, such as body.immovable needs 'body.immovable'
		                                if(text.match(/\./g).length){
		                                	valid = false;
		                                    app.game.warn(1,'The JSON for "'+item.getTitle()+'"  is invalid.');
		                                }
		                            }
		                        }catch(er){
		                            app.log('Error - check the JSON')
		                        }

		                        return valid;

		                    },




		                    collideObject: function(name){
		                        // Returns the Phaser Object with the key= `name` from the current collision
		                        // If none found, returns null
		                        // Uses this.currentObject() which should be a Collider object
		                    
		                        try{

		                            var curr = app.game.currentObject();

		                            if(curr && curr.hasOwnProperty("objects")){
		                                // check each of the collider objects to see if they match the key
		                                if(curr.objects.objA.key == name){
		                                    return curr.objects.objA;
		                                }else if(curr.objects.objB.key == name){
		                                    return curr.objects.objB;
		                                }
		                            }
		                        }catch(er){
		console.log('colliderObject',er)                            
		                        }
		                    },




							_countHidden: function(){
								return jQuery('.items-inner .phaser.item').filter(function() {
								    return jQuery(this).css('display') == 'none' 
								}).length
							},

							_countVisible: function(){
								return jQuery('.items-inner .phaser.item').filter(function() {
								    return jQuery(this).css('display') != 'none' 
								}).length
							},



							_create_addMenu: function(){
								// Adds the menu into the game
								// The context of `this` is `game`
								
								if(app.game._menuAdded){
									return;
								}else{

									// Add the Close button (x in the top left corner)

/*
								    var sprite = this.add.sprite(15, 15, '_closeButton');
								    var shape = new Phaser.Geom.Rectangle(0, 0, 30, 30);
								    sprite.setScrollFactor(0)
								    app.game.sprite['_closeButton'] = sprite;

								    sprite.setInteractive(shape, Phaser.Geom.Rectangle.Contains);
							        this.children.bringToTop(sprite);

								    //  Input Event listeners
								    sprite.on('pointerdown', function (pointer) {
								    	if(app.isAppBuilder){
								    		app.game._doShowObjects();
								    	}
										app.game.stop(this);		
								    },this);

*/
									app.game._menuAdded = true;
								}


							},

							/*
							_createBodyGui: function (body,params)
							{

							    var gui = new dat.GUI({ width: 350 });


							    gui.add(body, 'allowDrag');
							    gui.add(body, 'allowGravity');
							    gui.add(body, 'allowRotation');
							    gui.add(body, 'angularAcceleration', -360, 360, 5);
							    gui.add(body, 'angularVelocity', -360, 360, 5);
							    gui.add(body, 'collideWorldBounds');
							    gui.add(body, 'debugShowBody');
							    gui.add(body, 'debugShowVelocity');
							    gui.add(body, 'enable');
							    gui.add(body, 'immovable');
							    gui.add(body, 'isCircle');
							    gui.add(body, 'mass', 0.1, 10, 0.1);
							    gui.add(body, 'moves');
							    gui.add(body, 'useDamping');
							    gui.addColor(body, 'debugBodyColor');

							    app.game._createVectorGui(gui, 'acceleration', body.acceleration, -600, 600, 10);
							    app.game._createVectorGui(gui, 'bounce', body.bounce, 0, 1, 0.1);
							    app.game._createVectorGui(gui, 'deltaMax', body.deltaMax, 0, 60, 1);
							    app.game._createVectorGui(gui, 'drag', body.drag, 0, 60, 0.1);
							    app.game._createVectorGui(gui, 'friction', body.friction, 0, 1, 0.05);
							    app.game._createVectorGui(gui, 'gravity', body.gravity, -600, 600, 10);
							    app.game._createVectorGui(gui, 'maxVelocity', body.maxVelocity, 0, 10000, 100);
							    app.game._createVectorGui(gui, 'velocity', body.velocity, -600, 600, 10);

							    var check = gui.addFolder('checkCollision');
							    check.add(body.checkCollision, 'left');
							    check.add(body.checkCollision, 'up');
							    check.add(body.checkCollision, 'right');
							    check.add(body.checkCollision, 'down');

							    return gui;
							},


							*/


							_createGui: function (obj,params,collection)
							{
								// Create a GUI based on the object passed in
								// params:
								//   type
								//   name
								//   
								// Naming convention to auto-format the GUI
								//   "color" in the name - color controller
								// collection: default is blank for "main" || "data" (data variables) || "body"
								
								var params = params || {};
								var collection = params.collection || "main";
								var d; // Holds the descriptors

								var fieldJSON = JSON.parse(jQuery('#edit_item #item_text').val());

	                        	// For the Body colection, not all keys will be included, only those that have a descriptor
								if(collection == "body"){
									d = app.game._bodyPropertiesDescriptor;
								}

							    var gui = new dat.GUI({ width: 350 });

								try{
									var keys = Object.keys(obj).sort();

		                            jQuery.each(keys,function(i,key){

		                            	// get the value for this key
		                            	var val = obj[key];

		                            	// update the data value as the user changes it
		                            	// helpful in game view to see effect


		                            	// if we have a descriptor template, check this key is required
		                            	// if we don't have a descriptor for this, don't include it.
		                            	if(d && !d.hasOwnProperty(key)){
		                            		//return; // doing all properties
		                            	}


		                            	// If the property starts with _ it should be hidden, don't show it
										if(key.match(/^_/)){
											return;
										}	       



									    var controller, controller2;



									    // =============================================================1
									    // 
									    // The function to run onChange
									    // 
									    // =============================================================1
									    var onChangeFn = function(newVal,settings){

									    	// When a property changes, need to do different things based on the settings 
									    	// settings: {} an object to define various settings relating to the change
									    	//    settings: {
									    	//      subKey: "keyname" - if we are changing a subKey of the Key value
									    	//    }
									    	// vectorY is true if its a vector and the y value changed
									    	// 
										    if(String(key).match(/color/)){
										    	// Phaser mostly works with hex as 0X, but dat.gui uses #
										    	newVal = newVal.replace(/#/,"0x");
										    }

										    var settings = settings || {};


										    // Set the value on the game object
										    if(collection == "data"){
										    	
										    	// DATA GUI
										    	
										    	if(!fieldJSON.hasOwnProperty("data")){
										    		fieldJSON.data = {};
										    	}




												if(settings.subKey){
													var curr = app.game[params.type][params.name].data.get(key);
													curr[settings.subKey] = newVal;
		    								    	app.game[params.type][params.name].data.set(key,curr);

		    								    	if(!fieldJSON.data.hasOwnProperty(key)){
		    								    		fieldJSON.data[key] = {};
		    								    	}
													fieldJSON.data[key][settings.subKey] = newVal;
												}else{												
													app.game[params.type][params.name].data.set(key,newVal);
													fieldJSON.data[key] = newVal;
												}



										    }else if(collection == "body"){
										    	
										    	// BODY GUI
										    	
										    	if(!fieldJSON.hasOwnProperty("body")){
										    		fieldJSON.body = {};
										    	}
										    	// Sometimes we are setting a subKey, e.g. x and y for a vector
												if(settings.subKey){
													app.game[params.type][params.name].body[key][settings.subKey] = newVal;
		    								    	if(!fieldJSON.body.hasOwnProperty(key)){
		    								    		fieldJSON.body[key] = {};
		    								    	}
													fieldJSON.body[key][settings.subKey] = newVal;
												}else{												
													app.game[params.type][params.name].body[key] = newVal;
													fieldJSON.body[key] = newVal;
												}
										    }else{
										    	
										    	// MAIN GUI

										    	// Vectors
												if(settings.subKey){
		    								    	app.game[params.type][params.name][key][settings.subKey] = newVal;
		    								    	if(!fieldJSON.hasOwnProperty(key)){
		    								    		fieldJSON[key] = {};
		    								    	}
													fieldJSON[key][settings.subKey] = newVal;

												// Hidden toggle
												}else if(key == 'hidden'){
													// Change the Custom Class CSS to show if newVal true, else hide
													// By default remove hidden
													var customClasses = String(jQuery('#style_costumclases').val()).replace(/phaser-hidden/,'');
													if(newVal){
														customClasses += ' phaser-hidden';
													}
													jQuery('#style_costumclases').val(customClasses)
													fieldJSON[key] = newVal;

												// Static Group toggle
												}else if(key == 'staticGroup'){
													// Change the Custom Class CSS to show if newVal true, else hide
													// By default remove both group types
													var customClasses = String(jQuery('#style_costumclases').val()).replace(/phaser-group/,'').replace(/phaser-staticGroup/,'');
													if(newVal){
														customClasses += ' phaser-staticGroup';
														// Move the object to this collection
														// Don't need to set app.game[type][name] - this will be set when the item is saved
													}else{
														customClasses += ' phaser-group';													
													}
													jQuery('#style_costumclases').val(customClasses)
													fieldJSON[key] = newVal;

												
												// If the existing Game Object has this property, set it (see real time changes)
												}else if(params && params.type && app.game[params.type] && app.game[params.type].hasOwnProperty(params.name)  && app.game[params.type][params.name].hasOwnProperty(key) ){
		    								    	app.game[params.type][params.name][key] = newVal;
													fieldJSON[key] = newVal;
												
												// cannot find anything to do with this property
												}else{
	//console.warn('onChangeFn nothing to do with obj,params,collection,key,newVal,settings',obj,params,collection,key,newVal,settings)
													// just set it on obj
													obj[key] = newVal;
													fieldJSON[key] = newVal;											
												}
										    }

										    // Update the JSON in the text field
											jQuery('#edit_item #item_text').val(JSON.stringify(fieldJSON,null,"\t"));

									    }
									    // =============================================================1
									    // ================= END onChangeFn   ==========================1
									    // =============================================================1



									    // Create the controller (or two, if vector)
									    // Settings holds specific settings about the change
									    var settings = {};
										try{

											// Handle some special cases for different types of values
											// such as Vectors, colors, objects, hidden, staticGroup, or plain
											
											// Vectors
											if(d && d.hasOwnProperty(key) && d[key].vector){
											    var folder = gui.addFolder(key);

											    controller = folder.add(val, 'x');
		    								    controller.onChange(function(newVal){
		    								    	onChangeFn(newVal,{subKey: "x"})
		    								    })

											    controller2 = folder.add(val, 'y');
		    								    controller2.onChange(function(newVal){onChangeFn(newVal,{subKey: "y"})});

		    								// Colors
											}else if(String(key).match(/color/)){
												// GUI supports # colors
												obj[key] = val.replace(/0x/,"#");
												controller = gui.addColor(obj, key)	
		    								    controller.onChange(function(newVal){onChangeFn(newVal)});

		    								// Groups
											}else if(key == 'group'){
												var options = app.game._getGroupNames().concat(['']);

												// Add the current val (group) if it isn't in the array, to make sure we don't loose custom groups
												if(val > '' && !jQuery.inArray(val,options)){
													options.push(val);
												}

												options.sort();

												controller = gui.add(obj, key, options);
		    								    controller.onChange(function(newVal){onChangeFn(newVal)});



		    								// Objects
											}else if(val && typeof val == "object"){
											    var folder = gui.addFolder(key);
											    var subKeys = Object.keys(val)

											    jQuery.each(subKeys,function(i,thisSubKey){
													// for each of the subKeys, add a controller and onChange handler
												    var controller;

												    if(key == 'a' || key == 'b'){
												    	controller = folder.add(val, thisSubKey, app.game._getColliderOptions(val[thisSubKey]));
												    }else if(typeof val[thisSubKey] === "object"){
												    	// do nothing.. it is a deep object
												    }else{
												    	controller = folder.add(val, thisSubKey);
												    }

												    
												    if(controller){
				    								    controller.onChange(function(newVal){
				    								    	onChangeFn(newVal,{subKey: thisSubKey});
				    								    })
												    }
											    })



		    								// a or b -> Select an object
											}else if(key == 'a' || key == 'b'){

												controller = gui.add(obj, key, app.game._getColliderOptions(val));
		    								    controller.onChange(function(newVal){onChangeFn(newVal)});


											// Normal properties
											}else if(val !== null){
												// Plain old simple value for this key
												controller = gui.add(obj, key)	
		    								    controller.onChange(function(newVal){onChangeFn(newVal)});
											}




										}catch(er){
		console.warn('Error adding GUI',key,val,(typeof val),er)
										}

		                            });


								}catch(er){
		console.warn(er)									
								}


							    return gui;
							},


							_createVectorGui: function (gui, name, vector, min, max, step)
							{
							    var folder = gui.addFolder(name);

							    folder.add(vector, 'x', min, max, step);
							    folder.add(vector, 'y', min, max, step);

							    return folder;
							},



							_createEnd: function(){
								// called at the end of scence.create()
								// The context of `this` is the `this` from the create() function					




								// Pointer Setup
							    app.game._createPointers.call(this);



							    // Joystick setup
							    app.game._createJoysticks.call(this);







								// Call any functions that are required during create.
								// Actions on any of these Types are treated as create functions, and used for setting up the game
								// e.g. The action for a phaser-group will be run during the create to set up the game
		                       	// The functions should have been added by _prepareGameFuncs 

		                       	try{

		                        	app.game._funcs.groupCaller.call(this)
		                        	app.game._funcs.staticGroupCaller.call(this)
		                        	app.game._funcs.imageCaller.call(this)
		                        	app.game._funcs.spriteCaller.call(this)
		                        	app.game._funcs.spriteSheetCaller.call(this)
		                        	app.game._funcs.tileSpriteCaller.call(this)
		                        	app.game._funcs.textCaller.call(this)

		                        	// and lastly the phaser-create functions
		                        	app.game._funcs.createCaller.call(this)
		                       	}catch(er){
									app.handleError(er,"_createEnd() Caller functions")
		                       	}
					
								// by default follow 
								try{
									if(typeof player == "object" && Object.keys(player).length){							
									    this.cameras.main.startFollow(player, true, 0.1, 0.1);
									}
								}catch(er){
		console.log('_createEnd',er)							
								}


								// Add the menu
								app.game._create_addMenu.call(this);



								// Keyboard event handlers

		                        jQuery.each(app.game.keyCode,function(key,objArr){
		                        	
		                        	// handle isDown event
		                        	
		                            // for each key, go through the array of code scripts
		                            jQuery.each(objArr,function(i,ofunc){
		                            	// ofunc is a descriptor {functionName, event}
			                        	// check if this func is up/down and the script event matches 
			                        	if( ["keyup","keydown"].contains(ofunc.event) ) {
		                            		// call each function
		                            		try{
		                            			// the "on" method needs a description of the event,
		                            			// eg keyup_A (as the first parameter)
		                            			// second param is the function call
										        app.game.this.input.keyboard.on(ofunc.event+'_'+ofunc.key, ()=>{
			                            			app.game._funcs[ofunc.functionName].call(app.game.this);
										        } , this);

		                            		}catch(er){
		console.log('keyCode error calling action',app.game.keyCode, key, i, ofunc, er)                            			
		                            		}
			                        	}
		                            } )

		                        	// check if the key has just been released
		                        	if(Phaser.Input.Keyboard.JustUp(key)){
		console.warn("Key JustUp",key)                        		
		                        	}

		                        });



							},





							_createJoysticks: function(){
							    // Create the joystick object with required settings

							    // only set up the joystick if there are Joystick items
							    if(jQuery('.phaser-joystick.item').length){

							    	// default joystick settings.
							    	var jSettings = {
										"base_color": "0x888888",
										"base_alpha": 0.5,
										"thumb_color": "0xcccccc",
										"thumb_alpha": 0.5,
										"force_min": 10,
										"radius": 40						    		
							    	}

							    	var keys = Object.keys(app.game.joystick);

							    	// loop through all Joystick objects
									jQuery.each(app.game.joystick,function(key,j){

								    	//  If there are multiple joystick objects, the last one will  override the settings
								    	//var j = app.game.joystick[keys[0]];
								    	if(j.base_color){
								    		jSettings.base_color = j.base_color;
								    	}
								    	if(j.base_alpha){
								    		jSettings.base_alpha = j.base_alpha;
								    	}
								    	if(j.thumb_color){
								    		jSettings.thumb_color = j.thumb_color;
								    	}
								    	if(j.thumb_alpha){
								    		jSettings.thumb_alpha = j.thumb_alpha;
								    	}
								    	if(j.force_min){
								    		jSettings.force_min = j.force_min;
								    	}
								    	if(j.radius){
								    		jSettings.radius = j.radius;
								    	}


							    	})


								    this.joystick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
								      x: 100,
								      y: 300,
								      radius: jSettings.radius,
								      base: this.add.graphics().fillStyle(jSettings.base_color,jSettings.base_alpha).fillCircle(0, 0, jSettings.radius),
								      thumb: this.add.graphics().fillStyle(jSettings.thumb_color,jSettings.thumb_alpha).fillCircle(0, 0, jSettings.radius/2),
								      dir: 3,   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
								      forceMin: jSettings.force_min,
								      enable: true
								    }).on('update', app.game._onJoystickUpdate, this);
								    
	    	                        // The "on update" function must be called on every update, and onChange, because change doesn't fire if position remains constant


									app.game.this.joystick.setVisible(false);


									this.input.on('pointerdown', app.game._onJoystickPointerdown);
									
									this.input.on('pointerup', app.game._onJoystickPointerUp);

								
								}
							},






							_createPointers: function(){
							    // Create the pointer objects with required settings


						    	// loop through all Pointer objects
						    	var keys = Object.keys(app.game.pointer)
								//jQuery.each(app.game.pointer,function(key,p){
								for(var i=0;i<keys.length;i++){
									var p = app.game.pointer[keys[i]];

									// default applied to game
									var target = this.input;

									// is this applied to an object or the game as a whole
									if(p.hasOwnProperty('object_name') && p.object_name > "") {
										var oName = p.hasOwnProperty('object_name');

										if(app.game.sprite.hasOwnProperty(oName)){
											target = app.game.sprite[oName];
										}else if(app.game.image.hasOwnProperty(oName)){
											target = app.game.image[oName];
										}else if(app.game.tileSprite.hasOwnProperty(oName)){
											target = app.game.tileSprite[oName];
										}
									}


									// now create the event handlers.
									// This action might be applied to multiple events
									var pointerEvents = [ 'pointerdown', 'pointerdownoutside', 'pointermove', 'pointerout', 'pointerover', 'pointerup', 'pointerupoutside' ];
									
									jQuery.each(pointerEvents,function(j,val){
										// if this option is true for this pointer object
										// e.g. pointer.on_POINTER_MOVE

										var obj = p;

										if(obj['on_'+val]){

											target.on(val,function(pointer){
												app.game._funcs['pointer'+obj.JSON.item.domId].call(app.game.this,pointer);
											});

										}
									});

								}

							},


							_createStart: function(){
								// called at the start of scence.create()
								// The context of `this` is the `this` from the create() function					

								var w = app.game.getConfig().width;
								try{
									// if the config has data.world.bounds.width
									if(!isNaN(app.game.getConfig().data.get('bounds').width)){
										w =  app.game.getConfig().data.get('bounds').width;
									}
								}catch(er){}

								var h = app.game.getConfig().height;
								try{
									if(!isNaN(app.game.getConfig().data.get('bounds').height)){
										h = app.game.getConfig().data.get('bounds').height;
									}
								}catch(er){}
								var x = 0;
								try{
									if(!isNaN(app.game.getConfig().data.get('bounds').x)){
										x = app.game.getConfig().data.get('bounds').x;
									}
								}catch(er){}
								var y = 0;
								try{
									if(!isNaN(app.game.getConfig().data.get('bounds').y)){
										y = app.game.getConfig().data.get('bounds').y;
									}
								}catch(er){}
								var gravityX = 0;
								try{
									if(!isNaN(app.game.getConfig().data.get('gravity').x)){
										gravityX = app.game.getConfig().data.get('gravity').x;
									}
								}catch(er){}
								var gravityY = 0;
								try{
									if(!isNaN(app.game.getConfig().data.get('gravity').y)){
										gravityY = app.game.getConfig().data.get('gravity').y;
									}
								}catch(er){}



							    this.physics.world.setBounds(x, y, w, h);
							    this.physics.world.gravity.x = gravityX;
								this.physics.world.gravity.y = gravityY;


							    this.cameras.main.setBounds(x, y, w, h);
							    this.cameras.main.setDeadzone(app.game.getConfig().width*0.2, app.game.getConfig().height*0.2);
									



								// Presume keyboard cursors
							    //app.game.cursors = this.input.keyboard.createCursorKeys();








							},





		                    createPhaserAudios: function(that){
		                        // save the image obj in a collection                        

								jQuery( jQuery('.phaser-audio.item').get().reverse()).each(function(){

									// Skip if there is no URL for this audio (it will also cause an error when destroy is called)
									if(!jQuery(this).data('href')){
										return;
									}



		                            // try, in case errors creating one of the sprites
		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());
		                                
		                                obj.name = item.getTitle();
		                                obj.item = item;

		                                app.game.audio[obj.name] = that.sound.add(obj.name);	                                

		                                app.game.audio[obj.name].JSON = obj;
		                                app.game.audio[obj.name].JSONString = item.getText();

		                                app.game.setObjectProperties(app.game.audio[obj.name],obj)

		                                // Change the play() method
		                                // handle allowSimultaneous 
										app.game.audio[obj.name]._originalPlay = app.game.audio[obj.name].play;
										app.game.audio[obj.name].play = function( markerName, config){
											// don't play if isPlaying
											if(app.game.audio[obj.name].allowSimultaneous || !app.game.audio[obj.name].isPlaying){
												app.game.audio[obj.name]._originalPlay.call(app.game.audio[obj.name], markerName, config) 
											}
										}

		                            }catch(er){
	console.log('createPhaserAudioa',er)                  ``          	
		                            }
		                        });
		                    },


		                    createPhaserConfigs: function(that){
		                        // save the image obj in a collection                        

		                        jQuery('.phaser-config.item').each(function(){

		                            // try, in case errors creating one of the sprites
		                            try{


		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());
		                                var name = item.getTitle();

		                                obj.name = name;
		                                obj.item = item;
		                                
		                                var thisObject = {};
		                                thisObject.JSON = obj;
		                                thisObject.JSONString = item.getText();

		                                app.game.config[name] = thisObject;
		                                app.game.setObjectProperties(app.game.config[name],obj)


		                            }catch(er){console.log(er)}
		                        });
		                    },



		                    createPhaserPreload: function(that){
		                        // save the obj in a collection                        

		                        jQuery('.phaser-preload.item').each(function(){

		                            // try, in case errors creating one of the sprites
		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
										var name = item.getTitle();
		                                var data = app.utils.stringToObject(item.getText());

		                                var obj = {};
		                                obj.data = data;
		                                obj.objectType = "preload";
		                                obj.item = item;

		                                app.game.preload[name] = obj;
		                                app.game.setObjectData(app.game.preload[name],data)

		                            }catch(er){console.log(er)}
		                        });
		                    },


		                    createPhaserCreate: function(that){
		                        // save the obj in a collection                        

		                        jQuery('.phaser-create.item').each(function(){

		                            // try, in case errors creating one of the sprites
		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
										var name = item.getTitle();
		                                var data = app.utils.stringToObject(item.getText());

		                                var obj = {};
		                                obj.data = data;
		                                obj.objectType = "create";
		                                obj.item = item;

		                                app.game.create[name] = obj;
		                                app.game.setObjectData(app.game.create[name],data)

		                            }catch(er){console.log(er)}
		                        });
		                    },


		                    createPhaserUpdate: function(that){
		                        // save the obj in a collection                        

		                        jQuery('.phaser-update.item').each(function(){

		                            // try, in case errors creating one of the sprites
		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
										var name = item.getTitle();
		                                var data = app.utils.stringToObject(item.getText());

		                                var obj = {};
		                                obj.data = data;
		                                obj.objectType = "update";
		                                obj.item = item;

		                                app.game.update[name] = obj;
		                                app.game.setObjectData(app.game.update[name],data)

		                            }catch(er){console.log(er)}
		                        });
		                    },



		                    createPhaserRender: function(that){
		                        // save the obj in a collection                        

		                        jQuery('.phaser-render.item').each(function(){

		                            // try, in case errors creating one of the sprites
		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
										var name = item.getTitle();
		                                var data = app.utils.stringToObject(item.getText());

		                                var obj = {};
		                                obj.data = data;
		                                obj.objectType = "render";
		                                obj.item = item;

		                                app.game.render[name] = obj;
		                                app.game.setObjectData(app.game.render[name],data)

		                            }catch(er){console.log(er)}
		                        });
		                    },




		                    createPhaserColliders: function(that,methodType)
		                    {
		                        // Create the colliders
		                        // The Collider Items will have these properties:
		                        // a: the name of one Game Object (or array of names)
		                        // b: same
		                        // The Action of the Item is the callback

		                        var methodType = methodType || "collider";


								jQuery( jQuery('.phaser-'+methodType+'.item').get().reverse()).each(function(){


		                            try{


		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());
		                                
		                                obj.name = item.getTitle();
		                                obj.item = item;

		                                




		                                var gameObjects = {a: [], b: []}; // we will put all the game objects here
		                                
		                                jQuery.each(["a","b"],function(i,aorb){
		                                    // a&b can be either single objects or an array of objects of differing types
		                                    
		                                    // The Item Text field (JSON) must have properties/keys "a" and "b" that specify the collision objects/arrays
		                                    var names = obj[aorb];

		                                    if(Array.isArray(names)){
		                                        // It's an array of objects, so loop through
		                                        jQuery.each(names,function(j,thisName){
		                                            // we need to know the Type so we can get the object
		                                            var type = app.game.getType(thisName)
		                                            // add this Game Object to the array
		                                            if(type){
			                                            gameObjects[aorb].push(app.game[type][thisName]);
		                                            }
		                                        });
		                                    }else{
		                                        // its a single object
		                                        var type = app.game.getType(names); 
		                                        if(type){
			                                        gameObjects[aorb] = app.game[type][names];
			                                    }                                        
		                                    }
		                                })



		                                var thisObject;

		                                // now call the Phaser methods to add the Collider or Overlap
		                                if(methodType == "collider"){
										    thisObject = that.physics.add.collider(gameObjects.a, gameObjects.b, function(object1, object2){
									    		try{
									    			if(app.game._funcs['collider'+item.element.id]){
										    			app.game._funcs['collider'+item.element.id].call(app.game.this,object1,object2);
									    			}
									    		}catch(er){
													console.warn('Collider callback error',object1,object2,er)
									    		}

										    }, null, that);


		                                }else if (methodType == "overlap"){
		                                    thisObject = that.physics.add.overlap(gameObjects.a, gameObjects.b, function(object1, object2){
									    		try{
									    			if(app.game._funcs['overlap'+item.element.id]){
										    			app.game._funcs['overlap'+item.element.id].call(app.game.this,object1,object2);							    				
									    			}
									    		}catch(er){
													console.warn('Overlap callback error',object1,object2,er)
									    		}
										    }, null, that);
		                                }




		                                thisObject.JSON = obj;
		                                thisObject.JSONString = item.getText();

										app.game[methodType][obj.name] = thisObject;
		                                app.game.setObjectProperties(app.game[methodType][obj.name],obj)


		                            }catch(er){
	console.log('createPhaserCollider er',methodType,item,obj,er,)                                
		                            }
		                        });
		                    },



		                    createPhaserOtherFunctions: function(that)
		                    {
		                        // Create the otherFunctions
		                        // these can be called from anywhere in the game using this format:
		                        //    app.game.functions['function1'](params)
		                        // passing one parameter (can be an object or anything else)
		                        // From inside the Javacript Action, the params can be retrieved using:
		                        //    app.getItem().actionParams
		                        
		                        jQuery( jQuery('.phaser-otherFunction.item').get().reverse()).each(function(){
		                            // try, in case errors creating one of the sprites
		                            try{

		                            	// no Phaser object for this, so we create one
		                            	var thisObject = {};

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());
		                                
		                                obj.name = item.getTitle();
		                                obj.item = item;

		                                // DEPRECATED: now the function and the object are inserted into the <script> tags, call() not used
		                                // special requirement... to be able to call this function
		                                // call the function created in a script
		                                //obj.call = function(param1,param2,param3,param4,param5,param6,param7,param8,param9,param10){
		                                //	app.game._funcs['otherFunctionitem'+item.id].apply(app.game.this,arguments)
		                                //}

		                                thisObject.JSON = obj;
		                                thisObject.JSONString = item.getText();

										app.game.otherFunction[obj.name] = thisObject;
		                                app.game.setObjectProperties(app.game.otherFunction[obj.name],obj)

		//		                                app.game.otherFunction[item.getTitle()] = function(params){	
		//											app.game._funcs['otherFunction'+item.element.id].call(that,params);
		//		                                };

		                            }catch(er){console.log(er)}
		                        });
		                    },


		/*		                    createPhaserImages: function(that){
		                        // save the image obj in a collection                        

		                        jQuery('.phaser-image.item').each(function(){

		                            // try, in case errors creating one of the sprites
		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());

		                                obj.objectType = "image";
		                                obj.item = item;

		                                app.game.image[item.getTitle()] = obj;
		                                app.game.setObjectProperties(obj)

		                            }catch(er){console.log(er)}
		                        });
		                    },

		*/



		                    createPhaserJoysticks: function(that)
		                    {
		                        // Create the joysticks
		                        // The actions are called based on movement conditions being met (e.g. up_left)

		                        
								jQuery( jQuery('.phaser-joystick.item').get().reverse()).each(function(){
		                            // try, in case errors creating one of the sprites
		                            try{

		                            	// no Phaser object for this, so we create one
		                            	var thisObject = {};

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());
		                                
		                                obj.name = item.getTitle();
		                                obj.item = item;


		                                thisObject.JSON = obj;
		                                thisObject.JSONString = item.getText();

										app.game.joystick[obj.name] = thisObject;
		                                app.game.setObjectProperties(app.game.joystick[obj.name],obj)


		                            }catch(er){console.log(er)}
		                        });
		                    },



		                    createPhaserKeys: function(that){
		                        //                         
								jQuery( jQuery('.phaser-keyboard.item').get().reverse()).each(function(){
		                            // try, in case errors creating one of the sprites
		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());
		                                var name = item.getTitle();

		                                var upperKey = String(obj.key).toUpperCase();

		                                // In this case the name is generated as:
		                                //   key_event
		                                //   e.g. A_isDown
		                                /*
		                                var name = upperKey;
		                                if(obj.hasOwnProperty("event")){
		                                	name += "_"+obj.event;
		                                }else{
		                                	// default event for Keyboard 
		                                	obj.event = "isDown";
		                                }
		                                */


		                                // Keyboard objects must have a "key" property
		                                
		                                //obj.objectType = "key";
		                                obj.item = item;

		                                app.game.keyboard[name] = {};
		                                app.game.keyboard[name].JSON = obj;
		                                app.game.setObjectProperties(app.game.keyboard[name],obj)


		                                if(Phaser.Input.Keyboard.KeyCodes.hasOwnProperty(upperKey)){

											app.game.keys[obj.key] = that.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[upperKey]);

											// if the keyCode array has not been created, do that first
											if(!app.game.keyCode[obj.key]){
												app.game.keyCode[obj.key] = [];
											}
											// Add this obj to the keyCode for the key 
											// default event set to isDown
											var eventName = obj.event || "isDown"

											// Add a description of the function to the array
											// including  name and event
											app.game.keyCode[obj.key].push({functionName: "keyboard" +this.id, event: eventName, key: upperKey});


		                                }else{
											app.game.warn(4,"Invalid key: "+obj.key)                                	
		                                }


		                            }catch(er){
		console.log('createPhaserKeys error',this,er)                            	
		                            }
		                        });
		                    },




		                    createPhaserOverlaps: function(that){
		                        // Create an overlap object.
		                        // This shares the method with collider, as they work the same way
		                        return app.game.createPhaserColliders(that,"overlap");
		                    },




		                    createPhaserPointers: function(that)
		                    {
		                        // Create the pointers
		                        // The actions are called based on events (e.g. on_POINTER_MOVE)

		                        
		                        jQuery( jQuery('.phaser-pointer.item').get().reverse()).each(function(){
		                            // try, in case errors creating one of the sprites
		                            try{

		                            	// no Phaser object for this, so we create one
		                            	var thisObject = {};

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());
		                                
		                                obj.name = item.getTitle();
		                                obj.item = item;


		                                thisObject.JSON = obj;
		                                thisObject.JSONString = item.getText();

										app.game.pointer[obj.name] = thisObject;
		                                app.game.setObjectProperties(app.game.pointer[obj.name],obj)


		                            }catch(er){console.log(er)}
		                        });
		                    },




		                    createPhaserSprites: function(that){
		                    	// create Game Objects
		                    	// This includes Image, Sprite, Spritesheet

		                    	// Need a nested jQuery to reverse the list  https://www.sitepoint.com/jquery-each-reverse-it/
		                        jQuery(jQuery('.items-inner>.phaser-image.item, .items-inner>.phaser-sprite.item, .items-inner>.phaser-tileSprite.item, .items-inner>.phaser-spriteSheet.item').get().reverse()).each(function(){



		                        	// tileSprites handled separtely
		                        	// pass `this` as the element
		                        	if(jQuery(this).hasClass("phaser-tileSprite")){
	                                    return app.game.createPhaserTileSprite(that,this);
	                                }




		                            try{
		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());
		                                var jThis = jQuery(this);

		                                var objectType = "image";
		                                obj.name = item.getTitle();
		                                obj.item = item;


		                                if(jThis.hasClass("phaser-sprite")){
		                                    objectType = "sprite";
		                                }else if(jThis.hasClass("phaser-spriteSheet")){
		                                    objectType = "spriteSheet";
		                                }

		                                var sprite;


		                                // If it is assigned a group, and the group exists, add it to to the group
		                                if(obj.hasOwnProperty('group') && obj.group > '' && (app.game.group.hasOwnProperty(obj.group) || app.game.staticGroup.hasOwnProperty(obj.group) )){
			                                	// check if it's a static group or normal group
			                                    if(app.game.group.hasOwnProperty(obj.group)){
				                                    sprite = app.game.group[obj.group].create(obj.x, obj.y, obj.name);
			                                    }else if(app.game.staticGroup.hasOwnProperty(obj.group)){
				                                    sprite = app.game.staticGroup[obj.group].create(obj.x, obj.y, obj.name);
			                                    }


		                                }else{
		                                    // if no group specified, add to the generic group
		                                    if(objectType == "image"){
			                                    sprite = app.game.staticGroup['_images'].create(obj.x, obj.y, obj.name);


		                                    }else{
			                                    sprite = app.game.group['_sprites'].create(obj.x, obj.y, obj.name);
		                                    }
		                                }


		                             	// Special Case: config.data.origin: 0 || {0,0} - Sets the origin on all Game Objects
		                             	try{
			                                // only image types get origin set
			                                if(app.game.getConfig().data.has('origin') && !isNaN(app.game.getConfig().data.get('origin'))) {
			                                	sprite.setOrigin(app.game.getConfig().data.get('origin'));
			                                }
		                             	}catch(er){}



		                                var w = sprite.width;
		                                var h = sprite.height;
		                                if(obj.hasOwnProperty('width') && !isNaN(obj.width)){
		                                	//sprite.displayWidth = obj.width;
		                                	w = obj.width;
		                                }
		                                if(obj.hasOwnProperty('height') && !isNaN(obj.height)){
		                                	//sprite.displayHeight = obj.height;
		                                	h = obj.height;
		                                }
		                                sprite.setSize(w,h);
		                                sprite.setDisplaySize(w,h);

		                                try{
		                                	// this will fail for objects with no body, ho hum
		   	                                sprite.refreshBody();                                	
		                                }catch(er){}
		                                
		                                sprite.JSON = obj;
		                                sprite.JSONString = item.getText();

		                                app.game.setObjectProperties(sprite,obj)

		//		                                sprite.name = obj.name

		                                if(objectType == "image"){
			                                app.game.image[obj.name] = sprite;                                	
		                                }else{
			                                app.game.sprite[obj.name] = sprite;                                	
		                                }


		                                // special case... add the player as a global variable
		                                if(obj.name == "player"){
		                                	player = sprite;
		                                }


		                                app.game._addEditHandler(sprite,item);


		                            }catch(er){
		console.log('createPhaserSprites',er)                            	
		                            }
		                        });


		                    },



		                    createPhaserTexts: function(that){
		                    	// The style for the text can be set using the AppShed Style tab
		                    	// and/or added to the obj.Text in the format:
		                    	// style: {
		                    	//   color: "00ff00"
		                    	// }
		                       

		                        jQuery( jQuery('.phaser-text.item').get().reverse()).each(function(){



		                            try{
		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText());

		                                obj.objectType = "text";
		                                obj.item = item;

		                                var style = {};

		                                // Check for styles in the JSON
		                                if(obj.hasOwnProperty('style') && typeof obj.style === "object"){
		                                	try{
			                                	var keys = Object.keys(obj.style);
			                        			for(var i=0; i<keys.length;i++){
			                        				style[keys[i]] = obj.style[keys[i]];
			                        			}

		                                	}catch(er){
		                                		app.game.warn(3,item.getTitle()+" (Phaser Text) has errors")
		console.log('createPhaserTexts',er);                                		
		                                	}
		                                } 

		                                // get the styles set on Styles tab
		                                try{
		                                	// <script> tags for styles often combine multiple items together e.g.
		                                	/*
		                                	<style scoped="">#item27905197 {
												font-size: 48px;
											}
											#item27905204 {
												font-family: 'Arial';
												font-size: 48px;
											}
											</style>
											*/

		                                	if(jQuery('style:contains("item'+item.id+'")').length){

												var re = new RegExp('item'+item.id+' {.*?}',"sm");
												var tag = jQuery('style:contains("item'+item.id+'")')[0].innerText;
												var myStyles = tag.match(re)[0];
												// replace css names with JavaScript names
												myStyles = myStyles.replace(/item\d+ /,"").replace(/'/g,'').replace(/font-size/g,'fontSize').replace(/font-family/g,'fontFamily').replace(/font-weight/g,'fontWeight').replace(/font-style/g,'fontStyle').replace(/\n\s*(\w)/g,' "$1').replace(/(\w)\s*:\s*/g,'$1": "').replace(/;/g,'",').replace(/\n/g,'').replace(/,\s*}/,'}')


												// convert to an object for Phaser
			                                	var css = JSON.parse(myStyles);			                                	
			                                	var keys = Object.keys(css);
			                        			for(var i=0; i<keys.length;i++){
			                        				style[keys[i]] = css[keys[i]];
			                        			}                                
		                                	}

		                                }catch(er){
		                                		app.game.warn(3,item.getTitle()+" (Phaser Text) 'Styles' has errors "+'style:contains("item'+item.id+'")',er)

		                                }

		                                app.game.text[item.getTitle()] = that.add.text(obj.x, obj.y, obj.text, style);

		                                app.game._addEditHandler(app.game.text[item.getTitle()],item);


		                            }catch(er){
		console.log('create text',er)                            	
		                            }
		                        });
		                         
		                    },



	//	                    createPhaserTileSprites: function(that,el){
		                    createPhaserTileSprite: function(that,el){
		                       
		                    	// create a single tileSprite for `el`
		                    	// 

		                        //jQuery( jQuery('.phaser-tileSprite.item').get().reverse()).each(function(){
		                        



		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(el.id));
		                                var obj = app.utils.stringToObject(item.getText());

		                                var objectType = "tileSprite";
		                                obj.item = item;
										obj.name = item.getTitle();
		                                
		                                // default to tile the world
		                                var w = game.config.width;
		                                var h = game.config.height;

		                                if(obj.hasOwnProperty('cols') && !isNaN(obj.cols) && obj.cols > 0 ){
		                                	w = that.textures.get(obj.name).frames.__BASE.width * obj.cols;
		                                }
		                                if(obj.hasOwnProperty('rows') && !isNaN(obj.rows) && obj.rows > 0 ){
		                                	h = that.textures.get(obj.name).frames.__BASE.height * obj.rows;
		                                }

		                                if(obj.hasOwnProperty('width')){
		                                	w = obj.width;
		                                }
		                                if(obj.hasOwnProperty('height')){
		                                	h = obj.height;
		                                }

		                                app.game.tileSprite[obj.name] = that.add.tileSprite(obj.x, obj.y, w, h, obj.name);

		                                // by default give the tileSprite a body
									    that.physics.add.existing(app.game.tileSprite[obj.name], false);


		                                if(obj.hasOwnProperty('group') && obj.group > ''){
		                                	// check if it's a static group or normal group
		                                    if(app.game.group.hasOwnProperty(obj.group)){
			                                    app.game.group[obj.group].add(app.game.tileSprite[obj.name])
		                                    }else if(app.game.staticGroup.hasOwnProperty(obj.group)){
			                                    app.game.staticGroup[obj.group].add(app.game.tileSprite[obj.name])
		                                    }
		                                }


		                                // do we need to scale the tile/image
		                                var scaleX = 1;
		                                if(obj.hasOwnProperty('tileWidth')){
		                                    // get the actual image width
		                                    var scale = obj.tileWidth / app.game.this.textures.get(obj.name).frames.__BASE.width;
		                                    if(!isNaN(scale)){	
		                                        scaleX = scale;                        
		                                    }
		                                }
		                                app.game.tileSprite[obj.name].tileScaleX = scaleX;

		                                var scaleY = 1;
		                                if(obj.hasOwnProperty('tileHeight')){
		                                    // get the actual image width
		                                    var scale = obj.tileHeight / app.game.this.textures.get(obj.name).frames.__BASE.height;
		                                    if(!isNaN(scale)){
		                                        scaleY = scale;                        
		                                    }
		                                }
		                                app.game.tileSprite[obj.name].tileScaleY = scaleY;

		                                if(obj.hasOwnProperty('cameraAdjustX') || obj.hasOwnProperty('cameraAdjustY')){
		                                    // save this to be adjusted in update()
		                                    app.game.cameraAdjust.tileSprite[obj.name] = {x: obj.cameraAdjustX, y: obj.cameraAdjustY} 
		                                }



		                                app.game.setObjectProperties(app.game.tileSprite[obj.name],obj)


		                                app.game._addEditHandler(app.game.tileSprite[obj.name],item);


		                            }catch(er){
		console.log('create tilesSprite',er)                            	
		                            }
		                        

		                        //});
		                         
		                    },



		                    createPhaserObjects: function(that){
		                        // Creates sprites for each Item matching a `phaser className`



		                        // create the objects in the right order
		                        
		                        // First create the groups, because other objects will be added to them

		                        // TODO: create the items in the exact order they are in the list of objects
		                        // Currently they are created in the order of class types.

		                        app.game.createPhaserGroups(that);
		                        //app.game.createPhaserTileSprites(that);
		                        app.game.createPhaserSprites(that);
		                        app.game.createPhaserOtherFunctions(that);
		                        app.game.createPhaserColliders(that);
		                        app.game.createPhaserOverlaps(that);
		                        app.game.createPhaserAudios(that);
		                        //app.game.createPhaserConfigs(that); Now done in _init()
		                        app.game.createPhaserPointers(that);
		                        app.game.createPhaserJoysticks(that);
		                        app.game.createPhaserKeys(that);
		                        app.game.createPhaserTexts(that);




		                        // do setAll for setting group properties and data
		                        app.game.setAllObjectProperties(that);

		                          
		                    },




		                    createPhaserGroups: function(that){
		                        // Creates groups for each Item matching a `phaser-group`  className
		                        

		                        jQuery( jQuery('.phaser-group.item, .phaser-staticGroup.item').get().reverse()).each(function(){
		                        

		                            // try, in case errors creating one of the sprites
		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                var obj = app.utils.stringToObject(item.getText())

		                               
		                                obj.name = item.getTitle();
		                                obj.item = item;


		                                app.game.checkValidJSON(obj,item);


		                                if(jQuery(this).hasClass('phaser-staticGroup')){
			                                app.game.staticGroup[obj.name] = that.physics.add.staticGroup({
										        key: obj.name
										    });

			                                // save the JSON obj for later use
			                                app.game.staticGroup[obj.name].JSON = obj;
			                                app.game.staticGroup[obj.name].JSONString = item.getText();

			                                app.game.setObjectProperties(app.game.staticGroup[obj.name],obj)
			                                app.game.setObjectData(app.game.staticGroup[obj.name],obj);
			                                // there is a child in the group by default, remove it
			                                try{
		    	                                app.game.staticGroup[obj.name].remove(app.game.staticGroup[obj.name].getChildren()[0],true,true);
			                                }catch(er){}


		                                }else{
			                                app.game.group[obj.name] = that.physics.add.group({
										        key: obj.name
										    });
			                                // save the JSON obj for later use
			                                app.game.group[obj.name].JSON = obj;
			                                app.game.group[obj.name].JSONString = item.getText();

			                                app.game.setObjectProperties(app.game.group[obj.name],obj)
			                                //app.game.setObjectData(app.game.group[obj.name],obj)
		                                }



		                            }catch(er){console.warn(er)}

		                        });

		                        // create a general group for sprites that don't specify a group 
		                            app.game.group['_sprites'] = that.physics.add.group();
		                            //app.game.group['_sprites'].classType = Phaser.Physics.Arcade.Sprite; // default Object type is Arcade Sprite

		                            app.game.group['_sprites'].JSONString = '';
		                            app.game.group['_sprites'].JSON = app.utils.stringToObject(app.game.group['_sprites'].JSONString);

		                        // create a general staticGroup for images that don't specify a group 
		                            app.game.staticGroup['_images'] = that.physics.add.staticGroup();
		                            //app.game.staticGroup['_images'].classType = Phaser.Physics.Arcade.Sprite;
		                            app.game.staticGroup['_images'].JSONString = '';
		                            app.game.staticGroup['_images'].JSON = app.utils.stringToObject(app.game.staticGroup['_images'].JSONString);


		                    },




							currentObject: function(){
		                        // Returns the Phaser Game object related to the current Item
		                        // The object will be one of app.game.group/sprite/image etc.
		                        // Used within Item Action JavaScript
		                        // If no Game object can be found, it returns an empty object.
		                        

		                        // Go through all the object tyeps and see if an object matching this Item exists
		                        var rVal;

		                        jQuery.each(app.game.objectTypes,function(i,val){
		                            try{
		                                // for spriteSheets, look for a sprite
		                                if(val == "spriteSheet"){
		                                    val = "sprite";
		                                }
		                                var obj = app.game[val][app.getItem().getTitle()];
		                                if(typeof obj === "object" && Object.keys(obj).length > 0){
		                                    rVal  = obj;
		                                    return false;
		                                }
		                            }catch(er){
		console.log('currentObject ERROR',val,app.getItem(),er)
		                            }
		                        });

		                        return rVal;
		                    },



		                    _dataClass: function(){
		                    	// Class definition for Data object that is added to some game objects
		                    	// This replicates Phaser 3 object.data, which is created using setDataEnabled()
		                    	// In AppShed we want to support data on all Types

								var d = {
									initialize:function(t,e) { this.parent=t,this.events=e,e||(this.events=t.events?t.events:t),this.list={},this.values={},this._frozen=!1,!t.hasOwnProperty("sys")&&this.events&&this.events.once("destroy",this.destroy,this) },
									get:function(t){var e=this.list;if(Array.isArray(t)){for(var i=[],n=0;n<t.length;n++)i.push(e[t[n]]);return i}return e[t]},
									getAll:function(){var t={};for(var e in this.list)this.list.hasOwnProperty(e)&&(t[e]=this.list[e]);return t},
									query:function(t){var e={};for(var i in this.list)this.list.hasOwnProperty(i)&&i.match(t)&&(e[i]=this.list[i]);return e},
									set:function(t,e){if(this._frozen)return this;if("string"==typeof t)return this.setValue(t,e);for(var i in t)this.setValue(i,t[i]);return this},
									setValue:function(t,e){if(this._frozen)return this;if(this.has(t))this.values[t]=e;else{var i=this,n=this.list,s=this.events,r=this.parent;Object.defineProperty(this.values,t,{enumerable:!0,configurable:!0,get:function(){return n[t]},set:function(e){if(!i._frozen){var o=n[t];n[t]=e,s.emit("changedata",r,t,e,o),s.emit("changedata_"+t,r,e,o)}}}),n[t]=e,s.emit("setdata",r,t,e)}return this},
									each:function(t,e){for(var i=[this.parent,null,void 0],n=1;n<arguments.length;n++)i.push(arguments[n]);for(var s in this.list)i[1]=s,i[2]=this.list[s],t.apply(e,i);return this},
									merge:function(t,e){for(var i in void 0===e&&(e=!0),t)t.hasOwnProperty(i)&&(e||!e&&!this.has(i))&&this.setValue(i,t[i]);return this},
									remove:function(t){if(this._frozen)return this;if(!Array.isArray(t))return this.removeValue(t);for(var e=0;e<t.length;e++)this.removeValue(t[e]);return this},
									removeValue:function(t){if(this.has(t)){var e=this.list[t];delete this.list[t],delete this.values[t],this.events.emit("removedata",this.parent,t,e)}return this},
									pop:function(t){var e=void 0;return!this._frozen&&this.has(t)&&(e=this.list[t],delete this.list[t],delete this.values[t],this.events.emit("removedata",this,t,e)),e},
									has:function(t){return this.list.hasOwnProperty(t)},setFreeze:function(t){return this._frozen=t,this},
									reset:function(){for(var t in this.list)delete this.list[t],delete this.values[t];return this._frozen=!1,this},
									destroy:function(){this.reset(),this.events.off("changedata"),this.events.off("setdata"),this.events.off("removedata"),this.parent=null},
									freeze:{get:function(){return this._frozen},set:function(t){this._frozen=!!t}},
									count:{get:function(){var t=0;for(var e in this.list)void 0!==this.list[e]&&t++;return t } } 
								};
								d.initialize({once:function(){},emit:function(){},off:function(){}});
								return d; 

		                    },


							doCameraAdjust: function(){
								// adjust x and y of sprites as camera moves
								// runs in update()
								// Each key should have object {x:, y:}
								
								// look for sprites and tilesprites
								for (var ts in app.game.cameraAdjust.tileSprite){
									try{
										if(!isNaN(app.game.cameraAdjust.tileSprite[ts].tilePosition.x)){
											app.game.tileSprite[ts].tilePosition.x = (game.camera.x * app.game.cameraAdjust.tileSprite[ts].x);
										}
										if(!isNaN(app.game.cameraAdjust.tileSprite[ts].tilePosition.y)){
											app.game.tileSprite[ts].tilePosition.y = (game.camera.y * app.game.cameraAdjust.tileSprite[ts].y);
										}

									}catch(er){console.log(er)}
								}
							},


		    				_doPlayGame: function(){

								app.game._setUIGame();
								app.game._launchGame();

								// Resume and Wake
								app.game.resume();
								app.game.wake();

		    				},

		    				_doShowObjects: function(){
								app.game._setUIObjects();
								app.game._showObjects();
		    				},


							_fixInvalidNames: function(){

								var str = "";

								// Warn if invalid names
								jQuery('.phaser.item').each(function(){
									var title = jQuery(this).find('.title').text();
									if(title.match(/\W/)){
										str += title+' ';
									}
								});

								if(str>""){
									this.warn(0,'Invalid object names: The following objects have invalid names. These can cause errors in your game. '+str)
								}

								// Don't try to fix the errors (object title is fixed before saving, so should not occur.)

								/*

								var el = this._getFirstInvalidName();
								if(el){
									app._onceEditItem = function(){
	console.warn('editing item, fixing',el,el.find('.title').text())
									}

									try{
										el.click()

										// wait for the context menu to be ready

										app.setInterval(function(){

											if(jQuery('.dropdown-menu>li>a:contains("Edit")').length){
												jQuery('.dropdown-menu>li>a:contains("Edit")').each(function(){
													// if completed, stop interval
													app.clearInterval("app-game-editItem");

													// Click the Navigate button to run the game
													this.click();

												});
											}

										},100,3000,"app-game-editItem");


									}catch(er){
	console.warn('_fixInvalidNames error',er)								
									}

								}

								*/

							},








							// Fix the title
							_fixTitle: function(str,onChange){

								// Format the name item_title to remove special characters and spaces
								// onChange indicates that the title is being changed in the Edit Item panel

								str = str.replace(/\W/g,'_');

								// Check if there are any existing items with this name
								// Max count: if being changed, then cannot have any in list. If initial, then there can be one in the list, this item itself.
								var maxCount = 1;
								if(onChange) {maxCount = 0}
								if(jQuery('.items-inner .phaser.item .title:contains('+str+')').filter(function() {
									    return jQuery(this).text() === str;
								}).length > maxCount){
									// append _
									str += '_';
								}
								return str
							},	

								



							_getBodyObjectNames: function(){
								// return an array of  names for all objects with a body
								var arr = [];
								jQuery.each(app.game._visibleTypes,function(i,type){
									try{
										jQuery.each(app.game[type],function(name,obj){
											// names starting with _ are internal
											if(!name.match(/^_/)){
												arr.push(name)
											}
										});
									}catch(er){}
								});

								return arr.sort();
							},



							_getColliderOptions: function(val){
								// return an array of  names for all colliders and overlap options
								var options = app.game._getGroupNames().concat(app.game._getBodyObjectNames()).concat(['']);

								// Add the current val - sometimes the current val is not one of the options
								if(val > '' && !jQuery.inArray(val,options)){
									options.push(val);
								}

								return options.sort();

							},



		    				getConfig: function(){
		    					// return the config object
		    					// There should only be one, so return the first, if multiple
		    					// Or return empty object if none
		    					
		    				
			    				var keys = Object.keys(app.game.config);
			    				if(keys && keys.length){
			    					return app.game.config[keys[0]]
			    				}

			    				return {};

		    				},

							_getFirstInvalidName: function(){
								// Return the first item (jQuery) that has an invalid name

								var rVal;
								jQuery('.phaser.item').each(function(){
									str=jQuery(this).find('.title').text();
									if(str.match(/\W/)){
										rVal = jQuery(this);
										return false;
									}
								}); 	
								return rVal;						
							},



							_getGroupNames: function(){
								// return an array of all the group names (static and normal groups)
								var arr = [];
								jQuery.each(app.game.group,function(group,val){
									// groups starting with _ are internal
									if(!group.match(/^_/)){
										arr.push(group)
									}
								});
								jQuery.each(app.game.staticGroup,function(group,val){
									// groups starting with _ are internal
									if(!group.match(/^_/)){
										arr.push(group)
									}
								});
								return arr.sort();
							},




		    				_getObjectTypeFromClass: function(strClass){
		    					// returns the object type from a list of classes
		    					// looks for specific classes such as phaser-sprite, phaser-collider etc
		    					
		    					// get a list of valid classes by going through the _tools
		    					// only do this once per reload, the list is static
		    					
		    					if(!app.game._toolTypes.length){
		    						for(var i=0;i<app.game._tools.length;i++){
										for(var j=0;j<app.game._tools[i].tools.length;j++){
											var tool = app.game._tools[i].tools[j];

											var thisType = tool.itemCustomClass.replace(/.* phaser-/,"");
											app.game._toolTypes.push(thisType)
										}
									}
		    					}

		    					// go through all the types, and if a match in strClass, that's the type
		    					// create an array from strClass
		    					var arrClass = strClass.split(/ /);
		    					var rVal;
		    					jQuery.each(app.game._toolTypes,function(i,val){
		    						if(arrClass.contains("phaser-"+val)){
			    						rVal = val;
		    						}
		    					})
		    					return rVal;
		    				},


		                    _getToolByClass: function(strClass){
		                    	// go through the list of tools (grouped in categories)
		                    	// return the tool matching the class of this item
								for(var i=0;i<app.game._tools.length;i++){
									for(var j=0;j<app.game._tools[i].tools.length;j++){
										var tool = app.game._tools[i].tools[j];

										if(app.game._getObjectTypeFromClass(strClass) == app.game._getObjectTypeFromClass(tool.itemCustomClass)){
											return tool;
										}
									}
								}
		                    
		                    },

		                    getType: function(name){
		                        // return the type of object that has the name `name`
		                        // check groups, sprites, tileSprites etc



		                        var rVal ;
		                        // go through all the supported types
		                        jQuery.each(app.game._collectionNames,function(i,type){
		                            // for each type, go through the objects of this type
		                            jQuery.each(app.game[type],function(key,obj){
		                                if(key == name){ 
		                                    rVal = type;
		                                }
		                            });
		                        });
		                        return rVal;                        
		                    },


		                    _getTypeFromElement: function(el){
		                    	// Returns the Phaser Object type by inspecting the Class list
		                    	return jQuery(el).attr('class').replace(/phaser-setup/,"").replace(/phaser-object/,"").replace(/phaser-event/,"").replace(/phaser-graphic/,"").replace(/phaser-function/,"").replace(/.*?(phaser-\w+).*/,"$1").replace(/phaser-/,"");
		                    },



							hide: function(){
								jQuery("#phaser-canvas").hide();
								jQuery(".app-navigator-inner").show();
								app.refreshScroll();
							},







							init: function(conf){
								// initialise the game
								// all parameters are optional and can be used to override the default values


		                        // Empty all the containers
		                        app.game._resetObjectContainers();


		                        // Create the Config objects (should only be one)
		                        app.game.createPhaserConfigs(this); 

		                        // use the parameter, or get the config from the Item
								var config = conf || app.game.getConfig();





								// if no properties, check the text field for JSON
								if(Object.keys(config).length == 0){

		                            try{

		                            	
		                            	// Warn if more than one
		                                if(jQuery('.phaser-config.item').length > 1){
		                                	app.game.warn(2,'You have more than one Game Config objects')
		                                }


		/*                                

		                                var item = app.getItem(app.getIdFromDOMId(jQuery('.phaser-config.item')[0].id));
		                                var text = item.getText();
		                                var obj = app.utils.stringToObject(text);
		                                var objData = {"data":{}}; // extra object just to hold data properties
		                                if(obj.hasOwnProperty("data")){
		                                	objData.data = obj.data;
		                                }
		*/


		                                // Use this if it has some properties
		                                if(Object.keys(obj).length){
		                                	config = obj;
		                                }else{
		                                	// do some checks
		                                	if(!app.game.checkValidJSON(obj,item)){
		                                		app.game.warn(2,'The JSON for Game Config has errors');

		                                		if(text.match(/scene/).length){
			                                		app.game.warn(2,"Do not include 'scene' in the Text field. If you want to configure the 'scene' then you need to move your config to the Action.");
			                                		// try fix it
			                                		text = text.replace(/,(\W|\n)*?scene\s*:\s*\{(.|\n)*?\}/,"")
			                                		obj = app.utils.stringToObject(text);

					                                // Use this if it has some properties
					                                if(Object.keys(obj).length){
				                                		app.game.warn(2,"Ignoring 'scene' in Text field");
					                                	config = obj;
					                                }
		                                		}
		                                	}
		                                }
		                            }catch(er){
		                        		app.game.warn(2,"Error retrieving settings from Text field");
		                            }
		                        }



		                        // Now make sure all data is added to the config
		                        // already done when creating Config objects
		                        // app.game.setObjectData(config,objData)


					
								// DEFAULTS
								// Make sure config has the following properties (using these defaults)
							    if(!config.hasOwnProperty("data")){
									app.game.setObjectData(config);					    	
							    }
							    if(!config.hasOwnProperty("type")){
									config.type = Phaser.CANVAS;					    	
							    }
							    if(!config.hasOwnProperty("width")){
									config.width = 350;					    	
							    }
							    if(!config.hasOwnProperty("height")){
									config.height = 450;					    	
							    }
							    if(!config.hasOwnProperty("parent")){
									config.parent = "phaser-canvas";					    	
							    }else if(config.parent == "phaser-example"){
									config.parent = "phaser-canvas";					    						    	
							    }
							    if(!config.hasOwnProperty("physics")){
									config.physics = {
								        default: 'arcade',
								        arcade: {
								            debug: false
								        }
							        }
								    if(config.data.get('debug')){
								    	config.physics.arcade.debug = true;
								    }

							    }
							    if(!config.hasOwnProperty("scene")){
									config.scene = {};					    	
							    }



							    // Save config in app
								//app.game.config = config;

								// Remove stuff that is not supported - before returning to run()
								var r = {};
								jQuery.each(config,function(key,val){
									// only accept these keys
									if(app.game._validConfigKeys.contains(key)){
										r[key] = val;
									}
								})

								return r;
							},




							_installGameMaker: function(){


								// Code to Create the Game Maker
								// 
								// TODO: 
								// 1) How to set the Image-Link image using jQuery
								// 2) How to set the Action-JavaScript code using jQuery (CodeMirror)
								// 3) How to set the Action-Audio
								// 4) How to set the Action-Blockly
									
								// If the Game tab is present, installation has been done
								if(window._gm_installed){
									return;
								}

						    	window._gm_installed = true;



								// Fix the Events tab icon
								jQuery('#events-btn-tab i').removeClass('icon-star').addClass('icon-time')

								//Fix line-height
								//app.addStyles('.box2 .content .icon h3{line-height: 1.5em}')




								// Remove explicit values on app-navigator, so UI works properly for Move items
								jQuery(".app-navigator").css('height','inherit');
								jQuery(".app-navigator").css('width','unset');

								jQuery(".app-navigator").css('height','');
								jQuery(".app-navigator").css('width','');
								jQuery(".app-navigator").css('top','');
								jQuery(".app-navigator").css('bottom','');

								// Add some things
								

								// LEFT PANEL
								app.game._insertLeftPanel();

								app.game._insertGameTools();



						    	setTimeout(function(){app.refreshScroll();},1000);


							},


							_insertGameTools: function(){

								if(jQuery('#nav-tabs_game').length == 0){

									// Add a Games tab
									var gTab = jQuery('.toolbox ul.nav-tabs li:first').clone().attr("id","nav-tabs_game").removeClass("active");
									gTab.find('a').removeClass("items").addClass("games").attr('data-target','tab_games').html('<i class="icon-gamepad"></i> Games')
									jQuery('.toolbox ul.nav-tabs li:first').after(gTab);

									// Add Games content
									// get the Items content
									var gContent = jQuery('<div class="tab-pane" id="tab_games">')
									jQuery('.toolbox #tab_items').after(gContent)


									// add code for tabs  clicked
									jQuery('.toolbox ul.nav-tabs li').click(function(){
										// inactivate all other tabs
										jQuery('.toolbox ul.nav-tabs li').each(function(){
											jQuery(this).removeClass('active')
										})

										// hide game content (default behaviour)
										jQuery('.toolbox #tab_games').removeClass("active");
																		

										jThis = jQuery(this);
										jThis.addClass('active')

										// if game tab clicked, show Game Maker
										if(jThis.attr("id") == "nav-tabs_game"){

											app.game._showGameTools();

											// if not in GM, load it
											if(!jQuery('body').hasClass('gamemaker')){
												app.game._showProduct('gamemaker');
											}


										}else if(jThis.find("a[data-target='tab_items']").length){
											// Items clicked load AB 
											
											// only if we're in GM, 
											if(jQuery('body').hasClass('gamemaker')){
												app.game._showProduct('appbuilder');
											}

										}
									})


									// Now add all the Tools
									jQuery.each(app.game._tools,function(i,section){
										gContent.append('<h1><span class="square '+section.icon+'"></span>'+section.name+'</h1>')
										var container = jQuery('<div class="content clearfix"></div>').appendTo(gContent);

										jQuery.each(section.tools,function(j,tool){
											// if inactive , add a class
											var inactiveClass = (tool.hasOwnProperty("inactive") && tool.inactive) ? "inactive" : ""; 

											if(!tool.hasOwnProperty('hidden') || !tool.hidden == false){

												jQuery('<a  class="icon '+inactiveClass+'"><div class="tool '+tool.icon+'"></div><h3>'+tool.name+'</h3></a>').click(function(){
														// When the tool is clicked...
														if(!tool.inactive){
															// Add an Item using the properties of the tool
															app.game._addPanelItem(tool);										
														}
												}).appendTo(container);
											}
										});

									});

								}

							},


							_insertLeftPanel: function(){
								// Insert the content for the 

								try{

									if(jQuery('#phone .gm-left-panel').length == 0){
										var jLeftPanel = jQuery('<div class="gm-left-panel"></div>').prependTo(jQuery('#phone'));




										// Add View Mode Buttons
										jQuery('<div class="view-mode-box">          <button id="gm-view-objects" type="button" class="btn btn-big btn-dark active" >View Objects</button>          <button id="gm-play-game" type="button" class="btn btn-big btn-light" >Play Game</button>  </div>').appendTo(jLeftPanel);

										jQuery('#gm-view-objects').click(function(){
											app.game._doShowObjects()
										})
										jQuery('#gm-play-game').click(function(){
											app.game._doPlayGame()
										})


										// Object Filters
										jQuery('<div class="left-panel-box objects-visible">   <form>     <fieldset>       <legend>Filters</legend>     <label><input type="checkbox" id="gm-filter-setup" class="gm-filter gm-filter-collection" data-class="phaser-setup"> Setup</label>       <label><input type="checkbox" id="gm-filter-objects" class="gm-filter gm-filter-collection" data-class="phaser-object"> Sprites</label>       <label><input type="checkbox" id="gm-filter-graphic" class="gm-filter gm-filter-collection" data-class="phaser-graphic"> Graphics</label>       <label><input type="checkbox" id="gm-filter-event" class="gm-filter gm-filter-collection" data-class="phaser-event"> Events</label>       <label><input type="checkbox" id="gm-filter-function" class="gm-filter gm-filter-collection" data-class="phaser-function"> Functions</label>     <hr>        <label><input type="checkbox" id="gm-filter-all" class="gm-filter"> View All Objects</label>      <label><input type="checkbox" id="gm-filter-hidden" class="gm-filter" data-class="phaser-hidden"> Show Hidden Objects</label>      </fieldset>   </form>   </div>').appendTo(jLeftPanel);



										// Game Controls
										jQuery('<div class="left-panel-box game-visible">   <form>     <fieldset>       <legend>Controls</legend>       <label class="gm-link-play gm-game-controls"><i class=" icon-play"></i> Play</label>       <label class="gm-link-pause gm-game-controls"><i class=" icon-pause"></i> Pause</label>       <!--<label class="gm-link-resume gm-game-controls"><i class=" icon-repeat"></i> Resume</label>-->       <label class="gm-link-sleep gm-game-controls"><i class=" icon-off"></i> Sleep</label>       <!--<label class="gm-link-wake gm-game-controls"><i class=" icon-time"></i> Wake</label>-->       <label class="gm-link-stop gm-game-controls"><i class=" icon-stop"></i> Stop</label>   </fieldset> <br>  <fieldset>       <l gm-game-controlsgend>Settings</legend>            <label><input type="checkbox" id="gm-setting-editOnClick" class="gm-setting"  > Edit-on-Click</label>    </fieldset>   </form>   </div>').appendTo(jLeftPanel);

										// Help
										jQuery('<div class="left-panel-box game-visible objects-visible">   <form>     <fieldset>       <legend>Help &amp; Resources</legend>                                                   <label class="gm-link-gmbasics">Game Maker Basics</label>            <label><a href="https://appshed.com/create/game-maker" target="_blank">User Guide</a></label>            <label>Templates <div class="edubadge" style="">EDU</div></label>            <label>Master Class (training)<div class="edubadge" style="">EDU</div></label>            <label class="gm-link-gamecourse">Game Course (15-Part)<div class="edubadge" style="">EDU</div></label>                           </fieldset>   </form>   </div> ').appendTo(jLeftPanel);




										jQuery('.gm-link-gmbasics').click(()=>{
											app.openAcademyPanel(()=>{
												app.openAcademyCategory("Game Making",()=>{app.showAcademyLoader();}); 
											});
											app.showAcademyLoader();
											setTimeout(()=>{
												app.openAcademyCategory("Game Making"); 
											},2000)
										});

										jQuery('.gm-link-gamecourse').click(()=>{
											app.openAcademyPanel(()=>{
												app.openAcademyCategory("Game Making",()=>{app.showAcademyLoader();}); 
											});
											app.showAcademyLoader();
											setTimeout(()=>{
												app.openAcademyCategory("Game Making"); 
											},2000)
										});

										// Game Controls
										jQuery('.gm-link-play').click(()=>{
											jQuery('.gm-game-controls').removeClass('active');
											jQuery('.gm-link-play').addClass('active');
											app.game._doPlayGame();
										});
										jQuery('.gm-link-pause').click(()=>{
											jQuery('.gm-game-controls').removeClass('active');
											jQuery('.gm-link-pause').addClass('active');
											app.game.pause();
										});
										jQuery('.gm-link-resume').click(()=>{
											jQuery('.gm-game-controls').removeClass('active');
											jQuery('.gm-link-resume').addClass('active');
											app.game.resume();
										});
										jQuery('.gm-link-wake').click(()=>{
											jQuery('.gm-game-controls').removeClass('active');
											jQuery('.gm-link-wake').addClass('active');
											app.game.wake();
										});
										jQuery('.gm-link-sleep').click(()=>{
											jQuery('.gm-game-controls').removeClass('active');
											jQuery('.gm-link-sleep').addClass('active');
											app.game.sleep();
										});
										jQuery('.gm-link-stop').click(()=>{
											jQuery('.gm-game-controls').removeClass('active');
											jQuery('.gm-link-stop').addClass('active');
											app.game.stop();
										});


										// event handlers for filters
										jQuery('.gm-filter').change(function(){

											app.game._applyFilter.call(this);

										});
									
									

									}

								}catch(er){
		console.warn('app.game._insertLeftPanel',er)
								}


							},



							isVisible: function(){
								return (jQuery('#phaser-canvas').css('display') == "block")
							},



							_launchGame: function(){

								// show the screen 
								//app.hideDeepLoader();

								// If restart required, first stop
								if(app.game._requireRestart){
									app.game.stop();
								}

								app.game.show();

								// if the game has not been launched, do that
								if(!window.game || !window.game.hasOwnProperty("isBooted") || !window.game.isBooted){
									try{
										// find a Config item
										jQuery('.phaser-config.item:first').each(function(){
											this.click()

											// wait for the context menu to be ready

											app.setInterval(function(){

												if(jQuery('.dropdown-menu>li>a:contains("Navigate")').length){
													jQuery('.dropdown-menu>li>a:contains("Navigate")').each(function(){
														// if completed, stop interval
														app.clearInterval("app-game-showGame");

														// highlight the Play control
														jQuery('.gm-game-controls').removeClass('active');
														jQuery('.gm-link-play').addClass('active');

														// Click the Navigate button to run the game
														this.click();

													});
												}

											},100,3000,"app-game-showGame");


										});
									}catch(er){
		console.log('_showGame error',er)								
									}
								}
							},



							_launchGameShowGameTools: function(){ 

								// launch the game, but then hide it and show game tools
								// this happens when Game Maker is started, or when the game is reset after adding objects

								// show the screen 
								//app.hideDeepLoader();

								//app.game._ide = "objects";
								app.game._setUIObjects();
		    				

								// run the game, but pause it and show tools once loaded
								// We need the game objects instantiated to be able to edit properties
								app.game._pause = true;
								app.game._onPause = function(){
									app.game.hide();	
									//jQuery(".app-navigator-inner").show();
									app.hideDeepLoader();
								}

								app.game._showGameTools();

								// if theres a Config, launch the game (it will pause and hide to show tools)
								if(jQuery('.phaser-config.item').length){
									app.game._launchGame();
								}else{
								// if no Config, just show tools
									app.game.hide();	
									app.game._showGameTools();
									//jQuery(".app-navigator-inner").show();
									app.hideDeepLoader();
								}
							},


		                    loadPhaserItems: function(that){
		                        // looks for items with the CustomClass belonging to Phaser and loads them
		                        //  `phaser-image`
		                        //  `phaser-spriteSheet`
		                        // Spritesheets must include the width and height as JSON in the Text: 
		                        // `{ width: 123, height: 456 }`
		                        
		                        
		                        jQuery('.phaser-image.item, .phaser-sprite.item, .phaser-tileSprite.item').each(function(){
		                            try{

		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                that.load.image(item.getTitle(), 'https://cors.appshed.com/?u='+item.getLargeImage());

		                            }catch(er){
		console.log('loadPhaserItems sprite er',this,er)                                
		                            }
		                        })
		                        
		                        
		                        jQuery('.phaser-spriteSheet.item').each(function(){
		                            try{
		                                var item = app.getItem(app.getIdFromDOMId(this.id));
		                                
		                                var obj = app.utils.stringToObject(item.getText());

		                                if( !isNaN(obj.width) && !isNaN(obj.height)){
		                                	// the method is "spritesheet" in lower Case
		                                    that.load.spritesheet(item.getTitle(), 'https://cors.appshed.com/?u='+item.getLargeImage(),{frameWidth: obj.width, frameHeight: obj.height});
		                                }
		                            }catch(er){
		console.log('loadPhaserItems spriteSheet er',this,er)                                
		                            }
		                            
		                        })

		                        jQuery(".phaser-audio.item[data-linktype='sound']").each(function(){
		                            try{
		                                var item = app.getItem(app.getIdFromDOMId(this.id));                                
		                                that.load.audio(item.getTitle(),'https://cors.appshed.com/?u='+jQuery(this).data('href'))

		                            }catch(er){
		console.log('loadPhaserItems audio er',this,er)                                
		                            }
		                            
		                        })
		                        
		                        
		                    },



							_onClickEditButtons: function(){

									// remove extra gm-clssses 
									jQuery('#popup-container').removeClass('gm-fixedImage');

									// ================================================================ 
									// CLOSE

									
									if(jQuery(this).data('popup')=='close'){

										// In case the user changed some data values, reset them back to what they were, using the values in the textarea			
										// TODO: This needs to be implemented

										if(app.game._ide == "game"){
											setTimeout(()=>{app.game.resume()},500);	
										}
									}else{


										// ================================================================ 
										// SAVE 

										// On Save require some data updates before saving
										if(jQuery(this).data('popup')=='post'){
											// The item_text already contains the modified JSON... 


										}

										// ================================================================ 
										// DELETE and SAVE 

										// Game must be relaunched because there are probably changes that need to be applied

										// hide the highlight element and show loader while we reload
										jQuery('#cloned-el, .phone-element-highlight').css('display','none');
										app.showDeepLoader();
										app.hideLoader(100); // delay to make sure we get it 




										// Once the save is complete, and Game Tools display, then stop (and restart) the game
										// to load fresh details
										app._onceGameTools = ()=>{
											app.game.stop();  										
										}


									}
							},





							_onJoystickPointerdown: function(pointer){
								app.game.this.joystick.setVisible(true);
								app.game.this.joystick.x=pointer.x;
								app.game.this.joystick.y=pointer.y;
								app.game.this.joystick.update();

							},

							_onJoystickPointerUp: function(pointer){
								app.game.this.joystick.setVisible(false);
							},


							_onJoystickUpdate: function(){
								
		                        // Joystick items
		                        // Check each joystick Item and the function if required


								var cursorKeys = app.game.this.joystick.createCursorKeys();

		                        jQuery.each(app.game.joystick,function(key,obj){
		                        	// the obj is the joystick object.

			                        if(
						            	(obj['on_up'] && cursorKeys.up.isDown && !cursorKeys.left.isDown && !cursorKeys.right.isDown) ||
						            	(obj['on_down'] && cursorKeys.down.isDown && !cursorKeys.left.isDown && !cursorKeys.right.isDown) ||
						            	(obj['on_left'] && cursorKeys.left.isDown && !cursorKeys.up.isDown && !cursorKeys.down.isDown) ||
						            	(obj['on_right'] && cursorKeys.right.isDown && !cursorKeys.up.isDown && !cursorKeys.down.isDown) ||

						            	(obj['on_up_left'] && cursorKeys.up.isDown && cursorKeys.left.isDown) ||
						            	(obj['on_up_right'] && cursorKeys.up.isDown && cursorKeys.right.isDown) ||
						            	(obj['on_down_left'] && cursorKeys.down.isDown && cursorKeys.left.isDown) ||
						            	(obj['on_down_right'] && cursorKeys.down.isDown && cursorKeys.right.isDown) 

			                        ){
										app.game._funcs['joystick'+obj.JSON.item.domId].call(app.game.this)
										return;
			                        }
			                    });



							},


							


							_onLoadApp: function(){
								// Things to do every time the app loads
								try{

									// app.id 1 is the "app listing" screen, 
									if(app.id == 1){
										
										/*
										if(app.currentProduct == "gamemaker"){
											// Hiden game-specific controls
											jQuery('.gm-left-panel>div').css('display','none');
											jQuery('.gm-left-panel>div.objects-visible.game-visible').css('display','block');

											// delay to wait for the updates to arrive
											setTimeout(function(){
												var msg = 'Click the + to create a new app';

												// if there are apps already
												if(jQuery('.apps-inner .item').length){
													msg += ',<br>or select one of your existing apps'
												}
												
												msg += '.'
												jQuery('.span-toolbox').prepend('<div class="gm-no-app-open-msg" style="padding-top: 100px; padding-left: 30px; font-size: 20px; line-height: 30px;">'+msg+'</div>');

											},1000);

											// show a help message
										}
										*/
									}else if(app.id > 1){

									

										// the Elements change, so we need to make sure  Phaser canvas is inserted
										// inject a phaser-canvas if not already present
										if(jQuery("#phaser-canvas").length == 0){
											jQuery(".app-navigator").prepend("<div id='phaser-canvas'></div>");
										}
		   
									}
								
								}catch(er){
		console.warn("app.game._onLoadApp",er)
								}

							},




		                    _onLoadEditPanel: function(callback){

		                    	app.game.pause();

		                    	// get the obj for this Tool 
		                    	var obj = app.game._getToolByClass(jQuery('#style_costumclases').val());

		                    	if(obj){
			                    	app.game._prepareEditPanel(obj,callback);	                    		
		                    	}
		                    },


							pause: function(callback){
								// pause the game 
								// optional `callback` called once paused
								
								app.game.state = "pause"

								try{
									
									// if there is no `this` (game object) then the app has probably been closed. so force stop
									app.game.this.scene.pause('default')

									jQuery('.event.onGameStop.item').each(function(){						
						                app.getItem(app.getIdFromDOMId(this.id)).callActions();
						            })

									if(callback){
							            callback.call(app.game.this);
									}

								}catch(er){
		console.warn("app.game.pause Error",er)							
								}
							},





							_preloadStart: function(){
								// called at the start of scence.preload()
								// The context of `this` is the `this` from the create() function					

								// Load the Virtual Joystick Plugin (if there are joystick items)
							    if(jQuery('.phaser-joystick.item').length){
								    this.load.plugin('rexvirtualjoystickplugin', 'http://cors.appshed.com/?u=https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/includes/appbuilder/rexrainbow-virtualjoystickjs.js', true);
								}

								app.game._createHandles.call(this);

		                        app.game.createPhaserPreload(this);
		                        app.game.createPhaserCreate(this);
		                        app.game.createPhaserUpdate(this);
		                        app.game.createPhaserRender(this);


								try{

									// load the close button
									//this.load.image("_closeButton", 'https://cors.appshed.com/?u=http://d3s8dljl1bm5rz.cloudfront.net/7915413');						
									
								}catch(er){console.log(er)}


								// Call any phaser-create Items
		                       	// The functions should have been added by _prepareGameFuncs 
		                    	app.game._funcs.preloadCaller.call(this)

							},


							_prepareEditPanel: function(obj,callback){
								// Make some changes to the edit panel based on `obj`
								// `obj` is the Tool Object from _tools

								// make some UI changes to the Edit Panel
								// Call the `callback` once done
								
								// If the game is active
								if(app.game.isVisible()){
									// Hide the Cloned Element (used to highlight the Item in normal App Builder)
									jQuery('#cloned-el').css('display','none')
								}

								// For fixedImage (not editable by user) add some classes to the Panel
								if(obj.hasOwnProperty("fixedImage") && obj.fixedImage){
									jQuery('#popup-container').addClass('gm-fixedImage')

									// clone it, to remove action
									// delay as it is still loading
									setTimeout(function(){

										try{

											jQuery('.gamemaker #popup-container .file-chooser-image.custom-input').before(jQuery('.gamemaker #popup-container .file-chooser-image.custom-input').clone());
											jQuery('.gamemaker #popup-container .file-chooser-image.custom-input:not(:first)').remove()													


											// rename Tab Edit Image Link
											jQuery('#popup-container a:contains("Edit Image Link")').html(jQuery('#popup-container a:contains("Edit Image Link")').html().replace("Edit Image Link", "Properties"));

										}catch(er){}

									},200);

								}




								// TITLE field

								// rename to "Object Name"
								jQuery('label[for*=item_title]').text('Object Name');

								// Add Help Text
								var itemHelp = app.game._toolsHelpText.title;
								if(obj.helpText){
									itemHelp += '<br><br>'+obj.helpText;
								}

								jQuery('#item_title').siblings('.help-block').html(itemHelp).css('display','block');




								// IMAGE field
								
								// Add a linear gradient to make sure white images are visible
								var gradientBG = function(){
									var str = jQuery('.file-chooser-image.custom-input').attr('style');
									if(!str.match(/linear-gradient/)){
									  str = str.replace(/(url\(.*?\))/,"$1, repeating-linear-gradient( 45deg,  #ffffff,  #ffffff 10px,  #d1d1d1 10px,  #d1d1d1 20px)")
									  jQuery('.file-chooser-image.custom-input').attr('style',str);
									}
								}
								gradientBG();

								// Track changes to the image
								MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

								var trackChange = function(element) {
								  var observer = new MutationObserver(function(mutations, observer) {
								    if(mutations[0].attributeName == "value") {
								        jQuery(element).trigger("change");
								    }
								  });
								  observer.observe(element, {
								    attributes: true
								  });
								}

								trackChange( jQuery("input[name=item_image]")[0] );


								// When the Image changes
								jQuery("input[type=hidden]").bind("change", function() {

									// set the gradient background
									
									gradientBG();
									
									// Remove  width and height from  JSON 
									//  (so that the new image dimensions are used)

									// Don't do this for spriteSheet as their width/height do not match the image dimensions, but the frame dimensions, so that would cause the spriteSheet not to appear

									if(!obj.itemCustomClass.match(/phaser-spriteSheet/)){


										try{
											var j = JSON.parse(jQuery('#item_text').val());
											if(j.hasOwnProperty('width')){ delete j.width}
											if(j.hasOwnProperty('height')){ delete j.height}
											// put the JSON back
											jQuery('#item_text').val(JSON.stringify(j,null,"\t") )									

											// also remove the gui controllers for width and height
											jQuery.each(app.game._guis.main.__controllers,function(i,con){
												try{
													if(con.property =="width" || con.property=="height"){
														app.game._guis.main.remove(con)
													}
												}catch(er){}
											})										
										}catch(er){}

									}
									
									// Hide the GUIs and JSON
									jQuery('.control-group:has("#item_text")').css('display','none')
									jQuery('.control-group.dat-gui').css('display','none')

									// Show an alert message
									jQuery('#edit_item').prepend('<div class="alert">You must save this object after changing the image.</div>')
								 });



								// TEXT field

								// Rename to JSON 
								jQuery('label[for*=item_text').text('JSON');

								// convert the text to JSON (with some error handling)
								
								var item_JSON = {};
								try{
									item_JSON = JSON.parse(jQuery('#item_text').val())
								}catch(er){
								}

								// Make the JSON look pretty
								jQuery('#item_text').val(JSON.stringify(item_JSON,null,"\t") )


								// Add Help Text
								var itemHelp = app.game._toolsHelpText.text;							
								jQuery('#item_text').siblings('.help-block').html(itemHelp).css('display','block')							






								// PROPERTIES GUI

								// When adding new Items (from tools), the Properties and Object are not valid, so all this code below will fail. 		
								try{


									var name = jQuery('#item_title')[0].value;
									var type = app.game.getType(name);


									var guiWidth = jQuery('#edit_item .control-group:last').css('width');
									var object; 

//									try{
										object = app.game[type][name];
//									}catch(er){
//										throw er;
//									}

									var mainProps;

									// MAIN properties
									// Take the full JSON and remove body and data
									// Also add some extras
									try{
										 mainProps = item_JSON;
										 delete mainProps.body;
										 delete mainProps.data;

										 // Add hidden property
										 mainProps.hidden = false;
										 if(String(jQuery('#style_costumclases').val()).match(/phaser-hidden/)){
											 mainProps.hidden = true;
										 }

										 // For groups, andd staticGroup property
										 if(String(jQuery('#style_costumclases').val()).match(/phaser-group/)){
											 mainProps.staticGroup = false;
										 }
										 if(String(jQuery('#style_costumclases').val()).match(/phaser-staticGroup/)){
											 mainProps.staticGroup = true;
										 }


										 // Visible types require certain property
										 if(app.game._visibleTypes.includes(type)){

										 	// list the required properties for Main, and their default values
										 	var _visibleTypesMainProps = {
										 		"group": {"default": ""},
										 		"x": {"default": 100},
										 		"y": {"default": 100},
										 		"width": {"default": object.width},
										 		"height": {"default": object.height},
										 	}

											// Make sure visible types these properties
										 	jQuery.each(_visibleTypesMainProps,function(property,settings){
										 		try{
												 	if(!mainProps.hasOwnProperty(property)){
													 	mainProps[property] = settings['default'];
												 	}										 			
										 		}catch(er){
console.warn('ERROR app.game._visibleTypesMainProps',property,settings)										 			
										 		}
										 	})


										 	
										 }

										 // Audio - add allowSimultaneous
										 if(type == 'audio' && !mainProps.hasOwnProperty('allowSimultaneous')){
										 	mainProps.allowSimultaneous = false; // by default don't allow simultaneous playing
										 }


										 // if action can be delayed, add some delay an repeat properties
										 if(app.game._delayActionTypes.includes(type)){
										 	// delay before first calling this method
											if(!mainProps.hasOwnProperty('delay')){
											 	mainProps.delay = 0;
											}

											// TODO

											// Maximum times this function will be called (-1 is unlimited, 0 means first time then no repeats.)
											if(!mainProps.hasOwnProperty('maxRepeats')){
											 	//mainProps.maxRepeats = -1;
											}
											// Delay between repeat calls of this method in milliseconds
											if(!mainProps.hasOwnProperty('delayRepeatCalls')){
											 	//mainProps.delayRepeatCalls = 0;
											}

										 }




									}catch(er){
	console.warn('Get Main Variables ERROR',er)
									}





									// Create GUI Main Properties 
									// if not present

									var el='';
									var params = {width: guiWidth, type: type, name: name, collection: ""};

									if(jQuery('.gui-main').length == 0){

										var el='';
										try{

											if(mainProps && Object.keys(mainProps).length) {
												params.collection = "main";								
												//var gui = app.game._createGui(mainProps,params);
												app.game._guis['main'] = app.game._createGui(mainProps,params);
												el = jQuery(app.game._guis['main'].domElement);
											}
										}catch(er){
	console.warn('Create GUI Main Properties ERROR',er)
										}

										// Only Show Main Properties if there are some
										if(el>''){
											// put this before the JSON text field
											jQuery('#edit_item .control-group').has('label[for*=item_text]').before('<div class="control-group dat-gui gui-main"><fieldset><legend class="gui-label">Main Properties:</legend></fieldset></div>');

											jQuery('.gui-main fieldset').append(el)
											jQuery('.gui-main .dg.main.a').css('height',jQuery('.gui-main .dg.main.a').css('height'))
										}

									}




									// Create GUI Data Variables 
									// if not present

									if(jQuery('.gui-data').length == 0){

										try{

											if(object.data && object.data.getAll && Object.keys(object.data.getAll()).length) {
												params.collection = "data";								
												app.game._guis['data'] = app.game._createGui(object.data.getAll(),params);
												el = jQuery(app.game._guis['data'].domElement);
											}else{
												// if not data
												el = jQuery('<em>No data variables</em>')
											}

										}catch(er){
	console.warn('Create GUI Data Variables ERROR',er)
										}

										// Only Show Data Properties if there are some
										if(el>''){
											// put this before the JSON text field
											jQuery('#edit_item .control-group').has('label[for*=item_text]').before('<div class="control-group dat-gui gui-data"><fieldset><legend class="gui-label">Data Variables:</legend></fieldset></div>');
											jQuery('.gui-data fieldset').append(el);
											jQuery('.gui-data .dg.main.a').css('height',jQuery('.gui-data .dg.main.a').css('height'))
										}
									}



									// Create GUI Body Properties
									// if not present

									if(jQuery('.gui-body').length == 0){

										var el='';
										try{

											if(object.hasOwnProperty('body')){								
												// this will throw an error for new objects, as they don't exist in the game cache yet, and objects without body
												params.collection = "body";
												app.game._guis['body'] = app.game._createGui(object.body,params);
												el = jQuery(app.game._guis['body'].domElement);
											}
										}catch(er){
	console.warn('Create GUI Body Properties ERROR',er)
										}

										// Only Show Main Properties if there are some
										if(el>''){

											// put this before the JSON text field
											jQuery('#edit_item .control-group').has('label[for*=item_text]').before('<div class="control-group dat-gui gui-body"><fieldset><legend class="gui-label">Body Properties:</legend></fieldset></div>');

											jQuery('.gui-body fieldset').append(el)
											jQuery('.gui-body .dg.main.a').css('height',jQuery('.gui-body .dg.main.a').css('height'))
										}
									}


									// a bit of space before the JSON
									jQuery('#edit_item .control-group').has('label[for*=item_text]').before('<br><br><br>');

									// Any properties with a select needs the options class
									jQuery('.dg li.string').has('select').each(function(){jQuery(this).addClass('options')});



								}catch(er){
	console.warn('_prepareEditPanel ERROR',er)
								}




								// fix it now
								jQuery('#item_title').val(app.game._fixTitle(jQuery('#item_title').val()));
								// and fix if it is changed
								jQuery('#item_title').change(function(){
									jQuery('#item_title').val(app.game._fixTitle(jQuery('#item_title').val(),true));								
								})








								// ================================================================ 
								// SAVE CLOSE DELETE
								// ================================================================ 
								


								
								// On Save or other button in GM, some extra tasks
								jQuery('.gamemaker #popup-container .edit-btns button').click(function(){
									app.game._onClickEditButtons.call(this);
								});




								if(callback){
console.warn('_prepareEditPanel callback')									
									callback.call();
								}

							},


							_prepareGameFuncs: function(){
								// prepare the functions 

								app.game._prepareFuncs('preload','.phaser-preload.item');
								app.game._prepareFuncs('create','.phaser-create.item');
								app.game._prepareFuncs('update','.phaser-update.item','time,delta');
								app.game._prepareFuncs('render','.phaser-render.item');

								app.game._prepareFuncs('collider','.phaser-collider.item','objectA,objectB');
								app.game._prepareFuncs('overlap','.phaser-overlap.item','objectA,objectB');
								app.game._prepareFuncs('otherFunction','.phaser-otherFunction.item','param1,param2,param3,param4,param5,param6,param7,param8,param9,param10');
								app.game._prepareFuncs('pointer','.phaser-pointer.item','pointer');
								app.game._prepareFuncs('joystick','.phaser-joystick.item');
								app.game._prepareFuncs('keyboard','.phaser-keyboard.item');

								app.game._prepareFuncs('group','.phaser-group.item');
								app.game._prepareFuncs('staticGroup','.phaser-staticGroup.item');

								app.game._prepareFuncs('image','.phaser-image.item');
								app.game._prepareFuncs('sprite','.phaser-sprite.item');
								app.game._prepareFuncs('spriteSheet','.phaser-spriteSheet.item');
								app.game._prepareFuncs('tileSprite','.phaser-tileSprite.item');
								app.game._prepareFuncs('text','.phaser-text.item');

							},





							_prepareFuncs: function(type,selector,argStr){
								// prepare the functions for game, e.g. update()
								// 
								// Functions are called like this
								// 
								//    app.game._funcs.updateCaller.call(this,time,delta)
								// 
								// Injects functions into a <script> tag at the end of the body
								// This avoids use of eval and expensive loops within update()
								// The context of `this` is the `this` from the create() function					

								// type: What function type. 
								//  Valid values: preload, create, update, render, 
								//    collider, overlap, function, pointer, joystick, keyboard
								//    group, staticGroup, 
								//    image, sprite, spriteSheet, tileSprite, text
								//  
								// selector: The jQuery selector to use to find items
								// 
								// argStr: a string for the arguments to pass to the function
								//   e.g. 'time,delta'
								//   
								// object: Some of the functions will have access to a variable called 'object'
								// This is the object associated with the item, for example:
								//     var object = app.game['sprite']['sprite1'];
								//
								// data: Some functions will also have access to a variable called 'data'
								//    This holds the data properties as listed in the JSON


								var str = ""; // create a string to hold the functions
								var strCaller = ""; // a string for the caller function. This will call all the functions within that group. Used e.g. for sprites during _createEnd
								var argStr = argStr || '';

								// this holds the function that will call each individual function - by type
								strCaller += "\n\n app.game._funcs['"+type+"Caller'] = function("+ argStr +"){ \n";


								// EACH
								// Inject scripts for all phaser-create Items
		                        jQuery(selector).each(function(){
		                        
		                            try{

		                            	var j = jQuery(this);

		                            	// try get this JSON
										var thisJSON = {};
										try{
											var item_JSON = JSON.parse(j.find('>.text').text());
											if(typeof item_JSON === "object"){
												thisJSON = item_JSON; 
											}
										}catch(er){}


										// Delay
										var delay = 0;
										if(thisJSON.hasOwnProperty('delay') && !isNaN(thisJSON.delay) && parseInt(thisJSON.delay) > 0){
											delay = parseInt(thisJSON.delay);
										}


		                            	var code = '';
		                            	if(j.data('linktype') == 'jscode'){
		                        	    	code = appbuilder.app.api.phone.navigator.screenObj.javascripts[this.id];
										}else if(j.data('linktype') > ''){
											// TODO This is not very efficient... Better to get the JavaScript equivalent for the action
											// if the linktype is tab or screen (i.e. navigating away from the game) then stop the game.
											if(["tab","screen"].contains(j.data('linktype') ) ){
												code += "app.game.stop(); ";
											}
											code += "app.getItem('"+this.id+"').callActions();\n";
										}

										// skip if no code to run
										if(code == ''){
											return;
										}

										var item = app.getItem(this.id);
										var name = item.getTitle();



										// skip if the title contains non word characters 
										// (as this causes error when used as variable name)
										if(name.match(/\W/)){
											throw 'Invalid function name '+name+' for object type '+type;
										}


										// Start createing the function...

		                            	str += "\n\n app.game._funcs['"+ type + this.id +"'] = function("+ argStr +"){ \n";

		                            	// If the object has a delay...
		                            	if(delay){
			                            	//str += " \n setTimeout(function(){ \n";
			                            	// create a temp fn
			                            	str += " \n var fn = function(){ \n";
		                            	}

		                            	// add the object
		                            	str += " var object; try{object = app.game['"+type+"']['"+name+"'];}catch(er){} \n";
		                            	str += " var data; try{data = app.game['"+type+"']['"+name+"'].data;}catch(er){} \n";
		                            	// add all the object refrences
		                            	str += app.game._prepareFuncsObjectList();

		                            	


		                            	// Start the try-catch
		                            	str += " \n try{ \n";

		                            	// Add the code
		                            	str += code;

		                            	// End the try-catch
		                            	str += " \n\n}catch(er){ \n  console.warn('Error in function ("+type + this.id+")',er); \n} \n";

		                            	// End the delay
		                            	if(delay){
			                            	//str += " \n },"+delay+"); \n";
											// bind a temp fn to this, so that it is called with this (game) context
											str += " \n } \n  setTimeout(fn.bind(this),"+delay+"); \n";
			                            	
		                            	}


										// end function
										str += "\n} \n"; 

										// add to the caller
										strCaller += " \n  app.game._funcs['"+ type + this.id +"'].call(app.game.this,"+ argStr +") \n";


		                            }catch(er){
		console.log('error with _prepareFuncs',this,er)                            	
		                            }
		                        });

		                        // end the caller
		                        strCaller += "\n} \n";


		                        // Remove the existing script if present
		                        jQuery('.phaser_scripts_'+type).remove();

		                        // Add a script element for this type.
		                        // jQuery does not allow adding of scripts 


	                        	try{
									var script   = document.createElement("script");
									script.setAttribute('class', 'phaser_scripts_'+type);
									script.text  = str + strCaller;
									document.body.appendChild(script);
	                            }catch(er){
console.warn('ERROR _prepareFuncs inject script',er)	                            	
	                            }


		                    },



							_prepareFuncsObjectList: function(refresh){

								// returns a string describing all the objects in the game
								// These can be used in Actions for easy reference
								// For example var sprite1 = app.game.sprite['sprite1']

								if(refresh){
									app.game._funcsObjectListDone = false;								
								}

								if(app.game._funcsObjectListDone){
									return app.game._funcsObjectList;
								}



								var types = ['audio','collider','collision','config','group','image','joystick','keyboard','overlap','otherFunction','pointer','settings','sprite','staticGroup','text','tileset','tileSprite'];
								var str = '\n\n';

								jQuery.each(types,function(i,type){								
									try{
										jQuery('.phaser-'+type).each(function(){
											var key = jQuery(this).find('.title').text();

											// make sure the key is valid - cannot have non-word characters
											if(key.match(/\W/)){
												app.game.warn(0,'Invalid object name (Object names must not contain special characters): '+key)
												throw 'Invalid object name '+key
											}else{
												// Special Case for Other Functions... 
												if(type == 'otherFunction'){
													// Add a variable for the Function Object
													// e.g. function1Obj
													// This will provide access to the Object data etc
													str += 'var '+key+'Obj = app.game.'+type+'["'+key+'"]; \n';	

													// Create a function that can be called directly
													str += 'var '+key+' = function(param1,param2,param3,param4,param5,param6,param7,param8,param9,param10){ \n';
													str += 	"app.game._funcs['otherFunction"+this.id+"'].apply(app.game.this,arguments) \n";
													//app.game.'+type+'["'+key+'"].call(app.game.this,param1,param2,param3,param4,param5,param6,param7,param8,param9,param10)}; \n';
													str += '}; \n';	

												}else{
													str += 'var '+key+' = app.game.'+type+'["'+key+'"]; \n';	
												}
											}

										})
									}catch(er){
									}
								})


								app.game._funcsObjectList = str+"\n\n";
								app.game._funcsObjectListDone = true;


								return app.game._funcsObjectList;

							},


							press: function(key){
								// handler for key presses, to make it easy to control the game from JavaScript external to the game
								if(['up','down','left','right'].indexOf(key) != -1){
									acursors[key].isDown = true;
								};
								return this;
							},


							/*
							pressButtonA: function() {
								game.spaceKey.isDown=true;
						        // Play the default audo.
						        // If the built in audio has been replaced with an Item, call the action
						        if(app.game.audio.jump.play){
						        	app.game.audio.jump.play();
						        }else if(app.game.audio.jump.callActions){
						        	app.game.audio.jump.callActions();
						        }
							},



							pressButtonB: function() {
								game.spaceKey.isDown=true;
						        if(app.game.audio.shoot.play){
						        	app.game.audio.shoot.play();
						        }else if(app.game.audio.shoot.callActions){
						        	app.game.audio.shoot.callActions();
						        }
							},

							pressButtonC: function() {
								game.shiftKey.isDown=true;     
						        if(app.game.audio.flick.play){
						        	app.game.audio.flick.play();
						        }else if(app.game.audio.flick.callActions){
						        	app.game.audio.flick.callActions();
						        }
							},

							*/




							release: function(key){
								// handler for key presses, to make it easy to control the game from JavaScript external to the game
								if(['up','down','left','right'].indexOf(key) != -1){
									acursors[key].isDown = false;
								}
								return this;
							},




		                     _resetObjectContainers: function(){

							    this.preload = {};
							    this.create = {};
							    this.update = {};
							    this.render = {};

								this.score = 0;
								this.scoreText = "";

								this.audio = {}; 
								this.cameraAdjust = {tileSprite: {}, sprite: {}}; 
								this.collider = {}; 
								this.collision = {}; 
								this.functions = {};
								this.group = {}; 
								this.image = {}; 
							    this.joystick = {};
							    this.keyboard = {};
							    this.keyCode = {};
							    this.overlap = {};
							    this.pointer = {}; 
								this.settings = {}; 
								this.sprite = {}; 
								this.staticGroup = {}; 
								this.text = {}; 
								this.tileset = {}; 
								this.tileSprite = {};

								window.game = {}; // this will hold the Phaser game object
								window.player = {}; // in most games this is used for the main character

								this._funcsObjectListDone = false;

							},




							resume: function(){
								app.game.state = "resume";
								
								app.game._pause = false;
								app.game.show();



								if(app.game.this && app.game.this.scene){
									app.game.this.scene.resume('default')
									return app.game.state
								}

								
							},





							run: function(config){
								// Returns the String that can be eval'd to run the game
								// `config` is optional. This can include any of the built in Phaser 3 config properties
								// Usage: add `eval(app.game.run(config))` at the top of the Phaser script
								

								var sceneName = null;

								if(config && config.hasOwnProperty('scene')){
									if(config.scene.hasOwnProperty('name')){
										sceneName = config.scene.name;
									}else if(config.scene.length && config.scene[0] && config.scene[0].hasOwnProperty('name') ){
										sceneName = config.scene[0].name;
									}
								}



								// if in Game Maker, do some UI setup
								if(app.isAppBuilder && app.game._ide == "game"){
									app.game._setUIGame();

								}

								// if the game is running, resume/wake/show
								if(window.game && window.game.hasOwnProperty("isBooted") && window.game.isBooted){
									app.game.show();
									app.game.wake();
									app.game.resume();
									return ''; // return empty for the eval
								}

								// Make sure canvas container is the right height
								jQuery("#phaser-canvas").css('height',jQuery('.app-navigator').css('height'))	

								var config = app.game.init(config);

								// this code presumes that the scene methods (e.g. scene.preload) simply calls an inline function by the same name preload().


								if(sceneName){

									var strConfig = JSON.stringify(config);
									strConfig = strConfig.replace(/"scene":\[null\]/,'"scene": ['+sceneName+']')
									strConfig = strConfig.replace(/"scene":null/,'"scene":'+sceneName)
		
									return 'config = '+strConfig+';   config.scene.preloadOrig = config.scene.preload;  config.scene.preload = function(){ app.game.this = this.game; try{app.game._preloadStart.call(this);              app.game.loadPhaserItems(this); config.scene.preloadOrig() }catch(er){app.handleError(er,"preload()")}}   ;    config.scene.createOrig = config.scene.create;     config.scene.create = function(){ try{app.game._createStart.call(this);  app.game.createPhaserObjects(this); config.scene.createOrig(); app.game._createEnd.call(this)}catch(er){app.handleError(er,"create()")}};     config.scene.updateOrig = config.scene.update;   config.scene.update = function(time,delta){ try{app.game._updateStart.call(this,time,delta); config.scene.updateOrig(); app.game._updateEnd.call(this,time,delta) }catch(er){app.handleError(er,"update()")}};     config.scene.renderOrig = config.scene.render;    config.scene.render = function(){ try{config.scene.renderOrig() }catch(er){app.handleError(er,"render()")} } ;  app.game._prepareGameFuncs()    ; game = new Phaser.Game(config); app.game.resize(); app.game.start();';

								}else{

									return ' config = '+JSON.stringify(config)+';    config.scene.preload = function(){ app.game.this = this; try{app.game._preloadStart.call(this);     					app.game.loadPhaserItems(this); if(typeof preload != "undefined"){preload.call(this)}}catch(er){app.handleError(er,"preload()")}}   ;         config.scene.create = function(){ try{app.game._createStart.call(this);  app.game.createPhaserObjects(this); if(typeof create != "undefined"){create.call(this)}; app.game._createEnd.call(this)}catch(er){app.handleError(er,"create()")}};        config.scene.update = function(time,delta){ try{app.game._updateStart.call(this,time,delta); if(typeof update != "undefined"){update.call(this,time,delta)}; app.game._updateEnd.call(this,time,delta) }catch(er){app.handleError(er,"update()")}};         config.scene.render = function(){ try{if(typeof render != "undefined"){render.call(this)} }catch(er){app.handleError(er,"render()")} } ;  app.game._prepareGameFuncs()    ; game = new Phaser.Game(config); app.game.resize(); app.game.start();'
								}




							},


							resize: function(scale){
								// resize the game according to the required `scale`
								// `scale` (optional) Default "stretch"
								//    Options:
								//      none: no resizing. The game dimensions remain unchanged. If the game is bigger than the screen, parts of the game will extend beyond the visible screen area.
								//      stretch: reize without respecting proportions so that the game fills the available width and height
								//      fit: resize proportionately so that the  game fits into the screen (no parts extended out of the screen) (if the game ratio is different to the screen ratio, unused screen space will be visible )
								//      fill: resize proportionately so that the screen is filled with the game (if the game ratio is different to the screen ratio, then parts of the game will extend beyond the visible screen area)
								//      Returns `this`
								
								var scale = scale || (app.game.getConfig().hasOwnProperty('scale') ? app.game.getConfig().scale : "stretch");

								var pc = jQuery('#phaser-canvas');
								var canvas = jQuery('#phaser-canvas canvas');
							    var maxWidth = parseInt(pc.css("width"));
							    var maxHeight = parseInt(pc.css("height"));

								if(scale == "none"){
									canvas.css("width",game.config.width).css("height",game.config.height);
									return this;
								}else if (scale == "fit" || scale == "fill"){
								    var containerRatio = maxWidth / maxHeight;
								    var gameRatio = game.config.width / game.config.height;

								    if(containerRatio < gameRatio){
										if(scale == "fit"){
											if(gameRatio < 1){
												canvas.css("width",(maxWidth*gameRatio)).css("height",maxWidth);
											}else{
												canvas.css("width",maxWidth).css("height",(maxWidth/gameRatio));				
											}
										}else{	
											canvas.css("width",(maxHeight * gameRatio)).css("height",maxHeight);
										}
								    }
								    else{
										if(scale == "fit"){
											if(gameRatio < 1){
												canvas.css("width",maxHeight).css("height",(maxHeight * gameRatio));

											}else{
												canvas.css("width",(maxHeight/gameRatio)).css("height",maxHeight);	
											}


										}else{
											canvas.css("width",maxWidth).css("height",(maxWidth / gameRatio));
										}
								    }

								}else{
									canvas.css("width",maxWidth).css("height",maxHeight);
								} 

								return this;




							},



							scale: function(w,h){
								// fit to the screen


									game.scale.setGameSize(w, h);
									game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
									game.scale.pageAlignVertically = true;
									game.scale.pageAlignHorizontally = true;



							},

							setEmptyMessage: function(countHidden){
								// show messages below Object List 
								// (optional) `countHidden` shows how many hidden items there are
								
								// if on app listing screen, hide msg
								if(app.id <= 1){
					    			jQuery('.items-msg').addClass('hidden');
					    			return;
								}


				    			jQuery('.items-msg').removeClass('hidden');

				    			var msg = '';

				    			if(countHidden > 0){
					    			msg = 'There are '+countHidden+' hidden items.<br> Use the selector on the left to reveal hidden items.';
				    			}else if(countHidden == -1){
				    				msg = 'There might be hidden items.<br> Use the selector on the left to reveal hidden items.';
				    			}


				    			jQuery('.items-msg-has-hidden').html(msg);


							},



		                    setObjectData: function(object,settings){

		                        // Set the data for object as defined by settings
		                        // settings must have a property called 'data'
		                        // settings.data contains key-value pairs for each data item to be saved within the object
		                        // can be used with Actions, e.g. 
		                        //   app.game.sprite['staticGroup1'].data.get('rows')
		                        
		                        // add the data property to the object
		                        // If the Phaser class does not provide support for data, use _dataClass as a workaround
		                        if(object.setDataEnabled){
		                        	object.setDataEnabled();
		                        }else{
			                        object.data = app.game._dataClass();
		                        }

								// if nothing to add
		                        if(!settings || !settings.hasOwnProperty('data') || typeof settings.data !== "object" ){
		                            return;
		                        }


		                        jQuery.each(settings.data,function(key,val){


		                            try{
		                            	// use ox for hex values
									    if(String(key).match(/color/)){
									    	val = val.replace(/#/,"0x");
									    }
		                            	object.data.set(key,val);

		                            }catch(er){
		                            }
		                        });

		                    },



		                    setObjectProperties: function(object,props){

		                        // Set the properties for object as defined by props (safe)
		                        // keys in props might be non-standard, e.g. 'body.immovable' (which is supported by Phaser.group.set())
		                        // If no props passed in, use the object.JSON by default

		                        if(!props && object && object.JSON){
		                            props = object.JSON;
		                        }

		                        // Set the Data
		                        if(props && props.hasOwnProperty("data")){
		                             app.game.setObjectData(object,props)
		                        }


		                        jQuery.each(props,function(key,value){
		                            try{


		                            	// ignore the key 'data' - this is handled by setobjectData
		                            	// and dots in the key
		                            	// and starting with _ (private properties)
		                            	if(["data","item","__proto__"].includes(key)  || String(key).match(/^_/) || String(key).match(/\./)){
		                            		return;
		                            	}

		                            	if(typeof value === 'object' && !Array.isArray(value)){
		                            		return app.game.setObjectProperties(object[key],value);
		                            	}else{
		                                    object[key] = value;
		                            	}

		                            }catch(er){
		                                // we expect many errors here, because we might be trying to set properties intended for Sprites on the Group. But we are doing this to make it easier for beginners to add the Sprite properties to a group for "setAll" puporses
		                                
		                            }
		                        });
		                    },


		                    setAllObjectProperties: function(that){
		                        // Set the properties for all objects.
		                        // The order is important. First do groups.setAll, and then Sprites etc.
		                        // This ensures that granular settings done on Sprites will override group settings.
		                        // For all groups, call setAll for any properties as required
		                        // Parameters for setAll must be present in the JSON.
		                        // The key is 'params_setAll'

		                        jQuery.each(app.game.group,function(i,group){
		                            try{
		                                if(group.JSON.hasOwnProperty('params_setAll')){
		                                    app.game.callGroupSetAll(group,group.JSON.params_setAll);
		                                }

		                                // Workaround: support for a simplified notation...
		                                // setting a property on a group will setAll on children
		                                // e.g. "body.immovable": true   on the group, will set all children immovable
		                                jQuery.each(group.JSON,function(key,value){
		                                    try{
		                                        group.setAll(key,value)                                        
		                                    }catch(er){
		                                    }
		                                });

		                            }catch(er){
		                                console.warn('setAllObjectProperties',i,group,er)                                
		                            }

		                        });


		                        // now also set Sprite properties.
		                        // This was already done when creating the sprite, but do again in case there are properties that the group overwrote... we want the sprite properties to override group
		                        jQuery.each(app.game.sprite,function(i,sprite){
		                            try{
		                                app.game.setObjectProperties(sprite)
		                            }catch(er){
		console.warn('setAllObjectProperties sprite',i,er)                                
		                            }
		                        });


		                        jQuery.each(app.game.tileSprite,function(i,tileSprite){
		                            try{
		                                app.game.setObjectProperties(tileSprite)
		                            }catch(er){
		console.warn('setAllObjectProperties tileSprite',i,er)                                
		                            }
		                        });

		                    },




		    				_setUIGame: function(){
		    					app.game._ide = "game";
								jQuery('body').removeClass('gm-objects').addClass('gm-game')

								jQuery('.view-mode-box button').removeClass('active');
								jQuery('#gm-play-game').addClass('active');
							},




		    				_setUIObjects: function(){
		    					app.game._ide = "objects";
								jQuery('body').removeClass('gm-game').addClass('gm-objects')

								jQuery('.view-mode-box button').removeClass('active');
								jQuery('#gm-view-objects').addClass('active');
							},



							_createHandles: function(){
								
								try{

									// create some shortcut handles to make coding easier
									// These are Globals, so need to keep an eye on conflicts. But for beginners it really helps
									scene = app.game.this.scene.manager.scenes[0];
									world  = scene.physics.world;

								}catch(er){
		console.warn('_createHandles()',er)
								}

							},


							show: function(){
								jQuery("#phaser-canvas").show();
								jQuery(".app-navigator-inner").hide();
							},






							_showGameTools: function(){
								// Show the Game Tools, 

								// Empty Message (to show when Object list is empty)
								if(jQuery('.items-msg').length == 0){
									jQuery('.items-inner').append('<div class="items-msg hidden ">  <p class="items-msg-build">Select an item (on right)<br>to build your Game</p>    <br><br>    <p class="items-msg-build">Change the filters (on left)<br>to view Objects</p>  <br><br> 	<p class="items-msg-has-hidden "></p>   </div>');
								}
								app.game.setEmptyMessage();


								// hide active tool tab
								jQuery('.toolbox ul.nav-tabs li').each(function(){
									jQuery(this).removeClass('active')
								})

								// make game tab active
								jQuery('.toolbox #nav-tabs_game').addClass("active");


								// hide active pane
								jQuery('.toolbox .tab-pane.active').removeClass("active");

								// make game panel active
								jQuery('.toolbox #tab_games').addClass("active");


							},


							_showItemTools: function(){

								// just click on the Item tab					
								jQuery('.nav-tabs li a[data-target="tab_items"]')[0].click()

							},

							




							_showObjects: function(){							
								app.game.sleep();
								app.game.hide();
								
							},


							_showProduct: function(prod){

								var prod = prod || sessionStorage["product"] || "appbuilder";
								sessionStorage["product"] = prod;
								app.currentProduct = prod;


								// stop here if not edit environment... probably Preview or Web app
								if(!app.isAppBuilder){
									return;
								}

								app.showDeepLoader(1000)

								jQuery('body>.container').animate({opacity: 0},null,null,function(){
									jQuery('body').removeClass('appbuilder')
									jQuery('body').removeClass('gamemaker')
									jQuery('body').addClass(prod);

									// do some UI changes midway through animation
									if(prod == "appbuilder"){
										app.game.stop();
										app.showTabBar();
										app.game._showItemTools();								
									}else if(prod == "gamemaker"){
										app.hideTabBar();
										app.game._launchGameShowGameTools();


									}

									jQuery('body>.container').animate({opacity: 1},null,null,function(){
										app.refreshScroll();
									});
									
								});
									
							},


							sleep: function(){
								// Sleep all scenes
								app.game.state = "sleep"
								app.game.this.scene.sleep('default')

					            // If in app, show tab bar
					            if(!app.isAppBuilder){
									app.showTabBar(); 
					            }						
							},


							start: function(){

								app.log("Phaser version "+Phaser.VERSION);

								app.hideTabBar(); 
								
								// make sure the Menu is available
								//app.game._addMenu();

								game.paused = false;	
								app.game.show();

								
							},



							stop: function(){
								
								// if in Game Maker, do some UI setup
								/*
								if(app.isAppBuilder && app.game._ide != "objects"){
									app.game._setUIObjects();
								}
								*/
	console.log('Calling stop')

						        app.game._resetObjectContainers();						
									
								try{
							        app.game.this.sys.game.destroy(true);								
								}catch(er){
console.warn('app.game.stop()',er)						
								}

						        // Reset some variables
						        app.game._menuAdded = false;

						        // Untick "Edit on click"
						        try{					        	
									if(jQuery('#gm-setting-editOnClick').prop('checked')){
										jQuery('#gm-setting-editOnClick').click();
									}
						        }catch(er){}

								//game.destroy();
								game = {};
								game.run = app.game.run;

								app.game.hide();

								jQuery('.event.onGameStop.item').each(function(){						
					                app.getItem(app.getIdFromDOMId(this.id)).callActions();
					            })

					            // If in app, show tab bar
					            if(!app.isAppBuilder){			            	
									setTimeout(()=>{
										app.showTabBar(); 
										app.game.hide();
									},300)
					            }else{
									// if in Game Maker, do some UI setup
									if(app.currentProduct == "gamemaker"){
										app.game._launchGameShowGameTools();
									}
								}

							},


							upButtonA: function() {
								game.spaceKey.isDown=false;
							},


							upButtonB: function() {
								game.spaceKey.isDown=false;
							},
			
							upButtonC: function() {
								game.shiftKey.isDown=false;     
							},




							_updateEnd: function(time,delta){
								// called at the end of scence.update()
								// The context of `this` is the `this` from the create() function					
					

		                            try{
		                            	// The functions should have been added by _prepareGameFuncs 
		                            	// to a script tag on the body
		                            	// Call the caller function that will call each update function
		                            	app.game._funcs.updateCaller.call(this,time,delta)
		                            }catch(er){
		                            }
		                    },



							updateKey: function()
							{
							 // old
							 },





							_updateStart: function(time,delta){
								// called at the start of scence.update()
								// The context of `this` is the `this` from the create() function					

								if(app.game._pause){
									app.game.pause(app.game._onPause);
									return; // don't do anything else 
								}				

								// Try update the Score text
								// If there is a Text Object called score, it will automatically get updated with the app.game.score
								try{
									app.game.text['score'].setText('Score: '+app.game.score);
								}catch(er){}




								// Keyboard items
								// Check all keys and run code 

								// the keyCode holds an array of objects related to each key
								// keys support these events:
								//   isDown, isUp, keyup, keydown
		                        jQuery.each(app.game.keyCode,function(key,objArr){
		                        	
		                        	// handle isDown event
		                        	
		                            // for each key, go through the array of code scripts
		                            jQuery.each(objArr,function(i,ofunc){
		                            	// ofunc is a descriptor {functionName, event}
			                        	// check if this func is up/down and the script event matches 
			                        	if( (ofunc.event == "isDown" && app.game.keys[key].isDown) ||
			                        	(ofunc.event == "isUp" && app.game.keys[key].isUp) ) {
		                            		// call each function
		                            		try{
		                            			app.game._funcs[ofunc.functionName].call(app.game.this);
		                            		}catch(er){
		                            		}
			                        	}
		                            })

		                        	// check if the key has jusst been released
		                        	if(Phaser.Input.Keyboard.JustUp(key)){
		                        	}

		                        });


		                        // run joystick updates
		                        // This function must be called on every update, and onChange, because change doesn't fire if position remains constant
		                        if(this.joystick && this.joystick.hasOwnProperty('force')){
			                       	app.game._onJoystickUpdate();
		                        }




		                    },



							wake: function(){
								app.game.state = "wake";
								app.game._pause = false;
								
								// Wake all scenes
								if(app.game.this && app.game.this.scene){
									app.game.this.scene.wake('default')
									return app.game.state
								}

							},



		                    warn: function(type,msg,er){
		                        // Provide a warning message to the user. 
		                        // These are intneded to help them debug errors
		                        // `msg` The text to show the user
		                        // `type` (default 0) Warnings fall into different types
		                        
		                        var type = type || 0;

		                        // For each type, show a general comment for this type of warning
		                        // only show this warning message the first time
		                        if(app.game.warnings[type].count == 0){
		                            app.log(app.game.warnings[type].initial)
		                        }

		                        app.game.warnings[type].count++;

		                        app.log(app.game.warnings[type].name+' Error: '+msg);
		                        console.warn(app.game.warnings[type].name+' Error: '+msg,er);
		                    


		                    }










						};

						

						// Temporary workaround ... some modules use game.run() instead of app.game.run()
						game.run = app.game.run;







					    app.game.Game = function (game) {
					    };

					    app.game.Game.prototype = {

					        preload: function () {
					            try{
									
									
					                preload();
									
									
					            }catch(er){console.log(er)}
					        },

					        create: function () {
					            try{
					                create();
					            }catch(er){console.log(er)}
					        },

					        update: function () {
					            try{
					                update();
					            }catch(er){console.log(er)}
					        },

					        render: function() {
					            try{
					                render();
					            }catch(er){console.log(er)}
					        }


					    };






































































						Device.prototype.toString = function deviceToString() {
						  var ret = 'Device ' + this.id;
						  return ret;
						};


						// INITIALISE App
						//setTimeout(function(){app.init()},100);

						// For PhoneGap Cordova, uncomment this method
						//appbuilder.app.ready = function() {
							app._init()
						//}










					} catch(er){console.log("ERROR IN app.js",er)}

				if(!window.appjsconsolelog){
					window.appjsconsolelog = true;
					console.log('%c AppShed app.js v'+app.version, 'background: #111; color: #EEE');
				}

			}); // END window.addEventListner














































































						// Device object Device Class

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

							this._maxPins = 50; // Maximum number of pins - used in updatedTiedVariables()
							this.address = "";
							this.connected = false; // This value is passed in from the device
							this.deadZoneAdjustment = 0;
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
							this.lastSetPinValue = {}; // records the last value that was set for a pin - used by togglePin()
							this.layout = null;
							this.local_ipFromRemote = null; // Stores the local IP Address received from Remote
							this.name = ""; // This value is passed in from the device
							this.pendingMethods = {analogRead:{},analogWrite:{},digitalRead:{},digitalWrite:{}}; // An object of objects for each of the IO methods. This holds a flag when a certain method is pending (i.e. AJAX call in process)
							this.properties = props; // Stores the `props` passed in when the device is instantiated  
							this.pinFormats = {};
							this.pinNames = []; // An array of pin names (from the layout)
							this.pinModes = {};
							//this.pinValues = {}; deprecated - use this[D1]
							this.pinVariableTies = []; // array of arrays of inputs/variables tied to each pin
							this.pollActive = false; // flag if pollin is active for this device (repeatedly reading pin values)
							this.pollTimeout = 500; // How long to wait between polling
							this.pollStarted = 0; // The time when the last poll started
							this.remoteAddress = "";
							this.tiePinsToVariables = true; // Default true. If true, variables in the app are tied to pins by the same name
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

								if(this.tiePinsToVariables){
									this.tieAllPinsToVariables();
								}

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
							      url: this.address + '/analog/' + pin +'?key='+this.key,
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


							this.callFunction = function(called_function, parameters, onSuccess,onFail) {
								// Calls a function defined on the device

								var thisURL = this.address + '/' + called_function;
								if(parameters){
									thisURL += '?params=' + parameters;	
								}  
								if(this.id != "local" && this.key){
									thisURL += '%26key='+this.key;
								}

								jQuery.ajaxq(this.id, {
								  url: thisURL,
								  crossDomain: true
								}).done(function(data, textStatus, jqXHR) {
								  if (onSuccess != null) {
								  	onSuccess(data, textStatus, jqXHR)
								  }
								}).fail(function(a, textStatus, b){
									if (onFail != null) 
										onFail(a, textStatus, b);
								});

								return this;
							};



							this.cancelPending = function(method,pin,state){
								// Cancels the `method`,`pin`,`state` combination from the pending methods.
								// Return `this`

								this.pendingMethods[method][pin+"_"+state] = false;

								return this;
							};






							this.configureAddress = function(){
								// Configures which address to use for calls to this device.
								// Priority for which `address` to use is given in the following order:
								// * `192.168.4.1` for `local` deviceID when using softAP
								// * `localIP`
								// * `localIPFromRemote`
								// * The default cloud webservice

								if(this.id == "local"){
									this.address = "http://192.168.4.1";
								}
								else if(this.variables.local_ip && this.variables.local_ip > ""){
									if(this.isValidLocalIP)
										this.address = "http://"+this.variables.local_ip;
									else 
										this.testLocalIP(); 
								}
								else if(this.local_ipFromRemote && this.local_ipFromRemote != "undefined"){
									if(this.isValidLocalIPFromRemote)
										this.address = "http://"+this.local_ipFromRemote;
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
							};


							this.configureLayout = function(){
								// configures the board layout using the IoT Builder layout settings
								// Using a layout makes it much simpler for novice users as they make use of the IoT Builder to configure the board.
								// Using a layout is optional. The app can simply set pins using pin numbers directly.
								if(
									(this.properties.layoutId && this.properties.layoutId > "") 
									|| app.getDefaultLayoutId()
									){
									// attempt to get the board layout
									this.getLayout();
								} else {
									// remove the layout object to make sure it is not used.
									this.layout = null;
								}

								return this;
							};



							this.connect = function(onConnect,onFail){
								// Connects to the device.
								// Optional function `onConnect` called once connected
								// Optionalfunction `onFail` called if connection fails 
								// Returns `this`

								this.getInfo(onConnect,null,onFail);

								return this;

							};





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



							this.fireEvents = function(){

								// Fire off actions for any events that are true


		//						jQuery.each(appbuilder.EventsList.app,function(idx,val){
		//							jQuery.each(val,function(i,v){

								for(var i=0;i<appbuilder.EventsList.app.length;i++){

										var v = appbuilder.EventsList.app[i].event;

										if(v.type=='iot'){

											appbuilder.EventsList.app[i].event.currentCompare = app.utils.compare(this.getPin(v.variable),v.value,v.method,v.range);


											// only do action if current and previous val differ, or
											// or if no previous, and current true
											if(v.currentCompare){
												if(v.previousCompare === null || !v.previousCompare){
													appbuilder.app.ActionHandler.fireAction(v.action);
													
												}
											}

											appbuilder.EventsList.app[i].event.previousCompare = v.currentCompare;
										}
								//	})
								//})
								}						
							}



							this.getInfo = function(onSuccess,address,onFail) {
								// Queries the device to get basic info
								// `onSuccess` is the function run when the `data` is returned from the device (arguments: data, textStatus, jqXHR)
								// Optional `address` can be passed in, the default address is `this.address`
								// Optional `onFail` is the function called when the connection fails (arguments: a, textStatus, b)					
								// Returns `this`


								var address = address || this.address;

								if(!address || address == "" || address == "undefined")
									return;

								if(!address.match(/http/))
									address = 'http://'+address;

								var deviceId = this.id;

								jQuery.ajaxq(this.id, {
								  url: address + '/info' +'?key='+this.key,
								  crossDomain: true,
								  timeout: app._ajaxTimeout
								}).done(function(data, textStatus, jqXHR) {

									try{
										app.getDevice(deviceId).updateInfo(data).info = data;
										if (onSuccess != null && data.connected) {
											onSuccess(data, textStatus, jqXHR);
										} else if (onFail != null && !data.connected) {
											onFail(data, textStatus, jqXHR);
										}
									}
									catch(er){app.handleError(er,"Device.getInfo()")};
								}).fail(function(a, textStatus, b){
									app.getDevice(deviceId).connected = false;
									if (onFail != null) 
										onFail(a, textStatus, b);
								});

								return this;
							};




							this.getLayout = function(callback) {

								if(!this.properties.layoutId){

									// If no layoutId, try get from Attached data-board attribute (linked board)
									if(!isNaN(app.getDefaultLayoutId())){
										this.properties.layoutId = app.getDefaultLayoutId();
									}else{
										// can't find an attached board, so cancel
										return this;
									}

								}

								var address = app._url_boardWithPins + this.properties.layoutId;
								var deviceId = this.id;

								jQuery.ajax({
								  url: address,
								  crossDomain: true
								}).done(function(data) {
								  if (callback != null) {
								  	callback(data);
								  }else{
									// Check the data to see if it has error
									// save the data in local storage
									localStorage['layout'+deviceId] = JSON.stringify(data);

								  	var d = app.getDevice(deviceId);
								  	d.setLayout(data);

									if(d.tiePinsToVariables){
										d.tieAllPinsToVariables();
									}


								  }
								}).fail(function(jqXHR, textStatus, errorThrown){
									// the call failed. Check if layout in LocalStorage								
									localData = JSON.parse(localStorage['layout'+deviceId]);
									// if localData is valid use it
									if(localData){
									  	app.getDevice(deviceId).setLayout(localData);
									}

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


							this.getPinLayout = function(pinName){
								// Returns the pin layout object for `pinName`
								// If a pin name is passed in, this will search for the name in the board layout
								
								// Check to see if we are using a board Layout
								if(this.layout){
									// go through inputs and outputs and search for name
									var pins = this.layout.inputs.concat(this.layout.outputs);

									for(var i=0;i<pins.length;i++){
										if(pins[i].variable == pinName){
											// a named pin matches, so use this pin number
											return pins[i];
										}
									}
								} 

							};



							this.getPinNumber = function(pinNameOrNumber){
								// Returns the pin number for `pinNameOrNumber`
								// If a pin name is passed in, this will search for the name in the board layout
								
								var pinNumber = parseInt(pinNameOrNumber)

								// if pinNameOrNumber is not a pinNumber
								if(pinNameOrNumber != pinNumber){
									// Check to see if we are using a board Layout
									if(this.layout){
										// go through inputs and outputs and search for name
										var pins = this.layout.inputs.concat(this.layout.outputs);

										for(var i=0;i<pins.length;i++){
											if(pins[i].variable == pinNameOrNumber){
												// a named pin matches, so use this pin number
												pinNumber = pins[i].pin;

												// Special Case: Analog pins have A0 on pin 40.
												// So you need to subtract 40 from pin number
												if(pins[i].type == 'analog' && pinNumber >= 40){
													pinNumber -= 40;
												}

												// Special Case: D0 mapped to pin 30.
												// So you need to subtract 30 from pin number
												if(pins[i].type == 'digital' && pinNumber == 30){
													pinNumber = 0;
												}
											}
										}
									} 
								}

								return pinNumber;
							};


							this.getPinValue = function(pinNameOrNumber){
								// Returns the value of pin `pinNameOrNumber` 
								// If a `name` is passed in, then this device must have a `layout` with a pin named accordingly
								// If  polling has not started, this function starts polling the pin values




								// make sure polling is active
								this.poll();

								// presume a pin number passed in
								
								var pinLayout = this.getPinLayout(pinNameOrNumber)
								var pinNumber = this.getPinNumber(pinNameOrNumber);

								// no Layout - or invalid pinName, so check to see if it's a pin number
								if(isNaN(pinNumber)){
									// not a number, do nothing
								} else {
									

									// return the value saved for this pin
									// Determine A or D
									if(pinLayout){
										if(pinLayout.type == 'analog'){
											return this["A"+pinNumber];
										}else{
									 		return this["D"+pinNumber];
										}
									}else if(this.getPinFormat(pinNumber) == 'a'){
										return this["A"+pinNumber];								
									}else{
								 		return this["D"+pinNumber];
									}


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


							this.motionDriving = function(state,settings){
								// Drive the car using motion control (accelerometer)
								// (Optional) `state` indicates if you are turning Motion Driving on (1) or off (0), Default: `1`
								// (Optional) `settings` passes an object of settings
								// returns `this`

								if(state == null)
									state = 1;

								// if process not running, start it
								if(this.handler_motionDriving == null){
									var deviceId = this.id;
									this.handler_motionDriving = setTimeout(function(){
										app.getDevice(deviceId).motionDrivingLoop();
									},200)				
								}
							}


							this.motionDrivingLoop = function(){
								// run the motion driving process and keep looping

								// calibrate PWM

								// run logo command


								// if process not running, start it
								var deviceId = this.id;
								this.handler_motionDriving = setTimeout(function(){
									app.getDevice(deviceId).motionDrivingLoop();
								},200)				
							}


							this.motionDrivingSettings = function(){
								// Adjusts the settings for motion driving based on the current device accelration properties

								var dZA = this.deadZoneAdjustment;

								acceleration = app.deviceMotionEvent;

								//document.getElementById("vector").innerHTML ="vector2";
								//acceleration = eventData.accelerationIncludingGravity;
								var left = 0;
								var right = 0;
								if (Math.abs(acceleration.y) > 1) { // back-/forward
										var speed = acceleration.y * 100;
										if (acceleration.y > 0) { // add 300 to decrease dead zone
														left = Math.min(1023, speed + acceleration.x * 40 + dZA);
														right = Math.min(1023, speed - acceleration.x * 40 + dZA);
										} else {
														left = Math.max(-1023, speed + acceleration.x * 40 - dZA);
														right = Math.max(-1023, speed - acceleration.x * 40 - dZA);						 
										}
								} else if (Math.abs(acceleration.x) > 1) { // circle only
										var speed = Math.min(1023, Math.abs(acceleration.x) * 100);
										if (acceleration.x > 0) {
												left = Math.min(1023, speed + dZA);
												right = Math.max(-1023, -speed - dZA); 
										} else {
												left = Math.max(-1023, -speed - dZA);		
												right = Math.min(1023, speed + dZA);
										}
								}
								if (Math.abs(left) > 200 || Math.abs(right) > 200) { // orig. 100,100
										move_car(left, right);
								}
								var direction = "stop";
								// if direction is opposite, change sign of +left and +right
								var acc_x = Math.round(acceleration.x);
								var acc_y = Math.round(acceleration.y);
								var acc_z = Math.round(acceleration.z);
								var leftD = Math.round(-left);
								var rightD = Math.round(-right);

								
							}







							this.poll = function(){
								// Starts the polling for this device.
								// Repeatedly updates the pin values for tied pins
								// Returns `this`

								if(!this.pollActive){
									this.pollActive = true;
									this.pollRepeat();
								}
								return this;
							}




							this.pollRepeat = function(){
								// Runs on a loop, Reads pin values and updates tied variables
								// Returns `null`

								this.pollStarted =  Date.now();

								var thisDevice = this;
								var fnRelaunch = function(){
									var now = Date.now();
									// Start after pollTimeout. 
									var delay = (thisDevice.pollStarted + thisDevice.pollTimeout) - now;
									// if delay is negative, then timeout expired, so start immediately
									if(delay<0){delay=0;}

									setTimeout(function(){
										thisDevice.pollRepeat();
									},delay);
								};

								this.readPins(function(){
									// onSuccess
									thisDevice.updatedTiedVariables();
									thisDevice.fireEvents();
									//window.appbuilder.events.iot.processPins();

									fnRelaunch();
								}, function(){
									// onFail
									fnRelaunch();
								});


								 return this;
							};



							this.readPins = function(onSuccess,onFail){
								// Reads all the pins and updates the `device info`
								// Optional `onSuccess` called once the info has been updated
								// Optional `onFail` called if the info can't be updated
								// Returns `this`

								var deviceId = this.id;


								try{
									this.getInfo(onSuccess,null,onFail);
									
								}catch(er){
									if(onFail){
										onFail();							
									}
								}

								return this;

							}


							this.sendCommands = function(cmds,callback){
								// Sends the next batch of commands
								// Optional `cmds` arary holds the commands to send, otherwise uses `this.ioBatchCommands`
								// `cmds` expect an array of `command` arrays, where each `command` array contains 4 items: `[format,pin,value,duration]`
								// Optional `callback` is the callback function - this might be called multiple times if the commands are sent in multiple batches.


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
									return this.sendCommands(commands,callback);

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



							this.setMotorDriver = function(type,callback){
								// Sets the Motor Driver to `type`;
								// Options are: 
								//   `0` (default) Motor Shield
								//   `1` L298N
								//   `2` L9110


								return this.callFunction("setMotorDriver", type, callback) 

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
								
								var pinNumber = this.getPinNumber(pinNameOrNumber);

								// no Layout - or invalid pinName, so check to see if it's a pin number
								if(isNaN(pinNumber)){
									// not a number, do nothing
								} else {

									// Save this as the lastSetPinValue

									// if val is boolean then use digital output
									if(val == true || val == "true" || String(val).match(/on/i)){
										this.digitalWrite(pinNumber,1)
										this.lastSetPinValue[pinNumber] = true;
									}
									else if(val == false || val == "false" || String(val).match(/of/i)){
										this.digitalWrite(pinNumber,0)
										this.lastSetPinValue[pinNumber] = false;
									}
									else if(val == 1 || val == 0){ // special case: 1/0 might be digital or analog. 
										// Presume digital unless analog specified.
									 	if(this.getPinFormat(pinNumber) == "a"){
									 		this.analogWrite(pinNumber,val)
											this.lastSetPinValue[pinNumber] = val;
									 	}
									 	else{
									 		this.digitalWrite(pinNumber,val)
									 		if(val == 1){
												this.lastSetPinValue[pinNumber] = true;
									 		}else{
												this.lastSetPinValue[pinNumber] = false;
									 		}
									 	}
									} else { // everything else presume analog
										this.analogWrite(pinNumber,val)
										this.lastSetPinValue[pinNumber] = val;
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

								this.pinModes[pin] = state

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



							this.setRGB = function(color,pins){
								// Sets an RGB LED to `color`
								// Optional `pins`  specifies the pins to use, default is 5,6,7 for r,g,b
								// `color` can be a HEX color or an object with properties `r,g,b` specifying a value 0-255
								// `pins` is an object with properties `r,g,b` specifying the pin numbers
								// returns `this`

								if(typeof color == "string")
									color = app.toRGB(color)

								if(!pins)
									pins = {r: 5, g: 6, b: 7};

								this.analogWrite(pins.r,color.r);
								this.analogWrite(pins.g,color.g);
								this.analogWrite(pins.b,color.b);


								return this;

							}

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
									if(this.isTestingLocalIP){
										return
									}
									this.isTestingLocalIP = true;
									this.isValidLocalIP = false;	
								}  

								var originalID = this.id;

								var testIP = this.variables.local_ip;
								if(fromRemote)
									testIP = this.local_ipFromRemote;


								// Query the IP and see if it is valid
								this.getInfo(function(data){

									// If the device is connected to over local network, the id will be "local"
									if(data.id == originalID || data.id == "local"){
										if(fromRemote)
											app.getDevice(originalID).isValidLocalIPFromRemote = true;
										else

											app.getDevice(originalID).isValidLocalIP = true;

										app.getDevice(originalID).configureAddress()					
									}
							    },testIP);

								return this;
							}





							this.tie = function(pinNameOrNumber,variable){
								// Ties the pin `pinNameOrNumber` to a `variable`
								// The variable is updated every time the pin is polled
								// Returns `this`

								// presume a pin number passed in
								
								var pinNumber = null;
								// if pinNameOrNumber is a number, use that
								if(parseInt(pinNameOrNumber) == pinNameOrNumber)
									pinNumber = parseInt(pinNameOrNumber);

								var input = {}; // a JSON object with the input data


								// Check to see if we are using a board Layout
								if(this.layout){
									// go through inputs and search for name
									var inputs = this.layout.inputs;

									for(var i=0;i<inputs.length;i++){
										// if we don't have a pinNumber, try match the variable
										// otherwise look for the pin number
										if(isNaN(pinNumber)){

											if(inputs[i].variable == pinNameOrNumber){
												// a named pin matches, so use this pin number
												pinNumber = inputs[i].pin;
												input = inputs[i]; 
											}
										} else {
											if(inputs[i].pin == pinNumber){
												// pin number matches, so use this pin for the input
												input = inputs[i]; 
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

									// save the app variable name on the input
									input.appVariable = variable;

									// add the input to the array of ties
									this.pinVariableTies[pinNumber].push(input);
									this.poll();
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
										//this.poll(inputs[i].pin); - done in tie()
									}
								} 


								return this;
							}



							this.togglePin = function(pinNameOrNumber){

								var pinNumber = this.getPinNumber(pinNameOrNumber);

								try{
									if(this.lastSetPinValue[pinNumber] == 1)
										return this.setPin(pinNumber,0)
									else if(!this.lastSetPinValue[pinNumber] || this.lastSetPinValue[pinNumber] == 0)
										return this.setPin(pinNumber,1)
									else 
										return null
									
								}catch(er){}
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
									if(data.variables){
										// update any variables that are in data
										var keys = Object.keys(data.variables)
										for(var k=0;k<keys.length;k++){
											this.variables[keys[k]] = data.variables[keys[k]];
										}

										//this.variables = data.variables; // this line overwrites good keys in variables not passed in data
										if(data.variables.analogValues){
											this.A0 = parseInt(data.variables.analogValues)
										}
										if(data.variables.digitalValues){
											var vals = data.variables.digitalValues.split(",")
											for(var i=0;i<vals.length;i++){
												try{
													this["D"+i] = parseInt(vals[i]);									
												}catch(er){}
											}
										}
									}

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
									&& !props.isValidLocalIP
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
								// Update all variables tied to pins with the latest pin value
								// Return `this`

								for(var p=0;p<this._maxPins;p++){
									var pinNumber = p;
									if(this.pinVariableTies[p] && this.pinVariableTies[p].length){
										for(var i=0;i<this.pinVariableTies[p].length;i++){
											try{
												var input = this.pinVariableTies[p][i];
												var type = "D";

												// remap pinNumbers
												if(pinNumber == 30){
													pinNumber = 0;
												}
												if(pinNumber >= 40){
													pinNumber = p-40; // analog pins are 40...46 , matching A0...A6
												}

												if(input.type == "analog"){
													type = "A";
												}
												app.setVariable(input.appVariable,this[type+pinNumber]);
											}catch(er){}
										}
									}
									
								}

								return this;
							}








							// ************************************************************
							// We must call init() on the Device
							// ************************************************************
							this.init();
						};





































































































						// Data object.




						
						function AppShedData(idOrClassName, options) {
							// Class definition for Data Object
							// Optional `idOrClassName` specifies which data to retrieve
							// Defaults to the data on the current screen.
							// Optional `options` - an object
							// 		{isAppData: <boolean> if true this is app data not screen data}


							this.idOrClassName = idOrClassName;
							this.options = options || {};
							this.type = "Data Object";
							this.emailKey = "43kjbv934kjds9fwf34erf098uerj8nj63no7r94m4773jk"; // secret key to avoid abuse of the email service





							this.avg = function(variable){
								// Return the average of the values for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;


								return app.stats.avg(this.getNumbers(variable))

							}



							this.clearData = function(){
								// Clears the data 
								// returns `bool true` if successful

								return this.getScreen().setLocalProperty("data",[]);

							}



							this.count = function(variable,notEmpty){
								// Return the count of values for `variable`
								// Optional `bool notEmpty` specifies that only non-empty values should be counted
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								var count = 0;
								this.rows().forEach(function(el){
									if(notEmpty){
										if(el[variable] > "")
											count++;
									}else
										count++;
								})	
								return count;	
							}


							this.countNumbers = function(variable){
								// Return the count of numeric values for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;


								return this.getNumbers(variable).length;	
							}





						
							this.email = function(to,from,subject,body,arg_callback){
								// Email the data on the current `Screen`
								// Optional arguments `to,from,subject,body,callback`
								// It is also possible to pass in form fields for `to,from,subject,body`
								// Form fields will take precedence over arguments for `to,from,subject,body` 
								// Overload: the callback function can be passed as any of the arguments
								// e.g. email('to',callback) is valid 

								var callback;
								var fieldData = "";

								if(typeof to == 'function'){
									callback = to;
									to = "";
								}
								if(typeof from == 'function'){
									callback = from;
									from = "";
								}
								if(typeof subject == 'function'){
									callback = subject;
									subject = "";
								}
								if(typeof body == 'function'){
									callback = body;
									body = "";
								}
								if(typeof arg_callback == 'function')
									callback = arg_callback;


								app.showLoader(10000);


								var fData = new FormData();

								// Add the email Key
								fData.append('key',this.emailKey);


								// look for input (text, checkbox, radio), textarea , .item.select .selected, .item.picker .picked
								jQuery(app._formItemsCSSSelector).each(function( index ) {
									var el = (this);
									var data = app.getVariable(el.dataset.variable);


									try{
										if(el.type == "file"){
											data = el.files[0];
											fData.append(el.dataset.variable,data);
										}

										fieldData += el.dataset.variable + " = " + data + "\n"; 

										
										// Check the arguments and override with form data if present
										if(el.dataset.variable == "to" && data > "")
											to = data + ((to)?("," + to):"");
										if(el.dataset.variable == "from" && data > "")
											from = data + ((from)?("," + from):"");
										if(el.dataset.variable == "subject" && data > "")
											subject = data + ((subject)?(" " + subject):"");
										if(el.dataset.variable == "body" && data > "")
											body = data + ((body)?(" " + body):"");


									}catch(er) {
									}
								});

								fieldData = "\n\n\n__________________________\n\nForm Fields\n__________________________\n\n"+fieldData;


								// add the arguments 
								fData.append('to',(to?to:""));
								fData.append('from',(from?from:""));
								fData.append('subject',(subject?subject:""));
								fData.append('body',(body?body:"")+fieldData);


								jQuery.ajax({
								
									url: "https://appshed.us/extensions/email/send.php", // Url to which the request is send
									type: "POST",             // Type of request to be send, called as method
									data: fData,
									contentType: false,       // The content type used when sending data to the server.
									cache: false,             // To unable request pages to be cached
									processData:false        // To send DOMDocument or non processed data file it is set to false
								}).done(function(data) {
								}).always(function(data) {
										if(callback){
											callback(data);
										}
									app.hideLoader();
								});

						
							}





							this.emailData = function(to,from,subject,body,arg_callback){
								// Email all the saved data 

								var data = this.rows();

								var body = "\n__________________________\n\nSaved Data\n__________________________\n\n";
								
								for(var i=0;i<data.length;i++){
									var keys = Object.keys(data[i])
									body += "\n\n" + (i+1)+":\n\n";
									for(var k=0;k<keys.length;k++){
										body += keys[k] + " = " +data[i][keys[k]] + "\n";
									}
								}

								return this.email(to,from,subject,body,arg_callback)
							}



							this.getFirstVariable = function(){
								// Return the name of the first `variable` in the data
								// If there is no saved data, it will return null

								return this.getVariables()[0];
							}					
							




							this.getNumbers = function(variable){
								// Return an array of the numeric values for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;


								var arr = [];
								
								this.rows().forEach(function(el){
									if(!isNaN(el[variable]) && String(el[variable]).length > 0)
										arr.push(Number(el[variable]))
								})	
								
								return arr;
								
							}


							this.getScreen = function(){
								// Returns the `Screen` for this data
								// Defaults to the current screen
									
								return app.getScreen(this.idOrClassName);

							}
							

							this.getValues = function(variable){
								// Return an array of the values for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;


								var arr = [];
								
								this.rows().forEach(function(el){
									arr.push(el[variable]);
								})	
								
								return arr;
								
							}

							

							this.getVariables = function(){
								// Returns an array of `variables` in the data

								var variables = [];

								this.rows().forEach(function(el){
									variables = variables.concat(Object.keys(el))
								})

								// get unique variable names
								variables = variables.filter(function(value, index, self) { 
			    					return self.indexOf(value) === index;
								})

								return variables;

							}


							this.hideData = function(){
								// Hide the data that was shown with `showData()`
								// Returns `this`

								var scn = this.getScreen();

								if(jQuery('#data-'+scn.id).length)
									jQuery('#data-'+scn.id).remove();


								return this;

							}


							this.insert = function(thisData){
								// Saves the provided `thisData`
								// `thisData` can be an array (of data objects) or a single data object
								// The format of the data object is:
								// {
								//		variable1: value1,	
								//		variable2: value2,
								//		...	
								//	}
								// Example as an array:
								// 		[{dataobject1},{dataobject2},...]
								// This function allows for programatic insertion of data, as opposed to this.save() which saves form input.
								// Returns `this`

								data = this.rows();

								if(Array.isArray(thisData)){
									for(var i=0;i<thisData.length;i++)
										data.push(thisData[i]);
								} else {
									data.push(thisData);
								}

								this.getScreen().setLocalProperty("data",data);
								
								return this;

							}



							this.max = function(variable){
								// Return the maximum value for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.max(this.getNumbers(variable))

							}



							this.meanAbsoluteDeviation = function(variable){
								// Return the standardDeviation of the values for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.meanAbsoluteDeviation(this.getNumbers(variable))

							}

							this.median = function(variable){
								// Return the median value for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;
							    
								return app.stats.median(this.getNumbers(variable))


							}



							this.midrange = function(variable){
								// Return the midrange  for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.midrange(this.getNumbers(variable))

							}


							this.min = function(variable){
								// Return the minimum value for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.min(this.getNumbers(variable))

							}





							this.modes = function(variable){
								// Return an array providing the modes for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.modes(this.getNumbers(variable))

							}



							this.removeVariable = function(variable){
								// Removes all the data for `variable` from localStorage
								// Returns `this`

								var data = this.rows();
								var newData = data.map(function(thisObj){
									try{
										delete thisObj[variable];
										return thisObj;
									}catch(er){}
								})

								this.getScreen().setLocalProperty("data",newData);

								return this;
							}







							this.range = function(variable){
								// Return the range for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.range(this.getNumbers(variable))

							}




							this.rows = function(selectors,filters){
								// Returns the saved data as an array of objects
								// Format: 
								//	[
								//	  {
								//		variable1: "value1",
								//		variable2: "value2",
								//		...
								//	  },
								//	  ...
								//	]
								// Optional `selectors` is an array of variable names to be included in the returned data
								//   Example: `["textbox","number"]`
								// Optional `filters` specifies any filter criteria
								// `filters` is an array of filter objects in the format:
								//   [
								//      {
								//			variable: "name", 	// the variable to apply the filter on
								//			comparison: "==,!=,<>,>,<,>=,<=", 
								//			value: "xxx",		// alphanumeric value
								//			logic: "AND|OR"		// optional, determines how to join multiple filters
								//		} 
								//   ]
								// Example: `filters' = [{variable:"textbox",comparison:"!=",value:"some text", logic:"AND"},{variable:"number",comparison:"="}]


								// Get the data from the screen or app localstorage
								var data;
								if(this.options && this.options.isAppData){
									data = app.getLocalProperty("datasets")[this.idOrClassName];
								}else{
									data = this.getScreen().getLocalProperty("data");
								}

								// Get Selectors from the current Item 
								if(!selectors)
									selectors = [];
								try{
									jQuery('#data_select'+app._currentItemId+' input').each(function(){
										// remove "data_select_variable_" from the input name
										if(this.checked)
											selectors.push(this.name.replace(/data_select_variable_/,"")); 
									})

								}catch(er){}



								// If the current Item is a `data_filter` then add the filter conditions
								try{
									if(app.getItem().containsClass('data_filter')){
										var variable = jQuery('#item'+app._currentItemId+' .data_filter_variable select').val();
										var comparison = jQuery('#item'+app._currentItemId+' .data_filter_comparison select').val();
										var value = jQuery('#item'+app._currentItemId+' .data_filter_value input').val();

										if(variable > "" && comparison > ""){
											if(!filters)
												filters = [];

											filters.push({variable: variable, comparison: comparison,value: value});
										}
									}
								}catch(er){}


								if(filters){
									for(var f=0;f<filters.length;f++){
										var filter = filters[f];

										// Create an array of data conforming to this filter
										var filteredData = [];

										for(var i=0;i<data.length;i++){

											// find out which variable this filter applies to 
											var vars = Object.keys(data[i]);
											var index = vars.indexOf(filter.variable);

											if(index != -1){


												var result;
												var str;
												// fix single = 
												if(filter.comparison == "=")
													filter.comparison = "==";

												if(isNaN(data[i][vars[index]]) || isNaN(filter.value))
													str = "result = ('"+data[i][vars[index]]+"' "+filter.comparison+" '"+filter.value+"')";
												else
													str = "result = ("+data[i][vars[index]]+" "+filter.comparison+" "+filter.value+")";

												try{
													eval(str);
												}catch(er){
													app.handleError(er,"Data.rows eval filter "+str)
												}
												if(result){
													filteredData.push(data[i]);
												}
											

											}
										}

										// replace the data with this data (presume AND join)
										data = filteredData;

									}
								}


								// Selectors
								var selectedData = data;

								if(selectors && selectors.length){
									for(var i=0;i<selectedData.length;i++){
										var keys = Object.keys(selectedData[i])
										for(var k=0;k<keys.length;k++){
											// delete the key if not in selectors
											if(selectors.indexOf(keys[k]) == -1)
												delete selectedData[i][keys[k]]
										}
									}
								}

								return selectedData;
							}





							this.save = function(){
								// Save the data 
								// Returns `this`
								
								data = this.rows();

								var thisData = {};
								
								// go through all Form items
								jQuery(app._formItemsCSSSelector).each(function( index ) {
									// If there is no dataset.variable, it is not an Item so skip
									if(this.dataset.variable && this.dataset.variable != "undefined")
										thisData[this.dataset.variable] = app.getVariable(this.dataset.variable);
								});


								// Special Case: any variable starting with "data_" has special meaning
								try{
									for (var key in thisData) {
										if (thisData.hasOwnProperty(key) && key.match(/^data_/)) {
											var name = key
											var val  = thisData[key];

											// Remove this key
											delete thisData[key];

											try{

												// Calculations

												if(name.match(/^data_calculation_/)){
													// the name of the field follows `data_calculation_`
													name = name.replace(/^data_calculation_/,"");
													var formula = val;

													// the formula is saved in the `val`
													// remove the arithmetic operators to get a list of variables
													var variables = formula.replace(/[+\-*/%() ]/g,",").split(",");

													// repalce all variables in the formula with values from the other fields
													for(var k in thisData){
														if (thisData.hasOwnProperty(k) && !k.match(/^data_/) && !isNaN(thisData[k])) {
															// if k appears in the formula, replace all occurences with the numeric value
															if(variables.indexOf(k) != -1){
																var thisVal = parseFloat(thisData[k]);
																var myRE = new RegExp(k, 'g');

																formula = formula.replace(myRE,thisVal)
															}
														}
													}

													// Now try evaluate the formula
													try{
														var outcome;
														eval("outcome = "+formula);
														if(!isNaN(outcome))
															thisData[name] = outcome;
													}catch(er){}

												} 

											}catch(er){
												//
											}

										}
									}


								}catch(er){
									app.handleError(er,"data.save() data_")
								}

								// Add thisData to the saved data
								data.push(thisData);
								this.getScreen().setLocalProperty("data",data);
								
								return this;
							}



							this.showData = function(selectors,filters,idOrClassName){
								// Shows the data in an HTML table on the screen.
								// Optional `selectors` is an array of variable names to be shown (Default all) 
								// Optional `filters` applies conditions to filter the data (see this.rows() for details on filters)
								// Optional `idOrClassName` identifies the attachment item (default to current Item) 
								// Returns `this`


								var scn = this.getScreen();

								if(jQuery('#data-'+scn.id).length)
									jQuery('#data-'+scn.id).remove();

								var div = document.createElement('div');
								div.id = "data-"+scn.id;
								div.className = "datatable";
								div.appendChild(this._htmlBuildTable(this.rows(selectors,filters)))
								div.style += "; overflow: scroll; ";
								
								try{
									jQuery('#'+app.getItem(idOrClassName).domId).after(div)
								}catch(er){
									app.handleError(er,"Data.showData() jQuery.after()");
								}

								app.refreshScroll();
							};





							this.standardDeviation = function(variable){
								// Return the standardDeviation of the values for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.standardDeviation(this.getNumbers(variable));

							};



							this.sum = function(variable){
								// Return the sum of the values for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.sum(this.getNumbers(variable))

							}



							this.variance = function(variable){
								// Return the variance of the values for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.variance(this.getNumbers(variable))

							}



							this.zScores = function(variable){
								// Return an array of zScores for the values for `variable`
								// If `variable` not passed in use the first column

								variable = variable || this.getFirstVariable();
								if(!variable)
									return null;

								return app.stats.zScores(this.getNumbers(variable))

							}




							// Builds the HTML Table 
							this._htmlBuildTable = function(arr) {
								var _table_ = document.createElement('table'),
									_tr_ = document.createElement('tr'),
									_th_ = document.createElement('th'),
									_td_ = document.createElement('td');

								 
								 var table = _table_.cloneNode(false),
							         columns = this._htmlAddAllColumnHeaders(arr, table);
								 for (var i=0, maxi=arr.length; i < maxi; ++i) {
							         var tr = _tr_.cloneNode(false);
							         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
							             var td = _td_.cloneNode(false);
							                 cellValue = arr[i][columns[j]];
							             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
										 tr.appendChild(td);
							         }
							         table.appendChild(tr);
							     }
							     return table;
							 }

							 // Adds a header row to the table and returns the set of columns.
							 // Need to do union of keys from all records as some records may not contain
							 // all records
							 this._htmlAddAllColumnHeaders = function(arr, table)
							 {
								var _table_ = document.createElement('table'),
									_tr_ = document.createElement('tr'),
									_th_ = document.createElement('th'),
									_td_ = document.createElement('td');     var columnSet = [],
							         tr = _tr_.cloneNode(false);
							     for (var i=0, l=arr.length; i < l; i++) {
							         for (var key in arr[i]) {
							             if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
							                 columnSet.push(key);
							                 var th = _th_.cloneNode(false);
							                 th.appendChild(document.createTextNode(key));
							                 tr.appendChild(th);
							             }
							         }
							     }
							     table.appendChild(tr);
							     return columnSet;
							 }




						};   // end AppShedData class




























































































































































































































		function install30(){

			if(window._30_installed){
				return;
			}

			window._30_installed = true





			app.setInterval(function(){


			try{
			// make sure phaser and dat have loaded	
			 if(parseFloat(Phaser.VERSION) > 3 && dat && dat.gui){


			  app.clearInterval("load-phaser-3");
			  //console.warn('Phaser '+Phaser.VERSION+' loaded.')







				// ================================================================================ 
				// Make some changes to Modules aka Templates

				// Hide New and Search fields

				//app.addStyles('  #tab_modules .margin-t-20{display: none} #modules-browser h1 a{display: none}   .edu-user #tab_modules .margin-t-20{display: initial}   .edu-user #modules-browser h1 a{display: initial} ')


				app.addStyles('    :root {   	--gm-blue: #3284ff;       --gm-color: #f6f6f6;        --gm-color-low: #c0c0c0;       --gm-background-color: #252525;       --gm-panel-border: #3c3c3c;   }         .edubadge {       position: absolute;       top: -6px;       right: 3px;       font-size: 10px;       background-color: #fff;       padding: 3px 6px 3px 6px;       line-height: 10px;       border-radius: 9px;       color: var(--gm-blue);       text-shadow: none;       font-weight: bold;       border: 1px solid var(--gm-blue);   }         #academy .button{   	margin: inherit;   	position: absolute;   	top: -41px;   	right: 0px;   }         .dropdown-menu>li>a{   	position: relative;   }      /* Hide the second tab in the popup - which is the Item Type tab... but show the Game tab */   .gamemaker #popup-container ul.nav>li:nth-child(2):not(#nav-tabs_game){   	display: none;   }       .gamemaker select, .gamemaker textarea, .gamemaker input[type="text"], .gamemaker input[type="password"], .gamemaker input[type="datetime"], .gamemaker input[type="datetime-local"], .gamemaker input[type="date"], .gamemaker input[type="month"], .gamemaker input[type="time"], .gamemaker input[type="week"], .gamemaker input[type="number"], .gamemaker input[type="email"], .gamemaker input[type="url"], .gamemaker input[type="search"], .gamemaker input[type="tel"], .gamemaker input[type="color"], .gamemaker .uneditable-input{    	background-color: var(--gm-background-color);    	color: #fff;       font-size: 13px;    }      .gamemaker .control-group:last-of-type {       border: none;       background-color: transparent;   }      .gamemaker .file-chooser-thumb_x2 .file-chooser-btn-group {       float: left;       margin: 10px 38px 0 0px;   }   .gamemaker .file-chooser-input{   	display: none;   }   .gamemaker .btn:not(.btn-success){   	background-color: #141414;   	background-image: none;   	color: #fff;       text-shadow: none;   }   .gamemaker .btn-group>.btn, .gamemaker .btn-group>.dropdown-menu, .gamemaker .btn-group>.popover{   	font-size: 13px;   }      .gamemaker .action-selector2-tab .action:hover,     .gamemaker .action-selector2-tab .action.selected {       background-color: transparent;   }   .gamemaker .btn.active:not(.btn-success) , .gamemaker .btn:hover:not(.btn-success){       background-color: #4a4a4a;   }   .gamemaker .file-browser-text{   	color: #000000;	   }      .gamemaker .popup-window {       background: #373737;   }                                    /* Hide Game Maker items, and show Phaser items, based on Product */      .gamemaker .items-inner>.item:not(.phaser){   	display: none;   }      .phaser.item{   	display: none;   }   .gamemaker .phaser-setup .phaser-setup.phaser.item, .gamemaker .phaser-object .phaser-object.phaser.item,  .gamemaker .phaser-event .phaser-event.phaser.item,  .gamemaker .phaser-graphic .phaser-graphic.phaser.item,  .gamemaker .phaser-function .phaser-function.phaser.item{   	display: block;   }   .appbuilder .phaser-config.item {   	display: block;   }       body.gamemaker 	{   	background-color: var(--gm-background-color);   	padding-top: 65px;   	color: var(--gm-color);   }      .gamemaker div.statusIndicator{   	display: none;   }        .gamemaker .tab-itemtype{   	display: none;   }      .gamemaker .android, .gamemaker .androidsm, .gamemaker .phone, .gamemaker .ipad, .gamemaker .blackberry, .gamemaker .blackberry10, .blackberry10.playbook {       xxx_width: 350px;       height: 579px;   }         .gamemaker .ios7style.status .phone-navigator .app .app-navigator .screen .items .items-inner {       padding-top: 0px;   }      .gamemaker .phone .phone-navigator .app .app-navigator .screen .items, .gamemaker .phone.status .phone-navigator, .gamemaker .blackberry .phone-navigator .app .app-navigator .screen .items, .gamemaker .blackberry10 .phone-navigator .app .app-navigator .screen .items{   	top: 0px;   }      .gamemaker .phone.background{   	padding: 0 0 0 0;   }   .gamemaker .navbar-inner{       background-image: linear-gradient(to bottom, #4f4f4f 0%,var(--gm-background-color) 100%);   }             .gamemaker .navbar .nav>li>a{   	color: var(--gm-color);   	text-shadow: 0 1px 0 #000000;   }             .gamemaker .nav-tabs .content-items.extensions, .gamemaker .nav-tabs .content-items.events{   	display: none;   }   .content-items.modules{   	position: relative;   }   .gamemaker #product-link-gm{   	display: none;   }   #product-link-gm a{   	background-color: var(--gm-blue);       color: white;       text-shadow: none;   }   #product-link-ab a{   	background-color: var(--gm-background-color);   }   #product-link-ab{   	display: none;   }   .gamemaker #product-link-ab{   	display: block;   }   .gamemaker .gm-left-panel{   	display: block;   }      .gamemaker legend {       font-size: 10pt;       color: white;       border: none;       padding: 0 5px 0 5px;   }   .gamemaker fieldset {       border: 1px solid var(--gm-panel-border);   }   .gamemaker label {       margin: 4px;       padding: 6px;       border: 1px solid var(--gm-panel-border);       background-color: var(--gm-background-color);       font-size: 12px;   }   .gamemaker label.active { border-color: #aaa; background: var(--gm-panel-border); }     .gamemaker .gm-left-panel input[type="checkbox"] {       margin: 0px 4px 0px 2px;       zoom: 1.2;   } ');

					app.addStyles('        .gm-left-panel{   	display: none;   	float: left;       width: 205px;       overflow: hidden;       margin-left: 10px;   }     .gamemaker .left-panel-box {display: none;}    .gamemaker.gm-objects .left-panel-box.objects-visible {display: block;}     .gamemaker.gm-game .left-panel-box.game-visible {display: block;}    .gamemaker .left-panel-box  label i {   margin-right: 10px;     margin-left: 5px; }   .gamemaker #phone{   	margin-top: 10px;   }   .gamemaker #statusIndicator img{       position: relative;       left: -378px;       top: -51px;   }   .gamemaker .span-phone{   	background-color: #191919;       width: 556px;       height: 965px;       }      .gamemaker .phone.background, .gamemaker .phone.android.background{       background-image: none;       padding-top: 0px;       padding-bottom: 0px   }      .gamemaker .phone{       margin-left: 10px;       padding-top: 65px;       float: left;   }      .gamemaker .phone .tab-bar, .gamemaker .phone .header, .gamemaker .phone .status-bar{   	display: none;   }   .gamemaker .phone .events-btn{   	display: none;   	height: 0px;   }      .gamemaker .android .phone-navigator .app .app-navigator, .gamemaker .phone-navigator .app .app-navigator, .gamemaker .phone-navigator .items.scrolling , .gamemaker .android .phone-navigator .app .app-navigator .screen .items  {       top: 0px;   }      .gamemaker .btn-big, .gamemaker .btn-big:hover, .gamemaker .btn-big:focus {       background-image: linear-gradient(to bottom, #4f4f4f 0%,var(--gm-background-color) 100%);       background-color: var(--gm-background-color);       color: #959595;       width: 49%;	       border-color: var(--gm-background-color);       padding: 10px 3px 10px 3px;       font-size: 14px;       text-shadow: none;       background-position: 0;   }   /*   .gamemaker .btn-big:first-child {       margin-right: 10px;   }   */   .gamemaker .btn-big.active, .gamemaker .btn-big:hover, .gamemaker .btn-big:focus {       background-image: linear-gradient(to bottom, #b5b5b5 0%,#757575 100%);       background-color: var(--gm-color);       color: #000;   }   .view-mode-box{   	display: none;    	padding: 0 0 15px 0;    }      .gamemaker .view-mode-box{   	display: block;  }   @media (min-width: 1200px) {   	.gamemaker .span-toolbox {   	    width: 430px;    margin-left: 10px;  	}   }   .gamemaker .span-toolbox h1, .gamemaker .span-toolbox h2, .gamemaker .span-toolbox h3, .gamemaker .span-toolbox h4, .gamemaker .span-toolbox h5, .gamemaker .span-toolbox h6, .gamemaker .span-toolbox .tool{   	color: var(--gm-color);   }   .icon.inactive .tool, .icon.inactive h3 {       color: #535353;   }   .gamemaker .items.scrolling, .gamemaker .items-inner{   	background-color: var(--gm-background-color);   }   .gamemaker .edit-btns{   	margin: 5px 0 13px 0;   }   .gamemaker .box2 h1{   	text-shadow: 1px 1px 0 var(--gm-background-color);       font-size: 13px;       font-weight: normal;       border-top: none;  margin-bottom: 10px; }   .gamemaker .toolbox .tool{   	font-size: 15px;	   	line-height: 23px;   }   .gamemaker .box2 .content {   	border: 1px solid var(--gm-panel-border);   }   .gamemaker .box2 .content.app-description-box{border: none;}  .gamemaker .box2 .app-name{font-size: 20px; line-height: 24px;}  .gamemaker .box2 .content .icon {       width: 43px;   	   }   .gamemaker .box2 .app-controls{   	margin-top: 5px;   	padding-bottom: 0px;       margin-bottom: 15px;   }   .gamemaker .box2 .app-controls li{       margin-left: 0px;       width: 59px;   }      .gamemaker .box2 .app-controls li i, .gamemaker .box2 .app-controls li i.icon-share {       font-size: 24px;       line-height: 20px;       padding: 0px;   }      .gamemaker .box2 .app-controls li a	{       color: var(--gm-color-low);   	   }       .gamemaker .box2 .app-controls li .share-menu a	{       color: var(--gm-panel-border);   	   }   .gamemaker .box2-first {       margin: -6px 0 0 0;   }   .gamemaker .box2 .app-description {       font-size: 13px;	   }   .gamemaker .form-horizontal .control-label {       width: 100%;       text-align: left;       margin: 0;       border: none;       padding: 0;   }   .gamemaker .form-horizontal .controls {       margin-left: 0px;   }   .gamemaker .form-horizontal .control-group {       margin-bottom: 5px;   }      /* fixedImage */   .gamemaker .gm-fixedImage #edit_item .file-chooser-btn-group.btn-group, .gamemaker .gm-fixedImage #edit_item .controls.image .help-block{   	display: none;   }  .items-msg { display: none;}   .gamemaker .items-msg { display: block;  height: 100%;    color: #898989;    margin-top: 30px;    width: 100%;    text-align: center;    font-size: 13px;}   .gui-label{   padding-top: 15px;    margin-top: 10px; }  .gamemaker textarea#item_text{ height: 300px;}  .gamemaker textarea#item_text {     width: 392px;     color: grey; }  .gamemaker .help-block {display: none;     margin-top: 2px;     margin-bottom: 10px;}   .warning {    margin-top: 30px;    border: 1px solid white;    padding: 10px;    color: white;    background-color: #970000;}   .control-group.dat-gui {      margin-top: 40px;  }    .control-group.dat-gui  fieldset {      padding-bottom: 26px;  }  .control-group.dat-gui .dg.a{  	margin-right: 0px;  }   .dg li.title {     background-color: #161616  }  .dg .close-button {display: none; }  .gamemaker label .edubadge {     position: relative;     width: 20px;     margin-top: 7px;     float: right; }   .gamemaker label a {     color: var(--gm-color); }       .dg select, .dg .c select{ width: 100%;  height: 25px; margin-top: 0px; margin-left: -5px; } ');

				app.addStyles('.box2 .content .icon h3{line-height: 1.5em}')

				// change tab label
				jQuery(".content-items.modules").html('<i class="icon-copy"></i> Templates');

				// change button label
				jQuery("#tab_modules a:contains('New Module')").text('New Template')


				// Add a search box to Modules search
				jQuery("#search-form-modules input[name='srch']").attr('placeholder','Search Templates')
				if(jQuery("#search-form-modules-button").length == 0){
					jQuery('#search-form-modules input').after('<button id="search-form-modules-button" style="margin-left: 4px; margin-bottom: 10px; height: 30px" type="submit">Search</button>')	
				}



				// ================================================================================ 






				// ================================================================================ 
				// Add iPhone X support
				

				if(app.isAppBuilder || app.isPreview){

					app.addStyles('   .iphoneX.background{      padding-top: 27px;      padding-bottom: 28px;      padding-left: 26px;      padding-right: 26px;      background-image: url(https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/appbuilder/devices/apple-iphonex-bl-320png.png);  }    .iphoneX .phone-navigator .app .app-navigator .screen.appsscreen {      background-image: url(https://s3-eu-west-1.amazonaws.com/staticmedia.appshed.com/appbuilder/devices/pv-iphonex-homejpg.jpg);      border-radius: 20px;  }    .iphoneX .phone-inner {      border-radius: 30px;   overflow: hidden;  }      .iphoneX {      width: 320px;      height: 691px;  }    .iphoneX.ios7style .phone-navigator .app .app-navigator .screen.appsscreen .items .home-bar-bg {      background: transparent;  }    .iphoneX.ios7style.status .phone-navigator .app .app-navigator .screen.hide-header .items .items-inner {      padding-top: 40px;  }    .iphoneX.ios7style .app-icon {      box-shadow: none;  }   .gamemaker .iphoneX .phone-inner {border-radius: 0px}   ');
					

					jQuery('.navbar li.dropdown:contains(Device) li>a').click(function(){
						jQuery('.phone.background').removeClass('iphoneX')	
					});

					var nodeX = jQuery('.navbar li.dropdown:contains(Device) li:contains(iPhone 5S)').clone();
					nodeX.find('a').html('<i class="icon-mobile-phone"></i> iPhone X').click(function(){
					  jQuery('.phone.background').removeClass('iphone iphone5 iphone5s ipad ipadair android androidsm nexus7 blackberry blackberry10 playbook').addClass('iphoneX ios7style')

					});
					jQuery('.navbar li.dropdown:contains(Device) li:contains(iPhone 5S)').after(nodeX)

					jQuery('.navbar li.dropdown:contains(Device) li:contains(iPhone X)>a').click();

				
				}	






				// ================================================================================ 
				// Change Top Menu

				
				// Top menubar, product launcher links
				var jLinks = jQuery('.navbar .nav.pull-right');
				jQuery('<li id="product-link-ab"><a style="cursor: pointer;"><i class="icon-plus"></i> App Builder</a></li>').prependTo(jLinks);
				jQuery('<li id="product-link-gm"><a style="cursor: pointer;"><i class="icon-gamepad"></i> Game Maker</a></li>').prependTo(jLinks);

				jQuery('#product-link-ab').click(function(){
					app.game._showProduct('appbuilder')
				})
				jQuery('#product-link-gm').click(function(){
					app.game._showProduct('gamemaker');
				})


				// Dashboard
				jQuery('.navbar .nav.pull-right li>a:contains("Academy")').html('<i class="icon-signal"></i> Dashboard <i class="icon-caret-down"></i>');

				// Dashboard Menu changes
				try{
					var jMenu = jQuery('.navbar ul.dropdown-menu:contains("Register my School")');
					jMenu.find('li:contains("Register my School")').clone().prependTo(jMenu).find('a').text('EDU Features').attr('href','/teach/edu-features').attr('target','_blank');
					jMenu.find('li:contains("Register my School")').clone().prependTo(jMenu).find('a').text('Get Trial/Demo'
						).attr('href','/teach/edu-free-trial').attr('target','_blank')
					// Remove the icons from this menu
					jMenu.find('a>i').remove();
				}catch(er){console.log(er)}


				// Help Menu changes
				// add MasterClasses, Telephone Support and Academy
				var jHelp = jQuery('.navbar ul.dropdown-menu:contains("Quick Guide IoT")');
				jHelp.find('li:contains("Quick Guide IoT")').clone().prependTo(jHelp).find('a').text('AppShed Academy').attr('href','#').attr('target','').click(function(){
					jQuery('#academy .button').click();
				});
				jHelp.find('li:contains("Quick Guide IoT")').clone().prependTo(jHelp).find('a').text('Tel./Online Support').attr('href','#');
				jHelp.find('li:contains("Quick Guide IoT")').clone().prependTo(jHelp).find('a').text('Master Classes').attr('href','#');
				// Remove Latest News
				jHelp.find('li:contains("Latest News")').remove();
				// Help Centre new href
				jHelp.find('li>a:contains("Help Cent")').attr('href','/learn/help-center')
				// Developer Docs
				jHelp.find('li>a:contains("Developer Doc")').attr('href','/learn/developer-docs').text('Developer Docs')







				// ================================================================================ 
				// EDU Badges

				// on the Templates and Images tabs
				jQuery('.nav-tabs li a[data-target="tab_modules"]').prepend('<div class="edubadge">EDU</div>')
				jQuery('.nav-tabs li a[data-target="tab_images"]').prepend('<div class="edubadge">EDU</div>')
				// on the Dashboard and Help menus
				jQuery('.navbar ul.nav.pull-right a:contains("Dashboard")').prepend('<div class="edubadge" style="top: 3px; right: 24px;">EDU</div>')
				jQuery('.navbar ul.nav.pull-right>li>a:contains("Help")').prepend('<div class="edubadge" style="top: 3px; right: 12px;">EDU</div>')
				// sub items in Help menu
				jQuery('.navbar ul.dropdown-menu a:contains("AppShed Academy")').prepend('<div class="edubadge" style="top: 4px; right: 4px;">EDU</div>')
				jQuery('.navbar ul.dropdown-menu a:contains("Online Support")').prepend('<div class="edubadge" style="top: 4px; right: 4px;">EDU</div>')
				jQuery('.navbar ul.dropdown-menu a:contains("Master Classes")').prepend('<div class="edubadge" style="top: 4px; right: 4px;">EDU</div>')
				// on the Academy tab
				jQuery('#academy .button span:contains("Academy")').prepend('<div class="edubadge" style="top: 6px; right: 39px;">EDU</div>')
				


				// Delay this task, as other badges might be added during Game Maker install
				setTimeout(function(){
					jQuery('.edubadge').click(function(){window.q('https://appshed.com/teach/edu-features')})
				},3000);






				// ================================================================================ 
				// UI IDE Behaviour & Styles


				app._popupContainerType = "";
					jQuery('#popup-container').on("DOMSubtreeModified",function(){

					// only process if the function isnot pending
					if(!app._DOMSubtreeModifiedPending){
						app._DOMSubtreeModifiedPending = true;

						setTimeout(()=>{
							app._DOMSubtreeModifiedPending = false;
							app.doDOMSubtreeModified();
						},app._DOMSubtreeModifiedInterval);

					}

				});



				app.addStyles(' .box2 .app-controls {        background-color: rgba(170,170,170,0.02); margin: 10px 0 10px 0;    border: 1px solid silver;    padding: 11px 0 5px 0;  }   .box2 .app-controls li i  {font-size: 22px;    line-height: 15px;}  .box2 .app-controls li i.icon-share {    font-size: 22px;    padding: 10px; }   .box2 .app-controls li i.icon-appshed-iot {    font-size: 18px;    padding-right: 10px; }  .box2 h1 {     height: 20px;     line-height: 30px;     font-size: 16px;     font-weight: normal;  }   .toolbox .tool {    font-size: 18px;  }    .box2 .content .icon {    width: 56px;    padding: 1px;    height: 56px;   }  ' );










				// ================================================================================ 
				// Various other fixes

				// Add class ti  Item Type tab (to hide in GM
				jQuery('.span-toolbox .popup-embed ul.nav-tabs>li:contains("Item Type")').addClass('tab-itemtype')


				app.currentProduct = "appbuilder";


				jQuery('#academy .header').after('<div class="academyLoader invisible" style="     width: 100%;     z-index: 3;     position: absolute;     height: 100%;     background-color: rgba(255, 255, 255); ">      <div style="     width: 50%;     margin: 0 auto;     /* opacity: 1; */     height: 150px;     text-align: center;     margin-top: 67px; ">                     <i style="     /* width: 300px; */     zoom: 11;     opacity: 1; " class="icon-spinner icon-spin "></i>          </div>     </div>'); 


				jQuery('.academyLoader').click(function(){app.hideAcademyLoader()})



					app.game._installGameMaker();	
				//console.warn('Game Maker Installed',app.game)





			} // end If once Phaser 3 ready
			}catch(er){console.log(er)}
			},300,30000,'load-phaser-3');



		}


