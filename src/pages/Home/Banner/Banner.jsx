import Container from "../../../components/Shared/Container";
import BannerImg from "./BannerImg";
import BannerText from "./BannerText";

const Banner = () => {
    return (
       <div className="bg-[#feeddc]">
         <Container>
            <div className="lg:flex justify-center items-center gap-6 py-4">
            <div className="w-full lg:w-1/2">
                <BannerText/>
            </div>
            <div className="w-full lg:w-1/2">
                <BannerImg/>
            </div>
            </div>
        </Container>
       </div>
    );
};

export default Banner;