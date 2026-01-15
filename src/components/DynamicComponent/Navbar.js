export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <div className="flex items-center gap-2 font-bold text-xl">
        <span className="text-blue-500">💧</span> Danvo
      </div>
      <div className="hidden md:flex gap-6 text-gray-600">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
      </div>
      <button className="bg-blue-400 text-white px-5 py-2 rounded-full">Sign Up</button>
    </nav>
  );
}