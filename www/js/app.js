// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ion-floating-menu'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle('center');

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })

  .state('app.addProduct', {
      url: '/addProduct',
      views: {
        'menuContent': {
          templateUrl: 'templates/addProduct.html'
        }
      }
    })
    .state('app.feed', {
      url: '/feed',
      views: {
        'menuContent': {
          templateUrl: 'templates/feed.html',
          controller: 'FeedCtrl'
        }
      }
    })
    .state('app.product', {
      url: '/product',
      views: {
        'menuContent': {
          templateUrl: 'templates/product.html',
        }
      }
    })
    .state('app.deal', {
      url: '/deal',
      views: {
        'menuContent': {
          templateUrl: 'templates/deal.html',
        }
      }
    })
    .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
        }
      }
    })
    .state('app.wishlist', {
      url: '/wishlist',
      views: {
        'menuContent': {
          templateUrl: 'templates/wishlist.html',
        }
      }
    })
    .state('app.addOffer', {
        url: '/addOffer',
        views: {
          'menuContent': {
            templateUrl: 'templates/addOffer.html'
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/feed');
});
