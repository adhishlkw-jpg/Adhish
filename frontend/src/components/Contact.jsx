import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Send, Loader2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { SectionHeading } from './SectionHeading';
import { CONTACT } from '../lib/data';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill name, email and message.');
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success('Message sent', { description: 'Adhish will get back to you shortly.' });
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      toast.error('Could not send', { description: err?.response?.data?.detail || 'Try email or LinkedIn instead.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeading
              overline="Contact"
              title="Let's build something category-defining."
              subtitle="Whether it's positioning, a launch, or a full GTM build — happy to jam."
              testId="contact-heading"
            />

            <div className="mt-10 space-y-4">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:-translate-y-0.5 transition"
              >
                <div className="h-11 w-11 rounded-xl brand-gradient flex items-center justify-center text-white">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Connect on LinkedIn</div>
                  <div className="text-sm text-muted-foreground">linkedin.com/in/adhish-kacker</div>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                data-testid="contact-email"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:-translate-y-0.5 transition"
              >
                <div className="h-11 w-11 rounded-xl brand-gradient flex items-center justify-center text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">{CONTACT.email}</div>
                </div>
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-7 rounded-3xl border border-border bg-card p-8 lg:p-10"
            data-testid="contact-form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground">Name</Label>
                <Input id="name" data-testid="contact-name" value={form.name} onChange={onChange('name')} placeholder="Your full name" className="mt-2 h-12 rounded-xl" />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground">Email</Label>
                <Input id="email" type="email" data-testid="contact-email-input" value={form.email} onChange={onChange('email')} placeholder="you@company.com" className="mt-2 h-12 rounded-xl" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="company" className="text-xs tracking-widest uppercase text-muted-foreground">Company</Label>
                <Input id="company" data-testid="contact-company" value={form.company} onChange={onChange('company')} placeholder="Optional" className="mt-2 h-12 rounded-xl" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground">Message</Label>
                <Textarea id="message" data-testid="contact-message" value={form.message} onChange={onChange('message')} placeholder="What are you working on?" rows={5} className="mt-2 rounded-xl" />
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              data-testid="contact-submit"
              className="mt-6 rounded-full brand-gradient text-white hover:opacity-90 h-12 px-6"
            >
              {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Book a Conversation
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
