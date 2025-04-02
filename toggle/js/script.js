$(function(){
    
//     $('.img').on('click',function(){
//        $(this).hide(1000);
//   });
//    $('.hide').on('click',function(){
//        $('.img').hide(1000);                 
//                     
//    });
//    
//    $('.show').on('click',function(){
//        $('.img').show(1000);                 
//                     
//    });
//    
//    $('.toggle').on('click',function(){
//        $('.img').toggle(1000);                 
//                     
//    });
    
    
    
    
    
    $('.hide').on('click',function(){
        $('.img').fadeOut(1000);                 
                     
    });
    
    $('.show').on('click',function(){
        $('.img').fadeIn(1000);                 
                     
    });
    
    $('.toggle').on('click',function(){
        $('.img').fadeToggle(1000);                 
                     
    });
    
    $('.toggle').on('click',function(){
        $('.img').toggle(1000);
        alert('This is Blank');
                     
    });    
    
    
});