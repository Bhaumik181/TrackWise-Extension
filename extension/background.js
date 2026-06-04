let currentDomain = "";

let idle = false;

chrome.idle.setDetectionInterval(60);

chrome.idle.onStateChanged.addListener(
(state)=>{

    idle =
    state !== "active";

});

async function getActiveTab(){

    const tabs =
    await chrome.tabs.query({

        active:true,

        currentWindow:true

    });

    return tabs[0];
}

async function updateCurrentDomain(){

    const tab =
    await getActiveTab();

    if(
        !tab ||
        !tab.url
    )
        return;

    if(
        !tab.url.startsWith("http")
    )
        return;

    let hostname =
    new URL(
        tab.url
    ).hostname
    .toLowerCase();

    hostname =
    hostname.replace(
        /^www\./,
        ""
    );

    currentDomain =
    hostname;

    console.log(
        "Current Domain:",
        currentDomain
    );
}

chrome.tabs.onActivated.addListener(
updateCurrentDomain
);

chrome.tabs.onUpdated.addListener(
(tabId,changeInfo)=>{

    if(
        changeInfo.status ===
        "complete"
    ){

        updateCurrentDomain();

    }

});

setInterval(async()=>{

    if(
        idle ||
        !currentDomain
    )
        return;

    try{

        const response =
        await fetch(

        "http://localhost:5000/api/activity",

        {

            method:"POST",

            headers:{

                "Content-Type":
                "application/json"

            },

            body:JSON.stringify({

                domain:
                currentDomain,

                seconds:5

            })

        });

        const data =
        await response.json();

        console.log(
            "Updated:",
            data
        );

    }
    catch(error){

        console.log(
            "Fetch Error:",
            error
        );

    }

},5000);

updateCurrentDomain();