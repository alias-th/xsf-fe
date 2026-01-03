"use client";
const Select = dynamic(() => import("react-select"), {
  ssr: false,
});
import styled from "styled-components";
import { Typography } from "./Typography";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import dynamic from "next/dynamic";

type CustomSelectProps = {
  setValue: UseFormSetValue<any>;
  options: { value: string; label: string }[];
  register?: UseFormRegisterReturn<string>;
  label?: string;
  value: {
    value: string;
    label: string;
  } | null;
  error?: Merge<
    FieldError,
    FieldErrorsImpl<{
      value: string;
      label: string;
    }>
  >;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const WrapperInput = styled.label`
  height: 56px;
  width: 100%;
  padding: 12px 24px 12px 14px;
  border: 1px solid var(--border-1);
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: text;
`;

const CustomSelect = ({
  options,
  label,
  register,
  setValue,
  value,
  error,
}: CustomSelectProps) => {
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

      <WrapperInput>
        <Select
          placeholder="Select category"
          options={options}
          styles={{
            placeholder: (base) => {
              return {
                ...base,
                color: "var(--color-3)",
                margin: 0,
                padding: 0,
              };
            },
            group: (base) => {
              return {
                ...base,
                padding: 0,
                margin: 0,
              };
            },
            input: (base) => {
              return {
                ...base,
                padding: 0,
                margin: 0,
              };
            },
            container: (base) => {
              return {
                ...base,
                padding: 0,
                width: "100%",
              };
            },
            control: (base) => {
              return {
                ...base,
                padding: 0,
                width: "100%",
                boxShadow: "none",
                border: "none",
              };
            },
          }}
          name={register?.name}
          ref={register?.ref}
          onChange={(e: any) => {
            setValue(
              register?.name || "",
              {
                value: e?.value || "",
                label: e?.label || "",
              },
              { shouldValidate: true }
            );
          }}
          onBlur={register?.onBlur}
          value={value ? value : null}
        ></Select>

        {error && (
          <Typography
            $fontSize="12px"
            $fontFamily="var(--font-poppins)"
            $color="var(--color-9)"
          >
            {error.message}
          </Typography>
        )}
      </WrapperInput>
    </Wrapper>
  );
};

export default CustomSelect;
