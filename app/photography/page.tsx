import HoverBorderGradient from "@/components/hover-border-gradient";
import PageTitle from "@/components/page-title";
import { FlipWords } from "@/components/ui/flip-words";
import { SiInstagram } from "@icons-pack/react-simple-icons";


export default function Photography() {
    const words = ["Photography", "Retouch", "Editing"];
    return (
        <div className="container">
            <div className="h-[20rem] mt-20 ">
                <PageTitle>
                <div className="font-bold mb-2 lg:text-6xl text-4xl mx-auto text-neutral-600 dark:text-neutral-400">
                I Love <span> </span>
                <br className="sm:hidden"/>
                <FlipWords words={words} className="text-primary/50" /> <br />
                </div>    
                <p className="text-neutral-600 dark:text-neutral-400 py-4">
                    Photography is an art form that captures the world around me, preserving moments in time forever. Our service offers professional skills and creative perspectives to beautifully document your precious moments.
                </p>
                <div className="flex space-x-3 py-5">
                    <HoverBorderGradient link="../contact">
                    <SiInstagram />
                    <span>Instagram</span>
                    </HoverBorderGradient>
                </div>  
                </PageTitle>
            </div> 
        </div>
    );
}
