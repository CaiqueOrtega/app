import axios from "axios";

const api = axios.create({
    baseURL: "https://gist.githubusercontent.com/CaiqueOrtega/6b619eda05f2464e7947818fc0ab814d/raw/0b91232fbf87ba5c212d0a91d0266e2b929aa277/Project-Neflix-Film.JSON"
});

export default api;