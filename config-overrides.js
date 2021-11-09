/*
We use this file to in order to be able to use webpack plugin without
ejecting from CRA.
This file is picked up by react-app-rewired that we use in place or react-scripts
*/

// This is an webpack extension to detect circular import (example:  A imports B that imports A)
const CircularDependencyPlugin = require("circular-dependency-plugin");
const fs = require("fs");

module.exports = function override(config) {

    if (!config.module.rules) {
        config.module.rules = [];
    }

		config.module.rules.push({
			"type": "javascript/auto",
			"test": /\.mjs$/,
			"include": /node_modules/
		});

    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(...[
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            "exclude": /node_modules/,
            // add errors to webpack instead of warnings
            "failOnError": true,
            // allow import cycles that include an asynchronous import,
            // e.g. via import(/* webpackMode: "weak" */ './file.js')
            "allowAsyncCycles": false,
            // set the current working directory for displaying module paths
            "cwd": process.cwd()
        })
    ]);

    return config;

};