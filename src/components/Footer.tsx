import logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-20">
      {/* Top Section */}
      <div className="container mx-auto  py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div>
            <a href="/" className="shrink-0">
              <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
            </a>
          </div>

          <p className="mt-3 text-gray-500 text-sm leading-7 max-w-sm">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-5 mt-4">
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-pink-500 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm text-gray-700 hover:text-pink-500 transition"
            >
              Twitter
            </a>

            <a
              href="#"
              className="text-sm text-gray-700 hover:text-pink-500 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-5 uppercase text-sm">
            Product
          </h3>

          <div className="space-y-3">
            <a href="#" className="block text-gray-500 hover:text-pink-500">
              Home
            </a>

            <a href="#" className="block text-gray-500 hover:text-pink-500">
              Technologies
            </a>

            <a href="#" className="block text-gray-500 hover:text-pink-500">
              Projects
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-5 uppercase text-sm">
            Company
          </h3>

          <div className="space-y-3">
            <a href="#" className="block text-gray-500 hover:text-pink-500">
              About
            </a>

            <a href="#" className="block text-gray-500 hover:text-pink-500">
              Contact
            </a>

            <a href="#" className="block text-gray-500 hover:text-pink-500">
              Careers
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-5 uppercase text-sm">
            Legal
          </h3>

          <div className="space-y-3">
            <a href="#" className="block text-gray-500 hover:text-pink-500">
              Privacy Policy
            </a>

            <a href="#" className="block text-gray-500 hover:text-pink-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-5 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="text-sm text-gray-400 hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
