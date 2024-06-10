import BusinessComp from "./business/BusinessComp";
import ConsultationsComp from "./consultation/ConsultationComp";
import FeaturesComp from "./features/FeaturesComp";
import PricingComp from "./pricing/PricingComp";
import ServicesMainComp from "./servicesmain/ServicesMainComp";

function ServicesPage() {
    return(
        <div>
            <ServicesMainComp />
            <FeaturesComp />
            <BusinessComp />
            <PricingComp />
            <ConsultationsComp />

        </div>
    )
}

export default ServicesPage;