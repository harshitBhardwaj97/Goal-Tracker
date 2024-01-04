type WarningProps = {
  warning: string | null;
};

export default function Warning({ warning }: WarningProps) {
  if (warning) {
    return (
      <h3
        style={{
          color: "red",
          fontWeight: "400",
        }}
      >
        {warning}
      </h3>
    );
  }
}
