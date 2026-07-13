function ProjectDemo({ projectId }) {
  if (projectId === "react-portfolio") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-500">Current Site</p>

        <h4 className="mt-3 text-xl font-bold">
          現在表示中のポートフォリオサイトです
        </h4>

        <p className="mt-3 leading-7 text-slate-600">
          このページ自体がReactの学習成果物です。Header、Hero、About、Portfolio、Social、Footerをコンポーネントに分けて構成しています。
        </p>

        <ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          <li className="rounded-lg bg-white p-3 shadow-sm">
            コンポーネント分割
          </li>
          <li className="rounded-lg bg-white p-3 shadow-sm">
            props / children
          </li>
          <li className="rounded-lg bg-white p-3 shadow-sm">
            map()による一覧表示
          </li>
          <li className="rounded-lg bg-white p-3 shadow-sm">
            useStateによる表示切替
          </li>
        </ul>
      </div>
    );
  }

  if (projectId === "recipe-app") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-orange-50 p-6">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-orange-500">
                Recipe App Demo
              </p>
              <h4 className="mt-1 text-xl font-bold">今日のレシピ</h4>
            </div>

            <span className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
              レシピ追加
            </span>
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
            レシピ名や食材で検索
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-semibold text-slate-400">Main Dish</p>
              <h5 className="mt-2 font-bold">鶏肉の照り焼き</h5>
              <p className="mt-2 text-sm text-slate-600">
                鶏もも肉、しょうゆ、みりん、砂糖
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-semibold text-slate-400">Soup</p>
              <h5 className="mt-2 font-bold">具だくさん味噌汁</h5>
              <p className="mt-2 text-sm text-slate-600">
                豆腐、わかめ、長ねぎ、味噌
              </p>
            </article>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "gas-notion-system") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-blue-50 p-6">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-blue-500">
                GAS/Notion System Demo
              </p>
              <h4 className="mt-1 text-xl font-bold">相続手続プラン</h4>
            </div>

            <span className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
              新規商品パッケージ
            </span>
          </div>

          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <div className="min-w-0 flex-1 text-left">
                <p className="font-semibold">戸籍収集</p>
                <p className="mt-1 text-sm text-slate-500">優先度：高</p>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                完了
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <div className="min-w-0 flex-1 text-left">
                <p className="font-semibold">相続関係説明図作成</p>
                <p className="mt-1 text-sm text-slate-500">優先度：中</p>
              </div>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                進行中
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <div className="min-w-0 flex-1 text-left">
                <p className="font-semibold">遺産分割協議書作成</p>
                <p className="mt-1 text-sm text-slate-500">優先度：中</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                未着手
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default ProjectDemo;
