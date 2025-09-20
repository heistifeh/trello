"use client";
export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trello className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            Trello Clone
          </span>
        </div>
      </div>
    </header>
  );
}
