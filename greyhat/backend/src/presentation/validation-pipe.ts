import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from "@nestjs/common";

export const mapMakeBadRequestMessages = (
  errors,
): Record<string, { message: string }> => {
  const payload: Record<string, { message: string }> = {};
  errors.map((v: any) => {
    const { property, constraints } = v;
    payload[property] = {
      message: constraints
        ? Object.values(constraints)[0] + ""
        : "Campo inválido",
    };
  });

  return payload;
};

export const AppValidationPipe = () =>
  new ValidationPipe({
    transform: true,
    whitelist: true,
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      console.log(validationErrors);
      return new BadRequestException(
        mapMakeBadRequestMessages(validationErrors),
      );
    },
  });
