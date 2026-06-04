async function loadStats(){

    try{

        const response =
        await fetch(
            "http://localhost:5000/api/activity/stats"
        );

        const data =
        await response.json();

        const statsDiv =
        document.getElementById(
            "stats"
        );

        statsDiv.innerHTML = "";

        data.forEach(site=>{

            const minutes =
            (
                site.timeSpent / 60
            ).toFixed(1);

            statsDiv.innerHTML +=
            `
            <div class="card">

                <div class="domain">
                    ${site.domain}
                </div>

                <div class="time">
                    ${minutes} min
                </div>

            </div>
            `;

        });

    }
    catch(error){

        document.getElementById(
            "stats"
        ).innerHTML =

        `
        <div class="loading">
            Backend Not Running
        </div>
        `;

        console.log(error);

    }

}

loadStats();