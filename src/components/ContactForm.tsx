import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, MessageCircle } from "lucide-react";
import { FORM_WEBHOOK_URL } from "@/config/googleSheets";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email deve ter no máximo 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Telefone inválido" })
    .max(20, { message: "Telefone deve ter no máximo 20 caracteres" }),
  message: z.string()
    .trim()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Mensagem deve ter no máximo 1000 caracteres" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  resortName: string;
}

const ContactForm = ({ resortName }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    window.open("https://wa.link/followmeviagens", "_blank");
  };

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submitToGoogleSheets = async (data: ContactFormData) => {
    const response = await fetch(FORM_WEBHOOK_URL, {
      redirect: "follow",
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        resortName,
        sourcePage: window.location.href,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    const result = await response.text();
    return JSON.parse(result);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      
      // Validate data one more time before sending
      const validatedData = contactSchema.parse(data);
      
      // Submit to Google Sheets
      await submitToGoogleSheets(validatedData);
      
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Em breve entraremos em contato com você.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar solicitação",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-display font-medium text-foreground mb-6">
        Solicite um Orçamento
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome" 
                    {...field} 
                    disabled={isSubmitting}
                    maxLength={100}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    {...field} 
                    disabled={isSubmitting}
                    maxLength={255}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone/WhatsApp</FormLabel>
                <FormControl>
                  <Input 
                    type="tel" 
                    placeholder="(11) 99999-9999" 
                    {...field} 
                    disabled={isSubmitting}
                    maxLength={20}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Conte-nos sobre sua viagem dos sonhos..." 
                    className="min-h-[120px] resize-none"
                    {...field} 
                    disabled={isSubmitting}
                    maxLength={1000}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground rounded-2xl font-medium tracking-luxury transition-all duration-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar Solicitação
              </>
            )}
          </Button>
          
          <Button 
            type="button"
            variant="outline"
            onClick={handleWhatsAppClick}
            className="w-full h-12 rounded-2xl font-medium tracking-luxury transition-all duration-500"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contato direto por WhatsApp
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
