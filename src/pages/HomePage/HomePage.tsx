import { Helmet } from 'react-helmet-async';
import { HematoRunMainTitle } from '../../components/HematoRunMainTitle/HematoRunMainTitle';
import { HematoRunRoute } from '../../components/HematoRunRoute/HematoRunRoute';
import { HematoRunInfo } from '../../components/HematoRunInfo/HematoRunInfo';
import { HematoRunWhyIsItWorth } from '../../components/HematoRunWhyIsItWorth/HematoRunWhyIsItWorth';
import HematoFAQ from '../../components/HematoFAQ/HematoFAQ';
import GalleryCarousel from '../../components/GalleryCarousel/GalleryCarousel';
import Sponsors from '../../components/Sponsors/Sponsors';
import { Timetable } from '../../components/Timetable/Timetable';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Haemato-run</title>
      </Helmet>
      <HematoRunMainTitle />
      <HematoRunRoute />
      <HematoRunInfo />
      <GalleryCarousel />
      <Timetable />
      <HematoRunWhyIsItWorth />
      <Sponsors />
      <HematoFAQ />
    </div>
  );
}
