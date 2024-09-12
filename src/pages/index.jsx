import HomeSectionComponent from "@/components/HomeSectionComponent";
import Layout from "./layout";
import AboutSectionComponent from "@/components/AboutSectionComponent";
import SkillsSectionComponent from "@/components/SkillsSectionComponent";
import EducationsSectionComponent from "@/components/EducationsSectionComponent";
import PortfolioComponent from "@/components/PortfolioComponent";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    
      <Layout>
        <HomeSectionComponent />
        <AboutSectionComponent />
        <SkillsSectionComponent />
        <EducationsSectionComponent />
        <PortfolioComponent />
        <ContactSection />
      </Layout>
  );
}
