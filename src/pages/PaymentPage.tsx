
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, CreditCard, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PaymentPage = () => {
  const [paymentStep, setPaymentStep] = useState(1); // 1: Payment Form, 2: Confirmation
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock payment processing
    setTimeout(() => {
      setPaymentStep(2);
      toast({
        title: "Payment Successful!",
        description: "Your application has been submitted successfully.",
      });
    }, 2000);
  };

  if (paymentStep === 2) {
    return (
      <div className="min-h-screen bg-school-gray">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-school-gold" />
              <h1 className="text-2xl font-bold text-school-navy">Gazania Amara Montessori</h1>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-xl">
              <CardContent className="p-12">
                <div className="mb-6">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-school-navy mb-2">Application Submitted!</h2>
                  <p className="text-gray-600">Thank you for applying to Gazania Amara Montessori</p>
                </div>

                <div className="bg-school-gray p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-school-navy mb-4">What's Next?</h3>
                  <div className="text-left space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-school-gold rounded-full flex items-center justify-center text-black font-bold text-xs">1</div>
                      <p>You'll receive a confirmation email within 10 minutes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-school-gold rounded-full flex items-center justify-center text-black font-bold text-xs">2</div>
                      <p>Our admissions team will review your application within 48 hours</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-school-gold rounded-full flex items-center justify-center text-black font-bold text-xs">3</div>
                      <p>We'll contact you to schedule an interview if your application is approved</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    <strong>Application Reference:</strong> EA-2024-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild className="bg-school-blue hover:bg-blue-700">
                      <Link to="/">Return to Homepage</Link>
                    </Button>
                    <Button variant="outline" className="border-school-gold text-school-navy">
                      Print Confirmation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-school-gray">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-school-gold" />
            <h1 className="text-2xl font-bold text-school-navy">Gazania Amara Montessori</h1>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-school-gold" />
                  <span className="text-school-navy">Payment Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <Label htmlFor="cardholderName">Cardholder Name *</Label>
                    <Input 
                      id="cardholderName"
                      value={paymentData.cardholderName}
                      onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                      placeholder="Enter name on card"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input 
                      id="cardNumber"
                      value={paymentData.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input 
                        id="expiryDate"
                        value={paymentData.expiryDate}
                        onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input 
                        id="cvv"
                        value={paymentData.cvv}
                        onChange={(e) => handleInputChange("cvv", e.target.value)}
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-school-navy mb-3">Billing Address</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="billingAddress">Street Address *</Label>
                        <Input 
                          id="billingAddress"
                          value={paymentData.billingAddress}
                          onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                          placeholder="Enter billing address"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input 
                            id="city"
                            value={paymentData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            placeholder="City"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Select value={paymentData.state} onValueChange={(value) => handleInputChange("state", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="State" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CA">California</SelectItem>
                              <SelectItem value="NY">New York</SelectItem>
                              <SelectItem value="TX">Texas</SelectItem>
                              <SelectItem value="FL">Florida</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP *</Label>
                          <Input 
                            id="zipCode"
                            value={paymentData.zipCode}
                            onChange={(e) => handleInputChange("zipCode", e.target.value)}
                            placeholder="12345"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-school-gold hover:bg-yellow-500 text-black font-semibold py-3"
                  >
                    Process Payment - GHC 150.00
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-school-navy">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between py-2">
                    <span>Application Fee</span>
                    <span className="font-semibold">GHC 150.00</span>
                  </div>
                  <div className="flex justify-between py-2 text-sm text-gray-600">
                    <span>Processing Fee</span>
                    <span>GHC 0.00</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-school-gold">GHC 150.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-school-navy mb-2">Secure Payment</h4>
                      <p className="text-sm text-gray-600">
                        Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-school-navy mb-3">Payment Policy</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• Application fees are non-refundable</p>
                    <p>• Payment confirms submission of your application</p>
                    <p>• You will receive a confirmation email within 10 minutes</p>
                    <p>• Questions? Contact us at admissions@excellenceacademy.edu</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
