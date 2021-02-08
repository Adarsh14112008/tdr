class Form{
    constructor(){
       
         this.inputName=createInput("Name");
        this.playButton=createButton("add food");
        this.playButton2=createButton("feed");
        this.playButton3=createButton("clean");
       
       this.foodIm =loadImage("Milk.png")

    }
    
    display(){
    
    this.inputName.position(130,160);

    
    this.playButton.position(250,210);
    this.playButton2.position(200,210);
    this.playButton3.position(300,210);

    
    
    this.playButton.mousePressed(()=>{
    this.food=createSprite(100,250,20,20)
    this.food.addImage("foodIma",foodIm)
    this.inputName.hide();
        

    })
    }

   



