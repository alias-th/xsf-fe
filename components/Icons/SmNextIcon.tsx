type Props = {
  color?: string;
};
const SMNextIcon = ({ color }: Props) => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.749999 0.75L6.75 6.75L0.750002 12.75"
        stroke={color || "#E13B30"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SMNextIcon;
