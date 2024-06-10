import WelcomePage from "./welcome/WelcomeComp";
import ClassroomComp from "./classroom/ClassroomComp";
import AboutComp from "./aboutcompany/AboutComp";
import ProvideComp from "./provide/ProvideComp";
import CarouselComp from "./incentivecarousel/CarouselComp";
import ServicesComp from "./popularservices/ServicesComp";
import EnquiryComp from "./enquiry/EnquiryComp";

function HomePage() {
    return(
        <div className=""> 
            <WelcomePage />
            <ClassroomComp />
            <AboutComp />
            <ProvideComp />
            <CarouselComp />
            <ServicesComp />
            <EnquiryComp />
        </div>
    )
}

export default HomePage;

