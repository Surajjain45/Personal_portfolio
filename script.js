let bar = document.querySelectorAll(".bar span")
let percentages = document.querySelectorAll(".progress h3 span")

let progress = document.querySelectorAll(".progress")

Array.from(progress).forEach(Element=>{

   let percentage_values = Element.children[0].children[0].innerHTML;
   let span_box = Element.lastElementChild.children[0]

   span_box.style.width = percentage_values
})

let column_skills = document.querySelectorAll('.skills_box')
let education_content = document.querySelectorAll('.education_display')


let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')









let header = document.querySelector('header')




window.onscroll=()=>{

   sections.forEach(sec=>{
      let top = window.scrollY;
      let upper = sec.offsetTop-100;
      height = sec.offsetHeight;
      let id  = sec.getAttribute('id')

      if(top>upper && top<upper+height){
         navlinks.forEach(element=>{     
         element.classList.remove('active')
         let nav_item = document.querySelector('header nav a[href*=' + id + ']')
         nav_item.classList.add('active')
         sec.classList.add('show-animate')
      })
      }

      // else{
      //    sec.classList.remove('show_animate')
      // }
   })

   let header = document.querySelector('header')
   header.classList.toggle('sticky', window.scrollY > 100)
}