import logo from './../../assets/logo/at_logo.png';

export function Header() {
  return (
    <header className="w-full flex justify-center">
      <div className="w-full max-w-[1500px] py-6 px-4 md:px-2 flex justify-between items-center text-green-900">
        <img src={logo} alt="Logo for Anette Therese" className="h-12" />
        <p>This is the header</p>
      </div>
    </header>
  );
}
