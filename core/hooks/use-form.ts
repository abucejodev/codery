import { useEffect, useState } from "react";
import { z, ZodFormattedError } from "zod";

type Payload<Schema> = {
  schema: z.Schema<Schema>;
  fields: Schema;
  onSubmit: (result: z.SafeParseReturnType<Schema, Schema>) => void;
};

type Status = "neutral" | "bad" | "good";

export const useForm = <Schema>({
  schema,
  fields,
  onSubmit,
}: Payload<Schema>) => {
  type Error = ZodFormattedError<Schema> | undefined;
  const [error, setError] = useState<Error>(undefined);
  const [status, setStatus] = useState<Status>("neutral");

  const handleValidation = () => {
    const result = schema.safeParse(fields);
    onSubmit(result);
    if (!result.success) {
      setError(result.error.format());
      setStatus("bad");
    } else {
      setError(undefined);
      setStatus("good");
    }
  };

  useEffect(() => {
    status !== "neutral" && handleValidation();
  }, [fields]);

  return {
    handleSubmit: handleValidation,
    error,
    status,
  };
};