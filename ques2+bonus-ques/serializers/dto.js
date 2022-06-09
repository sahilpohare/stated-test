class MetaDataDTO {
    title = "";
    image_url = "";
    url = "";
    description = "";

    constructor(obj) {
        this.title = obj.title;
        this.image_url = obj.image;
        this.url = obj.url;
        this.description = obj.description;

        // if (!this.title) {
        //     throw new Error("No title provided");
        // }

        // if (!this.image_url) {
        //     throw new Error("No Image Url provided");
        // }

        // if (!this.url) {
        //     throw new Error("No url provided");
        // }

        // if (!this.description) {
        //     throw new Error("No description provided");
        // }
    }
}

module.exports = {
    MetaDataDTO,
}