import React from 'react';

import Link from 'next/link';

import { Mail, Phone, Building, ChevronRight, LucideIcon } from 'lucide-react';

import SectionHeader from '../section-header';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description:
      "Have a question or want to say hi? Drop me an email:",
    contact: 'bethany@bethanyrobertson.com',
  },
];

const formFields = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    component: Input,
    required: true,
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    component: Input,
    required: true,
  },
  {
    id: 'message',
    label: 'Message',
    component: Textarea,
    required: true,

    props: {
      placeholder: 'Type Your Message...',
      rows: 4,
    },
  },
];
const Contact = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <SectionHeader
        icon={Mail}
        category="Reach Out"
        title="Get in Touch"
        description="We're here to help—reach out with any questions or feedback."
        className="border-none !pb-0"
      />

      <div className="container flex justify-between gap-10 py-12 max-md:flex-col">
        <form className="flex flex-1 flex-col gap-6">
          {formFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label className="text-sm font-normal" htmlFor={field.id}>
                {field.label}
              </Label>
              <field.component
                id={field.id}
                type={field.type}
                required={field.required}
                className="border-border bg-card"
                {...field.props}
              />
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="terms"
                className="text-sm font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the{' '}
                <Link href="/terms" className="underline">
                  Terms
                </Link>
              </Label>
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>

        <div className="grid flex-1 gap-6 self-start lg:grid-cols-2">
          {contactMethods.map((method, index) => (
            <ContactMethod key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ContactMethodProps {
  icon: LucideIcon;
  title: string;
  description: string;
  contact: React.ReactNode;
}

const ContactMethod = ({
  icon: Icon,
  title,
  description,
  contact,
}: ContactMethodProps) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <Icon className="size-5" />
      <h3 className="text-2xl tracking-[-0.96px]">{title}</h3>
    </div>
    <div className="space-y-2 tracking-[-0.32px]">
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="text-muted-foreground text-sm">{contact}</div>
    </div>
  </div>
);

export default Contact;
