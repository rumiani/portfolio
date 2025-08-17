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

const schema = z.object({
    title: z.string().min(3, "Title is too short"),
    body: z.string().min(10, "Body is too short"),
    email: z.string().email("Invalid email"),
    token: z.string().min(1, "Verification required"),
});

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const turnstile = useTurnstile();

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
            <form onSubmit={form.handleSubmit(onSubmit)} className=" min-h-96 w-full md:w-lg mx-auto space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Message title" {...field} />
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
                            <FormLabel>Body</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your message..." {...field} />
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
                                <Input placeholder="you@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="token"

                    render={({ field }) => (
                        <FormItem className="w-fit mx-auto h-16">
                            <Turnstile
                                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                                onVerify={(token) => field.onChange(token)}
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={loading}
                    className="mx-auto block w-32"
                >
                    {loading ? "Sending..." : "Send"}
                </Button>
            </form>
        </Form>
    );
}
