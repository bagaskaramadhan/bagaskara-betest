const express = require('express')
const { postUserData, getUserData, getUserDataById, putUserData, deleteUserData, getUserDataByAccountNumber, getUserDataByIdentityNumber } = require('../api/userData')
const router = express.Router()

const path = "/api"
router
    // GET
    .get(`${path}/user-data`, getUserData)
    .get(`${path}/user-data/:id`, getUserDataById)
    .get(`${path}/account-number/:id`, getUserDataByAccountNumber)
    .get(`${path}/identity-number/:id`, getUserDataByIdentityNumber)
    // POST
    .post(`${path}/user-data`, postUserData)
    // PUT
    .put(`${path}/user-data/:id`, putUserData)
    // DELETE
    .delete(`${path}/user-data/:id`, deleteUserData)

module.exports = router