// Given a collection of intervals, find the minimum number of intervals 
// you need to remove to make the rest of the intervals non-overlapping.

// Intervals can "touch", such as [0, 1] and [1, 2], but they 
// won't be considered overlapping.

// For example, given the intervals (7, 9), (2, 4), (5, 8), 
// return 1 as the last interval can be removed and the first two won't overlap.

// const minRemove = (collection) => {
//     if (collection.length === 0) {return 0};

//     collection.forEach(c => {

//     })
// }
Array.min = function( array ){
    return Math.min.apply( Math, array );
};

const get_min_removals = (intervals, reserved_intervals=[], removed=0) => {
    
    console.log(reserved_intervals);

    if (intervals.length === 0) {return removed};

    let curr_interval = intervals[0]
    let if_removed = get_min_removals(
        intervals.slice(1, intervals.length), reserved_intervals, removed + 1)

    for (let i = 0; i < reserved_intervals.length; i++) {
        if (reserved_intervals[i].includes(curr_interval[0]) || reserved_intervals[i].includes(curr_interval[1])) {
            return if_removed;
        }
    }

    let range = curr_interval[1] - curr_interval[0] + 1;
    let new_reserved_intervals = [reserved_intervals, ...Array.from(new Array(5), (x, i) => i + curr_interval[0])].flat();

    return Array.min(if_removed, get_min_removals(intervals.slice(1,intervals.length), new_reserved_intervals, removed));
}


console.log(get_min_removals([[7, 9], [2, 4], [5, 8]]))