// function superBowlWin(record) {
//     if (record.result === 'W') {
//         return record.year;
//     };
// };

// function superBowlWin(seasons) {
//     const wins = seasons.find(function (element) {
//         return element.result === 'W';
//     });
// }

// function superBowlWin(seasons) {
//     const champs = seasons.find(function(element) {
//         return element.result === 'W';
//     });
//     return champs.year;
// };

function superbowlWin(seasons) {
    const champs = seasons.find(function(element) {
        return element.result === 'W';
    });
    // return champs.year;
    return champs ? champs.year : champs;
}
