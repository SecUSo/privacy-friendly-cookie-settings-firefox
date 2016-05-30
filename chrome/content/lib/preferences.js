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

pfcs.prefsNetworkCookie = function() {
    const prefNetworkCookieManager =
        Components.classes["@mozilla.org/preferences-service;1"]
        .getService(Components.interfaces.nsIPrefService)
        .getBranch("network.cookie.");

    return {
        getBoolPref: prefNetworkCookieManager.getBoolPref,
        getIntPref: prefNetworkCookieManager.getIntPref,
        getStringPref: prefNetworkCookieManager.getCharPref,
        getComplexValue: prefNetworkCookieManager.getComplexValue,
        setBoolPref: prefNetworkCookieManager.setBoolPref,
        setIntPref: prefNetworkCookieManager.setIntPref,
        setStringPref: prefNetworkCookieManager.setCharPref,
        setComplexValue: prefNetworkCookieManager.setComplexValue
    };
}();

pfcs.prefsCookieManager = function() {
    const prefNetworkCookieManager =
        Components.classes["@mozilla.org/cookiemanager;1"]
        .getService(Components.interfaces.nsICookieManager);

    return prefNetworkCookieManager;
}();
