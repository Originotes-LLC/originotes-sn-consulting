"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { Menu, PhoneCallIcon, Search, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/originotes-logo.svg";

const navigation = {
  categories: [
    {
      id: "services",
      name: "Services",
      sections: [
        {
          id: "consulting",
          name: "Consulting & Design",
          items: [
            { name: "Advisory Services", href: "#" },
            { name: "Change Enablement", href: "#" },
            { name: "Design Services", href: "#" },
          ],
        },
        {
          id: "delivery",
          name: "Delivery & Support",
          items: [
            { name: "Application Development", href: "#" },
            { name: "Implementations", href: "#" },
            { name: "Integrations", href: "#" },
            { name: "Managed Support Services", href: "#" },
            { name: "Remote Services", href: "#" },
          ],
        },
        {
          id: "enablement",
          name: "Enablement",
          items: [
            { name: "Cloud Hosting", href: "#" },
            { name: "Training", href: "#" },
          ],
        },
      ],
    },
    {
      id: "solutions",
      name: "Solutions",
      sections: [
        {
          id: "platform",
          name: "Platform",
          items: [
            { name: "App Engine", href: "#" },
            { name: "Service Portal", href: "#" },
            { name: "Strategic Portfolio Management", href: "#" },
          ],
        },
        {
          id: "operations",
          name: "Operations",
          items: [
            { name: "Customer Service Management", href: "#" },
            { name: "HR Service Delivery", href: "#" },
            { name: "IT Asset Management", href: "#" },
            { name: "IT Operations Management", href: "#" },
            { name: "IT Service Management", href: "#" },
          ],
        },
        {
          id: "resilience",
          name: "Risk & Security",
          items: [
            { name: "Governance, Risk, and Compliance", href: "#" },
            { name: "Security Operations", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Industries", href: "#" },
    { name: "Resources", href: "#" },
  ],
};

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-brand-primary">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-black pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-surface"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-surface">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-surface data-selected:border-surface data-selected:text-surface"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pt-10 pb-8"
                  >
                    <div className="grid grid-cols-2 gap-x-4"></div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-surface"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 block p-2 text-surface"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-surface px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-surface"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <p className="py-8 flex h-10 items-center justify-center bg-surface px-4 text-sm font-medium text-brand-primary sm:px-6 lg:px-8">
          20% off on your first project. <br />
          It’s like happy hour, but for your ServiceNow.
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-surface">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md p-2 text-surface lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Menu aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <span className="sr-only">Originotes LLC</span>
                  <Image
                    alt="Originotes LLC logo"
                    src={logo}
                    className="h-12 w-auto"
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-surface transition-colors duration-200 ease-out hover:text-surface data-open:text-surface">
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-surface"
                          />
                        </PopoverButton>
                      </div>
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-black text-sm text-surface transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-black shadow-sm"
                        />
                        <div className="relative bg-black">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-surface"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-surface"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-surface hover:text-surface"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-surface hover:text-surface">
                    <span className="sr-only">Search</span>
                    <Search aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Contact Us */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a
                    href="tel:+18444224360"
                    className="group -m-2 flex items-center p-2"
                  >
                    <PhoneCallIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-surface group-hover:text-surface"
                    />
                    <span className="sr-only">
                      Call Originotes ServiceNow Consulting at +1 (844) 422-4360
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
