const express = require('express')
const { postUserData, getUserData, getUserDataById, putUserData, deleteUserData, getUserDataByAccountNumber, getUserDataByIdentityNumber, postValidateToken } = require('../api/userData')
const router = express.Router()
const { verifyToken } = require('../helper/autenticateToken')

const path = "/api"
router
    // GET
    .get(`${path}/user-data`, verifyToken, getUserData)
    .get(`${path}/user-data/:id`, verifyToken, getUserDataById)
    .get(`${path}/account-number/:id`, verifyToken, getUserDataByAccountNumber)
    .get(`${path}/identity-number/:id`, verifyToken, getUserDataByIdentityNumber)
    // POST
    .post(`${path}/user-data`, postUserData)
    .post(`${path}/validate`, postValidateToken)
    // PUT
    .put(`${path}/user-data/:id`,verifyToken, putUserData)
    // DELETE
    .delete(`${path}/user-data/:id`, verifyToken, deleteUserData)

module.exports = router