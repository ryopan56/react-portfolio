function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-28"
    >
      <p className="inline-flex rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">
        React Learning Project
      </p>

      <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
        Reactを学びながら、
        <br />
        Webサイトを作っています。
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        ReactとTailwind
        CSSを使い、使いやすく分かりやすいWebサイト作りを学んでいます。
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#portfolio"
          className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          作品を見る
        </a>

        <a
          href="#about"
          className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold transition hover:bg-slate-100"
        >
          自己紹介を見る
        </a>
      </div>
    </section>
  );
}
export default Hero;
