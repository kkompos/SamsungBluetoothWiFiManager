/**
 * Created by nherriot on 12/06/18.
 */

var piWifi = require('pi-wifi');
const config = require('config');
const wifiPassword = process.env.WIFIPASSWORD1 || 'unknown';
var networkDetails = {
  ssid: 'srbackup',
  password: wifiPassword,
  key_mgmt: 'WPA-PSK',

};


/**
 * A simple test case that can be used to test connecting to network
 * described in networkDetails.
 * 
 * @run		/> export WIFIPASSWORD='your password'
 * 			/> nodejs wifi-switch-network1.js
 * 
 * 
 */ 
piWifi.connectTo (networkDetails, function(err) {
  if(err) {
    console.log('Connection error: ' + err.message);

  } else {
    console.log('success');
  }
});

