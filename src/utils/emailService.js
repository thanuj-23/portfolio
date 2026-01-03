const FORM_ID = '8933748';
const API_KEY = 'skv7HtHQG5FRSxBnrhXx0A';
const API_URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

export const subscribeToNewsletter = async (email) => {
    try {
        console.log("Attempting subscription for:", email);
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                api_key: API_KEY,
                email: email
            })
        });

        const data = await response.json();
        console.log("ConvertKit API response:", data);

        if (response.ok) {
            return { success: true, response: data };
        } else {
            // ConvertKit usually returns { error: "Message", message: "..." }
            return { success: false, error: data.message || data.error || "Subscription failed" };
        }
    } catch (error) {
        console.error('Newsletter subscription network error:', error);
        return { success: false, error: error.message || "Network Error" };
    }
};
