function Navbar() {
  return (
    <div className="border-b-1px border-b-black bg-transparent">
      <div className="container h-navbar-height flex items-center justify-between">
        <img src="images/logo.png" className="w-[120px]" alt="" />

        <div className="flex items-center space-x-12">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <a href="#">Team</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
