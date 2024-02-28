'use client'


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Dropdown from "./Dropdown"
import { formSchema } from "@/lib/validator"
import { z } from "zod"
import { MARKET, PROPERTY_TYPE } from "@/constants"





function SearchForm() {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" p-6 w-full grid sm:grid-col-2 lg:grid-cols-4 gap-6 items-end bg-background rounded">
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Search by location" {...field} className="bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500  p-regular-16 px-4 py-3 focus-visible:ring-transparent" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="market"
          render={({ field }) => (
            <Dropdown selectList={MARKET} selectType='Market' onChangeHandler={field.onChange} value={field.value} />
          )}
        />
        <FormField
          control={form.control}
          name="property_type"
          render={({ field }) => (
            <Dropdown selectList={PROPERTY_TYPE} selectType="Property Type" onChangeHandler={field.onChange} value={field.value} />
          )}
        />
        <FormField
          control={form.control}
          name="min_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Min Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Minimum Price" {...field} className="bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500  p-regular-16 px-4 py-3 focus-visible:ring-transparent" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="max_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Maximum Price" {...field} className="bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500  p-regular-16 px-4 py-3 focus-visible:ring-transparent" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className=" col-start-1 col-end-[-1]">Submit</Button>
      </form>
    </Form>
  )
}

export default SearchForm