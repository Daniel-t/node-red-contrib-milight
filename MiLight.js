module.exports = function(RED) {
    function MiLightPower(config) {
	RED.nodes.createNode(this,config);
	var node = this;
   	var MiLight = require('milight');
	var milight = new MiLight({
		host: config.ip,
		broadcast: config.broadcast
	});
   	var zone = config.zone;
	this.on('input', function(msg) {
		if (msg.payload == "off") milight.zone(zone).off();
		if (msg.payload == "on") milight.zone(zone).on();
	});
    };
 RED.nodes.registerType("MiLightPower",MiLightPower);

    function MiLightRGB(config) {
	RED.nodes.createNode(this,config);
	var node = this;
   	var MiLight = require('milight');

	var milight = new MiLight({
                host: config.ip,
                broadcast: config.broadcast
        });
        var zone = config.zone;


	this.on('input', function(msg) {
		if (typeof msg.payload == "string") {	
			milight.zone(zone).rgb(msg.payload);
		} else {
			milight.zone(zone).rgb(msg.payload.rgb || "#FFFFFF");
			milight.zone(zone).brightness(msg.payload.brightness) || 100;
		}
	});
    };
 RED.nodes.registerType("MiLightRGB",MiLightRGB);

    function MiLightWhite(config) {
	RED.nodes.createNode(this,config);
	var node = this;
   	var MiLight = require('milight');
	
	var milight = new MiLight({
                host: config.ip,
                broadcast: config.broadcast
        });
        var zone = config.zone;
	

	this.on('input', function(msg) {
		milight.zone(zone).white(msg.payload);
	});
    };
 RED.nodes.registerType("MiLightWhite",MiLightWhite);


}
