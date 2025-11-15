interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="sticky top-0 bg-[#070738] z-50">
      <div className="container flex mx-auto justify-between text-white py-5">
        <button
          onClick={() => window.location.reload()}
          className="flex hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="tracking-tight text-4xl font-extrabold">Rostr.</span>
        </button>

        <div className="flex gap-10 text-lg font-medium">
          <button
            onClick={() => onNavigate('home')}
            className="hover:opacity-80 transition-all cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="hover:opacity-80 transition-all cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('')}
            className="hover:opacity-80 transition-all cursor-pointer"
          >
            Log In
          </button>
          <button
            onClick={() => onNavigate('')}
            className="px-6 py-2 rounded-full bg-white text-[#070738] hover:opacity-80 transition-all duration-200 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
