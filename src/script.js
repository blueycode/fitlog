let lineChart;
let weights = {
    "weights": [
        {"day": "2023-04-01", "weight": 150},
        {"day": "2023-04-02", "weight": 148},
        {"day": "2023-04-03", "weight": 149},
        {"day": "2023-04-04", "weight": 147},
        {"day": "2023-04-05", "weight": 146},
        {"day": "2023-04-06", "weight": 145},
        {"day": "2023-04-07", "weight": 144},
        {"day": "2023-04-08", "weight": 142},
        {"day": "2023-04-09", "weight": 141},
        {"day": "2023-04-10", "weight": 140},
        {"day": "2023-04-11", "weight": 138},
        {"day": "2023-04-12", "weight": 137},
        {"day": "2023-04-13", "weight": 136},
        {"day": "2023-04-14", "weight": 135},
        {"day": "2023-04-15", "weight": 134},
        {"day": "2023-04-16", "weight": 132},
        {"day": "2023-04-17", "weight": 131},
        {"day": "2023-04-18", "weight": 130},
        {"day": "2023-04-19", "weight": 129},
        {"day": "2023-04-20", "weight": 128}
    ]
};

window.addEventListener("load", () => {
    const ctx = document.querySelector("#chart");

    lineChart = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [{
                data: weights.weights,
                borderWidth: 2,
                borderColor: "#D49D37",
                pointStyle: false,
                cubicInterpolationMode: "monotone"
            }]
        },
        options: {
            parsing: {
                xAxisKey: "day",
                yAxisKey: "weight"
            },
            scales: {
                y: {
                    border: {
                        display: false
                    }
                },
                x: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    label: "Weight",
                    callbacks: {
                        label: function(context) {
                            let label;

                            if (context.parsed.y) {
                                label = context.parsed.y + " lbs";
                            }

                            return label;
                        }
                    }
                }
            }
        }
    });
});