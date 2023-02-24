/**
 * 
 * Analyse the requirements for teachers and code functions as per the requirements.
 * 
 * Pls refer "Modules/Class17/StudentTeacherSoftware-3/Requirements.js" for requirements
 * 
 * 
 * OOPS Concept
 */
class Teacher {
    constructor(name, age, gender, subject) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.subject = subject;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name} and I am a ${this.age}-year-old ${this.gender} teacher. I teach ${this.subject}.`);
    }
  
    gradeStudent(student, grade) {
      student.addGrade(grade);
    }
  }


  class Student {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.grades = [];
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name} and I am a ${this.age}-year-old ${this.gender} student.`);
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
  
      const total = this.grades.reduce((acc, grade) => acc + grade, 0);
      return total / this.grades.length;
    }
  }
  
