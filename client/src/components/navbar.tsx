interface NavBarProps {
  title: String;
}

export const NavBar = ({ title }: NavBarProps) => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-green-600 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="/"
          >
            {title}
          </a>
        </div>
      </div>
    </nav>
  );
};
