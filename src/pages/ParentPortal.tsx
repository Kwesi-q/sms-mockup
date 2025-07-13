
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  GraduationCap, 
  FileText, 
  DollarSign, 
  Calendar, 
  BarChart3,
  Bell,
  Heart,
  Utensils,
  BookOpen,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const ParentPortal = () => {
  const [student] = useState({
    name: "Emma Johnson",
    grade: "5th Grade",
    class: "5A",
    teacher: "Mrs. Davis",
    studentId: "ST2024-0156"
  });

  const [notifications] = useState([
    { id: 1, type: "academic", message: "New assignment uploaded in Mathematics", time: "2 hours ago", urgent: false },
    { id: 2, type: "fee", message: "Monthly fee payment due in 3 days", time: "1 day ago", urgent: true },
    { id: 3, type: "event", message: "Parent-Teacher meeting scheduled for next week", time: "2 days ago", urgent: false }
  ]);

  const [dailyReport] = useState({
    date: "January 16, 2024",
    attendance: "Present",
    meals: {
      breakfast: "Had breakfast - Oatmeal with fruits",
      lunch: "Had lunch - Chicken sandwich with vegetables",
      snack: "Apple juice and crackers"
    },
    behavior: "Excellent - Participated actively in class discussions",
    activities: [
      "Morning reading session",
      "Math problem solving",
      "Art and craft activity",
      "Playground time"
    ],
    mood: "Happy and energetic"
  });

  const [academicProgress] = useState([
    { subject: "Mathematics", grade: "A-", progress: 88, assignment: "Fractions worksheet due tomorrow" },
    { subject: "English", grade: "A", progress: 92, assignment: "Book report submitted" },
    { subject: "Science", grade: "B+", progress: 85, assignment: "Solar system project in progress" },
    { subject: "Social Studies", grade: "A-", progress: 89, assignment: "Geography quiz next week" }
  ]);

  const [pendingFees] = useState([
    { type: "Monthly Tuition", amount: 450, dueDate: "Jan 20, 2024", status: "pending" },
    { type: "Activity Fee", amount: 75, dueDate: "Jan 25, 2024", status: "pending" }
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
                <p className="text-sm text-gray-600">Parent Portal - Welcome, Johnson Family</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications ({notifications.filter(n => n.urgent).length})
              </Button>
              <Link to="/login">
                <Button variant="outline" size="sm">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Student Info Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-school-gold rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-black" />
              </div>
              <div>
                <CardTitle className="text-school-navy">{student.name}</CardTitle>
                <CardDescription>
                  {student.grade} - Class {student.class} | Teacher: {student.teacher}
                </CardDescription>
                <p className="text-xs text-gray-500">Student ID: {student.studentId}</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Quick Notifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2 text-school-gold" />
              Recent Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div key={notification.id} className={`flex items-start justify-between p-3 rounded-lg ${notification.urgent ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      {notification.urgent && <AlertCircle className="h-4 w-4 text-red-500" />}
                      <p className="text-sm font-medium text-school-navy">{notification.message}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                  {notification.urgent && (
                    <Badge variant="destructive" className="text-xs">Urgent</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="daily">Daily Report</TabsTrigger>
            <TabsTrigger value="academic">Academic Progress</TabsTrigger>
            <TabsTrigger value="fees">Fees & Payments</TabsTrigger>
            <TabsTrigger value="calendar">Events & Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-school-gold" />
                  Daily Progressive Report - {dailyReport.date}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Attendance */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <User className="h-8 w-8 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-school-navy">Attendance</h4>
                      <p className="text-sm text-gray-600">{dailyReport.attendance}</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">✓ Present</Badge>
                </div>

                {/* Meals */}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <Utensils className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-school-navy">Meals & Nutrition</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Breakfast:</span> {dailyReport.meals.breakfast}</div>
                    <div><span className="font-medium">Lunch:</span> {dailyReport.meals.lunch}</div>
                    <div><span className="font-medium">Snack:</span> {dailyReport.meals.snack}</div>
                  </div>
                </div>

                {/* Behavior */}
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <Heart className="h-6 w-6 text-yellow-600" />
                    <h4 className="font-semibold text-school-navy">Behavior & Mood</h4>
                  </div>
                  <p className="text-sm text-gray-700">{dailyReport.behavior}</p>
                  <p className="text-sm text-gray-600 mt-2"><span className="font-medium">Mood:</span> {dailyReport.mood}</p>
                </div>

                {/* Activities */}
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                    <h4 className="font-semibold text-school-navy">Daily Activities</h4>
                  </div>
                  <ul className="space-y-1 text-sm">
                    {dailyReport.activities.map((activity, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-school-gold" />
                  Academic Progress Report
                </CardTitle>
                <CardDescription>Current semester performance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {academicProgress.map((subject, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-school-navy">{subject.subject}</h4>
                        <Badge className="bg-school-gold text-black">{subject.grade}</Badge>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{subject.progress}%</span>
                        </div>
                        <Progress value={subject.progress} className="h-2" />
                      </div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Current Assignment:</span> {subject.assignment}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fees" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-school-gold" />
                    Pending Payments
                  </CardTitle>
                  <CardDescription>Outstanding fees and payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingFees.map((fee, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-semibold text-school-navy">{fee.type}</h4>
                          <p className="text-sm text-gray-600">Due: {fee.dueDate}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-school-navy">${fee.amount}</p>
                          <Button size="sm" className="bg-school-gold hover:bg-yellow-500 text-black mt-2">
                            Pay Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>Recent payment transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-school-navy">Monthly Tuition</p>
                        <p className="text-sm text-gray-600">Dec 15, 2023</p>
                      </div>
                      <p className="font-semibold text-green-600">GHC 450 ✓</p>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-school-navy">Activity Fee</p>
                        <p className="text-sm text-gray-600">Dec 10, 2023</p>
                      </div>
                      <p className="font-semibold text-green-600">GHC 75 ✓</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-school-gold" />
                  Upcoming Events & Calendar
                </CardTitle>
                <CardDescription>School events and important dates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-8 w-8 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-school-navy">Parent-Teacher Conference</h4>
                        <p className="text-sm text-gray-600">January 25, 2024 at 3:00 PM</p>
                        <p className="text-xs text-gray-500">Room 5A with Mrs. Davis</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-8 w-8 text-school-gold" />
                      <div>
                        <h4 className="font-semibold text-school-navy">Science Fair</h4>
                        <p className="text-sm text-gray-600">February 5, 2024 at 10:00 AM</p>
                        <p className="text-xs text-gray-500">School Auditorium</p>
                      </div>
                    </div>
                    <Badge variant="outline">Upcoming</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-8 w-8 text-purple-600" />
                      <div>
                        <h4 className="font-semibold text-school-navy">Winter Break</h4>
                        <p className="text-sm text-gray-600">December 20, 2024 - January 5, 2025</p>
                        <p className="text-xs text-gray-500">No classes during this period</p>
                      </div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Holiday</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParentPortal;
