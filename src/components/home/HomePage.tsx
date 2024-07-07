import WelcomePage from "./welcome/WelcomeComp";
import ClassroomComp from "./classroom/ClassroomComp";
import AboutComp from "./aboutcompany/AboutComp";
import ProvideComp from "./provide/ProvideComp";
import CarouselComp from "./incentivecarousel/CarouselComp";
import ServicesComp from "./popularservices/ServicesComp";
import EnquiryComp from "./enquiry/EnquiryComp";
import BestSolutionsComp from "./bestsolutions/BestSolutionsComp";
import TechRow from "../ui/rowcomp/TechRow";
import TeamComp from "./team/TeamComp";
import TestimonialsComp from "./testimonials/TestimonialsComp";
import NewsComp from "./news/NewsComp";

function HomePage() {
    return(
        <div className="max-w-screen"> 
            <WelcomePage />
            <ClassroomComp />
            <AboutComp />
            <ProvideComp />
            <BestSolutionsComp />
            <TechRow />
            <TeamComp />
            <CarouselComp />
            <ServicesComp />
            <TestimonialsComp />
            <NewsComp />
            <EnquiryComp />
        </div>
    )
}

export default HomePage;

