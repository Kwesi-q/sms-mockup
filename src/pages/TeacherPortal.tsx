
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  GraduationCap, 
  FileText, 
  BookOpen, 
  Calendar, 
  ClipboardList,
  Plus,
  Save,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const TeacherPortal = () => {
  const { toast } = useToast();
  
  const [teacher] = useState({
    name: "Mrs. Sarah Davis",
    class: "5A",
    grade: "5th Grade",
    subject: "Mathematics & Science"
  });

  const [students] = useState([
    { id: 1, name: "Emma Johnson", attendance: "Present", behavior: "Excellent", notes: "" },
    { id: 2, name: "Michael Chen", attendance: "Present", behavior: "Good", notes: "" },
    { id: 3, name: "Sophia Williams", attendance: "Present", behavior: "Excellent", notes: "" },
    { id: 4, name: "James Rodriguez", attendance: "Absent", behavior: "N/A", notes: "Sick leave" },
    { id: 5, name: "Olivia Brown", attendance: "Present", behavior: "Needs Improvement", notes: "Distracted during lesson" }
  ]);

  const [assignments] = useState([
    { id: 1, title: "Fractions Worksheet", subject: "Mathematics", dueDate: "Jan 20, 2024", submitted: 18, total: 22 },
    { id: 2, title: "Solar System Project", subject: "Science", dueDate: "Jan 25, 2024", submitted: 12, total: 22 },
    { id: 3, title: "Reading Comprehension", subject: "English", dueDate: "Jan 18, 2024", submitted: 22, total: 22 }
  ]);

  const [newGrade, setNewGrade] = useState({
    student: "",
    subject: "",
    assignment: "",
    grade: "",
    comments: ""
  });

  const [dailyReport, setDailyReport] = useState({
    date: new Date().toISOString().split('T')[0],
    generalNotes: "",
    activities: ""
  });

  const handleSaveGrade = () => {
    toast({
      title: "Grade Saved",
      description: "Academic record has been updated successfully.",
    });
    setNewGrade({
      student: "",
      subject: "",
      assignment: "",
      grade: "",
      comments: ""
    });
  };

  const handleSaveDailyReport = () => {
    toast({
      title: "Daily Report Saved",
      description: "Daily progress report has been submitted successfully.",
    });
  };

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
                <p className="text-sm text-gray-600">Teacher Portal - {teacher.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold text-school-navy">Class {teacher.class}</p>
                <p className="text-sm text-gray-600">{teacher.grade} | {teacher.subject}</p>
              </div>
              <Link to="/login">
                <Button variant="outline" size="sm">Logout</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-school-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-navy">22</div>
              <p className="text-xs text-green-600">Class 5A enrollment</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Present Today</CardTitle>
              <Users className="h-4 w-4 text-school-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-navy">21</div>
              <p className="text-xs text-green-600">95% attendance</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
              <FileText className="h-4 w-4 text-school-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-navy">8</div>
              <p className="text-xs text-orange-600">Need grading</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
              <BookOpen className="h-4 w-4 text-school-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-navy">B+</div>
              <p className="text-xs text-blue-600">Class performance</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="class" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="class">My Class</TabsTrigger>
            <TabsTrigger value="grades">Academic Records</TabsTrigger>
            <TabsTrigger value="daily">Daily Reports</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
          </TabsList>

          <TabsContent value="class" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Class 5A - Student List</CardTitle>
                <CardDescription>View and manage your assigned students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-school-navy">{student.name}</h4>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge 
                            className={student.attendance === 'Present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                          >
                            {student.attendance}
                          </Badge>
                          <Badge 
                            variant="outline"
                            className={
                              student.behavior === 'Excellent' ? 'border-green-500 text-green-700' :
                              student.behavior === 'Good' ? 'border-blue-500 text-blue-700' :
                              student.behavior === 'Needs Improvement' ? 'border-orange-500 text-orange-700' :
                              'border-gray-500 text-gray-700'
                            }
                          >
                            {student.behavior}
                          </Badge>
                        </div>
                        {student.notes && (
                          <p className="text-sm text-gray-600 mt-1">{student.notes}</p>
                        )}
                      </div>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="grades" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Enter New Grade</CardTitle>
                  <CardDescription>Add academic records for students</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="student">Select Student</Label>
                    <Select value={newGrade.student} onValueChange={(value) => setNewGrade({...newGrade, student: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose student" />
                      </SelectTrigger>
                      <SelectContent>
                        {students.map((student) => (
                          <SelectItem key={student.id} value={student.name}>
                            {student.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={newGrade.subject} onValueChange={(value) => setNewGrade({...newGrade, subject: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="social-studies">Social Studies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="assignment">Assignment/Test Name</Label>
                    <Input 
                      id="assignment"
                      value={newGrade.assignment}
                      onChange={(e) => setNewGrade({...newGrade, assignment: e.target.value})}
                      placeholder="Enter assignment name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="grade">Grade</Label>
                    <Select value={newGrade.grade} onValueChange={(value) => setNewGrade({...newGrade, grade: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="C+">C+</SelectItem>
                        <SelectItem value="C">C</SelectItem>
                        <SelectItem value="D">D</SelectItem>
                        <SelectItem value="F">F</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="comments">Comments (Optional)</Label>
                    <Textarea 
                      id="comments"
                      value={newGrade.comments}
                      onChange={(e) => setNewGrade({...newGrade, comments: e.target.value})}
                      placeholder="Additional comments about performance"
                      rows={3}
                    />
                  </div>

                  <Button onClick={handleSaveGrade} className="w-full bg-school-gold hover:bg-yellow-500 text-black">
                    <Save className="h-4 w-4 mr-2" />
                    Save Grade
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Grades</CardTitle>
                  <CardDescription>Recently entered academic records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-school-navy">Emma Johnson</p>
                        <p className="text-sm text-gray-600">Mathematics Quiz</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">A-</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-school-navy">Michael Chen</p>
                        <p className="text-sm text-gray-600">Science Project</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">B+</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-school-navy">Sophia Williams</p>
                        <p className="text-sm text-gray-600">English Essay</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">A</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="daily" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Progress Report</CardTitle>
                <CardDescription>Fill out daily reports for class activities and student progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="report-date">Date</Label>
                  <Input 
                    id="report-date"
                    type="date"
                    value={dailyReport.date}
                    onChange={(e) => setDailyReport({...dailyReport, date: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="activities">Daily Activities</Label>
                  <Textarea 
                    id="activities"
                    value={dailyReport.activities}
                    onChange={(e) => setDailyReport({...dailyReport, activities: e.target.value})}
                    placeholder="Describe the day's activities, lessons covered, and highlights"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="general-notes">General Notes</Label>
                  <Textarea 
                    id="general-notes"
                    value={dailyReport.generalNotes}
                    onChange={(e) => setDailyReport({...dailyReport, generalNotes: e.target.value})}
                    placeholder="Any additional observations about the class, student behavior, or important events"
                    rows={4}
                  />
                </div>

                <Button onClick={handleSaveDailyReport} className="w-full bg-school-blue hover:bg-blue-700 text-white">
                  <ClipboardList className="h-4 w-4 mr-2" />
                  Submit Daily Report
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Assignment Management</CardTitle>
                    <CardDescription>Track and manage class assignments</CardDescription>
                  </div>
                  <Button className="bg-school-gold hover:bg-yellow-500 text-black">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Assignment
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-school-navy">{assignment.title}</h4>
                        <p className="text-sm text-gray-600">{assignment.subject}</p>
                        <p className="text-xs text-gray-500">Due: {assignment.dueDate}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-school-navy">{assignment.submitted}/{assignment.total}</p>
                        <p className="text-xs text-gray-600">Submitted</p>
                        <div className="mt-2">
                          <Badge 
                            className={
                              assignment.submitted === assignment.total 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-orange-100 text-orange-800'
                            }
                          >
                            {assignment.submitted === assignment.total ? 'Complete' : 'Pending'}
                          </Badge>
                        </div>
                      </div>
                      <div className="ml-4">
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeacherPortal;
