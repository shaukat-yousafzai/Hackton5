import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


export default function CategoryFilters() {
  const categories = [
    "Sandwich",
    "Burger",
    "Chicken",
    "Drink",
    "Pizza",
    "Thi",
    "Non Veg",
    "Uncategorized",
  ];

  return (
    <div className="w-[312px] flex flex-col items-start ">
      <div className="mx-auto">
      <div className="relative w-[248px] h-[48px] mb-2">
          <div  className="absolute right-0  top-1/2 flex items-center justify-center transform -translate-y-1/2  bg-prColor text-sm text-white w-12 h-12" >
          <MagnifyingGlassIcon className="w-6"/>
          </div>
            
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full pl-6 pr-6 text-white bg-transparent "
            />
          </div>
      {/* Heading */}
      <div >
      <h2 className="text-lg font-bold text-[#333333] mb-4">Category</h2>

{/* Checkbox List */}
<div className="flex flex-col gap-2">
  {categories.map((category, index) => (
    <label key={index} className="flex items-start gap-2 text-sm text-[#666666] font-normal">
      <input type="checkbox" className="h-4 w-4 accent-[#333333]" />
      {category}
    </label>
  ))}
</div>
      </div >

        <Image
        src={"/images/Banner.svg"}
        alt="b"
        width={248}
        height={286}
        className="object-cover mt-5"
        />
         <Image
        src={"/images/Filter.svg"}
        alt="b"
        width={248}
        height={87}
        className="object-cover mt-5"
        />
           <Image
        src={"/images/LatestProduct.svg"}
        alt="b"
        width={252}
        height={368}
        className="object-cover mt-5"
        />
          <Image
        src={"/images/ProductTag.png"}
        alt="b"
        width={252}
        height={368}
        className="object-cover mt-5"
        />


      </div>
 
     
    </div>
  );
}
