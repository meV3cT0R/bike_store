const client  = require("mssql");
const { getHelper } = require("../utils/requestHelpers/getHelper.js");
const { postHelper } = require("../utils/requestHelpers/postHelper");
const { deleteHelper } = require("../utils/requestHelpers/deleteHelper.js");
const { updateHelper } = require("../utils/requestHelpers/updateHelper.js");

const TABLE_NAME="production.products";


function getProducts(req, res, params) {
  console.log("Inside getProducts()");
  getHelper(req, res, params, {
    startStr: `select * from ${TABLE_NAME}`,
    endStr: "",
  },"product_id",[]);
}

function postProducts(req, res, params) {
  console.log("Inside postOrder()");
  postHelper(
    req,
    res,
    params,
    [ "product_name", "brand_id", "category_id", "model_year","list_price"],
    TABLE_NAME,
  );
}

function updateProducts(req,res,params) {
  console.log("Inside updateProducts()");  
  updateHelper(req,res,params,TABLE_NAME,["product_id"],["product_id"]);
}

function deleteProducts(req,res,params) {
  console.log("Inside deleteProducts()");
  deleteHelper(req,res,params,TABLE_NAME, {
    conditions : ["produc_id"]
  });
}
module.exports = { getProducts, postProducts, updateProducts, deleteProducts};