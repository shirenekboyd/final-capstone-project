const knex = require("../db/connection");
//const mapProperties = require("../utils/map-properties");
const tableName = "reservations"

function list(reservation_date){
  return knex(tableName)
    .where("reservation_date", reservation_date)
    .orderBy("reservation_time");
}

function create(reservation) {
  return knex(tableName)
    .insert(reservation, "*")
    .then((createdRecords) => createdRecords[0]);//this line might not be needed 
}

// function create(reservation) {
//   return knex("reservations")
//     .insert(reservation)
//     .returning("*")
//     .then((createdRecords) => createdRecords[0]);//this line might not be needed 
// }

// function list(reservation_date){
//   return knex("reservations")
//     .select("*")
//     .where({ reservation_date })
//     .orderBy("reservation_time");
// }

  module.exports = {
    create,
    list,
    //not sure if items below are needed
    // update, 
    // delete: destroy,
    // newlyUpdatedReview,
  };