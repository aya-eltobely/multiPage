


/*About  counter
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach( function(counter) {

  const updateCount = function() {

    const target = parseInt(counter.getAttribute('data-count'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {

      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    }
     else {
      counter.innerText = target;
    }
  };

  updateCount();
});
*/






// dropList

$(document).ready(function(){

  $('.navbar-toggler').click(function(){
    $('.aside-drop').slideToggle();
  } );


});

// client say

var persons = [
  {
    img : "images/client/testimonial1.jpg" ,
    name: "Kevin Watson" ,
    job : "CEo , Kingston",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores optio unde doloremque saepe totam aperiam sequi atque, natus, voluptate aut sit ad delectus pariatur facere! "
  },
  {
    img : "images/client/testimonial2.jpg" ,
    name: "Jone smith" ,
    job : "HR , Kingston",
    info : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie."
  },
]

var imge = document.getElementById('imge');
var author = document.getElementById('author');
var job = document.getElementById('job');
var info = document.getElementById('info');

var prev =document.getElementById('prev');
var next =document.getElementById('next');

var curritem = 0; //  for array items


function show(persn)
{
  var itemm = persons[persn];
  imge.src =  itemm.img;
  author.textContent = itemm.name;
  job.textContent = itemm.job;
  info.textContent = itemm.info;
}

//initial items

window.addEventListener('load' , function(){
  show(curritem);
})

next.addEventListener('click',function(){

  curritem++;
  if( curritem > persons.length -1){
    curritem =0;
  }
  show(curritem);
})

prev.addEventListener('click',function(){

  curritem--;
  if( curritem < 0 ){
    curritem =  persons.length -1 ;
  }
  show(curritem);
})
