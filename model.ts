export class Name {
  firstname: string;

  middlename: string;

  lastname: string;

  constructor(data: Partial<Name>) {
    Object.assign(this, data);
  }

  getFirstAndLast = (): string =>
    `${this.firstname} ${this.lastname}`.replace('  ', ' ').trim();

  getFull = (): string =>
    `${this.firstname} ${this.middlename} ${this.lastname}`
      .replace('  ', ' ')
      .trim();

  getFullPartialMiddle = (): string =>
    `${this.firstname} ${this.getMiddleInitial()}. ${this.lastname}`
      .replace('  ', ' ')
      .trim();

  getMiddleInitial = (): string => this.middlename.substring(0, 1);
}

export interface Job {
  position: string;
  company: string;
  logo: string;
  dateHired: string;
  dateResigned: string;
  descriptions: Array<string>;
}

export interface Resume {
  name: Name;
  intro: string;
  email: string;
  mobile: string;
  skills: Array<string>;
  jobs: Array<Job>;
}
