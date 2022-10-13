import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Courses from "../components/Courses";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <LeftSidebar />

      {/* Main content component */}
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12 bg-danger rounded pt-4 pl-5 pb-4">
                <h6 className="m-0">Welcome back Anna!</h6>
                <p className="m-0">You've learned 80% of your goal this week!</p>
                <p className="m-0">Keep it up and improve your results!</p>
              </div>
             
            </div>
            <Table />
            
            <Courses />
          </div>
        </div>

      </div>

      <RightSidebar />
      <Footer />
    </>
  );
};

export default Dashboard;
