const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
  };
  
  const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
  };
  
  const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
  };

  const fines = {
    finesForLate: 0,
    finesForOutstandingWork: 0,
  }

  const Costfines = {
    costFinesForLate: 50,
    costFinesForOutstandingWork: 100,
  }

  
  function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;
    this.fines = [fines.finesForLate, fines.finesForOutstandingWork];
  
    this.addTask = () => {
      this.tasks++;
    };
  
    /**
     * This method...
     */
    this.uprage = () => {
        if (this.tasks > 0 && this.tasks < 3) {
            this.grade = grades.Junior;
            console.log("До мидла вам ещё надо выполнить: " + (3 - this.tasks) + " заданий");
        }
        if (this.tasks >= 3 && this.tasks < 6){
            this.grade = grades.Middle;
            console.log("До сеньйора вам ещё надо выполнить: " + (6 - this.tasks) + " заданий");
        }
        if (this.tasks >= 6) {
            this.grade = grades.Senior;
            console.log("Вы достигли максимального уровня");
        }
    };

    this.addFineForLate = () => {
      this.fines[0]++;
    };
    this.addFineForOutstandingWork = () => {
      this.fines[1]++;
    };

    this.fine = () => {
      for (let i = 0; i < this.fines[0]; i++){
        this.salary-=Costfines.costFinesForLate;
      }
      for (let i = 0; i < this.fines[1]; i++){
        this.salary-=Costfines.costFinesForOutstandingWork;
      }
    }

    this.finishTask = () => {
      if (this.tasks > 0) {
        this.tasks--;
        this.salary +=
          (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      }
    };
  }
  
  const user = new User('John', 'C++', grades.Junior);
  const user1 = new User('Vasya', 'Rust', grades.Senior);
  const user2 = new User('Nifertiti', 'Bu', grades.Middle);
  
  user2.addTask();
  user2.addTask();
  user2.addTask();
  user2.addTask();
  user2.addTask();
  user2.addTask();

  user2.finishTask();
  user2.finishTask();
  user2.finishTask();

  user2.uprage();

  user2.addFineForLate();
  user2.addFineForLate();
  user2.addFineForOutstandingWork();

  user2.fine();

  console.log(user2);
