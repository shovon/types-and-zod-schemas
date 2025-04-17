# Can type names conflict with value names in TypeScript?

So for a while, the convention was that people would do everything they can to avoid type and value names to never "conflict".

For example.

If we have a schema, and we want a type to align with said schema, the resulting zod type/schema pair would be written like so:

```typescript
// types.ts
import { z } from "zod";

export const userSchema = z.object({
	number: z.string(),
	address: z.string(),
});

export type User = z.Infer<typeof userSchema>;
```

Then, to make use of the schema and types, we do:

```typescript
import { userSchema, User } from "./types";

declare const someData: unknown;

let validated: User;

validated = userSchema.parse(someData);
```

But keeping things separate perhaps becomes overkill?

How about we just keep the names of schemas and types exactly the same?

```typescript
// types.ts
import { z } from "zod";

export const User = z.object({
	number: z.string(),
	address: z.string(),
});

export type User = z.Infer<typeof User>;
```

Then, when importing:

```typescript
import { User } from "./types";

declare const someData: unknown;

let validated: User;

validated = User.parse(someData);
```

The resulting code could come off as more expressive. I'm usually not a fan of abstractions, and I find consolidating the type `User` and the associated validator into a single type could be a form of abstraction, but it could also be argued that it doesn't abstract much, if anything, at all.

Thoughts?
