
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, User, Users, FileText, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AdmissionForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Information
    studentFirstName: "",
    studentLastName: "",
    dateOfBirth: "",
    gender: "",
    gradeApplying: "",
    previousSchool: "",
    
    // Parent/Guardian Information
    parentFirstName: "",
    parentLastName: "",
    relationship: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelationship: "",
    
    // Additional Information
    medicalConditions: "",
    specialNeeds: "",
    additionalComments: ""
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Navigate to payment page
    navigate("/payment", { state: { formData } });
    toast({
      title: "Form Completed",
      description: "Proceeding to payment...",
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <User className="h-5 w-5 text-school-gold" />
              <h3 className="text-lg font-semibold text-school-navy">Student Information</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="studentFirstName">First Name *</Label>
                <Input 
                  id="studentFirstName"
                  value={formData.studentFirstName}
                  onChange={(e) => handleInputChange("studentFirstName", e.target.value)}
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <Label htmlFor="studentLastName">Last Name *</Label>
                <Input 
                  id="studentLastName"
                  value={formData.studentLastName}
                  onChange={(e) => handleInputChange("studentLastName", e.target.value)}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input 
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gradeApplying">Grade Applying For *</Label>
                <Select value={formData.gradeApplying} onValueChange={(value) => handleInputChange("gradeApplying", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kindergarten">Kindergarten</SelectItem>
                    <SelectItem value="1st">1st Grade</SelectItem>
                    <SelectItem value="2nd">2nd Grade</SelectItem>
                    <SelectItem value="3rd">3rd Grade</SelectItem>
                    <SelectItem value="4th">4th Grade</SelectItem>
                    <SelectItem value="5th">5th Grade</SelectItem>
                    <SelectItem value="6th">6th Grade</SelectItem>
                    <SelectItem value="7th">7th Grade</SelectItem>
                    <SelectItem value="8th">8th Grade</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="previousSchool">Previous School</Label>
                <Input 
                  id="previousSchool"
                  value={formData.previousSchool}
                  onChange={(e) => handleInputChange("previousSchool", e.target.value)}
                  placeholder="Enter previous school name"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <Users className="h-5 w-5 text-school-gold" />
              <h3 className="text-lg font-semibold text-school-navy">Parent/Guardian Information</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="parentFirstName">Parent/Guardian First Name *</Label>
                <Input 
                  id="parentFirstName"
                  value={formData.parentFirstName}
                  onChange={(e) => handleInputChange("parentFirstName", e.target.value)}
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <Label htmlFor="parentLastName">Parent/Guardian Last Name *</Label>
                <Input 
                  id="parentLastName"
                  value={formData.parentLastName}
                  onChange={(e) => handleInputChange("parentLastName", e.target.value)}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="relationship">Relationship to Student *</Label>
                <Select value={formData.relationship} onValueChange={(value) => handleInputChange("relationship", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mother">Mother</SelectItem>
                    <SelectItem value="father">Father</SelectItem>
                    <SelectItem value="guardian">Guardian</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                <Input 
                  id="emergencyPhone"
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                  placeholder="Emergency contact number"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Home Address *</Label>
              <Input 
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter complete address"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input 
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="Enter city"
                />
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input 
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  placeholder="Enter state"
                />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input 
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  placeholder="Enter ZIP code"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <FileText className="h-5 w-5 text-school-gold" />
              <h3 className="text-lg font-semibold text-school-navy">Additional Information</h3>
            </div>
            
            <div>
              <Label htmlFor="medicalConditions">Medical Conditions or Allergies</Label>
              <Textarea 
                id="medicalConditions"
                value={formData.medicalConditions}
                onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                placeholder="Please list any medical conditions, allergies, or medications"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="specialNeeds">Special Educational Needs</Label>
              <Textarea 
                id="specialNeeds"
                value={formData.specialNeeds}
                onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
                placeholder="Please describe any special educational needs or accommodations"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="additionalComments">Additional Comments</Label>
              <Textarea 
                id="additionalComments"
                value={formData.additionalComments}
                onChange={(e) => handleInputChange("additionalComments", e.target.value)}
                placeholder="Any additional information you'd like to share"
                rows={3}
              />
            </div>

            <div className="bg-school-gray p-4 rounded-lg">
              <h4 className="font-semibold text-school-navy mb-2">Application Summary</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">Student:</span> {formData.studentFirstName} {formData.studentLastName}</p>
                <p><span className="font-medium">Grade:</span> {formData.gradeApplying}</p>
                <p><span className="font-medium">Parent/Guardian:</span> {formData.parentFirstName} {formData.parentLastName}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-school-gray">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-school-gold" />
              <h1 className="text-2xl font-bold text-school-navy">Excellence Academy</h1>
            </Link>
            <div className="text-sm text-gray-600">
              Application Form
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-school-navy">Step {currentStep} of 3</span>
              <span className="text-sm text-gray-500">
                {currentStep === 1 && "Student Information"}
                {currentStep === 2 && "Parent/Guardian Details"}
                {currentStep === 3 && "Additional Information"}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-school-gold h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-school-navy">Admission Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              {renderStepContent()}

              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white"
                >
                  Previous
                </Button>
                
                {currentStep < 3 ? (
                  <Button 
                    onClick={handleNext}
                    className="bg-school-gold hover:bg-yellow-500 text-black"
                  >
                    Next
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    className="bg-school-blue hover:bg-blue-700 text-white"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Payment
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
