module.exports = function(RED) {
    function MiLightRGB(config) {
	RED.nodes.createNode(this,config);
	var node = this;
   	var MiLight = require('milight');

	var milight = new MiLight({
		host: "192.168.0.255",
		broadcast: true
	});
   	var zone = 1;
	this.on('input', function(msg) {
		milight.zone(zone).rgb(msg.payload);
		});
    };
 RED.nodes.registerType("MiLightRGB",MiLightRGB);

}
