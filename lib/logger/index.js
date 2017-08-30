/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   Logger Library
 * Version       :   @package.json.version
 * Description   :   Logger Library For NodeJs
 * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
 * Licence       :   MIT
 * ════════════════════════════════════════════════════════════════════════════════════════════════════
 * Package       :   No Package / Web Application
 * Repository    :   https://github.com/azmisahin/com.domain.www.react.web.git
 * Homepage      :   https://azmisahin.github.io
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 */

'use strict';

/**
 * Logger
 * 
 * @public
 */
var Logger = function () {

    /**
     * Logger.debug
     * @param string A string message.
     * 
     * @public
     */
    var debug = function (string) {

        // Write Log
        console.log(string);
    }
}

/**
 * Logger Module Model
 * Module Exports
 */
module.exports = Logger;