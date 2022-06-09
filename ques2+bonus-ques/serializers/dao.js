class ApiDao {
  /**
   * @type {{ date : string | Date }}
   */
  data;

  is_valid = true;

  constructor(data) {
    this.data = data;

    if(!this.data.date) {
      this.is_valid = false;
    }

    this.data.date = new Date(this.data.date);
  }
}

module.exports = { ApiDao };
