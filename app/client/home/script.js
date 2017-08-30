/**
 * ====================================================================================================
 * Name    : Client Home Script
 * File    : script.js
 * Version : 0.0.1
 * ====================================================================================================
 */

Home.Name = 'Client Home Manager';
Home.Version = '0.0.1';
Home.Debug = true;
Home.prototype = (function () {
    
    // Init
    // Initialize Test
    function Init() {
        console.log(this.Name + " Version : " + version()); Debugger();
    }
    //Debug
    function Debugger() {
        if (!Home.Debug) {
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
        constructor: Home
        , Version: function () { return version() }
        , init: function () { Init(); }
    }

})();
/// <returns type="Home" />
function Home() { this.init(); }