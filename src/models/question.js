export const Q_TYPE_MULTIPLE_CHOICE = 1;
export const Q_TYPE_RADIO_BUTTON = 2;

export class Question {
  id;
  type;
  body;
  options;

  constructor(id, type, body, options) {
    this.id = id;
    this.type = type;
    this.body = body;
    this.options = options;
  }
}
