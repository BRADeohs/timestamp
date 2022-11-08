$("#915btn").click(function(){
  	if($(this).hasClass("btn-success")) {
	$(this).removeClass("btn-success");
	$(this).addClass("btn-secondary");
	$("#checkGlyphEnable").attr("style", "visibility: hidden");
	$("#checkGlyphDisable").attr("style", "visibility: visible");
	} else {
	$(this).removeClass("btn-secondary");
	$(this).addClass("btn-success");
	$("#checkGlyphEnable").attr("style", "visibility: visible");
	$("#checkGlyphDisable").attr("style", "visibility: hidden");
	}
});

$('#plusYR').on('click', function () {
  var ty=$('#yrBtn').text();
  var numb = ty.match(/\d/g);
  numb = numb.join("");
  var yr=parseFloat(numb) + 1;
  var comb=yr + ' '; //+ ' <span class="caret"></span>';
  for (let i = 2; i < 9; i++) {
    let s = "body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(3) > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > strong";
    //s = "body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(3) > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > strong";
    let ti = document.querySelector(s)
    //ti = document.querySelector(s)
    if (ti != null) {
      dM(ti);
    } else {
      bakup();
      break;
    }
  }
  
  var qi = document.querySelector("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong");
  //qi = document.querySelector("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong");
  if (qi != null) {
      eM(qi);
  }
  $('#yrBtn').html(comb);
  });

$('#minusYR').on('click', function () {
  var ty=$('#yrBtn').text();
  var numb = ty.match(/\d/g);
  numb = numb.join("");
  var yr=parseFloat(numb) + -1;
  var comb=yr + ' '; // + ' <span class="caret"></span>';
  for (let i = 2; i < 9; i++) {
    let s = "body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(3) > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > strong";
    //s = "body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(3) > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > strong";
    let ti = document.querySelector(s)
    //ti = document.querySelector(s)
    if (ti != null) {
      dMi(ti);
    } else {
      bakupi();
      break;
    }
  }
  
  var qi = document.querySelector("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong");
  //qi = document.querySelector("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong");
  if (qi != null) {
      eMi(qi);
  }
  $('#yrBtn').html(comb);
  });

function setYR(year) {
  var comb=year + ' ';
  $('#yrBtn').html(comb);
}  
function setLoc(loc) {
  var comb='<span class="glyphicon glyphicon-time" aria-hidden="true"></span> ' + loc + ' ';
  $('#locBtn').html(comb);
}  

class MyDate extends Date {
  addDays(days) {
    let date = new MyDate(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
}

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function bakup() {
  for (let i = 15; i < 22; i++) {
    let x=getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[" + i + "]");
    //x=getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[" + i + "]");
    iD(x);
    }
  let mi = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[12]");
    //mi = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[10]");
  pQ(mi);
}

function bakupi() {
  for (let i = 15; i < 22; i++) {
    let x=getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[" + i + "]");
    //x=getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[" + i + "]");
    iDi(x);
    }
  let mi = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[12]");
    //mi = getElementByXpath("/html/body/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr/td/div[1]/font/text()[10]");
  pQi(mi);
}

function iD(select) {
  let tii = select.textContent;
  tii = tii.split(' ');
  let tdi = new MyDate(tii[1]);
  //tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  //nextYear = tdi.addDays(364);
  let yyyy = nextYear.getFullYear();
  //yyyy = nextYear.getFullYear();
  let mm = nextYear.getMonth() + 1;
  //mm = nextYear.getMonth() + 1;
  let dd = nextYear.getDate();
  //dd = nextYear.getDate();
  tii[1] = mm + '/' + dd + '/' + yyyy;
  let fin = tii.join(' ');
  //fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy + tii[2] + tii[3] + tii[4] + tii[5] + tii[6];
  select.textContent = fin;   
}

function pQ(select) {
  let tii = select.textContent;
  tii = tii.split(' ');
  let tdi = new MyDate(tii[5] + tii[6] + tii[7]);
  //tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  //nextYear = tdi.addDays(364);
  let fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  //fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  tii[5] = fDate;
  tii[6] = '';
  tii[7] = '';
  let fin = tii.join(' ');
  //fin = tii[0] + ' - ' + fDate;
  select.textContent = fin;   
}


function dM(select) {
  let tii = select.innerHTML.split(' ');
  //tii = select.innerHTML.split(' ');
  let tdi = new MyDate(tii[1]);
  //tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  //nextYear = tdi.addDays(364);
  let yyyy = nextYear.getFullYear();
  //yyyy = nextYear.getFullYear();
  let mm = nextYear.getMonth() + 1;
  //mm = nextYear.getMonth() + 1;
  let dd = nextYear.getDate();
  //dd = nextYear.getDate();
  let fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy;
  //fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy;
  select.innerHTML = fin;   
}

function eM(select) {
  let tii = select.innerHTML.split(' - ');
  //tii = select.innerHTML.split(' - ');
  let tdi = new MyDate(tii[1]);
  //tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  //nextYear = tdi.addDays(364);
  let fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  //fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  let fin = tii[0] + ' - ' + fDate;
  //fin = tii[0] + ' - ' + fDate;
  select.innerHTML = fin;   
}

function iDi(select) {
  let tii = select.textContent;
  tii = tii.split(' ');
  let tdi = new MyDate(tii[1]);
  //tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(-364);
  //nextYear = tdi.addDays(364);
  let yyyy = nextYear.getFullYear();
  //yyyy = nextYear.getFullYear();
  let mm = nextYear.getMonth() + 1;
  //mm = nextYear.getMonth() + 1;
  let dd = nextYear.getDate();
  //dd = nextYear.getDate();
  tii[1] = mm + '/' + dd + '/' + yyyy;
  let fin = tii.join(' ');
  //fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy + tii[2] + tii[3] + tii[4] + tii[5] + tii[6];
  select.textContent = fin;   
}

function pQi(select) {
  let tii = select.textContent;
  tii = tii.split(' ');
  let tdi = new MyDate(tii[5] + tii[6] + tii[7]);
  //tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(-364);
  //nextYear = tdi.addDays(364);
  let fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  //fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  tii[5] = fDate;
  tii[6] = '';
  tii[7] = '';
  let fin = tii.join(' ');
  //fin = tii[0] + ' - ' + fDate;
  select.textContent = fin;   
}


function dMi(select) {
  let tii = select.innerHTML.split(' ');
  //tii = select.innerHTML.split(' ');
  let tdi = new MyDate(tii[1]);
  //tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(-364);
  //nextYear = tdi.addDays(364);
  let yyyy = nextYear.getFullYear();
  //yyyy = nextYear.getFullYear();
  let mm = nextYear.getMonth() + 1;
  //mm = nextYear.getMonth() + 1;
  let dd = nextYear.getDate();
  //dd = nextYear.getDate();
  let fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy;
  //fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy;
  select.innerHTML = fin;   
}

function eMi(select) {
  let tii = select.innerHTML.split(' - ');
  //tii = select.innerHTML.split(' - ');
  let tdi = new MyDate(tii[1]);
  //tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(-364);
  //nextYear = tdi.addDays(364);
  let fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  //fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  let fin = tii[0] + ' - ' + fDate;
  //fin = tii[0] + ' - ' + fDate;
  select.innerHTML = fin;   
}
