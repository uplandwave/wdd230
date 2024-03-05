  function setCurrentDateTime() {
    var currentTimestamp = Date.now();

    document.getElementById("submit-time").value = currentTimestamp;
    console.log(currentTimestamp);
  }

  document.getElementById("forum1").addEventListener("submit", setCurrentDateTime());

