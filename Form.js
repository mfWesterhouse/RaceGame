class Form {

  constructor(){

    this.input = createInput("").attribute("Placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImage = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition(){
    this.titleImage.position(120,50);
    this.input.position(width/2 - 110, height/2 - 80);
    this.playButton.position(width/2 - 90, height/2 - 20);
    this.greeting.position(width/2 - 300, height/2 - 100);
  }

  setElementsStyle(){
    this.titleImage.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide(){
    this.input.hide();
    this.playButton.hide();
    this.greeting.hide();
  }

  handleMousePressed(){
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br> wait for another player to join ... `;
      this.greeting.html(message);
    });
  }

  display(){
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}