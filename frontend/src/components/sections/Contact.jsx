import { useState } from "react";
import { profile } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github, Send, Copy } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\nReply to: ${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <section id="contact" className="py-20 sm:py-24" data-testid="contact-section">
      <SectionHeader number="06" eyebrow="Get in touch" title="Let's build something useful" />

      <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
        {/* Left: details */}
        <div className="space-y-5">
          <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
            I&apos;m open to Data Analyst roles, freelance analytics work,
            and interesting BI / capacity-planning conversations. Reach out —
            I reply within a day.
          </p>

          <div className="rounded-lg border border-border bg-card divide-y divide-border">
            <ContactRow
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              value={profile.email}
              onCopy={() => copy(profile.email)}
              href={`mailto:${profile.email}`}
              testId="contact-email"
            />
            <ContactRow
              icon={<Phone className="w-4 h-4" />}
              label="Phone"
              value={profile.phone}
              onCopy={() => copy(profile.phone)}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              testId="contact-phone"
            />
            <ContactRow
              icon={<Linkedin className="w-4 h-4" />}
              label="LinkedIn"
              value="fredy-dwi-hartarto"
              href={profile.linkedin}
              external
              testId="contact-linkedin"
            />
            <ContactRow
              icon={<Github className="w-4 h-4" />}
              label="GitHub"
              value="fredydjogonegoro"
              href={profile.github}
              external
              testId="contact-github"
            />
            <ContactRow
              icon={<MapPin className="w-4 h-4" />}
              label="Location"
              value={profile.location}
              testId="contact-location"
            />
          </div>
        </div>

        {/* Right: form */}
        <form
          onSubmit={onSubmit}
          data-testid="contact-form"
          className="rounded-lg border border-border bg-card p-5 sm:p-6 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base">Send a message</h3>
            <span className="font-mono text-[10px] text-muted-foreground">
              opens your mail client
            </span>
          </div>

          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
              Your name
            </label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              data-testid="contact-input-name"
              placeholder="Jane Smith"
              className="bg-background"
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
              Email
            </label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              data-testid="contact-input-email"
              placeholder="jane@company.com"
              className="bg-background"
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
              Message
            </label>
            <Textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              data-testid="contact-input-message"
              placeholder="Tell me about the role or project..."
              className="bg-background resize-none"
            />
          </div>
          <Button
            type="submit"
            data-testid="contact-submit"
            className="w-full h-11 rounded-md"
          >
            <Send className="w-4 h-4 mr-2" /> Send message
          </Button>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href, onCopy, external, testId }) {
  const content = (
    <div className="flex items-center gap-4 px-5 py-4 hover:bg-secondary/40 transition-colors">
      <span className="grid place-items-center w-9 h-9 rounded-md border border-border bg-background text-accent shrink-0">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
      {onCopy && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onCopy();
          }}
          data-testid={`${testId}-copy`}
          className="p-1.5 rounded-md text-muted-foreground hover:text-accent hover:bg-background transition-colors"
          aria-label={`Copy ${label}`}
        >
          <Copy className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        data-testid={testId}
        className="block"
      >
        {content}
      </a>
    );
  }
  return <div data-testid={testId}>{content}</div>;
}
