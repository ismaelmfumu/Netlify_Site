function Navbar() {
  const navItems = [
    {label: 'Home', to: 'home'},
    {label: 'About', to: 'about'},
    {label: 'Skills', to: 'skills'},
    {label: 'Projects', to: 'projects'},
    {label: 'Experience', to: 'experience'},
    {label: 'Education', to: 'education'},
    {label: 'Contact', to: 'contact'},
  ];

  return (
    <nav className="bg-primary shadow-md text-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        <span className="font-bold text-lg">Ismael Mfumu</span>
        <ul className="flex space-x-4">
          {navItems.map(item => (
            <li key={item.to}>
              <a href={`#${item.to}`} className="hover:text-blue-100 transition">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
