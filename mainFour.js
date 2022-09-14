function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('#primary_id_type').then((elm) => {

document.getElementById('primary_id_type').value="State-issued driver's license"        //you may change this value if need be
 document.getElementById('secondary_id_type').value="Home or vehicle insurance policy"  //you may change this value if need be
 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(1000).then(() => {
document.querySelector('input[class="wizard-button"][value="Next"]').click()
});
});
