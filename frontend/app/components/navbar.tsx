interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="sticky top-0 bg-[#121212] z-50">
      <div className="container flex mx-auto justify-between text-white py-4">
        <button
          onClick={() => window.location.reload()}
          className="flex hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="tracking-tight text-4xl font-extrabold">Rostr.</span>
        </button>

        <div className="flex gap-10 text-lg">
          <button
            onClick={() => onNavigate('home')}
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
