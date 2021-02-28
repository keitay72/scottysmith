function formatTime(time) {
    let label = "";
    if (time < 60000) {
        label = ' s';
        time /= 1000;
    } else if (time < 3600000) {
        label = ' m';
        time /= 60000;
    } else if (time < 86400000) {
        label = ' h';
        time /= 3600000;
    } else if (time < 604800000) {
        label = ' d';
        time /= 86400000
    } else if (time < 2419200000) {
        label = ' w';
        time /= 604800000;
    } else if (time < 31557600000) {
        label = ' M';
        time /= 2629800000;
    } else {
        label = ' y';
        time /= 31557600000;
    }
    return `${Math.floor(time)}${label}`
}