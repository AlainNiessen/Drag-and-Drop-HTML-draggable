//drag and drop
$(function () { 
    //DEFINITION ELEMENTS
    let rectangle = $('#rect');
    let cercle = $('#cercle');
    let message = $('#message');  
    let instruction = $('#instruction');

    //DEFINITION POSITION CERCLE
    let coordCercle = cercle.offset();
    //définition position click à l'intérieur du rectangle
    let startX, startY;
    
    //EVENTS DRAG/DROP SUR DOCUMENT
    $(document).on({
        'dragstart': (e) => {            
            //définition position click à l'intérieur du rectangle            
            startX = e.clientX - coordCercle.left;
            startY = e.clientY - coordCercle.top;  
            
        },
        'dragover': (e) => {
            //prevent default to allow drop
            e.preventDefault();
            //calcul coordonées de cercle
            coordCercle.left = e.clientX - startX;                
            coordCercle.top = e.clientY - startY;
        },
        'dragend': () => {
            instruction.hide('fast');
            //définition nouvelle position cercle
            cercle.offset(coordCercle);
        },        
        'drop': (e) => {
            e.preventDefault();
             
            if(e.target.id === 'rect') {
                rectangle.append(cercle);
                message.text('Well done!').addClass('success').removeClass('error');
                message.delay(200).slideDown(500).delay(2000).slideUp(500);
            } else {
                message.text('Nope! Try again!').addClass('error').removeClass('success'); 
                message.delay(200).slideDown(500).delay(2000).slideUp(500);
            }                             
        }
    })
})