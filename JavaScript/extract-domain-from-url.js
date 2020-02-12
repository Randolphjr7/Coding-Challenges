// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

/* 
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" 
*/

let url1 = "http://github.com/carbonfive/raygun";
let url2 = "http://www.zombie-bites.com";
let url3 = "https://www.cnet.com";
let url4 = "9y7w2s8qozi2lt3eb4na.br/archive/"
function domainName(url) {

  const fwdSlash1 = "//www.";
  const fwdSlash2 = "//";
  const threeW = "www.";

  let result;
  let indexOf;
  let domain;

  if (url.includes(fwdSlash1)) {

    indexOf = url.indexOf(fwdSlash1);
    domain = url.slice(indexOf + fwdSlash1.length);
    result = domain.substring(0, domain.indexOf("."));

  } else if (url.includes(fwdSlash2)) {

    indexOf = url.indexOf(fwdSlash2);
    domain = url.slice(indexOf + fwdSlash2.length);
    result = domain.substring(0, domain.indexOf("."));

  } else if (url.includes(threeW)) {

    indexOf = url.indexOf(threeW);
    domain = url.slice(indexOf + threeW.length);
    result = domain.substring(0, domain.indexOf("."));
  
  } else {

    result = url.substring(0, url.indexOf("."));

  }
 
  return result;
}

console.log(domainName(url1));
console.log(domainName(url2));
console.log(domainName(url3));
console.log(domainName(url4));



// Best Practice
/* 
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
}; 
*/