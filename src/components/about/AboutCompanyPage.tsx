import AboutComp from "../about/aboutcompany/AboutComp";
import TechRow from "../ui/rowcomp/TechRow";
import CeoComp from "./ceo/CeoComp";
import PartnersComp from "./partners/PartnersComp";
import TestimonialsComp from "./testimonials/TestimonialsComp";
import WiatechComp from "./wiatech/WiatechComp";
import WiatechCardsComp from "./wiatechcards/WiaTechCardsComp";

function AboutCompanyPage() {
    return(
        <div>

            <AboutComp />
            <WiatechComp />
            <WiatechCardsComp />
            <CeoComp />
            <TechRow />
            <TestimonialsComp />
            <PartnersComp />

        </div>
    )
}

export default AboutCompanyPage;