import Image from 'next/image';

export default function AboutHomeImage() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[660px] mx-auto">
      {/* Image One */}
      <div className="w-[660px] h-[330px]">
        <Image
          src="/images/about1.svg"
          alt="Image One"
          width={660}
          height={330}
          className="rounded-[6px] object-cover"
        />
      </div>

      {/* Images Two and Three */}
      <div className="flex gap-4">
        <div className="w-[322px] h-[194px]">
          <Image
            src="/images/about2.svg"
            alt="Image Two"
            width={322}
            height={194}
            className="rounded-[6px] object-cover"
          />
        </div>
        <div className="w-[322px] h-[194px]">
          <Image
            src="/images/about3.svg"
            alt="Image Three"
            width={322}
            height={194}
            className="rounded-[6px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
