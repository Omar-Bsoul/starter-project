import { Survey, Question, Q_TYPE_RADIO_BUTTON, Q_TYPE_MULTIPLE_CHOICE } from "../models";

export const surveys = {
  "1": new Survey(1, [
    new Question(1, Q_TYPE_RADIO_BUTTON, "Please rate your overall satisfaction about the service provided.", [
      "Not Satisfied",
      "Quite Satisfied",
      "Satisfied",
      "Completely Satisfied",
    ]),
    new Question(1, Q_TYPE_MULTIPLE_CHOICE, "How did you hear about our company?", ["Google", "A friend of mine", "Print advertise", "Newspaper"]),
  ]),
  "2": new Survey(2, []),
};
