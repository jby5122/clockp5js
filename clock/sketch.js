function setup() {
  createCanvas(1000, 1000);
  
}

function draw() {
  background(3, 38, 51);
     var nowhour = int(hour())
     var nowmin = int(minute())
    //var nowhour = 0
    //var nowmin = 00
    textAlign(CENTER);
    
    var dark = [0, 0, 0];
    var light = [255, 255, 255];
    
    
    var first = [
        ["I T ", light],
        ["L ", dark],
        ["I S ", light],
        ["A S D A W N", dark],
    ];
    drawtext(150, 100, first );

    var second = [
      ["A C ", dark],
      ["Q U A R T E R ", (nowmin >=15 && nowmin < 30 || nowmin >= 45) ? light:dark ],
      ["D C", dark]
    ];
    drawtext (150, 200, second)

    var third = [
      ["H A L F ", (nowmin >= 30 && nowmin < 45) ? light:dark],
      ["S T E N F ", dark],
      ["T O", nowmin >= 45 ? light:dark]
    ];
    drawtext (150, 300, third)

    var forth = [
      ["P A S T ", (nowmin >= 0 && nowmin < 45 ) ? light:dark],
      ["E R V ", dark],
      ["N I N E", (nowhour == 9 && nowmin < 45) || (nowhour == 8 && nowmin >= 45) ? light:dark]
    ];
    drawtext (150, 400, forth)

    var fifth = [
      ["O N E ", (nowhour == 1 && nowmin < 45) || (nowhour == 12 && nowmin >= 45) ? light:dark],
      ["S I X ",(nowhour == 6 && nowmin < 45) || (nowhour == 5 && nowmin >= 45) ? light:dark],
      ["T H R E E ", (nowhour == 3 && nowmin < 45) || (nowhour == 2 && nowmin >= 45) ? light:dark]
    ];
    drawtext (150, 500, fifth)

    var sixth = [
      ["F O U R ", (nowhour == 4 && nowmin < 45) || (nowhour == 3 && nowmin >= 45) ? light:dark],
      ["F I V E ", (nowhour == 5 && nowmin < 45) || (nowhour == 4 && nowmin >= 45) ? light:dark],
      ["T W O", (nowhour == 2 && nowmin < 45) || (nowhour == 1 && nowmin >= 45) ? light:dark]
    ];
    drawtext (150, 600, sixth);

    var seventh = [
      ["E I G H T ", (nowhour == 8 && nowmin < 45) || (nowhour == 7 && nowmin >= 45) ? light:dark],
      ["E L E V E N", (nowhour == 11 && nowmin < 45) || (nowhour == 10 && nowmin >= 45) ? light:dark],
    ];
    drawtext (150, 700, seventh);

    var eighth = [
      ["S E V E N ", (nowhour == 7 && nowmin < 45) || (nowhour == 6 && nowmin >= 45) ? light:dark],
      ["T W E L V E", (nowhour == 12 && nowmin < 45) || (nowhour == 11 && nowmin >= 45) ? light:dark],
    ];
    drawtext (150, 800, eighth);

    var ninth = [
      ["T E N ", (nowhour == 10 && nowmin < 45) || (nowhour == 9 && nowmin >= 45) ? light:dark],
      ["S E ", dark],
      ["A M ", light],
      ["O S ", dark],
      ["P M ", dark],

    ];
    drawtext (150, 900, ninth)
    
    //drawtext (50, 1000,[ [nowhour.toString(),light],[nowmin.toString(),light]])
}


function drawtext( x, y, text_array ) {
  
    var pos_x = x;
    for ( var i = 0; i < text_array.length; ++ i ) {
        var part = text_array[i];
        
        var t = part[0];
        var c = part[1];
        for ( var j=0; j < t.length; ++ j){
          let gap = 35;
          var letter = t[j]
         
          fill( c );
          text( letter, pos_x, y);
          textSize (45)
        
        pos_x += gap;
      }
    }
}


 
