"use client";

import Center from "@/components/Center";
import { Typography } from "@/components/Typography";
import UploadFile from "@/components/UploadFile";
import styled from "styled-components";
import InputItem from "../../components/InputItem";
import CustomButton from "@/components/Button";
import { useDropzone } from "react-dropzone";
import { useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FileList from "./FileList";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "@/actions/product";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const UploadContainer = styled.div`
  width: 100%;
  max-width: 924px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const fileValidator = (file: File) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return {
      code: "file-too-large",
      message: `File is larger than ${maxSize / (1024 * 1024)}MB`,
    };
  }

  if (!["image/jpeg", "image/png"].includes(file.type)) {
    return {
      code: "file-invalid-type",
      message: "Only JPEG and PNG files are allowed",
    };
  }

  return null;
};

export type FileWithId = { file: File; id: string; errors?: string[] };
type Inputs = {
  productName: string;
  code: string;
  price: string;
  images: string;
};

const UploadProduct = () => {
  const [files, setFiles] = useState<FileWithId[]>([]);
  const [filesErrors, setFilesErrors] = useState<FileWithId[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
    clearErrors,
  } = useForm<Inputs>();
  const resetForm = () => {
    setFiles([]);
    setFilesErrors([]);
    reset({ images: "", code: "", price: "", productName: "" });
  };
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      if (data.error) {
        toast.error(`Error: ${data.error}`);
        return;
      }
      toast.success("Product created successfully!");
      resetForm();
    },
    onError: (error: AxiosError) => {
      toast.error(`Error: ${error.response?.data || error.message}`);
    },
  });
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    validator: fileValidator,
    onDrop: (acceptedFiles, fileRejections) => {
      const rejectedFilesWithId = fileRejections.map(({ file, errors }) => {
        return {
          file,
          id: uuidv4(),
          errors: errors.map((e) => e.message),
        };
      });
      const filesWithId = acceptedFiles.map((file) => ({
        file,
        id: uuidv4(),
      }));

      setFiles((prevFiles) => [...prevFiles, ...filesWithId].slice(0, 6)); // limit to 6 files
      setFilesErrors((prevErrors) => [...prevErrors, ...rejectedFilesWithId]);

      // Update react-hook-form value
      if (acceptedFiles.length > 0) {
        setValue("images", "ok");
        trigger("images");
      }
    },
    disabled: files.length >= 6,
  });

  const dropZoneProps = useMemo(
    () => ({
      getRootProps,
      getInputProps,
      isDragActive,
    }),
    [getInputProps, getRootProps, isDragActive]
  );

  const onDeleteAcceptFile = useCallback((id: string, lastFile?: boolean) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    setValue("images", lastFile ? "" : "ok");
  }, []);

  const onDeleteRejectFile = useCallback((id: string) => {
    setFilesErrors((prevErrors) => prevErrors.filter((file) => file.id !== id));
  }, []);

  const acceptedFileCount = files.length;

  const onValid: SubmitHandler<Inputs> = (data) => {
    if (mutation.isPending) return;

    const formData = new FormData();
    for (const item of files) {
      formData.append("files", item.file);
    }
    formData.append("name", data.productName);
    formData.append("code", data.code);
    formData.append("price", data.price);

    mutation.mutate(formData);
  };

  const onInvalid: SubmitErrorHandler<Inputs> = (error) => {
    console.log(error);
  };

  return (
    <>
      <Typography
        $fontFamily="var(--font-poppins)"
        $fontSize="32px"
        $fontWeight="600"
        $color="var(--color-1)"
      >
        Upload Product
      </Typography>
      <UploadContainer>
        <Center
          $gap="10px"
          $justifyContent="flex-start"
          $direction="column"
          $alignItems="flex-start"
        >
          <Typography
            $variant="p"
            $fontFamily="var(--font-poppins)"
            $color="var(--color-1)"
          >
            Upload image
          </Typography>

          <UploadFile
            register={register("images", { required: "Required" })}
            error={errors.images}
            dropZoneProps={dropZoneProps}
            acceptedFileCount={acceptedFileCount}
          />

          <FileList
            acceptFiles={files}
            filesErrors={filesErrors}
            onDeleteAcceptFile={onDeleteAcceptFile}
            onDeleteRejectFile={onDeleteRejectFile}
          />

          <form
            id="add-product"
            style={{ width: "100%" }}
            onSubmit={handleSubmit(onValid, onInvalid)}
          >
            <InputContainer>
              <InputItem
                type="text"
                label="Product name"
                placeholder="Product name"
                register={register("productName", { required: "Required" })}
                error={errors.productName}
              />
              <InputItem
                type="text"
                label="Code"
                placeholder="Code"
                register={register("code", {
                  required: "Required",
                  maxLength: { value: 10, message: "Max length is 10" },
                  minLength: { value: 6, message: "Min length is 6" },
                })}
                error={errors.code}
              />
              {/* float number text */}
              <InputItem
                type="text"
                label="Price"
                placeholder="Price"
                register={register("price", {
                  required: "Required",
                  pattern: {
                    value: /^\d+(\.\d+)?$/,
                    message: "Must be a number",
                  },
                })}
                error={errors.price}
              />
            </InputContainer>

            <Center
              $width="100%"
              $gap="26px"
              style={{ marginTop: "calc(72px - 10px)" }}
              $alignItems="center"
              $justifyContent="center"
            >
              <Link href="/products">
                <CustomButton
                  htmlType="button"
                  $width="190px"
                  $height="56px"
                  $border="1px solid var(--color-3)"
                  $backgroundColor="var(--white-1)"
                  onClick={() => {
                    clearErrors();
                    resetForm();
                  }}
                >
                  <Typography $variant="p" $fontFamily="var(--font-prompt)">
                    ยกเลิก
                  </Typography>
                </CustomButton>
              </Link>
              <CustomButton
                $width="190px"
                $height="56px"
                $backgroundColor="var(--color-14)"
                loading={mutation.isPending}
              >
                <Typography
                  $variant="p"
                  $color="var(--white-1)"
                  $fontFamily="var(--font-prompt)"
                >
                  ยืนยัน
                </Typography>
              </CustomButton>
            </Center>
          </form>
        </Center>
      </UploadContainer>
    </>
  );
};

export default UploadProduct;
