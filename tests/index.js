$(document).ready(function() {
  const database = firebase.database();
  let customer = getCustomerData();
  let id = "-LQpo9Um9yOLoWzTS7Im";
  customer["name"] = "bode";
  //addCustomerToDB(database, customer);
  // updateCustomerFromDB(database, id, customer);
  // deleteCustomerFromDB(database, id);

  //para listar os clientes cadastrados
    // let customers = listCustomersFromDB(database);
    // customers.then(foo => console.log(foo));

  //para pegar a soma por genero
  let sum = sumGenderCustomer(database);
  sum.then(genero => console.log(genero));



});
