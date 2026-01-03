import emailjs from '@emailjs/browser';

// REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS.COM
const SERVICE_ID = 'service_dz0voci';
const TEMPLATE_ID = 'template_t1dkkg5';
const PUBLIC_KEY = 'Itc9Y1rZ88g9c1X6W';

export const subscribeToNewsletter = async (email) => {
    try {
        const templateParams = {
            from_name: email, // The subscriber's email
            message: `New subscription request from: ${email}`,
            reply_to: email,
        };

        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        );

        return { success: true, response };
    } catch (error) {
        console.error('Email subscription failed:', error);
        return { success: false, error };
    }
};
