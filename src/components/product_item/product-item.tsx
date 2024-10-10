import MaxWidth from '../max-width';
import { ProductType } from '../types';

const ProductItem = ({ data }: { data: ProductType }) => {
  return (
    <MaxWidth className="bg-white p-3 text-center max-w-[342px] min-h-[400px] w-full mt-5">
      <div className="max-w-[310px] w-full max-h-[400px]">
        <img
          src={`${import.meta.env.VITE_PUBLIC_IMG_URL}/${data.imageUrl}`}
          alt=""
        />
      </div>
      <p className="uppercase text-[#99969A] font-normal text-xs">
        {data.name}
      </p>
      {/* <h1 className="font-black text-sm text-[#221A25]">Didriksons</h1> */}
      <p className="font-normal text-base text-[#221A25]/80">
        {data.description}
      </p>
      <p className="font-normal text-lg">{data.price} ₽</p>
      <div className="flex items-center gap-2 justify-center">
        <div className="py-1 text-xs font-bold px-1 bg-[#F7F8F7] text-[#0CA145] cursor-pointer">
          80
        </div>
        <div className="py-1 text-xs font-bold px-1 bg-[#F7F8F7] text-[#0CA145] cursor-pointer">
          90
        </div>
        <div className="py-1 text-xs font-bold px-1 bg-[#F7F8F7] text-[#0CA145] cursor-pointer">
          100
        </div>
        <div className="py-1 text-xs font-bold px-1 bg-[#F7F8F7] text-[#0CA145] cursor-pointer">
          110
        </div>
        <div className="py-1 text-xs font-bold px-1 bg-[#F7F8F7] text-[#0CA145] cursor-pointer">
          120
        </div>
        <div className="py-1 text-xs font-bold px-1 bg-[#F7F8F7] text-[#0CA145] cursor-pointer">
          130
        </div>
        <div className="py-1 text-xs font-bold px-1 bg-[#F7F8F7] text-[#0CA145] cursor-pointer">
          140
        </div>
      </div>
    </MaxWidth>
  );
};

export default ProductItem;
