// JS Scripts by con-jr

$(function(){
  
  var ulElem = $('ul');
  var liElem = $('ul li');
  var sliderLen = liElem.length;
  var sliderWidth = liElem.width();
  var sliderHeight = liElem.height();
  var dynamicWidth = sliderLen * sliderWidth;
  
  $('ul').css({ width: dynamicWidth});
  $('ul').css({ width: dynamicWidth, marginLeft: -sliderWidth});
  $('li img').css({ width: sliderWidth, height: sliderHeight});             
  $('ul li:last-child').prependTo('ul');
    
  $('a').on('click', function(e){
    e.preventDefault();
    
    var action = $(this).attr('data-btnaction');
    var objAction = {
      'next': {
        'symbol': '-',        
        func: function(){
          return $('ul li:first-child').appendTo('ul');          
        }
      },
      'prev': {
        'symbol': '+',
        func: function(){
          return $('ul li:last-child').prependTo('ul');          
        }
      }
    };   
    
    ulElem.animate({left: objAction[action].symbol+(sliderWidth) +'px'}, 250, function(){      
      objAction[action].func();
      $('ul').css('left', '');
    });
  });
  
})