import { AskFitGreen } from "./home/AskFitGreen";
import { BowlThatBreakRules } from "./home/BowlThatBreakRules";
import { ContactUs } from "./home/ContactUs";
import { EatingWellHasNeverBeenMoreImportant } from "./home/EatingWellHasNeverBeenMoreImportant";
import { FindOurStore } from "./home/FindOurStore";
import { HeroPage } from "./home/HeroPage";
import { JoinOurInnerCircle } from "./home/JoinOurInnerCircle";
import { LunchOffer } from "./home/LunchOffer";
import { OurBowls } from "./home/OurBowls";

export default function Home() {
  return (
    <main className="home">
      <HeroPage/>
      <LunchOffer/>
      <BowlThatBreakRules/>
      <OurBowls/>
      <EatingWellHasNeverBeenMoreImportant/>
      <JoinOurInnerCircle/>
      <FindOurStore/>
      <AskFitGreen/>
      <ContactUs/>
    </main>
  );
}
