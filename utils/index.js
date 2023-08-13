const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const STRAPI_API_URL =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337';

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
    };

    const res = await fetch(`${STRAPI_API_URL}${endpoint}`, options);
    const data = await res.json();
    return data;
};

// get discount percentages on product original price
export const getDiscountPercentage = (originalPrice, discountPrice) => {
    const discount = originalPrice - discountPrice;
    const percentage = (discount / originalPrice) * 100;
    return percentage.toFixed(2);
};
