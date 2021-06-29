function getObjectByPropertyValue(array, propertyName, propertyValue) {
    return array.find(o => o[propertyName] == propertyValue);
}

function getIndexByPropertyValue(array, propertyName, propertyValue) {
    return array.findIndex(o => o[propertyName] == propertyValue);
}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

function humanReadableProxy(data) {
    return JSON.parse(JSON.stringify(data));
}

function prettyDate(dateObj) {
    if (typeof dateObj == 'string') {
        dateObj = new Date(dateObj);
    }
    if (typeof dateObj == 'object') {
        return (
            dateObj.toDateString() +
            ' ' +
            dateObj.getHours() +
            ':' +
            ('0' + dateObj.getMinutes()).slice(-2) +
            ':' +
            ('0' + dateObj.getSeconds()).slice(-2)
        );
    } else {
        return 'Invalid date object or string';
    }
}
