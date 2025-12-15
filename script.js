let startTime = null;
let totalMinutes = 0;

function start() {
  startTime = Date.now();
}

function stop() {
  if (!startTime) return;

  const minutes = Math.floor((Date.now() - startTime) / 60000);
  totalMinutes += minutes;
  document.getElementById("time").innerText =
    totalMinutes + " minuten";
  startTime = null;
}
