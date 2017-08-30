/**
 * ====================================================================================================
 * Name    : Application Unit Test
 * File    : app.js
 * Version : 0.0.1
 * ====================================================================================================
 */

// Global Requared
var assert = require("assert");
var chai = require('chai');
var expect = chai.expect;

// Test Object
var ReactWeb = require('../app/index.js');

'use strict';

/**
 * Test Iteration
 * 
 */
module.exports = function () {
    it("Application Instance Create", function () {

        // Define
        var expected = ReactWeb;
        var actual = new ReactWeb();
    
        // Expect
        expect(actual).to.be.an.instanceof(expected);
    });
}