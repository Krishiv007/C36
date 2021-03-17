class Form {
    constructor(){

    }

    display(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("Name");
        input.position(130,160);
        
        var button = createButton("play");
        button.position(250,200);
        
        
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            
            var greeting = createElement("h3");
            greeting.html("HELLO"+Name);
            greeting.position(130,160);
        
        })
    }
    
}