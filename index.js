// Write your solution in this file!
var customerName = "bob"
const leastFavoriteCustomer = "larry"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return null
}

function setBestCustomer() {
    bestCustomer = "not bob"
    return null
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
    return null
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = bestCustomer
}