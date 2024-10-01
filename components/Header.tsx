import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Phone size={20} />
          <span>+1 000-000-0000</span>
          <Mail size={20} />
          <span>xxx@mail.com</span>
        </div>
        <Link href="/get-free-quote">
          <Button variant="secondary">Schedule a Service</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;