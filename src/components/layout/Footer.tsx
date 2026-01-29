import React from "react";
import {
  Rocket,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t py-20 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-start justify-start gap-2 group">
            <img
              src="/systecweb2.png"
              alt="Systec Web"
              className="w-full left-10 h-10 rounded-xl object-cover transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold font-serif tracking-tight text-foreground"></span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Crafting custom software solutions that empower businesses to shine
            in the digital landscape.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-background border hover:text-primary transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-background border hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-background border hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Custom Software
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Business Systems
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Cloud Solutions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-primary transition-colors">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              systecweblive@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              +94 76-8010697 <br />
              +94 77-7774567
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-primary" />
              Online Market-Place
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Systec Web. All rights reserved.
      </div>
    </footer>
  );
};
