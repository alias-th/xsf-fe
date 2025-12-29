import CustomInput from "@/components/Input";
import { Typography } from "@/components/Typography";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const WrapperInput = styled.div`
  height: 56px;
  width: 100%;
  padding: 12px 24px 12px 24px;
  border: 1px solid var(--border-1);
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

type InputItemProps = {
  placeholder?: string;
  label: string;
};
const InputItem = ({ placeholder, label }: InputItemProps) => {
  return (
    <Wrapper>
      <Typography
        $fontFamily="var(--font-poppins)"
        $variant="p"
        $lineHeight="1.5"
      >
        {label}
      </Typography>
      <WrapperInput>
        <CustomInput
          placeholder={placeholder}
          $placeholderColor="var(--color-3)"
        />
      </WrapperInput>
    </Wrapper>
  );
};

export default InputItem;
