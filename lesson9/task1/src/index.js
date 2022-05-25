import printProfile from './renderProfile';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

console.log(profile); // eslint-disable-line no-console
// відключити 1у лінію

// eslint-disable-line no-console
// також можна вказати яке правило пропустити

// eslint-disable - пропустить весь код який знаходиться нижче
// eslint-enable - буде пропускати все до такого коментаря, якщо не вказаний то до кінця коду буде ігнорувати
