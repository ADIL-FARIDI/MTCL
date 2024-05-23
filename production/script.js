// timecode for topnavbar
function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const timeString = now.toLocaleTimeString("en-US", options);
  timeElement.textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();
////////////////////////////////
