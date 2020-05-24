// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const HOSTNAME: string = "localhost";
const PORT_NUMBER: number = 8080;
const BASE_URL: string = 'http://'+ HOSTNAME + ':' + PORT_NUMBER ;

export const environment = {
  production: false,
  userLoginAPIUrl : BASE_URL+ '/user/login',
  getSellerByCityAPIUrl :  BASE_URL+ '/seller/getsellers',
  getSellerMenuAPIUrl: BASE_URL+ '/seller/menu',
  userSignupAPIUrl: BASE_URL+ '/user/signup',
  userAddAddressAPIUrl: BASE_URL+ '/user/address',
  sellerLoginAPIUrl : BASE_URL+ '/seller/login',
  sellerRegisterAPIUrl : BASE_URL+ '/seller/register',
  getCartItemAPIUrl : BASE_URL+ '/cart/getcart',
  addDishAPIUrl : BASE_URL+ '/seller/addmenu',
  addAddressAPIUrl : BASE_URL+ '/seller/address',
  getSellerOrderAPIUrl : BASE_URL+ '/order/getsellerorder',
  getUserOrderAPIUrl : BASE_URL+ '/order/getorder',
  updateUserAddressAPIUrl : BASE_URL+ '/user/updateadd',
  changeUserPassAPIUrl : BASE_URL+ '/user/changepass',
  deleteAddPassAPIUrl : BASE_URL+ '/user/deleteadd',
  updateUserDetailsAPIUrl : BASE_URL+ '/user/updatedetails',
  placeOrderAPIUrl : BASE_URL+ '/order/placeorder',
  sellerChangePassAPIUrl : BASE_URL+ '/seller/changepass',
  sellerUpdateDetailsAPIUrl : BASE_URL+ '/seller/updatedetails'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
