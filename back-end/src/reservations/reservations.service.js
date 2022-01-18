const knex = require("../db/connection");
//const mapProperties = require("../utils/map-properties");

function create(reservation) {
    return knex("reservations")
      .insert(reservation)
      .returning("*")
      .then((createdRecords) => createdRecords[0]);//this line might not be needed 
  }


  function list(reservation_date){
      return knex("reservations")
      .select("*")
      .where({ reservation_date })
      .orderBy("reservation_time");
  }

  module.exports = {
    create,
    list,
    //not sure if items below are needed
    // update, 
    // delete: destroy,
    // newlyUpdatedReview,
  };