class Form {
constructor(){

this.input=createInput("name");
this.button=createButton("play");
this.greeting=createElement('h2');
this.title=createElement('h2');
}
display(){
    this.title.html("my classroom");
    this.title.position(width/2,10);
    this.input.position(width/2-40,height/2-80);
    this.button.position(width/2+30,height/2);
}
}