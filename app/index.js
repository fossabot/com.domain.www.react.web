/**
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 * Name          :   React Web Application
 * Version       :   @package.json.version
 * Description   :   Web Application With React
 * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
 * Licence       :   MIT
 * ════════════════════════════════════════════════════════════════════════════════════════════════════
 * Package       :   No Package / Web Application
 * Repository    :   https://github.com/azmisahin/com.domain.www.react.web.git
 * Homepage      :   https://azmisahin.github.io
 * ████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

'use strict';

/**
 * React Web
 * 
 * @public
 */
var ReactWeb = function() {
  
};

/**
  * ReactWeb.Package
  * Package Information
  * 
  * @public
  */
  ReactWeb.prototype.Package = require('../package.json');

/**
  * ReactWeb.Logger
  * Logger
  * 
  * @public
  */
  ReactWeb.prototype.Logger = require('../lib/logger');

  /**
  * ReactWeb.Server
  * Server
  * 
  * @public
  */
  ReactWeb.prototype.Server = require('../app/server');

  /**
  * ReactWeb.Client
  * Server
  * 
  * @public
  */
  // This Module Client Side Run
  // ReactWeb.prototype.Client = require('../app/client');

  /**
   * React Web
   * Node Domain Driven Design
   * Module Exports
   */
  module.exports = ReactWeb;