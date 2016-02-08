angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('callLogs.missedCall', {
      url: '/miss',
      views: {
        'tab2': {
          templateUrl: 'templates/missedCall.html',
          controller: 'missedCallCtrl'
        }
      }
    })
        
      
    
      
        
    .state('callLogs.receivedCall', {
      url: '/receive',
      views: {
        'tab3': {
          templateUrl: 'templates/receivedCall.html',
          controller: 'receivedCallCtrl'
        }
      }
    })
        
      
    
      
        
    .state('callLogs.dialedCalls', {
      url: '/dial',
      views: {
        'tab1': {
          templateUrl: 'templates/dialedCalls.html',
          controller: 'dialedCallsCtrl'
        }
      }
    })
        
      
    
      
    .state('callLogs', {
      url: '/page2',
      abstract:true,
      templateUrl: 'templates/callLogs.html'
    })
      
    
      
        
    .state('callLogs.settings', {
      url: '/setting',
      views: {
        'tab7': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('detailsPage', {
      url: '/details',
      templateUrl: 'templates/detailsPage.html',
      controller: 'detailsPageCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page2/dial');

});