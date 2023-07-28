export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>about navbar</div>
      {children}
    </div>
  );
}
