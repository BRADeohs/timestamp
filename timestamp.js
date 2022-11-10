// ==UserScript==
// @name         GMAIL Timesheet Naming Convention Modifier
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Modifies the title of the gmail print window in order to facilitate PDF naming convention
// @author       You
// @match        https://mail.google.com/mail/u/0/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @require      jquery-3.6.0.min.js
// ==/UserScript==

var printBAK = window.print;
window.print=function(){};
window.onbeforeprint = (event) => {
  //console.log('Before print');
      window.onfocus = function () {
        //  window.print=function(){};
        window.print=printBAK;
      //window.close();
      }
     // window.close();
};
//addStyle('https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css', 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u');
//addJS('https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js', 'sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa');
//addJS('https://code.jquery.com/jquery-3.6.1.min.js', 'sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=');
var menuContainer=document.createElement('iframe');
menuContainer.id='replace';
menuContainer.style='width: -webkit-fill-available;border: none;margin: 0;padding: 0;';
let url = chrome.runtime.getURL("menu1.html");
menuContainer.src=url;
document.body.prepend(menuContainer);
//$( '#replace' ).load( url );
/* function addStyle(fileName, intg) {
    let head = document.head;
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.crossorigin='anonymous';
    link.integrity=intg;
    link.href = fileName;
    head.appendChild(link);
}
function addJS(fileName, intg) {
      let head = document.head;
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = fileName;
      script.integrity=intg;
      script.crossorigin='anonymous';
      head.appendChild(script);
} */
var ogTitle = document.title;
//Educational Options Foundation Mail - Fwd_ Home Timesheets - Last, First - 15.pdf
var t = "Educational Options Foundation Mail - Fwd: Home Timesheets - ";
var tt = document.querySelector('body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong');
if (tt != null) {
    switch (tt.toString().substring(tt.toString().length - 4)) {
        case 2021:
            var sYr = ' SY2122';
            break;
        case 2022:
            sYr = ' SY2223';
            break;
        default:
            sYr = ' SY2223';
    }
} else {
    let mi = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[12]");
    switch (mi.toString().substring(mi.toString().length - 4)) {
        case 2021:
            var sYr1 = ' SY2122';
            break;
        case 2022:
            sYr1 = ' SY2223';
            break;
        default:
            sYr1 = ' SY2223';
    }
    sYr = sYr1;
}
if (ogTitle.includes(t)) {
    ogTitle = ogTitle.replace(t, "");
    var weekNum = ogTitle.slice(-2);
    weekNum = weekNum.replace(" ", "0");
    ogTitle = ogTitle.slice(0, -2);
    ogTitle = ogTitle.replace(" - ", "");
    ogTitle = ogTitle.replace(" -", "");
    ogTitle = ogTitle.replace(",", "");
    var newTitle = 'zH' + weekNum + ' ' + ogTitle + sYr;
    document.title = newTitle;
}
function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }