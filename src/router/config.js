const {
    getCustomers,
    postCustomer,
    deleteCustomer,
    updateCustomer,
  } = require("../controllers/customers.controller");
const { getOrders, postOrder, deleteOrder, updateOrder } = require("../controllers/orders.controller");
const { getProducts, postProducts, deleteProducts, updateProducts } = require("../controllers/products.controller");
const { getStaffs, postStaff, deleteStaff, updateStaff } = require("../controllers/staff.controller");
  
  const routeConfig = {
    customers: {
      get: getCustomers,
      post: postCustomer,
      delete :deleteCustomer,
      put : updateCustomer
    },
    orders : {
      get : getOrders,
      post : postOrder,
      delete : deleteOrder,
      put : updateOrder
    },
    staffs : {
      get : getStaffs,
      post : postStaff,
      delete : deleteStaff,
      put : updateStaff
    },
    products : {
      get : getProducts,
      post : postProducts,
      delete : deleteProducts,
      put : updateProducts
    }
  };
  
  module.exports = { routeConfig };