var page = document.getElementById('page');
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;

window.onscroll = function () {
  // Horizontal Scroll.
  var y = document.body.getBoundingClientRect().top;
  page.scrollLeft = -y;
  
  // Looping Scroll.
 // var diff = window.scrollY - dummy_x;
  //if (diff > 0) {
 //   window.scrollTo(0, diff);
 // }
 // else if (window.scrollY == 0) {
 //   window.scrollTo(0, dummy_x);
  //}
}
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();

// Reset window-based vars
function resize() {
  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
  document.body.style.height = w + 'px';
  
  dummy_x = last_pane.getBoundingClientRect().left+window.scrollY;
}

function scaleit(){


    setTimeout(function () {
   window.location.href = "http://lrylander.github.io/linnearylander/inside.html"; //REPLACE WITH REAL LINK
}, 5000);

    document.getElementById('blackout').className ='blackout'

  };

function sendEmail() {
    window.location = "mailto:linnearylander@gmail.com";
};
