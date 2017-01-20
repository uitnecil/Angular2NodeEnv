/**
 * Created by zoriana.kovacs on 20/12/16.
 */

Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

var appContext = require.context('../client', true, /\.spec\.ts/);
appContext.keys().forEach(appContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());

// require('es6-shim');
// require('reflect-metadata');
// require('zone.js/dist/zone');
// require('zone.js/dist/proxy');
// require('zone.js/dist/long-stack-trace-zone');
// require('zone.js/dist/sync-test');
// require('zone.js/dist/async-test');
// require('zone.js/dist/fake-async-test');
// require('zone.js/dist/jasmine-patch');
//
// const browserTesting = require('@angular/platform-browser-dynamic/testing');
// const coreTesting = require('@angular/core/testing');
//
// coreTesting.setBaseTestProviders(
//     browserTesting.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
//     browserTesting.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
// );
// const context = require.context('../client/', true, /\.spec\.ts$/);
// context.keys().forEach(context);
// Error.stackTraceLimit = Infinity;
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
//

