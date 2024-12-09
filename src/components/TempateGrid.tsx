import Image from "next/image";

export default function TemplateGrid() {
    const templates = [
      {
        src: "/images/about1.svg",
        alt: "This is burger",
        width: 330,
        height: 267,
        name: "Burger",
        currentPrice: "$2100",
        totalPrice: "$2500", // Discounted
      },
      {
        src: "/images/about2.svg",
        alt: "This is pizza",
        width: 330,
        height: 267,
        name: "Pizza",
        currentPrice: "$1500",
        totalPrice: null, // No discount
      },
      {
        src: "/images/about3.svg",
        alt: "This is pasta",
        width: 330,
        height: 267,
        name: "Pasta",
        currentPrice: "$1800",
        totalPrice: "$2000", // Discounted
      },
      {
        src: "/images/about1.svg",
        alt: "This is burger",
        width: 330,
        height: 267,
        name: "Burger",
        currentPrice: "$2100",
        totalPrice: "$2500", // Discounted
      },
      {
        src: "/images/about2.svg",
        alt: "This is pizza",
        width: 330,
        height: 267,
        name: "Pizza",
        currentPrice: "$1500",
        totalPrice: null, // No discount
      },
      {
        src: "/images/about3.svg",
        alt: "This is pasta",
        width: 330,
        height: 267,
        name: "Pasta",
        currentPrice: "$1800",
        totalPrice: "$2000", // Discounted
      },
      {
        src: "/images/about1.svg",
        alt: "This is burger",
        width: 330,
        height: 267,
        name: "Burger",
        currentPrice: "$2100",
        totalPrice: "$2500", // Discounted
      },
      {
        src: "/images/about2.svg",
        alt: "This is pizza",
        width: 330,
        height: 267,
        name: "Pizza",
        currentPrice: "$1500",
        totalPrice: null, // No discount
      },
      {
        src: "/images/about3.svg",
        alt: "This is pasta",
        width: 330,
        height: 267,
        name: "Pasta",
        currentPrice: "$1800",
        totalPrice: "$2000", // Discounted
      },
      {
        src: "/images/about1.svg",
        alt: "This is burger",
        width: 330,
        height: 267,
        name: "Burger",
        currentPrice: "$2100",
        totalPrice: "$2500", // Discounted
      },
      {
        src: "/images/about2.svg",
        alt: "This is pizza",
        width: 330,
        height: 267,
        name: "Pizza",
        currentPrice: "$1500",
        totalPrice: null, // No discount
      },
      {
        src: "/images/about3.svg",
        alt: "This is pasta",
        width: 330,
        height: 267,
        name: "Pasta",
        currentPrice: "$1800",
        totalPrice: "$2000", // Discounted
      },
      {
        src: "/images/about1.svg",
        alt: "This is burger",
        width: 330,
        height: 267,
        name: "Burger",
        currentPrice: "$2100",
        totalPrice: "$2500", // Discounted
      },
      {
        src: "/images/about2.svg",
        alt: "This is pizza",
        width: 330,
        height: 267,
        name: "Pizza",
        currentPrice: "$1500",
        totalPrice: null, // No discount
      },
      {
        src: "/images/about3.svg",
        alt: "This is pasta",
        width: 330,
        height: 267,
        name: "Pasta",
        currentPrice: "$1800",
        totalPrice: "$2000", // Discounted
      },
      
      
    ];
  
    return (
      <div className="flex  justify-center mt-5 ">
        <div className="grid grid-cols-3 gap-2 ">
          {templates.map((template, index) => (
            <div
              key={index}
              className="w-[330px] h-[312px] flex flex-col items-start gap-2 mb-4"
            >
              {/* Image */}
              <Image
                src={template.src}
                alt={template.alt}
                width={template.width}
                height={template.height}
                className="w-[330px] h-[267px] object-cover"
              />
  
              {/* Name */}
              <p className="text-[#333333] text-lg font-medium">{template.name}</p>
  
              {/* Price Section */}
              <div className="text-sm text-[#666666]">
                {template.totalPrice ? (
                  <>
                    {/* Discounted Template */}
                    <span className="font-bold text-prColor">
                      {template.currentPrice}
                    </span>
                    <span className="line-through ml-2">{template.totalPrice}</span>
                  </>
                ) : (
                  <>
                    {/* No Discount */}
                    <span className="font-bold text-prColor">
                      {template.currentPrice}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  