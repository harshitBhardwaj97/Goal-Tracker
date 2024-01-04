type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
}
