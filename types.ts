import { z } from "zod";

export type Address = {
	country: string;
	region?: string;
	city: string;
	street: string;
	postalCode: string;
};

export const Address: z.ZodType<Address> = z.object({
	country: z.string(),
	region: z.string().optional(),
	city: z.string(),
	street: z.string(),
	postalCode: z.string(),
});

export type User = {
	name: string;
	address: Address;
};

export const User: z.ZodType<User> = z.object({
	name: z.string(),
	address: Address,
});
