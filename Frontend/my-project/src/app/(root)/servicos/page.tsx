import SectionBanner from "../../components/Services/SectionBanner";
import SectionServices from "../../components/Services/SectionServices";
import SectionReviews from "../../components/Services/SectionReviews";

export default function Servicos() {
    return (
        <main className="w-full">
            <SectionBanner />
            <SectionServices />
            <SectionReviews />
        </main>
    );
}