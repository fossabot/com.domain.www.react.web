/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   React Web Server Application
 * Version       :   @package.json.version
 * Description   :   Web Server Application With React
 * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
 * Licence       :   MIT
 * ════════════════════════════════════════════════════════════════════════════════════════════════════
 * Package       :   No Package / Web Application
 * Repository    :   https://github.com/azmisahin/com.domain.www.react.web.git
 * Homepage      :   https://azmisahin.github.io
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 */

'use strict';
Server.Name = 'Server Manager';
Server.Version = '0.0.1';
Server.Debug = true;
Server.prototype = (function () {
    
    // Init
    // Initialize Test
    function Init() {
        console.log(Server.Name + " Version : " + version()); Debugger();
    }
    //Debug
    function Debugger() {
        if (!Server.Debug) {
            console = console || {};
            console.log = function () { };
        }
    }
    /*
    version
    ────────────────────────────────────────────────────────────────────────────────────────────────────*/
    function version() {
        return "0.0.0.1";
    }
    /*
    Public Functions
    ────────────────────────────────────────────────────────────────────────────────────────────────────*/
    return {
        constructor: Server
        , Version: function () { return version() }
        , init: function () { Init(); }
    }

})();

/**
 * React Server
 * 
 * @public
 */
function Server(){this.init();};

/**
 * React Server Application
 * Node Domain Driven Design
 * Module Exports
 */
module.exports = Server;