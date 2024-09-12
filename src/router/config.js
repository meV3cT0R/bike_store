const {
    getCustomers,
    postCustomer,
    deleteCustomer,
    updateCustomer,
  } = require("../controllers/customers.controller");
  
  const routeConfig = {
    customers: {
      get: getCustomers,
      post: postCustomer,
      delete :deleteCustomer,
      put : updateCustomer
    },
  };
  
  module.exports = { routeConfig };