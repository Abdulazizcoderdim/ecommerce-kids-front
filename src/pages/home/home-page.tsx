import MaxWidth from '@/components/max-width';
import { SwiperComponent } from '@/components/swiper/swiper';

const HomePage = () => {
  return (
    <div>
      <SwiperComponent />
      <MaxWidth className="flex gap-10 flex-wrap md:justify-center py-8">
        <img src="/l1.png" width={100} height={45} alt="" />
        <img src="/l2.png" width={100} height={45} alt="" />
        <img src="/l3.png" width={100} height={45} alt="" />
        <img src="/l4.png" width={100} height={45} alt="" />
        <img src="/l5.png" width={100} height={45} alt="" />
        <img src="/l6.png" width={100} height={45} alt="" />
        <img src="/l7.png" width={100} height={45} alt="" />
        <img src="/l8.png" width={100} height={45} alt="" />
      </MaxWidth>
    </div>
  );
};

export default HomePage;
