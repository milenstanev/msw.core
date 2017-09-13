System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "index.js": [
      "./src/component.js"
    ],
    "src/component.js": [
      "angular",
      "angular-ui/ui-router",
      "angular-material",
      "angular-animate",
      "./component.config/component.config.js",
      "./component.config/constants",
      "text",
      "css"
    ],
    "github:angular/bower-angular@1.6.6.js": [
      "github:angular/bower-angular@1.6.6/angular"
    ],
    "github:angular/bower-material@1.1.5.js": [
      "github:angular/bower-material@1.1.5/angular-material"
    ],
    "npm:angular-ui-router@1.0.3.js": [
      "npm:angular-ui-router@1.0.3/lib/index.js"
    ],
    "npm:angular-animate@1.6.6.js": [
      "npm:angular-animate@1.6.6/index.js"
    ],
    "src/component.config/component.config.js": [
      "./constants.js"
    ],
    "github:systemjs/plugin-text@0.0.11.js": [
      "github:systemjs/plugin-text@0.0.11/text"
    ],
    "github:systemjs/plugin-css@0.1.35.js": [
      "github:systemjs/plugin-css@0.1.35/css"
    ],
    "npm:angular-animate@1.6.6/index.js": [
      "./angular-animate"
    ],
    "npm:angular-ui-router@1.0.3/lib/index.js": [
      "@uirouter/core",
      "./services",
      "./statebuilders/views",
      "./stateProvider",
      "./urlRouterProvider",
      "./injectables",
      "./directives/stateDirectives",
      "./stateFilters",
      "./directives/viewDirective",
      "./viewScroll"
    ],
    "github:angular/bower-material@1.1.5/angular-material.js": [
      "./angular-material.css!",
      "angular",
      "angular-animate",
      "angular-aria"
    ],
    "npm:angular-animate@1.6.6/angular-animate.js": [
      "angular"
    ],
    "npm:@uirouter/core@5.0.3.js": [
      "npm:@uirouter/core@5.0.3/lib/index.js"
    ],
    "npm:angular-ui-router@1.0.3/lib/stateFilters.js": [
      "./angular"
    ],
    "npm:angular-ui-router@1.0.3/lib/services.js": [
      "./angular",
      "@uirouter/core",
      "./statebuilders/views",
      "./templateFactory",
      "./stateProvider",
      "./statebuilders/onEnterExitRetain",
      "./locationServices",
      "./urlRouterProvider"
    ],
    "npm:angular-ui-router@1.0.3/lib/statebuilders/views.js": [
      "@uirouter/core",
      "process"
    ],
    "npm:angular-ui-router@1.0.3/lib/stateProvider.js": [
      "@uirouter/core"
    ],
    "npm:angular-ui-router@1.0.3/lib/urlRouterProvider.js": [
      "@uirouter/core"
    ],
    "npm:angular-ui-router@1.0.3/lib/injectables.js": [
      "process"
    ],
    "npm:angular-ui-router@1.0.3/lib/directives/stateDirectives.js": [
      "../angular",
      "@uirouter/core",
      "process"
    ],
    "npm:angular-ui-router@1.0.3/lib/directives/viewDirective.js": [
      "../angular",
      "angular",
      "@uirouter/core",
      "../statebuilders/views",
      "../services"
    ],
    "npm:angular-ui-router@1.0.3/lib/viewScroll.js": [
      "./angular"
    ],
    "github:angular/bower-angular-animate@1.6.6.js": [
      "github:angular/bower-angular-animate@1.6.6/angular-animate"
    ],
    "github:angular/bower-angular-aria@1.6.6.js": [
      "github:angular/bower-angular-aria@1.6.6/angular-aria"
    ],
    "npm:angular@1.6.6.js": [
      "npm:angular@1.6.6/angular"
    ],
    "npm:@uirouter/core@5.0.3/lib/index.js": [
      "./common/index",
      "./params/index",
      "./path/index",
      "./resolve/index",
      "./state/index",
      "./transition/index",
      "./url/index",
      "./view/index",
      "./globals",
      "./router",
      "./vanilla",
      "./interface"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:angular-ui-router@1.0.3/lib/angular.js": [
      "angular"
    ],
    "npm:angular-ui-router@1.0.3/lib/templateFactory.js": [
      "./angular",
      "@uirouter/core",
      "process"
    ],
    "npm:angular-ui-router@1.0.3/lib/statebuilders/onEnterExitRetain.js": [
      "@uirouter/core",
      "../services"
    ],
    "npm:angular-ui-router@1.0.3/lib/locationServices.js": [
      "@uirouter/core"
    ],
    "github:angular/bower-angular-animate@1.6.6/angular-animate.js": [
      "angular"
    ],
    "github:angular/bower-angular-aria@1.6.6/angular-aria.js": [
      "angular"
    ],
    "npm:@uirouter/core@5.0.3/lib/common/index.js": [
      "./common",
      "./coreservices",
      "./glob",
      "./hof",
      "./predicates",
      "./queue",
      "./strings",
      "./trace"
    ],
    "npm:@uirouter/core@5.0.3/lib/params/index.js": [
      "./param",
      "./paramTypes",
      "./stateParams",
      "./paramType"
    ],
    "npm:@uirouter/core@5.0.3/lib/path/index.js": [
      "./pathNode",
      "./pathFactory"
    ],
    "npm:@uirouter/core@5.0.3/lib/state/index.js": [
      "./stateBuilder",
      "./stateObject",
      "./stateMatcher",
      "./stateQueueManager",
      "./stateRegistry",
      "./stateService",
      "./targetState"
    ],
    "npm:@uirouter/core@5.0.3/lib/resolve/index.js": [
      "./interface",
      "./resolvable",
      "./resolveContext"
    ],
    "npm:@uirouter/core@5.0.3/lib/transition/index.js": [
      "./interface",
      "./hookBuilder",
      "./hookRegistry",
      "./rejectFactory",
      "./transition",
      "./transitionHook",
      "./transitionEventType",
      "./transitionService"
    ],
    "npm:@uirouter/core@5.0.3/lib/url/index.js": [
      "./urlMatcher",
      "./urlMatcherFactory",
      "./urlRouter",
      "./urlRule",
      "./urlService"
    ],
    "npm:@uirouter/core@5.0.3/lib/view/index.js": [
      "./view"
    ],
    "npm:@uirouter/core@5.0.3/lib/globals.js": [
      "./params/stateParams",
      "./common/queue"
    ],
    "npm:@uirouter/core@5.0.3/lib/router.js": [
      "./url/urlMatcherFactory",
      "./url/urlRouter",
      "./transition/transitionService",
      "./view/view",
      "./state/stateRegistry",
      "./state/stateService",
      "./globals",
      "./common/common",
      "./common/predicates",
      "./url/urlService",
      "./common/trace"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla.js": [
      "./vanilla/index"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:@uirouter/core@5.0.3/lib/common/common.js": [
      "./predicates",
      "./hof",
      "./coreservices"
    ],
    "npm:@uirouter/core@5.0.3/lib/common/predicates.js": [
      "./hof",
      "../state/stateObject"
    ],
    "npm:@uirouter/core@5.0.3/lib/common/strings.js": [
      "./predicates",
      "../transition/rejectFactory",
      "./common",
      "./hof",
      "../transition/transition",
      "../resolve/resolvable"
    ],
    "npm:@uirouter/core@5.0.3/lib/common/trace.js": [
      "./hof",
      "./predicates",
      "./strings"
    ],
    "npm:@uirouter/core@5.0.3/lib/params/param.js": [
      "../common/common",
      "../common/hof",
      "../common/predicates",
      "../common/coreservices",
      "./paramType"
    ],
    "npm:@uirouter/core@5.0.3/lib/params/paramTypes.js": [
      "../common/common",
      "../common/predicates",
      "../common/hof",
      "../common/coreservices",
      "./paramType"
    ],
    "npm:@uirouter/core@5.0.3/lib/params/stateParams.js": [
      "../common/common"
    ],
    "npm:@uirouter/core@5.0.3/lib/path/pathNode.js": [
      "../common/common",
      "../common/hof",
      "../params/param"
    ],
    "npm:@uirouter/core@5.0.3/lib/params/paramType.js": [
      "../common/common",
      "../common/predicates"
    ],
    "npm:@uirouter/core@5.0.3/lib/path/pathFactory.js": [
      "../common/common",
      "../common/hof",
      "../state/targetState",
      "./pathNode"
    ],
    "npm:@uirouter/core@5.0.3/lib/state/stateBuilder.js": [
      "../common/common",
      "../common/predicates",
      "../common/strings",
      "../common/hof",
      "../resolve/resolvable",
      "../common/coreservices"
    ],
    "npm:@uirouter/core@5.0.3/lib/state/stateObject.js": [
      "../common/common",
      "../common/hof",
      "../common/glob",
      "../common/predicates"
    ],
    "npm:@uirouter/core@5.0.3/lib/state/stateMatcher.js": [
      "../common/predicates",
      "../common/common"
    ],
    "npm:@uirouter/core@5.0.3/lib/state/stateQueueManager.js": [
      "../common/common",
      "../common/predicates",
      "./stateObject",
      "../common/hof"
    ],
    "npm:@uirouter/core@5.0.3/lib/state/stateRegistry.js": [
      "./stateMatcher",
      "./stateBuilder",
      "./stateQueueManager",
      "../common/common",
      "../common/hof"
    ],
    "npm:@uirouter/core@5.0.3/lib/state/stateService.js": [
      "../common/common",
      "../common/predicates",
      "../common/queue",
      "../common/coreservices",
      "../path/pathFactory",
      "../path/pathNode",
      "../transition/transitionService",
      "../transition/rejectFactory",
      "./targetState",
      "../params/param",
      "../common/glob",
      "../resolve/resolveContext",
      "../hooks/lazyLoad",
      "../common/hof"
    ],
    "npm:@uirouter/core@5.0.3/lib/state/targetState.js": [
      "../common/common",
      "../common/predicates"
    ],
    "npm:@uirouter/core@5.0.3/lib/resolve/resolvable.js": [
      "../common/common",
      "../common/coreservices",
      "../common/trace",
      "../common/strings",
      "../common/predicates"
    ],
    "npm:@uirouter/core@5.0.3/lib/common/glob.js": [
      "process"
    ],
    "npm:@uirouter/core@5.0.3/lib/resolve/resolveContext.js": [
      "../common/common",
      "../common/hof",
      "../common/trace",
      "../common/coreservices",
      "./interface",
      "./resolvable",
      "../path/pathFactory",
      "../common/strings",
      "process"
    ],
    "npm:@uirouter/core@5.0.3/lib/transition/hookRegistry.js": [
      "../common/common",
      "../common/predicates",
      "./interface",
      "../common/glob"
    ],
    "npm:@uirouter/core@5.0.3/lib/transition/rejectFactory.js": [
      "../common/common",
      "../common/strings",
      "../common/hof"
    ],
    "npm:@uirouter/core@5.0.3/lib/transition/hookBuilder.js": [
      "../common/common",
      "../common/predicates",
      "./interface",
      "./transitionHook"
    ],
    "npm:@uirouter/core@5.0.3/lib/transition/transition.js": [
      "../common/trace",
      "../common/coreservices",
      "../common/common",
      "../common/predicates",
      "../common/hof",
      "./interface",
      "./transitionHook",
      "./hookRegistry",
      "./hookBuilder",
      "../path/pathFactory",
      "../state/targetState",
      "../params/param",
      "../resolve/resolvable",
      "../resolve/resolveContext"
    ],
    "npm:@uirouter/core@5.0.3/lib/transition/transitionEventType.js": [
      "./transitionHook"
    ],
    "npm:@uirouter/core@5.0.3/lib/transition/transitionService.js": [
      "./interface",
      "./transition",
      "./hookRegistry",
      "../hooks/coreResolvables",
      "../hooks/redirectTo",
      "../hooks/onEnterExitRetain",
      "../hooks/resolve",
      "../hooks/views",
      "../hooks/updateGlobals",
      "../hooks/url",
      "../hooks/lazyLoad",
      "./transitionEventType",
      "./transitionHook",
      "../common/predicates",
      "../common/common",
      "../common/hof",
      "../hooks/ignoredTransition",
      "../hooks/invalidTransition"
    ],
    "npm:@uirouter/core@5.0.3/lib/url/urlMatcherFactory.js": [
      "../common/common",
      "../common/predicates",
      "./urlMatcher",
      "../params/param",
      "../params/paramTypes"
    ],
    "npm:@uirouter/core@5.0.3/lib/url/urlRouter.js": [
      "../common/common",
      "../common/predicates",
      "./urlMatcher",
      "../common/hof",
      "./urlRule",
      "../state/targetState"
    ],
    "npm:@uirouter/core@5.0.3/lib/url/urlRule.js": [
      "./urlMatcher",
      "../common/predicates",
      "../common/common",
      "../common/hof"
    ],
    "npm:@uirouter/core@5.0.3/lib/url/urlService.js": [
      "../common/coreservices",
      "../common/common"
    ],
    "npm:@uirouter/core@5.0.3/lib/view/view.js": [
      "../common/common",
      "../common/hof",
      "../common/predicates",
      "../common/trace"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/index.js": [
      "./q",
      "./injector",
      "./baseLocationService",
      "./hashLocationService",
      "./memoryLocationService",
      "./pushStateLocationService",
      "./memoryLocationConfig",
      "./browserLocationConfig",
      "./utils",
      "./plugins"
    ],
    "npm:process@0.11.10.js": [
      "npm:process@0.11.10/browser.js"
    ],
    "npm:@uirouter/core@5.0.3/lib/transition/transitionHook.js": [
      "./interface",
      "../common/common",
      "../common/strings",
      "../common/predicates",
      "../common/hof",
      "../common/trace",
      "../common/coreservices",
      "./rejectFactory",
      "../state/targetState",
      "process"
    ],
    "npm:@uirouter/core@5.0.3/lib/url/urlMatcher.js": [
      "../common/common",
      "../common/hof",
      "../common/predicates",
      "../params/param",
      "../common/strings",
      "process"
    ],
    "npm:@uirouter/core@5.0.3/lib/hooks/coreResolvables.js": [
      "../transition/transition",
      "../router"
    ],
    "npm:@uirouter/core@5.0.3/lib/hooks/redirectTo.js": [
      "../common/predicates",
      "../common/coreservices",
      "../state/targetState"
    ],
    "npm:@uirouter/core@5.0.3/lib/hooks/resolve.js": [
      "../common/common",
      "../resolve/resolveContext",
      "../common/hof"
    ],
    "npm:@uirouter/core@5.0.3/lib/hooks/views.js": [
      "../common/common",
      "../common/coreservices"
    ],
    "npm:@uirouter/core@5.0.3/lib/hooks/updateGlobals.js": [
      "../common/common"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/q.js": [
      "../common/index"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/injector.js": [
      "../common/index"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/baseLocationService.js": [
      "./utils",
      "../common/predicates",
      "../common/common"
    ],
    "npm:@uirouter/core@5.0.3/lib/hooks/lazyLoad.js": [
      "../common/coreservices",
      "process"
    ],
    "npm:@uirouter/core@5.0.3/lib/hooks/ignoredTransition.js": [
      "../common/trace",
      "../transition/rejectFactory",
      "process"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/hashLocationService.js": [
      "./utils",
      "./baseLocationService"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/pushStateLocationService.js": [
      "./utils",
      "./baseLocationService"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/memoryLocationConfig.js": [
      "../common/predicates",
      "../common/common"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/memoryLocationService.js": [
      "./baseLocationService"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/browserLocationConfig.js": [
      "../common/predicates"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/utils.js": [
      "../common/index",
      "../common/common"
    ],
    "npm:@uirouter/core@5.0.3/lib/vanilla/plugins.js": [
      "./browserLocationConfig",
      "./hashLocationService",
      "./utils",
      "./pushStateLocationService",
      "./memoryLocationService",
      "./memoryLocationConfig",
      "./injector",
      "./q",
      "../common/coreservices"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.6.6",
    "angular-animate": "npm:angular-animate@1.6.6",
    "angular-material": "github:angular/bower-material@1.1.5",
    "angular-mocks": "npm:angular-mocks@1.6.6",
    "angular-sanitize": "npm:angular-sanitize@1.6.6",
    "angular-ui/ui-router": "npm:angular-ui-router@1.0.3",
    "angular/bower-angular-animate": "github:angular/bower-angular-animate@1.6.6",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.35",
    "json": "github:systemjs/plugin-json@0.3.0",
    "mgcrea/angular-strap": "github:mgcrea/angular-strap@2.3.12",
    "text": "github:systemjs/plugin-text@0.0.11",
    "twbs/bootstrap": "github:twbs/bootstrap@3.3.7",
    "github:angular/bower-angular-animate@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:angular/bower-angular-aria@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:angular/bower-material@1.1.5": {
      "angular": "github:angular/bower-angular@1.6.6",
      "angular-animate": "github:angular/bower-angular-animate@1.6.6",
      "angular-aria": "github:angular/bower-angular-aria@1.6.6",
      "css": "github:systemjs/plugin-css@0.1.35"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.7"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:mgcrea/angular-strap@2.3.12": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.2.1"
    },
    "npm:@uirouter/core@5.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:angular-ui-router@1.0.3": {
      "@uirouter/core": "npm:@uirouter/core@5.0.3",
      "angular": "npm:angular@1.6.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.7": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
