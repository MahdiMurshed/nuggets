import { Header } from "@/components/3-header-part-1/Header";

export default function Home() {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600 bg-white">
            <div className="z-0 flex-1">
                <Header />
                <main className="px-8 pt-24">
                    <h1 className="h-10 w-4/5 rounded bg-slate-200 text-2xl font-bold" />
                    <div className="mt-8 space-y-6">
                        {Array.from({ length: 3 }, (_, i) => i).map((i) => (
                            <div key={i} className="space-y-2 text-sm">
                                <p className="h-4 w-5/6 rounded bg-slate-200" />
                                <p className="h-4 rounded bg-slate-200" />
                                <p className="h-4 w-4/6 rounded bg-slate-200" />
                            </div>
                        ))}
                        <div className="h-64 rounded bg-slate-200"></div>
                        {Array.from({ length: 91 }, (_, i) => i).map((i) => (
                            <div key={i} className="space-y-2 text-sm">
                                <p className="h-4 w-5/6 rounded bg-slate-200" />
                                <p className="h-4 rounded bg-slate-200" />
                                <p className="h-4 w-4/6 rounded bg-slate-200" />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}


