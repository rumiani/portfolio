"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Turnstile, { useTurnstile } from "react-turnstile";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { Spinner } from "@/components/general/Spinner";
import { useLanguageStore } from "@/stores/useLanguageStore";


export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const turnstile = useTurnstile();
    const t = useTranslations("ContactPage");
    const { language } = useLanguageStore();

    const schema = z.object({
        title: z.string().min(3, t("formTitleError")),
        body: z.string().min(10, t("formBodyError")),
        email: z.email(t("formEmailError")),
        token: z.string().min(1, t("turnstileError")),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: { title: "", body: "", email: "", token: "" },
    });

    const onSubmit = async (values: z.infer<typeof schema>) => {
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            if (res.ok) {
                form.reset();
                toast.success("Message sent!");
                turnstile.reset();
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    };

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="h-fit w-full md:w-lg mx-auto space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("formTitle")}</FormLabel>
                            <FormControl>
                                <Input placeholder={t("formTitlePlaceholder")} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("formBody")}</FormLabel>
                            <FormControl>
                                <Textarea placeholder={t("formBodyPlaceholder")} {...field} />
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
                            <FormLabel>{t("formEmail")}</FormLabel>
                            <FormControl>
                                <Input placeholder={t("formEmailPlaceholder")} type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="token"
                    render={({ field }) => (
                        <FormItem className="w-fit mx-auto min-h-16">
                            <Turnstile
                            language={language}
                                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                                onVerify={(token) => field.onChange(token)}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button variant="outline" type="submit" disabled={loading}
                    className="mx-auto w-32 flex flex-row gap-2"
                ><span>{t("formSubmit")}</span>
                    {loading && <Spinner diameter={15} border={2} />}
                </Button>
            </form>
        </Form>
    );
}
