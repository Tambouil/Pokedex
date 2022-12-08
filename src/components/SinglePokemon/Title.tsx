interface Props {
  content: string;
  backgroundSelected: string;
}

const Title = ({ content, backgroundSelected }: Props) => {
  return (
    <span className="text-center font-bold my-[1.5rem] text-lg" style={{ color: backgroundSelected }}>
      {content}
    </span>
  );
};

export default Title;
