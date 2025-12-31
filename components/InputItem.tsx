import CustomInput from "@/components/Input";
import { Typography } from "@/components/Typography";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";
import Center from "./Center";
import { HTMLInputTypeAttribute } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const WrapperInput = styled.label`
  height: 56px;
  width: 100%;
  padding: 12px 24px 12px 24px;
  border: 1px solid var(--border-1);
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: text;
`;

type InputItemProps = {
  placeholder?: string;
  label?: string;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputItem = ({
  placeholder,
  label,
  register,
  error,
  type,
  onChange,
}: InputItemProps) => {
  return (
    <Wrapper>
      {label && (
        <Typography
          $fontFamily="var(--font-poppins)"
          $variant="p"
          $lineHeight="1.5"
        >
          {label}
        </Typography>
      )}
      <WrapperInput htmlFor={register?.name}>
        <CustomInput
          autoComplete="off"
          type={type || "text"}
          placeholder={placeholder}
          $placeholderColor="var(--color-3)"
          id={register?.name}
          onChange={onChange}
          {...register}
        />
        {error && (
          <Center $flex="0 0 auto" $justifyContent="flex-end">
            <Typography
              $fontSize="12px"
              $fontFamily="var(--font-poppins)"
              $color="var(--color-9)"
            >
              {error.message}
            </Typography>
          </Center>
        )}
      </WrapperInput>
    </Wrapper>
  );
};

export default InputItem;
