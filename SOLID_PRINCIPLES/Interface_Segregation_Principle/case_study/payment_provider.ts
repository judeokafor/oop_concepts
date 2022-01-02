/**
 * Where This Fails
 * The below implementation works fine but seeing the fake implementations,
 * we know this is a **code smell **that would quickly become an issue with
 * a number of such fake implementations popping up throughout the code.
 */


interface PaymentProvider {
    validate: () => boolean;
    getPaymentCommission: () => number;
    processPayment: () => string;
    verifyPayment: () => boolean;
  }

  /**
   * Let's implement the interface PaymentProvider for our CreditCartPaymentProvider class. 
   * The credit card provider does not provide an API to verify payment individually,
   * but since we’re implementing PaymentProvider, we are required to implement the verifyPayment method,
   * otherwise, the class implementation will throw an error.
   */

  class CreditCardPaymentProvider implements PaymentProvider {
    validate() {
      // Payment is validated
      console.log("Payment Card Validated");
      return true;
    }
    getPaymentCommission() {
      // Commission is returned
      return 10;
    }
    processPayment() {
      // Payment processed
      console.log("Payment Processed");
      return "Payment Fingerprint";
    }
    verifyPayment() {
      // No verify Payment API exist
      // Return false to just implement the Payment Provider
      return false;
    }
  }

  /**
   * Now suppose the wallet providers do not have a validate API,
   * to implement the PaymentProvider for WalletPaymentProvider.
   * In this case, we must create a validate method — which does nothing as can be seen below:
   */

  class WalletPaymentProvider implements PaymentProvider {
    validate() {
      // No validate method exists
      // Just for sake of implementation return false
      return false;
    }
    getPaymentCommission() {
      // Commission is returned
      return 5;
    }
    processPayment() {
      // Payment processed
      console.log("Payment Processed");
      return "Payment Fingerprint";
    }
    verifyPayment() {
      // Payment verification does exist on Wallet Payment Provider
      console.log("Payment Verified");
      return false;
    }
  }