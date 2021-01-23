var mainLoop = {
  executionId: null,
  lastRecord: 0,
  ups: 0,
  fps: 0,
  iterate: function(timeRecord){
    mainLoop.executionId = window.requestAnimationFrame(mainLoop.iterate);
    mainLoop.update(timeRecord);
    mainLoop.draw(timeRecord);

      if (timeRecord - mainLoop.lastRecord > 999) {
          mainLoop.lastRecord = timeRecord;
          console.log("APS: " + mainLoop.ups + " | FPS: " + mainLoop.fps);
          mainLoop.ups = 0;
          mainLoop.fps = 0;
      }
  },
  stop: function(){

  },
    update: function (timeRecord) {
        client.update();
    mainLoop.ups++;
  },
    draw: function (timeRecord) {
        client.draw();
    mainLoop.fps++;
  }
};
