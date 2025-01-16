import { Field } from "@/components/ui/field";
import { Button, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { RiArrowRightLine } from "react-icons/ri";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Stack gap="6" align="flex-start" maxW="sm" width="full">
        <Field
          label={
            <Text ml="1" fontSize="lg">
              Name
            </Text>
          }
          invalid={!!errors.name}
        >
          <Input
            mt="1"
            size="lg"
            {...register("name", { required: "Name is required" })}
          />
        </Field>
        <Field
          label={
            <Text ml="1" fontSize="lg">
              Email
            </Text>
          }
          invalid={!!errors.email}
        >
          <Input
            mt="1"
            type="email"
            size="lg"
            {...register("email", { required: "Email is required" })}
          />
        </Field>
        <Field
          label={
            <Text ml="1" fontSize="lg">
              Message
            </Text>
          }
          invalid={!!errors.message}
        >
          <Textarea
            mt="1"
            resize="none"
            size="lg"
            rows={4}
            {...register("message", { required: "Bio is required" })}
          />
        </Field>
        <Button size="lg" type="submit" bg="primary">
          Send Message <RiArrowRightLine />
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;