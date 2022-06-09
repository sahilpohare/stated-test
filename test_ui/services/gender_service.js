const { default: axios, Axios } = require("axios");

export default class GenderService {   
    /**
     * 
     * @param {string} name 
     * @returns {Promise<{
     *    name : string,
     *    gender : string,
     *    probabilty: number,
     * }>}
     * @returns 
     */
    static async getGender(name) {
        let res = await axios.get(`https://api.genderize.io/?name=${name}`);

        if (res.status !== 200) {
            throw new Error(`Error ${res.status}`);
        }

        return res.data;
    }
}