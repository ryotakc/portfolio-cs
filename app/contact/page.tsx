import PageTitle from "@/components/page-title";
import { ContactDock } from "./components/contact-dock";
import { FlipWords } from "@/components/ui/flip-words";


export default function Contact() {
    const words = ["Mail", "Instagram", "LinkedIn", "and More"];
    return (
        <div className="container">
            <div className="h-[20rem] pt-20">
                <PageTitle>
                    <div className="font-bold mb-2 lg:text-6xl text-4xl mx-auto text-neutral-600 dark:text-neutral-400">
                        Contact with <span> </span>
                        <br className="sm:hidden"/>
                        <FlipWords words={words} className="text-primary/50" /> <br />
                    </div> 
                </PageTitle>
                <ContactDock />            
            </div>

        </div>
    );
}
