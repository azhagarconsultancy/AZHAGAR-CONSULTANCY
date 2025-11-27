// Simple script placeholder for future features
document.addEventListener('DOMContentLoaded', function(){
  // Example: scroll to services when CTA clicked
  document.querySelectorAll('a[href="#services"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.getElementById('services').scrollIntoView({behavior:'smooth'});
    });
  });
});
