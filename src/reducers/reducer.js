var redux = require("redux")
var mang =  require("./mang")
var isAdding = require("./isAdding")
//Khai bao mot bien redecer ket noi 2 cai reducer lai
var reducer = redux.combineReducers({mang, isAdding})

module.exports = reducer
