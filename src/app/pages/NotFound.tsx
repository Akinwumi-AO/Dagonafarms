import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-9xl text-green-700 mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl text-green-900 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              <Home className="mr-2" size={20} />
              Go to Homepage
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="border-green-700 text-green-700 hover:bg-green-50"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
