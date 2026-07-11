import Section from "./Section";

function About() {
  return (
    <Section id="about" sectionClassName="bg-white">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            学びながら、少しずつ作る。
          </h2>

          <p className="text-left mt-6 leading-8 text-slate-600">
            プログラミング初心者として、Reactを使ったWeb開発を学習中です。
            このサイトは、コンポーネント、props、stateの理解を目的に制作しています。
          </p>

          <p className="text-left mt-4 leading-8 text-slate-600">
            まずは小さく動くものを作り、仕組みを理解しながら少しずつ改善していきます。
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
           <img
            src="/images/profile.jpg"
            alt="プロフィール写真"
            className="h-80 w-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
export default About;
