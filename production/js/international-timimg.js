function updateTime() {
  const timezones = {
    "new-york-time": "America/New_York",
    "singapore-time": "Asia/Singapore",
    "london-time": "Europe/London",
    "brisbane-time": "Australia/Brisbane",
  };

  for (const [elementId, timezone] of Object.entries(timezones)) {
    const now = new Date().toLocaleString("en-US", {
      timeZone: timezone,
      hour12: false,
    });
    const [date, time] = now.split(", ");
    const [hours, minutes] = time.split(":");

    document.querySelector(`#${elementId} .hours`).textContent = hours;
    document.querySelector(`#${elementId} .minutes`).textContent = minutes;
  }
}

setInterval(updateTime, 1000);
updateTime();
