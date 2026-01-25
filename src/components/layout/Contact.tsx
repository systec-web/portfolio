import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { X, ArrowRight } from "lucide-react";
import { toast } from "sonner";

type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  details: string;
};

export const Contact = ({ onClose }: { onClose?: () => void }) => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      details: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured. Please try again later.");
      return;
    }

    try {
      const templateParams = {
        name: values.name,
        email: values.email,
        phone: values.phone ?? "",
        project_type: values.projectType,
        details: values.details,
      };
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      toast.success("Thanks! We'll get back to you within 24 hours.", { duration: 5000 });
      form.reset();
      if (onClose) onClose();
    } catch (error) {
      toast.error("Could not send your message. Please try again.");
      console.error("Email send failed", error);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="max-w-3xl mx-auto relative">
        {onClose && (
          <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 p-2 text-muted-foreground hover:text-primary">
            <X className="w-4 h-4" />
          </button>
        )}
        <h2 className="text-3xl font-serif font-bold mb-4">Get Your Custom Website Quote</h2>
        <p className="text-muted-foreground mb-2">Ready to launch your dream website?</p>
        <p className="text-muted-foreground mb-4">Takes just 45 seconds to share your idea. Receive a custom quote within 24 hours that includes:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6 text-muted-foreground">
          <li><strong>Timeline & pricing</strong> — fair and transparent pricing</li>
          <li><strong>Mockup design</strong> — a preview tailored to your vision</li>
          <li><strong>WhatsApp support</strong> — direct communication during the process</li>
        </ul>
        <p className="text-sm text-muted-foreground mb-6">* Indicates required question</p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4"
            noValidate
          >
            <FormField
              name="name"
              control={form.control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormDescription>Not shared</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone / WhatsApp</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 555 555 555" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="projectType"
              control={form.control}
              rules={{ required: "Project Type is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type *</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="landing">Landing Page</SelectItem>
                        <SelectItem value="redesign">Redesign</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="details"
              control={form.control}
              rules={{
                required: "Project details are required",
                minLength: { value: 10, message: "Please provide more details" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Project details or paste your proposal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button
                type="submit"
                variant="cta"
                disabled={form.formState.isSubmitting}
                className="w-full md:w-auto rounded-full px-6 py-3 text-lg font-semibold shadow-lg flex items-center justify-center gap-3 transition-transform transition-colors active:scale-95 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {form.formState.isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
