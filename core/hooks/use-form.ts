import { useEffect, useState } from "react";
import { z, type ZodFormattedError } from "zod";

type Payload<Schema> = {
  schema: z.Schema<Schema>;
  fields: Schema;
  onSubmit: (result: z.SafeParseReturnType<Schema, Schema>) => void;
};

type Status = "neutral" | "bad" | "good";

const useForm = <Schema>({ schema, fields, onSubmit }: Payload<Schema>) => {
  type Errors = ZodFormattedError<Schema> | undefined;
  const [errors, setErrors] = useState<Errors>(undefined);
  const [status, setStatus] = useState<Status>("neutral");

  const handleValidation = () => {
    const result = schema.safeParse(fields);
    onSubmit(result);
    if (!result.success) {
      setErrors(result.error.format());
      setStatus("bad");
    } else {
      setErrors(undefined);
      setStatus("good");
    }
  };

  const handleSubmit = () => {
    handleValidation();
  };

  useEffect(() => {
    status !== "neutral" && handleValidation();
  }, [fields]);

  return { handleSubmit, status, errors };
};

export default useForm;
