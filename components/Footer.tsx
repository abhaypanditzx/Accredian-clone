import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.webp";
import { Container } from "./Container";
import { Button } from "./Button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-14 pb-8">
      <Container>

        {/* Top */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}
          <div>
            <Image
              src={logo}
              alt="Accredian"
              className="w-44"
            />

            <div className="mt-8 flex gap-4 text-slate-700">
              <Link href="#"><FaFacebookF size={26} /></Link>
              <Link href="#"><FaLinkedinIn size={26} /></Link>
              <Link href="#"><FaTwitter size={26} /></Link>
              <Link href="#"><FaInstagram size={26} /></Link>
              <Link href="#"><FaYoutube size={26} /></Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center lg:text-right">
            <Button>
              Enquire Now
            </Button>

            <p className="mt-3 text-lg text-slate-700">
              Speak with our Advisor
            </p>
          </div>

        </div>

        {/* Divider */}

        <div className="my-12 border-t border-slate-300"></div>

        {/* Bottom */}

        <div className="grid gap-12 md:grid-cols-2">

          {/* Links */}

          <div>
            <h3 className="mb-5 text-3xl font-bold">
              Accredian
            </h3>

            <div className="space-y-4 text-xl text-slate-700">
              <Link href="#">About</Link>

              <br />

              <Link href="#">Blog</Link>

              <br />

              <Link href="#">Why Accredian</Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-3xl font-bold">
              Contact Us
            </h3>

            <div className="space-y-5 text-xl text-slate-700">
              <p>
                Email us:{" "}
                <span className="text-blue-600">
                  enterprise@accredian.com
                </span>
              </p>

              <p>
                Office Address: 4th Floor, 250, Phase IV,
                Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-300 pt-8 text-center text-lg text-slate-600">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>

      </Container>
    </footer>
  );
}