/* ES6 CLASSES */
class Person{
  //constructor

  constructor(inFirstName,inLastName,inDayOfBirth){

    this.firstName = inFirstName;
    this.lastName = inLastName;
    this.dayOfBirth = new Date(inDayOfBirth);



  }
  //methods
  greeting(){
    return `hello my name is ${this.firstName} ${this.lastName} .`;
  }
  calculateAge(){
    const diff = Date.now() - this.dayOfBirth.getTime();

    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  //static method
  static personCount(){
    return 'I count person objects';
  }
}


const hicham = new Person('Hicham','EL-AGREOUNI','9-10-1992');
console.log(hicham);
console.log(hicham.calculateAge());
console.log(Person.personCount());

/* INHERETENCE A.K.A SUBCLASSES */
class Customer extends Person{
  constructor(inFirstName, inLastName, inPhone, inMembrship, inDayOfBirth){
    super(inFirstName, inLastName,inDayOfBirth);
    this.phone = inPhone;
    this.membership = inMembrship;
  }
  //methods

  getMembershipCost(){
    switch (this.membership) {
      case 'standard':
        return 500;
        break;
      case 'standardPlus':
        return 800;
        break;
      case 'ultimate':
        return 1000;
        break;
      default:
      return 'check your membership type';
    }
  }

}

const  john = new Customer('John' , 'Doe' ,'00212-626-123-3213','standardPlus','12-12-1980');
console.log(john);
console.log(john.calculateAge());
console.log(john.getMembershipCost());
