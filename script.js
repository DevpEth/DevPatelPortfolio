var links = document.querySelectorAll(".menu ul li a");

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.querySelector(".menu ul li a.active");
    current.classList.remove("active");
    this.classList.add("active");
  });
}

var links = document.querySelectorAll('.left-menu a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    });

    if(performance.navigation.type == 1){
        window.location.href = "#aboutme";
    }

  
  window.onload = function() {
    document.querySelector('#aboutme').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
