
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award, ArrowRight, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-school-gray to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-school-gold" />
              <h1 className="text-2xl font-bold text-school-navy">Gazania Amara Montessori</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-school-navy hover:text-school-light-blue transition-colors">About</a>
              <a href="#programs" className="text-school-navy hover:text-school-light-blue transition-colors">Programs</a>
              <a href="#admissions" className="text-school-navy hover:text-school-light-blue transition-colors">Admissions</a>
              <Link to="/login" className="text-school-navy hover:text-school-light-blue transition-colors">Portal Login</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-school-navy mb-6 animate-fade-in">
            Shaping Tomorrow's Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Gazania Amara Montessori where academic excellence meets character development in a nurturing environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-school-gold hover:bg-yellow-500 text-black font-semibold px-8 py-4">
              <Link to="/admission-form" className="flex items-center">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white px-8 py-4">
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-school-navy mb-12">Why Choose Gazania Amara Montessori?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-school-gold mx-auto mb-4" />
                <CardTitle className="text-school-navy">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive curriculum designed to challenge and inspire students at every level.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-school-gold mx-auto mb-4" />
                <CardTitle className="text-school-navy">Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dedicated teachers with advanced degrees and passion for student success.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-school-gold mx-auto mb-4" />
                <CardTitle className="text-school-navy">Character Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Focus on developing integrity, leadership, and social responsibility.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-16 bg-school-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-school-navy mb-8">Ready to Join Our Community?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <Shield className="h-10 w-10 text-school-gold mb-4" />
                  <CardTitle>Secure Online Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Complete your admission application securely online with our encrypted system.
                  </p>
                  <Button className="w-full bg-school-blue hover:bg-blue-700 text-white">
                    <Link to="/admission-form">Start Application</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <Clock className="h-10 w-10 text-school-gold mb-4" />
                  <CardTitle>Quick Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Fast application review process with updates sent directly to your email.
                  </p>
                  <div className="flex items-center text-school-gold font-semibold">
                    <Star className="h-5 w-5 mr-2" />
                    Processing within 48 hours
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-school-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-school-gold" />
                <h4 className="font-bold">Gazania Amara Montessori</h4>
              </div>
              <p className="text-gray-300">Nurturing minds, building futures.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/admission-form" className="hover:text-school-gold transition-colors">Apply Now</Link></li>
                <li><Link to="/login" className="hover:text-school-gold transition-colors">Portal Login</Link></li>
                <li><a href="#programs" className="hover:text-school-gold transition-colors">Programs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>123 Education Street</li>
                <li>Academic City, AC 12345</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Portals</h4>
              <ul className="space-y-2">
                <li><Link to="/admin" className="text-school-gold hover:text-yellow-400 transition-colors">Admin Dashboard</Link></li>
                <li><Link to="/parent" className="text-school-gold hover:text-yellow-400 transition-colors">Parent Portal</Link></li>
                <li><Link to="/teacher" className="text-school-gold hover:text-yellow-400 transition-colors">Teacher Portal</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Gazania Amara Montessori. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
