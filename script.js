
function myAge(){

    let year;
    let i= age.value;
  
    if ( i<=18){

        year= "Du är ung";
         };
        
        if ( i>= 19 && i <66){

        year= "Du är i rätt ålder";
        };

        if ( i >=66){

        year= "Du är gammal";
        
        } ;
    
     document.getElementById("message").innerHTML = year;       
}