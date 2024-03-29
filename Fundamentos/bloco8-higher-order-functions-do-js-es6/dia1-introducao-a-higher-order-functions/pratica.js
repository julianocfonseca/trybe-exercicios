const employeeGenerator = (name, surname) => {
    const email = `${(name.toLowerCase())}_${(surname.toLowerCase())}`
    return { name, email: `${email}@trybe.com` };
};
console.log(employeeGenerator('Juliano', 'Fonseca'))

const newEmployees = () => {
    const employees = {
      id1: employeeGenerator('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employeeGenerator('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employeeGenerator('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees());