 
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

waitForElm('#primary-recipient-first-name').then((elm) => {



 document.getElementById('primary-recipient-first-name').value='';   //enter first name
 document.getElementById('primary-recipient-middle-name').value='';  //enter middle name or delete this line if not needed
 document.getElementById('primary-recipient-last-name').value='';    //enter last name  
 document.querySelector('input[class="wizard-button"]').click();
});