const bankAccount = {
  ownerName: "Tymofii",
  accountNumber: "743215643",
  balance: 100,

  adDepost() {
    const replenishmentAccount = prompt(
      "Щоб поповнити рахунок, ведіть суму для поповнення"
    );
    bankAccount.balance = bankAccount.balance + Number(replenishmentAccount);
    return alert(`Ваш баланс ${bankAccount.balance} грн`);
  },
  withdraw() {
    const withdrawBalance = prompt("Щоб зняти гроші, ведіть суму");
    bankAccount.balance = bankAccount.balance - Number(withdrawBalance);
    return alert(`Ваш баланс ${bankAccount.balance} грн`);
  },
};

// console.log(bankAccount.adDepost());

// console.log(bankAccount.withdraw());

const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,

  measurementTemperature() {
    const input = prompt("Ведіть температуру");
    weather.temperature = input;
    if (weather.temperature > 0) {
      return true;
    } else {
      return false;
    }
  },
};

// console.log(weather.measurementTemperature());

const user = {
  name: "",
  email: "",
  password: "",
  login() {
    const userName = prompt("Щоб зареєструватися ведіть своє ім'я");
    user.name = userName;
    const emailChek = prompt("Ведіть свою почту");
    user.email = emailChek;
    const passwordChek = prompt("Ведіть пароль від почти");
    user.password = passwordChek;
    console.log(user.email);
    console.log(user.password);
    return user.name;
  },
};

// console.log(user.login());

const movie = {
  title: "",
  director: 0,
  year: 0,
  rating: 8,

  movieRating(star) {
    if (star >= 8) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(movie.movieRating(movie.rating));
