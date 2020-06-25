/**
 * Manipulating the DOM exercise. 
*/
const startTime = performance.now();
const nav_content  = document.getElementById("navbar__list");
const fregmant = document.createDocumentFragment();
/**
 * Define Global Variables 
*/
const innercontent = ["header","section1","section2","section3","section4","footer"]
/***/
// build the nav
function generateLi() {
    for(let i = 0 ; i <= 5 ; i++) {
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
/**/
  let header = document.getElementById("header");
  let section1 = document.getElementById("section1");
  let section2 = document.getElementById("section2");
  let section3 = document.getElementById("section3");
  let section4 = document.getElementById("section4");
  let footer = document.getElementById("footer");

  let rect0 = header.getBoundingClientRect(); 
  let rect1 = section1.getBoundingClientRect(); 
  let rect2 = section2.getBoundingClientRect();
  let rect3 = section3.getBoundingClientRect();
  let rect4 = section4.getBoundingClientRect();
  let rect5 = footer.getBoundingClientRect(); 

/*to optain the hight of the element in the view port */
/* this function to detect the user scrol from the top */
const navFun=(n=0)=>{
   let activeEle=document.getElementsByClassName("active");
    activeEle[0].className = activeEle[0].className.replace(" active", "");
    let scrollcontainer= document.querySelectorAll(".scroll");
    scrollcontainer[n].className += " active";
}
$(window).scroll(function(){
  var scroll =$(this).scrollTop();
  console.log( "this is the vertical scroll : " + scroll);
  console.log(`this is vertical distance of footer from top ${rect5.y}`)
  if((scroll>= rect0.y)&&(scroll<rect1.y)){ navFun(0) }  
  else if((scroll>=( rect1.y))&&(scroll<(rect1.y+rect1.height))){navFun(1) }
  else if((scroll>= rect2.y)&&(scroll<(rect2.y+rect2.height))){navFun(2) }
  else if((scroll>= rect3.y)&&(scroll<(rect3.y+rect3.height))){navFun(3) }
  else if((scroll>= rect4.y)&&(scroll<(rect4.y+rect4.height))){navFun(4) }
  else if(scroll>= rect5.y){navFun(5) }
});
// Scroll to anchor ID using scrollTO event
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var scroll;
        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top) 
        }else{
            scroll =  ($target.offset().top)
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


