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

waitForElm('#city').then((elm) => {

 document.getElementById('address').value=''        //enter address numbers and street name
 document.getElementById('city').value='';          //enter city
 document.getElementById('state').value='';         //enter state
 document.getElementById('postal_code').value='';   //enter 5 digit postal code
 document.querySelector('input[name="have_ss_num"][value="Yes"]').click()
 document.querySelector('input[class="wizard-button"][value="Next"]').click()
});
