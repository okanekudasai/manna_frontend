const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2)
        return parts.pop().split(';').shift();
    return "";
};

function getCookieExpiryDate(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === `${name}_expiry`) {
            const expiryTimestamp = parseInt(cookieValue, 10);
            if (!isNaN(expiryTimestamp)) {
                return new Date(expiryTimestamp);
            }
        }
    }
    return null;
}

export { getCookie, getCookieExpiryDate };