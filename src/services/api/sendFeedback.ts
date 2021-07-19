import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.params = {};
axios.defaults.headers = {
    "Content-Type": "application/json",
};

export const sendFeedback =  async (value) => {
    try {
        const {data} =  await axios.post("/home/send-feedback", value)
        const response = data.response
        return  response
    } catch (error) {
        console.log("error", { error });
        return null;
    }
}

export const sendPartnersFeedback =  async (value) => {
    try {
        const {data} =  await axios.post("/partners/send-feedback", value)
        const response = data.response
        return  response
    } catch (error) {
        console.log("error", { error });
        return null;
    }
}