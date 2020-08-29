window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
        document.querySelector('.arrow').style.display = 'none';
    }else{
        document.querySelector('.arrow').style.display = 'block';

    }
})

