numi.addFunction({ "id": "daysBetween", "phrases": "daysBetween" }, function(values) {

    var oneDay = 24 * 60 * 60 * 1000;
    var today = new Date();
    var comparisonDate = new Date(values[0].double, values[1].double - 1, values[2].double );

    var daysBetween = Math.abs((today.getTime() - comparisonDate.getTime()) / (oneDay));

    return {
        "double": Math.floor(daysBetween)
    };
});
