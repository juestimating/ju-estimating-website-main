"use client"

import { useEffect } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"
import { toast } from "@/components/ui/use-toast"
import { submitNewsletterEmail } from "@/app/actions"

export default function Footer() {
  const [state, formAction, isPending] = useActionState(submitNewsletterEmail, null)

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "Subscribed!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      })
    }
  }, [state])

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">{siteConfig.company.name}</h3>
            <p className="text-slate-300 mb-6">
              Precision estimating services for construction professionals. Trusted by contractors nationwide for over
              15 years.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="#" className="hover:text-white transition-colors">Commercial Estimating</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Residential Estimating</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Industrial Projects</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">MEP Estimating</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Bid Preparation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Value Engineering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-300 mb-4">Stay updated with industry insights and company news.</p>
            <form action={formAction} className="flex flex-col space-y-2 mb-4">
              <div className="flex space-x-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-slate-800 border-slate-600 text-white"
                />
                <Button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
                  disabled={isPending}
                >
                  {isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>

              {state?.message && (
                <p className={`text-sm mt-1 ${state.success ? "text-green-400" : "text-red-400"}`}>
                  {state.message}
                </p>
              )}
            </form>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {siteConfig.phoneDisplay}
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {siteConfig.email}
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed">
                  <strong>Primary Address:</strong>
                  <br />
                  {siteConfig.address.primary.street}
                  <br />
                  {siteConfig.address.primary.suite && (
                    <>
                      {siteConfig.address.primary.suite}
                      <br />
                    </>
                  )}
                  {siteConfig.address.primary.city}
                  <br />
                  <br />
                  <strong>Secondary Address:</strong>
                  <br />
                  {siteConfig.address.secondary.street}
                  <br />
                  {siteConfig.address.secondary.suite && (
                    <>
                      {siteConfig.address.secondary.suite}
                      <br />
                    </>
                  )}
                  {siteConfig.address.secondary.city}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 {siteConfig.company.name}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
