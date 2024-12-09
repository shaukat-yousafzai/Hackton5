import Container from "@/components/Container";
import CategoryFilters from "@/components/One";
import TemplateGrid from "@/components/TempateGrid";

export default function Shop() {
  return (
   <Container  className="mt-20">
     <div className="flex  gap-6">
      <div className="w-[322px] flex items-center gap-2">
        {/* Label */}
        <label className="text-[#333333] font-medium whitespace-nowrap">Sort By :</label>

        {/* Input Box */}
        <div className="relative w-full">
          <select
            className="w-full h-[40px] text-[#E0E0E0] bg-white border border-[#E0E0E0] text-sm px-4 appearance-none outline-none"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>

          {/* Down Arrow Icon */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#E0E0E0]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[322px] flex items-center gap-2">
        {/* Label */}
        <label className="text-[#333333] font-medium whitespace-nowrap">Show :</label>

        {/* Input Box */}
        <div className="relative w-full">
          <select
            className="w-full h-[40px] text-[#E0E0E0] bg-white border border-[#E0E0E0] text-sm px-4 appearance-none outline-none"
          >
            <option value="newest">By defualt</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>

          {/* Down Arrow Icon */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#E0E0E0]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-2">
      <TemplateGrid/>
      <CategoryFilters/>
    </div>
   </Container>
  );
}
