import angular from 'angular';
import 'angular-ui/ui-router';
import 'text';
import 'css';

import {
  componentConfig  // configure names .etc
} from './component.config/component.config.js';
import {COMPONENT_NAME} from "./component.config/constants";

/**
 * @desc Angular module name: prefix.component, description: desc
 * @type {angular.Module} AngularModule
 *
 * @param {string} [name] - Module name
 * @param {Array} [dependencies] - Module decencies
 *
 * @example usage with directive: <div prefix-component></div>
 * @example usage with controller/template: <div ng-controller="ComponentCtrl as ctrl" ng-include="'componentHtml'"></div>
 *
 * @property {angular.Module#constant} componentSettings - Module settings
 * @property {angular.Module#run}  - Load template dependencies
 * @property {angular.Module#config} - Doing routes, resolve services .etc
 * @property {angular.Module#controller} componentCtrl - Define module controller
 * @property {angular.Module#service} componentSvc - Define module services
 * @property {angular.Module#directive} prefix-component - Define directive which can present the module view
 * @info TODO: change it somehow
 *  - The {cost} to which is assigned module instance is not good practice according good practices from @url https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modules,
 *    but otherwise we will lose documentation
 */
const mswCore = angular.module(`${componentConfig.NAMESPACE}.${componentConfig.COMPONENT_NAME}`, [
  'ui.router'
]);

export {
  angular,
  mswCore
};

