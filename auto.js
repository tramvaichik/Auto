 function auto() {
     let cost;
     if (document.getElementById('B').checked) {
         cost = 10000;
     } else if (document.getElementById('C').checked) {
         cost = 20000;
     } else if (document.getElementById('D').checked) {
         cost = 30000;
     }

     document.getElementById('out').innerHTML = getCost(cost);

     function getCost(cost) {

         return Math.floor(cost * yearOfIssue() * brand() * type() * fuel()) + complictation();
     }

     function complictation() {
         let result = 0;

         if (document.getElementById('conditioning').checked) {
             result += 100;
         }

         if (document.getElementById('Heated_seat').checked) {
             result += 50;
         }
         if (document.getElementById('Parktronic').checked) {
             result += 70;
         }
         if (document.getElementById('Starting_heater').checked) {
             result += 300;
         }
         if (document.getElementById('Towbar').checked) {
             result += 20;
         }
         return result;
     }

     function yearOfIssue() {
         if (document.getElementById('zero_ten').checked) {
             return 0.5;
         } else if (document.getElementById('eleven_fifteen').checked) {
             return 0.7;
         } else if (document.getElementById('sixteen_thirty').checked) {
             return 1;
         }

     }

     function brand() {
         switch (document.getElementById("brand").value) {
             case "Audi":
                 return 1.1;
                 break;
             case "Chevrolet":
                 return 1.2;
                 break;
             case "Jaguar":
                 return 1.3;
                 break;
             case "Haval":
                 return 0.8;
                 break;
         }
     }

     function type() {
         switch (document.getElementById("type").value) {
             case "Sedan":
                 return 1;
                 break;
             case "Hatchback":
                 return 1.2;
                 break;
             case "Universal":
                 return 1.3;
                 break;
         }
     }

     function fuel() {
         if (document.getElementById('Petrol').checked) {
             return 0.8;
         } else if (document.getElementById('Electricity').checked) {
             return 1.3;
         } else if (document.getElementById('Hybrid').checked) {
             return 1.1;
         }
     }
 }