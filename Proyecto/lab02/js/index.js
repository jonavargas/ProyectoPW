
    function isVacio(q) {  
        for ( i = 0; i < q.length; i++ ) {  
            if (q.charAt(i) != " ") return false;  
        }  
        return true;  
    } 

    function isNumeric(word) {
        return (isNaN(word)) ? false : true;
    }

    function isPalindrome(pal) {
    var word = pal.toLowerCase();
    for(var i=0; i<word.length; i++) {
    if(word.charAt(i) != word.split("").reverse().join("").charAt(i)) return false;
    }
    return true;    
    }

    function comprobar(word) {
    if(isVacio(word)) {
    alert('Ingresa un Valor!!!');
    return;
    }
        if(isNumeric(word)) { alert('El valor ingresado es un numero!!!'); } 
        else{ 
            if(isPalindrome(word)) { alert('Es Palindromo!!!'); } 
            else { alert('No es Palindromo!!!'); } 
        }
        return false;
    }      