export class Patient {
  constructor(
    public name: string,
    public address: string,
    public gender: String,
    public mobile: number,
    public doctorName: string,
    public covid: string,
    public datetimeCreate: Date
  ) {}
}
