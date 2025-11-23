document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById('myModal');

  if (modal) {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var images = document.getElementsByClassName('gallery-img');

    for (var i = 0; i < images.length; i++) {
      images[i].onclick = function(e){
        e.preventDefault();
        modal.style.display = "block";
        modalImg.src = this.src;
      }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    if (span) {
      span.onclick = function() { 
        modal.style.display = "none";
      }
    }

    // When the user clicks anywhere outside of the modal content, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
});