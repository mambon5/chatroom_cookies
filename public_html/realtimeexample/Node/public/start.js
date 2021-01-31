var start = {
    initiators: [
        client.start(),
        mainLoop.iterate()
    ],
    startGame: function () {
        start.concatenateInitiators(start.initiators.shift());
    },
    concatenateInitiators: function (initiator) {
        if (initiator) {
            initiator(() => start.concatenateInitiators(start.initiators.shift()));
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    start.startGame();
}, false);
