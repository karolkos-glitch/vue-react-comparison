export function ComponentDisplayWrapper({
  children,
  type = "react",
}: {
  children: React.ReactNode;
  type: "vue" | "react";
}) {
  return (
    <section>
      <h2
        className={`font-extrabold ${
          type === "react" ? "text-primary" : "text-secondary"
        }`}
      >
        {type.toUpperCase()}
      </h2>
      <div
        className={`border p-4 h-full ${
          type === "react" ? "border-primary" : "border-secondary"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
