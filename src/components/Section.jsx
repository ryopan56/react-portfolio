function Section({ id, sectionClassName = "", children }) {
  return (
    <section id={id} className={`scroll-mt-24 ${sectionClassName}`}>
      <div className="mx-auto max-w-5xl px-6 py-20">{children}</div>
    </section>
  );
}
export default Section;
