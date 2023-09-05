require ("/.db")
const City = require ("../models/City")

const cities = [
    {
        tittle: "city2",
        info:"info",
        img:"img",
        paramId: id ,                              
        queryData: data
    },
    {
        tittle: "city1",
        info:"info",
        img:"img",
        paramId: id ,                              
        queryData: data
    }
]

City.insertMany(cities)