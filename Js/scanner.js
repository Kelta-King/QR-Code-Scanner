function onScanSuccess(decodedText, decodedResult) {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
  // html5QrcodeScanner.clear();
  // ^ this will stop the scanner (video feed) and clear the scan area.
}

function onScanError(errorMessage) {
  // handle on error condition, with error message
  console.log(errorMessage);
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);

// Section to perform different styling using js
let divs = document.getElementsByTagName("DIV");
divs[1].setAttribute("style", "display:none");
divs[divs.length-1].setAttribute("style", "display:none");

for(let i =0; i<divs.length;i++)
  console.log(divs[i]);
}
