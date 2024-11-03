import Image from 'next/image';

type MovieRowProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({index}: MovieCardProps) => (
  <div className='group relative h-28 min-w-[200px] cursor-pointer transition-transform duration-200 rounded ease-in transform bg-gradient-to-t from-transparent to-black hover:scale-110 hover:z-50 md:h-36 md:min-w-[260px] lg:h-40 lg:min-w-[300px] md:hover:scale-110'>
    <Image src={`/banner/item_${index}.png`} fill={true} alt='' className='rounded' />
  </div>
)

export function MovieRow({ sectionTitle }: MovieRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-6 inline-flex items-center text-2xl p-6 font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='flex space-x-4 overflow-x-scroll scrollbar-hide'>
        {[1, 2, 3, 4, 5].map((index) => (
          <MovieCard key={index} index={index}/>
        ))}
      </div>
    </div>
  );
}
