/**
 * ====================================================================================================
 * Name    : Server Unit Test
 * File    : server.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Global Requared
var assert = require("assert");
var chai = require('chai');
var expect = chai.expect;

// Test Object
var Server = require('../app/server');

'use strict';

/**
 * Test Iteration
 * 
 */
module.exports = function () {
    it("Server Application Instance Create", function () {

        // Define
        var expected = Server;
        var actual = new Server();
    
        // Expect
        expect(actual).to.be.an.instanceof(expected);
    });
}