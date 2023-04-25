let lineChart;
let weights;

const blocker = document.querySelector("#blocker");
const modal = document.querySelector("#modal");

window.addEventListener("load", () => {
    manageLocalStorage();
    updateLatestWeighIn();

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

const manageLocalStorage = () => {
    weights = JSON.parse(localStorage.getItem("weights"));

    if (!weights) {
        localStorage.setItem("weights", JSON.stringify({ weights: [] }));
        weights = { weights: [] }
    }
}

const openModal = (e) => {
    blocker.style.display = "block";
    modal.style.display = "flex";

    anime({
        targets: modal,
        duration: 500,
        translateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutElastic(2, .6)"
    });
}

const closeModal = (e) => {
    blocker.style.display = "none";
    modal.style.display = "none";
}

const updateLatestWeighIn = () => {
    const latestDay = document.querySelector("#latest-day");
    const latestWeight = document.querySelector("#latest-weight");
    const latestWeightIn = weights.weights[weights.weights.length - 1];

    latestDay.innerHTML = latestWeightIn ? latestWeightIn.day : "-";
    latestWeight.innerText = latestWeightIn ? latestWeightIn.weight + "lbs" : "-";
}

document.querySelector("#btn").addEventListener(
    "click",
    openModal
);
blocker.addEventListener(
    "click",
    closeModal
);