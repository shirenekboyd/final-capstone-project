const service = require("./reservations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/**
 * List handler for reservation resources
 */
async function list(req, res) {
  const data = await service.list(req.query.date);
  res.json({data});
}

async function create(req, res, next) {
  const newReservation = await service.create(req.body.data);
  res.status(201).json({ data: newReservation });
}

function validateReservation(req, res, next) {
  const { data } = req.body;
  console.log("data", data)
  if (!data) next({ status: 400, message: "Data is missing" });
  const requiredFields = [
    "first_name",
    "last_name",
    "mobile_number",
    "reservation_date",
    "reservation_time",
    "people",
  ];
  requiredFields.forEach((field) => {
    if (!data[field]) {
       next({
        status: 400,
        message: `Reservation must include a ${field}`,
      });
    }
  });
  if (!Number.isInteger(data.people)) {
    next({
      status: 400,
      message: "people must be a number",
    });
  }
  const dateFormat = /\d\d\d\d-\d\d-\d\d/;
  const timeFormat = /\d\d:\d\d/;

  if(!data.reservation_date.match(dateFormat)){
    next({
      status: 400,
      message: "reservation_date must be a date"
    })
  }
// let dateCheck = new Date();
//   if(req.body.reservation_date === new Date())

  if(!data.reservation_time.match(timeFormat)){
    next({
      status: 400,
      message: "reservation_time must be a time"
    })
  }
  next();
}
module.exports = {
  list: list,
  create: [validateReservation, asyncErrorBoundary(create)],
  // read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  // theaterList: [
  //   asyncErrorBoundary(movieExists),
  //   asyncErrorBoundary(theatersMovieIsPlaying),
  // ],
  // reviewList: [
  //   asyncErrorBoundary(movieExists),
  //   asyncErrorBoundary(listMatchingReviews),
  // ],
};
