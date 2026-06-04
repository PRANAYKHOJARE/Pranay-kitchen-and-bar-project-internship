import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg">
                P
              </div>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                  Pranay's
                </h3>

                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Kitchen & Bar
                </p>
              </div>
            </div>

            <p className="mt-6 text-base md:text-lg leading-8 text-muted-foreground">
              Experience handcrafted cuisine, premium beverages, and unforgettable dining moments
              with friends and family.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="mb-5 text-xl md:text-2xl font-semibold text-foreground">Visit Us</h4>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary shrink-0" />
                <span>
                  128 Howard Street
                  <br />
                  San Francisco, CA
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 93584 52258</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>hello@pranaykitchen.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="mb-5 text-xl md:text-2xl font-semibold text-foreground">
              Opening Hours
            </h4>

            <div className="space-y-3 text-base md:text-lg text-muted-foreground">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Tuesday – Sunday</span>
              </div>

              <p>Lunch: 12:00 PM – 3:00 PM</p>
              <p>Dinner: 5:00 PM – 11:00 PM</p>
              <p>Monday: Closed</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-5 text-xl md:text-2xl font-semibold text-foreground">Follow Us</h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full border border-border p-3 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-full border border-border p-3 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-full border border-border p-3 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-6 text-base md:text-lg leading-7 text-muted-foreground">
              Follow us for new menu launches, exclusive offers, chef specials, and upcoming events.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm md:text-base text-muted-foreground md:flex-row md:px-12">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Pranay's Kitchen & Bar. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="transition hover:text-foreground">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-foreground">
              Terms of Service
            </a>

            <a href="#" className="transition hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
