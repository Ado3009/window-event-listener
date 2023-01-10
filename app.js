function add() {
    let input = document.querySelector('input');
    let value = input.value;

    if(value.includes('@') && value.includes('.')){
        let prijeAt = value.indexOf('@')
        let poslijeDot = value.indexOf('.')
        let izmeduAtDot = value.substring(prijeAt +1 , poslijeDot)
            if(izmeduAtDot.length > 2){
                prijeAt = value.substring(0, prijeAt)
                if(prijeAt.length > 3){
                   poslijeDot = value.substring(poslijeDot +1 , value.length)
                   if(poslijeDot.length > 2 ){
                    

                   }else{
                    alert('Email is not correct.')
                   }
                }else{
                    alert('Email is not correct.')
                }
            }else{
                alert('Email is not correct.')
            }
    }else{
        alert('Email is not correct.')
    }
    
}