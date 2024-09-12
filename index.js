// const returnFirstTwoDrivers = function(firstTwoDrivers){
//     return firstTwoDrivers.slice(0,2);
// }

// const returnLastTwoDrivers = function(lastTwoDrivers){
//     return lastTwoDrivers.slice(-2);
// }

// const selectingDrivers = [
//     returnFirstTwoDrivers,
//     returnLastTwoDrivers
// ]

// function createFareMultiplier(ride){
//     return function(fare){
//         return fare * ride
//     };
// }

// const fareDoubler = function(createFareMultiplier){
//     return createFareMultiplier * 2
// }

// const fareTripler = function(createFareMultiplier){
//     return createFareMultiplier * 3
// }

// const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// function selectDifferentDrivers(arrayOfDrivers, newDrivers){
//     return newDrivers(arrayOfDrivers)
//     }



    const returnFirstTwoDrivers = function(firstTwoDrivers){
        return firstTwoDrivers.slice(0,2);
    };

    const returnLastTwoDrivers = function(lastTwoDrivers){
        return lastTwoDrivers.slice(-2);
    };

    const selectingDrivers = [
        returnFirstTwoDrivers,
        returnLastTwoDrivers
];

function createFareMultiplier(rate){
    return function(fare){
        return fare * rate
    };
};

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2
};

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3
};

function selectDifferentDrivers(arrayOfDrivers, newDrivers){
    return newDrivers(arrayOfDrivers)

}