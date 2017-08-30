/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   React Web Client Application
 * Version       :   @package.json.version
 * Description   :   Web Client Application With React
 * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
 * Licence       :   MIT
 * ═══════════════════════════════════════════════════════════════════════════════════════════════════
 * Package       :   No Package / Web Application
 * Repository    :   https://github.com/azmisahin/com.domain.www.react.web.git
 * Homepage      :   https://azmisahin.github.io
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 */

'use strict';


Client.Name = 'Client Manager';
Client.Version = '0.0.1';
Client.Debug = true;
Client.prototype = (function () {
    
    // Init
    // Initialize Test
    function Init() {
        console.log(Client.Name + " Version : " + version()); Debugger();
    }
    //Debug
    function Debugger() {
        if (!Client.Debug) {
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
        constructor: Client
        , Version: function () { return version() }
        , init: function () { Init(); }
    }

})();

/**
 * React Client
 * 
 * @public
 */
function Client(){this.init();};

/**
 * React Client Application
 * Node Domain Driven Design
 * Module Exports
 */
module.exports = Client;