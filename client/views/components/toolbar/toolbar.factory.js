// angular
//     .module('savor.toolbar')// we need to sort this out
//     .factory('toolbarFactory', toolbarFactory);

//     function toolbarFactory(){
//       return {
//         login: login,
//         logout: logout
//       };
      
//       function login() {
//         console.log('SUCCCCESSSSS');
//         // The auth service has a signin method that
//         // makes use of Auth0Lock. If authentication
//         // is successful, the user's profile and token
//         // are saved in local storage with the store service
//         auth.signin({}, function(profile, token) {
//           store.set('profile', profile);
//           store.set('token', token);
//           $location.path('/');
//         }, function(error) {
//           console.log(error);
//         });
//       }

//       function logout() {
//         // The signout method on the auth service
//         // sets isAuthenticated to false but we
//         // also need to remove the profile and
//         // token from local storage
//         auth.signout();
//         store.remove('profile');
//         store.remove('token');
//         $location.path('/');
//       }
//   }