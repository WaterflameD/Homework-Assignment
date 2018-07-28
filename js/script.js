function myFirstApp(name, age) {

alert("Привет, я - " + name + " и это - моя первая программа!");

  function showSkills() {
    let skills = ["Ничего", "абсолютно", "ничего"];
    console.log("Мои навыки:")
    for (let i = 0; i < skills.length; i++) {
      console.log(skills[i]);
    };
  };

  showSkills();

  function checkAge() {
    if (age > 18) {
      console.log ("Ну, много возможности...как и обязанностей");
    } else {
      console.log ("Гора времени. Используй мудро!");
    }
  }
 
  checkAge();

  function calcPow() {
  num2=num*num;
  console.log ("Квадрат " + num + " = " + num*num);
  };

  num = prompt("Квадрат какого числа найти?")
  calcPow(num);
};
myFirstApp("Andrew", 16);