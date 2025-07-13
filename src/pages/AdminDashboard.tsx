
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  GraduationCap, 
  FileText, 
  DollarSign, 
  Calendar, 
  BarChart3,
  UserCheck,
  UserX,
  Settings,
  Bell,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [notifications] = useState([
    { id: 1, type: "application", message: "New admission application from Sarah Johnson", time: "10 minutes ago" },
    { id: 2, type: "payment", message: "Payment received for John Smith's application", time: "1 hour ago" },
    { id: 3, type: "report", message: "Monthly academic report ready for review", time: "2 hours ago" }
  ]);

  const [applications] = useState([
    { id: 1, name: "Sarah Johnson", grade: "5th Grade", status: "pending", date: "2024-01-15", parent: "Mike Johnson" },
    { id: 2, name: "David Tsatu", grade: "3rd Grade", status: "approved", date: "2024-01-14", parent: "Lisa Tsatu" },
    { id: 3, name: "Emma Williams", grade: "2nd Grade", status: "review", date: "2024-01-13", parent: "Tom Williams" }
  ]);

  const [students] = useState([
    { id: 1, name: "Alex Thompson", grade: "4th Grade", class: "4A", teacher: "Mrs. Davis", status: "active" },
    { id: 2, name: "Maria Garcia", grade: "6th Grade", class: "6B", teacher: "Mr. Wilson", status: "active" },
    { id: 3, name: "James Opoku", grade: "5th Grade", class: "5A", teacher: "Ms. Brown", status: "active" }
  ]);

  return (
    <div className="min-h-screen bg-school-gray">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-school-gold" />
              <div>
                <h1 className="text-2xl font-bold text-school-navy">Gazania Amara Montessori</h1>
                <p className="text-sm text-gray-600">Administrator Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications ({notifications.length})
              </Button>
              <Link to="/login">
                <Button variant="outline" size="sm">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-school-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-navy">425</div>
              <p className="text-xs text-green-600">+12 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <FileText className="h-4 w-4 text-school-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-navy">23</div>
              <p className="text-xs text-orange-600">Awaiting review</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue This Month</CardTitle>
              <DollarSign className="h-4 w-4 text-school-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-navy">$45,230</div>
              <p className="text-xs text-green-600">+8% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Staff Members</CardTitle>
              <GraduationCap className="h-4 w-4 text-school-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-navy">47</div>
              <p className="text-xs text-blue-600">25 Teachers, 22 Staff</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="finances">Finances</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admission Applications</CardTitle>
                <CardDescription>Review and manage incoming applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-school-navy">{app.name}</h4>
                        <p className="text-sm text-gray-600">Grade: {app.grade} | Parent: {app.parent}</p>
                        <p className="text-xs text-gray-500">Applied: {app.date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={app.status === 'approved' ? 'default' : app.status === 'pending' ? 'secondary' : 'outline'}
                          className={
                            app.status === 'approved' ? 'bg-green-100 text-green-800' :
                            app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }
                        >
                          {app.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                            <UserCheck className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                            <UserX className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Manage enrolled students, classes, and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-school-navy">{student.name}</h4>
                        <p className="text-sm text-gray-600">Class: {student.class} | Teacher: {student.teacher}</p>
                        <p className="text-xs text-gray-500">Grade: {student.grade}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                        <Button size="sm" variant="outline">
                          <Settings className="h-4 w-4 mr-2" />
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>School Events</CardTitle>
                <CardDescription>Manage school calendar and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-8 w-8 text-school-gold" />
                      <div>
                        <h4 className="font-semibold text-school-navy">Parent-Teacher Conference</h4>
                        <p className="text-sm text-gray-600">March 15, 2024 - 2:00 PM</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Edit Event</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-8 w-8 text-school-gold" />
                      <div>
                        <h4 className="font-semibold text-school-navy">Science Fair</h4>
                        <p className="text-sm text-gray-600">March 22, 2024 - 10:00 AM</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Edit Event</Button>
                  </div>
                </div>
                <Button className="mt-4 bg-school-gold hover:bg-yellow-500 text-black">
                  <Calendar className="h-4 w-4 mr-2" />
                  Add New Event
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Reports</CardTitle>
                  <CardDescription>Generate and download academic performance reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Monthly Academic Summary
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Grade Distribution Report
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Student Progress Report
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Daily Reports</CardTitle>
                  <CardDescription>Access daily operational reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Daily Attendance
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Fee Collection Summary
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Incident Reports
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="finances" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fee Management</CardTitle>
                  <CardDescription>Track and manage student fees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Collected This Month</span>
                      <span className="text-green-600 font-bold">$42,150</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Pending Collections</span>
                      <span className="text-orange-600 font-bold">$8,750</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="font-medium">Overdue Payments</span>
                      <span className="text-red-600 font-bold">$2,100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Reports</CardTitle>
                  <CardDescription>Generate financial statements and reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Monthly Revenue Report
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Fee Collection Analysis
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Outstanding Payments
                    <Download className="h-4 w-4 ml-auto" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
