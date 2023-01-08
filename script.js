window.addEventListener('resize', () =>{
    
    if(window.innerWidth > 1000){
        console.log('Window width is bigger than 1000px') ;

    }else{
        console.log('Window width is smaller than 1000px');
    };
    if(window.innerHeight > 500){
        console.log('Window height is bigger than 500px');
    }else{;
        console.log('Window height is smaller than 500px');
    };
});

window.addEventListener('mousemove', (mouse) =>{
    console.log('Mouse mooved');
});