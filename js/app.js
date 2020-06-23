/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

const startTime = performance.now();

const nav_content  = document.getElementById("navbar__list");
const fregmant = document.createDocumentFragment();




 


/* for an active navigationt bar  */

/**
 * Define Global Variables
 * 
*/
const innercontent = ["header","section1","section2","section3","footer"]

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
function generateLi() {
    for(let i = 0 ; i <= 4 ; i++) {

        const newElement = document.createElement("li");
        newElement.setAttribute('class','navigation');

        const newLink = document.createElement("a");
         newLink.setAttribute('class','scroll');
                 if(i===0){ newLink.setAttribute('class','scroll  active');
}
        newLink.setAttribute('href',"#" + innercontent[i]  );
        newLink.textContent = innercontent[i];
        newElement.appendChild(newLink);

        
        fregmant.appendChild(newElement);  
    }
    nav_content.appendChild(fregmant);
}
generateLi();


// Add class 'active' to section when near top of viewport

var ul__list= document.getElementById("navbar__list");
var li = ul__list.getElementsByClassName("scroll");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}





// Scroll to anchor ID using scrollTO event

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var scroll;

        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top) - 80
        }else{
            scroll =  ($target.offset().top) - 60
        }
        $('html, body').stop().animate({'scrollTop': scroll}, 1500, 'swing', 
        function () {
            //window.location.hash = target;
        });
    });
});
const endTime = performance.now();

console.log("this code takes : "+ (endTime-startTime) );
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


