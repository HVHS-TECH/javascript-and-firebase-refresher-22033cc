//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by Conor Church, Term 1 2026
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_B = '#353536';
const COL_C = '#f542c8';

console.log('%c fb_io.mjs running ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');

var fb_Db;
var userUid;

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getDatabase }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { ref, set, get, update, query, orderByChild, limitToFirst }
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export {
    fb_initialise, fb_authenticate, fb_detectLoginChange, fb_logOut, fb_writeRecord, fb_readRecord,
    fb_readAll, fb_updateRecord, fb_read_sorted
};


/***************************************************************
// function fb_intitialise()
// called by html button "fb_initialise()"
// intatilises connecting to firebase
 ****************************************************************/
function fb_initialise() {
console.log('fb_initialise ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
}


/***************************************************************
// function fb_authenticate()
//
//
 ****************************************************************/
function fb_authenticate() {
console.log('fb_authenticate ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
}

/***************************************************************
// function fb_detectLoginChange()
//
//
 ****************************************************************/
function fb_detectLoginChange() {
console.log('fb_detectLoginChange ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');

}

/***************************************************************
// function fb_logOut()
// 
//
 ****************************************************************/
function fb_logOut() {
console.log('fb_authenticate ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
}

/***************************************************************
// function fb_writeRecord()
//
//
 ****************************************************************/
function fb_writeRecord() {
console.log('fb_writeRecord ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');

}

/***************************************************************
// function fb_readRecord()
//
//
 ****************************************************************/
function fb_readRecord() {
console.log('fb_authenticate ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
}

/***************************************************************
// function fb_readAll()
//
//
 ****************************************************************/
function fb_readAll() {
console.log('fb_readAll ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
}

/***************************************************************
// function fb_updateRecord()
//
//
 ****************************************************************/
function fb_updateRecord() {
console.log('fb_updateRecord ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
}
/****************************************************************
 // function fb_read_sorted()
 //
 //
 ****************************************************************/

 function fb_read_sorted(){
    console.log('fb_read_sorted ',
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
 }