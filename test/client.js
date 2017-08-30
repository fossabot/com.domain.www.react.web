/**
 * ====================================================================================================
 * Name    : Client Unit Test
 * File    : client.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Global Requared
var assert = require("assert");
var chai = require('chai');
var expect = chai.expect;

// Test Object
var Client = require('../app/client');

'use strict';

/**
 * Test Iteration
 * 
 */
module.exports = function () {
    it("Client Application Instance Create", function () {

        // Define
        var expected = Client;
        var actual = new Client();
    
        // Expect
        expect(actual).to.be.an.instanceof(expected);
    });
}