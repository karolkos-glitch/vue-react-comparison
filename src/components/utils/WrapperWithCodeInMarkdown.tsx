export function WrapperWithCodeInMarkdown({
  children,
  markdownContent,
}: {
  children: React.ReactNode;
  markdownContent: React.ReactNode;
}) {
  return (
    <div className="flex justify-between gap-x-8 flex-wrap">
      {children}
      <div className="mockup-code p-4">
        <pre>{markdownContent}</pre>
      </div>
    </div>
  );
}
