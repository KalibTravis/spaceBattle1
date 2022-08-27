let terminators = [
{
  shipName: 'Terminator',
  Hull: 20,
  firePower: 5,
  accuracy: .7
  // get shipName() {
    //     return this.shipName;
    // },
    // /*
    //  * @param {any} value
    //  */
    // set shipName(value) {
    //     this.shipName = value;
    // },
// this.shipName: 'Terminator';
// this.hull = Math.floor(Math.random() * 4) + 3;
// this.firepower = Math.floor(Math.random() * 3) + 2; 
// this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10,


},

{
    shipName: 'Terminator2',
    Hull: 20,
    firePower: 5,
    accuracy: .7
  
}
];

let alienShips = [
    {
      shipName: 'Alien1',
      Hull: Math.floor(Math.random() * 4) + 3, //Math.random() * (6 - 3) + 3,
      firePower: Math.random() * (4 - 2) + 2,
      accuracy: Math.random() * (.8 - .6) + .6
    
    
    },
    
    {
      shipName: 'Alien2',
      Hull: Math.random() * (6 - 3) + 3,
      firePower: Math.random() * (4 - 2) + 2,
      accuracy: Math.random() * (.8 - .6) + .6
    
    },
    {
        shipName: 'Alien3',
        Hull: Math.random() * (6 - 3) + 3,
        firePower: Math.random() * (4 - 2) + 2,
        accuracy: Math.random() * (.8 - .6) + .6
      
      
      },
      {
        shipName: 'Alien4',
        Hull: Math.random() * (6 - 3) + 3,
        firePower: Math.random() * (4 - 2) + 2,
        accuracy: Math.random() * (.8 - .6) + .6
      
      
      },
      {
        shipName: 'Alien5',
        Hull: Math.random() * (6 - 3) + 3,
        firePower: Math.random() * (4 - 2) + 2,
        accuracy: Math.random() * (.8 - .6) + .6
      
      
      },
      {
        shipName: 'Alien6',
        Hull: Math.random() * (6 - 3) + 3,
        firePower: Math.random() * (4 - 2) + 2,
        accuracy: Math.random() * (.8 - .6) + .6
      
      
      }

    ];

/*
  ABOVE: Ships to be used in space battle
  BELOW: Working through functions to have ships perform spacebattle fights
*/
    // function ship1Attk(ship1 , ship2){
    //     if(Math.random() < ship1.accuracy){
    //         ship2.Hull = ship2.Hull - ship1.firePower;
    //         console.log(ship1.shipName + ' HIT! ' + ship2.shipName );
    // }   
    //    else{
    //        console.log(ship1.shipName + ' MISS ' + ship2.shipName );
        
    // }}
    // function ship2Attk(ship1 , ship2){
    //     if(Math.random() < ship2.accuracy){
    //         ship1.Hull = ship1.Hull - ship2.firePower;
    //         console.log(ship2.shipName + ' HIT! ' + ship1.shipName);
    // }
    //     else{
    //         console.log(ship2.shipName + ' MISS ' + ship1.shipName );
        
    // }}
    // const versus = function vs(ship1 , ship2){
    //     do{
    //         ship1Attk(ship1, ship2);
    //         if(ship2.Hull > 0){
    //         ship2Attk(ship1, ship2);
    //         }
    //     }while(ship1.Hull > 0 && ship2.Hull > 0 );
    //     }
        const versus = function vs(ship1 , ship2){//function for ships to spaceBattle
            do{
                if(Math.random() < ship1.accuracy){
                    ship2.Hull = ship2.Hull - ship1.firePower;
                    console.log(ship1.shipName + ' HIT! ' + ship2.shipName );
            }   
               else{
                   console.log(ship1.shipName + ' MISS ' + ship2.shipName );
                
            }
            if(ship2.Hull > 0){
                if(Math.random() < ship2.accuracy){
                    ship1.Hull = ship1.Hull - ship2.firePower;
                    console.log(ship2.shipName + ' HIT! ' + ship1.shipName);
            }
                else{
                    console.log(ship2.shipName + ' MISS ' + ship1.shipName );
                
            }}
            }while(ship1.Hull > 0 && ship2.Hull > 0 );//Have the two ships as parameters to deduct Hull points until one has none
            }


    //Here I loop through arrays of ships so each can have a space battle    
    //; can add selector for user to choose opponent as second arg in versus function instead of looping through alienShips   
    for(let i= 0; i < alienShips.length; i++){
        if(terminators[0].Hull <= 0 && alienShips[i].Hull > 0 ){//Each iteration ensures user ship has positive Hull points before continuing
            console.log('Your ship has been destroyed');
        }else{
            versus(terminators[0] , alienShips[i]);//call functions with arguments as the ships one being user other being alien
            if(terminators[0].Hull <= 0 && alienShips[i].Hull > 0 ){
                console.log('Your ship has been destroyed');
            }
            if(terminators[0].Hull > 0 && alienShips[i].Hull <= 0 ){
                if(i == 5) {//used to conclude spaceBattle when last alienShip destroyed
                    console.log(alienShips[i].shipName + ' was detroyed! Space battle complete!!')
                    break;
                }
                
                console.log(alienShips[i].shipName + ' was detroyed! Continue? Y/N')//shows destroyed alien and continue message

                // if(terminators[0].Hull <= 0 && alienShips[i].Hull > 0 ){
                //     console.log('Your ship has been destroyed');
                //}
                if(i !== alienShips.length - 1) {//prompt for all alienShips 
                     let isExecute = confirm("Take on another ship? You have "
                      + terminators[0].Hull + " Hull points left!");
                
                

                console.log(isExecute);//Prompt 
                if (isExecute) {
                    // if true
                    alert("Prepare for battle!");
                  } else {
                    // if false
                    
                    alert("Retreating");
                    break;
                  }}

                            }
    
        } }













/* EXCESS TRIAL CODE BELOW */
        //                 let isExecute = confirm("Take on another ship? You have " + terminators[0].Hull + " Hull points left!");
                
                

// console.log(isExecute);
// if (isExecute) {
//     // if true
//     alert("Prepare for battle!");
//   } else {
//     // if false
    
//     alert("Retreating");
//     break;
//   }
                //event click , break loop
            // if(terminators[0].Hull > 0 && alienShips[i].Hull > 0 ){
        //     if(Math.random() < terminators[0].accuracy){ 
        //         alienShips[i].Hull - terminators[0].firePower;
        //         console.log(alienShips[i].shipName)
        //     console.log('HIT!') }
        //     else{
        //         console.log('MISS')
        //         console.log(alienShips[i].shipName)
        //     }
        //     if(Math.random() < alienShips[i].accuracy){ 
        //        terminators[0].Hull = terminators[0].Hull - alienShips[i].firePower;
        //     console.log('HIT!')
        //     console.log(alienShips[i].shipName)
        //     console.log(terminators[0].Hull) }
            
        //     else{
        //         console.log('MISS')
        //         console.log(alienShips[i].shipName)
        //     }
        
        // }}
    //     let isExecuted = confirm("Take on another ship? You have " + terminators[0].Hull + " Hull points left!");
    //     if (isExecuted == false) {
    //         // if false
    //         alert("Retreating");
    //       } else {
    //         // if true
            
            
    //        if(terminators[0].Hull > 0){ 
    //         versus(terminators[0] , alienShips[5]);
    //     if(terminators[0].Hull > 0 && alienShips[5].Hull <= 0 ){
    //         console.log(alienShips[5].shipName + ' was detroyed!');
    // }else{
    //     if(terminators[0].Hull <= 0 && alienShips[5].Hull > 0 ){
    //     console.log('Your ship has been destroyed');}
    // }
    //       }
        
    //     }
// const versus = function vs(ship1 , ship2){
// do{
//     function ship1Attk(){
//         if(Math.random() < ship1.accuracy){
//             ship2.Hull = ship2.Hull - ship1.firePower;
//             console.log(ship1.shipName + ' MISS ' + ship2.shipName )
//     }   
//         else{
//             console.log(ship1.shipName + ' MISS ' + ship2.shipName )
        
//     }}
//     function ship2Attk(){
//         if(Math.random() < ship2.accuracy){
//             ship1.Hull = ship1.Hull - ship2.firePower;
//             console.log(ship2.shipName + ' HIT! ' + ship1.shipName)
//     }
//         else{
//             console.log(ship2.shipName + ' MISS ' + ship1.shipName )
        
//     }}
// }while(ship1.Hull > 0 && ship2.Hull > 0 )
// }

       