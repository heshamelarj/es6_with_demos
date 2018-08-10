function  MemberFactory(){

  this.createMember = function(name,type){
    let memeber;
    switch (type) 
    {
      case "simple" :
      memeber = new SimpleMembership(name);
      case "standard" :
      memeber =  new StandardMembership(name);
      case "supper" :
      memeber =  new SupperMembership(name); 
    }
    memeber.type = type;
    memeber.define = function(){
      console.log(`${this.name} (${this.type}) ${this.cost}`);

      
    }
    return memeber;
  }
}

 const SimpleMembership =  function(inName){
  this.name = inName;
  this.cost = "$5.00";
}
const StandardMembership =  function(inName){
  this.name = inName;
  this.cost = "$10.00";
}
const SupperMembership =  function(inName){
  this.name = inName;
  this.cost = "$15.00";
}

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember("John Doe","supper"),factory.createMember("John Smith","simple"),factory.createMember("Sozan Cool","standard"));

members.forEach(mem => {
  mem.define();
  
})