class EmailService {
    public sendEmail(email: string, message: string): void {
      console.log(`Email Sent: ${message}`);
    }
  }
  
  class SMSService {
    public sendSms(phone: number, message: string): void {
      console.log(`Message ${message} sent to ${phone}`);
    }
  }
  
  class NotificationService {
    private _emailService: EmailService;
    constructor() {
      this._emailService = new EmailService();
    }
    public sendNotification(email: string, message: string) {
      this._emailService.sendEmail(email, message);
    }
  }
  
  class OrderNotificationService extends NotificationService {
    private _smsService: SMSService;
    constructor() {
      super();
      this._smsService = new SMSService();
    }
  
    public sendOrderNotification(
      email: string,
      emailMessage: string,
      phone?: number,
      smsMessage?: string
    ) {
      if (email && emailMessage) {
        this.sendNotification(email, emailMessage);
      }
      if (phone && smsMessage) {
        this._smsService.sendSms(phone, smsMessage);
      }
    }
  }
  
  const main = () => {
    const orderNotificationService = new OrderNotificationService();
    orderNotificationService.sendOrderNotification(
      "hello@example.com",
      "Order accepted",
      9876543210,
      "Order Accepted"
    );
  };
  
  main();