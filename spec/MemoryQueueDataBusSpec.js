describe("MemoryQueueSpec", function() {
    var MemoryQueue = require("../lib/index.js").MemoryQueue;
    it("test", function() {
        var data;
        var mq = new MemoryQueue(function() {
            data = arguments;
        });
        mq.send("Hello", "world");
        expect(2).toEqual(data.length);
        expect("Hello").toEqual(data[0]);
        expect("world").toEqual(data[1]);
        mq.setHandler(undefined);
        data = undefined;
        mq.send("TEST");
        expect(data).toBeUndefined();
    });
});