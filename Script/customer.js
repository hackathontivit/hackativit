function getCustomerData() {
  console.log('getCustomerData');

  let customerData = {
    name: 'fulano',
    email: 'email',
    gender: 'F',
    bithdate: '01/01/2001',
    scholarity: 'pos',
    address: {
      street: 'rua doliro',
      number: '25',
      complement: 'bloco 1',
      zipCode: '01000-000',
      city: 'São Paulo',
      state: 'SP'
    },
    contact: {
      telephone: '1122223333',
      cellphone: '11988889999'
    },
    socialClass: 'A++',
    interests: {
      art: true,
      auto: false,
      property: false,
      health: true,
      tech: true,
      food: true,
      outfit: false,
      pet: true
    }
  }
  return customerData;
}

function addCustomerToDB(db, customer) {
  console.log('addCustomertoDB');

  db.ref('CustomerDB').push(customer);
}

function updateCustomerFromDB(database, id, customer) {
  console.log('updateCustomerFromDB');
  return database.ref('CustomerDB/' + id).set(customer);
}

function deleteCustomerFromDB(database, id) {
  console.log('deleteCustomerFromDB');
  return database.ref('CustomerDB/' + id).remove();
}

 async function listCustomersFromDB(database){
  console.log('showCustomerFromDB');
  let list = [];
  await database.ref('CustomerDB').once('value')
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        list.push(childSnapshot.val());
      });
    });
  return list;
}

async function sumGenderCustomer(database) {
  let customers = listCustomersFromDB(database);
  let soma = {
    Masculino: 0,
    Feminino: 0,
    Outros: 0
  };
  await customers.then(function(list) {

    list.forEach(function(cliente) {
      if (cliente.gender === 'M') {
        soma.Masculino++;
      } else if (cliente.gender === 'F') {
        soma.Feminino++;
      } else {
        soma.Outros++;
      }
    });
  });
  return soma;
}
