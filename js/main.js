const blade = document.querySelector('.linkto');


// document.querySelector('.linkedin').addEventListener('click',function(){

//     location.href = 'https://www.linkedin.com/in/yusuf-%C3%B6zcan-029869236/';
// },false);

function myFunction($type){
    if($type == 'instagram'){
        location.href = 'https://www.instagram.com/yusufozcans/';
    }else if($type == 'whatsapp'){
        location.href = 'https://wa.me/5078424424';

    }else if($type == 'linkedin'){
        location.href = 'https://www.linkedin.com/in/yusuf-%C3%B6zcan-029869236/'
    }
}