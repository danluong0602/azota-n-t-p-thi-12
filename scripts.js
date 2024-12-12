document.addEventListener("DOMContentLoaded", function () {
    const updateTimeElement = document.getElementById("updateTime");
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    updateTimeElement.textContent = formattedTime;
});
