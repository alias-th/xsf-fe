"use client";

import { getCategory } from "@/actions/category";
import { Typography } from "@/components/Typography";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  set,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";
import { Inputs } from "./UploadProduct";

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

type SelectItemProps = {
  setValue: UseFormSetValue<Inputs>;
  register?: UseFormRegisterReturn<string>;
  error?: Merge<
    FieldError,
    FieldErrorsImpl<{
      value: string;
      label: string;
    }>
  >;
  value: {
    value: string;
    label: string;
  } | null;
};
const SelectItem = ({ register, error, setValue, value }: SelectItemProps) => {
  const [options, setOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  const { data, isPending } = useQuery({
    queryKey: ["categories-select"],
    queryFn: () => getCategory({ limit: 100, page: 1 }),
  });

  useEffect(() => {
    if (data?.data) {
      const opts = data.data.data.map((category) => ({
        value: category.id,
        label: category.name,
      }));
      setOptions(opts);
    }
  }, [data]);

  if (isPending || options.length === 0) {
    return (
      <Wrapper>
        <Typography
          $fontFamily="var(--font-poppins)"
          $variant="p"
          $lineHeight="1.5"
        >
          Category
        </Typography>

        <WrapperInput></WrapperInput>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Typography
        $fontFamily="var(--font-poppins)"
        $variant="p"
        $lineHeight="1.5"
      >
        Category
      </Typography>

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
          onChange={(e) => {
            setValue(
              "category",
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

export default SelectItem;
