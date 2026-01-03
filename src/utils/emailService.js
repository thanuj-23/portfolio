import jsonp from 'jsonp';

const FORM_ID = '8933748';
// Note: For JSONP approach, we typically post to the 'subscribe' endpoint which might not need API Key if using the public form URL, 
// OR we use the API URL with params.
// ConvertKit standard JSONP URL: https://app.convertkit.com/forms/{id}/subscriptions?email={email}

// We will use the standard 'app' endpoint which is more reliable for client-side than 'api'
const BASE_URL = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`;

export const subscribeToNewsletter = (email) => {
    return new Promise((resolve, reject) => {
        const url = `${BASE_URL}?email_address=${encodeURIComponent(email)}`;

        jsonp(url, { param: 'callback' }, (err, data) => {
            if (err) {
                console.error('ConvertKit JSONP error:', err);
                resolve({ success: false, error: err });
            } else if (data.status === 'success' || data.subscription) {
                resolve({ success: true, response: data });
            } else {
                console.error('ConvertKit subscription failed:', data);
                resolve({ success: false, error: data.msg || 'Subscription failed' });
            }
        });
    });
};
