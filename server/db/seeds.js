use co2_calculator;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Vacation",
        value: 8
    },
    {
        name: "Transport",
        value: 15
    },
    {
        name: "Diet",
        value: 3
    },
    {
        name: "Consumption",
        value: 5
    },
    {
        name: "Energy",
        value: 20
    }
    
]);