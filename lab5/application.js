$(document).ready(function(){
// alert ("whatup");
// $("#title").fadeOut(2000);
$(".details").click(function(){
	$(this).siblings(".description").slideToggle(1000);

});
});



  $(function() {
  var images = [
    { img: "images/image1.jpg", 
      title: "This is a drop",
      description: "Drop -non ultrices dolor cursus at. Suspendisse sed ipsum tempor est." },
    { img: "images/image2.jpg", 
      title: "Dog here",
      description: "Doggy - sodales leo, non ultrices dolor cursus at. Suspendisse sed ipsum tempor" },
    { img: "images/image3.jpg", 
      title: "Some sort of building",
      description: "Building - nec quis libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { img: "images/image4.jpg", 
     title: "Nightscape",
     description: "Nightscaper - Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ];
  
  $.each(images,function() {
    var imageInfo = this;
    
    var img = $("<img>").attr({'src' : imageInfo.img,
                     'width' : 128 }).data('properties',this);
    img.click(function() {
      window.open(this.src,"mywin","status=0,toolbar=0,width=400,height=400");
    });
    
    img.hover(function() {
      $(this).addClass("selected");
      $("#thumbnails img:not(.selected)").stop().animate({opacity: 0.4});

      $("#details").show();
      $("#title").text(imageInfo.title);
      $("#description").text(imageInfo.description);

    },function() {
      $("#thumbnails img:not(.selected)").stop().animate({opacity: 1.0});
      $(this).removeClass("selected");
      
      $("#details").hide();
    });

    img.appendTo("#thumbnails");
  });
  
});