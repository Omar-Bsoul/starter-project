class SurveyClient {
  surveys = {
    key1: "aaa",
    key2: "aaa",
  };

  getOne(id) {
    return new Promise((resolve, reject) => {
      if (Object.keys(this.surveys).includes(id)) {
        resolve(this.surveys[id]);
      } else {
        reject(new Error(`survey id ${id} not found`));
      }
    });
  }
}

export const surveyClient = new SurveyClient();
