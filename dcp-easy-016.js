// You run an e-commerce website and want to record the last N order ids 
// in a log. Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
// You should be as efficient with time and space as possible.

// size of order log N
// to keep size at N, implement queue so that when reaches max size, the front 

class ECommerceOrderLog {
    constructor(maxSize) {
        this.logArray = [];
        this.maxSize = maxSize;
        this.currIndex = 0;
    }

    record(orderId) {
        this.logArray[this.currIndex] = orderId;
        this.currIndex = (this.currIndex + 1) % this.maxSize;
    }

    get_last(i) {
        return this.logArray[(this.currIndex - i + this.maxSize) % this.maxSize];
    }

}

let eComm = new ECommerceOrderLog(4);
eComm.record(21)
eComm.record(22);
eComm.record(23);
eComm.record(24);
eComm.record(25);
eComm.record(26);
eComm.record(27);
eComm.record(28);
eComm.record(29);
console.log(eComm.get_last(2))

