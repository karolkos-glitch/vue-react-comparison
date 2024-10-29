export function WrapperWithCodeInMarkdown({
  children,
  markdownContent,
}: {
  children: React.ReactNode;
  markdownContent: React.ReactNode[];
}) {
  return (
    <div className="flex justify-between gap-x-8 flex-wrap">
      {children}
      <section className="h-[70vh] pr-2 overflow-scroll">
        <div className="flex flex-col gap-y-4">
          {markdownContent.map((content) => (
            <div className="mockup-code p-4">
              <pre>{content}</pre>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
