export class UserDetails{
    addBookingDetails(userdetails: UserDetails) {
      throw new Error('Method not implemented.');
    }
    adduserdetails(userdetails: UserDetails) {
      throw new Error('Method not implemented.');
    }

    public firstname: string | undefined;
    public lastname: string | undefined;
    public mobile: number | undefined;
    public userId: string | undefined;
    public password: string | undefined;
    public cpassword:string | undefined;
    public terms: any;
    public source: any;
    public destination: any;
    public carsize: any;
    public carmodel: any;
    public status: string;
    public fare: any;
    public Accept:boolean
    public Reject:boolean
}
