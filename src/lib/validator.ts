import { z } from "zod"


export const formSchema = z.object({
    username: z.string().min(2).max(50),
    location: z.string(),
    market : z.string(),
    property_type : z.string(),
    min_price : z.string(),
    max_price : z.string(),

  })