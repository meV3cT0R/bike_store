const client  = require("mssql");
const { getHelper } = require("../utils/requestHelpers/getHelper.js");
const { postHelper } = require("../utils/requestHelpers/postHelper");
const { deleteHelper } = require("../utils/requestHelpers/deleteHelper.js");
const { updateHelper } = require("../utils/requestHelpers/updateHelper.js");

const TABLE_NAME="sales.staffs";


function getStaffs(req, res, params) {
  console.log("Inside getStaff()");
  getHelper(req, res, params, {
    startStr: `select * from ${TABLE_NAME}`,
    endStr: "",
  },"staff_id",[]);
}
  
function postStaff(req, res, params) {
  console.log("Inside postStaff()");
  postHelper(
    req,
    res,
    params,
    ["first_name", "last_name", "phone", "active", "email","store_id","manager_id"],
    TABLE_NAME,
  );
}

function updateStaff(req,res,params) {
  console.log("Inside updateStaff()");  
  updateHelper(req,res,params,TABLE_NAME,["staff_id"],["staff_id"])
}

function deleteStaff(req,res,params) {
  console.log("Inside deleteStaff()");
  deleteHelper(req,res,params,TABLE_NAME,{
    conditions : ["staff_id"]
  });
}
module.exports = { getStaffs, postStaff, updateStaff, deleteStaff};