/*=========================================================================
 * Privacy friendly cookie settings+ is a Firefox extension which should
 * prevent the user from entering sensitive data on insecure websites.
 * Additionally it should help the user to choose privacy friendly cookie
 * settings.
 * Copyright (C) 2016 SECUSO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *=========================================================================*/

var pfcs = pfcs || {};

pfcs.cookieOption = pfcs.cookieOption || {};

// On initialization, set the images according to the preferences
pfcs.cookieOption.init = function() {
    if (pfcs.prefsNetworkCookie.getIntPref("cookieBehavior") === 0) {
        document.getElementById("SaveThirdParty").src = "chrome://privacyfriendlycookiesettings/skin/not_checked.png";
    } else {
        document.getElementById("SaveThirdParty").src = "chrome://privacyfriendlycookiesettings/skin/checked.png";
    }
    if (pfcs.prefsNetworkCookie.getIntPref("lifetimePolicy") === 0) {
        document.getElementById("CloseThirdParty").src = "chrome://privacyfriendlycookiesettings/skin/not_checked.png";
    } else {
        document.getElementById("CloseThirdParty").src = "chrome://privacyfriendlycookiesettings/skin/checked.png";
    }
};

// Switches the images between checked and unchecked
pfcs.cookieOption.switchCheckbox = function(id) {
    if (document.getElementById(id).src == "chrome://privacyfriendlycookiesettings/skin/not_checked.png") {
        document.getElementById(id).src = "chrome://privacyfriendlycookiesettings/skin/checked.png";
    } else if (document.getElementById(id).src == "chrome://privacyfriendlycookiesettings/skin/checked.png") {
        document.getElementById(id).src = "chrome://privacyfriendlycookiesettings/skin/not_checked.png";
    }
};

// Checks the status of the images and sets the cookie preferences accordingly
pfcs.cookieOption.saveCookieSettings = function() {
    if (document.getElementById("CloseThirdParty").src == "chrome://privacyfriendlycookiesettings/skin/not_checked.png") {
        pfcs.prefsNetworkCookie.setIntPref("lifetimePolicy", 0);
    } else if (document.getElementById("CloseThirdParty").src == "chrome://privacyfriendlycookiesettings/skin/checked.png") {
        pfcs.prefsNetworkCookie.setIntPref("lifetimePolicy", 2);
    }

    if (document.getElementById("DeleteCookies").src == "chrome://privacyfriendlycookiesettings/skin/checked.png") {
        pfcs.prefsCookieManager.removeAll();
    }

    if (document.getElementById("SaveThirdParty").src == "chrome://privacyfriendlycookiesettings/skin/not_checked.png") {
        pfcs.prefsNetworkCookie.setIntPref("cookieBehavior", 0);
    } else if (document.getElementById("SaveThirdParty").src == "chrome://privacyfriendlycookiesettings/skin/checked.png") {
        pfcs.prefsNetworkCookie.setIntPref("cookieBehavior", 1);
    }
    pfcs.cookieOption.closeCookieWindow()
};

// Closes the cookie window
pfcs.cookieOption.closeCookieWindow = function() {
    window.close();
};
