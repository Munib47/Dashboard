import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Prog from "../components/Prog";
import Courses from "../components/Courses";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <LeftSidebar />

      {/* Main content component */}
      <div className="content-wrapper">
        <div className="content-header">
          <Container fluid>
            <Row className="mb-2">
              <Col className="bg-danger rounded pt-4 pl-5 pb-4">
                <h6 className="m-0">Welcome back Anna!</h6>
                <p className="m-0">You've learned 80% of your goal this week!</p>
                <p className="m-0">Keep it up and improve your results!</p>
              </Col>
             
            </Row>
            <Prog />
            
            <Courses />
          </Container>
        </div>

      </div>

      <RightSidebar />
      <Footer />
    </>
  );
};

export default Dashboard;
