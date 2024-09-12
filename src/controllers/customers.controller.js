const client  = require("mssql");
const { getHelper } = require("../utils/requestHelpers/getHelper.js");
const { postHelper } = require("../utils/requestHelpers/postHelper");
const { deleteHelper } = require("../utils/requestHelpers/deleteHelper.js");
const { updateHelper } = require("../utils/requestHelpers/updateHelper.js");

const TABLE_NAME="sales.customers";


function getCustomers(req, res, params) {
  console.log("Inside getCustomers()");
  getHelper(req, res, params, {
    startStr: `select * from ${TABLE_NAME}`,
    endStr: "",
  }, "customer_id",["email"]);
}

function postCustomer(req, res, params) {
  console.log("Inside postCustomer()");
  postHelper(
    req,
    res,
    params,
    ["first_name", "last_name", "phone", "street", "email","city","state","zip_code"],
    TABLE_NAME,
  );
}

function updateCustomer(req,res,params) {
  console.log("Inside updateCustomer()");  
  updateHelper(req,res,params,TABLE_NAME,["customer_id"],["customer_id"])
}

function deleteCustomer(req,res,params) {
  console.log("Inside deleteCustomer()");
  deleteHelper(req,res,params,TABLE_NAME,{
    conditions:["customer_id"]
  });
}
module.exports = { getCustomers, postCustomer, updateCustomer, deleteCustomer};