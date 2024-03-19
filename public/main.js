if(window.innerWidth < 1000){
    document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
              document.getElementById('categorias').classList.add('fixed-top');
              // add padding top to show content behind navbar
              navbar_height = document.querySelector('#categorias').offsetHeight;
              document.body.style.paddingTop = navbar_height + 'px';
            } else {
              document.getElementById('categorias').classList.remove('fixed-top');
               // remove padding top from body
              document.body.style.paddingTop = '0';
            } 
        });
      });
      var links = document.querySelectorAll('.nav-link')
      console.log(links)
      for (var i = 0;  i< links.length ; i++) {
          links[i].addEventListener('click', function(e){
            console.log(e.target)	  
          })  
      }
      
    }