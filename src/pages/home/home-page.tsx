import MaxWidth from '@/components/max-width';
import ProductItem from '@/components/product_item/product-item';
import { getProduct } from '@/components/services/product';
import { SwiperComponent } from '@/components/swiper/swiper';
import { ProductType } from '@/components/types';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const HomePage = () => {
  const [productUse, setProductUse] = useState<
    'Новинки' | 'популярное' | 'распродажа' | 'акции'
  >('Новинки');

  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: getProduct,
  });

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
      <div className="">
        <div className="flex uppercase items-center justify-center gap-5">
          <p
            onClick={() => setProductUse('Новинки')}
            className={cn(
              'font-normal text-base text-[#221A25] cursor-pointer',
              productUse === 'Новинки' && 'border-b-2 border-[#0CA145]'
            )}
          >
            Новинки
          </p>
          <p
            onClick={() => setProductUse('популярное')}
            className={cn(
              'font-normal text-base text-[#221A25] cursor-pointer',
              productUse === 'популярное' && 'border-b-2 border-[#0CA145]'
            )}
          >
            популярное
          </p>
          <p
            onClick={() => setProductUse('распродажа')}
            className={cn(
              'font-normal text-base text-[#221A25] cursor-pointer',
              productUse === 'распродажа' && 'border-b-2 border-[#0CA145]'
            )}
          >
            распродажа
          </p>
          <p
            onClick={() => setProductUse('акции')}
            className={cn(
              'font-normal text-base text-[#221A25] cursor-pointer',
              productUse === 'акции' && 'border-b-2 border-[#0CA145]'
            )}
          >
            акции
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {data?.map((product: ProductType, i) => {
            return isPending ? (
              <div>Loading...</div>
            ) : (
              <ProductItem key={i} data={product} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
