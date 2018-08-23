$(document).ready(function(){
  
  // Adds flip mechanism to ambitos
    $(".card").flip({
      // trigger: 'hover'
    }); 
  
    var msnry = createMasonry();
    
  });
  
  // starts Masonry layout on cards
  
function createMasonry() {
  return new Masonry('.grid', {
   
    itemSelector: '.grid-item',
    
    isFitWidth: true,
  });
}