(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var template='\n  <div class="btn-toolbar" role="toolbar">\n    <div class="btn-group">\n      <button type="button" class="btn btn-default"\n        data-ng-show="$ctrl.showBtnSearch()" data-ng-click="$ctrl.setBeyond()">\n        <span data-ng-show="!$ctrl.beyond">Deseja marcar todos os <strong data-ng-bind="$ctrl.entity.count"></strong> registros da pesquisa?</span>\n        <span data-ng-show="$ctrl.beyond">Desfazer seleção de registros da pesquisa</span>\n      </button>\n      <button type="button" class="btn btn-default"\n        data-ng-show="$ctrl.showBtnBeyond()" data-ng-click="$ctrl.setBeyond()">\n        <span data-ng-show="!$ctrl.beyond">Deseja marcar todos os <strong data-ng-bind="$ctrl.entity.count"></strong> registros alem desta página?</span>\n        <span data-ng-show="$ctrl.beyond">Desfazer seleção de registros além desta página</span>\n      </button>\n    </div>\n    <div class="btn-group" uib-dropdown>\n      <button id="split-button" type="button" class="btn btn-default"\n        data-ng-disabled="$ctrl.disabledAction()"\n        data-ng-click="$ctrl.setAction($ctrl.firstAction)">\n        {{$ctrl.firstAction.label}}\n      </button>\n      <button type="button" class="btn btn-default"\n        data-ng-disabled="$ctrl.disabledAction()"\n        uib-dropdown-toggle>\n        <span class="caret"></span>\n      </button>\n      <ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="split-button">\n        <li role="menuitem" data-ng-repeat="action in $ctrl.actions">\n          <a href="#" data-ng-click="$ctrl.setAction(action)">{{action.label}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n',component={restrict:"E",bindings:{query:"<",entity:"<",selected:"<",beyond:"=",actions:"<",onAction:"&"},template:template,controller:function controller(){var ctrl=this;ctrl.setAction=function(option){var queryaction={};ctrl.beyond&&ctrl.query?queryaction=ctrl.query:ctrl.beyond||(queryaction.ids=ctrl.beyond?[]:ctrl.selected.map(function(item){return item.id})),queryaction.action=option.key,ctrl.onAction({queryaction:queryaction}),ctrl.beyond=!1,ctrl.query=!1},ctrl.disabledAction=function(){return 0==ctrl.selected.length},ctrl.showBtnSearch=function(){return ctrl.entity.data.length==ctrl.selected.length&&ctrl.entity.count>ctrl.entity.pageSize&&ctrl.query},ctrl.showBtnBeyond=function(){return ctrl.entity.data.length==ctrl.selected.length&&ctrl.entity.count>ctrl.entity.pageSize&&!ctrl.query},ctrl.setBeyond=function(){ctrl.beyond=!ctrl.beyond},ctrl.$onInit=function(){ctrl.firstAction=ctrl.actions[0],ctrl.beyond=!1,ctrl.actions.shift()}}};angular.module("gumga.queryaction",[]).component("gumgaQueryAction",component);

},{}]},{},[1])
//# sourceMappingURL=gumga-query-action.js.map