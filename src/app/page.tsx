import HeroBlock from '../app/components/landing/HeroBlock';
import FAQBlock from '../app/components/landing/FAQBlock';
import ContactBlock from '../app/components/landing/ContactBlock';

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroBlock />
      <FAQBlock />
      <ContactBlock />
    </div>
  );
}
