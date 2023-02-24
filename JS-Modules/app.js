import {firstName as fname} from './utils/firstName.js'
import {age} from './utils/age.js'
import Person from './utils/person.js' // Remember when the export is marked as default in the file we need not write curly brackets to import something.
// If you want to export multiple elements , we do use the following syntax
// import somethingWhichIsDefault,{person1,person2} from './utils/person1.js'


console.log(fname,age);

const newPerson = new Person("Vaishnao","Wankar",21);
newPerson.info();