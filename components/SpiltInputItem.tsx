import CustomInput from "@/components/Input";
import { Typography } from "@/components/Typography";
import {
  FieldError,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import styled from "styled-components";
import { HTMLInputTypeAttribute, useRef, useState } from "react";
import Center from "./Center";
import { Inputs } from "@/layouts/upload-product/UploadProduct";

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
  justify-content: space-between;
  gap: 8px;
  cursor: text;
`;

const StyledLine = styled.span`
  font-size: 1.5rem;
  color: var(--color-3);
  padding-right: 8px;
`;

type InputItemProps = {
  placeholder?: string;
  label?: string;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: UseFormSetValue<Inputs>;
};

type SplitParts = {
  cat: string;
  color: string;
  num: string;
};
const SplitInputItem = ({
  label,
  register,
  type,
  error,
  setValue,
}: InputItemProps) => {
  const [parts, setParts] = useState<SplitParts>({
    cat: "",
    color: "",
    num: "",
  });
  const [errorText, setErrorText] = useState<string>("");
  const [active, setActive] = useState<string>("cat");
  const colorRef = useRef<HTMLInputElement | null>(null);
  const numRef = useRef<HTMLInputElement | null>(null);
  const catRef = useRef<HTMLInputElement | null>(null);

  const validateLength = (value: string, maxLength: number) => {
    if (value.length > maxLength) {
      return value.slice(0, maxLength);
    }
    return value;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    part: string,
    nextRef?: React.RefObject<HTMLInputElement | null>,
    maxLength: number = 0
  ) => {
    let value = e.target.value.toUpperCase();
    switch (part) {
      case "cat": {
        const error = new RegExp(/[^A-Z]/g).test(value);
        if (error) {
          setErrorText("Category must be letters A-Z only");
          break;
        } else {
          setErrorText("");
        }
        value = value.replace(/[^A-Z]/g, "");
        value = validateLength(value, maxLength);
        setParts({ ...parts, cat: value });
        setValue("code", `${value}${parts.color}${parts.num}`, {
          shouldValidate: true,
        });
        if (value.length >= maxLength && nextRef?.current) {
          setActive("color");
          (nextRef.current as HTMLInputElement).focus();
        }
        break;
      }
      case "color": {
        const error = new RegExp(/[^A-Z]/g).test(value);
        if (error) {
          setErrorText("Color must be letters A-Z only");
          break;
        } else {
          setErrorText("");
        }
        value = value.replace(/[^A-Z]/g, "");
        value = validateLength(value, maxLength);
        setParts({ ...parts, color: value });
        setValue("code", `${parts.cat}${value}${parts.num}`, {
          shouldValidate: true,
        });
        if (value.length >= maxLength && nextRef?.current) {
          setActive("num");
          (nextRef.current as HTMLInputElement).focus();
        }
        break;
      }
      case "num":
        const error = new RegExp(/[^0-9]/g).test(value);
        if (error && parts.num.length !== 3) {
          setErrorText("Number must be digits 0-9 only");
          break;
        } else {
          setErrorText("");
        }
        value = value.replace(/[^0-9]/g, "");
        value = validateLength(value, maxLength);
        setParts({ ...parts, num: value });
        setValue("code", `${parts.cat}${parts.color}${value}`, {
          shouldValidate: true,
        });
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    prevRef: React.RefObject<HTMLInputElement | null> | null,
    part: keyof SplitParts
  ) => {
    if (e.key === "Backspace" && parts[part] === "" && prevRef) {
      setActive(part === "color" ? "cat" : "color");
      prevRef?.current?.focus();
    }
  };
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
      <input
        {...register}
        onFocus={() => {
          const cat = parts.cat;
          const color = parts.color;
          const num = parts.num;
          if (cat.length !== 2) {
            catRef.current?.focus();
            setActive("cat");
            return;
          }
          if (color.length !== 3) {
            colorRef.current?.focus();
            setActive("color");
            return;
          }
          if (num.length !== 3) {
            numRef.current?.focus();
            setActive("num");
            return;
          }
        }}
        style={{
          border: "none",
          height: "0px",
          width: "0px",
          padding: "0px",
        }}
      />
      <WrapperInput htmlFor={active}>
        <Center $flex="0 0 1" $gap="8px">
          <CustomInput
            onFocus={() => {
              setActive("cat");
            }}
            $maxWidth="30px"
            autoComplete="off"
            type={type || "text"}
            placeholder={"AA"}
            $placeholderColor="var(--color-3)"
            id={"cat"}
            ref={catRef}
            onChange={(e) => {
              handleChange(e, "cat", colorRef, 2);
            }}
            value={parts.cat}
            onKeyDown={(e) => handleKeyDown(e, null, "cat")}
          />
          <StyledLine>-</StyledLine>
          <CustomInput
            onFocus={() => {
              setActive("color");
            }}
            $maxWidth="45px"
            autoComplete="off"
            type={type || "text"}
            placeholder={"AAA"}
            $placeholderColor="var(--color-3)"
            id={"color"}
            ref={colorRef}
            onChange={(e) => {
              handleChange(e, "color", numRef, 3);
            }}
            onKeyDown={(e) => handleKeyDown(e, catRef, "color")}
            value={parts.color}
          />
          <StyledLine>-</StyledLine>
          <CustomInput
            onFocus={() => {
              setActive("num");
            }}
            $maxWidth="100%"
            autoComplete="off"
            type={type || "text"}
            placeholder={"000"}
            $placeholderColor="var(--color-3)"
            id={"num"}
            ref={numRef}
            onChange={(e) => {
              handleChange(e, "num", numRef, 3);
            }}
            onKeyDown={(e) => handleKeyDown(e, colorRef, "num")}
            value={parts.num}
          />
        </Center>

        <Center $justifyContent="flex-end">
          {(errorText || error?.message) && (
            <Typography
              $fontSize="12px"
              $fontFamily="var(--font-poppins)"
              $color="var(--color-9)"
            >
              {errorText || error?.message}
            </Typography>
          )}
        </Center>
      </WrapperInput>
    </Wrapper>
  );
};

export default SplitInputItem;
