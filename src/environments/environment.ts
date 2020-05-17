// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const HOSTNAME: string = "localhost";
const PORT_NUMBER: number = 8080;

export const environment = {
  production: false,
  userLoginAPIUrl : 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/user/login',
  getSellerByCityAPIUrl :  'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/seller/getsellers',
  getSellerMenuAPIUrl: 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/seller/menu',
  userSignupAPIUrl: 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/user/signup',
  userAddAddressAPIUrl: 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/user/address',
  sellerLoginAPIUrl : 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/seller/login',
  sellerRegisterAPIUrl : 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/seller/register',
  getCartItemAPIUrl : 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/cart/getcart',
  addDishAPIUrl : 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/seller/addmenu',
  addAddressAPIUrl : 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/seller/address',
  getSellerOrderAPIUrl : 'http://'+ HOSTNAME + ':' + PORT_NUMBER + '/order/getsellerorder'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
