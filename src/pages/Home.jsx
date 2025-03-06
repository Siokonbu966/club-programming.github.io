import { SiX, SiFacebook, SiLine } from '@icons-pack/react-simple-icons';
import { ClipboardCopy } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';

export default function Home() {
  const text =
    'LTとは、"Lightning Talk"の略で簡単に言うと短いプレゼンテーションです！\n短い時間なのでカジュアルに行うことができて、よく勉強会やイベントなどで行われます！相手に伝えたい内容を短い時間で伝えられるかが重要です！';
  const shareURL = new URL(
    window.location.origin + window.location.pathname
  ).toString();

  function handleCopyUrl() {
    navigator.clipboard.writeText(shareURL).then(() => {
      alert('URLをコピーしました');
    });
  }

  return (
    <div className="relative">
      {/* ヘッダーセクション */}
      <main className="container mx-auto px-4 py-20">
        {/* ヒーローセクション */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            LT大会
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">LTの説明</p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <button className="rounded-lg bg-purple-500 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:bg-purple-600 hover:shadow-purple-500/35">
              詳細を見る
            </button>
            <button className="rounded-lg border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition-all duration-300 hover:border-purple-500/50 hover:text-white">
              サンプル
            </button>
          </div>
        </div>

        {/* フィーチャーセクション */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: 'サンプル１',
              description:
                'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
            },
            {
              title: 'サンプル２',
              description:
                'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
            },
            {
              title: 'サンプル３',
              description:
                'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-purple-500/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                <div className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
        {/* lt紹介セクション */}
        <div className="mt-24 flex flex-col items-center text-center">
          <h1 className="bg-gradient-to-l from-violet-600 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent">
            OVERVIEW
          </h1>
          <h2 className="text-2x1 mt-1 pb-4 text-slate-400">大会概要</h2>
          <div class="relative w-full max-w-3xl rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <div class="mx-1 mb-4 flex items-center border-b border-slate-200 pb-2">
              <h5 class="text-sm font-semibold text-white">LT大会とは</h5>
            </div>
            <p class="mb-4 block whitespace-pre-wrap font-light leading-normal text-slate-200">
              {text}
            </p>
          </div>
        </div>
        {/* シェアボタン */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent('サンプル')}&url=${encodeURIComponent(shareURL)}`,
                '_blank'
              )
            }
            className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition-all hover:opacity-90"
          >
            <SiX />
            <span>シェア</span>
          </button>

          <button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`,
                '_blank'
              )
            }
            className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-4 py-2 text-white transition-all hover:opacity-90"
          >
            <SiFacebook />
            <span>シェア</span>
          </button>

          <button
            onClick={() =>
              window.open(
                `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareURL)}`,
                '_blank'
              )
            }
            className="inline-flex items-center gap-2 rounded-lg bg-[#00B900] px-4 py-2 text-white transition-all hover:opacity-90"
          >
            <SiLine />
            <span>シェア</span>
          </button>

          <button
            onClick={handleCopyUrl}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white transition-all hover:opacity-90"
          >
            <ClipboardCopy />
            <span>URLをコピー</span>
          </button>
        </div>
      </main>
    </div>
  );
}
