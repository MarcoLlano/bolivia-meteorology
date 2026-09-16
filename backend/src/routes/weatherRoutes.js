const express =
  require("express");


const {

  getAllWeather,

  getDepartmentWeather

} =
  require(
    "../controllers/weatherController"
  );


const router =
  express.Router();

router.get(
  "/",
  getAllWeather
);


router.get(
  "/:departmentId",
  getDepartmentWeather
);


module.exports =
  router;