import CustomButton from "@/components/Button";
import Center from "@/components/Center";
import { Typography } from "@/components/Typography";
import styled from "styled-components";
import { FileWithId } from "./UploadProduct";

const FileListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px 0;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-8);
  margin: 4px 0;
`;

type FileListProps = {
  acceptFiles: FileWithId[];
  filesErrors: FileWithId[];
  onDeleteAcceptFile: (id: string, lastFile?: boolean) => void;
  onDeleteRejectFile: (id: string) => void;
};
const FileList = ({
  acceptFiles,
  filesErrors,
  onDeleteAcceptFile,
  onDeleteRejectFile,
}: FileListProps) => {
  const lineActive = acceptFiles.length > 0 && filesErrors.length > 0;
  if (acceptFiles.length === 0 && filesErrors.length === 0) {
    return null;
  }
  return (
    <FileListContainer>
      {acceptFiles.map((item, index) => (
        <Center key={item.id} $justifyContent="space-between" $width="100%">
          <Center $gap="12px">
            <Typography
              $fontFamily="var(--font-poppins)"
              $fontSize="12px"
              $color="var(--color-1)"
              $truncate
              $width="500px"
            >
              {item.file.name}
            </Typography>
            <Typography
              $fontFamily="var(--font-poppins)"
              $fontSize="12px"
              $color="var(--color-1)"
            >
              {(item.file.size / 1024).toFixed(2)} KB
            </Typography>
          </Center>

          <CustomButton
            $width="60px"
            $height="24px"
            $backgroundColor="var(--color-7)"
            onClick={() =>
              onDeleteAcceptFile(item.id, acceptFiles.length === 1)
            }
          >
            <Typography
              $fontFamily="var(--font-poppins)"
              $fontSize="12px"
              $color="var(--white-1)"
            >
              Delete
            </Typography>
          </CustomButton>
        </Center>
      ))}
      {lineActive && <Line />}
      {filesErrors.map((item) => {
        return (
          <Center key={item.id} $justifyContent="space-between" $width="100%">
            <Center $gap="12px">
              <Typography
                $fontFamily="var(--font-poppins)"
                $fontSize="12px"
                $color="var(--color-1)"
                $truncate
                $width="500px"
              >
                {item.file.name}
              </Typography>
              <Typography
                $fontFamily="var(--font-poppins)"
                $fontSize="12px"
                $color="var(--color-7)"
              >
                {item.errors?.[0]}
              </Typography>
            </Center>

            <CustomButton
              $width="60px"
              $height="24px"
              $backgroundColor="var(--color-7)"
              onClick={() => onDeleteRejectFile(item.id)}
            >
              <Typography
                $fontFamily="var(--font-poppins)"
                $fontSize="12px"
                $color="var(--white-1)"
              >
                Delete
              </Typography>
            </CustomButton>
          </Center>
        );
      })}
    </FileListContainer>
  );
};

export default FileList;
