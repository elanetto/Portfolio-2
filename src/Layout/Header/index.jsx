import star from './../../../public/star.png';


export function Header() {

  return (
    <header className="w-full bg-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between relative text-white">
        <img src={star} alt="star" className='h-20 w-20' />
        <p>This is the header</p>
          
      </div>
    </header>
  );
}