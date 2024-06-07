"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LockKeyhole, Mail } from "lucide-react"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  })
})


const page = () => {
  
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: ""
      },
    })
  
    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

  return (
    <div className="flex items-center justify-center w-full h-screen">
        <div className="w-96 rounded-md border px-6 py-8 bg-slate-900 opacity-95 ">
          <h1 className="text-2xl font-bold flex justify-center pb-6"> 
            Sign in to your account 😎
          </h1>

          <div className="pt-2">
            <Form {...form}>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center"> <Mail className=" pr-2" /> email</FormLabel>
                      <FormControl>
                        <Input placeholder="your_email@email.com" {...field} />
                      </FormControl>
                      <FormDescription className="absolute ">
                        <FormMessage />
                      </FormDescription>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center"> <LockKeyhole className=" pr-2"/>  password</FormLabel>
                      <FormControl>
                        <Input placeholder="your password" {...field} />
                      </FormControl>
                      <FormDescription className="absolute ">
                         <FormMessage />
                      </FormDescription>
                      
                    </FormItem>
                  )}
                />

                <div className="pt-4 flex justify-center">
                  <Button type="submit" >Submit</Button>

                </div>
                  

              </form>

            </Form>
          </div>
        
        </div>
        <div className="glowBox -z-10"></div>
    </div>

    
  );
}

export default page

