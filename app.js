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
      Hull: Math.random() * (6 - 3) + 3,
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
    function ship1Attk(ship1 , ship2){
        if(Math.random() < ship1.accuracy){
            ship2.Hull = ship2.Hull - ship1.firePower;
            console.log(ship1.shipName + ' MISS ' + ship2.shipName );
    }   
       else{
           console.log(ship1.shipName + ' MISS ' + ship2.shipName );
        
    }}
    function ship2Attk(ship1 , ship2){
        if(Math.random() < ship2.accuracy){
            ship1.Hull = ship1.Hull - ship2.firePower;
            console.log(ship2.shipName + ' HIT! ' + ship1.shipName);
    }
        else{
            console.log(ship2.shipName + ' MISS ' + ship1.shipName );
        
    }}
    const versus = function vs(ship1 , ship2){
        do{
            ship1Attk(ship1, ship2);
            ship2Attk(ship1, ship2);
        }while(ship1.Hull > 0 && ship2.Hull > 0 );
        }

    for(let i= 0; i < alienShips.length; i++){
        if(terminators[0].Hull <= 0 && alienShips[i].Hull > 0 ){
            console.log('Your ship has been destroyed');
        }else{
            versus(terminators[0] , alienShips[i]);
            if(terminators[0].Hull > 0 && alienShips[i].Hull <= 0 ){
                console.log(alienShips[i].shipName + ' was detroyed! Continue? Y/N')
                let isExecuted = confirm("Take on another ship?");

console.log(isExecuted);
if (isExecuted) {
    // if true
    alert("Action successfully executed");
  } else {
    // if false
    alert("Action canceled");
  }
                //event click , break loop
                            }

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
        }} 
      
        

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

       