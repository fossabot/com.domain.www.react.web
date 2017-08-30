/**
 * ====================================================================================================
 * Name    : Logger Unit Test
 * File    : lib.logger.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Global Requared
var assert = require("assert");
var chai = require('chai');
var expect = chai.expect;

// Test Object
var Logger = require("../lib/logger");

'use strict';

/**
 * Test Iteration
 * 
 */
module.exports = function () {
    it("Logger Library Instance Create", function () {

        // Define
        var expected = Logger;
        var actual = new Logger();

        // Expect
        expect(actual).to.be.an.instanceof(expected);
    });
}