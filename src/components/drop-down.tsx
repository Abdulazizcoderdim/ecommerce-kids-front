import { productМальчики, productСезоны } from '@/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import MaxWidth from './max-width';

const DropDown = ({ className }: any) => {
  return (
    <div className={className}>
      <ul className="flex items-center gap-10">
        <FlyoutLink className="cursor-pointer" FlyoutContent={Мальчики}>
          <li className="font-bold text-base flex items-center cursor-pointer">
            Мальчики <FaCaretDown className="w-3 h-3 mt-1" />
          </li>
        </FlyoutLink>
        <FlyoutLink className="cursor-pointer" FlyoutContent={Девочки}>
          <li className="font-bold text-base flex items-center cursor-pointer">
            Девочки <FaCaretDown className="w-3 h-3 mt-1" />
          </li>
        </FlyoutLink>
        <FlyoutLink className="cursor-pointer" FlyoutContent={Сезоны}>
          <li className="font-bold text-base flex items-center cursor-pointer">
            Сезоны <FaCaretDown className="w-3 h-3 mt-1" />
          </li>
        </FlyoutLink>
        <FlyoutLink className="cursor-pointer" FlyoutContent={Бренды}>
          <li className="font-bold text-base flex items-center cursor-pointer">
            Бренды <FaCaretDown className="w-3 h-3 mt-1" />
          </li>
        </FlyoutLink>
        <FlyoutLink className="cursor-pointer">
          <li className="font-bold text-base flex items-center cursor-pointer">
            Доставка
          </li>
        </FlyoutLink>
        <FlyoutLink className="cursor-pointer" FlyoutContent={Помощь}>
          <li className="font-bold text-base flex items-center cursor-pointer">
            Помощь <FaCaretDown className="w-3 h-3 mt-1" />
          </li>
        </FlyoutLink>
      </ul>
    </div>
  );
};

const FlyoutLink = ({ children, FlyoutContent, className }: any) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={cn('relative w-fit h-fit')}
    >
      {children}

      {showFlyout && (
        <div className="fixed left-0 right-0  bg-red-300 text-black w-screen z-10">
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
          <FlyoutContent />
        </div>
      )}
    </div>
  );
};

const Мальчики = () => {
  return (
    <MaxWidth className="bg-white shadow-xl">
      <div className="border-t py-5">
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="font-normal text-lg">ОДЕЖДА</h1>
            {productМальчики.ОДЕЖДА.map((item, i) => {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  <li className="cursor-pointer font-normal text-sm">
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-normal text-lg">ОБУВЬ</h1>
            {productМальчики.ОБУВЬ.map((item, i) => {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  <li className="cursor-pointer font-normal text-sm">
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-normal text-lg">АКССЕСУАРЫ</h1>
            {productМальчики.АКССЕСУАРЫ.map((item, i) => {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  <li className="cursor-pointer font-normal text-sm">
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-normal text-lg">АКТУАЛЬНОЕ</h1>
            {productМальчики.АКТУАЛЬНОЕ.map((item, i) => {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  <li className="cursor-pointer font-normal text-sm">
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-1 col-span-2">
            <div className="max-w-[420px] w-full">
              <img src="/dropdown.png" className="object-contain" alt="" />
            </div>
            <p className="font-bold text-xs">Наш выбор</p>
            <p className="font-normal text-lg">
              Одежда и обувь для зимних видов спорта
            </p>
            <FaArrowRightLong className="text-[#0CA145] cursor-pointer" />
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};
const Девочки = () => {
  return (
    <MaxWidth className="bg-white shadow-xl">
      <div className="border-t py-5">as12</div>
    </MaxWidth>
  );
};
const Сезоны = () => {
  return (
    <MaxWidth className="bg-white shadow-xl">
      <div className="border-t py-5">
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="font-normal text-lg">ДЕМИСЕЗОН</h1>
            {productСезоны.Демисезон.map((item, i) => {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  <li className="cursor-pointer font-normal text-sm">
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-normal text-lg">ЗИМА</h1>
            {productСезоны.Зима.map((item, i) => {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  <li className="cursor-pointer font-normal text-sm">
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-normal text-lg">ЛЕТО</h1>
            {productСезоны.Лето.map((item, i) => {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  <li className="cursor-pointer font-normal text-sm">
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-normal text-lg">КРУГЛЫЙ ГОД</h1>
            {productСезоны.Круглый_год.map((item, i) => {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  <li className="cursor-pointer font-normal text-sm">
                    {item.name}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-1 col-span-2">
            <div className="max-w-[420px] w-full">
              <img src="/235.png" className="object-contain" alt="" />
            </div>
            <p className="font-bold text-xs">Наш выбор</p>
            <p className="font-normal text-lg">
              Пора покупать зимнюю одежду и обувь
            </p>
            <FaArrowRightLong className="text-[#0CA145] cursor-pointer" />
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};
const Бренды = () => {
  return (
    <MaxWidth className="bg-white shadow-xl">
      <div className="border-t py-5">as213</div>
    </MaxWidth>
  );
};
const Помощь = () => {
  return (
    <MaxWidth className="bg-white shadow-xl">
      <div className="border-t py-5">as</div>
    </MaxWidth>
  );
};

export default DropDown;
