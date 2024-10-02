import SectionAboutUs from "../components/About/SectionAboutUs";
import SectionPlace from "../components/About/SectionPlace";
import SectionMap from "../components/About/SectionMap";

export default function Sobre() {
    return (
        <main className="mt-[5%] w-full">
            <SectionAboutUs />
            <SectionPlace />
            <SectionMap />
        </main>
    );
}