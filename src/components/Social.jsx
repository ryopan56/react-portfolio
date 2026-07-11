import Section from "./Section";

function Social() {
  return (
    <Section id="social" sectionClassName="bg-white">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
          Social
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          このサイトのソースコードはGitHubでも公開します。
        </h2>

        <a
          href="https://github.com/ryopan56/react-portfolio"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          GitHubを見る
        </a>
      </div>
    </Section>
  );
}
export default Social;
