const client  = require("mssql");
const { getHelper } = require("../utils/requestHelpers/getHelper.js");
const { postHelper } = require("../utils/requestHelpers/postHelper");
const { deleteHelper } = require("../utils/requestHelpers/deleteHelper.js");
const { updateHelper } = require("../utils/requestHelpers/updateHelper.js");

const TABLE_NAME="sales.orders";


function getOrders(req, res, params) {
  console.log("Inside getOrders()");
  getHelper(req, res, params, {
    startStr: `select * from ${TABLE_NAME}`,
    endStr: "",
  },"order_id",[],{
    "customer_id" : {
    table_name : "sales.customers",
    name : "customer",

  },
  "store_id" : {
    table_name : "sales.stores",
    name : "stores"
  }
});
}

function postOrder(req, res, params) {
  console.log("Inside postOrder()");
  postHelper(
    req,
    res,
    params,
    [ "customer_id", "order_status", "order_date", "required_date","shipped_date","store_id","staff_id"],
    TABLE_NAME,
  );
}

function updateOrder(req,res,params) {
  console.log("Inside updateCustomer()");  
  updateHelper(req,res,params,TABLE_NAME,["order_id"],["order_id"]);
}

function deleteOrder(req,res,params) {
  console.log("Inside deleteCustomer()");
  deleteHelper(req,res,params,TABLE_NAME, {
    conditions : ["order_id"]
  });
}
module.exports = { getOrders, postOrder, updateOrder, deleteOrder};